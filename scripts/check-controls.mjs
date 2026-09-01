import {readFile} from 'node:fs/promises';
import {terms} from '../data/lexicon.js';
import {controlDefinitions,controlsForDemo} from '../data/controls.js';

const css=(await Promise.all(['assets/styles.css','assets/effects-extra.css'].map(file=>readFile(file,'utf8')))).join('\n');
const generic=['scale','rotate','radius'];
const failures=[];
for(const term of terms){
  const demo=term.demo;
  const relevant=[...css.matchAll(new RegExp(`[^}]*\\.d-${demo}[^}]*}`,'g'))].map(m=>m[0]).join('\n');
  for(const key of controlsForDemo(demo)){
    const variable=controlDefinitions[key].var;
    const covered=generic.includes(key)?css.includes(variable):relevant.includes(variable)||(key==='radius'&&relevant.includes('border-radius'));
    if(!covered)failures.push(`${term.id}: ${key} (${variable}) has no effect mapping for .d-${demo}`);
  }
}
if(failures.length){console.error(failures.join('\n'));process.exit(1)}
console.log(`PASS: ${terms.length} effects expose only mapped controls.`);
