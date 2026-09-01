import {categories,terms,byCategory,getCategory,getTerm} from '../data/lexicon.js';
import {controlDefinitions,controlsForDemo} from '../data/controls.js';
import {getExtraDemoMarkup} from './extra-demos.js';

const base = location.pathname.includes('/categories/') || location.pathname.includes('/terms/') ? '../' : './';
const FAVORITES_KEY='ui-wiki-favorites';
const RECENT_KEY='ui-wiki-recent';
const COMPARE_KEY='ui-wiki-compare';
const readList=key=>{try{return JSON.parse(localStorage.getItem(key)||'[]')}catch{return[]}};
const writeList=(key,list)=>{try{localStorage.setItem(key,JSON.stringify(list))}catch{}};
const toggleList=(key,id,limit=30)=>{const list=readList(key),next=list.includes(id)?list.filter(item=>item!==id):[id,...list].slice(0,limit);writeList(key,next);return next};
const categoryGroups={
'ui-layout':[
  {id:'foundations',name:'基础结构',start:'grid-layout'},
  {id:'navigation',name:'导航结构',start:'top-app-bar'},
  {id:'reading',name:'阅读与内容',start:'single-column-reading-flow'},
  {id:'collections',name:'列表与集合',start:'compact-data-list'},
  {id:'workspace',name:'工作台与数据',start:'kpi-overview-layout'},
  {id:'flows',name:'表单与流程',start:'long-form-layout'},
  {id:'marketing',name:'营销与内容页',start:'saas-hero-layout'},
  {id:'spatial',name:'地图与空间',start:'map-sidebar-layout'},
  {id:'responsive',name:'响应式布局',start:'container-query-layout'},
  {id:'experimental',name:'实验性构图',start:'freeform-canvas-layout'}
],
'ui-visual':[
  {id:'materials',name:'材质与表面',demos:['glass','neu','clay','liquid','fx-visual-frost','fx-visual-metal','fx-visual-paper','fx-visual-gloss','fx-visual-border','fx-visual-shadow','fx-visual-acrylic','fx-visual-film','fx-visual-chrome','fx-visual-ceramic','fx-visual-velvet','fx-visual-carbon','fx-visual-plastic','fx-visual-emboss','fx-visual-inset']},
  {id:'light-color',name:'光色与渐变',demos:['mesh','aurora','holographic','fx-visual-neon','fx-visual-fluid','fx-visual-caustics','fx-visual-lumagrid','fx-visual-volume','fx-visual-grain','fx-visual-biolume']},
  {id:'visual-systems',name:'层次与视觉系统',demos:['layers','fx-visual-pixel','fx-visual-wire','fx-visual-meshglass','fx-visual-dither','fx-visual-scanline','fx-visual-radialglass','fx-visual-chromashadow','fx-visual-lens']}
],
'interaction':[
  {id:'interaction-basics',name:'基础反馈',start:'micro-interaction',demos:['fx-layout-palette']},
  {id:'click-feedback',name:'点击与触发',start:'button-squish'},
  {id:'transitions',name:'转场与导航',start:'shared-element-transition'},
  {id:'scroll',name:'滚动与视差',start:'scroll-parallax'},
  {id:'drag',name:'拖拽与排序',start:'drag-reorder'},
  {id:'gestures',name:'手势与触控',start:'swipe-actions'},
  {id:'forms',name:'表单反馈',start:'floating-label-input'},
  {id:'lists',name:'列表与集合',start:'list-insert-motion'},
  {id:'states',name:'状态与容错',start:'optimistic-update-feedback',demos:['fx-layout-emptystate','fx-layout-errorrecovery']},
  {id:'pointer',name:'指针与悬停',start:'custom-cursor'},
  {id:'physics',name:'物理与空间',start:'gravity-drop'}
],
'graphic':[
  {id:'graphic-basics',name:'基础构成',start:'visual-hierarchy'},
  {id:'style',name:'风格语言',start:'de-stijl'},
  {id:'retro',name:'复古与未来',start:'art-nouveau'},
  {id:'print',name:'印刷与排版',start:'screen-print'},
  {id:'photo',name:'摄影处理',start:'solarization'},
  {id:'glitch',name:'故障与数字质感',start:'databending'},
  {id:'collage',name:'拼贴与混合媒介',start:'digital-scrapbook'},
  {id:'pattern',name:'纹样与装饰',start:'checkerboard-pattern'},
  {id:'illustration',name:'插画语言',start:'flat-illustration'},
  {id:'information',name:'信息图形',start:'infographic-poster'},
  {id:'web-graphics',name:'网页图形',start:'web-brutalism-graphic'}
],
'cover':[
  {id:'cover-basics',name:'基础封面',start:'minimal-cover'},
  {id:'type-covers',name:'文字主导',start:'single-word-cover'},
  {id:'photo-covers',name:'摄影主导',start:'portrait-closeup-cover'},
  {id:'process-covers',name:'工艺与印刷',start:'dithered-image-cover'},
  {id:'illustrated-covers',name:'插画主导',start:'flat-illustration-cover'},
  {id:'geometric-covers',name:'几何构成',start:'concentric-circle-cover'},
  {id:'material-covers',name:'材质与空间',start:'foil-stamped-cover'},
  {id:'archive-covers',name:'档案与编辑',start:'library-card-cover'},
  {id:'spatial-covers',name:'空间场景',start:'tunnel-perspective-cover'},
  {id:'mood-covers',name:'氛围情绪',start:'obscured-mystery-cover'},
  {id:'series-covers',name:'系列系统',start:'color-coded-series-cover'}
],
'color-type':[
  {id:'color-basics',name:'色彩基础',start:'duotone'},
  {id:'color-relations',name:'配色关系',start:'analogous-colors'},
  {id:'typography',name:'字体与字形',start:'condensed-type'},
  {id:'color-systems',name:'色彩系统',start:'tetradic-colors'},
  {id:'value-chroma',name:'明度与纯度',start:'high-value-palette'}
]
};
const categoryGroupFor=term=>{
  const groups=categoryGroups[term.cat]||[];
  const explicit=groups.find(group=>group.demos?.includes(term.demo));
  if(explicit)return explicit;
  const list=byCategory(term.cat),index=list.findIndex(item=>item.id===term.id);
  return [...groups].reverse().find(group=>group.start&&index>=list.findIndex(item=>item.id===group.start))||groups[0]||null;
};
const demoMarkup = type => {
  const extraMarkup=getExtraDemoMarkup(type);if(extraMarkup)return extraMarkup;
  if(['grid','bento','asym','layers'].includes(type)) return `<div class="demo d-${type}"><i></i><i></i><i></i><i></i><i></i></div>`;
  if(type==='split') return '<div class="demo d-split"><i></i><i></i></div>';
  if(['glass','abstract'].includes(type)) return `<div class="demo d-${type}"><i></i></div>`;
  if(['neu','mesh','duotone','mono'].includes(type)) return `<div class="demo d-${type}"></div>`;
  if(type==='micro') return '<div class="demo d-micro"><button type="button">♡ Like</button></div>';
  if(type==='spring') return '<div class="demo d-spring"><button type="button">Press</button></div>';
  if(type==='hover') return '<div class="demo d-hover"><i></i></div>';
  if(type==='skeleton') return '<div class="demo d-skeleton"><i></i><i></i><i></i><i></i></div>';
  if(['swiss','brutal','editorial','collage','minimal','typecover','imagecover','abstract'].includes(type)){
    const words={swiss:'A—01',brutal:'RAW!',editorial:'THE EDIT',collage:'MIX',minimal:'Quiet Forms',typecover:'TYPE',imagecover:'FIELD NOTES'};
    return `<div class="demo d-${type}"><div class="poster"><i></i><b>${words[type]||''}</b><span>Design archive / 2026</span></div></div>`;
  }
  if(type==='variable') return '<div class="demo d-variable"><b>FLEX</b></div>';
  if(type==='masonry') return '<div class="demo d-masonry"><i></i><i></i><i></i><i></i><i></i><i></i></div>';
  if(type==='stack') return '<div class="demo d-stack"><i></i><i></i><i></i></div>';
  if(type==='aurora') return '<div class="demo d-aurora"><i></i></div>';
  if(type==='clay') return '<div class="demo d-clay"><i></i><i></i><i></i></div>';
  if(type==='magnetic') return '<div class="demo d-magnetic"><button type="button">Explore</button></div>';
  if(type==='accordion') return '<div class="demo d-accordion"><button type="button">设计原则 <b>＋</b></button><p>清楚、克制，并始终服务内容。</p></div>';
  if(type==='grain') return '<div class="demo d-grain"><b>GRAIN</b><i></i></div>';
  if(type==='kinetic') return '<div class="demo d-kinetic"><b>MOVE</b><b>TYPE</b></div>';
  if(type==='diagonal') return '<div class="demo d-diagonal"><div class="poster"><i></i><b>FORWARD</b></div></div>';
  if(type==='framed') return '<div class="demo d-framed"><div class="poster"><i></i><b>FRAME<br>STUDIES</b></div></div>';
  if(type==='complementary') return '<div class="demo d-complementary"><i></i><i></i></div>';
  if(type==='outline') return '<div class="demo d-outline"><b>LINE</b></div>';
  if(type==='overlap') return '<div class="demo d-overlap"><i></i><i></i><i></i><b>12</b></div>';
  if(type==='sidebar') return '<div class="demo d-sidebar"><i></i><span></span><span></span><span></span></div>';
  if(type==='holographic') return '<div class="demo d-holographic"><i></i><b>PRISM</b></div>';
  if(type==='liquid') return '<div class="demo d-liquid"><i></i><i></i></div>';
  if(type==='ripple') return '<div class="demo d-ripple"><button type="button"><i></i>Tap</button></div>';
  if(type==='tilt') return '<div class="demo d-tilt"><div><i></i><b>DEPTH</b><span>Interactive surface</span></div></div>';
  if(type==='riso') return '<div class="demo d-riso"><i></i><i></i><b>RISO</b></div>';
  if(type==='halftone') return '<div class="demo d-halftone"><b>DOT</b></div>';
  if(type==='diecut') return '<div class="demo d-diecut"><div class="poster"><i></i><b>INSIDE</b><span>Cut / reveal / connect</span></div></div>';
  if(type==='verticalcover') return '<div class="demo d-verticalcover"><div class="poster"><i></i><b>VERTICAL</b><span>NEW READING</span></div></div>';
  if(type==='chromatic') return '<div class="demo d-chromatic"><b>SHIFT</b></div>';
  if(type==='gradienttype') return '<div class="demo d-gradienttype"><b>FLOW</b></div>';
  return '<div class="demo d-contrast"><div><b>Contrast</b><br><span>TYPE SYSTEM</span></div></div>';
};

