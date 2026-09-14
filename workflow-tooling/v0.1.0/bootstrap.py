"""Plan first; publish a complete .workflow directory without overwriting files."""
import argparse
import hashlib
import json
import os
from pathlib import Path, PurePosixPath
import re
import tempfile


def encoded(value):
    return (json.dumps(value, ensure_ascii=False, sort_keys=True, indent=2) + '\n').encode('utf-8')


def digest(data):
    return hashlib.sha256(data).hexdigest()


def relative(value):
    if not isinstance(value, str) or not value or any(c in value for c in '\\:#\x00'):
        raise ValueError('INVALID_RELATIVE_PATH')
    parts = value.split('/')
    if PurePosixPath(value).is_absolute() or any(p in ('', '.', '..') for p in parts):
        raise ValueError('PATH_ESCAPE')
    for p in parts:
        if p.endswith((' ', '.')) or re.match(r'^(CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])(\.|$)', p, re.I):
            raise ValueError('WINDOWS_RESERVED_PATH')
    return value


def safe(root, value):
    path = root / relative(value)
    current = root
    for part in PurePosixPath(value).parts:
        current = current / part
        if current.is_symlink() or (hasattr(current, 'is_junction') and current.is_junction()):
            raise ValueError('LINK_NOT_ALLOWED')
    if not path.resolve().is_relative_to(root.resolve()):
        raise ValueError('PATH_ESCAPE')
    return path


def load_package(package):
    root = Path(package).resolve()
    raw = (root / 'release-manifest.json').read_bytes()
    manifest = json.loads(raw)
    if manifest.get('package') != 'industrial-b2b' or not isinstance(manifest.get('installable'), bool):
        raise ValueError('INVALID_MANIFEST')
    payload = {'release-manifest.json': raw}
    identities = {'release-manifest.json'}
    for item in manifest['files']:
        name = relative(item['path'])
        if name.casefold() in identities:
            raise ValueError('DUPLICATE_PACKAGE_PATH')
        identities.add(name.casefold())
        data = safe(root, name).read_bytes()
        if len(data) != item['bytes'] or digest(data) != item['sha256']:
            raise ValueError('PACKAGE_IDENTITY_DRIFT: ' + name)
        payload[name] = data
    actual = {p.relative_to(root).as_posix() for p in root.rglob('*') if p.is_file()}
    if actual != set(payload):
        raise ValueError('PACKAGE_INVENTORY_DRIFT')
    return manifest, payload


def validate_config(config):
    allowed = {'format_version', 'site_id', 'project_root', 'package_version', 'profile',
               'bindings', 'integration', 'site_url', 'site_scope', 'development_root',
               'development_rules', 'runtime', 'industry'}
    if set(config) - allowed or config.get('format_version') != 1:
        raise ValueError('INVALID_CONFIG_FIELDS')
    if not re.fullmatch(r'[a-z0-9]+(?:-[a-z0-9]+)*', config.get('site_id', '')):
        raise ValueError('INVALID_SITE_ID')
    if config.get('profile') != 'wordpress-nextjs':
        raise ValueError('UNSUPPORTED_PROFILE')
    root = Path(config['project_root'])
    if not root.is_absolute() or not root.is_dir() or root.is_symlink():
        raise ValueError('PROJECT_ROOT_MUST_BE_EXISTING_DIRECTORY')
    root = root.resolve()
    bindings = config['bindings']
    if not isinstance(bindings, dict) or not {'rules', 'status', 'index'} <= bindings.keys():
        raise ValueError('MISSING_BOOTSTRAP_BINDING')
    for name, value in bindings.items():
        if value is not None:
            safe(root, value)
    for name, snippet in config.get('integration', {}).items():
        safe(root, name)
        if name.startswith('.workflow/') or not isinstance(snippet, str) or '.workflow/INSTANCE_ENTRY.md' not in snippet:
            raise ValueError('INVALID_INTEGRATION_ENTRY')
    for key in ('rules', 'status', 'index'):
        value = bindings[key]
        if not value or (value != '.workflow/INSTANCE_ENTRY.md' and not safe(root, value).is_file()):
            raise ValueError('MISSING_BOOTSTRAP_FILE: ' + key)
    if bindings['rules'] != '.workflow/INSTANCE_ENTRY.md' and bindings['rules'] not in config.get('integration', {}):
        raise ValueError('RULES_INTEGRATION_REQUIRED')
    if (root / 'AGENTS.md').exists() and bindings['rules'] == '.workflow/INSTANCE_ENTRY.md':
        raise ValueError('EXISTING_RULES_MUST_BE_MAPPED')
    scope = config.get('site_scope')
    if scope is not None and not re.fullmatch(r'[a-z0-9]+(?:-[a-z0-9]+)*', scope):
        raise ValueError('INVALID_SCOPE')
    return root


def bundle(package, config):
    root = validate_config(config)
    manifest, payload = load_package(package)
    if config['package_version'] != manifest['version']:
        raise ValueError('PACKAGE_VERSION_MISMATCH')
    files = {'package/' + name: data for name, data in payload.items()}
    config_data = encoded(config)
    files['site.config.json'] = config_data
    files['workflow.lock.json'] = encoded({'format_version': 1, 'site_id': config['site_id'],
        'package': manifest['package'], 'package_version': manifest['version'],
        'manifest_sha256': digest(payload['release-manifest.json']), 'config_sha256': digest(config_data),
        'package_root': 'package', 'phase': 'INSTALLED_ONLY_NO_STAGE_APPROVAL',
        'candidate': not manifest['installable']})
    files['INSTANCE_ENTRY.md'] = (f"# {config['site_id']} 工作流入口\n\n"
        "先读取本站原规则与 site.config.json 的入口映射，再读取包内合同。\n\n"
        "[总控](package/agents/project-orchestrator/agent.md) · "
        "[实例绑定](package/contracts/instance-bindings.md) · [工作流](package/README.md)\n\n"
        "安装状态仅为 INSTALLED；事实、研究、页面与Gate均未因此获批。\n"
        "空白实例当前为 UNSTARTED，企业资料及实际授权待提供。已有项目以映射状态页为准。\n"
        "本站原规则优先；常设关闭、跨任务消息、开发和发布均须本站有效授权。\n"
        "阶段输入缺失按实际消费阶段补齐，不生成虚假PASS。\n").encode('utf-8')
    return root, manifest, files


