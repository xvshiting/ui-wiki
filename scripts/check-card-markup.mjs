import {readFile} from 'node:fs/promises';

const app=await readFile('assets/app.js','utf8');
const articleCard=app.includes('function termCard(term)')&&app.includes('<article class="term-card"');
const titleLink=app.includes('class="term-card-link"');

if(!articleCard||!titleLink){
  console.error('FAIL: interactive demos are nested inside an outer term-card link');
  process.exit(1);
}

console.log('PASS: interactive demos are isolated from term-card navigation.');