function shell(active=''){
  document.querySelector('[data-nav]').innerHTML=categories.map(c=>`<a class="${active===c.id?'active':''}" href="${base}categories/${c.id}.html"><span>${c.name}</span><em>${byCategory(c.id).length}</em></a>`).join('');
  const sidebarFoot=document.querySelector('.sidebar-foot');
  if(sidebarFoot&&!document.querySelector('.github-star'))sidebarFoot.insertAdjacentHTML('beforebegin','<a class="github-star" href="https://github.com/xvshiting/ui-wiki" target="_blank" rel="noopener noreferrer" aria-label="在 GitHub 上给设计效果百科点 Star"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.24c-3.22.7-3.9-1.37-3.9-1.37-.52-1.34-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.57-.29-5.27-1.28-5.27-5.69 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.16 1.18a10.94 10.94 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.82 1.19 3.08 0 4.42-2.71 5.39-5.29 5.68.42.36.79 1.07.79 2.16v3.2c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .7Z"/></svg><span><strong>Star on GitHub</strong><small>喜欢这个项目？支持一下</small></span><b aria-hidden="true">★</b></a>');
  const input=document.querySelector('[data-search]');
  const results=document.createElement('div'); results.className='search-results'; results.setAttribute('aria-live','polite');
  input?.closest('.search-wrap').appendChild(results);
  input?.addEventListener('input',()=>{
    const q=input.value.trim().toLowerCase();
    if(!q){results.classList.remove('open');results.innerHTML='';return}
    const matches=terms.filter(t=>`${t.name} ${t.en} ${t.tags.join(' ')} ${getCategory(t.cat).name}`.toLowerCase().includes(q));
    results.innerHTML=matches.length?matches.slice(0,8).map(t=>`<a href="${base}terms/${t.id}.html"><span><b>${t.name}</b><small>${t.en}</small></span><em>${getCategory(t.cat).name}</em></a>`).join(''):'<p>没有匹配的术语</p>';
    results.classList.add('open');
  });
  document.addEventListener('click',e=>{if(!e.target.closest('.search-wrap'))results.classList.remove('open')});
  mountCompareTray();
}
function termCard(term){const saved=readList(FAVORITES_KEY).includes(term.id),group=categoryGroupFor(term);return `<article class="term-card" data-filter="${term.name} ${term.en} ${term.tags.join(' ')}"${group?` data-category-group="${group.id}"`:''}><button class="term-favorite${saved?' is-saved':''}" data-favorite="${term.id}" type="button" aria-label="${saved?'取消收藏':'收藏'} ${term.name}" aria-pressed="${saved}">${saved?'★':'☆'}</button><div class="preview" tabindex="0" role="button" aria-label="预览 ${term.name}">${demoMarkup(term.demo)}</div><small>${group?`${getCategory(term.cat).name} · ${group.name}`:getCategory(term.cat).name}</small><h3><a class="term-card-link" href="${base}terms/${term.id}.html">${term.name}</a></h3><p>${term.en}</p><div class="tags">${term.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div></article>`}
function mountCategoryGroups(catId){
  const grid=document.querySelector('[data-terms]');if(!grid)return;
  const groups=categoryGroups[catId]||[];if(!groups.length)return;
  const bar=document.createElement('nav');bar.className='layout-groups category-groups';bar.setAttribute('aria-label',`${getCategory(catId).name}二级分组`);
  const counts=Object.fromEntries(groups.map(group=>[group.id,grid.querySelectorAll(`[data-category-group="${group.id}"]`).length]));
  bar.innerHTML=`<button class="active" type="button" data-group-filter="all">全部 <b>${grid.children.length}</b></button>${groups.filter(group=>counts[group.id]).map(group=>`<button type="button" data-group-filter="${group.id}">${group.name} <b>${counts[group.id]}</b></button>`).join('')}`;
  grid.before(bar);
  bar.addEventListener('click',event=>{const button=event.target.closest('[data-group-filter]');if(!button)return;bar.querySelectorAll('button').forEach(item=>item.classList.toggle('active',item===button));grid.querySelectorAll('.term-card').forEach(card=>card.hidden=button.dataset.groupFilter!=='all'&&card.dataset.categoryGroup!==button.dataset.groupFilter)});
}
function mountCompareTray(){
  if(document.querySelector('.compare-tray'))return;
  const tray=document.createElement('aside');tray.className='compare-tray';tray.setAttribute('aria-live','polite');document.body.append(tray);
  const render=()=>{const ids=readList(COMPARE_KEY).filter(id=>getTerm(id));if(!ids.length){tray.classList.remove('open');tray.innerHTML='';return}tray.classList.add('open');tray.innerHTML=`<div class="compare-tray-head"><strong>效果对比 (${ids.length}/3)</strong><button type="button" data-clear-compare>清空</button></div><div class="compare-items">${ids.map(id=>{const t=getTerm(id);return `<a href="${base}terms/${t.id}.html"><span>${t.name}</span><b data-remove-compare="${t.id}" aria-label="移除 ${t.name}">×</b></a>`}).join('')}</div><p>选择 2–3 个效果，在详情页查看。</p>`};
  render();tray._render=render;
}
function mountTermActions(term){
  const stage=document.querySelector('.stage');if(!stage||document.querySelector('.term-actions'))return;
  const saved=readList(FAVORITES_KEY).includes(term.id),compared=readList(COMPARE_KEY).includes(term.id);
  const actions=document.createElement('div');actions.className='term-actions';actions.innerHTML=`<button type="button" data-term-favorite aria-pressed="${saved}">${saved?'★ 已收藏':'☆ 收藏'}</button><button type="button" data-term-compare aria-pressed="${compared}">${compared?'✓ 已加入对比':'＋ 加入对比'}</button><button type="button" data-export-css>复制 CSS</button>`;stage.insertAdjacentElement('afterend',actions);
}
function recordRecent(term){writeList(RECENT_KEY,[term.id,...readList(RECENT_KEY).filter(id=>id!==term.id)].slice(0,12))}

