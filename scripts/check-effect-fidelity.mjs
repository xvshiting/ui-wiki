import {readFile} from 'node:fs/promises';
import {extraTerms} from '../data/extra-terms.js';

const app=await readFile('assets/app.js','utf8');
const demos=await readFile('assets/extra-demos.js','utf8');
const css=(await Promise.all(['assets/fx-library.css','assets/motion-click.css','assets/motion-nav.css','assets/motion-scroll.css','assets/motion-drag.css','assets/motion-gesture.css','assets/motion-form.css','assets/motion-list.css','assets/motion-state.css','assets/motion-pointer.css','assets/motion-physics.css','assets/fx-style.css'].map(file=>readFile(file,'utf8')))).join('\n');
const specificBranches=extraTerms.filter(term=>demos.includes(`'${term.demo}':`));
const specificCss=extraTerms.filter(term=>css.includes(`.d-${term.demo}`));
const failures=[];

if(specificBranches.length<extraTerms.length)failures.push(`${specificBranches.length}/${extraTerms.length} effects have demo-specific markup`);
if(specificCss.length<extraTerms.length)failures.push(`${specificCss.length}/${extraTerms.length} effects have demo-specific CSS`);
const interactionSignals=['motion-morph','motion-snap','motion-page','motion-progress','motion-stagger','motion-trail','motion-flip','motion-toggle','motion-spotlight','motion-count'];
const missingInteraction=interactionSignals.filter(signal=>!app.includes(`d-fx-${signal}`)&&!css.includes(`d-fx-${signal}`));
if(missingInteraction.length)failures.push(`missing interaction behavior: ${missingInteraction.join(', ')}`);

if(failures.length){
  console.error(`FAIL: ${failures.join('; ')}`);
  process.exit(1);
}
console.log(`PASS: all ${extraTerms.length} added effects have effect-specific markup and CSS.`);
