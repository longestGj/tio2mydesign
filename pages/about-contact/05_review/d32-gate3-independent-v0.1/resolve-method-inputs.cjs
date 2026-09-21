// Read-only identity relocation audit. Does not replace raw results or edit candidate.
const fs=require('fs'),path=require('path'),crypto=require('crypto');
const root=path.resolve(__dirname,'../../../..'),hash=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const raw=JSON.parse(fs.readFileSync(path.join(__dirname,'independent-results.json'),'utf8'));
const prefix='90_archive/project-governance/2026-09-21-gate3-gate4-merge/';
const allowed=['agents/gate3-execution/agent.md','skills/responsive-wireframe-design/SKILL.md','skills/responsive-wireframe-design/references/preflight-freeze-evidence.md','skills/layout-interaction-verification/SKILL.md','skills/layout-interaction-verification/references/gate3-structure-scope.md'];
const failed=raw.checks.filter(x=>!x.pass);
const rows=failed.map(x=>{const relativePath=x.id.replace(/^dependency:/,'');const archivedPath=prefix+relativePath;const archivedHash=hash(path.join(root,archivedPath));return {relativePath,archivedPath,frozen:x.detail.expected,current:x.detail.actual,archivedHash,pass:allowed.includes(relativePath)&&archivedHash===x.detail.expected};});
const freeze=JSON.parse(fs.readFileSync(path.join(root,'pages/about-contact/04_planning/d32-gate3-v0.2/freeze.json'),'utf8'));
const core=JSON.parse(fs.readFileSync(path.join(root,'pages/about-contact/04_planning/d32-gate3-v0.2/bundle-manifest.json'),'utf8')).approvalCore;
const result={time:new Date().toISOString(),type:'ARCHIVED_INPUT_IDENTITY_RESOLUTION_NOT_RAW_TEST_OVERRIDE',authority:'G34-MERGE-20260921 compatibility: explicitly scoped old Gate3 tasks retain original scope; reviewer assignment expressly names Gate3 V1.14',raw:{path:'independent-results.json',sha256:hash(path.join(__dirname,'independent-results.json')),passed:raw.passed,failed:raw.failed},rows,unexpectedFailure:failed.length!==allowed.length||rows.some(x=>!x.pass),coreRetention:core.map(x=>({relativePath:x.relativePath,pass:hash(x.path)===x.sha256})),sourceSet:freeze.sourceSetSha256};
result.pass=!result.unexpectedFailure&&result.coreRetention.every(x=>x.pass);
fs.writeFileSync(path.join(__dirname,'method-input-resolution.json'),JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify({pass:result.pass,archiveMatches:rows.filter(x=>x.pass).length,coreRetained:result.coreRetention.filter(x=>x.pass).length,rawPassed:raw.passed,rawFailed:raw.failed}));if(!result.pass)process.exitCode=1;