const page=document.body.dataset.page;
const controls=controlDefinitions;
function mountConfigurator(term){
  const stage=document.querySelector('.stage .demo'); if(!stage)return;
  const panel=document.createElement('section'); panel.className='configurator';
  const keys=controlsForDemo(term.demo);
  panel.innerHTML=`<div class="config-head"><h3>效果参数实验室</h3><button class="reset-config" type="button">恢复默认</button></div><div class="control-grid">${keys.map(key=>{const c=controls[key];return `<div class="control"><label><span>${c.label}</span><output>${c.value}${c.unit||''}</output></label><input data-control="${key}" type="${c.type}" value="${c.value}" ${c.type==='range'?`min="${c.min}" max="${c.max}"`:''}></div>`}).join('')}</div><p class="hint">所有参数只影响当前预览，可以自由组合并比较视觉差异。</p>`;
  document.querySelector('.stage').insertAdjacentElement('afterend',panel);
  const apply=input=>{const c=controls[input.dataset.control],raw=input.value,value=c.transform==='percent'?raw/100:c.transform==='seconds'?`${raw/10}s`:c.transform==='degrees'?`${raw}deg`:`${raw}${c.unit===' px'?'px':''}`;document.querySelector('.stage .demo')?.style.setProperty(c.var,value);input.closest('.control').querySelector('output').textContent=`${raw}${c.unit||''}`};
  panel.querySelectorAll('input').forEach(input=>input.addEventListener('input',()=>apply(input)));
  panel.querySelector('.reset-config').addEventListener('click',()=>panel.querySelectorAll('input').forEach(input=>{input.value=controls[input.dataset.control].value;apply(input)}));
}
function mountCopyActions(term){
  const pairs=[[document.querySelector('[data-title]'),term.name,'复制中文'],[document.querySelector('[data-en]'),term.en,'复制英文']];
  pairs.forEach(([target,value,label])=>{if(!target)return;const wrap=document.createElement('div');wrap.className=target.matches('h1')?'copy-row copy-title':'copy-row copy-en';target.before(wrap);wrap.append(target);const button=document.createElement('button');button.type='button';button.className='copy-term';button.setAttribute('aria-label',label);button.innerHTML='复制';button.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(value)}catch{const area=document.createElement('textarea');area.value=value;document.body.append(area);area.select();document.execCommand('copy');area.remove()}button.textContent='已复制';setTimeout(()=>button.textContent='复制',1200)});wrap.append(button)});
}
function mountSequenceNav(term){
  const list=byCategory(term.cat),index=list.findIndex(item=>item.id===term.id),previous=list[index-1],next=list[index+1];
  const nav=document.createElement('nav');nav.className='sequence-nav';nav.setAttribute('aria-label','术语前后导航');
  nav.innerHTML=`${previous?`<a href="../terms/${previous.id}.html"><small>← 上一个</small><b>${previous.name}</b></a>`:'<span></span>'}${next?`<a class="next" href="../terms/${next.id}.html"><small>下一个 →</small><b>${next.name}</b></a>`:'<span></span>'}`;
  document.querySelector('[data-back]').insertAdjacentElement('afterend',nav);
}
const formatDeclarations=style=>Array.from(style).map(name=>`  ${name}: ${style.getPropertyValue(name).trim()}${style.getPropertyPriority(name)?' !important':''};`).join('\n');
const formatStyleRule=(rule,selectors=rule.selectorText)=>`${selectors} {\n${formatDeclarations(rule.style)}\n}`;
function relatedCSS(term){
  const token=`d-${term.demo}`,keyframes=new Map(),matched=[];
  const walk=rules=>{
    const found=[];
    for(const rule of rules){
      if(rule.type===7||/^@(?:-webkit-)?keyframes/i.test(rule.cssText)){const name=rule.name||rule.cssText.match(/keyframes\s+([^\s{]+)/i)?.[1];if(name)keyframes.set(name,rule.cssText);continue}
      if(rule.selectorText){
        const selectors=rule.selectorText.split(',').map(item=>item.trim()).filter(item=>item.includes(token)||item==='.stage .demo'||item==='.stage .demo *'||item==='.demo');
        if(selectors.length)found.push(formatStyleRule(rule,selectors.join(',\n')));
        continue;
      }
      if(rule.cssRules){const nested=walk(rule.cssRules);if(nested.length){const header=rule.cssText.slice(0,rule.cssText.indexOf('{')).trim();found.push(`${header} {\n${nested.join('\n\n')}\n}`)}}
    }
    return found;
  };
  for(const sheet of document.styleSheets){try{matched.push(...walk(sheet.cssRules))}catch{}}
  const base=`.stage {\n  min-height: 360px;\n  display: grid;\n  place-items: center;\n  overflow: hidden;\n  background: #0b1625;\n}\n\n.demo {\n  --demo-color: #53d7d0;\n  --demo-color-2: #ff8066;\n  --demo-radius: 16px;\n  --demo-gap: 8px;\n  --demo-scale: 1;\n  --demo-speed: 1.4s;\n  --demo-intensity: 16px;\n  --demo-rotate: 0deg;\n  width: min(82vw, 680px);\n  height: 300px;\n  position: relative;\n}`;
  const selected=matched.join('\n\n'),animations=[...keyframes].filter(([name])=>new RegExp(`(?:animation(?:-name)?[^;}]*)\\b${name}\\b`).test(selected)).map(([,css])=>css);
  return [base,selected,...animations].filter(Boolean).join('\n\n');
}
const copyText=async text=>{try{await navigator.clipboard.writeText(text)}catch{const area=document.createElement('textarea');area.value=text;document.body.append(area);area.select();document.execCommand('copy');area.remove()}};
const standalonePage=(title,html,css)=>{const holder=document.createElement('div');holder.innerHTML=html;const sourceDemo=holder.querySelector('.demo'),liveDemo=document.querySelector('.stage .demo');if(sourceDemo&&liveDemo?.style.cssText)sourceDemo.style.cssText+=liveDemo.style.cssText;return `<!doctype html>\n<html lang="zh-CN">\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width,initial-scale=1">\n  <title>${title} · UI Wiki</title>\n  <style>\n    * { box-sizing: border-box; }\n    body { margin: 0; min-height: 100vh; display: grid; place-items: center; background: #07111f; font-family: system-ui, sans-serif; }\n${css}\n  </style>\n</head>\n<body>\n  <main class="stage">\n${holder.innerHTML}\n  </main>\n</body>\n</html>`};
function mountSourceLab(term){
  if(!document.querySelector('link[data-source-lab-style]')){const link=document.createElement('link');link.rel='stylesheet';link.href=`${base}assets/source-lab.css`;link.dataset.sourceLabStyle='';document.head.append(link)}
  const panel=document.createElement('section');panel.className='source-lab';
  const originalHTML=demoMarkup(term.demo),originalCSS=relatedCSS(term);
  panel.innerHTML=`<div class="source-head"><div><span>SOURCE PLAYGROUND</span><h3>完整源码 · 可修改 · 可导出</h3></div><div class="source-actions"><button type="button" data-reset-code>恢复</button><button class="run-code" type="button" data-run-code>运行修改</button></div></div><div class="source-export" aria-label="源码导出"><button type="button" data-copy-source="html">复制 HTML</button><button type="button" data-copy-source="css">复制 CSS</button><button type="button" data-copy-source="page">复制完整页面</button><button type="button" data-download-source>下载 HTML</button></div><div class="code-tabs" role="tablist" aria-label="源码类型"><button class="active" type="button" role="tab" aria-selected="true" data-code-tab="html">HTML</button><button type="button" role="tab" aria-selected="false" data-code-tab="css">CSS · ${originalCSS.split('\n').length} 行</button></div><div class="code-editor active" data-code-panel="html"><textarea spellcheck="false" aria-label="HTML 源代码"></textarea></div><div class="code-editor" data-code-panel="css"><textarea spellcheck="false" aria-label="CSS 源代码"></textarea></div><p class="code-status" aria-live="polite">已包含共享变量、效果规则和相关动画关键帧。修改后点击“运行修改”。</p>`;
  panel.querySelector('[data-code-panel="html"] textarea').value=originalHTML;
  panel.querySelector('[data-code-panel="css"] textarea').value=originalCSS;
  document.querySelector('.details').insertAdjacentElement('beforebegin',panel);
  panel.querySelectorAll('[data-code-tab]').forEach(button=>button.addEventListener('click',()=>{panel.querySelectorAll('[data-code-tab],.code-editor').forEach(el=>el.classList.remove('active'));panel.querySelectorAll('[data-code-tab]').forEach(tab=>tab.setAttribute('aria-selected',tab===button));button.classList.add('active');panel.querySelector(`[data-code-panel="${button.dataset.codeTab}"]`).classList.add('active')}));
  const current=()=>({html:panel.querySelector('[data-code-panel="html"] textarea').value,css:panel.querySelector('[data-code-panel="css"] textarea').value});
  const notify=message=>{panel.querySelector('.code-status').textContent=message;setTimeout(()=>panel.querySelector('.code-status').textContent='已包含共享变量、效果规则和相关动画关键帧。修改后点击“运行修改”。',1800)};
  const render=()=>{const html=panel.querySelector('[data-code-panel="html"] textarea').value,css=panel.querySelector('[data-code-panel="css"] textarea').value;document.querySelector('[data-demo]').innerHTML=html;let style=document.getElementById('live-demo-style');if(!style){style=document.createElement('style');style.id='live-demo-style';document.head.append(style)}style.textContent=css;panel.querySelector('.code-status').textContent='✓ 修改已应用到上方预览';setTimeout(()=>panel.querySelector('.code-status').textContent='修改代码后点击“运行修改”，效果会在上方预览中更新。',1800)};
  panel.querySelector('[data-run-code]').addEventListener('click',render);
  panel.querySelector('[data-reset-code]').addEventListener('click',()=>{panel.querySelector('[data-code-panel="html"] textarea').value=originalHTML;panel.querySelector('[data-code-panel="css"] textarea').value=originalCSS;render()});
  panel.querySelectorAll('[data-copy-source]').forEach(button=>button.addEventListener('click',async()=>{const source=current(),kind=button.dataset.copySource,text=kind==='html'?source.html:kind==='css'?source.css:standalonePage(term.name,source.html,source.css);await copyText(text);notify(`✓ ${kind==='page'?'完整 HTML 页面':kind.toUpperCase()} 已复制`)}));
  panel.querySelector('[data-download-source]').addEventListener('click',()=>{const source=current(),blob=new Blob([standalonePage(term.name,source.html,source.css)],{type:'text/html'}),url=URL.createObjectURL(blob),link=document.createElement('a');link.href=url;link.download=`${term.id}-ui-wiki.html`;link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);notify('✓ 可独立运行的 HTML 已下载')});
}
function balanceTermLayout(){
  const details=document.querySelector('.details'),tags=document.querySelector('[data-tags]');
  if(!details||!tags)return;
  details.classList.add('term-knowledge');
  tags.insertAdjacentElement('afterend',details);
}
if(page==='home'){
  shell();
  document.querySelector('.stat b').textContent=terms.length;
  document.querySelector('[data-categories]').innerHTML=categories.map(c=>`<a class="category-card" style="--card-color:${c.color}" href="categories/${c.id}.html"><small>${c.en}</small><h3>${c.name}</h3><p>${c.intro}</p><span class="card-count">${byCategory(c.id).length} EFFECTS →</span></a>`).join('');
  document.querySelector('[data-latest]').innerHTML=terms.slice(0,6).map(termCard).join('');
  const recent=readList(RECENT_KEY).map(id=>getTerm(id)).filter(Boolean).slice(0,6);
  if(recent.length){const section=document.createElement('section');section.className='section recent-section';section.innerHTML=`<div class="section-head"><div><div class="eyebrow">YOUR HISTORY</div><h2>最近浏览</h2></div><p>仅保存在当前浏览器</p></div><div class="term-grid">${recent.map(termCard).join('')}</div>`;document.querySelector('.main').append(section)}
}else if(page==='category'){
  const cat=getCategory(document.body.dataset.id); shell(cat.id);
  document.title=`${cat.name} — 设计效果百科`;
  document.querySelector('[data-title]').textContent=cat.name;
  document.querySelector('[data-en]').textContent=cat.en;
  document.querySelector('[data-intro]').textContent=cat.intro;
  document.querySelector('[data-count]').textContent=byCategory(cat.id).length;
  document.querySelector('[data-terms]').innerHTML=byCategory(cat.id).map(termCard).join('');
  mountCategoryGroups(cat.id);
}else if(page==='term'){
  const term=getTerm(document.body.dataset.id),cat=getCategory(term.cat); shell(cat.id);
  document.title=`${term.name} — 设计效果百科`;
  document.querySelector('[data-breadcrumb]').innerHTML=`<a href="../index.html">首页</a><span>/</span><a href="../categories/${cat.id}.html">${cat.name}</a><span>/</span><span>${term.name}</span>`;
  document.querySelector('[data-title]').textContent=term.name;
  document.querySelector('[data-en]').textContent=term.en;
  document.querySelector('[data-summary]').textContent=term.summary;
  document.querySelector('[data-demo]').innerHTML=demoMarkup(term.demo);
  document.querySelector('[data-usage]').textContent=term.usage;
  document.querySelector('[data-principle]').textContent=term.principle;
  document.querySelector('[data-anatomy]').textContent=`这一效果的主要视觉线索是${term.tags.join('、')}。构建时应先确定信息目标，再逐步加入这些形式特征，并在不同尺寸下检查层级是否仍然清楚。`;
  document.querySelector('[data-tuning]').textContent=`建议从默认值开始，每次只调整一个参数。当前示例可重点比较${controlsForDemo(term.demo).map(key=>controls[key].label).join('、')}对整体气质和可读性的影响。`;
  document.querySelector('[data-tags]').innerHTML=term.tags.map(t=>`<span class="tag">${t}</span>`).join('');
  document.querySelector('[data-back]').href=`../categories/${cat.id}.html`;
  document.querySelector('[data-back]').textContent=`← 返回${cat.name}`;
  mountCopyActions(term);
  mountSequenceNav(term);
  recordRecent(term);
  mountTermActions(term);
  mountConfigurator(term);
  mountSourceLab(term);
  balanceTermLayout();
}

