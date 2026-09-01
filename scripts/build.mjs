import {mkdir,writeFile,readFile} from 'node:fs/promises';
import {categories,terms} from '../data/lexicon.js';
await mkdir('categories',{recursive:true}); await mkdir('terms',{recursive:true});
const dataSource=await readFile('data/lexicon.js','utf8');
const controlsSource=await readFile('data/controls.js','utf8');
const appSource=await readFile('assets/app.js','utf8');
const browserData=dataSource.replaceAll('export const ','const ').replaceAll('export function ','function ');
const browserControls=controlsSource.replaceAll('export const ','const ');
const browserApp=appSource.replace(/^import .*?;\n/gm,'');
await writeFile('assets/browser.js',`${browserData}\n${browserControls}\n${browserApp}`);
const indexSource=await readFile('index.html','utf8');
const currentCount=(indexSource.match(/<div class="stat"><b>\d+<\/b><span>设计效果<\/span>/)||[])[0];
const builtIndex=indexSource.replaceAll('<link rel="stylesheet" href="assets/effects-extra.css">','')
 .replace('<link rel="stylesheet" href="assets/styles.css">','<link rel="stylesheet" href="assets/styles.css"><link rel="stylesheet" href="assets/effects-extra.css">')
 .replace('<script type="module" src="assets/app.js"></script>','<script src="assets/browser.js"></script>')
 .replace(currentCount,`<div class="stat"><b>${terms.length}</b><span>设计效果</span>`);
await writeFile('index.html',builtIndex);
const sidebar=`<aside class="sidebar"><a class="brand" href="../index.html"><i class="brand-mark"></i><span><strong>设计效果百科</strong><span>DESIGN EFFECT LEXICON</span></span></a><div class="search-wrap"><span class="search-icon">⌕</span><input class="search" data-search aria-label="搜索本页术语" placeholder="搜索本页…"></div><div class="nav-label">CATEGORIES</div><nav class="nav" data-nav></nav><div class="sidebar-foot">A modular visual knowledge base.<br>UI · GRAPHIC · COVER</div></aside>`;
const head=(title,depth='..')=>`<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="UI、平面与封面设计效果百科"><title>${title}</title><link rel="stylesheet" href="${depth}/assets/styles.css"><link rel="stylesheet" href="${depth}/assets/effects-extra.css"></head>`;
for(const cat of categories){
 const html=`${head(cat.name)}<body data-page="category" data-id="${cat.id}"><div class="shell">${sidebar}<main class="main"><div class="breadcrumb"><a href="../index.html">首页</a><span>/</span><span>${cat.name}</span></div><header class="hero"><div class="eyebrow" data-en></div><h1 data-title></h1><p class="lede" data-intro></p><div class="stats"><div class="stat"><b data-count></b><span>收录效果</span></div></div></header><section class="section"><div class="term-grid" data-terms></div><div class="empty" data-empty>没有匹配的术语</div></section></main></div><script src="../assets/browser.js"></script></body></html>`;
 await writeFile(`categories/${cat.id}.html`,html);
}
for(const term of terms){
 const html=`${head(term.name)}<body data-page="term" data-id="${term.id}"><div class="shell">${sidebar}<main class="main"><nav class="breadcrumb" data-breadcrumb></nav><div class="term-layout"><section><div class="eyebrow" data-en></div><h1 data-title></h1><p class="lede" data-summary></p><div class="tags" data-tags></div><a class="back" data-back></a></section><section><div class="stage"><span class="stage-label">INTERACTIVE / VISUAL SAMPLE</span><div data-demo style="display:contents"></div></div><div class="details"><div class="detail"><h3>适用场景 / When to use</h3><p data-usage></p></div><div class="detail"><h3>设计原则 / Key principle</h3><p data-principle></p></div><div class="detail"><h3>视觉构成 / Anatomy</h3><p data-anatomy></p></div><div class="detail"><h3>调节建议 / Tuning guide</h3><p data-tuning></p></div></div></section></div></main></div><script src="../assets/browser.js"></script></body></html>`;
 await writeFile(`terms/${term.id}.html`,html);
}
console.log(`Generated ${categories.length} category pages and ${terms.length} term pages.`);
