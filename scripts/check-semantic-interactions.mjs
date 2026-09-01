import {readFile} from 'node:fs/promises';

const [demos,app,pointerCss,physicsCss]=await Promise.all([
  readFile('assets/extra-demos.js','utf8'),
  readFile('assets/app.js','utf8'),
  readFile('assets/motion-pointer.css','utf8'),
  readFile('assets/motion-physics.css','utf8')
]);

const checks=[
  ['image preview has multiple hover targets',demos.includes('data-preview="preview-alpha"')&&demos.includes('data-preview="preview-beta"')],
  ['image preview follows the active target',app.includes('motion-pointer-preview')&&app.includes('--preview-x')],
  ['blend cursor follows pointer',app.includes('motion-pointer-blend')&&app.includes('--cursor-x')],
  ['blend cursor uses difference blending',pointerCss.includes('mix-blend-mode:difference')&&pointerCss.includes('is-pointer-active')],
  ['depth focus exposes two focus targets',demos.includes('data-focus="near"')&&demos.includes('data-focus="far"')],
  ['depth focus swaps foreground and background blur',physicsCss.includes('focus-far')&&physicsCss.includes('--near-blur')&&physicsCss.includes('--far-blur')]
];

const failed=checks.filter(([,pass])=>!pass).map(([name])=>name);
if(failed.length){
  console.error(`FAIL: ${failed.join('; ')}`);
  process.exit(1);
}
console.log('PASS: semantic interactions match their named effects.');
