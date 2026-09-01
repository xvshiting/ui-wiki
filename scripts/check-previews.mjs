import {readFile} from 'node:fs/promises';
import {terms} from '../data/lexicon.js';

const css=await readFile('assets/styles.css','utf8');
const required=[
  ['global demo defaults',/(?:^|})\s*\.demo\{[^}]*--demo-color:/],
  ['card preview overflow containment',/\.term-card \.preview \.demo\{[^}]*overflow:hidden/],
  ['compact poster typography',/\.term-card \.poster b\{[^}]*font-size:/],
  ['visible magnetic preview',/\.term-card \.d-magnetic button\{[^}]*color:/],
  ['visible accordion preview',/\.term-card \.d-accordion button\{[^}]*color:/],
  ['visible outline preview',/\.term-card \.d-outline/],
  ['compact skeleton preview',/\.term-card \.d-skeleton/]
];
const failures=required.filter(([,pattern])=>!pattern.test(css)).map(([name])=>name);
const demos=new Set(terms.map(term=>term.demo));
if(demos.size!==terms.length)failures.push('every term must have a unique preview demo');
if(failures.length){console.error(`FAIL: ${failures.join(', ')}`);process.exit(1)}
console.log(`PASS: ${terms.length} category previews have defaults, containment, and compact variants.`);