def plan(package, config):
    root, manifest, desired = bundle(package, config)
    rows = []
    for name, data in sorted(desired.items()):
        p = safe(root, '.workflow/' + name)
        old = digest(p.read_bytes()) if p.is_file() else None
        action = 'KEEP' if old == digest(data) else ('CONFLICT' if p.exists() else 'CREATE')
        rows.append({'path': '.workflow/' + name, 'action': action, 'before_sha256': old, 'after_sha256': digest(data)})
    target = safe(root, '.workflow')
    if target.exists():
        if not target.is_dir():
            rows.append({'path': '.workflow', 'action': 'CONFLICT', 'reason': 'NOT_DIRECTORY'})
        else:
            for p in target.rglob('*'):
                name = p.relative_to(root).as_posix(); safe(root, name)
                if p.is_file() and p.relative_to(target).as_posix() not in desired:
                    rows.append({'path': name, 'action': 'CONFLICT', 'reason': 'UNTRACKED_FILE'})
            if any(row['action'] == 'CREATE' for row in rows):
                rows.append({'path': '.workflow', 'action': 'CONFLICT', 'reason': 'PARTIAL_INSTALL_OR_UPGRADE_REQUIRES_MIGRATION'})
    inputs = {}
    for key, name in config['bindings'].items():
        if name and not name.startswith('.workflow/'):
            p = safe(root, name)
            inputs[key] = {'path': name, 'sha256': digest(p.read_bytes()) if p.is_file() else None}
    for name, snippet in sorted(config.get('integration', {}).items()):
        p = safe(root, name)
        raw = p.read_bytes() if p.is_file() else b''
        rows.append({'path': name, 'action': 'KEEP' if snippet in raw.decode('utf-8-sig') else 'MERGE_REQUIRED',
                     'before_sha256': digest(raw) if p.is_file() else None, 'proposed_append': snippet})
    result = {'format_version': 1, 'site_id': config['site_id'], 'project_root': str(root),
              'manifest_sha256': digest((Path(package) / 'release-manifest.json').read_bytes()),
              'config_sha256': digest(encoded(config)), 'installable_release': manifest['installable'],
              'inputs': inputs, 'files': rows,
              'status': 'BLOCKED' if any(x['action'] in ('CONFLICT', 'MERGE_REQUIRED') for x in rows) else 'READY'}
    result['plan_sha256'] = digest(encoded(result))
    return result


def apply(package, config, reviewed, allow_candidate=False):
    current = plan(package, config)
    if current != reviewed:
        raise ValueError('STALE_OR_ALTERED_PLAN')
    if current['status'] != 'READY':
        raise ValueError('PLAN_BLOCKED')
    if not current['installable_release'] and not allow_candidate:
        raise ValueError('CANDIDATE_FOR_ISOLATION_TESTS_ONLY')
    if all(x['action'] == 'KEEP' for x in current['files']):
        return {'status': 'UNCHANGED', 'plan_sha256': current['plan_sha256']}
    root, _, files = bundle(package, config)
    # Same-volume staging; never write individual files into an existing installation.
    with tempfile.TemporaryDirectory(prefix='.workflow-stage-', dir=root) as staging:
        stage = Path(staging)
        content = stage / 'content'; content.mkdir()
        for name, data in files.items():
            p = safe(content, name); p.parent.mkdir(parents=True, exist_ok=True); p.write_bytes(data)
        if any((content / n).read_bytes() != data for n, data in files.items()):
            raise ValueError('STAGING_IDENTITY_FAILURE')
        if plan(package, config) != current:
            raise ValueError('INPUT_CHANGED_DURING_STAGING')
        destination = safe(root, '.workflow')
        if destination.exists():
            raise ValueError('DESTINATION_APPEARED')
        os.rename(content, destination)
    return {'status': 'INSTALLED', 'plan_sha256': current['plan_sha256']}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('command', choices=['plan', 'apply'])
    parser.add_argument('--package', required=True)
    parser.add_argument('--config', required=True)
    parser.add_argument('--reviewed-plan')
    parser.add_argument('--allow-candidate', action='store_true', help='Isolated test directories only; not release approval')
    args = parser.parse_args()
    try:
        config = json.loads(Path(args.config).read_text(encoding='utf-8-sig'))
        if args.command == 'plan':
            result = plan(args.package, config)
        else:
            if not args.reviewed_plan: raise ValueError('REVIEWED_PLAN_REQUIRED')
            reviewed = json.loads(Path(args.reviewed_plan).read_text(encoding='utf-8-sig'))
            result = apply(args.package, config, reviewed, args.allow_candidate)
        print(json.dumps(result, ensure_ascii=True, indent=2))
        return 2 if result.get('status') == 'BLOCKED' else 0
    except (ValueError, OSError, KeyError, TypeError) as exc:
        print(json.dumps({'status': 'ERROR', 'reason': str(exc)}, ensure_ascii=True))
        return 2


if __name__ == '__main__':
    raise SystemExit(main())
