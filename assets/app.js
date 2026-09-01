import {categories,terms,byCategory,getCategory,getTerm} from '../data/lexicon.js';
import {controlDefinitions,controlsForDemo} from '../data/controls.js';
import {getExtraDemoMarkup} from './extra-demos.js';

const base = location.pathname.includes('/categories/') || location.pathname.includes('/terms/') ? '../' : './';
const demoMarkup = type => {
  if(type.startsWith('fx-'))return getExtraDemoMarkup(type);
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
}
function termCard(term){return `<a class="term-card" data-filter="${term.name} ${term.en} ${term.tags.join(' ')}" href="${base}terms/${term.id}.html"><div class="preview">${demoMarkup(term.demo)}</div><small>${getCategory(term.cat).name}</small><h3>${term.name}</h3><p>${term.en}</p><div class="tags">${term.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div></a>`}

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
function relatedCSS(term){
  try{
    const token=`d-${term.demo}`;
    const rules=[...document.styleSheets].flatMap(sheet=>[...sheet.cssRules]).filter(rule=>rule.cssText?.includes(token)||rule.selectorText==='.stage .demo').map(rule=>rule.cssText);
    if(rules.length)return rules.join('\n\n');
  }catch{}
  return `.d-${term.demo} {\n  --demo-color: #8da2ff;\n  --demo-color-2: #61e7c8;\n}`;
}
function mountSourceLab(term){
  const panel=document.createElement('section');panel.className='source-lab';
  const originalHTML=demoMarkup(term.demo),originalCSS=relatedCSS(term);
  panel.innerHTML=`<div class="source-head"><div><span>SOURCE PLAYGROUND</span><h3>查看并修改源代码</h3></div><div class="source-actions"><button type="button" data-reset-code>恢复</button><button class="run-code" type="button" data-run-code>运行修改</button></div></div><div class="code-tabs" role="tablist"><button class="active" type="button" data-code-tab="html">HTML</button><button type="button" data-code-tab="css">CSS</button></div><div class="code-editor active" data-code-panel="html"><textarea spellcheck="false" aria-label="HTML 源代码"></textarea></div><div class="code-editor" data-code-panel="css"><textarea spellcheck="false" aria-label="CSS 源代码"></textarea></div><p class="code-status" aria-live="polite">修改代码后点击“运行修改”，效果会在上方预览中更新。</p>`;
  panel.querySelector('[data-code-panel="html"] textarea').value=originalHTML;
  panel.querySelector('[data-code-panel="css"] textarea').value=originalCSS;
  document.querySelector('.details').insertAdjacentElement('beforebegin',panel);
  panel.querySelectorAll('[data-code-tab]').forEach(button=>button.addEventListener('click',()=>{panel.querySelectorAll('[data-code-tab],.code-editor').forEach(el=>el.classList.remove('active'));button.classList.add('active');panel.querySelector(`[data-code-panel="${button.dataset.codeTab}"]`).classList.add('active')}));
  const render=()=>{const html=panel.querySelector('[data-code-panel="html"] textarea').value,css=panel.querySelector('[data-code-panel="css"] textarea').value;document.querySelector('[data-demo]').innerHTML=html;let style=document.getElementById('live-demo-style');if(!style){style=document.createElement('style');style.id='live-demo-style';document.head.append(style)}style.textContent=css;panel.querySelector('.code-status').textContent='✓ 修改已应用到上方预览';setTimeout(()=>panel.querySelector('.code-status').textContent='修改代码后点击“运行修改”，效果会在上方预览中更新。',1800)};
  panel.querySelector('[data-run-code]').addEventListener('click',render);
  panel.querySelector('[data-reset-code]').addEventListener('click',()=>{panel.querySelector('[data-code-panel="html"] textarea').value=originalHTML;panel.querySelector('[data-code-panel="css"] textarea').value=originalCSS;render()});
}
if(page==='home'){
  shell();
  document.querySelector('.stat b').textContent=terms.length;
  document.querySelector('[data-categories]').innerHTML=categories.map(c=>`<a class="category-card" style="--card-color:${c.color}" href="categories/${c.id}.html"><small>${c.en}</small><h3>${c.name}</h3><p>${c.intro}</p><span class="card-count">${byCategory(c.id).length} EFFECTS →</span></a>`).join('');
  document.querySelector('[data-latest]').innerHTML=terms.slice(0,6).map(termCard).join('');
}else if(page==='category'){
  const cat=getCategory(document.body.dataset.id); shell(cat.id);
  document.title=`${cat.name} — 设计效果百科`;
  document.querySelector('[data-title]').textContent=cat.name;
  document.querySelector('[data-en]').textContent=cat.en;
  document.querySelector('[data-intro]').textContent=cat.intro;
  document.querySelector('[data-count]').textContent=byCategory(cat.id).length;
  document.querySelector('[data-terms]').innerHTML=byCategory(cat.id).map(termCard).join('');
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
  mountConfigurator(term);
  mountSourceLab(term);
}

document.addEventListener('click',e=>{
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
});

document.addEventListener('pointermove',e=>{const box=e.target.closest('.d-magnetic');if(!box)return;const b=box.querySelector('button'),r=box.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.12}px,${(e.clientY-r.top-r.height/2)*.12}px)`});
document.addEventListener('pointermove',e=>{const box=e.target.closest('.d-tilt');if(!box)return;const card=box.firstElementChild,r=box.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`rotateX(${-y*12}deg) rotateY(${x*12}deg)`});
document.addEventListener('pointerout',e=>{const box=e.target.closest('.d-tilt');if(box&&!box.contains(e.relatedTarget))box.firstElementChild.style.transform=''});
document.addEventListener('pointermove',e=>{const box=e.target.closest('.d-fx-motion-spotlight');if(!box)return;const r=box.getBoundingClientRect();box.style.setProperty('--spot-x',`${((e.clientX-r.left)/r.width)*100}%`);box.style.setProperty('--spot-y',`${((e.clientY-r.top)/r.height)*100}%`)});