document.addEventListener('click',e=>{
  const favorite=e.target.closest('[data-favorite]');
  if(favorite){e.preventDefault();const id=favorite.dataset.favorite,saved=toggleList(FAVORITES_KEY,id).includes(id);favorite.classList.toggle('is-saved',saved);favorite.setAttribute('aria-pressed',saved);favorite.setAttribute('aria-label',`${saved?'取消收藏':'收藏'} ${getTerm(id)?.name||''}`);favorite.textContent=saved?'★':'☆';return}
  const termFavorite=e.target.closest('[data-term-favorite]');
  if(termFavorite){e.preventDefault();const id=document.body.dataset.id,saved=toggleList(FAVORITES_KEY,id).includes(id);termFavorite.setAttribute('aria-pressed',saved);termFavorite.textContent=saved?'★ 已收藏':'☆ 收藏';return}
  const termCompare=e.target.closest('[data-term-compare]');
  if(termCompare){e.preventDefault();const id=document.body.dataset.id,ids=readList(COMPARE_KEY);if(!ids.includes(id)&&ids.length>=3){termCompare.textContent='对比最多 3 项';return}const next=toggleList(COMPARE_KEY,id,3),active=next.includes(id);termCompare.setAttribute('aria-pressed',active);termCompare.textContent=active?'✓ 已加入对比':'＋ 加入对比';document.querySelector('.compare-tray')?._render?.();return}
  const exportCSS=e.target.closest('[data-export-css]');
  if(exportCSS){e.preventDefault();const term=getTerm(document.body.dataset.id);if(term){const text=relatedCSS(term);navigator.clipboard?.writeText(text).catch(()=>{});exportCSS.textContent='✓ CSS 已复制';setTimeout(()=>exportCSS.textContent='复制 CSS',1400)}return}
  const clearCompare=e.target.closest('[data-clear-compare]');if(clearCompare){writeList(COMPARE_KEY,[]);document.querySelector('.compare-tray')?._render?.();return}
  const removeCompare=e.target.closest('[data-remove-compare]');if(removeCompare){e.preventDefault();toggleList(COMPARE_KEY,removeCompare.dataset.removeCompare);document.querySelector('.compare-tray')?._render?.();return}
  const preview=e.target.closest('.term-card .preview');
  if(preview){e.preventDefault();preview.closest('.term-card').classList.toggle('preview-active')}
  const b=e.target.closest('.d-micro button');if(b){e.preventDefault();b.textContent=b.textContent.includes('♡')?'♥ Liked':'♡ Like'}
  const ripple=e.target.closest('.d-ripple button');if(ripple){e.preventDefault();ripple.classList.remove('is-rippling');void ripple.offsetWidth;ripple.classList.add('is-rippling')}
  const acc=e.target.closest('.d-accordion button');if(acc){e.preventDefault();acc.parentElement.classList.toggle('open');acc.querySelector('b').textContent=acc.parentElement.classList.contains('open')?'−':'＋'}
  const morph=e.target.closest('.d-fx-motion-morph button');if(morph){e.preventDefault();morph.classList.toggle('done');morph.textContent=morph.classList.contains('done')?'':'Submit'}
  const snap=e.target.closest('.d-fx-motion-snap');if(snap){e.preventDefault();snap.classList.toggle('snapped')}
  const pageFx=e.target.closest('.d-fx-motion-page button');if(pageFx){e.preventDefault();pageFx.parentElement.classList.toggle('next')}
  const flip=e.target.closest('.d-fx-motion-flip button');if(flip){e.preventDefault();flip.classList.toggle('flipped')}
  const toggle=e.target.closest('.d-fx-motion-toggle button');if(toggle){e.preventDefault();const on=toggle.getAttribute('aria-pressed')!=='true';toggle.setAttribute('aria-pressed',on);toggle.parentElement.querySelector('b').textContent=on?'ON':'OFF'}
  const count=e.target.closest('.d-fx-motion-count button');if(count){e.preventDefault();const output=count.querySelector('b'),start=Number(output.textContent)||0,target=start+24;let value=start;const tick=()=>{value+=2;output.textContent=Math.min(value,target);if(value<target)requestAnimationFrame(tick)};requestAnimationFrame(tick)}
  const burst=e.target.closest('.d-motion-click-burst button');if(burst){e.preventDefault();burst.classList.remove('burst');void burst.offsetWidth;burst.classList.add('burst')}
  const particles=e.target.closest('.d-motion-click-particles button');if(particles){e.preventDefault();particles.querySelectorAll('i').forEach(item=>item.remove());for(let i=0;i<12;i++){const dot=document.createElement('i');dot.style.setProperty('--n',i);particles.append(dot)}setTimeout(()=>particles.querySelectorAll('i').forEach(item=>item.remove()),800)}
  const ink=e.target.closest('.d-motion-click-ink button');if(ink){e.preventDefault();ink.classList.toggle('active')}
  const indent=e.target.closest('.d-motion-click-indent button');if(indent){e.preventDefault();indent.classList.toggle('pressed')}
  const bounce=e.target.closest('.d-motion-click-iconbounce button');if(bounce){e.preventDefault();bounce.classList.remove('bounce');void bounce.offsetWidth;bounce.classList.add('bounce')}
  const success=e.target.closest('.d-motion-click-success button');if(success){e.preventDefault();success.classList.toggle('success');success.querySelector('b').textContent=success.classList.contains('success')?'SAVED':'SAVE'}
  const error=e.target.closest('.d-motion-click-error label');if(error){error.classList.remove('shake');void error.offsetWidth;error.classList.add('shake')}
  const nav=e.target.closest('.d-motion-nav-shared,.d-motion-nav-container,.d-motion-nav-circular,.d-motion-nav-blinds,.d-motion-nav-wipe,.d-motion-nav-pixel,.d-motion-nav-ink,.d-motion-nav-card,.d-motion-nav-depth,.d-motion-nav-axis');if(nav&&e.target.closest('button')){e.preventDefault();nav.classList.toggle('is-open')}
});

