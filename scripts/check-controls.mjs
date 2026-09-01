import {readFile} from 'node:fs/promises';
import {terms} from '../data/lexicon.js';
import {controlDefinitions,controlsForDemo} from '../data/controls.js';

const css=(await Promise.all(['assets/styles.css','assets/effects-extra.css','assets/fx-library.css','assets/motion-click.css','assets/motion-nav.css','assets/motion-scroll.css','assets/motion-drag.css','assets/motion-gesture.css','assets/motion-form.css','assets/motion-list.css','assets/motion-state.css','assets/motion-pointer.css','assets/motion-physics.css'].map(file=>readFile(file,'utf8')))).join('\n');
const generic=['scale','rotate','radius'];
const failures=[];
for(const term of terms){
  const demo=term.demo;
  const family=demo.startsWith('fx-')?demo.split('-')[1]:'';
  const relevant=[...css.matchAll(new RegExp(`[^}]*(?:\\.d-${demo}|\\.fx-${family})[^}]*}`,'g'))].map(m=>m[0]).join('\n');
  for(const key of controlsForDemo(demo)){
    const variable=controlDefinitions[key].var;
    const aliasCovered=demo.startsWith('fx-')&&((key==='color'&&relevant.includes('var(--a)'))||(key==='color2'&&relevant.includes('var(--b)')));
    const covered=generic.includes(key)?css.includes(variable):relevant.includes(variable)||aliasCovered||(key==='radius'&&relevant.includes('border-radius'));
    if(!covered)failures.push(`${term.id}: ${key} (${variable}) has no effect mapping for .d-${demo}`);
  }
}
if(failures.length){console.error(failures.join('\n'));process.exit(1)}
console.log(`PASS: ${terms.length} effects expose only mapped controls.`);
