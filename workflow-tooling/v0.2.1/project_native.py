"""Native projection with fixed W1-W5 output locations; renders without writing."""
from pathlib import Path
import importlib.util

spec = importlib.util.spec_from_file_location('native_020', Path(__file__).parents[1] / 'v0.2.0/project_native.py')
base = importlib.util.module_from_spec(spec)
spec.loader.exec_module(base)

WORK_PACKAGES = [
    ('W1', 'W1_Enterprise_Product_Facts', 'enterprise-product-facts', '企业与产品事实基础'),
    ('W2', 'W2_Market_Customer_Competition', 'market-customer-competition', '市场、客户与竞争分析'),
    ('W3', 'W3_Strategy_Positioning', 'business-strategy-positioning', '商业战略与网站定位'),
    ('W4', 'W4_Architecture_Buyer_Journey', 'site-architecture-buyer-journey', '网站架构与采购旅程'),
    ('W5', 'W5_Production_Readiness', 'production-preparation', '生产准备与批次安排'),
]

def render(package):
    result = base.render(package)
    contract = '.workflow/contracts/WEBSITE_PREPARATION_STORAGE_V1.0.md'
    result[contract] = Path(__file__).with_name('WEBSITE_PREPARATION_STORAGE_V1.0.md').read_bytes()
    targets = [(f'agents/{role}/agent.md', f'../../{contract}') for _, _, role, _ in WORK_PACKAGES]
    targets += [('agents/project-orchestrator/agent.md', '../../' + contract),
                ('.workflow/contracts/WEBSITE_PREPARATION_HANDOFF_CONTRACT_V1.6.md', 'WEBSITE_PREPARATION_STORAGE_V1.0.md'),
                ('.workflow/contracts/instance-bindings.md', 'WEBSITE_PREPARATION_STORAGE_V1.0.md'),
                ('.workflow/templates/site-preparation-handoff.md', '../contracts/WEBSITE_PREPARATION_STORAGE_V1.0.md')]
    for name, link in targets:
        result[name] += ('\n\n## W1–W5固定成果位置\n\n'
            f'派发、制作、审查和接收必读[保存合同]({link})。正式工作包及其审查记录写入对应'
            '`Website_Preparation/W*/`目录；派发明确output_dir、deliverable_path、review_path。'
            '总控维护各包README的当前成果指针，不另建状态台账；专业执行者不修改其他包入口。'
            '原始来源、用户决定和项目状态引用本站唯一入口；不得复制事实库，目录存在不代表成果完成。\n').encode('utf-8')
    rows = []
    for key, folder, role, title in WORK_PACKAGES:
        rows.append(f'| {key} {title} | [{folder}]({folder}/README.md) |')
        result[f'Website_Preparation/{folder}/README.md'] = (
            f'# {key} · {title}\n\n'
            '- 当前成果：尚未登记。\n- 版本与状态：以被引用成果和本站唯一状态源为准。\n'
            '- 独立审查：尚未登记，不表示不需要审查。\n- 上游来源：由总控按本站有效输入登记。\n\n'
            f'角色：[Agent](../../agents/{role}/agent.md)。'
            f'放置规则：[保存合同](../../{contract})。\n'
            '本文件只作当前成果导航，不记录平行进度；已有成果先登记引用，不为填目录重做。\n'
        ).encode('utf-8')
    result['Website_Preparation/README.md'] = (
        '# 网站准备工作包\n\n本目录统一保存W1–W5正式交付及专业审查记录。'
        '状态与用户决定仍以本站唯一治理入口为准，不因目录创建启动任务。\n\n'
        '| 工作包 | 固定入口 |\n|---|---|\n' + '\n'.join(rows) +
        f'\n\n[保存合同](../{contract})。已有来源和研究引用原位，不复制、不自动批准。\n'
    ).encode('utf-8')
    return result
