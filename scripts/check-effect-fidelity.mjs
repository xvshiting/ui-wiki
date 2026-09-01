import {readFile} from 'node:fs/promises';
import {extraTerms} from '../data/extra-terms.js';

const app=await readFile('assets/app.js','utf8');
const demos=await readFile('assets/extra-demos.js','utf8');
const css=await readFile('assets/fx-library.css','utf8');
const specificBranches=extraTerms.filter(term=>demos.includes(`'${term.demo}':`));
const specificCss=extraTerms.filter(term=>css.includes(`.d-${term.demo}`));
const failures=[];

if(specificBranches.length<extraTerms.length)failures.push(`${specificBranches.length}/60 effects have demo-specific markup`);
if(specificCss.length<extraTerms.length)failures.push(`${specificCss.length}/60 effects have demo-specific CSS`);
const interactionSignals=['motion-morph','motion-snap','motion-page','motion-progress','motion-stagger','motion-trail','motion-flip','motion-toggle','motion-spotlight','motion-count'];
const missingInteraction=interactionSignals.filter(signal=>!app.includes(`d-fx-${signal}`)&&!css.includes(`d-fx-${signal}`));
if(missingInteraction.length)failures.push(`missing interaction behavior: ${missingInteraction.join(', ')}`);

if(failures.length){
  console.error(`FAIL: ${failures.join('; ')}`);
  process.exit(1);
}
console.log('PASS: all 60 added effects have effect-specific markup and CSS.');
