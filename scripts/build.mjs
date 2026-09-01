import {mkdir,writeFile,readFile} from 'node:fs/promises';
import {categories,terms,byCategory} from '../data/lexicon.js';
await mkdir('categories',{recursive:true}); await mkdir('terms',{recursive:true});
const siteUrl='https://xvshiting.github.io/ui-wiki';
const socialImage=`${siteUrl}/assets/social-preview.png`;
const escapeAttr=value=>String(value).replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const seoTags=({title,description,path='',type='website',schema})=>{
 const url=`${siteUrl}/${path}`;
 const structured=schema||{'@context':'https://schema.org','@type':'WebPage',name:title,description,url};
 return `<link rel="canonical" href="${url}"><meta property="og:type" content="${type}"><meta property="og:site_name" content="UI Wiki"><meta property="og:locale" content="zh_CN"><meta property="og:title" content="${escapeAttr(title)}"><meta property="og:description" content="${escapeAttr(description)}"><meta property="og:url" content="${url}"><meta property="og:image" content="${socialImage}"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${escapeAttr(title)}"><meta name="twitter:description" content="${escapeAttr(description)}"><meta name="twitter:image" content="${socialImage}"><script type="application/ld+json">${JSON.stringify(structured).replaceAll('<','\\u003c')}</script>`;
};
const dataSource=await readFile('data/lexicon.js','utf8');
const extraSource=await readFile('data/extra-terms.js','utf8');
const controlsSource=await readFile('data/controls.js','utf8');
const appSource=await readFile('assets/app.js','utf8');
const extraDemosSource=await readFile('assets/extra-demos.js','utf8');
const browserExtra=extraSource.replaceAll('export const ','const ');
const browserData=dataSource.replace(/^import .*?;\n/gm,'').replaceAll('export const ','const ').replaceAll('export function ','function ');
const browserControls=controlsSource.replaceAll('export const ','const ');
const browserApp=appSource.replace(/^import .*?;\n/gm,'');
const browserExtraDemos=extraDemosSource.replaceAll('export const ','const ');
await writeFile('assets/browser.js',`${browserExtra}\n${browserData}\n${browserControls}\n${browserExtraDemos}\n${browserApp}`);
const indexSource=await readFile('index.html','utf8');
const currentCount=(indexSource.match(/<div class="stat"><b>\d+<\/b><span>设计效果<\/span>/)||[])[0];
const brand=href=>`<a class="brand" href="${href}" aria-label="UI Wiki 首页"><i class="brand-mark"><span>UW</span></i><span class="brand-copy"><strong>UI WIKI</strong><span>设计效果百科 · DESIGN EFFECTS</span></span></a>`;
let builtIndex=indexSource.replaceAll('UI WIKI / OPEN DESIGN KNOWLEDGE BASE / 2026','OPEN DESIGN KNOWLEDGE BASE / 2026').replaceAll('<link rel="stylesheet" href="assets/effects-extra.css">','')
 .replaceAll('<link rel="stylesheet" href="assets/fx-library.css">','')
 .replaceAll('<link rel="stylesheet" href="assets/github-star.css">','')
 .replaceAll('<link rel="stylesheet" href="assets/motion-click.css">','')
 .replaceAll('<link rel="stylesheet" href="assets/motion-nav.css">','')
 .replaceAll('<link rel="stylesheet" href="assets/motion-scroll.css">','')
 .replaceAll('<link rel="stylesheet" href="assets/motion-drag.css">','')
 .replaceAll('<link rel="stylesheet" href="assets/motion-gesture.css">','')
 .replaceAll('<link rel="stylesheet" href="assets/motion-form.css">','')
 .replaceAll('<link rel="stylesheet" href="assets/motion-list.css">','')
 .replaceAll('<link rel="stylesheet" href="assets/motion-state.css">','')
 .replaceAll('<link rel="stylesheet" href="assets/motion-pointer.css">','')
 .replaceAll('<link rel="stylesheet" href="assets/motion-physics.css">','')
 .replaceAll('<link rel="stylesheet" href="assets/fx-style.css">','')
 .replaceAll('<link rel="stylesheet" href="assets/layout-refresh.css">','')
 .replaceAll('<link rel="stylesheet" href="assets/consistency-refresh.css">','')
 .replace('<link rel="stylesheet" href="assets/styles.css">','<link rel="stylesheet" href="assets/styles.css"><link rel="stylesheet" href="assets/effects-extra.css"><link rel="stylesheet" href="assets/fx-library.css"><link rel="stylesheet" href="assets/motion-click.css"><link rel="stylesheet" href="assets/motion-nav.css"><link rel="stylesheet" href="assets/motion-scroll.css"><link rel="stylesheet" href="assets/motion-drag.css"><link rel="stylesheet" href="assets/motion-gesture.css"><link rel="stylesheet" href="assets/motion-form.css"><link rel="stylesheet" href="assets/motion-list.css"><link rel="stylesheet" href="assets/motion-state.css"><link rel="stylesheet" href="assets/motion-pointer.css"><link rel="stylesheet" href="assets/motion-physics.css"><link rel="stylesheet" href="assets/fx-style.css"><link rel="stylesheet" href="assets/layout-refresh.css"><link rel="stylesheet" href="assets/consistency-refresh.css"><link rel="stylesheet" href="assets/github-star.css">')
 .replace('<script type="module" src="assets/app.js"></script>','<script src="assets/browser.js"></script>')
 .replace(currentCount,`<div class="stat"><b>${terms.length}</b><span>设计效果</span>`)
 .replace(/<a class="brand".*?<\/a>/,brand('index.html'))
 .replace('OPEN DESIGN KNOWLEDGE BASE / 2026','UI WIKI / OPEN DESIGN KNOWLEDGE BASE / 2026')
 .replace(/<div class="sidebar-foot">.*?<\/div>/,`<div class="sidebar-foot"><strong>UI WIKI / OPEN SOURCE</strong><br>${terms.length} EFFECTS · 6 CATEGORIES</div>`);
