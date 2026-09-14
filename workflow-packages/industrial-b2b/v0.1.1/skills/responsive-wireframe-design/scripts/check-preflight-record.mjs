#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const recordPath=process.argv[2];
if(!recordPath){console.error('Usage: node check-preflight-record.mjs <preflight-record.json>');process.exit(2)}
const absolute=path.resolve(recordPath);
const record=JSON.parse(fs.readFileSync(absolute,'utf8'));
const hash=file=>crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const failures=[];
const requiredChecks=['approvedInputsMatch','durableDependencies','sharedConsumerNeutral','contentRelationshipsMatch','threeViewportsVisible','touchTargets44','mobileMenuExit','applicableStates','pageSpecificRisks'];

if(record.status!=='PASS_FOR_FORMAL_RENDER')failures.push('status must be PASS_FOR_FORMAL_RENDER');
if(!record.candidate?.path||!fs.existsSync(record.candidate.path))failures.push('candidate.path missing');
else{
  const actual=hash(record.candidate.path);
  if(actual!==String(record.candidate.sha256||'').toLowerCase())failures.push('candidate hash mismatch');
  const normalized=record.candidate.path.replaceAll('\\','/').toLowerCase();
  if(normalized.includes('/99_workspace/')||normalized.includes('/temp/')||normalized.includes('/tmp/'))failures.push('candidate is not in a durable page directory');
}
for(const key of requiredChecks){
  const value=record.checks?.[key];
  if(!['PASS','NOT_APPLICABLE'].includes(value))failures.push(`check ${key} is not PASS or NOT_APPLICABLE`);
}
for(const dependency of record.dependencies||[]){
  if(!dependency.path||!fs.existsSync(dependency.path)){failures.push(`dependency missing: ${dependency.path||'<unset>'}`);continue}
  if(hash(dependency.path)!==String(dependency.sha256||'').toLowerCase())failures.push(`dependency hash mismatch: ${dependency.path}`);
  const normalized=dependency.path.replaceAll('\\','/').toLowerCase();
  if(normalized.includes('/99_workspace/')||normalized.includes('/temp/')||normalized.includes('/tmp/'))failures.push(`temporary dependency: ${dependency.path}`);
}
const shared=String(record.sharedConsumer?.path||'').replaceAll('\\','/').toLowerCase();
if(!shared||!fs.existsSync(record.sharedConsumer.path))failures.push('sharedConsumer.path missing');
else if(shared.includes('/pages/')||shared.includes('/99_workspace/'))failures.push('shared consumer must be page-neutral and durable');
if(record.formalExportsGenerated!==false)failures.push('formalExportsGenerated must be false at preflight');

const result={record:absolute,status:failures.length?'FAIL':'PASS_FOR_FORMAL_RENDER',failures};
console.log(JSON.stringify(result,null,2));
process.exit(failures.length?1:0);