document.addEventListener('keydown',e=>{const preview=e.target.closest('.term-card .preview');if(preview&&(e.key==='Enter'||e.key===' ')){e.preventDefault();preview.closest('.term-card').classList.toggle('preview-active')}});

document.addEventListener('pointermove',e=>{const box=e.target.closest('.d-magnetic');if(!box)return;const b=box.querySelector('button'),r=box.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.12}px,${(e.clientY-r.top-r.height/2)*.12}px)`});
document.addEventListener('pointermove',e=>{const box=e.target.closest('.d-tilt');if(!box)return;const card=box.firstElementChild,r=box.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`rotateX(${-y*12}deg) rotateY(${x*12}deg)`});
document.addEventListener('pointerout',e=>{const box=e.target.closest('.d-tilt');if(box&&!box.contains(e.relatedTarget))box.firstElementChild.style.transform=''});
document.addEventListener('pointermove',e=>{const box=e.target.closest('.d-fx-motion-spotlight');if(!box)return;const r=box.getBoundingClientRect();box.style.setProperty('--spot-x',`${((e.clientX-r.left)/r.width)*100}%`);box.style.setProperty('--spot-y',`${((e.clientY-r.top)/r.height)*100}%`)});
document.addEventListener('pointermove',e=>{const box=e.target.closest('.d-motion-pointer-blend');if(!box)return;const r=box.getBoundingClientRect();box.style.setProperty('--cursor-x',`${e.clientX-r.left}px`);box.style.setProperty('--cursor-y',`${e.clientY-r.top}px`);box.classList.add('is-pointer-active')});
document.addEventListener('pointerout',e=>{const box=e.target.closest('.d-motion-pointer-blend');if(box&&!box.contains(e.relatedTarget))box.classList.remove('is-pointer-active')});
document.addEventListener('pointermove',e=>{const box=e.target.closest('.d-motion-pointer-repel');if(!box)return;const r=box.getBoundingClientRect(),dx=e.clientX-(r.left+r.width/2),dy=e.clientY-(r.top+r.height/2),distance=Math.hypot(dx,dy),radius=Math.min(r.width,r.height)*.48,strength=Math.max(0,1-distance/radius),safeDistance=Math.max(distance,1),force=76*strength*strength;box.classList.remove('is-returning');box.classList.toggle('is-repelling',strength>0);box.style.setProperty('--repel-x',`${(-dx/safeDistance)*force}px`);box.style.setProperty('--repel-y',`${(-dy/safeDistance)*force}px`)});
document.addEventListener('pointerout',e=>{const box=e.target.closest('.d-motion-pointer-repel');if(!box||box.contains(e.relatedTarget))return;box.classList.remove('is-repelling');box.classList.add('is-returning');box.style.setProperty('--repel-x','0px');box.style.setProperty('--repel-y','0px')});
document.addEventListener('pointermove',e=>{const link=e.target.closest('.d-motion-pointer-preview [data-preview]');if(!link)return;const box=link.closest('.d-motion-pointer-preview'),r=box.getBoundingClientRect();box.style.setProperty('--preview-x',`${Math.min(e.clientX-r.left,r.width-155)}px`);box.style.setProperty('--preview-y',`${Math.max(48,Math.min(e.clientY-r.top,r.height-48))}px`);box.classList.add('is-preview-active');box.querySelectorAll('.cursor-preview i').forEach(item=>item.classList.toggle('active',item.id===link.dataset.preview))});
document.addEventListener('pointerout',e=>{const box=e.target.closest('.d-motion-pointer-preview');if(box&&!box.contains(e.relatedTarget))box.classList.remove('is-preview-active')});
document.addEventListener('focusin',e=>{const link=e.target.closest('.d-motion-pointer-preview [data-preview]');if(!link)return;const box=link.closest('.d-motion-pointer-preview');box.style.setProperty('--preview-x','35%');box.style.setProperty('--preview-y','50%');box.classList.add('is-preview-active');box.querySelectorAll('.cursor-preview i').forEach(item=>item.classList.toggle('active',item.id===link.dataset.preview))});
document.addEventListener('focusout',e=>{const box=e.target.closest('.d-motion-pointer-preview');if(box&&!box.contains(e.relatedTarget))box.classList.remove('is-preview-active')});
document.addEventListener('click',e=>{const trigger=e.target.closest('.d-motion-physics-focus [data-focus]');if(!trigger)return;e.preventDefault();const box=trigger.closest('.d-motion-physics-focus'),far=trigger.dataset.focus==='far';box.classList.toggle('focus-far',far);box.dataset.focusState=far?'far':'near';box.querySelectorAll('[data-focus]').forEach(button=>button.classList.toggle('active',button===trigger))});
document.addEventListener('pointerdown',e=>{const surface=e.target.closest('.d-motion-click-highlight button');if(surface){const r=surface.getBoundingClientRect();surface.style.setProperty('--touch-x',`${e.clientX-r.left}px`);surface.style.setProperty('--touch-y',`${e.clientY-r.top}px`);surface.classList.remove('touched');void surface.offsetWidth;surface.classList.add('touched')}const hold=e.target.closest('.d-motion-click-longpress button');if(hold){e.preventDefault();hold.classList.add('holding');hold._holdTimer=setTimeout(()=>{hold.classList.remove('holding');hold.classList.add('complete');hold.querySelector('b').textContent='DONE'},1200)}});
document.addEventListener('pointerup',e=>{const hold=e.target.closest('.d-motion-click-longpress button');if(hold){clearTimeout(hold._holdTimer);if(!hold.classList.contains('complete'))hold.classList.remove('holding')}});
document.addEventListener('pointercancel',e=>{const hold=e.target.closest('.d-motion-click-longpress button');if(hold){clearTimeout(hold._holdTimer);hold.classList.remove('holding')}});
document.addEventListener('dragstart',e=>{const item=e.target.closest('[draggable="true"]');if(item){item.classList.add('dragging');e.dataTransfer?.setData('text/plain','drag')}});
document.addEventListener('dragend',e=>{const item=e.target.closest('[draggable="true"]');if(item)item.classList.remove('dragging')});
document.addEventListener('click',e=>{const m=e.target.closest('.d-motion-drag-marquee');if(m&&e.target.tagName==='I')e.target.classList.toggle('selected')});
document.addEventListener('input',e=>{const otp=e.target.closest('.d-motion-form-otp');if(otp&&e.target.value)e.target.nextElementSibling?.focus();const tag=e.target.closest('.d-motion-form-tag input');if(tag&&e.inputType==='insertLineBreak'&&tag.value.trim()){const chip=document.createElement('b');chip.textContent=tag.value;tag.parentElement.querySelector('.tags').append(chip);tag.value=''}});
document.addEventListener('click',e=>{const up=e.target.closest('.d-motion-form-upload button');if(up){let n=0;const t=setInterval(()=>{n+=20;up.querySelector('b').textContent=n+'%';if(n>=100){clearInterval(t);up.textContent='UPLOADED ✓'}},120)}});
document.addEventListener('dragover',e=>{const d=e.target.closest('.d-motion-form-dragover');if(d){e.preventDefault();d.classList.add('drag')}});document.addEventListener('dragleave',e=>e.target.closest('.d-motion-form-dragover')?.classList.remove('drag'));document.addEventListener('drop',e=>{const d=e.target.closest('.d-motion-form-dragover');if(d){e.preventDefault();d.classList.remove('drag');d.textContent='FILE READY ✓'}});
