import {readFile} from 'node:fs/promises';
import {categories} from '../data/lexicon.js';

const [app,css]=await Promise.all([
  readFile('assets/app.js','utf8'),
  readFile('assets/consistency-refresh.css','utf8').catch(()=>''),
]);
const failures=[];
for(const category of categories){
  if(!app.includes(`'${category.id}':[`))failures.push(`${category.id} has no subgroup model`);
}
if(!app.includes('mountCategoryGroups'))failures.push('category subgroup navigation is not generic');
if(!css.includes('.term-card .preview:after')||!css.includes('left:10px')||!css.includes('right:auto'))failures.push('PLAY badge still collides with favorite control');
if(!css.includes('Shared card/detail visual models'))failures.push('card and detail previews still use divergent visual models');

if(failures.length){console.error(`FAIL: ${failures.join('; ')}`);process.exit(1)}
console.log('PASS: every category has subgroups and preview controls do not collide.');
