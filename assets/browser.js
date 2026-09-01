const categories = [
  { id: 'ui-layout', name: 'UI 布局', en: 'UI Layout', color: '#ff5c35', intro: '组织界面空间、信息层级与阅读节奏。' },
  { id: 'ui-visual', name: 'UI 视觉', en: 'UI Visual', color: '#8b5cf6', intro: '建立数字界面的材质、光影与视觉气质。' },
  { id: 'interaction', name: '交互与动效', en: 'Interaction & Motion', color: '#00a878', intro: '用反馈、过渡与状态变化塑造产品手感。' },
  { id: 'graphic', name: '平面设计', en: 'Graphic Design', color: '#1677ff', intro: '字体、构图与图像语言的系统组合。' },
  { id: 'cover', name: '封面设计', en: 'Cover Design', color: '#e53888', intro: '为书籍、音乐、杂志与内容打造第一视觉。' },
  { id: 'color-type', name: '色彩与字体', en: 'Color & Type', color: '#d99a00', intro: '跨媒介设计中最基础也最有表现力的工具。' }
];

const terms = [
  {id:'grid-layout',cat:'ui-layout',name:'网格布局',en:'Grid Layout',tags:['秩序','响应式'],summary:'用列、行与间距建立稳定的信息秩序。',usage:'仪表盘、编辑器、内容门户与后台系统。',principle:'先定义容器与列，再用跨列关系制造层级。',demo:'grid'},
  {id:'bento-grid',cat:'ui-layout',name:'便当盒布局',en:'Bento Grid',tags:['模块','层级'],summary:'用大小不一的卡片组成紧凑、易扫描的功能总览。',usage:'产品主页、功能发布页和作品集。',principle:'尺寸差异必须对应信息优先级，而不是随机拼贴。',demo:'bento'},
  {id:'asymmetry',cat:'ui-layout',name:'不对称构图',en:'Asymmetrical Layout',tags:['张力','编辑感'],summary:'通过偏移、尺度差与留白形成动态平衡。',usage:'品牌官网、文化项目与实验性界面。',principle:'视觉重量需要平衡，几何位置不必对称。',demo:'asym'},
  {id:'split-screen',cat:'ui-layout',name:'分屏布局',en:'Split Screen',tags:['对照','叙事'],summary:'把画面分成两个明确区域，建立并列或对照关系。',usage:'登录页、产品对比、图文叙事。',principle:'两个区域应存在清晰关系，并保持主次可辨。',demo:'split'},
  {id:'glassmorphism',cat:'ui-visual',name:'玻璃拟态',en:'Glassmorphism',tags:['半透明','模糊'],summary:'以半透明、背景模糊和高光边框模拟玻璃层。',usage:'浮层、控制中心、沉浸式媒体界面。',principle:'必须依赖有层次的背景，且确保文字对比度。',demo:'glass'},
  {id:'neumorphism',cat:'ui-visual',name:'新拟态',en:'Neumorphism',tags:['柔和','浮雕'],summary:'用同色系双向阴影制造凸起与按压感。',usage:'小型控件、音乐播放器和概念界面。',principle:'只适合有限元素，避免因低对比度损害可用性。',demo:'neu'},
  {id:'gradient-mesh',cat:'ui-visual',name:'网状渐变',en:'Gradient Mesh',tags:['色场','流动'],summary:'叠加多个柔和色源，形成连续而复杂的色彩场。',usage:'AI 产品、品牌背景和抽象视觉。',principle:'控制色相数量与明度，保留内容承载区。',demo:'mesh'},
  {id:'layering',cat:'ui-visual',name:'空间层叠',en:'Elevation & Layering',tags:['景深','层级'],summary:'通过遮挡、阴影、模糊与尺度表达前后关系。',usage:'卡片、弹窗、导航与空间型界面。',principle:'层级变化应对应交互优先级。',demo:'layers'},
  {id:'micro-interaction',cat:'interaction',name:'微交互',en:'Micro-interaction',tags:['反馈','状态'],summary:'针对单一操作给出短促而明确的视觉反馈。',usage:'点赞、保存、复制、切换与提交。',principle:'反馈要快、可理解，不能阻塞下一步操作。',demo:'micro'},
  {id:'spring-motion',cat:'interaction',name:'弹性动效',en:'Spring Motion',tags:['物理感','回弹'],summary:'通过超调与回弹模拟具有质量和弹性的运动。',usage:'拖拽归位、弹窗、按钮与列表重排。',principle:'弹性参数要与对象尺寸和产品气质匹配。',demo:'spring'},
  {id:'hover-reveal',cat:'interaction',name:'悬停揭示',en:'Hover Reveal',tags:['指针','渐进披露'],summary:'鼠标悬停时显示次级信息或操作。',usage:'桌面端卡片、媒体库与工具栏。',principle:'核心功能不能只依赖 hover，触屏需要替代路径。',demo:'hover'},
  {id:'skeleton',cat:'interaction',name:'骨架屏',en:'Skeleton Loading',tags:['加载','感知速度'],summary:'加载内容前先展示接近真实结构的占位形态。',usage:'信息流、详情页和数据面板。',principle:'骨架形状应接近最终内容，避免虚假的进度感。',demo:'skeleton'},
  {id:'swiss-style',cat:'graphic',name:'瑞士国际主义',en:'Swiss Style',tags:['网格','无衬线'],summary:'强调客观信息、严格网格与无衬线字体。',usage:'海报、导视、文化品牌与出版物。',principle:'用结构、比例和留白建立权威感。',demo:'swiss'},
  {id:'brutalism',cat:'graphic',name:'粗野主义',en:'Brutalism',tags:['直接','反精致'],summary:'暴露结构、使用强边框与未经修饰的视觉元素。',usage:'艺术、时尚、音乐与独立文化项目。',principle:'“粗糙”仍需服务信息，不能成为可读性的借口。',demo:'brutal'},
  {id:'editorial',cat:'graphic',name:'编辑式设计',en:'Editorial Design',tags:['排版','叙事'],summary:'以杂志式层级组织标题、正文、图片与注释。',usage:'专题页面、报告、杂志与品牌故事。',principle:'建立稳定版心，同时允许局部突破网格。',demo:'editorial'},
  {id:'collage',cat:'graphic',name:'拼贴艺术',en:'Collage',tags:['混合媒介','手工感'],summary:'组合摄影、纸张、纹理和文字形成新的语义。',usage:'文化海报、音乐视觉与青年品牌。',principle:'素材差异要产生叙事关系，而非只做装饰。',demo:'collage'},
  {id:'minimal-cover',cat:'cover',name:'极简封面',en:'Minimal Cover',tags:['留白','单一焦点'],summary:'用极少元素和充分留白建立清晰记忆点。',usage:'文学、商业书籍与播客封面。',principle:'减少元素后，每个位置、字号和间距都更重要。',demo:'minimal'},
  {id:'typographic-cover',cat:'cover',name:'字体主视觉封面',en:'Typographic Cover',tags:['大字','信息'],summary:'让标题字体本身成为画面的主要图像。',usage:'杂志、音乐、展览与非虚构出版。',principle:'文字既要可读，也要承担形状、节奏与情绪。',demo:'typecover'},
  {id:'image-led-cover',cat:'cover',name:'图像主导封面',en:'Image-led Cover',tags:['摄影','焦点'],summary:'以一张具有叙事力的图像承担主要识别。',usage:'人物、旅行、纪实与生活方式内容。',principle:'标题与图像需互相补充，避免争夺视觉中心。',demo:'imagecover'},
  {id:'abstract-cover',cat:'cover',name:'抽象图形封面',en:'Abstract Cover',tags:['几何','隐喻'],summary:'用非具象形态、色块或纹理表达主题气质。',usage:'科技、思想、电子音乐与实验出版。',principle:'抽象形式应与主题建立可解释的隐喻。',demo:'abstract'},
  {id:'duotone',cat:'color-type',name:'双色调',en:'Duotone',tags:['色彩','图像处理'],summary:'用两种主色重映射图像明暗，形成统一强烈的风格。',usage:'活动视觉、音乐与品牌传播。',principle:'两色需要同时满足明暗分离和品牌表达。',demo:'duotone'},
  {id:'monochrome',cat:'color-type',name:'单色系统',en:'Monochrome',tags:['统一','层次'],summary:'围绕一个色相用明度与饱和度建立完整层级。',usage:'品牌专题、数据界面与高级感包装。',principle:'不要只靠颜色区分信息，应加入形状或文字线索。',demo:'mono'},
  {id:'variable-type',cat:'color-type',name:'可变字体',en:'Variable Type',tags:['字重','动态'],summary:'在同一字体文件中连续控制字重、字宽等轴。',usage:'响应式标题、动态品牌和交互排版。',principle:'变化应建立规则，并考虑不支持环境的后备字体。',demo:'variable'},
  {id:'type-contrast',cat:'color-type',name:'字体对比',en:'Typographic Contrast',tags:['层级','配对'],summary:'通过字号、字重、字宽和风格差建立阅读层级。',usage:'几乎所有界面、海报与出版设计。',principle:'优先建立清楚层级，再追求字体组合的新奇。',demo:'contrast'},
  {id:'masonry-layout',cat:'ui-layout',name:'瀑布流布局',en:'Masonry Layout',tags:['错落','内容流'],summary:'让不同高度的内容块紧密排列，形成连续浏览节奏。',usage:'灵感库、图片社区和作品集。',principle:'保证阅读顺序可预测，并为图片预留稳定尺寸。',demo:'masonry'},
  {id:'card-stack',cat:'ui-layout',name:'卡片堆叠',en:'Card Stack',tags:['层叠','空间'],summary:'通过偏移与旋转把多张卡片组织成可操作的堆栈。',usage:'内容轮播、任务队列与故事展示。',principle:'露出足够的下一层线索，让用户理解仍有内容。',demo:'stack'},
  {id:'aurora-gradient',cat:'ui-visual',name:'极光渐变',en:'Aurora Gradient',tags:['光带','流动'],summary:'用柔软、移动的彩色光带创造具有空间感的背景。',usage:'科技品牌、AI 产品与沉浸式首屏。',principle:'降低饱和度和运动幅度，避免干扰前景内容。',demo:'aurora'},
  {id:'claymorphism',cat:'ui-visual',name:'黏土拟态',en:'Claymorphism',tags:['柔软','立体'],summary:'以厚圆角、内高光和蓬松阴影模拟黏土材质。',usage:'儿童产品、游戏化界面与友好型工具。',principle:'体积感来自高光与阴影配合，而不只是大圆角。',demo:'clay'},
  {id:'magnetic-button',cat:'interaction',name:'磁吸按钮',en:'Magnetic Button',tags:['指针','吸附'],summary:'按钮在指针靠近时轻微追随，形成有吸力的反馈。',usage:'行动按钮、导航和创意型落地页。',principle:'位移幅度应小，且不能改变真实点击区域。',demo:'magnetic'},
  {id:'animated-accordion',cat:'interaction',name:'动态折叠面板',en:'Animated Accordion',tags:['披露','过渡'],summary:'展开与收起内容时同步处理高度、透明度和图标状态。',usage:'FAQ、设置、高级筛选和帮助中心。',principle:'保持动画短促，并让键盘焦点顺序符合展开状态。',demo:'accordion'},
  {id:'grain-texture',cat:'graphic',name:'颗粒质感',en:'Grain Texture',tags:['噪点','印刷感'],summary:'在纯色或渐变上叠加细颗粒，弱化数字表面的光滑感。',usage:'海报、唱片视觉和复古品牌。',principle:'颗粒应支持材质气质，避免损伤小字号可读性。',demo:'grain'},
  {id:'kinetic-type',cat:'graphic',name:'动态字体',en:'Kinetic Typography',tags:['节奏','运动'],summary:'让文字通过位移、缩放和节奏变化承担叙事。',usage:'片头、音乐视觉、发布页和社交媒体。',principle:'运动节奏应对应语言重音，关键文本必须可读。',demo:'kinetic'},
  {id:'diagonal-cover',cat:'cover',name:'斜切构图封面',en:'Diagonal Cover',tags:['动势','切割'],summary:'用对角线分割画面，创造速度感与方向性。',usage:'运动、商业、科技与类型小说。',principle:'斜线应引导视线进入标题，而不是割裂信息。',demo:'diagonal'},
  {id:'framed-cover',cat:'cover',name:'框景封面',en:'Framed Cover',tags:['边框','聚焦'],summary:'使用边框或窗口把标题与图像聚合为明确焦点。',usage:'文学、艺术、摄影和独立杂志。',principle:'边框宽度和内部留白共同决定封面的呼吸感。',demo:'framed'},
  {id:'complementary-color',cat:'color-type',name:'互补色系统',en:'Complementary Colors',tags:['对比','活力'],summary:'使用色轮相对位置的颜色建立强烈而清楚的对比。',usage:'体育、娱乐、活动与年轻品牌。',principle:'一色主导、一色强调，避免等面积竞争。',demo:'complementary'},
  {id:'outline-type',cat:'color-type',name:'描边字体',en:'Outline Typography',tags:['轮廓','叠加'],summary:'保留文字轮廓而弱化实体填充，形成轻盈或空间化效果。',usage:'海报标题、时尚视觉和大尺寸背景字。',principle:'只用于足够大的字号，并检查复杂背景上的轮廓对比。',demo:'outline'},
  {id:'overlap-grid',cat:'ui-layout',name:'重叠网格',en:'Overlapping Grid',tags:['跨栏','景深'],summary:'让内容有意识地跨越网格边界，以重叠关系建立焦点和空间感。',usage:'品牌首屏、专题页面和作品集。',principle:'先保持底层网格清晰，再让少数关键元素突破边界。',demo:'overlap'},
  {id:'sidebar-layout',cat:'ui-layout',name:'侧边栏布局',en:'Sidebar Layout',tags:['导航','分区'],summary:'以稳定侧栏承载导航或工具，让主内容区保持连续工作流。',usage:'知识库、编辑器、后台与生产力工具。',principle:'侧栏宽度应稳定，并在窄屏提供明确的收起路径。',demo:'sidebar'},
  {id:'holographic',cat:'ui-visual',name:'全息虹彩',en:'Holographic Iridescence',tags:['虹彩','金属感'],summary:'利用多色渐变、反光带和高光模拟随角度变化的虹彩表面。',usage:'数字藏品、潮流品牌、会员卡与实验界面。',principle:'虹彩用于强调材质，不应覆盖需要持续阅读的正文。',demo:'holographic'},
  {id:'liquid-glass',cat:'ui-visual',name:'液态玻璃',en:'Liquid Glass',tags:['折射','流体'],summary:'将透明材质与不规则轮廓、折射高光结合，形成柔软的玻璃体。',usage:'媒体控件、沉浸式导航与概念型界面。',principle:'透明度、边缘高光和背景对比必须共同保证边界可辨。',demo:'liquid'},
  {id:'ripple-feedback',cat:'interaction',name:'涟漪反馈',en:'Ripple Feedback',tags:['点击','扩散'],summary:'从触点向外扩散短暂波纹，明确表达点击已经被接收。',usage:'按钮、列表项、触屏控件与地图标记。',principle:'波纹应从操作位置产生，并在下一步反馈出现前结束。',demo:'ripple'},
  {id:'tilt-card',cat:'interaction',name:'视差倾斜卡片',en:'Parallax Tilt Card',tags:['指针','景深'],summary:'根据指针位置轻微旋转卡片，并让内部层级产生差速位移。',usage:'产品卡、作品集封面和游戏化内容。',principle:'倾斜幅度要克制，并为减少动态偏好提供静态状态。',demo:'tilt'},
  {id:'risograph',cat:'graphic',name:'孔版印刷',en:'Risograph',tags:['套色','错版'],summary:'以有限专色、颗粒和轻微套印偏移模拟孔版印刷气质。',usage:'文化海报、独立出版、音乐与艺术活动。',principle:'限制色数，并让错版成为层次线索而不是可读性障碍。',demo:'riso'},
  {id:'halftone',cat:'graphic',name:'网点半调',en:'Halftone',tags:['网点','印刷'],summary:'用大小或密度变化的点阵模拟连续明暗和复古印刷质感。',usage:'漫画、社交视觉、包装与编辑插图。',principle:'网点尺度应匹配观看距离，避免与小字产生摩尔纹。',demo:'halftone'},
  {id:'die-cut-cover',cat:'cover',name:'模切窗口封面',en:'Die-cut Window Cover',tags:['窗口','悬念'],summary:'通过封面开孔露出内页局部，让两层图像共同构成主题。',usage:'艺术书、品牌手册、唱片与限量出版。',principle:'窗口形状要参与叙事，并预留真实制作所需的结构强度。',demo:'diecut'},
  {id:'vertical-title-cover',cat:'cover',name:'纵向标题封面',en:'Vertical Title Cover',tags:['竖排','方向'],summary:'让标题沿垂直方向组织，改变常规阅读路径并拉动画面比例。',usage:'文学、建筑、时尚和东亚文化主题出版。',principle:'竖排方向必须明确，并与作者、期号等横排信息协调。',demo:'verticalcover'},
  {id:'chromatic-aberration',cat:'color-type',name:'色差偏移',en:'Chromatic Aberration',tags:['错位','光学'],summary:'将文字或图形的色彩通道轻微错开，制造光学失真和数字张力。',usage:'音乐、游戏、科技活动与故障美学视觉。',principle:'保留清晰主体层，色差只承担边缘能量。',demo:'chromatic'},
  {id:'gradient-type',cat:'color-type',name:'渐变字体',en:'Gradient Typography',tags:['色彩过渡','标题'],summary:'在文字内部铺设连续色彩过渡，让字形成为主要色彩载体。',usage:'品牌标题、发布页、活动海报与数据亮点。',principle:'渐变方向应强化文字节奏，并检查背景上的最低对比度。',demo:'gradienttype'}
];

