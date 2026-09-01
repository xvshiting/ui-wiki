import {readFile} from 'node:fs/promises';

const app=await readFile('assets/app.js','utf8');
const checks=[
  ['recursive CSS rule extraction',app.includes('const walk=rules=>')&&app.includes('rule.cssRules')],
  ['animation keyframe collection',app.includes('keyframes=new Map()')&&app.includes('animation(?:-name)?')],
  ['standalone document export',app.includes('standalonePage=')&&app.includes('data-copy-source="page"')],
  ['downloadable HTML export',app.includes('new Blob(')&&app.includes('data-download-source')],
  ['live parameter values in exports',app.includes('liveDemo?.style.cssText')],
];
const failed=checks.filter(([,pass])=>!pass).map(([name])=>name);
if(failed.length){console.error(`FAIL: ${failed.join('; ')}`);process.exit(1)}
console.log('PASS: source lab exports complete reusable examples.');