if(!builtIndex.includes('property="og:title"')){
 const description='浏览、调节并拆解 640 种 UI、视觉、版式、字体与交互动效。';
 builtIndex=builtIndex.replace('</head>',`${seoTags({title:'UI Wiki — 设计效果的开放图谱',description,schema:{'@context':'https://schema.org','@type':'WebSite',name:'UI Wiki',url:`${siteUrl}/`,description,inLanguage:'zh-CN'}})}</head>`);
}
await writeFile('index.html',builtIndex);
const sidebar=`<aside class="sidebar">${brand('../index.html')}<div class="search-wrap"><span class="search-icon">⌕</span><input class="search" data-search aria-label="搜索本页术语" placeholder="搜索本页…"></div><div class="nav-label">CATEGORIES</div><nav class="nav" data-nav></nav><div class="sidebar-foot"><strong>UI WIKI / OPEN SOURCE</strong><br>${terms.length} EFFECTS · 6 CATEGORIES</div></aside>`;
const head=(title,depth='..',meta={})=>{const description=meta.description||'UI、平面与封面设计效果百科';return `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="${escapeAttr(description)}"><title>${escapeAttr(title)}</title>${seoTags({title,description,path:meta.path,type:meta.type,schema:meta.schema})}<link rel="stylesheet" href="${depth}/assets/styles.css"><link rel="stylesheet" href="${depth}/assets/effects-extra.css"><link rel="stylesheet" href="${depth}/assets/fx-library.css"><link rel="stylesheet" href="${depth}/assets/motion-click.css"><link rel="stylesheet" href="${depth}/assets/motion-nav.css"><link rel="stylesheet" href="${depth}/assets/motion-scroll.css"><link rel="stylesheet" href="${depth}/assets/motion-drag.css"><link rel="stylesheet" href="${depth}/assets/motion-gesture.css"><link rel="stylesheet" href="${depth}/assets/motion-form.css"><link rel="stylesheet" href="${depth}/assets/motion-list.css"><link rel="stylesheet" href="${depth}/assets/motion-state.css"><link rel="stylesheet" href="${depth}/assets/motion-pointer.css"><link rel="stylesheet" href="${depth}/assets/motion-physics.css"><link rel="stylesheet" href="${depth}/assets/fx-style.css"><link rel="stylesheet" href="${depth}/assets/layout-refresh.css"><link rel="stylesheet" href="${depth}/assets/consistency-refresh.css"><link rel="stylesheet" href="${depth}/assets/github-star.css"></head>`};
for(const cat of categories){
 const path=`categories/${cat.id}.html`,description=`${cat.intro} 浏览 UI Wiki 收录的 ${byCategory(cat.id).length} 个${cat.name}效果。`;
 const html=`${head(`${cat.name} — UI Wiki`,'..',{description,path,schema:{'@context':'https://schema.org','@type':'CollectionPage',name:cat.name,description,url:`${siteUrl}/${path}`,inLanguage:'zh-CN'}})}<body data-page="category" data-id="${cat.id}"><div class="shell">${sidebar}<main class="main"><div class="breadcrumb"><a href="../index.html">首页</a><span>/</span><span>${cat.name}</span></div><header class="hero"><div class="eyebrow" data-en></div><h1 data-title></h1><p class="lede" data-intro></p><div class="stats"><div class="stat"><b data-count></b><span>收录效果</span></div></div></header><section class="section"><div class="term-grid" data-terms></div><div class="empty" data-empty>没有匹配的术语</div></section></main></div><script src="../assets/browser.js"></script></body></html>`;
 await writeFile(`categories/${cat.id}.html`,html);
}
for(const term of terms){
 const path=`terms/${term.id}.html`,description=`${term.summary} 适用场景：${term.usage}`;
 const html=`${head(`${term.name}（${term.en}）— UI Wiki`,'..',{description,path,type:'article',schema:{'@context':'https://schema.org','@type':'DefinedTerm',name:term.name,alternateName:term.en,description:term.summary,url:`${siteUrl}/${path}`,inDefinedTermSet:`${siteUrl}/`}})}<body data-page="term" data-id="${term.id}"><div class="shell">${sidebar}<main class="main"><nav class="breadcrumb" data-breadcrumb></nav><div class="term-layout"><section><div class="eyebrow" data-en></div><h1 data-title></h1><p class="lede" data-summary></p><div class="tags" data-tags></div><a class="back" data-back></a></section><section><div class="stage"><span class="stage-label">INTERACTIVE / VISUAL SAMPLE</span><div data-demo style="display:contents"></div></div><div class="details"><div class="detail"><h3>适用场景 / When to use</h3><p data-usage></p></div><div class="detail"><h3>设计原则 / Key principle</h3><p data-principle></p></div><div class="detail"><h3>视觉构成 / Anatomy</h3><p data-anatomy></p></div><div class="detail"><h3>调节建议 / Tuning guide</h3><p data-tuning></p></div></div></section></div></main></div><script src="../assets/browser.js"></script></body></html>`;
 await writeFile(`terms/${term.id}.html`,html);
}
const sitemapPaths=['',...categories.map(cat=>`categories/${cat.id}.html`),...terms.map(term=>`terms/${term.id}.html`)];
await writeFile('sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapPaths.map(path=>`  <url><loc>${siteUrl}/${path}</loc></url>`).join('\n')}\n</urlset>\n`);
await writeFile('robots.txt',`User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
console.log(`Generated ${categories.length} category pages and ${terms.length} term pages.`);
