const extraTerms=[
  {id:'modular-scale',cat:'ui-layout',name:'模块化比例',en:'Modular Scale',tags:['比例','节奏'],summary:'用统一比例序列控制模块尺寸，建立稳定而有变化的界面节奏。',usage:'设计系统、仪表盘和内容型产品。',principle:'比例差异应对应信息权重，避免只为丰富画面而变化。',demo:'fx-layout-scale'},
  {id:'holy-grail-layout',cat:'ui-layout',name:'圣杯布局',en:'Holy Grail Layout',tags:['三栏','自适应'],summary:'以页眉、页脚和三栏主体构成经典的自适应页面骨架。',usage:'门户、文档站和信息密集型应用。',principle:'主内容优先伸缩，两侧栏应有清楚的最小宽度。',demo:'fx-layout-holy'},
  {id:'full-bleed-layout',cat:'ui-layout',name:'满版布局',en:'Full-bleed Layout',tags:['无边界','沉浸'],summary:'让图像或色块延伸到视口边缘，削弱容器边界并增强沉浸感。',usage:'摄影、旅行、品牌故事和产品首屏。',principle:'满版背景上仍需保留安全的内容阅读区。',demo:'fx-layout-bleed'},
  {id:'zigzag-layout',cat:'ui-layout',name:'之字形布局',en:'Zigzag Layout',tags:['交替','叙事'],summary:'让图文模块左右交替排列，引导视线沿页面连续移动。',usage:'功能介绍、案例研究和时间叙事。',principle:'交替结构要保持扫描规律，移动端应回归单列。',demo:'fx-layout-zigzag'},
  {id:'timeline-layout',cat:'ui-layout',name:'时间轴布局',en:'Timeline Layout',tags:['顺序','节点'],summary:'沿一条主轴组织事件、版本或步骤，清楚表达先后关系。',usage:'履历、产品路线图、历史和流程说明。',principle:'节点密度必须允许标签完整阅读。',demo:'fx-layout-timeline'},
  {id:'dashboard-layout',cat:'ui-layout',name:'仪表盘布局',en:'Dashboard Layout',tags:['指标','总览'],summary:'把关键指标、趋势和操作组合成可快速扫描的工作台。',usage:'分析平台、运营后台和业务系统。',principle:'优先呈现可行动的信息，而不是平均分配卡片。',demo:'fx-layout-dashboard'},
  {id:'command-center-layout',cat:'ui-layout',name:'指挥中心布局',en:'Command Center Layout',tags:['密度','监控'],summary:'以高密度面板和持续状态构成面向实时决策的大屏界面。',usage:'运维、安全、物流和现场监控。',principle:'异常状态必须比常态数据更醒目。',demo:'fx-layout-command'},
  {id:'split-card-layout',cat:'ui-layout',name:'分割卡片布局',en:'Split Card Layout',tags:['图文','对照'],summary:'在单张卡片中切分图像与信息区域，形成紧凑的叙事单元。',usage:'商品、文章、人物和地点列表。',principle:'分割比例应由内容而非固定装饰决定。',demo:'fx-layout-splitcard'},
  {id:'sticky-scroll-layout',cat:'ui-layout',name:'粘性滚动布局',en:'Sticky Scroll Layout',tags:['固定','分步'],summary:'滚动时固定关键视觉，让旁侧内容逐段更新。',usage:'产品讲解、数据故事和长页叙事。',principle:'固定区域不能遮挡导航或困住键盘焦点。',demo:'fx-layout-sticky'},
  {id:'radial-layout',cat:'ui-layout',name:'放射式布局',en:'Radial Layout',tags:['中心','环绕'],summary:'围绕中心焦点排列信息或操作，形成明确的向心关系。',usage:'关系图、菜单、功能总览和实验界面。',principle:'只适合少量等权项目，并提供线性替代路径。',demo:'fx-layout-radial'},

  {id:'neon-glow',cat:'ui-visual',name:'霓虹辉光',en:'Neon Glow',tags:['发光','夜色'],summary:'以高饱和颜色和多层模糊光晕模拟霓虹管发光。',usage:'娱乐、音乐、游戏和夜间主题。',principle:'发光层不能取代清晰的实体轮廓。',demo:'fx-visual-neon'},
  {id:'frosted-noise',cat:'ui-visual',name:'磨砂噪点',en:'Frosted Noise',tags:['磨砂','颗粒'],summary:'在半透明表面叠加细颗粒，形成更真实的磨砂介质。',usage:'浮层、媒体控件和氛围型面板。',principle:'噪点密度要低，避免降低文字清晰度。',demo:'fx-visual-frost'},
  {id:'metallic-surface',cat:'ui-visual',name:'金属表面',en:'Metallic Surface',tags:['反射','材质'],summary:'用锐利高光、暗部和方向性渐变模拟拉丝金属。',usage:'硬件、汽车、奢侈品和控制面板。',principle:'高光方向必须统一，才能建立可信材质。',demo:'fx-visual-metal'},
  {id:'paper-cut-ui',cat:'ui-visual',name:'剪纸界面',en:'Paper-cut UI',tags:['纸层','投影'],summary:'以平面色纸、切口与短阴影表现手工层叠空间。',usage:'教育、节日、儿童和文化产品。',principle:'纸层数量应有限，阴影方向保持一致。',demo:'fx-visual-paper'},
  {id:'liquid-gradient',cat:'ui-visual',name:'液态渐变',en:'Liquid Gradient',tags:['流体','融合'],summary:'让多个色团像液体般融合、拉伸和缓慢流动。',usage:'AI、创意工具、音乐和品牌背景。',principle:'运动应慢于内容阅读节奏。',demo:'fx-visual-fluid'},
  {id:'pixel-ui',cat:'ui-visual',name:'像素界面',en:'Pixel UI',tags:['像素','复古'],summary:'以硬边像素、有限色板和位图符号塑造复古数字气质。',usage:'游戏、开发者工具和怀旧品牌。',principle:'像素尺度应统一，避免混入随意的平滑曲线。',demo:'fx-visual-pixel'},
  {id:'wireframe-aesthetic',cat:'ui-visual',name:'线框美学',en:'Wireframe Aesthetic',tags:['线框','结构'],summary:'主动保留低保真边框、标注和结构线，强调系统原型感。',usage:'设计工具、技术品牌和概念产品。',principle:'线框仍需通过线宽和颜色建立层级。',demo:'fx-visual-wire'},
  {id:'glossy-ui',cat:'ui-visual',name:'高光拟物',en:'Glossy UI',tags:['高光','光泽'],summary:'使用镜面高光、饱和渐变和反射塑造光滑表面。',usage:'娱乐、收藏、按钮和复古数码视觉。',principle:'高光形状应服从物体曲面。',demo:'fx-visual-gloss'},
  {id:'translucent-border',cat:'ui-visual',name:'透明描边',en:'Translucent Border',tags:['边缘','透光'],summary:'以半透明渐变边缘表现薄玻璃或发光薄膜。',usage:'深色主题卡片、弹窗和数据面板。',principle:'边缘亮度应帮助分层而不是制造噪声。',demo:'fx-visual-border'},
  {id:'soft-shadow-system',cat:'ui-visual',name:'柔光阴影系统',en:'Soft Shadow System',tags:['阴影','层级'],summary:'通过低对比、多层柔影建立克制而连续的空间层级。',usage:'企业产品、卡片系统和浅色界面。',principle:'阴影级别要少，并与交互层级一一对应。',demo:'fx-visual-shadow'},

  {id:'morphing-button',cat:'interaction',name:'形变按钮',en:'Morphing Button',tags:['形变','状态'],summary:'按钮在提交、加载和完成状态间连续改变尺寸与形状。',usage:'表单提交、上传和异步操作。',principle:'形变过程中必须保留状态语义。',demo:'fx-motion-morph'},
  {id:'drag-snap',cat:'interaction',name:'拖拽吸附',en:'Drag Snap',tags:['拖拽','对齐'],summary:'对象靠近目标位置时自动吸附并给予明确反馈。',usage:'画布、排序、看板和时间轴。',principle:'吸附阈值应可预测，并允许轻松撤销。',demo:'fx-motion-snap'},
  {id:'page-transition',cat:'interaction',name:'页面转场',en:'Page Transition',tags:['导航','连续性'],summary:'在路由切换时用共享元素或遮罩保持空间连续性。',usage:'内容详情、作品集和沉浸式应用。',principle:'转场不能延迟新页面可操作时间。',demo:'fx-motion-page'},
  {id:'scroll-progress',cat:'interaction',name:'滚动进度',en:'Scroll Progress',tags:['进度','阅读'],summary:'将页面滚动位置映射为清晰的线性或分段进度。',usage:'长文章、教程、表单和故事页面。',principle:'进度表达必须与真实内容长度一致。',demo:'fx-motion-progress'},
  {id:'staggered-reveal',cat:'interaction',name:'错峰揭示',en:'Staggered Reveal',tags:['序列','入场'],summary:'让一组元素依次出现，强化顺序和整体节奏。',usage:'列表、菜单、数据卡和首屏内容。',principle:'延迟间隔应短，最后元素不能等待太久。',demo:'fx-motion-stagger'},
  {id:'cursor-trail',cat:'interaction',name:'指针轨迹',en:'Cursor Trail',tags:['指针','轨迹'],summary:'让图形或粒子短暂跟随指针路径，增强空间反馈。',usage:'创意网站、画布和音乐体验。',principle:'轨迹不可遮挡点击目标，并尊重减少动态设置。',demo:'fx-motion-trail'},
  {id:'flip-card',cat:'interaction',name:'翻转卡片',en:'Flip Card',tags:['翻面','披露'],summary:'围绕水平或垂直轴翻转卡片，展示背面内容。',usage:'学习卡、人物卡和轻量详情。',principle:'正反面信息关系要明确，触屏需要点击触发。',demo:'fx-motion-flip'},
  {id:'elastic-toggle',cat:'interaction',name:'弹性开关',en:'Elastic Toggle',tags:['开关','弹性'],summary:'开关滑块切换时带有轻微拉伸和回弹，强化物理手感。',usage:'设置、偏好和设备控制。',principle:'动画不能掩盖开关的最终状态。',demo:'fx-motion-toggle'},
  {id:'spotlight-hover',cat:'interaction',name:'聚光悬停',en:'Spotlight Hover',tags:['悬停','光标'],summary:'让局部光斑跟随指针，在卡片表面揭示细节。',usage:'深色卡片、功能网格和作品集。',principle:'核心信息在没有聚光时也必须可读。',demo:'fx-motion-spotlight'},
  {id:'count-up-motion',cat:'interaction',name:'数字递增动效',en:'Count-up Motion',tags:['数字','反馈'],summary:'让关键数值从旧值平滑过渡到新值，突出变化。',usage:'指标、交易、成绩和里程碑。',principle:'只为重要变化使用，并提供最终静态值。',demo:'fx-motion-count'},

  {id:'bauhaus',cat:'graphic',name:'包豪斯构成',en:'Bauhaus Composition',tags:['几何','功能'],summary:'以基础几何、原色和理性排版构成现代主义视觉。',usage:'文化海报、展览和设计品牌。',principle:'形式简洁但结构关系必须精确。',demo:'fx-graphic-bauhaus'},
  {id:'constructivism',cat:'graphic',name:'构成主义',en:'Constructivism',tags:['斜线','宣传'],summary:'以强对角线、几何拼接和粗重文字制造行动感。',usage:'文化活动、音乐和议题传播。',principle:'动势需要汇聚到明确的信息焦点。',demo:'fx-graphic-construct'},
  {id:'memphis',cat:'graphic',name:'孟菲斯风格',en:'Memphis Style',tags:['图案','活力'],summary:'组合鲜艳色块、随性几何和重复图案，形成玩乐气质。',usage:'年轻品牌、活动和社交传播。',principle:'图案要围绕主信息分布，避免平均噪声。',demo:'fx-graphic-memphis'},
  {id:'psychedelic',cat:'graphic',name:'迷幻视觉',en:'Psychedelic Design',tags:['扭曲','高饱和'],summary:'以波动字形、强烈色彩和重复曲线营造感官扩张。',usage:'音乐、节庆、时尚和实验文化。',principle:'保留至少一个稳定的阅读锚点。',demo:'fx-graphic-psyche'},
  {id:'y2k-aesthetic',cat:'graphic',name:'千禧年美学',en:'Y2K Aesthetic',tags:['数码','未来复古'],summary:'融合金属、泡泡字、早期网页和未来主义符号。',usage:'时尚、美妆、音乐和青年品牌。',principle:'选择少数时代符号，避免变成无主题拼盘。',demo:'fx-graphic-y2k'},
  {id:'vaporwave',cat:'graphic',name:'蒸汽波',en:'Vaporwave',tags:['怀旧','数码'],summary:'将复古电脑色彩、古典雕塑与网格空间并置。',usage:'音乐、游戏、艺术项目和社交视觉。',principle:'怀旧素材之间需要统一色调和空间逻辑。',demo:'fx-graphic-vapor'},
  {id:'photocopy',cat:'graphic',name:'复印机质感',en:'Photocopy Texture',tags:['高反差','失真'],summary:'模拟多次复印产生的颗粒、断裂和高反差边缘。',usage:'朋克、独立出版、海报和唱片。',principle:'失真要保留主形和关键信息。',demo:'fx-graphic-copy'},
  {id:'stencil-type',cat:'graphic',name:'模板字设计',en:'Stencil Design',tags:['切口','工业'],summary:'通过字形连接桥和硬边色块表现喷涂模板语言。',usage:'工业、运动、音乐和导视视觉。',principle:'切口位置必须兼顾结构合理与识别度。',demo:'fx-graphic-stencil'},
  {id:'geometric-abstraction',cat:'graphic',name:'几何抽象',en:'Geometric Abstraction',tags:['形状','秩序'],summary:'以几何形、比例和颜色关系代替具象图像表达主题。',usage:'品牌、艺术出版和文化活动。',principle:'形状关系要形成可解释的视觉逻辑。',demo:'fx-graphic-geo'},
  {id:'maximalism',cat:'graphic',name:'极繁主义',en:'Maximalism',tags:['密集','装饰'],summary:'通过多层图像、色彩和文字制造有控制的视觉过载。',usage:'时尚、音乐、节庆和青年文化。',principle:'极繁仍需通过尺度差维持主次。',demo:'fx-graphic-max'},

  {id:'negative-space-cover',cat:'cover',name:'负形封面',en:'Negative Space Cover',tags:['负形','隐喻'],summary:'利用主体周围或内部的空白形成第二层图像含义。',usage:'文学、思想、商业和公益出版。',principle:'负形应在第一眼可辨，并与主题有关。',demo:'fx-cover-negative'},
  {id:'pattern-cover',cat:'cover',name:'图案封面',en:'Pattern-led Cover',tags:['重复','识别'],summary:'以连续图案覆盖画面，通过重复建立系列识别。',usage:'系列图书、唱片、期刊和品牌手册。',principle:'标题需要与图案形成明确的层级分离。',demo:'fx-cover-pattern'},
  {id:'silhouette-cover',cat:'cover',name:'剪影封面',en:'Silhouette Cover',tags:['轮廓','叙事'],summary:'用单一轮廓概括人物或物体，留下想象空间。',usage:'传记、悬疑、文学和电影内容。',principle:'轮廓必须有足够独特的识别特征。',demo:'fx-cover-silhouette'},
  {id:'macro-detail-cover',cat:'cover',name:'微距局部封面',en:'Macro Detail Cover',tags:['局部','放大'],summary:'极度放大物体细节，让纹理和局部形态成为抽象画面。',usage:'科学、自然、时尚和艺术出版。',principle:'局部图像应保留与主题的联想通道。',demo:'fx-cover-macro'},
  {id:'grid-series-cover',cat:'cover',name:'系列网格封面',en:'Grid Series Cover',tags:['系列','编码'],summary:'用固定网格和可变色图建立跨册统一的系列系统。',usage:'丛书、报告、播客和课程。',principle:'固定规则与每期变量必须清楚分工。',demo:'fx-cover-series'},
  {id:'central-object-cover',cat:'cover',name:'中心物封面',en:'Central Object Cover',tags:['居中','单体'],summary:'将一个具象物体置于画面中心，形成直接而强烈的识别。',usage:'产品、科普、商业和概念出版。',principle:'背景应支持主体轮廓，不与其争夺注意力。',demo:'fx-cover-object'},
  {id:'torn-paper-cover',cat:'cover',name:'撕纸封面',en:'Torn Paper Cover',tags:['撕裂','层次'],summary:'以不规则撕裂边缘揭示下层文字或图像。',usage:'纪实、文化、音乐和议题内容。',principle:'撕裂方向应参与叙事并保留标题完整。',demo:'fx-cover-torn'},
  {id:'archival-cover',cat:'cover',name:'档案式封面',en:'Archival Cover',tags:['档案','编号'],summary:'用标签、编号、印章和资料图像营造研究档案感。',usage:'历史、摄影、研究和艺术出版。',principle:'元数据要像真实信息，而非无意义装饰。',demo:'fx-cover-archive'},
  {id:'cinematic-cover',cat:'cover',name:'电影感封面',en:'Cinematic Cover',tags:['宽银幕','氛围'],summary:'借用电影剧照、宽幅裁切和片名式排版建立叙事氛围。',usage:'小说、播客、影像和品牌故事。',principle:'画面氛围不能牺牲小尺寸下的标题识别。',demo:'fx-cover-cinema'},
  {id:'stamp-cover',cat:'cover',name:'邮票式封面',en:'Stamp Cover',tags:['齿孔','收藏'],summary:'用齿孔边框、面值和发行信息模拟邮票或票券。',usage:'旅行、历史、收藏和纪念出版。',principle:'票券细节应围绕核心主题建立可信系统。',demo:'fx-cover-stamp'},

  {id:'analogous-colors',cat:'color-type',name:'邻近色系统',en:'Analogous Colors',tags:['和谐','色相'],summary:'选取色轮上相邻色相，形成连续、统一的色彩氛围。',usage:'品牌、插画、数据和内容专题。',principle:'用明度差建立层级，避免颜色过于接近。',demo:'fx-type-analogous'},
  {id:'triadic-colors',cat:'color-type',name:'三角色系统',en:'Triadic Colors',tags:['三色','平衡'],summary:'使用色轮上等距的三个色相建立活跃而平衡的组合。',usage:'教育、娱乐、活动和年轻品牌。',principle:'指定一个主色，其余两色承担辅助与强调。',demo:'fx-type-triadic'},
  {id:'split-complementary',cat:'color-type',name:'分裂互补色',en:'Split-complementary Colors',tags:['对比','协调'],summary:'以主色和其互补色两侧的颜色组成较柔和的高对比系统。',usage:'品牌、插画、海报和数据界面。',principle:'控制三色面积比例，避免同时抢夺焦点。',demo:'fx-type-splitcomp'},
  {id:'serif-sans-pairing',cat:'color-type',name:'衬线与无衬线配对',en:'Serif–Sans Pairing',tags:['字体配对','层级'],summary:'用衬线字体的叙事感与无衬线字体的清晰度建立互补。',usage:'编辑、品牌、出版和内容产品。',principle:'两种字体应有结构共性，并明确各自职责。',demo:'fx-type-pair'},
  {id:'condensed-type',cat:'color-type',name:'窄体排版',en:'Condensed Typography',tags:['窄体','密度'],summary:'用窄字宽在有限横向空间中制造高密度和竖向张力。',usage:'标题、海报、数据标签和体育视觉。',principle:'避免在长正文和过小字号中使用。',demo:'fx-type-condensed'},
  {id:'oversized-type',cat:'color-type',name:'超大字排版',en:'Oversized Typography',tags:['大字','裁切'],summary:'让文字超出容器或视口，以尺度本身形成图像冲击。',usage:'首屏、海报、封面和品牌发布。',principle:'裁切后仍应保留足够的字形识别线索。',demo:'fx-type-oversized'},
  {id:'text-mask',cat:'color-type',name:'文字图像蒙版',en:'Image-filled Type',tags:['蒙版','图像'],summary:'将图像或纹理限制在文字内部，让标题兼具内容与形状。',usage:'旅行、音乐、活动和专题标题。',principle:'选择具有大字腔和粗笔画的字体。',demo:'fx-type-mask'},
  {id:'shadow-type',cat:'color-type',name:'长阴影字体',en:'Long-shadow Type',tags:['投影','立体'],summary:'从字形沿固定方向延伸连续阴影，形成平面立体感。',usage:'海报、活动、游戏和复古视觉。',principle:'阴影方向统一，实体字与背景保持足够对比。',demo:'fx-type-shadow'},
  {id:'baseline-shift',cat:'color-type',name:'基线错位排版',en:'Baseline Shift Type',tags:['错位','节奏'],summary:'让字符或词组在基线上有规则地上下偏移，制造跳跃节奏。',usage:'音乐、时尚、文化和实验标题。',principle:'错位遵循可感知规则，并保留阅读顺序。',demo:'fx-type-baseline'},
  {id:'color-block-type',cat:'color-type',name:'色块文字',en:'Color-block Type',tags:['色块','反白'],summary:'把文字放入高对比色块，以模块化方式构成标题。',usage:'导视、海报、社交卡片和信息标签。',principle:'色块尺寸要与词组结构匹配。',demo:'fx-type-block'}
];


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
  {id:'gradient-type',cat:'color-type',name:'渐变字体',en:'Gradient Typography',tags:['色彩过渡','标题'],summary:'在文字内部铺设连续色彩过渡，让字形成为主要色彩载体。',usage:'品牌标题、发布页、活动海报与数据亮点。',principle:'渐变方向应强化文字节奏，并检查背景上的最低对比度。',demo:'gradienttype'},
  ...extraTerms
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

