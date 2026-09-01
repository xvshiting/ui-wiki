export const controlDefinitions={
  color:{label:'主色',type:'color',value:'#8da2ff',var:'--demo-color'},
  color2:{label:'辅助色',type:'color',value:'#61e7c8',var:'--demo-color-2'},
  gap:{label:'元素距离',type:'range',min:0,max:30,value:8,unit:' px',var:'--demo-gap'},
  radius:{label:'圆角 / 形状',type:'range',min:0,max:48,value:18,unit:' px',var:'--demo-radius'},
  scale:{label:'整体大小',type:'range',min:65,max:120,value:100,unit:'%',var:'--demo-scale',transform:'percent'},
  speed:{label:'动效速度',type:'range',min:3,max:30,value:14,unit:' ×0.1s',var:'--demo-speed',transform:'seconds'},
  intensity:{label:'效果强度',type:'range',min:0,max:30,value:16,unit:' px',var:'--demo-intensity'},
  rotate:{label:'旋转角度',type:'range',min:-25,max:25,value:0,unit:'°',var:'--demo-rotate',transform:'degrees'}
};

export const demoControls={
  grid:['color','color2','gap','radius','scale'],bento:['color','color2','gap','radius','scale'],asym:['color','color2','radius','rotate','scale'],split:['color','color2','gap','scale'],
  glass:['color','color2','radius','intensity','scale'],neu:['color','radius','intensity','scale'],mesh:['color','color2','intensity','scale'],layers:['color','color2','radius','intensity','scale'],
  micro:['color','radius','scale','speed'],spring:['color','color2','scale','speed'],hover:['color','radius','intensity','scale'],skeleton:['color','color2','radius','speed'],
  swiss:['color','color2','gap','scale'],brutal:['color','color2','rotate','scale'],editorial:['color','gap','scale'],collage:['color','color2','rotate','scale'],
  minimal:['color','color2','scale'],typecover:['color','color2','scale'],imagecover:['color','color2','scale'],abstract:['color','color2','rotate','scale'],
  duotone:['color','color2','scale'],mono:['color','color2','scale'],variable:['color','scale'],contrast:['color','color2','scale'],
  masonry:['color','color2','gap','radius','scale'],stack:['color','color2','gap','rotate','scale'],aurora:['color','color2','intensity','speed'],clay:['color','color2','radius','intensity','scale'],
  magnetic:['color','color2','radius','intensity','scale'],accordion:['color','radius','gap','speed'],grain:['color','color2','intensity','scale'],kinetic:['color','color2','scale','speed'],
  diagonal:['color','color2','rotate','scale'],framed:['color','color2','gap','scale'],complementary:['color','color2','gap','scale'],outline:['color','color2','scale'],
  overlap:['color','color2','radius','rotate','scale'],sidebar:['color','color2','gap','radius','scale'],holographic:['color','color2','speed','rotate','scale'],liquid:['color','color2','radius','intensity','scale'],
  ripple:['color','color2','radius','speed','scale'],tilt:['color','color2','radius','intensity','scale'],riso:['color','color2','rotate','scale'],halftone:['color','color2','intensity','scale'],
  diecut:['color','color2','radius','scale'],verticalcover:['color','color2','scale'],chromatic:['color','color2','intensity','scale'],gradienttype:['color','color2','rotate','scale']
};

export const controlsForDemo=demo=>{
  if(!demo.startsWith('fx-'))return demoControls[demo]||['color','scale'];
  const noColor=new Set(['fx-layout-command','fx-visual-metal','fx-visual-wire','fx-visual-shadow','fx-graphic-vapor','fx-graphic-copy','fx-cover-negative','fx-cover-silhouette','fx-cover-object','fx-cover-archive','fx-type-triadic','fx-type-pair','fx-type-oversized']);
  const noColor2=new Set(['fx-motion-progress','fx-motion-trail','fx-motion-spotlight','fx-motion-count','fx-graphic-construct','fx-graphic-stencil','fx-cover-archive','fx-type-condensed']);
  const supportsGap=new Set(['fx-layout-scale','fx-layout-holy','fx-layout-zigzag','fx-layout-dashboard','fx-layout-command','fx-layout-sticky','fx-visual-wire','fx-visual-shadow','fx-motion-stagger']);
  const keys=[];
  if(!noColor.has(demo))keys.push('color');
  if(!noColor.has(demo)&&!noColor2.has(demo))keys.push('color2');
  if(supportsGap.has(demo))keys.push('gap');
  return [...keys,'radius','rotate','scale'];
};
