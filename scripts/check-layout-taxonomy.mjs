import {readFile} from 'node:fs/promises';
import {terms} from '../data/lexicon.js';

const [app,styles]=await Promise.all([
  readFile('assets/app.js','utf8'),
  readFile('assets/fx-style.css','utf8')
]);
const failures=[];
const layoutTerms=terms.filter(term=>term.cat==='ui-layout');

if(!app.includes('layoutGroups')||!app.includes('data-layout-group'))failures.push('UI layout has no subgroup navigation');
if(!styles.includes('Layout preview canvas')||!styles.includes('aspect-ratio:16/10'))failures.push('layout demos are not rendered as page-level canvases');
for(const id of ['command-palette-layout','empty-state-layout','error-recovery-layout']){
  if(layoutTerms.some(term=>term.id===id))failures.push(`${id} is still classified as layout`);
}

if(failures.length){console.error(`FAIL: ${failures.join('; ')}`);process.exit(1)}
console.log('PASS: layout taxonomy and page-level preview rules are present.');