const controlsForDemo=demo=>{
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

const extraDemoMarkup={
  'fx-layout-scale':'<div class="demo d-fx-layout-scale"><i></i><i></i><i></i><i></i></div>',
  'fx-layout-holy':'<div class="demo d-fx-layout-holy"><header></header><aside></aside><main></main><nav></nav><footer></footer></div>',
  'fx-layout-bleed':'<div class="demo d-fx-layout-bleed"><i></i><div><b>EDGE TO EDGE</b><span>Immersive canvas</span></div></div>',
  'fx-layout-zigzag':'<div class="demo d-fx-layout-zigzag"><i></i><span></span><i></i><span></span></div>',
  'fx-layout-timeline':'<div class="demo d-fx-layout-timeline"><i></i><b>01</b><b>02</b><b>03</b><span></span><span></span><span></span></div>',
  'fx-layout-dashboard':'<div class="demo d-fx-layout-dashboard"><b>84%</b><i></i><i></i><i></i><span></span></div>',
  'fx-layout-command':'<div class="demo d-fx-layout-command"><header>LIVE / 09:41</header><i></i><i></i><i></i><i></i><b>● ALERT</b></div>',
  'fx-layout-splitcard':'<div class="demo d-fx-layout-splitcard"><figure></figure><section><small>STORY 08</small><b>Two fields,<br>one object.</b><i></i></section></div>',
  'fx-layout-sticky':'<div class="demo d-fx-layout-sticky"><aside><b>STICKY</b><i></i></aside><main><span>01</span><span>02</span><span>03</span></main></div>',
  'fx-layout-radial':'<div class="demo d-fx-layout-radial"><b>CORE</b><i></i><i></i><i></i><i></i><i></i><i></i></div>',

  'fx-visual-neon':'<div class="demo d-fx-visual-neon"><b>OPEN</b><i></i></div>',
  'fx-visual-frost':'<div class="demo d-fx-visual-frost"><i></i><section><b>FROST</b><span>Translucent surface</span></section></div>',
  'fx-visual-metal':'<div class="demo d-fx-visual-metal"><i></i><b>AL—01</b><span>BRUSHED</span></div>',
  'fx-visual-paper':'<div class="demo d-fx-visual-paper"><i></i><i></i><i></i><b>PAPER</b></div>',
  'fx-visual-fluid':'<div class="demo d-fx-visual-fluid"><i></i><i></i><i></i></div>',
  'fx-visual-pixel':'<div class="demo d-fx-visual-pixel"><b>8 BIT</b><i></i><i></i><i></i><i></i></div>',
  'fx-visual-wire':'<div class="demo d-fx-visual-wire"><header></header><aside></aside><main><i></i><i></i><i></i></main><small>WIREFRAME / 04</small></div>',
  'fx-visual-gloss':'<div class="demo d-fx-visual-gloss"><button type="button">GO</button><i></i></div>',
  'fx-visual-border':'<div class="demo d-fx-visual-border"><section><b>EDGE</b><span>Light passes through</span></section></div>',
  'fx-visual-shadow':'<div class="demo d-fx-visual-shadow"><i></i><i></i><i></i></div>',

  'fx-motion-morph':'<div class="demo d-fx-motion-morph"><button type="button" data-morph>Submit</button></div>',
  'fx-motion-snap':'<div class="demo d-fx-motion-snap"><span>DROP</span><i draggable="true"></i></div>',
  'fx-motion-page':'<div class="demo d-fx-motion-page"><button type="button">NEXT</button><i></i><section><b>02</b></section></div>',
  'fx-motion-progress':'<div class="demo d-fx-motion-progress"><i></i><article><b>READING</b><span></span><span></span><span></span></article></div>',
  'fx-motion-stagger':'<div class="demo d-fx-motion-stagger"><i></i><i></i><i></i><i></i></div>',
  'fx-motion-trail':'<div class="demo d-fx-motion-trail"><i></i><i></i><i></i><i></i><i></i><b>MOVE</b></div>',
  'fx-motion-flip':'<div class="demo d-fx-motion-flip"><button type="button"><span>FRONT</span><b>BACK</b></button></div>',
  'fx-motion-toggle':'<div class="demo d-fx-motion-toggle"><button type="button" aria-pressed="false"><i></i></button><b>OFF</b></div>',
  'fx-motion-spotlight':'<div class="demo d-fx-motion-spotlight"><section><b>SPOTLIGHT</b><span>Move across the surface</span></section></div>',
  'fx-motion-count':'<div class="demo d-fx-motion-count"><button type="button"><b>0</b><span>COUNT</span></button></div>',

  'fx-graphic-bauhaus':'<div class="demo d-fx-graphic-bauhaus"><i></i><i></i><i></i><b>BAU<br>HAUS</b></div>',
  'fx-graphic-construct':'<div class="demo d-fx-graphic-construct"><i></i><i></i><b>НАПРАВЛЕНИЕ</b><span>1923—2026</span></div>',
  'fx-graphic-memphis':'<div class="demo d-fx-graphic-memphis"><i></i><i></i><i></i><i></i><b>PLAY</b></div>',
  'fx-graphic-psyche':'<div class="demo d-fx-graphic-psyche"><b>WAVE</b><i></i><i></i></div>',
  'fx-graphic-y2k':'<div class="demo d-fx-graphic-y2k"><i></i><b>Y2K</b><span>CYBER / 2000</span></div>',
  'fx-graphic-vapor':'<div class="demo d-fx-graphic-vapor"><i></i><i></i><b>夢</b><span>VAPOR MEMORY</span></div>',
  'fx-graphic-copy':'<div class="demo d-fx-graphic-copy"><b>COPY<br>COPY</b><i></i></div>',
  'fx-graphic-stencil':'<div class="demo d-fx-graphic-stencil"><b>STENCIL</b><i></i><span>UNIT 07</span></div>',
  'fx-graphic-geo':'<div class="demo d-fx-graphic-geo"><i></i><i></i><i></i><i></i></div>',
  'fx-graphic-max':'<div class="demo d-fx-graphic-max"><b>MORE!</b><i></i><i></i><i></i><span>IS MORE IS MORE</span></div>',

  'fx-cover-negative':'<div class="demo d-fx-cover-negative"><div class="poster"><i></i><b>BETWEEN<br>FORMS</b></div></div>',
  'fx-cover-pattern':'<div class="demo d-fx-cover-pattern"><div class="poster"><i></i><b>PATTERN<br>NO. 06</b></div></div>',
  'fx-cover-silhouette':'<div class="demo d-fx-cover-silhouette"><div class="poster"><i></i><b>THE<br>UNKNOWN</b></div></div>',
  'fx-cover-macro':'<div class="demo d-fx-cover-macro"><div class="poster"><i></i><b>MICRO<br>WORLD</b></div></div>',
  'fx-cover-series':'<div class="demo d-fx-cover-series"><div class="poster"><b>07</b><i></i><span>SYSTEM / SERIES</span></div></div>',
  'fx-cover-object':'<div class="demo d-fx-cover-object"><div class="poster"><i></i><b>ONE<br>THING</b></div></div>',
  'fx-cover-torn':'<div class="demo d-fx-cover-torn"><div class="poster"><i></i><b>UNDER<br>THE PAGE</b></div></div>',
  'fx-cover-archive':'<div class="demo d-fx-cover-archive"><div class="poster"><small>ARCHIVE 1972—04</small><i></i><b>CASE<br>STUDY</b></div></div>',
  'fx-cover-cinema':'<div class="demo d-fx-cover-cinema"><div class="poster"><i></i><b>LAST<br>FRAME</b><span>A FILM BY STUDIO 08</span></div></div>',
  'fx-cover-stamp':'<div class="demo d-fx-cover-stamp"><div class="poster"><i></i><b>48</b><span>POST / EDITION</span></div></div>',

  'fx-type-analogous':'<div class="demo d-fx-type-analogous"><i></i><i></i><i></i><b>HARMONY</b></div>',
  'fx-type-triadic':'<div class="demo d-fx-type-triadic"><i></i><i></i><i></i><b>TRIAD</b></div>',
  'fx-type-splitcomp':'<div class="demo d-fx-type-splitcomp"><i></i><i></i><i></i><b>SPLIT</b></div>',
  'fx-type-pair':'<div class="demo d-fx-type-pair"><b>Serif</b><span>MEETS SANS</span></div>',
  'fx-type-condensed':'<div class="demo d-fx-type-condensed"><b>NARROW</b><span>SPACE / 01</span></div>',
  'fx-type-oversized':'<div class="demo d-fx-type-oversized"><b>BIG</b><span>TYPE AT SCALE</span></div>',
  'fx-type-mask':'<div class="demo d-fx-type-mask"><b>IMAGE</b><i></i></div>',
  'fx-type-shadow':'<div class="demo d-fx-type-shadow"><b>LONG</b><span>SHADOW</span></div>',
  'fx-type-baseline':'<div class="demo d-fx-type-baseline"><b><i>B</i><i>O</i><i>U</i><i>N</i><i>C</i><i>E</i></b></div>',
  'fx-type-block':'<div class="demo d-fx-type-block"><b><i>COLOR</i><i>BLOCK</i></b></div>'
};

const getExtraDemoMarkup=type=>extraDemoMarkup[type]||'';


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
