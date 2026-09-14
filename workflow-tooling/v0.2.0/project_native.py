"""Project-native role and skill projection from a verified source package."""
from pathlib import Path
import hashlib
import json
import posixpath
import re


def location(source):
    if source.startswith('agents/'):
        return source
    if source.startswith('skills/'):
        return '.agents/' + source
    return '.workflow/' + source


def render(package):
    package=Path(package)
    manifest=json.loads((package/'release-manifest.json').read_text(encoding='utf-8'))
    mapping={e['path']:location(e['path']) for e in manifest['files']}
    result={}
    for e in manifest['files']:
        source=e['path'];destination=mapping[source]
        if source.startswith('/') or '..' in source.split('/') or '\\' in source or ':' in source:
            raise ValueError('UNSAFE_PACKAGE_PATH')
        p=package/source
        if p.is_symlink() or not p.resolve().is_relative_to(package.resolve()):raise ValueError('UNSAFE_PACKAGE_SOURCE')
        data=p.read_bytes()
        if hashlib.sha256(data).hexdigest()!=e['sha256'] or len(data)!=e['bytes']:
            raise ValueError('PACKAGE_DRIFT: '+source)
        if source.endswith('.md'):
            s=data.decode('utf-8')
            def link(match):
                value=match.group(2);target=value.strip('<>');path,sep,anchor=target.partition('#')
                if not path or re.match(r'^[a-z]+:',path):return match.group(0)
                resolved=posixpath.normpath(posixpath.join(posixpath.dirname(source),path))
                if resolved not in mapping:raise ValueError('UNMAPPED_LINK: '+source+' -> '+path)
                relative=posixpath.relpath(mapping[resolved],posixpath.dirname(destination))
                return '['+match.group(1)+']('+relative+(sep+anchor if sep else '')+')'
            s=re.sub(r'\[([^\]]*)\]\(([^)]+)\)',link,s)
            s=s.replace('母版版本：0.1.0（提取候选，尚未安装/发布验证）。','方法来源：industrial-b2b 0.1.1；当前项目级入口身份见.workflow/project-manifest.json。')
            s=s.replace('包内路径以锁定包根目录解析','项目级角色、Skill和工具路径以project_root解析（Markdown链接按所在文件目录解析）')
            s=s.replace('包内角色、Skill、阶段合同身份由release-manifest.json维护','当前项目级角色、Skill、阶段合同身份由.workflow/project-manifest.json维护')
            # Bare executable paths are project-root relative, unlike Markdown links.
            s=re.sub(r'(?<![\w./-])skills/(?=[a-z])','.agents/skills/',s)
            result[destination]=s.encode('utf-8')
        else:result[destination]=data
    for source in mapping:
        if not re.fullmatch(r'agents/[^/]+/agent\.md',source):continue
        name=source.split('/')[1]
        title=result[mapping[source]].decode('utf-8').splitlines()[0].lstrip('# ')
        instructions=(f'你是本项目的{title}。开始工作前完整读取项目根AGENTS.md和{source}，'
            '按该角色引用加载本站方法及必要合同。角色职责文件是唯一方法权威；不要只凭名称执行。'
            '当前工作目录须属于调用者明确指定的项目；相对路径从项目根解析。'
            '遵守原始授权、输出位置、停止点及执行/独立审查分离，不因被调用而获得额外权限。'
            '不重做有效上游，不自动修改共享状态，不启动未授权下一阶段。')
        description=title+'；按对应工作包或Gate范围调用，先读取项目职责合同。'
        result[f'.codex/agents/{name}.toml']=(
            'name = '+json.dumps(name,ensure_ascii=False)+'\n'+
            'description = '+json.dumps(description,ensure_ascii=False)+'\n'+
            'developer_instructions = '+json.dumps(instructions,ensure_ascii=False)+'\n').encode('utf-8')
    return result