const byCategory = id => terms.filter(term => term.cat === id);
const getCategory = id => categories.find(category => category.id === id);
const getTerm = id => terms.find(term => term.id === id);

const controlDefinitions={
  color:{label:'主色',type:'color',value:'#8da2ff',var:'--demo-color'},
  color2:{label:'辅助色',type:'color',value:'#61e7c8',var:'--demo-color-2'},
  gap:{label:'元素距离',type:'range',min:0,max:30,value:8,unit:' px',var:'--demo-gap'},
  radius:{label:'圆角 / 形状',type:'range',min:0,max:48,value:18,unit:' px',var:'--demo-radius'},
  scale:{label:'整体大小',type:'range',min:65,max:120,value:100,unit:'%',var:'--demo-scale',transform:'percent'},
  speed:{label:'动效速度',type:'range',min:3,max:30,value:14,unit:' ×0.1s',var:'--demo-speed',transform:'seconds'},
  intensity:{label:'效果强度',type:'range',min:0,max:30,value:16,unit:' px',var:'--demo-intensity'},
  rotate:{label:'旋转角度',type:'range',min:-25,max:25,value:0,unit:'°',var:'--demo-rotate',transform:'degrees'}
};

const demoControls={
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

const controlsForDemo=demo=>demoControls[demo]||['color','scale'];


const base = location.pathname.includes('/categories/') || location.pathname.includes('/terms/') ? '../' : './';
const demoMarkup = type => {
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
});

document.addEventListener('pointermove',e=>{const box=e.target.closest('.d-magnetic');if(!box)return;const b=box.querySelector('button'),r=box.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.12}px,${(e.clientY-r.top-r.height/2)*.12}px)`});
document.addEventListener('pointermove',e=>{const box=e.target.closest('.d-tilt');if(!box)return;const card=box.firstElementChild,r=box.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`rotateX(${-y*12}deg) rotateY(${x*12}deg)`});
document.addEventListener('pointerout',e=>{const box=e.target.closest('.d-tilt');if(box&&!box.contains(e.relatedTarget))box.firstElementChild.style.transform=''});
