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
  {id:'color-block-type',cat:'color-type',name:'色块文字',en:'Color-block Type',tags:['色块','反白'],summary:'把文字放入高对比色块，以模块化方式构成标题。',usage:'导视、海报、社交卡片和信息标签。',principle:'色块尺寸要与词组结构匹配。',demo:'fx-type-block'},
  {id:'button-squish',cat:'interaction',name:'按钮挤压',en:'Button Squish',tags:['按压','形变'],summary:'按下时压扁并横向扩张按钮，让点击呈现柔软的受力反馈。',usage:'主要按钮、游戏化操作和触屏控件。',principle:'形变量应短促克制，释放后必须立即恢复。',demo:'motion-click-squish'},
  {id:'click-burst',cat:'interaction',name:'点击爆裂',en:'Click Burst',tags:['点击','爆裂'],summary:'从触点向外发射短线或碎片，强调一次离散操作已经完成。',usage:'点赞、收藏、解锁和庆祝操作。',principle:'粒子必须快速消散，不能遮挡相邻目标。',demo:'motion-click-burst'},
  {id:'particle-click-feedback',cat:'interaction',name:'粒子点击反馈',en:'Particle Click Feedback',tags:['粒子','反馈'],summary:'点击后生成一组带方向和衰减的粒子，提供轻量视觉奖励。',usage:'创作工具、游戏化任务和社交互动。',principle:'粒子数量与操作重要程度匹配，并尊重减少动态偏好。',demo:'motion-click-particles'},
  {id:'ink-spread-feedback',cat:'interaction',name:'墨水扩散',en:'Ink Spread Feedback',tags:['扩散','有机'],summary:'从按压点扩散一层有机墨迹，逐渐覆盖控件表面。',usage:'主题切换、内容选择和文化类产品。',principle:'扩散层不能掩盖最终状态文字。',demo:'motion-click-ink'},
  {id:'pressed-indentation',cat:'interaction',name:'按压凹陷',en:'Pressed Indentation',tags:['凹陷','触感'],summary:'用内阴影和轻微位移模拟控件被压入表面的深度变化。',usage:'控制台、播放器和拟物控件。',principle:'凹陷状态必须与默认凸起状态形成明确对照。',demo:'motion-click-indent'},
  {id:'touch-highlight',cat:'interaction',name:'触点高光',en:'Touch Highlight',tags:['触点','高光'],summary:'让柔和高光出现在实际触点附近，并随释放快速淡出。',usage:'大面积卡片、列表项和触屏面板。',principle:'高光应跟随真实触点，而不是固定在元素中心。',demo:'motion-click-highlight'},
  {id:'icon-bounce',cat:'interaction',name:'图标弹跳',en:'Icon Bounce',tags:['图标','弹跳'],summary:'图标在激活时短暂上跳、压缩并回落，突出状态变化。',usage:'底部导航、收藏、下载和通知操作。',principle:'只动画被操作的图标，避免整组导航同时跳动。',demo:'motion-click-iconbounce'},
  {id:'success-check-morph',cat:'interaction',name:'成功勾选变形',en:'Success Check Morph',tags:['成功','变形'],summary:'将按钮或加载形态连续变成成功勾选，连接操作与结果。',usage:'提交、支付、保存和上传完成。',principle:'变形后仍需以颜色之外的符号表达成功。',demo:'motion-click-success'},
  {id:'error-shake',cat:'interaction',name:'错误抖动',en:'Error Shake',tags:['错误','抖动'],summary:'控件短促左右摆动，模拟拒绝或输入不正确的反馈。',usage:'表单校验、密码输入和受限操作。',principle:'抖动次数要少，并同时提供可读错误原因。',demo:'motion-click-error'},
  {id:'long-press-progress-ring',cat:'interaction',name:'长按进度环',en:'Long-press Progress Ring',tags:['长按','进度'],summary:'持续按住时逐步绘制环形进度，松开则取消，完成后触发操作。',usage:'危险操作、录音、确认和快捷菜单。',principle:'长按阈值与取消方式必须可感知且可预测。',demo:'motion-click-longpress'}
  ,{id:'shared-element-transition',cat:'interaction',name:'共享元素转场',en:'Shared-element Transition',tags:['导航','连续性'],summary:'让同一对象在列表与详情之间保持位置和形态连续。',usage:'卡片列表、图库和商品详情。',principle:'源元素与目标元素必须有明确视觉对应。',demo:'motion-nav-shared'}
  ,{id:'container-transform',cat:'interaction',name:'容器变形转场',en:'Container Transform',tags:['容器','转场'],summary:'卡片容器平滑扩展为页面面板，建立空间来源关系。',usage:'仪表盘、设置页和编辑器。',principle:'扩展路径要保留边界和层级线索。',demo:'motion-nav-container'}
  ,{id:'circular-reveal',cat:'interaction',name:'圆形揭示',en:'Circular Reveal',tags:['揭示','径向'],summary:'从触点向外扩散圆形蒙版，揭示下一层内容。',usage:'主题切换、菜单和页面切换。',principle:'圆心应与触发位置一致。',demo:'motion-nav-circular'}
  ,{id:'venetian-blind-transition',cat:'interaction',name:'百叶窗转场',en:'Venetian Blind Transition',tags:['分片','节奏'],summary:'页面被多条垂直叶片分割并依次翻转，形成节奏化切换。',usage:'作品集、展览和品牌首页。',principle:'分片数量和延迟要服务于内容节奏。',demo:'motion-nav-blinds'}
  ,{id:'wipe-transition',cat:'interaction',name:'擦除转场',en:'Wipe Transition',tags:['擦除','方向'],summary:'一块实体色面沿方向扫过，完成页面内容替换。',usage:'幻灯片、章节导航和视频式页面。',principle:'扫入方向应与导航方向一致。',demo:'motion-nav-wipe'}
  ,{id:'pixel-dissolve-transition',cat:'interaction',name:'像素溶解转场',en:'Pixel Dissolve Transition',tags:['像素','溶解'],summary:'旧内容拆成像素块后随机消散，再显现新内容。',usage:'游戏、数字艺术和实验网站。',principle:'像素颗粒应控制在可读性允许范围。',demo:'motion-nav-pixel'}
  ,{id:'ink-transition',cat:'interaction',name:'墨迹转场',en:'Ink Transition',tags:['墨迹','有机'],summary:'有机墨迹从边缘蔓延覆盖画面，再收缩露出下一页。',usage:'文化、手作、艺术与故事型网站。',principle:'墨迹轮廓要有自然的速度变化。',demo:'motion-nav-ink'}
  ,{id:'card-expansion-transition',cat:'interaction',name:'卡片展开转场',en:'Card Expansion Transition',tags:['卡片','展开'],summary:'选中的卡片抬升并展开为完整内容面板。',usage:'媒体库、文章列表和任务看板。',principle:'展开后保留卡片标题作为定位锚点。',demo:'motion-nav-card'}
  ,{id:'depth-push-transition',cat:'interaction',name:'深度推入转场',en:'Depth Push Transition',tags:['深度','推入'],summary:'当前页面后退缩小，新页面沿 Z 轴推入前景。',usage:'移动端导航、分步流程和沉浸式界面。',principle:'透视和阴影必须同步变化。',demo:'motion-nav-depth'}
  ,{id:'axis-slide-transition',cat:'interaction',name:'轴向滑入转场',en:'Axis Slide Transition',tags:['轴向','滑动'],summary:'内容沿明确的水平或垂直轴滑入，表达导航层级。',usage:'分页、步骤条和横向画廊。',principle:'滑动距离与内容层级保持一致。',demo:'motion-nav-axis'}
  ,{id:'scroll-parallax',cat:'interaction',name:'滚动视差',en:'Scroll Parallax',tags:['滚动','视差'],summary:'前后景以不同速度移动，制造可感知的空间深度。',usage:'首屏、故事页和专题长页。',principle:'层间速度差要克制并保证阅读稳定。',demo:'motion-scroll-parallax'}
  ,{id:'scroll-linked-scale',cat:'interaction',name:'滚动缩放',en:'Scroll-linked Scale',tags:['滚动','缩放'],summary:'元素随滚动进入视口时放大或缩小，强化出现节奏。',usage:'作品集、图库和产品展示。',principle:'缩放锚点稳定，避免内容跳动。',demo:'motion-scroll-scale'}
  ,{id:'scroll-linked-rotation',cat:'interaction',name:'滚动旋转',en:'Scroll-linked Rotation',tags:['滚动','旋转'],summary:'滚动距离映射为连续旋转角度，形成进度感。',usage:'数据仪表、时间线和装饰图形。',principle:'旋转速度应与滚动距离成比例。',demo:'motion-scroll-rotate'}
  ,{id:'horizontal-scroll-sections',cat:'interaction',name:'横向滚动章节',en:'Horizontal Scroll Sections',tags:['横向','章节'],summary:'纵向滚动驱动内容横向平移，连续浏览章节。',usage:'作品集、产品故事和图库。',principle:'横向段落需提供清晰的当前进度。',demo:'motion-scroll-horizontal'}
  ,{id:'pinned-scroll-story',cat:'interaction',name:'滚动固定叙事',en:'Pinned Scroll Story',tags:['固定','叙事'],summary:'视觉主舞台固定，滚动逐步替换旁侧叙事内容。',usage:'品牌故事、案例研究和数据叙事。',principle:'固定阶段必须有明确结束点。',demo:'motion-scroll-pinned'}
  ,{id:'scroll-number-flip',cat:'interaction',name:'滚动数字翻牌',en:'Scroll Number Flip',tags:['数字','翻牌'],summary:'数字随滚动进度逐位翻转，显示连续量变化。',usage:'统计数据、进度指标和年度报告。',principle:'数字变化要可读且可暂停。',demo:'motion-scroll-number'}
  ,{id:'scroll-path-drawing',cat:'interaction',name:'滚动路径描边',en:'Scroll Path Drawing',tags:['路径','描边'],summary:'SVG 路径长度与滚动进度绑定，逐段绘制路线。',usage:'地图、流程图和时间线。',principle:'路径方向应对应阅读顺序。',demo:'motion-scroll-path'}
  ,{id:'scroll-image-sequence',cat:'interaction',name:'滚动图像序列',en:'Scroll Image Sequence',tags:['序列','帧'],summary:'滚动驱动帧序列切换，模拟物体连续运动。',usage:'产品拆解、3D 展示和实验叙事。',principle:'帧数与滚动长度匹配，降级时保留静态图。',demo:'motion-scroll-sequence'}
  ,{id:'scroll-color-transition',cat:'interaction',name:'滚动颜色过渡',en:'Scroll Color Transition',tags:['颜色','过渡'],summary:'页面背景和前景色随滚动区间平滑插值。',usage:'章节长页、品牌故事和沉浸式专题。',principle:'对比度在过渡全程都需满足阅读要求。',demo:'motion-scroll-color'}
  ,{id:'scroll-text-split',cat:'interaction',name:'滚动文字拆分',en:'Scroll Text Split',tags:['文字','拆分'],summary:'标题字符沿相反方向分离，滚动后重新聚合。',usage:'标题首屏、宣言和章节开场。',principle:'拆分幅度要保持词组可识别。',demo:'motion-scroll-text'}
  ,{id:'drag-reorder',cat:'interaction',name:'拖拽排序',en:'Drag Reorder',tags:['拖拽','排序'],summary:'拖动列表项时实时让位并吸附到新的顺序位置。',usage:'任务、播放列表和看板。',principle:'拖动中的占位反馈必须清晰。',demo:'motion-drag-reorder'}
  ,{id:'drag-duplicate',cat:'interaction',name:'拖拽复制',en:'Drag to Duplicate',tags:['拖拽','复制'],summary:'按住拖动元素时生成半透明副本，释放后完成复制。',usage:'画布、文件管理和素材库。',principle:'原件与副本要有明确层级。',demo:'motion-drag-duplicate'}
  ,{id:'drag-delete',cat:'interaction',name:'拖拽删除区',en:'Drag to Delete',tags:['拖拽','删除'],summary:'拖动对象靠近删除区时变色并吸附，释放后移除。',usage:'卡片、附件和编辑器。',principle:'删除动作应提供可撤销路径。',demo:'motion-drag-delete'}
  ,{id:'elastic-drag-connector',cat:'interaction',name:'拖拽弹簧连线',en:'Elastic Drag Connector',tags:['连线','弹性'],summary:'节点拖动时连线像弹簧一样拉伸并回弹。',usage:'流程图、关系图和白板。',principle:'连线端点始终追踪节点边界。',demo:'motion-drag-elastic'}
  ,{id:'inertial-drag',cat:'interaction',name:'惯性拖动',en:'Inertial Drag',tags:['惯性','拖动'],summary:'释放后对象按速度继续滑行并逐渐减速。',usage:'画布、地图和时间轴。',principle:'速度上限与边界碰撞需要可控。',demo:'motion-drag-inertia'}
  ,{id:'edge-auto-scroll',cat:'interaction',name:'边缘自动滚动',en:'Edge Auto-scroll',tags:['边缘','自动滚动'],summary:'拖动物体靠近容器边缘时触发方向性滚动。',usage:'长列表、看板和文件树。',principle:'边缘触发区要足够可发现。',demo:'motion-drag-edge'}
  ,{id:'marquee-selection',cat:'interaction',name:'多选框选',en:'Marquee Selection',tags:['框选','多选'],summary:'按住空白区域拖出矩形，覆盖的对象同步高亮。',usage:'画布、图库和批量管理。',principle:'框选与点击选择状态需可区分。',demo:'motion-drag-marquee'}
  ,{id:'resize-handles',cat:'interaction',name:'调整尺寸手柄',en:'Resize Handles',tags:['缩放','手柄'],summary:'拖动角点实时改变对象尺寸，并显示当前宽高。',usage:'编辑器、表格和布局工具。',principle:'提供吸附与最小尺寸约束。',demo:'motion-drag-resize'}
  ,{id:'rotation-gizmo',cat:'interaction',name:'旋转操纵器',en:'Rotation Gizmo',tags:['旋转','操纵器'],summary:'拖动圆形旋钮围绕中心旋转对象并显示角度。',usage:'图形编辑、白板和头像裁剪。',principle:'角度刻度与吸附反馈要明确。',demo:'motion-drag-rotate'}
  ,{id:'pinch-to-zoom',cat:'interaction',name:'双指捏合缩放',en:'Pinch-to-zoom',tags:['捏合','缩放'],summary:'双指距离映射画布缩放，中心点保持在手势焦点。',usage:'地图、图库和画布。',principle:'缩放范围与回弹边界必须稳定。',demo:'motion-drag-pinch'}
  ,{id:'swipe-actions',cat:'interaction',name:'滑动操作',en:'Swipe Actions',tags:['滑动','操作'],summary:'列表项横向滑动露出操作按钮。',usage:'邮件、待办和消息列表。',principle:'操作区需在滑动过程中逐步显现。',demo:'motion-gesture-swipe'}
  ,{id:'pull-to-refresh',cat:'interaction',name:'下拉刷新',en:'Pull to Refresh',tags:['下拉','刷新'],summary:'下拉距离驱动刷新指示器，松手后执行更新。',usage:'信息流、列表和社交首页。',principle:'刷新阈值与加载状态应可感知。',demo:'motion-gesture-refresh'}
  ,{id:'pull-up-loading',cat:'interaction',name:'上拉加载',en:'Pull-up Loading',tags:['上拉','加载'],summary:'接近底部时显示加载进度并追加内容。',usage:'长列表、评论和搜索结果。',principle:'避免重复触发并保留当前位置。',demo:'motion-gesture-load'}
  ,{id:'swipe-to-dismiss',cat:'interaction',name:'滑动关闭',en:'Swipe to Dismiss',tags:['滑动','关闭'],summary:'卡片随手指移出屏幕，速度决定是否关闭。',usage:'通知、提示条和浮层。',principle:'取消回弹与确认关闭要区分。',demo:'motion-gesture-dismiss'}
  ,{id:'edge-back-gesture',cat:'interaction',name:'边缘返回手势',en:'Edge Back Gesture',tags:['边缘','返回'],summary:'从屏幕边缘拖入触发页面返回预览。',usage:'移动端导航和全屏阅读。',principle:'边缘触发区不应干扰横向内容。',demo:'motion-gesture-edge'}
  ,{id:'double-tap-like',cat:'interaction',name:'双击点赞',en:'Double-tap Like',tags:['双击','点赞'],summary:'连续双击内容中心弹出心形并更新点赞状态。',usage:'图片流、短视频和社交内容。',principle:'双击反馈要短促且可重复触发。',demo:'motion-gesture-like'}
  ,{id:'long-press-context-menu',cat:'interaction',name:'长按上下文菜单',en:'Long-press Context Menu',tags:['长按','菜单'],summary:'持续按压目标后在指尖附近展开上下文菜单。',usage:'列表项、文本和画布对象。',principle:'菜单定位应避开手指遮挡。',demo:'motion-gesture-context'}
  ,{id:'gesture-trail-recognition',cat:'interaction',name:'手势轨迹识别',en:'Gesture Trail Recognition',tags:['轨迹','识别'],summary:'手指移动留下渐隐轨迹并在完成时显示识别结果。',usage:'绘图、游戏和签名输入。',principle:'轨迹衰减不能影响目标内容。',demo:'motion-gesture-trail'}
  ,{id:'rubber-band-overscroll',cat:'interaction',name:'橡皮筋越界',en:'Rubber-band Overscroll',tags:['越界','回弹'],summary:'内容拖出边界后产生弹性拉伸并回到边界。',usage:'滚动容器、轮播和时间轴。',principle:'回弹速度应与拖动距离相关。',demo:'motion-gesture-rubber'}
  ,{id:'haptic-rhythm-feedback',cat:'interaction',name:'触觉节奏反馈',en:'Haptic Rhythm Feedback',tags:['节奏','反馈'],summary:'连续手势操作以节奏化视觉脉冲模拟触觉反馈。',usage:'拨盘、步进器和音乐界面。',principle:'反馈频率应与操作频率同步。',demo:'motion-gesture-haptic'}
  ,{id:'floating-label-input',cat:'interaction',name:'浮动标签输入',en:'Floating Label Input',tags:['输入','标签'],summary:'聚焦或有值时标签缩小并浮到输入框边缘。',usage:'表单、登录和设置。',principle:'标签移动后仍保持字段语义。',demo:'motion-form-floating'}
  ,{id:'focus-cursor-animation',cat:'interaction',name:'输入焦点光标',en:'Focus Cursor Animation',tags:['焦点','光标'],summary:'输入框获得焦点时光标与边框同步闪烁。',usage:'文本输入和搜索框。',principle:'焦点状态需兼顾键盘与指针。',demo:'motion-form-cursor'}
  ,{id:'password-strength-motion',cat:'interaction',name:'密码强度过渡',en:'Password Strength Motion',tags:['密码','强度'],summary:'密码变化驱动强度条分段增长与颜色过渡。',usage:'注册、修改密码。',principle:'强度反馈不能只依赖颜色。',demo:'motion-form-strength'}
  ,{id:'validation-state-morph',cat:'interaction',name:'验证状态变形',en:'Validation State Morph',tags:['验证','变形'],summary:'提交后输入框从中性变为成功或错误状态。',usage:'表单校验和支付。',principle:'状态变化应同时提供文字说明。',demo:'motion-form-validation'}
  ,{id:'autocomplete-expansion',cat:'interaction',name:'自动补全展开',en:'Autocomplete Expansion',tags:['补全','展开'],summary:'输入关键词后建议面板从输入框下方展开。',usage:'搜索、地址和命令面板。',principle:'建议项键盘可达且不遮挡输入。',demo:'motion-form-autocomplete'}
  ,{id:'tag-creation-motion',cat:'interaction',name:'标签创建动画',en:'Tag Creation Motion',tags:['标签','创建'],summary:'按回车将文本变成带删除按钮的胶囊标签。',usage:'筛选器、收件人和分类。',principle:'创建与删除反馈保持同一节奏。',demo:'motion-form-tag'}
  ,{id:'upload-progress-motion',cat:'interaction',name:'文件上传进度',en:'Upload Progress Motion',tags:['上传','进度'],summary:'上传按钮转为进度环并最终显示完成状态。',usage:'附件、头像和媒体上传。',principle:'进度需反映真实阶段并可取消。',demo:'motion-form-upload'}
  ,{id:'dragover-upload-feedback',cat:'interaction',name:'拖入上传反馈',en:'Drag-over Upload Feedback',tags:['拖入','上传'],summary:'文件拖入区域时边框高亮并显示放置提示。',usage:'文件上传和素材库。',principle:'离开区域时要恢复默认状态。',demo:'motion-form-dragover'}
  ,{id:'signature-drawing',cat:'interaction',name:'签名绘制交互',en:'Signature Drawing',tags:['签名','绘制'],summary:'指针在签名板上绘制连续笔迹并支持清除。',usage:'合同、授权和登记。',principle:'笔迹应平滑且适配触控。',demo:'motion-form-signature'}
  ,{id:'otp-digit-advance',cat:'interaction',name:'OTP 数字跳转',en:'OTP Digit Advance',tags:['OTP','输入'],summary:'输入一位验证码后焦点自动跳到下一格。',usage:'登录验证和支付确认。',principle:'粘贴完整验证码也应正确分配。',demo:'motion-form-otp'}
  ,{id:'list-insert-motion',cat:'interaction',name:'列表插入动效',en:'List Insert Motion',tags:['列表','插入'],summary:'新项目从占位位置淡入并推动现有项目让位。',usage:'任务、评论和消息。',principle:'插入位置要与用户操作对应。',demo:'motion-list-insert'}
  ,{id:'list-removal-collapse',cat:'interaction',name:'列表删除坍缩',en:'List Removal Collapse',tags:['列表','删除'],summary:'删除后项目高度坍缩，周围内容平滑补位。',usage:'待办、通知和历史记录。',principle:'提供撤销并避免布局闪跳。',demo:'motion-list-remove'}
  ,{id:'filter-reflow-motion',cat:'interaction',name:'筛选重排动效',en:'Filter Reflow Motion',tags:['筛选','重排'],summary:'筛选条件变化时网格项目平滑重排并淡出不匹配项。',usage:'图库、商品和搜索。',principle:'保留匹配项的空间连续性。',demo:'motion-list-filter'}
  ,{id:'flip-reordering',cat:'interaction',name:'排序翻转动效',en:'FLIP Reordering',tags:['排序','FLIP'],summary:'记录首尾位置并反向播放位移，形成高性能排序动画。',usage:'看板、表格和播放列表。',principle:'动画只作用于实际移动的项目。',demo:'motion-list-flip'}
  ,{id:'swipeable-card-stack',cat:'interaction',name:'卡片滑动栈',en:'Swipeable Card Stack',tags:['卡片','滑动'],summary:'顶层卡片滑出后露出下一张并调整层叠比例。',usage:'推荐、匹配和内容浏览。',principle:'滑动方向与接受/拒绝语义一致。',demo:'motion-list-stack'}
  ,{id:'carousel-snap',cat:'interaction',name:'轮播吸附',en:'Carousel Snap',tags:['轮播','吸附'],summary:'横向滚动结束后自动吸附到最近卡片。',usage:'图库、商品和步骤导航。',principle:'吸附位置需兼顾触控与键盘。',demo:'motion-list-snap'}
  ,{id:'infinite-loop-carousel',cat:'interaction',name:'无限循环轮播',en:'Infinite Loop Carousel',tags:['轮播','循环'],summary:'首尾无缝衔接，连续切换时保持视觉连续。',usage:'横幅、案例和媒体浏览。',principle:'循环克隆项需保持无障碍语义。',demo:'motion-list-loop'}
  ,{id:'accordion-list-motion',cat:'interaction',name:'手风琴列表',en:'Accordion List Motion',tags:['手风琴','展开'],summary:'面板高度与内容同步展开，其他面板可折叠。',usage:'FAQ、设置和目录。',principle:'标题按钮应保持稳定位置。',demo:'motion-list-accordion'}
  ,{id:'tree-expansion-motion',cat:'interaction',name:'树节点展开',en:'Tree Expansion Motion',tags:['树','展开'],summary:'子节点从父节点下方渐进展开并显示层级连接线。',usage:'文件树、导航和组织结构。',principle:'缩进和连接线需保持一致。',demo:'motion-list-tree'}
  ,{id:'virtual-list-reveal',cat:'interaction',name:'虚拟列表加载',en:'Virtual List Reveal',tags:['虚拟列表','加载'],summary:'滚动到视口时按需揭示项目，模拟虚拟化列表性能。',usage:'长列表、日志和数据表。',principle:'占位高度需稳定防止滚动跳动。',demo:'motion-list-virtual'}
  ,{id:'optimistic-update-feedback',cat:'interaction',name:'乐观更新反馈',en:'Optimistic Update Feedback',tags:['更新','反馈'],summary:'操作立即显示成功，后台失败时再回滚并提示。',usage:'点赞、收藏和编辑。',principle:'回滚状态必须可理解。',demo:'motion-state-optimistic'}
  ,{id:'save-state-pulse',cat:'interaction',name:'保存状态脉冲',en:'Save State Pulse',tags:['保存','脉冲'],summary:'保存完成时控件短暂脉冲并显示已保存。',usage:'编辑器、表单和设置。',principle:'保存中与已保存状态要区分。',demo:'motion-state-save'}
  ,{id:'reconnect-motion',cat:'interaction',name:'离线重连动画',en:'Reconnect Motion',tags:['离线','重连'],summary:'断网状态显示离线提示，恢复后平滑切换在线。',usage:'协作工具和实时应用。',principle:'网络状态变化要有文字辅助。',demo:'motion-state-reconnect'}
  ,{id:'sync-state-motion',cat:'interaction',name:'同步状态旋转',en:'Sync State Motion',tags:['同步','旋转'],summary:'同步进行时图标旋转，完成后停下并变为勾选。',usage:'云端同步和数据导入。',principle:'动画应能被暂停和重试。',demo:'motion-state-sync'}
  ,{id:'notification-entrance',cat:'interaction',name:'通知入场',en:'Notification Entrance',tags:['通知','入场'],summary:'通知从屏幕边缘滑入并带有轻微弹性。',usage:'系统提示和消息中心。',principle:'入场不应遮挡主要操作。',demo:'motion-state-notify'}
  ,{id:'toast-stack-motion',cat:'interaction',name:'Toast 堆叠',en:'Toast Stack Motion',tags:['Toast','堆叠'],summary:'多条 Toast 以层叠方式进入并按顺序退出。',usage:'操作反馈和批量任务。',principle:'每条消息都提供关闭方式。',demo:'motion-state-toast'}
  ,{id:'badge-count-transition',cat:'interaction',name:'徽标数字变化',en:'Badge Count Transition',tags:['徽标','数字'],summary:'未读数字变化时翻转并突出增量。',usage:'导航、购物车和通知。',principle:'数字变化不能造成布局抖动。',demo:'motion-state-badge'}
  ,{id:'completion-celebration',cat:'interaction',name:'进度完成庆祝',en:'Completion Celebration',tags:['完成','庆祝'],summary:'进度达到 100% 时触发短暂粒子与勾选庆祝。',usage:'任务、上传和引导流程。',principle:'庆祝动画要可跳过。',demo:'motion-state-celebrate'}
  ,{id:'empty-state-awakening',cat:'interaction',name:'空状态唤醒',en:'Empty-state Awakening',tags:['空状态','唤醒'],summary:'空状态插画轻微呼吸并引导用户采取下一步。',usage:'首次使用和无搜索结果。',principle:'动效服务于行动提示而非装饰。',demo:'motion-state-empty'}
  ,{id:'permission-prompt-motion',cat:'interaction',name:'权限请求过渡',en:'Permission Prompt Motion',tags:['权限','请求'],summary:'权限提示从底部上浮并聚焦允许按钮。',usage:'定位、通知和设备权限。',principle:'拒绝路径与允许路径同样清晰。',demo:'motion-state-permission'}
  ,{id:'custom-cursor',cat:'interaction',name:'自定义光标',en:'Custom Cursor',tags:['光标','指针'],summary:'以品牌形状替代系统光标并随指针移动。',usage:'作品集和实验网站。',principle:'移动端提供等价触控反馈。',demo:'motion-pointer-custom'}
  ,{id:'cursor-blend-mode',cat:'interaction',name:'光标混合模式',en:'Cursor Blend Mode',tags:['光标','混合'],summary:'光标与底图使用差异混合，经过不同颜色区域时自动反相。',usage:'艺术与影像网站。',principle:'确保光标在复杂背景中可见。',demo:'motion-pointer-blend'}
  ,{id:'cursor-label-follow',cat:'interaction',name:'光标文字跟随',en:'Cursor Label Follow',tags:['光标','标签'],summary:'标签以缓动延迟跟随指针并显示当前操作。',usage:'交互作品集和画布。',principle:'延迟应小于用户预期。',demo:'motion-pointer-label'}
  ,{id:'cursor-image-preview',cat:'interaction',name:'悬停图像预览',en:'Cursor Image Preview',tags:['悬停','预览'],summary:'指针经过链接时在附近浮现对应图像缩略图。',usage:'项目列表和图库。',principle:'预览不应阻断链接点击。',demo:'motion-pointer-preview'}
  ,{id:'cursor-repulsion',cat:'interaction',name:'指针排斥效果',en:'Cursor Repulsion',tags:['指针','排斥'],summary:'按钮在指针靠近时轻微向外躲避。',usage:'游戏化 CTA 和实验交互。',principle:'移动距离必须可控且可访问。',demo:'motion-pointer-repel'}
  ,{id:'cursor-vortex',cat:'interaction',name:'指针涡流',en:'Cursor Vortex',tags:['指针','涡流'],summary:'指针周围粒子沿切线旋转形成涡流轨迹。',usage:'艺术首页和互动背景。',principle:'粒子数量需考虑性能。',demo:'motion-pointer-vortex'}
  ,{id:'magnetic-text',cat:'interaction',name:'磁性文本',en:'Magnetic Text',tags:['文字','磁吸'],summary:'文字字符向指针方向偏移并在离开后回弹。',usage:'标题、导航和品牌展示。',principle:'保持文字可读与可选中。',demo:'motion-pointer-magnetic'}
  ,{id:'hover-underline-draw',cat:'interaction',name:'悬停下划线绘制',en:'Hover Underline Draw',tags:['悬停','下划线'],summary:'下划线从左到右绘制，离开时反向收回。',usage:'文本链接和导航。',principle:'下划线对比度符合可访问性。',demo:'motion-pointer-underline'}
  ,{id:'hover-border-trace',cat:'interaction',name:'悬停边框追踪',en:'Hover Border Trace',tags:['悬停','边框'],summary:'高亮沿卡片边框路径追踪一周。',usage:'卡片、按钮和产品模块。',principle:'边框动画不改变布局尺寸。',demo:'motion-pointer-border'}
  ,{id:'hover-content-swap',cat:'interaction',name:'悬停内容交换',en:'Hover Content Swap',tags:['悬停','交换'],summary:'悬停时前后内容交叉淡入，展示补充信息。',usage:'项目卡片和团队介绍。',principle:'关键信息不能只依赖悬停。',demo:'motion-pointer-swap'}
  ,{id:'gravity-drop',cat:'interaction',name:'重力下落',en:'Gravity Drop',tags:['重力','下落'],summary:'物体受重力加速落下并在地面回弹。',usage:'游戏化界面和物理演示。',principle:'落点与碰撞边界清晰。',demo:'motion-physics-gravity'}
  ,{id:'pendulum-motion',cat:'interaction',name:'摆锤运动',en:'Pendulum Motion',tags:['摆锤','周期'],summary:'摆锤以阻尼周期摆动，逐渐回到静止。',usage:'时钟、装饰和加载状态。',principle:'周期和振幅保持自然比例。',demo:'motion-physics-pendulum'}
  ,{id:'spring-chain',cat:'interaction',name:'弹簧链条',en:'Spring Chain',tags:['弹簧','链条'],summary:'多个节点延迟跟随首节点形成弹性链。',usage:'导航、游标和装饰动效。',principle:'延迟需避免拖慢操作反馈。',demo:'motion-physics-chain'}
  ,{id:'cloth-motion',cat:'interaction',name:'布料摆动',en:'Cloth Motion',tags:['布料','摆动'],summary:'网格面片模拟受风摆动的柔性表面。',usage:'时尚、品牌和沉浸式页面。',principle:'细节振幅要服务于主体。',demo:'motion-physics-cloth'}
  ,{id:'liquid-slosh',cat:'interaction',name:'液体晃动',en:'Liquid Slosh',tags:['液体','晃动'],summary:'容器移动时液面倾斜并产生波纹。',usage:'仪表、饮品和游戏 UI。',principle:'液面始终保持在容器边界内。',demo:'motion-physics-liquid'}
  ,{id:'collision-bounce',cat:'interaction',name:'碰撞反弹',en:'Collision Bounce',tags:['碰撞','反弹'],summary:'物体相撞后沿法线方向反弹并衰减。',usage:'游戏、图形和拖拽工具。',principle:'碰撞反馈要与速度匹配。',demo:'motion-physics-collision'}
  ,{id:'orbital-motion',cat:'interaction',name:'轨道运动',en:'Orbital Motion',tags:['轨道','旋转'],summary:'小球围绕中心沿椭圆轨道持续运动。',usage:'加载、数据和宇宙主题。',principle:'轨道层级和焦点可辨识。',demo:'motion-physics-orbit'}
  ,{id:'depth-focus-transition',cat:'interaction',name:'景深焦点切换',en:'Depth Focus Transition',tags:['景深','焦点'],summary:'前后景在焦点切换时同步模糊与清晰。',usage:'图库、故事和产品展示。',principle:'焦点变化应有明确触发源。',demo:'motion-physics-focus'}
  ,{id:'3d-card-rotation',cat:'interaction',name:'3D 卡片旋转',en:'3D Card Rotation',tags:['3D','卡片'],summary:'卡片绕 Y 轴翻转展示背面信息。',usage:'个人资料、产品和信息卡。',principle:'透视与背面可读性要稳定。',demo:'motion-physics-card3d'}
  ,{id:'spatial-window-transition',cat:'interaction',name:'空间窗口切换',en:'Spatial Window Transition',tags:['空间','窗口'],summary:'内容窗口沿 Z 轴推进并切换到下一空间层。',usage:'沉浸式导航和画布。',principle:'空间层级要配合方向提示。',demo:'motion-physics-window'}
  ,{id:'de-stijl',cat:'graphic',name:'荷兰风格派',en:'De Stijl',tags:['几何','原色'],summary:'直角网格、黑线和原色块建立严格秩序。',usage:'海报、品牌和编辑设计。',principle:'网格比例保持视觉平衡。',demo:'fx-style-destijl'}
  ,{id:'suprematism',cat:'graphic',name:'俄罗斯至上主义',en:'Suprematism',tags:['抽象','几何'],summary:'悬浮几何形与非具象构图表达纯粹空间。',usage:'海报、唱片和实验视觉。',principle:'形体关系形成动态张力。',demo:'fx-style-supreme'}
  ,{id:'futurism',cat:'graphic',name:'未来主义',en:'Futurism',tags:['速度','斜切'],summary:'斜向构图、重复线条和速度感表现运动。',usage:'音乐、科技和活动视觉。',principle:'动势围绕清晰焦点组织。',demo:'fx-style-futurism'}
  ,{id:'dadaism',cat:'graphic',name:'达达主义',en:'Dadaism',tags:['拼贴','反秩序'],summary:'混用拼贴、偶然排版和荒诞图像挑战常规。',usage:'艺术、文化和独立出版。',principle:'混乱中保留信息层级。',demo:'fx-style-dada'}
  ,{id:'new-objectivity',cat:'graphic',name:'新客观主义',en:'New Objectivity',tags:['冷静','写实'],summary:'克制色彩、精确轮廓和社会观察形成冷静叙事。',usage:'编辑、展览和研究视觉。',principle:'细节服务事实与语境。',demo:'fx-style-objective'}
  ,{id:'ulm-style',cat:'graphic',name:'乌尔姆设计',en:'Ulm Style',tags:['系统','理性'],summary:'模块网格、功能排版和中性色彩构建系统。',usage:'品牌、信息图和导视。',principle:'形式从功能和结构推导。',demo:'fx-style-ulm'}
  ,{id:'neo-swiss',cat:'graphic',name:'新瑞士风格',en:'Neo-Swiss',tags:['网格','无衬线'],summary:'延续瑞士网格并加入鲜明色块与数字节奏。',usage:'品牌、网页和海报。',principle:'变化建立在稳定网格上。',demo:'fx-style-neoswiss'}
  ,{id:'postmodernism',cat:'graphic',name:'后现代主义',en:'Postmodernism',tags:['解构','混搭'],summary:'打破网格、混用历史符号并制造语义错位。',usage:'文化、时尚和音乐视觉。',principle:'解构仍需建立阅读路径。',demo:'fx-style-postmodern'}
  ,{id:'neo-expressionism',cat:'graphic',name:'新表现主义',en:'Neo-expressionism',tags:['笔触','情绪'],summary:'夸张笔触、粗粝质感和高饱和色彩表达情绪。',usage:'艺术、音乐和文化海报。',principle:'情绪强度与主题一致。',demo:'fx-style-neoexpr'}
  ,{id:'new-international-typography',cat:'graphic',name:'国际排版新潮',en:'New International Typography',tags:['排版','实验'],summary:'在国际主义网格上引入动态字阶与数字错位。',usage:'出版、展览和品牌发布。',principle:'实验排版保留阅读锚点。',demo:'fx-style-newintl'}
  ,{id:'art-nouveau',cat:'graphic',name:'新艺术运动',en:'Art Nouveau',tags:['曲线','装饰'],summary:'以植物曲线、流动边框和手绘字形构成装饰画面。',usage:'海报、包装和文化视觉。',principle:'装饰围绕主体信息展开。',demo:'fx-retro-nouveau'}
  ,{id:'art-deco',cat:'graphic',name:'装饰艺术',en:'Art Deco',tags:['几何','奢华'],summary:'以对称几何、金属色和阶梯线条营造奢华秩序。',usage:'品牌、酒店和活动海报。',principle:'金属色作为强调而非大面积噪音。',demo:'fx-retro-deco'}
  ,{id:'victorian-ornament',cat:'graphic',name:'维多利亚装饰',en:'Victorian Ornament',tags:['边框','复古'],summary:'密集花饰边框与古典衬线字形成历史感。',usage:'书籍、邀请函和包装。',principle:'边框层级不能压过标题。',demo:'fx-retro-victorian'}
  ,{id:'mid-century-modern',cat:'graphic',name:'中世纪现代',en:'Mid-century Modern',tags:['几何','家具'],summary:'用有机几何、木色和复古色块营造温暖现代感。',usage:'家居、品牌和编辑设计。',principle:'几何形状保持简洁比例。',demo:'fx-retro-midcentury'}
  ,{id:'atomic-age-design',cat:'graphic',name:'原子时代设计',en:'Atomic Age Design',tags:['原子','放射'],summary:'放射轨迹、星爆和高对比色表达科技乐观主义。',usage:'餐饮、展览和海报。',principle:'放射中心建立视觉焦点。',demo:'fx-retro-atomic'}
  ,{id:'space-age-design',cat:'graphic',name:'太空时代设计',en:'Space Age Design',tags:['太空','未来'],summary:'圆弧舷窗、银色材质与轨道图形构成未来怀旧。',usage:'科技、音乐和产品发布。',principle:'未来符号保持统一语汇。',demo:'fx-retro-space'}
  ,{id:'retro-70s',cat:'graphic',name:'七十年代复古',en:'1970s Retro',tags:['复古','波浪'],summary:'泥土色、波浪字和颗粒纹理营造七十年代氛围。',usage:'音乐、餐饮和生活方式品牌。',principle:'复古色板需保留对比。',demo:'fx-retro-70s'}
  ,{id:'new-wave-80s',cat:'graphic',name:'八十年代新浪潮',en:'1980s New Wave',tags:['霓虹','斜切'],summary:'霓虹色、斜切网格与几何字体制造新浪潮张力。',usage:'音乐、时尚和活动海报。',principle:'高饱和色需有中性色锚点。',demo:'fx-retro-80s'}
  ,{id:'rave-90s',cat:'graphic',name:'九十年代锐舞',en:'1990s Rave',tags:['锐舞','荧光'],summary:'荧光色、扭曲字形和重复图形制造舞池能量。',usage:'派对、音乐和青年文化。',principle:'信息层级不能被纹理吞没。',demo:'fx-retro-rave'}
  ,{id:'retrofuturism',cat:'graphic',name:'复古未来主义',en:'Retrofuturism',tags:['未来','怀旧'],summary:'将旧时代想象中的未来科技与现代排版并置。',usage:'影视、游戏和科技品牌。',principle:'历史符号与当代信息保持清晰分工。',demo:'fx-retro-future'}
  ,{id:'screen-print',cat:'graphic',name:'丝网印刷',en:'Screen Print',tags:['套色','网点'],summary:'以有限套色和叠印边缘模拟丝网印刷质感。',usage:'海报、唱片和独立出版。',principle:'套色错位应保持图形可读。',demo:'fx-print-screen'}
  ,{id:'letterpress',cat:'graphic',name:'活版印刷',en:'Letterpress',tags:['压印','纸张'],summary:'文字下压纸面形成阴影和纤维起伏。',usage:'请柬、品牌和书籍。',principle:'压印深度保持克制。',demo:'fx-print-letterpress'}
  ,{id:'woodcut-print',cat:'graphic',name:'木刻版画',en:'Woodcut Print',tags:['刻痕','黑白'],summary:'粗犷刻痕与高反差墨色构成木刻语言。',usage:'海报、书籍和艺术印刷。',principle:'刻痕方向服务于形体结构。',demo:'fx-print-woodcut'}
  ,{id:'linocut',cat:'graphic',name:'油毡版画',en:'Linocut',tags:['刀痕','纹理'],summary:'以流畅刀痕和块面留白表现油毡版画。',usage:'插画、包装和出版。',principle:'纹理密度保持层次。',demo:'fx-print-linocut'}
  ,{id:'etching',cat:'graphic',name:'蚀刻版画',en:'Etching',tags:['细线','阴影'],summary:'细密交叉线与腐蚀颗粒形成蚀刻质感。',usage:'艺术出版、海报和插画。',principle:'线条密度与明暗一致。',demo:'fx-print-etching'}
  ,{id:'lithography',cat:'graphic',name:'石版印刷',en:'Lithography',tags:['颗粒','平版'],summary:'利用油水分离的颗粒笔触模拟石版印刷。',usage:'艺术、海报和档案视觉。',principle:'颗粒需保留图像轮廓。',demo:'fx-print-litho'}
  ,{id:'cyanotype',cat:'graphic',name:'蓝晒工艺',en:'Cyanotype',tags:['蓝色','曝光'],summary:'单色普鲁士蓝与曝光轮廓形成蓝晒效果。',usage:'摄影、自然和艺术项目。',principle:'高光区域保留足够细节。',demo:'fx-print-cyanotype'}
  ,{id:'monotype',cat:'graphic',name:'单版画',en:'Monotype',tags:['油墨','偶然'],summary:'一次性油墨转印留下不可完全复制的边缘。',usage:'艺术海报和实验出版。',principle:'偶然性由主体构图约束。',demo:'fx-print-monotype'}
  ,{id:'thermal-print',cat:'graphic',name:'热敏纸打印',en:'Thermal Print',tags:['热敏','黑白'],summary:'模拟热敏纸的高对比黑块与轻微横纹。',usage:'票据、展览和概念视觉。',principle:'信息优先于故障纹理。',demo:'fx-print-thermal'}
  ,{id:'dot-matrix-print',cat:'graphic',name:'针式打印',en:'Dot-matrix Print',tags:['点阵','打印'],summary:'字符由不规则点阵构成并带有走纸横纹。',usage:'档案、数据和复古科技视觉。',principle:'点阵密度需保证小字号可读。',demo:'fx-print-dotmatrix'}
  ,{id:'solarization',cat:'graphic',name:'太阳化',en:'Solarization',tags:['反相','暗房'],summary:'局部反相高光与边缘光晕模拟暗房太阳化。',usage:'艺术摄影和实验海报。',principle:'反相区域保留主体轮廓。',demo:'fx-photo-solar'}
  ,{id:'cross-processing',cat:'graphic',name:'交叉冲洗',en:'Cross Processing',tags:['色偏','胶片'],summary:'高饱和青绿与洋红色偏模拟交叉冲洗。',usage:'时尚、音乐和编辑视觉。',principle:'色偏服务于情绪而非破坏肤色。',demo:'fx-photo-cross'}
  ,{id:'light-leak',cat:'graphic',name:'漏光效果',en:'Light Leak',tags:['漏光','暖色'],summary:'边缘暖色光带叠加在图像上形成胶片漏光。',usage:'摄影、旅行和生活方式。',principle:'漏光不遮挡关键信息。',demo:'fx-photo-leak'}
  ,{id:'film-burn',cat:'graphic',name:'胶片灼烧',en:'Film Burn',tags:['灼烧','渐变'],summary:'橙红烧灼渐变沿边缘侵入画面。',usage:'音乐、影像和海报。',principle:'灼烧边界保持自然不规则。',demo:'fx-photo-burn'}
  ,{id:'infrared-photography',cat:'graphic',name:'红外摄影',en:'Infrared Photography',tags:['红外','反常色'],summary:'植被亮白、天空深暗的红外色调呈现超现实感。',usage:'风景、艺术和实验摄影。',principle:'反常色彩仍需保留空间层次。',demo:'fx-photo-infrared'}
  ,{id:'high-contrast-monochrome',cat:'graphic',name:'高反差黑白',en:'High-contrast Monochrome',tags:['黑白','高反差'],summary:'压缩灰阶并强化纯黑纯白轮廓。',usage:'肖像、纪实和海报。',principle:'高光与阴影保留必要细节。',demo:'fx-photo-contrast'}
  ,{id:'color-separation',cat:'graphic',name:'分色摄影',en:'Color Separation',tags:['分色','套印'],summary:'将 RGB 通道错位分离，模拟分色套印。',usage:'唱片、海报和实验视觉。',principle:'错位幅度控制在可识别范围。',demo:'fx-photo-separation'}
  ,{id:'multiple-exposure',cat:'graphic',name:'多重曝光',en:'Multiple Exposure',tags:['叠影','曝光'],summary:'两层半透明影像叠加形成新的轮廓关系。',usage:'艺术、音乐和人物海报。',principle:'叠加主体需共享视觉焦点。',demo:'fx-photo-multiple'}
  ,{id:'motion-blur-photography',cat:'graphic',name:'动态模糊摄影',en:'Motion-blur Photography',tags:['动态','模糊'],summary:'沿运动方向拉伸影像，保留速度轨迹。',usage:'运动、汽车和音乐视觉。',principle:'模糊方向对应真实运动。',demo:'fx-photo-motion'}
  ,{id:'scanography',cat:'graphic',name:'扫描仪摄影',en:'Scanography',tags:['扫描','平面'],summary:'以平面扫描压扁物体并保留边缘阴影。',usage:'植物、物件和艺术出版。',principle:'物体摆放关系决定叙事。',demo:'fx-photo-scan'}
  ,{id:'databending',cat:'graphic',name:'数据损坏艺术',en:'Databending',tags:['数据','故障'],summary:'模拟修改图像字节后产生的彩色断裂和条带。',usage:'音乐、艺术和实验视觉。',principle:'故障区域仍需保留构图焦点。',demo:'fx-glitch-data'}
  ,{id:'pixel-sorting',cat:'graphic',name:'像素排序',en:'Pixel Sorting',tags:['像素','排序'],summary:'沿亮度阈值拉伸像素形成流动色带。',usage:'海报、影像和数字艺术。',principle:'排序方向与主体动势一致。',demo:'fx-glitch-sort'}
  ,{id:'image-slicing',cat:'graphic',name:'图像切片',en:'Image Slicing',tags:['切片','错位'],summary:'将画面切成条带并做小幅错位重组。',usage:'时尚、音乐和展览视觉。',principle:'切片间距保持识别线索。',demo:'fx-glitch-slice'}
  ,{id:'channel-displacement',cat:'graphic',name:'通道错位',en:'Channel Displacement',tags:['RGB','错位'],summary:'分离 RGB 通道形成彩色边缘重影。',usage:'数字海报和实验摄影。',principle:'错位幅度不影响文字阅读。',demo:'fx-glitch-channel'}
  ,{id:'bitmap-dithering',cat:'graphic',name:'位图抖动',en:'Bitmap Dithering',tags:['抖动','位图'],summary:'以点阵抖动模拟有限色阶的图像过渡。',usage:'游戏、像素艺术和印刷。',principle:'抖动密度匹配输出尺寸。',demo:'fx-glitch-dither'}
  ,{id:'threshold-poster',cat:'graphic',name:'阈值海报',en:'Threshold Poster',tags:['阈值','海报'],summary:'将图像压缩为黑白阈值形状，形成强轮廓。',usage:'活动、肖像和政治海报。',principle:'关键轮廓不能被阈值吞没。',demo:'fx-glitch-threshold'}
  ,{id:'ascii-art',cat:'graphic',name:'ASCII 图像',en:'ASCII Art',tags:['字符','等宽'],summary:'用字符密度重建图像明暗与轮廓。',usage:'终端、黑客文化和实验网页。',principle:'等宽字体与阅读距离匹配。',demo:'fx-glitch-ascii'}
  ,{id:'typographic-halftone',cat:'graphic',name:'字符画网屏',en:'Typographic Halftone',tags:['网屏','文字'],summary:'以不同字号字符排列形成连续色调图像。',usage:'海报、杂志和音乐视觉。',principle:'字符密度不应牺牲标题识别。',demo:'fx-glitch-typehalf'}
  ,{id:'liquify-distortion',cat:'graphic',name:'液化扭曲',en:'Liquify Distortion',tags:['液化','扭曲'],summary:'局部推拉轮廓模拟液化工具的形变。',usage:'时尚、艺术和实验肖像。',principle:'扭曲区域与主题语义相关。',demo:'fx-glitch-liquify'}
  ,{id:'wave-displacement',cat:'graphic',name:'波纹置换',en:'Wave Displacement',tags:['波纹','置换'],summary:'沿正弦波置换图像边缘形成水面般起伏。',usage:'音乐、影像和数字艺术。',principle:'波长与内容尺度保持协调。',demo:'fx-glitch-wave'}
  ,{id:'digital-scrapbook',cat:'graphic',name:'数字剪贴簿',en:'Digital Scrapbook',tags:['剪贴簿','素材'],summary:'票据、贴纸和手写字以层叠方式组成页面。',usage:'生活方式、旅行和社交视觉。',principle:'素材层次需保留阅读路径。',demo:'fx-collage-scrap'}
  ,{id:'torn-photo-collage',cat:'graphic',name:'撕裂摄影拼贴',en:'Torn Photo Collage',tags:['撕裂','摄影'],summary:'不规则撕边照片叠放出断裂叙事。',usage:'杂志、音乐和艺术海报。',principle:'撕裂边缘不遮挡关键信息。',demo:'fx-collage-torn'}
  ,{id:'geometric-photo-collage',cat:'graphic',name:'几何摄影拼贴',en:'Geometric Photo Collage',tags:['几何','摄影'],summary:'照片被圆形、三角形等几何框裁切重组。',usage:'时尚、品牌和展览。',principle:'几何框之间保持比例节奏。',demo:'fx-collage-geo'}
  ,{id:'archival-collage',cat:'graphic',name:'档案材料拼贴',en:'Archival Collage',tags:['档案','纸张'],summary:'编号、印章与旧纸张组成研究档案感。',usage:'历史、研究和文化项目。',principle:'元数据必须像真实档案。',demo:'fx-collage-archive'}
  ,{id:'botanical-collage',cat:'graphic',name:'植物标本拼贴',en:'Botanical Collage',tags:['植物','标本'],summary:'叶片轮廓与标签形成自然史标本板。',usage:'自然、出版和教育。',principle:'标注与主体保持对应。',demo:'fx-collage-botanical'}
  ,{id:'textile-collage',cat:'graphic',name:'织物拼贴',en:'Textile Collage',tags:['织物','纹理'],summary:'布料色块与缝线纹理形成柔性拼贴。',usage:'时尚、家居和手作品牌。',principle:'纹理对比控制在可读范围。',demo:'fx-collage-textile'}
  ,{id:'food-collage',cat:'graphic',name:'食物拼贴',en:'Food Collage',tags:['食物','拼贴'],summary:'食材切面和色块组合成俏皮视觉。',usage:'餐饮、包装和活动。',principle:'色彩需保持食欲与层次。',demo:'fx-collage-food'}
  ,{id:'surreal-collage',cat:'graphic',name:'超现实拼贴',en:'Surreal Collage',tags:['超现实','错置'],summary:'不同比例物体被置于不合逻辑空间。',usage:'艺术、音乐和文化海报。',principle:'错置关系应有叙事线索。',demo:'fx-collage-surreal'}
  ,{id:'photocopy-collage',cat:'graphic',name:'影印拼贴',en:'Photocopy Collage',tags:['影印','颗粒'],summary:'高反差影印图像与黑色胶带叠加。',usage:'朋克、独立出版和音乐。',principle:'噪点不应覆盖标题。',demo:'fx-collage-copy'}
  ,{id:'object-assemblage',cat:'graphic',name:'三维物件拼贴',en:'Object Assemblage',tags:['物件','三维'],summary:'不同物件以阴影和透视组成小型装置。',usage:'展览、概念品牌和艺术。',principle:'光源方向保持统一。',demo:'fx-collage-object'}
  ,{id:'checkerboard-pattern',cat:'graphic',name:'棋盘格图案',en:'Checkerboard Pattern',tags:['方格','重复'],summary:'交替色块形成高对比棋盘节奏。',usage:'时尚、包装和海报。',principle:'方格尺度与应用尺寸匹配。',demo:'fx-pattern-checker'}
  ,{id:'polka-dots',cat:'graphic',name:'波尔卡圆点',en:'Polka Dots',tags:['圆点','节奏'],summary:'等距圆点重复构成轻快纹样。',usage:'包装、服饰和社交视觉。',principle:'圆点间距保持均匀。',demo:'fx-pattern-polka'}
  ,{id:'stripe-system',cat:'graphic',name:'条纹系统',en:'Stripe System',tags:['条纹','方向'],summary:'平行条纹以宽窄和颜色建立方向感。',usage:'品牌、导视和包装。',principle:'条纹方向服务版式动线。',demo:'fx-pattern-stripe'}
  ,{id:'herringbone-pattern',cat:'graphic',name:'人字纹',en:'Herringbone Pattern',tags:['人字纹','几何'],summary:'短条斜向交错形成经典人字骨架。',usage:'纺织、家居和品牌。',principle:'折角对齐保持连续。',demo:'fx-pattern-herring'}
  ,{id:'kaleidoscope-pattern',cat:'graphic',name:'万花筒图案',en:'Kaleidoscope Pattern',tags:['对称','万花筒'],summary:'围绕中心镜像重复形成复杂对称纹样。',usage:'海报、封面和装饰。',principle:'中心轴线保持清晰。',demo:'fx-pattern-kaleido'}
  ,{id:'moire-pattern',cat:'graphic',name:'摩尔纹',en:'Moiré Pattern',tags:['干涉','波纹'],summary:'两组细密线叠加产生动态干涉波纹。',usage:'实验海报和数字视觉。',principle:'线密度避免屏幕闪烁。',demo:'fx-pattern-moire'}
  ,{id:'maze-pattern',cat:'graphic',name:'迷宫图案',en:'Maze Pattern',tags:['迷宫','路径'],summary:'连续折线构成可追踪的迷宫纹路。',usage:'游戏、包装和活动视觉。',principle:'路径复杂度与阅读距离匹配。',demo:'fx-pattern-maze'}
  ,{id:'contour-pattern',cat:'graphic',name:'等高线图案',en:'Contour Pattern',tags:['等高线','地形'],summary:'同心不规则线模拟地图等高线层次。',usage:'户外、地图和科技品牌。',principle:'线间距保持层级。',demo:'fx-pattern-contour'}
  ,{id:'topographic-pattern',cat:'graphic',name:'拓扑纹样',en:'Topographic Pattern',tags:['拓扑','流线'],summary:'流动闭合曲线构成抽象地形纹样。',usage:'运动、户外和数据视觉。',principle:'流线方向保持整体一致。',demo:'fx-pattern-topo'}
  ,{id:'tessellation-pattern',cat:'graphic',name:'瓷砖纹样',en:'Tessellation Pattern',tags:['铺陈','无缝'],summary:'多边形无缝拼接形成连续铺陈。',usage:'壁纸、包装和界面背景。',principle:'接缝处不能出现断裂。',demo:'fx-pattern-tess'}
  ,{id:'flat-illustration',cat:'graphic',name:'平涂插画',en:'Flat Illustration',tags:['平涂','色块'],summary:'用无阴影色块和简化轮廓构成清晰插画。',usage:'产品、教育和品牌。',principle:'色块层级保持明确。',demo:'fx-illus-flat'}
  ,{id:'monoline-illustration',cat:'graphic',name:'单线插画',en:'Monoline Illustration',tags:['单线','线稿'],summary:'以等粗单线勾勒人物与物体轮廓。',usage:'图标、编辑和包装。',principle:'线条连接保持连续。',demo:'fx-illus-monoline'}
  ,{id:'isometric-illustration',cat:'graphic',name:'等距插画',en:'Isometric Illustration',tags:['等距','空间'],summary:'统一等距角度构建三维场景。',usage:'科技、产品和信息图。',principle:'透视轴线保持一致。',demo:'fx-illus-isometric'}
  ,{id:'silhouette-illustration',cat:'graphic',name:'剪影插画',en:'Silhouette Illustration',tags:['剪影','轮廓'],summary:'以单色剪影提炼主体动作和姿态。',usage:'海报、出版和导视。',principle:'轮廓需保留识别特征。',demo:'fx-illus-silhouette'}
  ,{id:'engraving-illustration',cat:'graphic',name:'木刻插画',en:'Engraving Illustration',tags:['刻线','纹理'],summary:'以密集刻线与交叉阴影塑造体积。',usage:'出版、历史和艺术。',principle:'线密度对应明暗层级。',demo:'fx-illus-engraving'}
  ,{id:'technical-illustration',cat:'graphic',name:'技术制图插画',en:'Technical Illustration',tags:['技术','标注'],summary:'用分解结构和标注线解释复杂对象。',usage:'产品、工程和说明书。',principle:'标注路径避免交叉混乱。',demo:'fx-illus-technical'}
  ,{id:'doodle-illustration',cat:'graphic',name:'涂鸦插画',en:'Doodle Illustration',tags:['涂鸦','手绘'],summary:'以随手线条和小图标构成轻松叙事。',usage:'社交、教育和活动。',principle:'随机感建立在统一笔触上。',demo:'fx-illus-doodle'}
  ,{id:'crayon-illustration',cat:'graphic',name:'童书蜡笔画',en:'Crayon Illustration',tags:['蜡笔','童趣'],summary:'模拟蜡笔颗粒和不均匀填色的童书质感。',usage:'儿童、教育和公益。',principle:'纹理不影响文字阅读。',demo:'fx-illus-crayon'}
  ,{id:'airbrush-illustration',cat:'graphic',name:'喷枪插画',en:'Airbrush Illustration',tags:['喷枪','渐变'],summary:'以柔和喷枪渐变和光晕塑造体积。',usage:'音乐、时尚和海报。',principle:'光源方向保持统一。',demo:'fx-illus-airbrush'}
  ,{id:'gradient-vector-illustration',cat:'graphic',name:'矢量渐变插画',en:'Gradient Vector Illustration',tags:['矢量','渐变'],summary:'使用多色渐变和简化矢量面构建现代插画。',usage:'品牌、产品和数字内容。',principle:'渐变方向服务形体。',demo:'fx-illus-gradient'}
  ,{id:'infographic-poster',cat:'graphic',name:'信息图海报',en:'Infographic Poster',tags:['信息图','层级'],summary:'以数字、图表和短标签组织复杂信息。',usage:'展览、报告和公共传播。',principle:'信息层级先于装饰。',demo:'fx-info-infographic'}
  ,{id:'data-art',cat:'graphic',name:'数据艺术',en:'Data Art',tags:['数据','艺术'],summary:'将数据映射为具有视觉节奏的形状和颜色。',usage:'展览、品牌和研究。',principle:'视觉编码需可解释。',demo:'fx-info-dataart'}
  ,{id:'cartographic-design',cat:'graphic',name:'地图视觉化',en:'Cartographic Design',tags:['地图','路径'],summary:'以图层、路径和标记构建可读地图。',usage:'旅行、城市和数据项目。',principle:'比例尺与图例清晰。',demo:'fx-info-map'}
  ,{id:'pictogram-narrative',cat:'graphic',name:'图标叙事',en:'Pictogram Narrative',tags:['图标','叙事'],summary:'连续图标组合成无需长文的故事序列。',usage:'导视、教育和公共信息。',principle:'图标语法保持统一。',demo:'fx-info-pictogram'}
  ,{id:'timeline-poster',cat:'graphic',name:'时间轴海报',en:'Timeline Poster',tags:['时间轴','事件'],summary:'沿轴线排列事件节点并建立时间节奏。',usage:'历史、展览和品牌故事。',principle:'时间间隔按比例表达。',demo:'fx-info-timeline'}
  ,{id:'taxonomy-chart',cat:'graphic',name:'分类学图表',en:'Taxonomy Chart',tags:['分类','层级'],summary:'以分支结构展示类别与子类别关系。',usage:'研究、目录和知识库。',principle:'分支层级保持一致。',demo:'fx-info-taxonomy'}
  ,{id:'flowchart-aesthetic',cat:'graphic',name:'流程图美学',en:'Flowchart Aesthetic',tags:['流程','节点'],summary:'用节点、连线和状态色表达过程逻辑。',usage:'产品、服务和技术文档。',principle:'连线方向避免交叉。',demo:'fx-info-flow'}
  ,{id:'numbered-index-system',cat:'graphic',name:'编号索引系统',en:'Numbered Index System',tags:['编号','索引'],summary:'通过连续编号建立内容检索与视觉秩序。',usage:'出版、展览和档案。',principle:'编号规则在全局保持一致。',demo:'fx-info-index'}
  ,{id:'modular-poster-system',cat:'graphic',name:'模块化海报系统',en:'Modular Poster System',tags:['模块','系统'],summary:'固定模块规则生成可扩展海报系列。',usage:'活动、课程和品牌。',principle:'固定与变量边界清晰。',demo:'fx-info-modular'}
  ,{id:'parametric-graphic-design',cat:'graphic',name:'参数化平面设计',en:'Parametric Graphic Design',tags:['参数','生成'],summary:'由参数控制图形密度、角度和颜色变化。',usage:'品牌、数据和数字艺术。',principle:'参数变化需保持视觉连贯。',demo:'fx-info-parametric'}
  ,{id:'web-brutalism-graphic',cat:'graphic',name:'网络粗野主义',en:'Web Brutalism Graphic',tags:['粗野主义','网页'],summary:'以原生控件、硬边框和高对比排版制造直接感。',usage:'独立网站、艺术和实验项目。',principle:'粗粝形式仍需保持可用性。',demo:'fx-web-brutal'}
  ,{id:'corecore-aesthetic',cat:'graphic',name:'核心美学拼盘',en:'Corecore Aesthetic',tags:['拼盘','情绪'],summary:'将碎片化影像、字幕和情绪符号并置。',usage:'社交、音乐和文化项目。',principle:'素材之间建立主题联系。',demo:'fx-web-corecore'}
  ,{id:'internet-nostalgia',cat:'graphic',name:'网络怀旧',en:'Internet Nostalgia',tags:['怀旧','网页'],summary:'复刻早期网页按钮、像素图标和低清渐变。',usage:'品牌、社交和文化视觉。',principle:'怀旧元素服务当前内容。',demo:'fx-web-nostalgia'}
  ,{id:'corporate-memphis',cat:'graphic',name:'企业孟菲斯',en:'Corporate Memphis',tags:['扁平','人物'],summary:'以扁平人物、圆润几何和明亮色彩传达友好。',usage:'科技、教育和服务品牌。',principle:'人物姿态避免千篇一律。',demo:'fx-web-memphis'}
  ,{id:'quiet-luxury-graphic',cat:'graphic',name:'极简奢华',en:'Quiet Luxury Graphic',tags:['极简','奢华'],summary:'以克制留白、细衬线和低饱和材质表达质感。',usage:'酒店、时尚和高端品牌。',principle:'细节质量胜过装饰数量。',demo:'fx-web-quiet'}
  ,{id:'neo-grotesque-graphic',cat:'graphic',name:'新怪诞设计',en:'Neo-grotesque Graphic',tags:['无衬线','中性'],summary:'中性无衬线、紧凑字距与网格构成当代秩序。',usage:'品牌、编辑和数字产品。',principle:'字阶差异建立信息层级。',demo:'fx-web-grotesque'}
  ,{id:'anti-design',cat:'graphic',name:'反设计',en:'Anti-design',tags:['反规则','冲突'],summary:'故意制造错位、冲突色和不稳定布局。',usage:'音乐、艺术和实验项目。',principle:'冲突元素仍需指向核心信息。',demo:'fx-web-anti'}
  ,{id:'post-internet-art',cat:'graphic',name:'后互联网艺术',en:'Post-internet Art',tags:['数字','拼贴'],summary:'将屏幕截面、3D 物体和现实材料混合。',usage:'展览、时尚和文化视觉。',principle:'数字与实体媒介保持叙事关系。',demo:'fx-web-postinternet'}
  ,{id:'generative-graphics',cat:'graphic',name:'生成式图形',en:'Generative Graphics',tags:['生成','算法'],summary:'通过规则生成可变几何图形和纹理。',usage:'品牌系统、数据和艺术。',principle:'随机性受设计约束。',demo:'fx-web-generative'}
  ,{id:'ai-surreal-visual',cat:'graphic',name:'AI 超现实视觉',en:'AI Surreal Visual',tags:['超现实','合成'],summary:'拼接不可能的物体与空间，形成梦境般场景。',usage:'音乐、广告和实验艺术。',principle:'超现实焦点仍需清晰。',demo:'fx-web-ai'}
  ,{id:'single-word-cover',cat:'cover',name:'单词超大封面',en:'Single-word Cover',tags:['大字','封面'],summary:'单个词语占据画面大部分面积形成强识别。',usage:'书籍、唱片和海报。',principle:'裁切后仍保持字形可读。',demo:'fx-cover-word'}
  ,{id:'cropped-letter-cover',cat:'cover',name:'字母裁切封面',en:'Cropped Letter Cover',tags:['裁切','字母'],summary:'放大字母并让部分笔画超出画面边界。',usage:'文学、时尚和艺术出版。',principle:'裁切边缘保留字母线索。',demo:'fx-cover-crop'}
  ,{id:'repeated-title-cover',cat:'cover',name:'重复标题封面',en:'Repeated Title Cover',tags:['重复','标题'],summary:'标题沿网格重复形成图案与节奏。',usage:'系列书籍、音乐和杂志。',principle:'重复密度不应影响主标题。',demo:'fx-cover-repeat'}
  ,{id:'circular-type-cover',cat:'cover',name:'环形文字封面',en:'Circular Type Cover',tags:['环形','文字'],summary:'文字沿圆周排列构成视觉徽章。',usage:'唱片、品牌和活动。',principle:'圆心与信息焦点对齐。',demo:'fx-cover-circle'}
  ,{id:'path-type-cover',cat:'cover',name:'路径文字封面',en:'Path Type Cover',tags:['路径','文字'],summary:'标题沿曲线路径流动，形成动态构图。',usage:'诗集、音乐和艺术书。',principle:'路径弧度保持阅读连续。',demo:'fx-cover-path'}
  ,{id:'handwritten-title-cover',cat:'cover',name:'手写标题封面',en:'Handwritten Title Cover',tags:['手写','亲密'],summary:'手写笔触带来个人化和亲密的标题语气。',usage:'随笔、日记和生活方式。',principle:'手写字需保持基本辨识度。',demo:'fx-cover-hand'}
  ,{id:'typewriter-cover',cat:'cover',name:'打字机标题封面',en:'Typewriter Cover',tags:['打字机','档案'],summary:'等宽字与打字错位营造档案和叙事感。',usage:'小说、纪实和历史内容。',principle:'字符间距保持稳定。',demo:'fx-cover-typewriter'}
  ,{id:'calligraphic-cover',cat:'cover',name:'书法标题封面',en:'Calligraphic Cover',tags:['书法','笔触'],summary:'书法笔势成为封面主图形并与留白对话。',usage:'文学、文化和艺术出版。',principle:'笔触方向建立视觉动线。',demo:'fx-cover-calligraphy'}
  ,{id:'monogram-cover',cat:'cover',name:'字母组合封面',en:'Monogram Cover',tags:['字母','组合'],summary:'首字母交叠成具有识别性的字母标志。',usage:'品牌、传记和系列出版。',principle:'交叠后仍能区分字母结构。',demo:'fx-cover-monogram'}
  ,{id:'dictionary-entry-cover',cat:'cover',name:'字典词条封面',en:'Dictionary-entry Cover',tags:['词条','定义'],summary:'词头、音标和释义排版模拟字典条目。',usage:'语言、教育和概念出版。',principle:'信息层级遵循词典阅读习惯。',demo:'fx-cover-dictionary'}
  ,{id:'portrait-closeup-cover',cat:'cover',name:'人像特写封面',en:'Portrait Close-up Cover',tags:['人像','特写'],summary:'面部局部占据画面，强调表情与质感。',usage:'传记、时尚和文学。',principle:'标题避开关键五官。',demo:'fx-cover-photo-portrait'}
  ,{id:'back-view-portrait-cover',cat:'cover',name:'背影人物封面',en:'Back-view Portrait Cover',tags:['背影','叙事'],summary:'人物背影面向空间，留下叙事想象。',usage:'小说、旅行和影像。',principle:'人物朝向与标题动线一致。',demo:'fx-cover-photo-back'}
  ,{id:'group-portrait-cover',cat:'cover',name:'群像封面',en:'Group Portrait Cover',tags:['群像','关系'],summary:'多人物构图表达群体关系与主题。',usage:'团队、纪实和文化出版。',principle:'人物层级保持清晰。',demo:'fx-cover-photo-group'}
  ,{id:'still-life-cover',cat:'cover',name:'静物摄影封面',en:'Still-life Cover',tags:['静物','构图'],summary:'以精心布置的物件传达主题隐喻。',usage:'食谱、生活方式和艺术。',principle:'物件关系形成视觉焦点。',demo:'fx-cover-photo-still'}
  ,{id:'architectural-photo-cover',cat:'cover',name:'建筑摄影封面',en:'Architectural Photo Cover',tags:['建筑','透视'],summary:'利用建筑线条与空间透视建立秩序。',usage:'建筑、城市和设计出版。',principle:'透视线不干扰标题。',demo:'fx-cover-photo-arch'}
  ,{id:'aerial-photo-cover',cat:'cover',name:'航拍摄影封面',en:'Aerial Photo Cover',tags:['航拍','俯视'],summary:'俯视地貌或城市形成抽象纹理。',usage:'旅行、地理和环境。',principle:'尺度线索需要保留。',demo:'fx-cover-photo-aerial'}
  ,{id:'night-photography-cover',cat:'cover',name:'夜景摄影封面',en:'Night Photography Cover',tags:['夜景','光点'],summary:'暗部与人造光点制造夜间氛围。',usage:'小说、音乐和城市内容。',principle:'暗背景上标题保持对比。',demo:'fx-cover-photo-night'}
  ,{id:'documentary-monochrome-cover',cat:'cover',name:'黑白纪实封面',en:'Documentary Monochrome Cover',tags:['纪实','黑白'],summary:'黑白影像强调现场与时间感。',usage:'纪实、历史和社会议题。',principle:'灰阶细节支撑叙事。',demo:'fx-cover-photo-doc'}
  ,{id:'motion-blur-cover',cat:'cover',name:'运动模糊封面',en:'Motion-blur Cover',tags:['运动','模糊'],summary:'运动方向模糊表现速度与流动。',usage:'体育、音乐和汽车。',principle:'模糊方向保持一致。',demo:'fx-cover-photo-motion'}
  ,{id:'double-exposure-cover',cat:'cover',name:'多重曝光封面',en:'Double-exposure Cover',tags:['叠影','曝光'],summary:'两幅影像叠合形成双重身份与空间。',usage:'文学、音乐和艺术。',principle:'叠影轮廓保持可辨。',demo:'fx-cover-photo-double'}
  ,{id:'dithered-image-cover',cat:'cover',name:'位图抖动封面',en:'Dithered Image Cover',tags:['抖动','位图'],summary:'以点阵抖动将影像转为有限色阶封面。',usage:'游戏、像素艺术和出版。',principle:'抖动密度适配观看距离。',demo:'fx-cover-process-dither'}
  ,{id:'halftone-portrait-cover',cat:'cover',name:'半调肖像封面',en:'Halftone Portrait Cover',tags:['半调','肖像'],summary:'以网点大小模拟肖像明暗与印刷质感。',usage:'音乐、艺术和时尚。',principle:'网点不遮挡面部识别。',demo:'fx-cover-process-halftone'}
  ,{id:'two-color-photo-cover',cat:'cover',name:'双色摄影封面',en:'Two-color Photo Cover',tags:['双色','摄影'],summary:'将照片限制为两种高对比颜色。',usage:'海报、唱片和品牌。',principle:'主次色分工明确。',demo:'fx-cover-process-duo'}
  ,{id:'threshold-image-cover',cat:'cover',name:'阈值图像封面',en:'Threshold Image Cover',tags:['阈值','图像'],summary:'以黑白阈值提炼照片轮廓。',usage:'政治、活动和肖像。',principle:'轮廓细节保持识别。',demo:'fx-cover-process-threshold'}
  ,{id:'pixelated-cover',cat:'cover',name:'像素化封面',en:'Pixelated Cover',tags:['像素','复古'],summary:'将图像块化成可辨识的像素形状。',usage:'游戏、数字艺术和音乐。',principle:'像素尺寸与输出比例匹配。',demo:'fx-cover-process-pixel'}
  ,{id:'scanline-cover',cat:'cover',name:'扫描线封面',en:'Scanline Cover',tags:['扫描线','屏幕'],summary:'水平扫描线覆盖画面，模拟 CRT 屏幕。',usage:'科技、游戏和实验视觉。',principle:'扫描线密度避免闪烁。',demo:'fx-cover-process-scanline'}
  ,{id:'channel-shift-cover',cat:'cover',name:'通道错位封面',en:'Channel-shift Cover',tags:['通道','错位'],summary:'RGB 通道横向错位形成彩色重影。',usage:'数字音乐和实验海报。',principle:'错位不影响标题阅读。',demo:'fx-cover-process-channel'}
  ,{id:'thermal-image-cover',cat:'cover',name:'热成像封面',en:'Thermal Image Cover',tags:['热成像','伪彩'],summary:'以蓝紫到橙黄的伪彩映射温度层次。',usage:'科技、运动和研究。',principle:'颜色图例保持一致。',demo:'fx-cover-process-thermal'}
  ,{id:'negative-film-cover',cat:'cover',name:'负片封面',en:'Negative Film Cover',tags:['负片','反相'],summary:'反转明暗与色彩，营造暗房负片感。',usage:'摄影、音乐和悬疑。',principle:'负片效果仍需保留主体轮廓。',demo:'fx-cover-process-negative'}
  ,{id:'xray-cover',cat:'cover',name:'X 光封面',en:'X-ray Cover',tags:['X 光','透视'],summary:'以半透明层叠展示内部结构与骨架。',usage:'医学、科技和实验艺术。',principle:'透视层次与主题相关。',demo:'fx-cover-process-xray'}
  ,{id:'flat-illustration-cover',cat:'cover',name:'扁平插画封面',en:'Flat Illustration Cover',tags:['扁平','插画'],summary:'用大色块与简化角色构成清晰封面。',usage:'儿童、教育和品牌出版。',principle:'标题与插画保持层级。',demo:'fx-cover-illus-flat'}
  ,{id:'line-art-cover',cat:'cover',name:'线稿插画封面',en:'Line-art Cover',tags:['线稿','留白'],summary:'细线轮廓配合留白营造轻盈叙事。',usage:'文学、生活方式和艺术。',principle:'线稿密度保持呼吸感。',demo:'fx-cover-illus-line'}
  ,{id:'woodcut-illustration-cover',cat:'cover',name:'木刻插画封面',en:'Woodcut Illustration Cover',tags:['木刻','纹理'],summary:'高反差刻线与粗粝纸张形成版画封面。',usage:'历史、艺术和小说。',principle:'刻线方向强化主体形体。',demo:'fx-cover-illus-wood'}
  ,{id:'watercolor-cover',cat:'cover',name:'水彩插画封面',en:'Watercolor Cover',tags:['水彩','晕染'],summary:'透明叠色与自然晕染营造柔和气质。',usage:'诗集、儿童和生活方式。',principle:'晕染边界不遮挡标题。',demo:'fx-cover-illus-water'}
  ,{id:'oil-painting-cover',cat:'cover',name:'油画封面',en:'Oil Painting Cover',tags:['油画','笔触'],summary:'厚重笔触与层叠色彩形成绘画质感。',usage:'艺术、传记和文化出版。',principle:'笔触方向服务构图。',demo:'fx-cover-illus-oil'}
  ,{id:'comic-panel-cover',cat:'cover',name:'漫画分镜封面',en:'Comic Panel Cover',tags:['漫画','分镜'],summary:'多个分镜格并置形成连续叙事。',usage:'漫画、青年读物和游戏。',principle:'阅读顺序明确。',demo:'fx-cover-illus-comic'}
  ,{id:'technical-diagram-cover',cat:'cover',name:'技术图解封面',en:'Technical Diagram Cover',tags:['图解','标注'],summary:'爆炸图、编号和连线解释复杂对象。',usage:'科技、工程和说明书。',principle:'标注线避免交叉。',demo:'fx-cover-illus-tech'}
  ,{id:'botanical-illustration-cover',cat:'cover',name:'植物插画封面',en:'Botanical Illustration Cover',tags:['植物','自然'],summary:'植物形态与学名标签组成自然主题封面。',usage:'园艺、自然和教育。',principle:'图例与主体对应。',demo:'fx-cover-illus-botanical'}
  ,{id:'map-illustration-cover',cat:'cover',name:'地图插画封面',en:'Map Illustration Cover',tags:['地图','路径'],summary:'插画化地图与路径标记讲述地点故事。',usage:'旅行、城市和地理。',principle:'比例与方向保持一致。',demo:'fx-cover-illus-map'}
  ,{id:'surreal-illustration-cover',cat:'cover',name:'超现实插画封面',en:'Surreal Illustration Cover',tags:['超现实','梦境'],summary:'不可能尺度与空间组合形成梦境封面。',usage:'小说、音乐和艺术。',principle:'超现实焦点清晰。',demo:'fx-cover-illus-surreal'}
  ,{id:'concentric-circle-cover',cat:'cover',name:'同心圆封面',en:'Concentric Circle Cover',tags:['同心圆','几何'],summary:'多层同心圆形成聚焦式封面构图。',usage:'音乐、艺术和活动。',principle:'圆心与标题建立关系。',demo:'fx-cover-geo-concentric'}
  ,{id:'striped-cover',cat:'cover',name:'条纹封面',en:'Striped Cover',tags:['条纹','节奏'],summary:'平行条纹作为背景或切分画面。',usage:'品牌、时尚和出版。',principle:'条纹方向服务版式。',demo:'fx-cover-geo-stripes'}
  ,{id:'checkerboard-cover',cat:'cover',name:'棋盘格封面',en:'Checkerboard Cover',tags:['棋盘格','重复'],summary:'棋盘格提供强烈重复节奏与复古感。',usage:'音乐、时尚和游戏。',principle:'格子尺寸保持可读性。',demo:'fx-cover-geo-checker'}
  ,{id:'modular-colorblock-cover',cat:'cover',name:'模块色块封面',en:'Modular Color-block Cover',tags:['模块','色块'],summary:'模块色块按固定网格组合出系列封面。',usage:'课程、报告和品牌。',principle:'模块变量有明确规则。',demo:'fx-cover-geo-modular'}
  ,{id:'coordinate-grid-cover',cat:'cover',name:'坐标网格封面',en:'Coordinate Grid Cover',tags:['坐标','网格'],summary:'坐标线和刻度形成技术化空间。',usage:'科技、地图和研究。',principle:'刻度信息保持一致。',demo:'fx-cover-geo-coordinate'}
  ,{id:'data-chart-cover',cat:'cover',name:'数据图表封面',en:'Data-chart Cover',tags:['图表','数据'],summary:'抽象图表成为封面主视觉。',usage:'报告、研究和商业出版。',principle:'图表简化但保留趋势。',demo:'fx-cover-geo-chart'}
  ,{id:'parametric-cover',cat:'cover',name:'参数化图形封面',en:'Parametric Cover',tags:['参数','生成'],summary:'由参数驱动密度、角度和形状变化。',usage:'科技、艺术和系列出版。',principle:'参数变化保持系列一致。',demo:'fx-cover-geo-param'}
  ,{id:'random-shape-cover',cat:'cover',name:'随机形状封面',en:'Random Shape Cover',tags:['随机','形状'],summary:'随机几何形以受控方式散布在封面。',usage:'艺术、音乐和活动。',principle:'随机性仍需视觉重心。',demo:'fx-cover-geo-random'}
  ,{id:'symmetric-geometry-cover',cat:'cover',name:'对称几何封面',en:'Symmetric Geometry Cover',tags:['对称','几何'],summary:'轴对称几何形成稳定庄重构图。',usage:'建筑、文化和品牌。',principle:'对称轴与标题对齐。',demo:'fx-cover-geo-sym'}
  ,{id:'asymmetric-geometry-cover',cat:'cover',name:'非对称几何封面',en:'Asymmetric Geometry Cover',tags:['非对称','张力'],summary:'不对称形体制造方向性和动态张力。',usage:'时尚、音乐和艺术。',principle:'视觉重量保持平衡。',demo:'fx-cover-geo-asym'}
  ,{id:'foil-stamped-cover',cat:'cover',name:'烫金封面',en:'Foil-stamped Cover',tags:['烫金','金属'],summary:'金属箔高光在深色纸面上形成奢华标题。',usage:'文学、品牌和礼盒。',principle:'烫金面积控制在强调范围。',demo:'fx-cover-material-foil'}
  ,{id:'debossed-cover',cat:'cover',name:'压凹封面',en:'Debossed Cover',tags:['压凹','触感'],summary:'标题压入纸面并以内阴影表现凹陷。',usage:'书籍、文具和品牌。',principle:'阴影方向保持统一。',demo:'fx-cover-material-deboss'}
  ,{id:'embossed-cover',cat:'cover',name:'压凸封面',en:'Embossed Cover',tags:['压凸','立体'],summary:'凸起字形通过高光和投影形成触感。',usage:'邀请函、出版和包装。',principle:'立体高度不影响装订。',demo:'fx-cover-material-emboss'}
  ,{id:'clothbound-cover',cat:'cover',name:'布面精装封面',en:'Clothbound Cover',tags:['布面','精装'],summary:'织物纹理与布脊结构构成经典精装书。',usage:'文学、艺术和收藏版。',principle:'纹理方向与书脊一致。',demo:'fx-cover-material-cloth'}
  ,{id:'leatherbound-cover',cat:'cover',name:'皮革封面',en:'Leatherbound Cover',tags:['皮革','装帧'],summary:'皮革颗粒、压印与边角营造耐久质感。',usage:'古典、收藏和品牌礼册。',principle:'装饰密度保持克制。',demo:'fx-cover-material-leather'}
  ,{id:'transparent-dust-jacket',cat:'cover',name:'透明护封',en:'Transparent Dust Jacket',tags:['透明','叠层'],summary:'透明护封叠在底层封面上形成错位关系。',usage:'艺术书、摄影和设计出版。',principle:'两层信息保持可读。',demo:'fx-cover-material-clear'}
  ,{id:'tracing-paper-cover',cat:'cover',name:'硫酸纸封面',en:'Tracing-paper Cover',tags:['半透明','纸张'],summary:'半透明纸张让底层图形若隐若现。',usage:'邀请函、作品集和书籍。',principle:'透叠层次不能混淆标题。',demo:'fx-cover-material-trace'}
  ,{id:'holographic-foil-cover',cat:'cover',name:'镭射膜封面',en:'Holographic Foil Cover',tags:['镭射','反光'],summary:'彩虹反光膜随角度变化产生动态色彩。',usage:'音乐、潮流和收藏。',principle:'反光区域控制眩光。',demo:'fx-cover-material-holo'}
  ,{id:'fluorescent-ink-cover',cat:'cover',name:'荧光专色封面',en:'Fluorescent Ink Cover',tags:['荧光','专色'],summary:'高亮专色与黑底形成强烈印刷对比。',usage:'活动、音乐和青年品牌。',principle:'荧光色承担强调信息。',demo:'fx-cover-material-fluo'}
  ,{id:'deckle-edge-cover',cat:'cover',name:'毛边纸封面',en:'Deckle-edge Cover',tags:['毛边','纸张'],summary:'不规则毛边与纤维纹理传达手工纸张。',usage:'诗集、艺术和手作出版。',principle:'毛边不遮挡装订信息。',demo:'fx-cover-material-deckle'}
  ,{id:'library-card-cover',cat:'cover',name:'图书馆卡片封面',en:'Library Card Cover',tags:['卡片','档案'],summary:'借阅卡格线、编号和日期形成怀旧档案感。',usage:'文学、教育和出版。',principle:'字段层级保持清晰。',demo:'fx-cover-archive-library'}
  ,{id:'file-folder-cover',cat:'cover',name:'文件夹封面',en:'File Folder Cover',tags:['文件夹','标签'],summary:'文件夹标签和纸张折痕构成办公档案视觉。',usage:'研究、品牌和报告。',principle:'标签位置保持统一。',demo:'fx-cover-archive-folder'}
  ,{id:'lab-notebook-cover',cat:'cover',name:'实验记录封面',en:'Lab Notebook Cover',tags:['实验','记录'],summary:'日期、样本和网格记录形成实验笔记。',usage:'科学、研究和教育。',principle:'记录字段可快速扫描。',demo:'fx-cover-archive-lab'}
  ,{id:'passport-cover',cat:'cover',name:'护照式封面',en:'Passport Cover',tags:['护照','证件'],summary:'徽章、编号与深色皮面模拟护照封面。',usage:'旅行、文化和品牌。',principle:'徽章与标题保持中心对齐。',demo:'fx-cover-archive-passport'}
  ,{id:'ticket-cover',cat:'cover',name:'票据式封面',en:'Ticket Cover',tags:['票据','穿孔'],summary:'票根编号、日期和穿孔边缘形成收藏感。',usage:'活动、音乐和纪念册。',principle:'关键信息不落在穿孔线上。',demo:'fx-cover-archive-ticket'}
  ,{id:'newspaper-frontpage-cover',cat:'cover',name:'报纸头版封面',en:'Newspaper Front-page Cover',tags:['报纸','头版'],summary:'多栏标题、日期和图片构成头版版式。',usage:'新闻、纪实和文化出版。',principle:'主标题建立明确阅读顺序。',demo:'fx-cover-archive-news'}
  ,{id:'manual-style-cover',cat:'cover',name:'说明书封面',en:'Manual-style Cover',tags:['说明书','图示'],summary:'编号步骤、警示色和线稿构成说明书封面。',usage:'产品、工程和教育。',principle:'图示与文字保持对应。',demo:'fx-cover-archive-manual'}
  ,{id:'metadata-label-cover',cat:'cover',name:'数据标签封面',en:'Metadata Label Cover',tags:['元数据','标签'],summary:'标签字段、日期和作者信息组成资料封面。',usage:'档案、摄影和研究。',principle:'元数据排版保持一致。',demo:'fx-cover-archive-meta'}
  ,{id:'barcode-cover',cat:'cover',name:'条形码封面',en:'Barcode Cover',tags:['条形码','编码'],summary:'条形码成为主视觉并与标题形成对比。',usage:'音乐、出版和产品。',principle:'编码图形保持可辨识。',demo:'fx-cover-archive-barcode'}
  ,{id:'qr-composition-cover',cat:'cover',name:'二维码构图封面',en:'QR Composition Cover',tags:['二维码','模块'],summary:'二维码模块与版式网格共同构成封面。',usage:'活动、数字出版和品牌。',principle:'二维码保持足够扫描对比度。',demo:'fx-cover-archive-qr'}
  ,{id:'tunnel-perspective-cover',cat:'cover',name:'隧道透视封面',en:'Tunnel Perspective Cover',tags:['隧道','透视'],summary:'重复框架向远处收缩形成隧道纵深。',usage:'科幻、音乐和建筑。',principle:'消失点保持稳定。',demo:'fx-cover-space-tunnel'}
  ,{id:'isometric-space-cover',cat:'cover',name:'等距空间封面',en:'Isometric Space Cover',tags:['等距','空间'],summary:'统一等距轴线构建可视化空间。',usage:'科技、游戏和设计出版。',principle:'平行轴线保持一致。',demo:'fx-cover-space-iso'}
  ,{id:'section-drawing-cover',cat:'cover',name:'建筑剖面封面',en:'Section Drawing Cover',tags:['剖面','建筑'],summary:'剖面线、标注和结构层构成技术封面。',usage:'建筑、工程和研究。',principle:'线宽层级区分结构与标注。',demo:'fx-cover-space-section'}
  ,{id:'horizon-cover',cat:'cover',name:'地平线封面',en:'Horizon Cover',tags:['地平线','留白'],summary:'明确地平线切分天空与地面区域。',usage:'旅行、文学和摄影。',principle:'地平线位置决定视觉重心。',demo:'fx-cover-space-horizon'}
  ,{id:'birds-eye-cover',cat:'cover',name:'鸟瞰构图封面',en:"Bird's-eye Cover",tags:['鸟瞰','俯视'],summary:'从上方俯视物体形成平面化构图。',usage:'地图、食物和生活方式。',principle:'物体间距保持节奏。',demo:'fx-cover-space-bird'}
  ,{id:'mirrored-space-cover',cat:'cover',name:'镜像空间封面',en:'Mirrored Space Cover',tags:['镜像','对称'],summary:'镜像轴两侧重复空间与主体。',usage:'艺术、音乐和时尚。',principle:'镜像轴与标题对齐。',demo:'fx-cover-space-mirror'}
  ,{id:'portal-frame-cover',cat:'cover',name:'门窗框景封面',en:'Portal Frame Cover',tags:['框景','门窗'],summary:'门窗作为前景框架引导视线进入画面。',usage:'旅行、建筑和小说。',principle:'框景边缘不遮挡标题。',demo:'fx-cover-space-portal'}
  ,{id:'droste-cover',cat:'cover',name:'盒中盒封面',en:'Droste Cover',tags:['递归','盒中盒'],summary:'画面中重复自身形成递归视觉。',usage:'艺术、实验和音乐。',principle:'递归层级控制在可辨范围。',demo:'fx-cover-space-droste'}
  ,{id:'folded-space-cover',cat:'cover',name:'折叠空间封面',en:'Folded Space Cover',tags:['折叠','空间'],summary:'折面与阴影让平面看似被折叠。',usage:'设计、时尚和艺术出版。',principle:'折线方向保持一致。',demo:'fx-cover-space-fold'}
  ,{id:'stage-set-cover',cat:'cover',name:'舞台布景封面',en:'Stage-set Cover',tags:['舞台','布景'],summary:'舞台幕布、灯光和布景组成叙事空间。',usage:'戏剧、音乐和文化。',principle:'灯光焦点突出标题区域。',demo:'fx-cover-space-stage'}
  ,{id:'obscured-mystery-cover',cat:'cover',name:'悬疑遮挡封面',en:'Obscured Mystery Cover',tags:['悬疑','遮挡'],summary:'局部遮挡与阴影隐藏关键线索。',usage:'悬疑、犯罪和小说。',principle:'遮挡保留足够识别线索。',demo:'fx-cover-mood-mystery'}
  ,{id:'solitude-cover',cat:'cover',name:'孤独留白封面',en:'Solitude Cover',tags:['孤独','留白'],summary:'单一主体置于大面积留白中表达距离感。',usage:'文学、摄影和诗集。',principle:'主体位置决定情绪重心。',demo:'fx-cover-mood-solitude'}
  ,{id:'high-speed-cover',cat:'cover',name:'高速动势封面',en:'High-speed Cover',tags:['速度','动势'],summary:'斜线、拖影和强对比表现高速运动。',usage:'体育、汽车和音乐。',principle:'动势方向保持统一。',demo:'fx-cover-mood-speed'}
  ,{id:'warm-lifestyle-cover',cat:'cover',name:'温暖生活封面',en:'Warm Lifestyle Cover',tags:['温暖','生活'],summary:'暖色光线与日常物件传递亲密氛围。',usage:'生活方式、家居和美食。',principle:'暖色层级保持舒适对比。',demo:'fx-cover-mood-warm'}
  ,{id:'cold-tech-cover',cat:'cover',name:'冷峻科技封面',en:'Cold Tech Cover',tags:['科技','冷色'],summary:'冷色渐变、网格和锐利光线塑造未来感。',usage:'科技、研究和产品。',principle:'高光集中在信息焦点。',demo:'fx-cover-mood-cold'}
  ,{id:'dreamscape-cover',cat:'cover',name:'梦境封面',en:'Dreamscape Cover',tags:['梦境','柔和'],summary:'漂浮物体与柔和渐变形成梦境空间。',usage:'文学、音乐和艺术。',principle:'梦境层次仍需阅读锚点。',demo:'fx-cover-mood-dream'}
  ,{id:'horror-noise-cover',cat:'cover',name:'恐怖噪点封面',en:'Horror Noise Cover',tags:['恐怖','噪点'],summary:'高反差噪点与破碎字形制造不安。',usage:'恐怖、悬疑和影像。',principle:'噪点密度控制在可读范围。',demo:'fx-cover-mood-horror'}
  ,{id:'romantic-softfocus-cover',cat:'cover',name:'浪漫柔焦封面',en:'Romantic Soft-focus Cover',tags:['浪漫','柔焦'],summary:'柔焦光晕和低对比色彩营造浪漫氛围。',usage:'爱情、诗集和生活方式。',principle:'柔焦不影响标题清晰度。',demo:'fx-cover-mood-romantic'}
  ,{id:'epic-scale-cover',cat:'cover',name:'史诗尺度封面',en:'Epic Scale Cover',tags:['史诗','尺度'],summary:'巨大景观与微小主体对比表达宏大叙事。',usage:'历史、奇幻和电影。',principle:'尺度对比建立清晰焦点。',demo:'fx-cover-mood-epic'}
  ,{id:'humorous-juxtaposition-cover',cat:'cover',name:'幽默错位封面',en:'Humorous Juxtaposition Cover',tags:['幽默','错位'],summary:'不相称物件并置制造视觉笑点。',usage:'喜剧、社交和文化。',principle:'错位关系一眼可读。',demo:'fx-cover-mood-humor'}
  ,{id:'color-coded-series-cover',cat:'cover',name:'色彩编码系列封面',en:'Color-coded Series Cover',tags:['系列','色彩'],summary:'固定版式通过每册颜色变化建立系列识别。',usage:'丛书、报告和课程。',principle:'颜色编码规则保持一致。',demo:'fx-cover-series-color'}
  ,{id:'numbered-series-cover',cat:'cover',name:'编号系列封面',en:'Numbered Series Cover',tags:['系列','编号'],summary:'大号册次编号成为封面主视觉锚点。',usage:'丛书、播客和课程。',principle:'编号与标题层级清晰。',demo:'fx-cover-series-number'}
  ,{id:'puzzle-series-cover',cat:'cover',name:'拼图系列封面',en:'Puzzle Series Cover',tags:['拼图','系列'],summary:'每册封面拼接后形成完整图像。',usage:'系列出版和收藏。',principle:'单册与合册都保持可读。',demo:'fx-cover-series-puzzle'}
  ,{id:'panoramic-series-cover',cat:'cover',name:'连续画卷系列',en:'Panoramic Series Cover',tags:['全景','连续'],summary:'跨册横向延展一幅连续画面。',usage:'漫画、艺术和摄影。',principle:'拼接边缘保持连续。',demo:'fx-cover-series-panorama'}
  ,{id:'variable-data-cover',cat:'cover',name:'可变数据封面',en:'Variable-data Cover',tags:['变量','数据'],summary:'姓名、编号或图形变量生成个性化封面。',usage:'活动、报告和会员内容。',principle:'变量范围与版式约束明确。',demo:'fx-cover-series-variable'}
  ,{id:'animated-gradient-cover',cat:'cover',name:'动态渐变封面',en:'Animated Gradient Cover',tags:['渐变','动态'],summary:'缓慢流动的渐变为数字封面增加生命感。',usage:'数字杂志、音乐和网页。',principle:'动画速度保持舒缓。',demo:'fx-cover-series-gradient'}
  ,{id:'looping-video-cover',cat:'cover',name:'循环视频封面',en:'Looping Video Cover',tags:['视频','循环'],summary:'短视频片段无缝循环并与标题叠加。',usage:'数字出版和音乐。',principle:'循环首尾保持连续。',demo:'fx-cover-series-video'}
  ,{id:'audio-reactive-cover',cat:'cover',name:'音频响应封面',en:'Audio-reactive Cover',tags:['音频','响应'],summary:'图形尺度随音量或频谱实时变化。',usage:'音乐、播客和现场活动。',principle:'响应幅度不影响文字。',demo:'fx-cover-series-audio'}
  ,{id:'interactive-reveal-cover',cat:'cover',name:'交互揭示封面',en:'Interactive Reveal Cover',tags:['交互','揭示'],summary:'点击或拖动逐步揭示封面隐藏图像。',usage:'数字书、展览和故事。',principle:'揭示进度有明确反馈。',demo:'fx-cover-series-reveal'}
  ,{id:'augmented-reality-cover',cat:'cover',name:'AR 增强封面',en:'Augmented Reality Cover',tags:['AR','增强'],summary:'封面标记触发叠加的数字内容层。',usage:'出版、展览和品牌活动。',principle:'实体封面仍可独立阅读。',demo:'fx-cover-series-ar'}
  ,{id:'tetradic-colors',cat:'color-type',name:'四角色系统',en:'Tetradic Colors',tags:['四角色','配色'],summary:'四个等距色相形成丰富但需分主次的色彩系统。',usage:'品牌、海报和数据视觉。',principle:'指定主色并控制面积比例。',demo:'fx-color-tetradic'}
  ,{id:'rectangle-color-scheme',cat:'color-type',name:'矩形配色',en:'Rectangle Color Scheme',tags:['矩形','配色'],summary:'两组互补关系构成矩形色彩平衡。',usage:'品牌、插画和界面。',principle:'暖冷比例保持稳定。',demo:'fx-color-rectangle'}
  ,{id:'square-color-scheme',cat:'color-type',name:'方形配色',en:'Square Color Scheme',tags:['方形','配色'],summary:'四个等距色相组成活跃的方形配色。',usage:'活动、娱乐和图形。',principle:'饱和度统一控制。',demo:'fx-color-square'}
  ,{id:'double-complementary-colors',cat:'color-type',name:'双互补配色',en:'Double-complementary Colors',tags:['互补','对比'],summary:'两组互补色叠加形成高对比系统。',usage:'海报、包装和数据。',principle:'避免四种颜色同时抢焦点。',demo:'fx-color-double'}
  ,{id:'warm-color-system',cat:'color-type',name:'暖色系统',en:'Warm Color System',tags:['暖色','氛围'],summary:'红橙黄相邻色构成温暖视觉氛围。',usage:'餐饮、生活方式和活动。',principle:'用明度差建立层级。',demo:'fx-color-warm'}
  ,{id:'cool-color-system',cat:'color-type',name:'冷色系统',en:'Cool Color System',tags:['冷色','氛围'],summary:'蓝绿紫色相营造冷静和科技感。',usage:'科技、医疗和数据。',principle:'冷色对比保持可读。',demo:'fx-color-cool'}
  ,{id:'neutral-color-system',cat:'color-type',name:'中性色系统',en:'Neutral Color System',tags:['中性','灰度'],summary:'灰、米、黑白构成克制的中性色阶。',usage:'编辑、建筑和高端品牌。',principle:'通过明度差而非色相分层。',demo:'fx-color-neutral'}
  ,{id:'earth-tone-system',cat:'color-type',name:'大地色系统',en:'Earth-tone System',tags:['大地色','自然'],summary:'棕、赭、橄榄与沙色构成自然色板。',usage:'户外、家居和可持续品牌。',principle:'保持低饱和与材质感。',demo:'fx-color-earth'}
  ,{id:'jewel-tone-system',cat:'color-type',name:'宝石色系统',en:'Jewel-tone System',tags:['宝石色','饱和'],summary:'深饱和蓝绿红紫营造华丽质感。',usage:'时尚、酒店和文化。',principle:'深色背景承载高饱和重点。',demo:'fx-color-jewel'}
  ,{id:'candy-color-system',cat:'color-type',name:'糖果色系统',en:'Candy Color System',tags:['糖果色','明亮'],summary:'高明度粉、薄荷、柠檬色形成轻快组合。',usage:'儿童、食品和社交。',principle:'以中性色平衡甜腻感。',demo:'fx-color-candy'}
  ,{id:'high-value-palette',cat:'color-type',name:'高明度配色',en:'High-value Palette',tags:['明度'],summary:'高明度色彩构成通透轻盈的层级。',usage:'生活方式和活动。',principle:'用深色保证文字对比。',demo:'fx-color-highvalue'}
  ,{id:'low-value-palette',cat:'color-type',name:'低明度配色',en:'Low-value Palette',tags:['明度'],summary:'深色明度范围营造沉浸氛围。',usage:'夜间模式和音乐。',principle:'保留亮色焦点。',demo:'fx-color-lowvalue'}
  ,{id:'high-chroma-palette',cat:'color-type',name:'高饱和配色',en:'High-chroma Palette',tags:['饱和'],summary:'高饱和色块带来强烈能量。',usage:'运动和促销。',principle:'限制面积避免疲劳。',demo:'fx-color-highchroma'}
  ,{id:'low-chroma-palette',cat:'color-type',name:'低饱和配色',en:'Low-chroma Palette',tags:['饱和'],summary:'低饱和色彩提供克制基调。',usage:'工具和编辑。',principle:'用明度差建立层级。',demo:'fx-color-lowchroma'}
  ,{id:'pastel-system',cat:'color-type',name:'粉彩系统',en:'Pastel System',tags:['粉彩'],summary:'粉、薄荷和淡紫组成柔和系统。',usage:'教育和社交。',principle:'搭配深色文字。',demo:'fx-color-pastel'}
  ,{id:'fluorescent-system',cat:'color-type',name:'荧光色系统',en:'Fluorescent System',tags:['荧光'],summary:'荧光色制造强烈数字感。',usage:'音乐和青年文化。',principle:'以黑白底承托。',demo:'fx-color-fluorescent'}
  ,{id:'grayscale-hierarchy',cat:'color-type',name:'灰阶层级',en:'Grayscale Hierarchy',tags:['灰阶'],summary:'连续灰阶建立清晰信息层次。',usage:'后台和阅读。',principle:'每层保持间隔。',demo:'fx-color-grayscale'}
  ,{id:'value-gradient',cat:'color-type',name:'渐变明度',en:'Value Gradient',tags:['渐变'],summary:'单一色相沿明度连续过渡。',usage:'背景和图表。',principle:'方向服务焦点。',demo:'fx-color-valuegradient'}
  ,{id:'value-contrast',cat:'color-type',name:'对比明度',en:'Value Contrast',tags:['对比'],summary:'明暗两端强化主体分离。',usage:'海报和无障碍界面。',principle:'优先保证文字对比。',demo:'fx-color-valuecontrast'}
  ,{id:'local-highlight',cat:'color-type',name:'局部高亮',en:'Local Highlight',tags:['高亮'],summary:'低调色板中的局部高亮引导注意。',usage:'仪表盘和引导。',principle:'高亮只用于关键动作。',demo:'fx-color-localhighlight'}
  ,{id:'linear-gradient-system',cat:'color-gradient',name:'线性渐变系统',en:'Linear Gradient System',tags:['线性','渐变'],summary:'沿单一方向平滑过渡的渐变基础。',usage:'背景、按钮和品牌。',principle:'方向应强化版式阅读。',demo:'fx-gradient-linear'}
  ,{id:'radial-gradient-system',cat:'color-gradient',name:'径向渐变系统',en:'Radial Gradient System',tags:['径向','渐变'],summary:'从中心向外扩散的渐变营造聚光感。',usage:'海报、卡片和焦点。',principle:'中心位置与视觉焦点一致。',demo:'fx-gradient-radial'}
  ,{id:'conic-gradient-system',cat:'color-gradient',name:'锥形渐变系统',en:'Conic Gradient System',tags:['锥形','渐变'],summary:'围绕中心旋转的色相过渡形成环形动势。',usage:'仪表盘、图表和装饰。',principle:'起始角度保持可读。',demo:'fx-gradient-conic'}
  ,{id:'multi-stop-gradient',cat:'color-gradient',name:'多段渐变',en:'Multi-stop Gradient',tags:['多段','渐变'],summary:'多个色标控制细腻而丰富的色彩过渡。',usage:'视觉背景和插画。',principle:'色标间距保持节奏。',demo:'fx-gradient-multistop'}
  ,{id:'spectrum-gradient',cat:'color-gradient',name:'光谱渐变',en:'Spectrum Gradient',tags:['光谱','色相'],summary:'连续色相光谱展示完整的彩色范围。',usage:'创意工具和数据图例。',principle:'避免光谱承担语义状态。',demo:'fx-gradient-spectrum'}
  ,{id:'metallic-gradient',cat:'color-gradient',name:'金属渐变',en:'Metallic Gradient',tags:['金属','质感'],summary:'高光与暗部交替模拟金属反射。',usage:'徽章、标题和包装。',principle:'高光带宽度决定材质感。',demo:'fx-gradient-metallic'}
  ,{id:'pearlescent-gradient',cat:'color-gradient',name:'珠光渐变',en:'Pearlescent Gradient',tags:['珠光','柔和'],summary:'低对比的彩色偏移模拟珠母光泽。',usage:'美妆、时尚和礼品。',principle:'保持柔和过渡避免塑料感。',demo:'fx-gradient-pearlescent'}
  ,{id:'dithered-gradient',cat:'color-gradient',name:'噪点渐变',en:'Dithered Gradient',tags:['噪点','颗粒'],summary:'微小颗粒打散渐变带状断层。',usage:'复古数字视觉和背景。',principle:'噪点密度不影响文字。',demo:'fx-gradient-dither'}
  ,{id:'contour-gradient',cat:'color-gradient',name:'等高线渐变',en:'Contour Gradient',tags:['等高线','地形'],summary:'渐变叠加等高线形成地形般的空间层次。',usage:'地图、海报和数据视觉。',principle:'线条间距保持均匀。',demo:'fx-gradient-contour'}
  ,{id:'animated-hue-gradient',cat:'color-gradient',name:'动态色相渐变',en:'Animated Hue Gradient',tags:['动态','色相'],summary:'色相缓慢循环的渐变为界面增加生命感。',usage:'数字封面、加载和背景。',principle:'动画速度保持舒缓。',demo:'fx-gradient-hue'}
  ,{id:'colorblind-safe-palette',cat:'color-access',name:'色盲安全配色',en:'Colorblind-safe Palette',tags:['无障碍','配色'],summary:'结合明度与形状差异降低色觉识别障碍。',usage:'图表、表单和状态提示。',principle:'不只依赖颜色传达信息。',demo:'fx-access-colorblind'}
  ,{id:'high-contrast-theme',cat:'color-access',name:'高对比主题',en:'High-contrast Theme',tags:['无障碍','对比'],summary:'强化前景与背景对比以提升可读性。',usage:'系统设置和阅读界面。',principle:'焦点状态也保持清晰。',demo:'fx-access-highcontrast'}
  ,{id:'dark-mode-scale',cat:'color-access',name:'深色模式色阶',en:'Dark-mode Scale',tags:['深色','色阶'],summary:'为深色背景建立由浅到深的界面色阶。',usage:'夜间模式和仪表盘。',principle:'避免纯黑造成刺眼边缘。',demo:'fx-access-darkscale'}
  ,{id:'light-mode-scale',cat:'color-access',name:'浅色模式色阶',en:'Light-mode Scale',tags:['浅色','色阶'],summary:'为浅色背景建立柔和的表面与边框层级。',usage:'后台、文档和工具。',principle:'层级依靠明度和边界。',demo:'fx-access-lightscale'}
  ,{id:'adaptive-contrast-type',cat:'color-access',name:'自动对比文字',en:'Adaptive Contrast Type',tags:['文字','对比'],summary:'根据背景亮度自动切换文字前景色。',usage:'图片卡片和动态主题。',principle:'切换阈值保持稳定。',demo:'fx-access-adaptive'}
  ,{id:'semantic-status-colors',cat:'color-access',name:'语义状态色',en:'Semantic Status Colors',tags:['语义','状态'],summary:'以成功、警告、错误和信息建立一致语义色。',usage:'反馈、表单和系统提示。',principle:'状态色需配合文字或图标。',demo:'fx-access-semantic'}
  ,{id:'categorical-data-colors',cat:'color-access',name:'数据分类色',en:'Categorical Data Colors',tags:['数据','分类'],summary:'为离散类别分配可区分且可重复的颜色。',usage:'图表、地图和筛选器。',principle:'类别数量增加时降低饱和度。',demo:'fx-access-categorical'}
  ,{id:'sequential-data-colors',cat:'color-access',name:'数据连续色',en:'Sequential Data Colors',tags:['数据','连续'],summary:'按数值大小沿单向明度或饱和度编码。',usage:'热力图和指标。',principle:'低值到高值方向明确。',demo:'fx-access-sequential'}
  ,{id:'diverging-data-colors',cat:'color-access',name:'数据发散色',en:'Diverging Data Colors',tags:['数据','发散'],summary:'以中点为中心向两端展开两种语义色相。',usage:'差异图和风险指标。',principle:'中性中点必须清晰。',demo:'fx-access-diverging'}
  ,{id:'ambient-adaptive-color',cat:'color-access',name:'环境自适应色',en:'Ambient-adaptive Color',tags:['环境','自适应'],summary:'根据环境明暗调整界面的色温与对比度。',usage:'车载、阅读和可穿戴设备。',principle:'变化应渐进且可预期。',demo:'fx-access-ambient'}
  ,{id:'geometric-sans',cat:'type-class',name:'几何无衬线',en:'Geometric Sans',tags:['字体','几何'],summary:'圆形与几何骨架构成现代无衬线气质。',usage:'品牌、导航和标题。',principle:'几何统一但需保留字腔。',demo:'fx-type-geometric'}
  ,{id:'humanist-sans',cat:'type-class',name:'人文无衬线',en:'Humanist Sans',tags:['字体','人文'],summary:'开放字腔与自然笔势提升亲和力和可读性。',usage:'公共服务、教育和正文。',principle:'笔画节奏保持自然。',demo:'fx-type-humanist'}
  ,{id:'neo-grotesque-sans',cat:'type-class',name:'新怪诞无衬线',en:'Neo-grotesque Sans',tags:['字体','中性'],summary:'中性、紧凑的字形适合高密度信息。',usage:'企业、产品和系统界面。',principle:'字距控制决定灰度。',demo:'fx-type-neogrotesk'}
  ,{id:'transitional-serif',cat:'type-class',name:'过渡体衬线',en:'Transitional Serif',tags:['字体','衬线'],summary:'笔画对比适中的衬线字体兼顾传统与现代。',usage:'编辑、出版和长文阅读。',principle:'行距配合中等对比。',demo:'fx-type-transitional'}
  ,{id:'didone-serif',cat:'type-class',name:'迪多内衬线',en:'Didone Serif',tags:['字体','高对比'],summary:'极高笔画对比和纤细衬线形成时尚感。',usage:'时尚、杂志和高端品牌。',principle:'小字号避免细笔画消失。',demo:'fx-type-didone'}
  ,{id:'oldstyle-serif',cat:'type-class',name:'旧式衬线',en:'Old-style Serif',tags:['字体','古典'],summary:'斜轴与柔和衬线带来书籍般的温暖阅读感。',usage:'文学、历史和文化。',principle:'段落宽度保持舒适。',demo:'fx-type-oldstyle'}
  ,{id:'slab-serif',cat:'type-class',name:'粗衬线字体',en:'Slab Serif',tags:['字体','粗衬线'],summary:'厚重方形衬线强化标题的力量与识别。',usage:'户外、体育和海报。',principle:'标题与正文形成重量对比。',demo:'fx-type-slab'}
  ,{id:'monospace-type-system',cat:'type-class',name:'等宽字体系统',en:'Monospace Type System',tags:['字体','等宽'],summary:'每个字符占据等宽空间，形成技术化节奏。',usage:'代码、数据和终端界面。',principle:'长行控制在可读宽度。',demo:'fx-type-mono'}
  ,{id:'rounded-type-system',cat:'type-class',name:'圆体字体系统',en:'Rounded Type System',tags:['字体','圆角'],summary:'圆润端点和字腔传递轻松友好的语气。',usage:'儿童、消费和社交产品。',principle:'圆润不牺牲区分度。',demo:'fx-type-rounded'}
  ,{id:'contrast-font-pairing',cat:'type-class',name:'反差字体配对',en:'Contrast Font Pairing',tags:['字体','配对'],summary:'衬线与无衬线等气质差异建立层级。',usage:'杂志、落地页和品牌。',principle:'控制配对数量与共同比例。',demo:'fx-type-contrastpair'}
  ,{id:'chamfered-type',cat:'type-form',name:'切角字体',en:'Chamfered Type',tags:['字形','切角'],summary:'切除直角形成带机械感的字形轮廓。',usage:'科技、运动和标识。',principle:'切角角度保持一致。',demo:'fx-type-chamfer'}
  ,{id:'modular-type',cat:'type-form',name:'模块化字体',en:'Modular Type',tags:['字形','模块'],summary:'由重复模块拼接出统一的字形系统。',usage:'品牌、展览和标题。',principle:'模块尺寸决定整体节奏。',demo:'fx-type-modular'}
  ,{id:'geometric-constructed-type',cat:'type-form',name:'几何构成字体',en:'Geometric Constructed Type',tags:['字形','构成'],summary:'用圆、线和矩形构造具有标志感的字形。',usage:'海报、展览和视觉识别。',principle:'基本形比例保持可辨识。',demo:'fx-type-constructed'}
  ,{id:'dot-matrix-type',cat:'type-form',name:'点阵字体',en:'Dot-matrix Type',tags:['字形','点阵'],summary:'离散圆点组成复古而灵活的文字图像。',usage:'电子、信息屏和复古视觉。',principle:'点阵密度适配观看距离。',demo:'fx-type-dotmatrix'}
  ,{id:'pixel-type',cat:'type-form',name:'像素字体',en:'Pixel Type',tags:['字形','像素'],summary:'以方形像素网格构成清晰的数字字形。',usage:'游戏、复古界面和图标。',principle:'基线与像素网格对齐。',demo:'fx-type-pixel'}
  ,{id:'segment-display-type',cat:'type-form',name:'分段数字字体',en:'Segment Display Type',tags:['字形','数字'],summary:'七段或多段笔画模拟电子数字显示。',usage:'计时器、仪表和运动。',principle:'段宽和间距统一。',demo:'fx-type-segment'}
  ,{id:'ink-trap-type',cat:'type-form',name:'墨水陷阱字体',en:'Ink-trap Type',tags:['字形','印刷'],summary:'在尖角处预留墨水陷阱以改善小字号印刷。',usage:'报刊、书籍和高密度正文。',principle:'陷阱应随字号缩放。',demo:'fx-type-inktrap'}
  ,{id:'ligature-driven-type',cat:'type-form',name:'连字设计',en:'Ligature-driven Type',tags:['字形','连字'],summary:'通过字母连接形成独特的阅读节奏和标志。',usage:'品牌、标题和字体实验。',principle:'连字不能损害词语识别。',demo:'fx-type-ligature'}
  ,{id:'monoline-type',cat:'type-form',name:'单线字体',en:'Monoline Type',tags:['字形','单线'],summary:'所有笔画保持近似等宽，形成连续线性气质。',usage:'标识、插画和界面标题。',principle:'转角与端点保持一致。',demo:'fx-type-monoline'}
  ,{id:'reverse-contrast-type',cat:'type-form',name:'反向对比字体',en:'Reverse-contrast Type',tags:['字形','反差'],summary:'横画比竖画更粗，产生反常而醒目的字体对比。',usage:'海报、时尚和实验排版。',principle:'反差控制在可读范围。',demo:'fx-type-reverse'}
  ,{id:'modular-type-scale',cat:'type-layout',name:'模块化字号体系',en:'Modular Type Scale',tags:['排版','比例'],summary:'用固定比例生成标题到正文的字号层级。',usage:'设计系统和内容产品。',principle:'比例与阅读层级保持一致。',demo:'fx-type-scale'}
  ,{id:'fluid-typography',cat:'type-layout',name:'流体排版',en:'Fluid Typography',tags:['排版','流体'],summary:'字号随视口宽度平滑变化，减少断点跳变。',usage:'响应式网页和落地页。',principle:'设置上下限避免极端尺寸。',demo:'fx-type-fluid'}
  ,{id:'responsive-typography',cat:'type-layout',name:'响应式排版',en:'Responsive Typography',tags:['排版','响应式'],summary:'在不同屏幕上调整字号、行高和行长。',usage:'移动端、桌面端和阅读器。',principle:'优先保持阅读舒适度。',demo:'fx-type-responsive'}
  ,{id:'vertical-rhythm',cat:'type-layout',name:'垂直节奏',en:'Vertical Rhythm',tags:['排版','节奏'],summary:'用统一基准间距组织段落和模块的垂直关系。',usage:'文章、文档和仪表盘。',principle:'间距单位保持可预测。',demo:'fx-type-rhythm'}
  ,{id:'baseline-grid-type',cat:'type-layout',name:'基线网格排版',en:'Baseline Grid Type',tags:['排版','基线'],summary:'让文字基线对齐网格，形成稳定的页面秩序。',usage:'编辑、出版和复杂表格。',principle:'行高与网格倍数匹配。',demo:'fx-type-baselinegrid'}
  ,{id:'hanging-punctuation',cat:'type-layout',name:'悬挂标点',en:'Hanging Punctuation',tags:['排版','标点'],summary:'将引号和标点略微移出边界以保持文字边缘齐整。',usage:'长文阅读和杂志。',principle:'只悬挂不影响识别的标点。',demo:'fx-type-hanging'}
  ,{id:'optical-margin-alignment',cat:'type-layout',name:'光学边距对齐',en:'Optical Margin Alignment',tags:['排版','对齐'],summary:'按视觉重量而非字框边界调整文字边缘。',usage:'标题、诗歌和编辑版式。',principle:'视觉边缘优先于几何边缘。',demo:'fx-type-optical'}
  ,{id:'drop-cap',cat:'type-layout',name:'首字下沉',en:'Drop Cap',tags:['排版','首字'],summary:'放大首字并跨越多行建立段落开端。',usage:'杂志、小说和专题页。',principle:'首字与正文保持基线关系。',demo:'fx-type-dropcap'}
  ,{id:'small-caps',cat:'type-layout',name:'小型大写字母',en:'Small Caps',tags:['排版','大写'],summary:'用缩小的大写字母强调标签而不破坏行高。',usage:'目录、注释和导航。',principle:'字高与小写字母协调。',demo:'fx-type-smallcaps'}
  ,{id:'text-measure',cat:'type-layout',name:'舒适行长',en:'Readable Text Measure',tags:['排版','阅读'],summary:'控制每行字符数以提升长文本的阅读速度。',usage:'文章、文档和知识库。',principle:'行长与字号和行高共同调整。',demo:'fx-type-measure'}
  ,{id:'wavy-type',cat:'type-display',name:'波浪字体',en:'Wavy Type',tags:['标题','波浪'],summary:'字符沿波浪基线起伏，形成轻快的标题动势。',usage:'音乐、活动和社交视觉。',principle:'波幅不影响字间识别。',demo:'fx-display-wavy'}
  ,{id:'arched-type',cat:'type-display',name:'弧形字体',en:'Arched Type',tags:['标题','弧形'],summary:'文字沿拱形路径排列，建立徽章式构图。',usage:'徽章、海报和包装。',principle:'弧度与字距共同控制密度。',demo:'fx-display-arched'}
  ,{id:'circular-type',cat:'type-display',name:'圆环字体',en:'Circular Type',tags:['标题','圆环'],summary:'字符围绕圆环排列，形成完整的视觉符号。',usage:'标识、唱片和活动。',principle:'圆心留出足够呼吸空间。',demo:'fx-display-circular'}
  ,{id:'perspective-type',cat:'type-display',name:'透视字体',en:'Perspective Type',tags:['标题','透视'],summary:'文字沿消失点缩放，制造空间延伸感。',usage:'电影、游戏和未来主题。',principle:'透视方向与构图一致。',demo:'fx-display-perspective'}
  ,{id:'isometric-type',cat:'type-display',name:'等距立体字体',en:'Isometric Type',tags:['标题','等距'],summary:'按等距轴构造字形，呈现稳定的三维块面。',usage:'技术、建筑和游戏。',principle:'三条轴线角度保持统一。',demo:'fx-display-isometric'}
  ,{id:'extruded-type',cat:'type-display',name:'挤压立体字体',en:'Extruded Type',tags:['标题','挤压'],summary:'复制偏移文字形成有厚度的挤压立体效果。',usage:'海报、标题和徽标。',principle:'挤压方向服务光源和阅读。',demo:'fx-display-extruded'}
  ,{id:'inflated-type',cat:'type-display',name:'膨胀字体',en:'Inflated Type',tags:['标题','膨胀'],summary:'圆润膨胀的字形带来柔软、充气般的触感。',usage:'儿童、食品和潮流视觉。',principle:'轮廓膨胀后仍需保持字腔。',demo:'fx-display-inflated'}
  ,{id:'liquid-type',cat:'type-display',name:'液化字体',en:'Liquid Type',tags:['标题','液化'],summary:'字形边缘流动融合，模拟液体变形。',usage:'音乐、实验和数字艺术。',principle:'液化程度与识别性平衡。',demo:'fx-display-liquid'}
  ,{id:'mirrored-type',cat:'type-display',name:'镜像字体',en:'Mirrored Type',tags:['标题','镜像'],summary:'文字沿轴线镜像形成对称而神秘的标题。',usage:'时尚、音乐和海报。',principle:'保留原字作为阅读锚点。',demo:'fx-display-mirrored'}
  ,{id:'kaleidoscopic-type',cat:'type-display',name:'万花筒字体',en:'Kaleidoscopic Type',tags:['标题','万花筒'],summary:'字形片段旋转复制形成万花筒般的图案。',usage:'唱片、节庆和实验图形。',principle:'中心结构保持视觉秩序。',demo:'fx-display-kaleido'}
  ,{id:'metallic-type',cat:'type-material',name:'金属字体',en:'Metallic Type',tags:['材质','金属'],summary:'渐变高光和倒影让文字呈现金属表面。',usage:'科技、汽车和徽章。',principle:'高光方向保持统一。',demo:'fx-material-metaltype'}
  ,{id:'glass-type',cat:'type-material',name:'玻璃字体',en:'Glass Type',tags:['材质','玻璃'],summary:'半透明、折射和高光模拟玻璃质感。',usage:'科技、奢侈品和界面。',principle:'透明度不能牺牲可读性。',demo:'fx-material-glasstype'}
  ,{id:'furry-type',cat:'type-material',name:'毛绒字体',en:'Furry Type',tags:['材质','毛绒'],summary:'柔软边缘和细小纤维模拟毛绒文字。',usage:'儿童、玩具和生活方式。',principle:'纹理密度保持轮廓清晰。',demo:'fx-material-furrytype'}
  ,{id:'clay-type',cat:'type-material',name:'黏土字体',en:'Clay Type',tags:['材质','黏土'],summary:'圆钝体积和柔和阴影呈现手捏黏土效果。',usage:'儿童、手工和教育。',principle:'高光与阴影共同表达体积。',demo:'fx-material-claytype'}
  ,{id:'paper-type',cat:'type-material',name:'纸张字体',en:'Paper Type',tags:['材质','纸张'],summary:'纸张边缘和纤维纹理赋予文字手工触感。',usage:'出版、文创和手账。',principle:'纸纹不要覆盖字形细节。',demo:'fx-material-papertype'}
  ,{id:'woodcut-type',cat:'type-material',name:'木刻字体',en:'Woodcut Type',tags:['材质','木刻'],summary:'粗细不一的刻痕模拟木版印刷字形。',usage:'海报、民俗和出版。',principle:'刻痕方向形成统一纹理。',demo:'fx-material-woodtype'}
  ,{id:'halftone-type',cat:'type-material',name:'半调字体',en:'Halftone Type',tags:['材质','半调'],summary:'点阵密度构成复古印刷风格的文字。',usage:'漫画、海报和报刊。',principle:'点阵尺寸适配输出分辨率。',demo:'fx-material-halftype'}
  ,{id:'grainy-type',cat:'type-material',name:'颗粒字体',en:'Grainy Type',tags:['材质','颗粒'],summary:'随机颗粒打破纯色边缘，形成胶片般的粗粝感。',usage:'音乐、电影和复古品牌。',principle:'颗粒强度保持字面可辨。',demo:'fx-material-graintype'}
  ,{id:'neon-type',cat:'type-material',name:'霓虹字体',en:'Neon Type',tags:['材质','霓虹'],summary:'发光描边与色彩晕染模拟霓虹灯管。',usage:'夜生活、音乐和游戏。',principle:'发光半径与背景对比明确。',demo:'fx-material-neontype'}
  ,{id:'embroidered-type',cat:'type-material',name:'刺绣字体',en:'Embroidered Type',tags:['材质','刺绣'],summary:'重复线迹和织物底纹构成手工刺绣文字。',usage:'服饰、手工和生活方式。',principle:'针脚方向与字形曲线一致。',demo:'fx-material-embrotype'}
  ,{id:'weight-breathing-type',cat:'type-motion',name:'字重呼吸',en:'Weight Breathing Type',tags:['动态','字重'],summary:'字重缓慢变粗变细，像呼吸一样产生节奏。',usage:'加载、标题和数字体验。',principle:'变化幅度不影响识别。',demo:'fx-motion-weighttype'}
  ,{id:'width-morphing-type',cat:'type-motion',name:'字宽伸缩',en:'Width Morphing Type',tags:['动态','字宽'],summary:'文字在窄体与宽体之间平滑变形。',usage:'标题、品牌和交互反馈。',principle:'变形锚点保持稳定。',demo:'fx-motion-widthtype'}
  ,{id:'random-glyph-cycling',cat:'type-motion',name:'字符随机替换',en:'Random Glyph Cycling',tags:['动态','字符'],summary:'字符在目标字形前短暂随机循环，制造解码感。',usage:'科技、游戏和加载状态。',principle:'最终结果必须及时稳定。',demo:'fx-motion-randomglyph'}
  ,{id:'text-scramble',cat:'type-motion',name:'文本扰动',en:'Text Scramble',tags:['动态','扰动'],summary:'文本在切换时经历字符扰动再恢复清晰。',usage:'导航、标题和数据刷新。',principle:'扰动时间短且可预测。',demo:'fx-motion-scramble'}
  ,{id:'typewriter-motion',cat:'type-motion',name:'打字机动效',en:'Typewriter Motion',tags:['动态','打字机'],summary:'字符按顺序出现并配合光标闪烁模拟打字。',usage:'终端、故事和引导。',principle:'动画可暂停并支持跳过。',demo:'fx-motion-typewriter'}
  ,{id:'glyph-cascade',cat:'type-motion',name:'字符瀑布',en:'Glyph Cascade',tags:['动态','瀑布'],summary:'字符按列或行依次落下，形成瀑布般的进入节奏。',usage:'标题、数据和音乐。',principle:'错峰延迟保持整体节奏。',demo:'fx-motion-cascadeglyph'}
  ,{id:'audio-reactive-type',cat:'type-motion',name:'音频响应字体',en:'Audio-reactive Type',tags:['动态','音频'],summary:'字形尺度或字重随音量变化。',usage:'音乐、播客和现场视觉。',principle:'响应幅度限制在可读范围。',demo:'fx-motion-audiotype'}
  ,{id:'cursor-reactive-type',cat:'type-motion',name:'鼠标响应字体',en:'Cursor-reactive Type',tags:['动态','鼠标'],summary:'文字局部字重或位移随指针靠近而变化。',usage:'作品集、实验和品牌页。',principle:'响应区域边界清楚。',demo:'fx-motion-cursortype'}
  ,{id:'generative-letterforms',cat:'type-motion',name:'生成式字形',en:'Generative Letterforms',tags:['生成','字形'],summary:'通过规则或随机参数生成不断变化的字形轮廓。',usage:'艺术、研究和海报。',principle:'随机性仍需受系统约束。',demo:'fx-motion-generative'}
  ,{id:'multi-axis-variable-type',cat:'type-motion',name:'可变字体多轴动画',en:'Multi-axis Variable Type',tags:['动态','可变字体'],summary:'字重、字宽和倾斜等轴线同步动画。',usage:'品牌、标题和数字封面。',principle:'多轴运动保持缓和协调。',demo:'fx-motion-variabletype'}
  ,{id:'top-app-bar',cat:'ui-layout',name:'顶部应用栏',en:'Top App Bar',tags:['导航','外壳'],summary:'将品牌、页面标题和关键操作集中在顶部栏。',usage:'后台、文档和移动应用。',principle:'主操作保持可见且不拥挤。',demo:'fx-layout-topbar'}
  ,{id:'dual-level-navigation',cat:'ui-layout',name:'双层导航',en:'Dual-level Navigation',tags:['导航','层级'],summary:'一级全局导航与二级上下文导航协同工作。',usage:'大型网站和企业应用。',principle:'两层职责和当前状态清晰区分。',demo:'fx-layout-dualnav'}
  ,{id:'mega-menu-layout',cat:'ui-layout',name:'巨型菜单',en:'Mega Menu',tags:['导航','菜单'],summary:'展开式多列菜单展示大量分类与快捷入口。',usage:'电商、门户和知识库。',principle:'分组与扫描路径优先。',demo:'fx-layout-mega'}
  ,{id:'bottom-navigation',cat:'ui-layout',name:'底部导航',en:'Bottom Navigation',tags:['导航','移动端'],summary:'将核心目的地固定在移动端底部触达区域。',usage:'移动应用和轻量工具。',principle:'目的地数量保持克制。',demo:'fx-layout-bottomnav'}
  ,{id:'floating-navigation-island',cat:'ui-layout',name:'浮动导航岛',en:'Floating Navigation Island',tags:['导航','浮动'],summary:'悬浮胶囊承载主要导航与快捷动作。',usage:'创意工具和沉浸式网页。',principle:'浮动元素不遮挡内容焦点。',demo:'fx-layout-navisland'}
  ,{id:'navigation-drawer-layout',cat:'ui-layout',name:'抽屉式导航',en:'Navigation Drawer',tags:['导航','抽屉'],summary:'从边缘滑出的面板容纳分层导航与账户入口。',usage:'移动端和响应式后台。',principle:'打开状态提供明确关闭路径。',demo:'fx-layout-drawer'}
  ,{id:'collapsible-sidebar-layout',cat:'ui-layout',name:'可折叠侧栏',en:'Collapsible Sidebar',tags:['导航','侧栏'],summary:'侧栏在完整导航与图标轨道之间切换。',usage:'后台、编辑器和工作台。',principle:'折叠后仍能辨识图标语义。',demo:'fx-layout-collapsibleside'}
  ,{id:'icon-rail-layout',cat:'ui-layout',name:'图标轨道布局',en:'Icon Rail Layout',tags:['导航','图标'],summary:'窄轨道以图标提供高密度的一级导航。',usage:'设计工具和专业软件。',principle:'选中态与提示文本配套。',demo:'fx-layout-iconrail'}
  ,{id:'command-palette-layout',cat:'interaction',name:'命令面板',en:'Command Palette',tags:['导航','命令'],summary:'通过可搜索的命令面板快速跳转功能与内容。',usage:'开发工具、后台和生产力应用。',principle:'键盘路径、匹配反馈和命令分组必须清楚。',demo:'fx-layout-palette'}
  ,{id:'breadcrumb-workspace',cat:'ui-layout',name:'面包屑工作区',en:'Breadcrumb Workspace',tags:['导航','层级'],summary:'面包屑路径与当前工作区内容并置，帮助定位层级。',usage:'文件管理、文档和电商。',principle:'当前层级与可返回节点易区分。',demo:'fx-layout-breadcrumb'}
  ,{id:'single-column-reading-flow',cat:'ui-layout',name:'单栏阅读流',en:'Single-column Reading Flow',tags:['阅读','单栏'],summary:'以窄幅单栏维持连续、专注的阅读路径。',usage:'文章、文档和知识库。',principle:'行长与行距保持舒适。',demo:'fx-layout-singlecolumn'}
  ,{id:'two-column-article',cat:'ui-layout',name:'双栏文章布局',en:'Two-column Article',tags:['阅读','双栏'],summary:'正文与辅助信息并列，提升长文的上下文效率。',usage:'杂志、研究和专题页。',principle:'主次栏宽度差异明确。',demo:'fx-layout-twocolumn'}
  ,{id:'newspaper-columns',cat:'ui-layout',name:'多栏报纸布局',en:'Newspaper Columns',tags:['阅读','多栏'],summary:'多列文本构成高密度的报刊式信息流。',usage:'新闻、档案和编辑页面。',principle:'列间距和阅读方向一致。',demo:'fx-layout-newspaper'}
  ,{id:'table-of-contents-layout',cat:'ui-layout',name:'目录伴随布局',en:'Table-of-contents Layout',tags:['阅读','目录'],summary:'固定目录伴随正文滚动，持续提示章节位置。',usage:'文档、教程和长篇文章。',principle:'当前章节状态明显。',demo:'fx-layout-toc'}
  ,{id:'sidenote-layout',cat:'ui-layout',name:'脚注边栏布局',en:'Sidenote Layout',tags:['阅读','脚注'],summary:'注释沿正文外侧排列，减少主文流中断。',usage:'学术、出版和注释型内容。',principle:'注释与锚点关系清楚。',demo:'fx-layout-sidenote'}
  ,{id:'pullquote-layout',cat:'ui-layout',name:'引文穿插布局',en:'Pull-quote Layout',tags:['阅读','引文'],summary:'放大的关键引文穿插在正文中形成视觉呼吸。',usage:'杂志、访谈和品牌故事。',principle:'引文不替代正文语义。',demo:'fx-layout-pullquote'}
  ,{id:'chapter-panel-layout',cat:'ui-layout',name:'章节分镜布局',en:'Chapter Panel Layout',tags:['阅读','章节'],summary:'把章节拆为连续面板，像分镜一样组织内容。',usage:'漫画、教程和叙事页面。',principle:'面板顺序和转场清楚。',demo:'fx-layout-chapter'}
  ,{id:'immersive-reading-layout',cat:'ui-layout',name:'沉浸阅读布局',en:'Immersive Reading Layout',tags:['阅读','沉浸'],summary:'隐藏干扰元素，让正文成为唯一的视觉焦点。',usage:'小说、诗歌和专注工具。',principle:'仍需保留退出与进度入口。',demo:'fx-layout-immersive'}
  ,{id:'annotated-canvas-layout',cat:'ui-layout',name:'注释画布布局',en:'Annotated Canvas',tags:['阅读','注释'],summary:'在自由画布上将内容与批注以连线关联。',usage:'研究、评审和视觉分析。',principle:'批注层级和连线不遮挡主体。',demo:'fx-layout-annotated'}
  ,{id:'document-comparison-layout',cat:'ui-layout',name:'文档对照布局',en:'Document Comparison Layout',tags:['阅读','对照'],summary:'并列展示两份文档，帮助逐段比较差异。',usage:'翻译、审核和版本管理。',principle:'滚动与差异标记保持同步。',demo:'fx-layout-compare'}
  ,{id:'compact-data-list',cat:'ui-layout',name:'紧凑数据列表',en:'Compact Data List',tags:['列表','数据'],summary:'以紧凑行高承载高密度数据与快速扫描。',usage:'后台、库存和日志。',principle:'字段对齐优先于装饰。',demo:'fx-layout-compactlist'}
  ,{id:'media-object-list',cat:'ui-layout',name:'媒体对象列表',en:'Media Object List',tags:['列表','媒体'],summary:'缩略图、标题和元信息组合成可扫描列表项。',usage:'内容、消息和文件。',principle:'缩略图比例保持一致。',demo:'fx-layout-mediaobject'}
  ,{id:'grouped-list',cat:'ui-layout',name:'分组列表',en:'Grouped List',tags:['列表','分组'],summary:'按标题或日期分组，帮助理解集合结构。',usage:'联系人、设置和历史记录。',principle:'分组标签与项目层级区分。',demo:'fx-layout-groupedlist'}
  ,{id:'alphabetical-index-list',cat:'ui-layout',name:'字母索引列表',en:'Alphabetical Index',tags:['列表','索引'],summary:'使用字母索引快速定位长列表内容。',usage:'通讯录、词典和目录。',principle:'索引与滚动位置保持同步。',demo:'fx-layout-alphaindex'}
  ,{id:'horizontal-card-rail',cat:'ui-layout',name:'横向卡片轨道',en:'Horizontal Card Rail',tags:['列表','横向'],summary:'横向滚动卡片轨道在有限高度展示更多内容。',usage:'推荐、媒体和商品。',principle:'露出下一张卡提示可滚动。',demo:'fx-layout-cardrail'}
  ,{id:'infinite-gallery',cat:'ui-layout',name:'无限画廊',en:'Infinite Gallery',tags:['列表','画廊'],summary:'连续加载图片或项目形成无尽浏览画廊。',usage:'作品集、图库和电商。',principle:'加载状态和当前位置可感知。',demo:'fx-layout-gallery'}
  ,{id:'clustered-cards',cat:'ui-layout',name:'聚类卡片布局',en:'Clustered Cards',tags:['列表','聚类'],summary:'相关卡片以视觉簇组合，表达项目之间的关联。',usage:'仪表盘、研究和灵感库。',principle:'簇间距大于簇内间距。',demo:'fx-layout-cluster'}
  ,{id:'honeycomb-grid',cat:'ui-layout',name:'蜂窝网格',en:'Honeycomb Grid',tags:['列表','网格'],summary:'六边形单元紧密拼接，形成独特集合布局。',usage:'分类、游戏和图形导航。',principle:'单元尺寸与标签长度平衡。',demo:'fx-layout-honeycomb'}
  ,{id:'tiled-pill-layout',cat:'ui-layout',name:'圆角砖块布局',en:'Tiled Pill Layout',tags:['列表','圆角'],summary:'圆角砖块以统一间距排列，兼顾标签与操作。',usage:'筛选器、技能和标签。',principle:'文字长度变化不破坏节奏。',demo:'fx-layout-pilltiles'}
  ,{id:'tag-cloud-layout',cat:'ui-layout',name:'标签云布局',en:'Tag Cloud Layout',tags:['列表','标签'],summary:'通过字号和位置差异表达标签权重。',usage:'搜索、内容分类和数据探索。',principle:'不要只用大小表达唯一语义。',demo:'fx-layout-tagcloud'}
  ,{id:'kpi-overview-layout',cat:'ui-layout',name:'KPI 总览布局',en:'KPI Overview Layout',tags:['工作台','指标'],summary:'以高优先级指标卡快速概览业务状态。',usage:'运营、财务和增长后台。',principle:'指标、趋势和时间范围就近呈现。',demo:'fx-layout-kpi'}
  ,{id:'trading-terminal-layout',cat:'ui-layout',name:'交易终端布局',en:'Trading Terminal Layout',tags:['工作台','交易'],summary:'行情、订单簿与下单面板组成高密度交易工作区。',usage:'金融、交易和监控。',principle:'关键数字优先且更新稳定。',demo:'fx-layout-trading'}
  ,{id:'multi-pane-workspace',cat:'ui-layout',name:'多窗口工作台',en:'Multi-pane Workspace',tags:['工作台','多窗'],summary:'多个可调整窗格并列承载互相关联的任务。',usage:'编辑器、分析和专业工具。',principle:'窗格边界与焦点状态清楚。',demo:'fx-layout-multipane'}
  ,{id:'master-detail-layout',cat:'ui-layout',name:'主从详情布局',en:'Master-detail Layout',tags:['工作台','详情'],summary:'列表主区与选中项详情区同步浏览。',usage:'邮件、文件和数据管理。',principle:'选择状态与返回路径明确。',demo:'fx-layout-masterdetail'}
  ,{id:'inspector-panel-layout',cat:'ui-layout',name:'检查器面板布局',en:'Inspector Panel Layout',tags:['工作台','检查器'],summary:'右侧检查器集中展示当前对象属性与设置。',usage:'设计工具、编辑器和表格。',principle:'属性按层级分组并支持折叠。',demo:'fx-layout-inspector'}
  ,{id:'dockable-panels',cat:'ui-layout',name:'可停靠面板',en:'Dockable Panels',tags:['工作台','停靠'],summary:'面板可在边缘停靠、浮动或重新排序。',usage:'开发工具和创意软件。',principle:'停靠位置有明确视觉反馈。',demo:'fx-layout-dockable'}
  ,{id:'pivot-workspace',cat:'ui-layout',name:'数据透视布局',en:'Pivot Workspace',tags:['工作台','透视'],summary:'通过行列维度切换探索聚合数据。',usage:'分析、报表和运营。',principle:'维度与指标选择可回溯。',demo:'fx-layout-pivot'}
  ,{id:'filter-results-layout',cat:'ui-layout',name:'筛选结果布局',en:'Filter-results Layout',tags:['工作台','筛选'],summary:'筛选条件与结果集合并置，实时反馈范围变化。',usage:'搜索、电商和管理后台。',principle:'已选条件与结果数量同步。',demo:'fx-layout-filterresults'}
  ,{id:'alert-center-layout',cat:'ui-layout',name:'告警中心',en:'Alert Center Layout',tags:['工作台','告警'],summary:'按严重程度和时间集中呈现告警与处理状态。',usage:'监控、运维和安全。',principle:'未处理告警优先突出。',demo:'fx-layout-alertcenter'}
  ,{id:'control-room-wall',cat:'ui-layout',name:'控制室大屏',en:'Control Room Wall',tags:['工作台','大屏'],summary:'多屏指标与状态模块组成远距离可读的大屏。',usage:'运营中心、工厂和交通。',principle:'核心状态使用大字号和高对比。',demo:'fx-layout-controlwall'}
  ,{id:'long-form-layout',cat:'ui-layout',name:'单页长表单',en:'Long-form Layout',tags:['表单','流程'],summary:'将复杂字段按章节组织在一页连续表单中。',usage:'申请、设置和资料录入。',principle:'分组和进度提示减少迷失。',demo:'fx-layout-longform'}
  ,{id:'stepper-wizard',cat:'ui-layout',name:'分步向导',en:'Stepper Wizard',tags:['表单','步骤'],summary:'用步骤条拆分任务并显示当前完成进度。',usage:'注册、导入和配置。',principle:'每步目标单一且可回退。',demo:'fx-layout-stepper'}
  ,{id:'split-form-layout',cat:'ui-layout',name:'分栏表单',en:'Split Form Layout',tags:['表单','分栏'],summary:'字段与辅助说明左右并列，提升宽屏录入效率。',usage:'后台、资料和结账。',principle:'字段顺序在窄屏保持自然。',demo:'fx-layout-splitform'}
  ,{id:'conversational-form',cat:'ui-layout',name:'对话式表单',en:'Conversational Form',tags:['表单','对话'],summary:'将字段逐个呈现为对话式问题，降低一次性压力。',usage:'入职、调研和引导。',principle:'问题语气清晰并支持跳过。',demo:'fx-layout-conversation'}
  ,{id:'inline-editing-layout',cat:'ui-layout',name:'内联编辑布局',en:'Inline Editing Layout',tags:['表单','编辑'],summary:'直接在内容位置编辑字段，减少页面跳转。',usage:'表格、资料和设置。',principle:'编辑态与阅读态边界明显。',demo:'fx-layout-inlineedit'}
  ,{id:'review-confirm-layout',cat:'ui-layout',name:'审核确认布局',en:'Review-and-confirm Layout',tags:['表单','确认'],summary:'提交前汇总展示输入内容，便于审阅和确认。',usage:'申请、支付和发布。',principle:'修改入口靠近对应字段。',demo:'fx-layout-review'}
  ,{id:'conditional-form-layout',cat:'ui-layout',name:'条件字段布局',en:'Conditional Form Layout',tags:['表单','条件'],summary:'根据前置选择动态展开相关字段。',usage:'保险、问卷和配置器。',principle:'新增字段出现时保持上下文。',demo:'fx-layout-conditional'}
  ,{id:'bulk-editing-layout',cat:'ui-layout',name:'批量编辑布局',en:'Bulk Editing Layout',tags:['表单','批量'],summary:'选择多条记录后在统一工具栏中批量修改。',usage:'内容、库存和权限管理。',principle:'影响范围和撤销能力明确。',demo:'fx-layout-bulkedit'}
  ,{id:'checkout-flow-layout',cat:'ui-layout',name:'结账流程布局',en:'Checkout Flow Layout',tags:['表单','结账'],summary:'购物车、地址、支付和确认按清晰流程排列。',usage:'电商、订阅和票务。',principle:'费用与当前步骤持续可见。',demo:'fx-layout-checkout'}
  ,{id:'application-progress-layout',cat:'ui-layout',name:'申请进度布局',en:'Application Progress Layout',tags:['表单','进度'],summary:'申请状态、待办事项和时间节点集中展示。',usage:'金融、招聘和政务。',principle:'下一步行动必须明确。',demo:'fx-layout-application'}
  ,{id:'saas-hero-layout',cat:'ui-layout',name:'SaaS 首屏布局',en:'SaaS Hero Layout',tags:['商业','首屏'],summary:'价值主张、产品预览与行动按钮组成 SaaS 首屏。',usage:'软件产品和服务官网。',principle:'首屏只保留一个主行动。',demo:'fx-layout-saashero'}
  ,{id:'feature-matrix-layout',cat:'ui-layout',name:'产品功能矩阵',en:'Feature Matrix Layout',tags:['商业','功能'],summary:'按维度并列比较产品功能与方案差异。',usage:'定价页、销售和产品文档。',principle:'比较维度保持同一顺序。',demo:'fx-layout-featurematrix'}
  ,{id:'pricing-table-layout',cat:'ui-layout',name:'定价表布局',en:'Pricing Table Layout',tags:['商业','定价'],summary:'将方案、价格、权益和行动入口并列展示。',usage:'SaaS、订阅和服务。',principle:'推荐方案有明确但克制的强调。',demo:'fx-layout-pricing'}
  ,{id:'case-study-layout',cat:'ui-layout',name:'案例研究布局',en:'Case Study Layout',tags:['内容','案例'],summary:'以问题、过程、结果组织可验证的案例叙事。',usage:'作品集、咨询和品牌。',principle:'证据与结论相互对应。',demo:'fx-layout-casestudy'}
  ,{id:'testimonial-wall',cat:'ui-layout',name:'用户证言墙',en:'Testimonial Wall',tags:['内容','证言'],summary:'多条用户评价以墙面式布局形成社会证明。',usage:'产品官网和招聘。',principle:'来源、头像和引用关系清楚。',demo:'fx-layout-testimonial'}
  ,{id:'brand-story-scrollytelling',cat:'ui-layout',name:'品牌故事长页',en:'Brand Story Scrollytelling',tags:['内容','叙事'],summary:'通过滚动节奏逐段讲述品牌历史与价值。',usage:'品牌、机构和活动。',principle:'每段只推进一个叙事节点。',demo:'fx-layout-brandstory'}
  ,{id:'career-listing-layout',cat:'ui-layout',name:'招聘职位布局',en:'Career Listing Layout',tags:['商业','招聘'],summary:'职位筛选、列表和详情组成高效招聘浏览布局。',usage:'招聘和企业站。',principle:'地点、类型和申请入口易扫读。',demo:'fx-layout-career'}
  ,{id:'event-agenda-layout',cat:'ui-layout',name:'活动议程布局',en:'Event Agenda Layout',tags:['内容','活动'],summary:'按时间轴展示活动场次、地点与讲者信息。',usage:'会议、展览和课程。',principle:'冲突场次与当前时段突出显示。',demo:'fx-layout-agenda'}
  ,{id:'course-catalog-layout',cat:'ui-layout',name:'课程目录布局',en:'Course Catalog Layout',tags:['内容','课程'],summary:'课程卡片、分类筛选和学习进度组合呈现。',usage:'教育、培训和知识库。',principle:'难度、时长和进度同层表达。',demo:'fx-layout-course'}
  ,{id:'help-center-layout',cat:'ui-layout',name:'帮助中心布局',en:'Help Center Layout',tags:['内容','帮助'],summary:'搜索、主题分类和热门文章构成支持入口。',usage:'产品帮助和客服。',principle:'从问题到答案的路径最短。',demo:'fx-layout-help'}
  ,{id:'map-sidebar-layout',cat:'ui-layout',name:'地图侧栏布局',en:'Map Sidebar Layout',tags:['空间','地图'],summary:'地图与筛选、图层或地点列表并置。',usage:'出行、房产和数据地图。',principle:'地图操作不被侧栏遮挡。',demo:'fx-layout-mapsidebar'}
  ,{id:'map-overlay-cards',cat:'ui-layout',name:'地图浮卡',en:'Map Overlay Cards',tags:['空间','浮卡'],summary:'地点卡片悬浮在地图上方，展示选中对象信息。',usage:'地图、旅行和配送。',principle:'浮卡锚点与地图位置对应。',demo:'fx-layout-mapcards'}
  ,{id:'floor-plan-navigation',cat:'ui-layout',name:'平面图导航',en:'Floor-plan Navigation',tags:['空间','平面图'],summary:'以楼层平面图作为空间导航与定位界面。',usage:'园区、商场和展馆。',principle:'方向、楼层和当前位置明确。',demo:'fx-layout-floorplan'}
  ,{id:'coordinate-canvas-layout',cat:'ui-layout',name:'坐标画布布局',en:'Coordinate Canvas',tags:['空间','坐标'],summary:'在二维坐标画布上定位与比较对象。',usage:'研究、规划和数据探索。',principle:'坐标轴、比例和缩放可见。',demo:'fx-layout-coordinate'}
  ,{id:'node-graph-canvas',cat:'ui-layout',name:'节点关系画布',en:'Node Graph Canvas',tags:['空间','关系'],summary:'节点与连线组成可探索的关系网络。',usage:'知识图谱、流程和依赖管理。',principle:'节点层级和连接方向清楚。',demo:'fx-layout-nodegraph'}
  ,{id:'infinite-whiteboard',cat:'ui-layout',name:'白板无限画布',en:'Infinite Whiteboard',tags:['空间','白板'],summary:'不受固定页面限制的自由协作画布。',usage:'头脑风暴、计划和远程协作。',principle:'缩放与当前位置始终可感知。',demo:'fx-layout-whiteboard'}
  ,{id:'minimap-canvas',cat:'ui-layout',name:'缩略图导航画布',en:'Minimap Canvas',tags:['空间','缩略图'],summary:'缩略图概览帮助在大画布中快速定位。',usage:'编辑器、地图和流程图。',principle:'缩略图视口与主画布同步。',demo:'fx-layout-minimap'}
  ,{id:'geographic-story-layout',cat:'ui-layout',name:'地理故事布局',en:'Geographic Story Layout',tags:['空间','叙事'],summary:'沿地理路径逐段讲述地点与事件。',usage:'旅行、历史和新闻。',principle:'地点顺序与故事进度一致。',demo:'fx-layout-geostory'}
  ,{id:'route-planner-layout',cat:'ui-layout',name:'路线规划布局',en:'Route Planner Layout',tags:['空间','路线'],summary:'起终点、途经点与路线详情在同一工作区协同。',usage:'出行、物流和户外。',principle:'总时长和下一步始终可见。',demo:'fx-layout-route'}
  ,{id:'spatial-zone-layout',cat:'ui-layout',name:'空间分区布局',en:'Spatial Zone Layout',tags:['空间','分区'],summary:'用区域和边界组织复杂空间中的对象。',usage:'仓储、场馆和运营。',principle:'区域标签与对象状态统一。',demo:'fx-layout-zones'}
  ,{id:'container-query-layout',cat:'ui-layout',name:'容器查询布局',en:'Container-query Layout',tags:['响应式','容器'],summary:'组件根据自身容器宽度而非视口变化布局。',usage:'组件库、卡片和嵌入模块。',principle:'断点随容器职责定义。',demo:'fx-layout-containerquery'}
  ,{id:'content-priority-reflow',cat:'ui-layout',name:'内容优先重排',en:'Content-priority Reflow',tags:['响应式','重排'],summary:'窄屏时优先保留核心内容并重新排序次要模块。',usage:'内容站、后台和电商。',principle:'优先级规则可解释。',demo:'fx-layout-priorityreflow'}
  ,{id:'mobile-stack-layout',cat:'ui-layout',name:'移动端堆叠布局',en:'Mobile Stack Layout',tags:['响应式','移动端'],summary:'多列内容在小屏自然堆叠为单列流。',usage:'落地页、表单和卡片。',principle:'堆叠顺序符合阅读逻辑。',demo:'fx-layout-mobilestack'}
  ,{id:'tablet-dual-pane',cat:'ui-layout',name:'平板双窗布局',en:'Tablet Dual-pane',tags:['响应式','平板'],summary:'平板宽度下保持列表与详情双窗并列。',usage:'阅读、邮件和文件管理。',principle:'分栏宽度可调整。',demo:'fx-layout-tabletpane'}
  ,{id:'foldable-spanning-layout',cat:'ui-layout',name:'折叠屏跨屏布局',en:'Foldable Spanning Layout',tags:['响应式','折叠屏'],summary:'跨折叠屏展开内容，同时避开铰链区域。',usage:'阅读、地图和工具。',principle:'铰链位置有安全间隙。',demo:'fx-layout-foldable'}
  ,{id:'ultrawide-layout',cat:'ui-layout',name:'超宽屏布局',en:'Ultrawide Layout',tags:['响应式','超宽'],summary:'在超宽屏利用额外空间扩展辅助栏而不拉长正文。',usage:'工作台、媒体和监控。',principle:'正文最大宽度受控。',demo:'fx-layout-ultrawide'}
  ,{id:'ten-foot-ui-layout',cat:'ui-layout',name:'电视十英尺布局',en:'Ten-foot UI Layout',tags:['响应式','电视'],summary:'为远距离观看放大文字、焦点和操作区域。',usage:'电视、会议和展陈。',principle:'焦点移动路径简单。',demo:'fx-layout-tenfoot'}
  ,{id:'orientation-adaptive-layout',cat:'ui-layout',name:'横竖屏自适应',en:'Orientation-adaptive Layout',tags:['响应式','方向'],summary:'根据屏幕方向切换布局结构与内容密度。',usage:'移动端、平板和相机。',principle:'旋转后状态与位置可恢复。',demo:'fx-layout-orientation'}
  ,{id:'density-adaptive-layout',cat:'ui-layout',name:'密度自适应布局',en:'Density-adaptive Layout',tags:['响应式','密度'],summary:'根据用户密度偏好调整间距、行高和信息量。',usage:'后台、表格和阅读工具。',principle:'密度变化不隐藏关键操作。',demo:'fx-layout-density'}
  ,{id:'type-driven-responsive-layout',cat:'ui-layout',name:'字号驱动布局',en:'Type-driven Responsive Layout',tags:['响应式','字体'],summary:'以字号和可读行长作为布局伸缩的主要约束。',usage:'阅读、文档和多语言界面。',principle:'优先保证字级与行长。',demo:'fx-layout-typeresponsive'}
  ,{id:'freeform-canvas-layout',cat:'ui-layout',name:'自由画布构图',en:'Freeform Canvas Layout',tags:['实验','画布'],summary:'元素在自由画布中按视觉关系而非固定网格排列。',usage:'灵感板、展览和实验网页。',principle:'自由布局仍需阅读锚点。',demo:'fx-layout-freeform'}
  ,{id:'broken-grid-layout',cat:'ui-layout',name:'破格网格',en:'Broken Grid Layout',tags:['实验','网格'],summary:'部分元素越出网格边界，制造张力与层次。',usage:'海报、杂志和品牌页。',principle:'破格范围受视觉秩序约束。',demo:'fx-layout-brokengrid'}
  ,{id:'diagonal-grid-layout',cat:'ui-layout',name:'对角网格',en:'Diagonal Grid Layout',tags:['实验','对角'],summary:'沿对角轴组织模块，形成方向性的阅读动势。',usage:'活动、体育和宣传页。',principle:'对角线方向保持一致。',demo:'fx-layout-diagonal'}
  ,{id:'triangular-partition',cat:'ui-layout',name:'三角分区布局',en:'Triangular Partition',tags:['实验','分区'],summary:'用三角分区切割画布并安排内容焦点。',usage:'海报、封面和数据视觉。',principle:'分区边界不切断核心信息。',demo:'fx-layout-triangular'}
  ,{id:'concentric-layout',cat:'ui-layout',name:'同心环布局',en:'Concentric Layout',tags:['实验','同心'],summary:'围绕中心层层排布内容，形成聚焦结构。',usage:'仪表盘、品牌和信息图。',principle:'中心与环层级清晰。',demo:'fx-layout-concentric'}
  ,{id:'spiral-layout',cat:'ui-layout',name:'螺旋布局',en:'Spiral Layout',tags:['实验','螺旋'],summary:'沿螺旋路径安排内容，引导视线逐步深入。',usage:'故事页、海报和展览。',principle:'入口与终点明确。',demo:'fx-layout-spiral'}
  ,{id:'orbital-layout',cat:'ui-layout',name:'轨道式布局',en:'Orbital Layout',tags:['实验','轨道'],summary:'次级元素围绕中心主体形成轨道关系。',usage:'产品、数据和品牌页。',principle:'轨道密度与中心权重匹配。',demo:'fx-layout-orbital'}
  ,{id:'fan-menu-layout',cat:'ui-layout',name:'扇形菜单布局',en:'Fan Menu Layout',tags:['实验','菜单'],summary:'从单一锚点扇形展开多个快捷入口。',usage:'移动端、游戏和创作工具。',principle:'扇区角度与触达范围一致。',demo:'fx-layout-fan'}
  ,{id:'perspective-space-layout',cat:'ui-layout',name:'透视空间布局',en:'Perspective Space Layout',tags:['实验','透视'],summary:'用透视缩放构建具有远近关系的空间界面。',usage:'作品集、游戏和叙事网页。',principle:'远近层级不影响导航。',demo:'fx-layout-perspective'}
  ,{id:'isometric-layout',cat:'ui-layout',name:'等距视角布局',en:'Isometric Layout',tags:['实验','等距'],summary:'以等距轴排列模块，表现稳定的三维工作区。',usage:'建筑、游戏和技术展示。',principle:'轴线角度和比例统一。',demo:'fx-layout-isometric'}
  ,{id:'empty-state-layout',cat:'interaction',name:'空状态引导',en:'Empty-state Guidance',tags:['状态','引导'],summary:'在没有内容时提供清晰说明与下一步行动。',usage:'列表、项目和搜索结果。',principle:'空状态应帮助用户开始，而非只显示无数据。',demo:'fx-layout-emptystate'}
  ,{id:'error-recovery-layout',cat:'interaction',name:'错误恢复',en:'Error Recovery',tags:['状态','错误'],summary:'集中呈现错误原因、影响范围与恢复操作。',usage:'网络、表单和后台。',principle:'恢复动作优先于技术细节。',demo:'fx-layout-errorrecovery'}
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
  color:{label:'主色',type:'color',value:'#53d7d0',var:'--demo-color'},
  color2:{label:'辅助色',type:'color',value:'#ff8066',var:'--demo-color-2'},
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
  diecut:['color','color2','radius','scale'],verticalcover:['color','color2','scale'],chromatic:['color','color2','intensity','scale'],gradienttype:['color','color2','rotate','scale'],
  'motion-click-squish':['color','color2','radius','scale'],'motion-click-burst':['color','color2','radius','scale'],'motion-click-particles':['color','color2','radius','scale'],'motion-click-ink':['color','radius','scale'],'motion-click-indent':['color','radius','scale'],'motion-click-highlight':['color','radius','scale'],'motion-click-iconbounce':['color','scale'],'motion-click-success':['color','color2','radius','scale'],'motion-click-error':['radius','scale'],'motion-click-longpress':['color','color2','scale'],
  'motion-nav-shared':[],'motion-nav-container':[],'motion-nav-circular':[],'motion-nav-blinds':[],'motion-nav-wipe':[],'motion-nav-pixel':[],'motion-nav-ink':[],'motion-nav-card':[],'motion-nav-depth':[],'motion-nav-axis':[],
  'motion-scroll-parallax':[],'motion-scroll-scale':[],'motion-scroll-rotate':[],'motion-scroll-horizontal':[],'motion-scroll-pinned':[],'motion-scroll-number':[],'motion-scroll-path':[],'motion-scroll-sequence':[],'motion-scroll-color':[],'motion-scroll-text':[]
  ,'motion-drag-reorder':[],'motion-drag-duplicate':[],'motion-drag-delete':[],'motion-drag-elastic':[],'motion-drag-inertia':[],'motion-drag-edge':[],'motion-drag-marquee':[],'motion-drag-resize':[],'motion-drag-rotate':[],'motion-drag-pinch':[]
  ,'motion-gesture-swipe':[],'motion-gesture-refresh':[],'motion-gesture-load':[],'motion-gesture-dismiss':[],'motion-gesture-edge':[],'motion-gesture-like':[],'motion-gesture-context':[],'motion-gesture-trail':[],'motion-gesture-rubber':[],'motion-gesture-haptic':[]
  ,'motion-form-floating':[],'motion-form-cursor':[],'motion-form-strength':[],'motion-form-validation':[],'motion-form-autocomplete':[],'motion-form-tag':[],'motion-form-upload':[],'motion-form-dragover':[],'motion-form-signature':[],'motion-form-otp':[]
  ,'motion-list-insert':[],'motion-list-remove':[],'motion-list-filter':[],'motion-list-flip':[],'motion-list-stack':[],'motion-list-snap':[],'motion-list-loop':[],'motion-list-accordion':[],'motion-list-tree':[],'motion-list-virtual':[]
  ,'motion-state-optimistic':[],'motion-state-save':[],'motion-state-reconnect':[],'motion-state-sync':[],'motion-state-notify':[],'motion-state-toast':[],'motion-state-badge':[],'motion-state-celebrate':[],'motion-state-empty':[],'motion-state-permission':[]
  ,'motion-pointer-custom':[],'motion-pointer-blend':[],'motion-pointer-label':[],'motion-pointer-preview':[],'motion-pointer-repel':[],'motion-pointer-vortex':[],'motion-pointer-magnetic':[],'motion-pointer-underline':[],'motion-pointer-border':[],'motion-pointer-swap':[]
  ,'motion-physics-gravity':[],'motion-physics-pendulum':[],'motion-physics-chain':[],'motion-physics-cloth':[],'motion-physics-liquid':[],'motion-physics-collision':[],'motion-physics-orbit':[],'motion-physics-focus':[],'motion-physics-card3d':[],'motion-physics-window':[]
  ,'fx-style-destijl':[],'fx-style-supreme':[],'fx-style-futurism':[],'fx-style-dada':[],'fx-style-objective':[],'fx-style-ulm':[],'fx-style-neoswiss':[],'fx-style-postmodern':[],'fx-style-neoexpr':[],'fx-style-newintl':[]
  ,'fx-print-screen':[],'fx-print-letterpress':[],'fx-print-woodcut':[],'fx-print-linocut':[],'fx-print-etching':[],'fx-print-litho':[],'fx-print-cyanotype':[],'fx-print-monotype':[],'fx-print-thermal':[],'fx-print-dotmatrix':[],'fx-photo-solar':[],'fx-photo-cross':[],'fx-photo-leak':[],'fx-photo-burn':[],'fx-photo-infrared':[],'fx-photo-contrast':[],'fx-photo-separation':[],'fx-photo-multiple':[],'fx-photo-motion':[],'fx-photo-scan':[],'fx-glitch-data':[],'fx-glitch-sort':[],'fx-glitch-slice':[],'fx-glitch-channel':[],'fx-glitch-dither':[],'fx-glitch-threshold':[],'fx-glitch-ascii':[],'fx-glitch-typehalf':[],'fx-glitch-liquify':[],'fx-glitch-wave':[],'fx-collage-scrap':[],'fx-collage-torn':[],'fx-collage-geo':[],'fx-collage-archive':[],'fx-collage-botanical':[],'fx-collage-textile':[],'fx-collage-food':[],'fx-collage-surreal':[],'fx-collage-copy':[],'fx-collage-object':[],'fx-pattern-checker':[],'fx-pattern-polka':[],'fx-pattern-stripe':[],'fx-pattern-herring':[],'fx-pattern-kaleido':[],'fx-pattern-moire':[],'fx-pattern-maze':[],'fx-pattern-contour':[],'fx-pattern-topo':[],'fx-pattern-tess':[],'fx-illus-flat':[],'fx-illus-monoline':[],'fx-illus-isometric':[],'fx-illus-silhouette':[],'fx-illus-engraving':[],'fx-illus-technical':[],'fx-illus-doodle':[],'fx-illus-crayon':[],'fx-illus-airbrush':[],'fx-illus-gradient':[],'fx-info-infographic':[],'fx-info-dataart':[],'fx-info-map':[],'fx-info-pictogram':[],'fx-info-timeline':[],'fx-info-taxonomy':[],'fx-info-flow':[],'fx-info-index':[],'fx-info-modular':[],'fx-info-parametric':[]
  ,'fx-info-infographic':[],'fx-info-dataart':[],'fx-info-map':[],'fx-info-pictogram':[],'fx-info-timeline':[],'fx-info-taxonomy':[],'fx-info-flow':[],'fx-info-index':[],'fx-info-modular':[],'fx-info-parametric':[],'fx-web-brutal':[],'fx-web-corecore':[],'fx-web-nostalgia':[],'fx-web-memphis':[],'fx-web-quiet':[],'fx-web-grotesque':[],'fx-web-anti':[],'fx-web-postinternet':[],'fx-web-generative':[],'fx-web-ai':[]
  ,'fx-cover-word':[],'fx-cover-crop':[],'fx-cover-repeat':[],'fx-cover-circle':[],'fx-cover-path':[],'fx-cover-hand':[],'fx-cover-typewriter':[],'fx-cover-calligraphy':[],'fx-cover-monogram':[],'fx-cover-dictionary':[]
  ,'fx-cover-photo-portrait':[],'fx-cover-photo-back':[],'fx-cover-photo-group':[],'fx-cover-photo-still':[],'fx-cover-photo-arch':[],'fx-cover-photo-aerial':[],'fx-cover-photo-night':[],'fx-cover-photo-doc':[],'fx-cover-photo-motion':[],'fx-cover-photo-double':[]
  ,'fx-cover-process-dither':[],'fx-cover-process-halftone':[],'fx-cover-process-duo':[],'fx-cover-process-threshold':[],'fx-cover-process-pixel':[],'fx-cover-process-scanline':[],'fx-cover-process-channel':[],'fx-cover-process-thermal':[],'fx-cover-process-negative':[],'fx-cover-process-xray':[]
  ,'fx-cover-illus-flat':[],'fx-cover-illus-line':[],'fx-cover-illus-wood':[],'fx-cover-illus-water':[],'fx-cover-illus-oil':[],'fx-cover-illus-comic':[],'fx-cover-illus-tech':[],'fx-cover-illus-botanical':[],'fx-cover-illus-map':[],'fx-cover-illus-surreal':[]
  ,'fx-cover-geo-concentric':[],'fx-cover-geo-stripes':[],'fx-cover-geo-checker':[],'fx-cover-geo-modular':[],'fx-cover-geo-coordinate':[],'fx-cover-geo-chart':[],'fx-cover-geo-param':[],'fx-cover-geo-random':[],'fx-cover-geo-sym':[],'fx-cover-geo-asym':[]
  ,'fx-cover-material-foil':[],'fx-cover-material-deboss':[],'fx-cover-material-emboss':[],'fx-cover-material-cloth':[],'fx-cover-material-leather':[],'fx-cover-material-clear':[],'fx-cover-material-trace':[],'fx-cover-material-holo':[],'fx-cover-material-fluo':[],'fx-cover-material-deckle':[]
  ,'fx-cover-archive-library':[],'fx-cover-archive-folder':[],'fx-cover-archive-lab':[],'fx-cover-archive-passport':[],'fx-cover-archive-ticket':[],'fx-cover-archive-news':[],'fx-cover-archive-manual':[],'fx-cover-archive-meta':[],'fx-cover-archive-barcode':[],'fx-cover-archive-qr':[]
  ,'fx-cover-space-tunnel':[],'fx-cover-space-iso':[],'fx-cover-space-section':[],'fx-cover-space-horizon':[],'fx-cover-space-bird':[],'fx-cover-space-mirror':[],'fx-cover-space-portal':[],'fx-cover-space-droste':[],'fx-cover-space-fold':[],'fx-cover-space-stage':[]
  ,'fx-cover-mood-mystery':[],'fx-cover-mood-solitude':[],'fx-cover-mood-speed':[],'fx-cover-mood-warm':[],'fx-cover-mood-cold':[],'fx-cover-mood-dream':[],'fx-cover-mood-horror':[],'fx-cover-mood-romantic':[],'fx-cover-mood-epic':[],'fx-cover-mood-humor':[]
  ,'fx-cover-series-color':[],'fx-cover-series-number':[],'fx-cover-series-puzzle':[],'fx-cover-series-panorama':[],'fx-cover-series-variable':[],'fx-cover-series-gradient':[],'fx-cover-series-video':[],'fx-cover-series-audio':[],'fx-cover-series-reveal':[],'fx-cover-series-ar':[]
  ,'fx-color-tetradic':[],'fx-color-rectangle':[],'fx-color-square':[],'fx-color-double':[],'fx-color-warm':[],'fx-color-cool':[],'fx-color-neutral':[],'fx-color-earth':[],'fx-color-jewel':[],'fx-color-candy':[]
  ,'fx-color-highvalue':[],'fx-color-lowvalue':[],'fx-color-highchroma':[],'fx-color-lowchroma':[],'fx-color-pastel':[],'fx-color-fluorescent':[],'fx-color-grayscale':[],'fx-color-valuegradient':[],'fx-color-valuecontrast':[],'fx-color-localhighlight':[]
  ,'fx-gradient-linear':[],'fx-gradient-radial':[],'fx-gradient-conic':[],'fx-gradient-multistop':[],'fx-gradient-spectrum':[],'fx-gradient-metallic':[],'fx-gradient-pearlescent':[],'fx-gradient-dither':[],'fx-gradient-contour':[],'fx-gradient-hue':[]
  ,'fx-access-colorblind':[],'fx-access-highcontrast':[],'fx-access-darkscale':[],'fx-access-lightscale':[],'fx-access-adaptive':[],'fx-access-semantic':[],'fx-access-categorical':[],'fx-access-sequential':[],'fx-access-diverging':[],'fx-access-ambient':[]
  ,'fx-type-geometric':[],'fx-type-humanist':[],'fx-type-neogrotesk':[],'fx-type-transitional':[],'fx-type-didone':[],'fx-type-oldstyle':[],'fx-type-slab':[],'fx-type-mono':[],'fx-type-rounded':[],'fx-type-contrastpair':[]
  ,'fx-type-chamfer':[],'fx-type-modular':[],'fx-type-constructed':[],'fx-type-dotmatrix':[],'fx-type-pixel':[],'fx-type-segment':[],'fx-type-inktrap':[],'fx-type-ligature':[],'fx-type-monoline':[],'fx-type-reverse':[]
  ,'fx-type-scale':[],'fx-type-fluid':[],'fx-type-responsive':[],'fx-type-rhythm':[],'fx-type-baselinegrid':[],'fx-type-hanging':[],'fx-type-optical':[],'fx-type-dropcap':[],'fx-type-smallcaps':[],'fx-type-measure':[]
  ,'fx-display-wavy':[],'fx-display-arched':[],'fx-display-circular':[],'fx-display-perspective':[],'fx-display-isometric':[],'fx-display-extruded':[],'fx-display-inflated':[],'fx-display-liquid':[],'fx-display-mirrored':[],'fx-display-kaleido':[]
  ,'fx-material-metaltype':[],'fx-material-glasstype':[],'fx-material-furrytype':[],'fx-material-claytype':[],'fx-material-papertype':[],'fx-material-woodtype':[],'fx-material-halftype':[],'fx-material-graintype':[],'fx-material-neontype':[],'fx-material-embrotype':[]
  ,'fx-motion-weighttype':[],'fx-motion-widthtype':[],'fx-motion-randomglyph':[],'fx-motion-scramble':[],'fx-motion-typewriter':[],'fx-motion-cascadeglyph':[],'fx-motion-audiotype':[],'fx-motion-cursortype':[],'fx-motion-generative':[],'fx-motion-variabletype':[]
  ,'fx-layout-topbar':[],'fx-layout-dualnav':[],'fx-layout-mega':[],'fx-layout-bottomnav':[],'fx-layout-navisland':[],'fx-layout-drawer':[],'fx-layout-collapsibleside':[],'fx-layout-iconrail':[],'fx-layout-palette':[],'fx-layout-breadcrumb':[]
  ,'fx-layout-singlecolumn':[],'fx-layout-twocolumn':[],'fx-layout-newspaper':[],'fx-layout-toc':[],'fx-layout-sidenote':[],'fx-layout-pullquote':[],'fx-layout-chapter':[],'fx-layout-immersive':[],'fx-layout-annotated':[],'fx-layout-compare':[]
  ,'fx-layout-compactlist':[],'fx-layout-mediaobject':[],'fx-layout-groupedlist':[],'fx-layout-alphaindex':[],'fx-layout-cardrail':[],'fx-layout-gallery':[],'fx-layout-cluster':[],'fx-layout-honeycomb':[],'fx-layout-pilltiles':[],'fx-layout-tagcloud':[]
  ,'fx-layout-kpi':[],'fx-layout-trading':[],'fx-layout-multipane':[],'fx-layout-masterdetail':[],'fx-layout-inspector':[],'fx-layout-dockable':[],'fx-layout-pivot':[],'fx-layout-filterresults':[],'fx-layout-alertcenter':[],'fx-layout-controlwall':[]
  ,'fx-layout-longform':[],'fx-layout-stepper':[],'fx-layout-splitform':[],'fx-layout-conversation':[],'fx-layout-inlineedit':[],'fx-layout-review':[],'fx-layout-conditional':[],'fx-layout-bulkedit':[],'fx-layout-checkout':[],'fx-layout-application':[]
  ,'fx-layout-saashero':[],'fx-layout-featurematrix':[],'fx-layout-pricing':[],'fx-layout-casestudy':[],'fx-layout-testimonial':[],'fx-layout-brandstory':[],'fx-layout-career':[],'fx-layout-agenda':[],'fx-layout-course':[],'fx-layout-help':[]
  ,'fx-layout-mapsidebar':[],'fx-layout-mapcards':[],'fx-layout-floorplan':[],'fx-layout-coordinate':[],'fx-layout-nodegraph':[],'fx-layout-whiteboard':[],'fx-layout-minimap':[],'fx-layout-geostory':[],'fx-layout-route':[],'fx-layout-zones':[]
  ,'fx-layout-containerquery':[],'fx-layout-priorityreflow':[],'fx-layout-mobilestack':[],'fx-layout-tabletpane':[],'fx-layout-foldable':[],'fx-layout-ultrawide':[],'fx-layout-tenfoot':[],'fx-layout-orientation':[],'fx-layout-density':[],'fx-layout-typeresponsive':[]
  ,'fx-layout-freeform':[],'fx-layout-brokengrid':[],'fx-layout-diagonal':[],'fx-layout-triangular':[],'fx-layout-concentric':[],'fx-layout-spiral':[],'fx-layout-orbital':[],'fx-layout-fan':[],'fx-layout-perspective':[],'fx-layout-isometric':[]
  ,'fx-layout-emptystate':[],'fx-layout-errorrecovery':[]
};

const controlsForDemo=demo=>{
  if(demoControls[demo])return demoControls[demo];
  if(!demo.startsWith('fx-'))return demoControls[demo]||['color','scale'];
  const noColor=new Set(['fx-layout-command','fx-visual-metal','fx-visual-wire','fx-visual-shadow','fx-graphic-vapor','fx-graphic-copy','fx-cover-negative','fx-cover-silhouette','fx-cover-object','fx-cover-archive','fx-type-triadic','fx-type-pair','fx-type-oversized','fx-style-destijl','fx-style-supreme','fx-style-futurism','fx-style-dada','fx-style-objective','fx-style-ulm','fx-style-neoswiss','fx-style-postmodern','fx-style-neoexpr','fx-style-newintl','fx-retro-nouveau','fx-retro-deco','fx-retro-victorian','fx-retro-midcentury','fx-retro-atomic','fx-retro-space','fx-retro-70s','fx-retro-80s','fx-retro-rave','fx-retro-future','fx-print-screen','fx-print-letterpress','fx-print-woodcut','fx-print-linocut','fx-print-etching','fx-print-litho','fx-print-cyanotype','fx-print-monotype','fx-print-thermal','fx-print-dotmatrix','fx-photo-solar','fx-photo-cross','fx-photo-leak','fx-photo-burn','fx-photo-infrared','fx-photo-contrast','fx-photo-separation','fx-photo-multiple','fx-photo-motion','fx-photo-scan','fx-glitch-data','fx-glitch-sort','fx-glitch-slice','fx-glitch-channel','fx-glitch-dither','fx-glitch-threshold','fx-glitch-ascii','fx-glitch-typehalf','fx-glitch-liquify','fx-glitch-wave','fx-collage-scrap','fx-collage-torn','fx-collage-geo','fx-collage-archive','fx-collage-botanical','fx-collage-textile','fx-collage-food','fx-collage-surreal','fx-collage-copy','fx-collage-object','fx-pattern-checker','fx-pattern-polka','fx-pattern-stripe','fx-pattern-herring','fx-pattern-kaleido','fx-pattern-moire','fx-pattern-maze','fx-pattern-contour','fx-pattern-topo','fx-pattern-tess','fx-illus-flat','fx-illus-monoline','fx-illus-isometric','fx-illus-silhouette','fx-illus-engraving','fx-illus-technical','fx-illus-doodle','fx-illus-crayon','fx-illus-airbrush','fx-illus-gradient','fx-info-infographic','fx-info-dataart','fx-info-map','fx-info-pictogram','fx-info-timeline','fx-info-taxonomy','fx-info-flow','fx-info-index','fx-info-modular','fx-info-parametric']);
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
  'fx-type-block':'<div class="demo d-fx-type-block"><b><i>COLOR</i><i>BLOCK</i></b></div>',
  'motion-click-squish':'<div class="demo d-motion-click-squish"><button type="button">PRESS ME</button></div>',
  'motion-click-burst':'<div class="demo d-motion-click-burst"><button type="button"><b>★</b><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></button></div>',
  'motion-click-particles':'<div class="demo d-motion-click-particles"><button type="button">POP<span></span></button></div>',
  'motion-click-ink':'<div class="demo d-motion-click-ink"><button type="button"><i></i><b>INK MODE</b></button></div>',
  'motion-click-indent':'<div class="demo d-motion-click-indent"><button type="button"><i></i><span>POWER</span></button></div>',
  'motion-click-highlight':'<div class="demo d-motion-click-highlight"><button type="button"><i></i><b>TOUCH SURFACE</b><span>Click anywhere</span></button></div>',
  'motion-click-iconbounce':'<div class="demo d-motion-click-iconbounce"><button type="button"><b>♥</b><span>FAVORITE</span></button></div>',
  'motion-click-success':'<div class="demo d-motion-click-success"><button type="button"><i></i><b>SAVE</b></button></div>',
  'motion-click-error':'<div class="demo d-motion-click-error"><label><span>ACCESS CODE</span><input value="••••" readonly><i>Invalid code</i></label></div>',
  'motion-click-longpress':'<div class="demo d-motion-click-longpress"><button type="button"><svg viewBox="0 0 44 44"><circle cx="22" cy="22" r="19"/></svg><b>HOLD</b></button><span>Press and hold</span></div>'
  ,'motion-nav-shared':'<div class="demo d-motion-nav-shared"><button type="button"><i></i><b>OPEN STORY</b></button><div class="shared-detail"><i></i><b>STORY DETAIL</b></div></div>'
  ,'motion-nav-container':'<div class="demo d-motion-nav-container"><button type="button"><span>PROJECT 08</span><b>EXPAND</b></button><div class="container-panel"><b>PROJECT 08</b><span>DETAILS / 2026</span></div></div>'
  ,'motion-nav-circular':'<div class="demo d-motion-nav-circular"><button type="button">REVEAL</button><div class="circular-next">NEXT PAGE</div></div>'
  ,'motion-nav-blinds':'<div class="demo d-motion-nav-blinds"><button type="button">FLIP PAGE</button><div class="blind-scene"><i></i><i></i><i></i><i></i><i></i></div></div>'
  ,'motion-nav-wipe':'<div class="demo d-motion-nav-wipe"><button type="button">WIPE</button><div class="wipe-page">NEW SECTION</div></div>'
  ,'motion-nav-pixel':'<div class="demo d-motion-nav-pixel"><button type="button">DISSOLVE</button><div class="pixel-page">PIXEL SHIFT</div></div>'
  ,'motion-nav-ink':'<div class="demo d-motion-nav-ink"><button type="button">SPREAD INK</button><div class="ink-page">NEW CHAPTER</div><i></i></div>'
  ,'motion-nav-card':'<div class="demo d-motion-nav-card"><button type="button"><b>ARTICLE 04</b><span>EXPAND CARD</span></button><div class="card-expanded"><b>ARTICLE 04</b><span>Full story content</span></div></div>'
  ,'motion-nav-depth':'<div class="demo d-motion-nav-depth"><button type="button">PUSH DEEPER</button><div class="depth-page">DETAIL LEVEL</div></div>'
  ,'motion-nav-axis':'<div class="demo d-motion-nav-axis"><button type="button">NEXT →</button><div class="axis-page">STEP TWO</div></div>'
  ,'motion-scroll-parallax':'<div class="demo d-motion-scroll-parallax"><div class="scroll-bg"></div><div class="scroll-mid">PARALLAX</div><div class="scroll-front">SCROLL ↓</div></div>'
  ,'motion-scroll-scale':'<div class="demo d-motion-scroll-scale"><div class="scale-target">ZOOM</div></div>'
  ,'motion-scroll-rotate':'<div class="demo d-motion-scroll-rotate"><div class="rotate-target">↻</div><span>ROTATE</span></div>'
  ,'motion-scroll-horizontal':'<div class="demo d-motion-scroll-horizontal"><div class="h-track"><i>01</i><i>02</i><i>03</i></div><span>DRAG / SCROLL</span></div>'
  ,'motion-scroll-pinned':'<div class="demo d-motion-scroll-pinned"><div class="pin-stage">PINNED</div><ol><li>INTRO</li><li>BUILD</li><li>LAUNCH</li></ol></div>'
  ,'motion-scroll-number':'<div class="demo d-motion-scroll-number"><strong>042</strong><span>SCROLL COUNTER</span></div>'
  ,'motion-scroll-path':'<div class="demo d-motion-scroll-path"><svg viewBox="0 0 240 100"><path d="M10 80 C60 10 120 100 230 20"/></svg><span>PATH DRAWING</span></div>'
  ,'motion-scroll-sequence':'<div class="demo d-motion-scroll-sequence"><div class="seq-frame">FRAME 01</div><span>SEQUENCE</span></div>'
  ,'motion-scroll-color':'<div class="demo d-motion-scroll-color"><div class="color-panel">COLOR SHIFT</div></div>'
  ,'motion-scroll-text':'<div class="demo d-motion-scroll-text"><b><i>SCROLL</i><i>APART</i></b></div>'
  ,'motion-drag-reorder':'<div class="demo d-motion-drag-reorder"><button draggable="true">A / DRAG</button><button draggable="true">B / DROP</button><button draggable="true">C / SORT</button></div>'
  ,'motion-drag-duplicate':'<div class="demo d-motion-drag-duplicate"><div draggable="true">DRAG + ⌘</div><span>DROP TO COPY</span></div>'
  ,'motion-drag-delete':'<div class="demo d-motion-drag-delete"><div draggable="true">TRASH ME</div><aside>⌫ DELETE ZONE</aside></div>'
  ,'motion-drag-elastic':'<div class="demo d-motion-drag-elastic"><svg viewBox="0 0 240 120"><path d="M40 60 Q120 20 200 60"/></svg><i></i><b></b></div>'
  ,'motion-drag-inertia':'<div class="demo d-motion-drag-inertia"><div draggable="true">FLING</div></div>'
  ,'motion-drag-edge':'<div class="demo d-motion-drag-edge"><div draggable="true">DRAG TO EDGE</div><span>EDGE SCROLL</span></div>'
  ,'motion-drag-marquee':'<div class="demo d-motion-drag-marquee"><i></i><i></i><i></i><span>DRAG AREA</span></div>'
  ,'motion-drag-resize':'<div class="demo d-motion-drag-resize"><div>RESIZE <i></i></div><span>120 × 80</span></div>'
  ,'motion-drag-rotate':'<div class="demo d-motion-drag-rotate"><div>ROTATE< i></i></div><span>0°</span></div>'
  ,'motion-drag-pinch':'<div class="demo d-motion-drag-pinch"><div>PINCH<br>ZOOM</div><span>2 FINGERS</span></div>'
  ,'motion-gesture-swipe':'<div class="demo d-motion-gesture-swipe"><div>SWIPE ITEM</div><aside>ARCHIVE</aside></div>'
  ,'motion-gesture-refresh':'<div class="demo d-motion-gesture-refresh"><div>↓ PULL TO REFRESH</div></div>'
  ,'motion-gesture-load':'<div class="demo d-motion-gesture-load"><div>↑ LOAD MORE</div></div>'
  ,'motion-gesture-dismiss':'<div class="demo d-motion-gesture-dismiss"><div>SWIPE AWAY</div></div>'
  ,'motion-gesture-edge':'<div class="demo d-motion-gesture-edge"><i></i><span>EDGE BACK</span></div>'
  ,'motion-gesture-like':'<div class="demo d-motion-gesture-like"><div>DOUBLE TAP <b>♡</b></div></div>'
  ,'motion-gesture-context':'<div class="demo d-motion-gesture-context"><div>HOLD FOR MENU</div><aside>EDIT · SHARE · DELETE</aside></div>'
  ,'motion-gesture-trail':'<div class="demo d-motion-gesture-trail"><svg><path d="M10 90 Q80 5 190 80"/></svg><span>DRAW GESTURE</span></div>'
  ,'motion-gesture-rubber':'<div class="demo d-motion-gesture-rubber"><div>RUBBER BAND</div></div>'
  ,'motion-gesture-haptic':'<div class="demo d-motion-gesture-haptic"><i></i><i></i><i></i><span>HAPTIC RHYTHM</span></div>'
  ,'motion-form-floating':'<div class="demo d-motion-form-floating"><label><span>EMAIL ADDRESS</span><input placeholder="you@example.com"></label></div>'
  ,'motion-form-cursor':'<div class="demo d-motion-form-cursor"><input value="TYPE HERE" aria-label="type"></div>'
  ,'motion-form-strength':'<div class="demo d-motion-form-strength"><input placeholder="Create password"><div><i></i><i></i><i></i><i></i></div></div>'
  ,'motion-form-validation':'<div class="demo d-motion-form-validation"><button type="button">VALIDATE</button><span></span></div>'
  ,'motion-form-autocomplete':'<div class="demo d-motion-form-autocomplete"><input placeholder="Search"><ul><li>Design system</li><li>Motion patterns</li></ul></div>'
  ,'motion-form-tag':'<div class="demo d-motion-form-tag"><input placeholder="Add tag + Enter"><div class="tags"></div></div>'
  ,'motion-form-upload':'<div class="demo d-motion-form-upload"><button type="button">UPLOAD <b>0%</b></button></div>'
  ,'motion-form-dragover':'<div class="demo d-motion-form-dragover">DROP FILES HERE</div>'
  ,'motion-form-signature':'<div class="demo d-motion-form-signature"><canvas width="260" height="110"></canvas><span>DRAW SIGNATURE</span></div>'
  ,'motion-form-otp':'<div class="demo d-motion-form-otp"><input maxlength="1"><input maxlength="1"><input maxlength="1"><input maxlength="1"></div>'
  ,'motion-list-insert':'<div class="demo d-motion-list-insert"><button type="button">＋ INSERT ITEM</button><ul><li>Existing item</li><li>Another item</li></ul></div>'
  ,'motion-list-remove':'<div class="demo d-motion-list-remove"><button type="button">REMOVE</button><ul><li>Delete me</li><li>Item stays</li></ul></div>'
  ,'motion-list-filter':'<div class="demo d-motion-list-filter"><button type="button">FILTER</button><div><i>A</i><i>B</i><i>C</i></div></div>'
  ,'motion-list-flip':'<div class="demo d-motion-list-flip"><button type="button">SORT</button><ol><li>01</li><li>02</li><li>03</li></ol></div>'
  ,'motion-list-stack':'<div class="demo d-motion-list-stack"><i>TOP CARD</i><i>NEXT CARD</i><i>THIRD</i></div>'
  ,'motion-list-snap':'<div class="demo d-motion-list-snap"><div><i>01</i><i>02</i><i>03</i></div></div>'
  ,'motion-list-loop':'<div class="demo d-motion-list-loop"><div><i>A</i><i>B</i><i>C</i><i>A</i></div></div>'
  ,'motion-list-accordion':'<div class="demo d-motion-list-accordion"><button type="button">SECTION 01 <b>＋</b></button><p>Expanded content with motion.</p></div>'
  ,'motion-list-tree':'<div class="demo d-motion-list-tree"><button type="button">▸ PROJECT</button><ul><li>index.html</li><li>styles.css</li></ul></div>'
  ,'motion-list-virtual':'<div class="demo d-motion-list-virtual"><div><i>ROW 01</i><i>ROW 02</i><i>ROW 03</i><i>ROW 04</i></div></div>'
  ,'motion-state-optimistic':'<div class="demo d-motion-state-optimistic"><button type="button">♥ LIKE</button><span>Saved instantly</span></div>'
  ,'motion-state-save':'<div class="demo d-motion-state-save"><button type="button">SAVE</button><span>All changes saved</span></div>'
  ,'motion-state-reconnect':'<div class="demo d-motion-state-reconnect"><b>OFFLINE</b><button type="button">RECONNECT</button></div>'
  ,'motion-state-sync':'<div class="demo d-motion-state-sync"><i>⟳</i><span>SYNCING</span></div>'
  ,'motion-state-notify':'<div class="demo d-motion-state-notify"><aside>New notification <b>×</b></aside></div>'
  ,'motion-state-toast':'<div class="demo d-motion-state-toast"><i>Saved</i><i>Export complete</i><i>Copied</i></div>'
  ,'motion-state-badge':'<div class="demo d-motion-state-badge"><b>12</b><span>UNREAD</span></div>'
  ,'motion-state-celebrate':'<div class="demo d-motion-state-celebrate"><div>100% ✓</div><i>✦</i><i>✦</i><i>✦</i></div>'
  ,'motion-state-empty':'<div class="demo d-motion-state-empty"><div>◌</div><span>Nothing here yet</span></div>'
  ,'motion-state-permission':'<div class="demo d-motion-state-permission"><aside><b>Allow notifications?</b><button>Allow</button></aside></div>'
  ,'motion-pointer-custom':'<div class="demo d-motion-pointer-custom"><i>✦</i><span>MOVE POINTER</span></div>'
  ,'motion-pointer-blend':'<div class="demo d-motion-pointer-blend"><div class="blend-field"><span>LIGHT</span><span>DARK</span><b>DIFFERENCE</b></div><i class="blend-cursor"></i></div>'
  ,'motion-pointer-label':'<div class="demo d-motion-pointer-label"><b>LABEL</b><span>FOLLOW CURSOR</span></div>'
  ,'motion-pointer-preview':'<div class="demo d-motion-pointer-preview"><nav><a href="#" data-preview="preview-alpha">PROJECT ALPHA <span>01</span></a><a href="#" data-preview="preview-beta">STUDIO BETA <span>02</span></a><a href="#" data-preview="preview-gamma">ARCHIVE GAMMA <span>03</span></a></nav><div class="cursor-preview" aria-hidden="true"><i id="preview-alpha"></i><i id="preview-beta"></i><i id="preview-gamma"></i><b>VIEW PROJECT</b></div></div>'
  ,'motion-pointer-repel':'<div class="demo d-motion-pointer-repel"><button type="button">CATCH ME</button></div>'
  ,'motion-pointer-vortex':'<div class="demo d-motion-pointer-vortex"><i></i><i></i><i></i><i></i><span>VORTEX</span></div>'
  ,'motion-pointer-magnetic':'<div class="demo d-motion-pointer-magnetic"><b>MAGNETIC</b></div>'
  ,'motion-pointer-underline':'<div class="demo d-motion-pointer-underline"><a href="#">HOVER LINK</a></div>'
  ,'motion-pointer-border':'<div class="demo d-motion-pointer-border"><div>TRACE BORDER</div></div>'
  ,'motion-pointer-swap':'<div class="demo d-motion-pointer-swap"><div><b>FRONT</b><span>BACK CONTENT</span></div></div>'
  ,'motion-physics-gravity':'<div class="demo d-motion-physics-gravity"><i></i></div>','motion-physics-pendulum':'<div class="demo d-motion-physics-pendulum"><i></i></div>','motion-physics-chain':'<div class="demo d-motion-physics-chain"><i></i><i></i><i></i><i></i></div>','motion-physics-cloth':'<div class="demo d-motion-physics-cloth"><i></i></div>','motion-physics-liquid':'<div class="demo d-motion-physics-liquid"><i></i></div>','motion-physics-collision':'<div class="demo d-motion-physics-collision"><i></i><b></b></div>','motion-physics-orbit':'<div class="demo d-motion-physics-orbit"><i></i></div>','motion-physics-focus':'<div class="demo d-motion-physics-focus" data-focus-state="near"><div class="focus-scene"><i class="focus-layer focus-far"><span>FAR</span></i><i class="focus-layer focus-near"><span>NEAR</span></i></div><nav><button type="button" class="active" data-focus="near">NEAR</button><button type="button" data-focus="far">FAR</button></nav></div>','motion-physics-card3d':'<div class="demo d-motion-physics-card3d"><div>FLIP CARD</div></div>','motion-physics-window':'<div class="demo d-motion-physics-window"><div>SPACE WINDOW</div></div>'
  ,'fx-style-destijl':'<div class="demo d-fx-style-destijl"><i></i><i></i><b>DE STIJL</b></div>','fx-style-supreme':'<div class="demo d-fx-style-supreme"><i></i><i></i><b>SUPREME</b></div>','fx-style-futurism':'<div class="demo d-fx-style-futurism"><b>FUTURE</b><i></i></div>','fx-style-dada':'<div class="demo d-fx-style-dada"><b>DADA!</b><i>?</i></div>','fx-style-objective':'<div class="demo d-fx-style-objective"><i></i><b>OBJECTIVE</b></div>','fx-style-ulm':'<div class="demo d-fx-style-ulm"><i></i><i></i><b>ULM / 04</b></div>','fx-style-neoswiss':'<div class="demo d-fx-style-neoswiss"><b>NEO<br>SWISS</b></div>','fx-style-postmodern':'<div class="demo d-fx-style-postmodern"><b>POST</b><i>MODERN</i></div>','fx-style-neoexpr':'<div class="demo d-fx-style-neoexpr"><b>EMOTE</b><i></i></div>','fx-style-newintl':'<div class="demo d-fx-style-newintl"><b>INTL<br>TYPE</b></div>'
  ,'fx-retro-nouveau':'<div class="demo d-fx-retro-nouveau"><b>NOUVEAU</b><i></i></div>','fx-retro-deco':'<div class="demo d-fx-retro-deco"><b>DECO</b><i></i></div>','fx-retro-victorian':'<div class="demo d-fx-retro-victorian"><b>VICTORIA</b></div>','fx-retro-midcentury':'<div class="demo d-fx-retro-midcentury"><i></i><b>MID<br>CENTURY</b></div>','fx-retro-atomic':'<div class="demo d-fx-retro-atomic"><i></i><b>ATOMIC</b></div>','fx-retro-space':'<div class="demo d-fx-retro-space"><i></i><b>SPACE AGE</b></div>','fx-retro-70s':'<div class="demo d-fx-retro-70s"><b>1974</b></div>','fx-retro-80s':'<div class="demo d-fx-retro-80s"><b>NEW<br>WAVE</b></div>','fx-retro-rave':'<div class="demo d-fx-retro-rave"><b>RAVE</b><i></i></div>','fx-retro-future':'<div class="demo d-fx-retro-future"><b>FUTURE<br>PAST</b></div>'
  ,'fx-print-screen':'<div class="demo d-fx-print-screen"><b>SCREEN</b><i></i></div>','fx-print-letterpress':'<div class="demo d-fx-print-letterpress"><b>PRESS</b></div>','fx-print-woodcut':'<div class="demo d-fx-print-woodcut"><b>WOOD</b></div>','fx-print-linocut':'<div class="demo d-fx-print-linocut"><b>LINO</b></div>','fx-print-etching':'<div class="demo d-fx-print-etching"><b>ETCH</b></div>','fx-print-litho':'<div class="demo d-fx-print-litho"><b>LITHO</b></div>','fx-print-cyanotype':'<div class="demo d-fx-print-cyanotype"><b>CYAN</b></div>','fx-print-monotype':'<div class="demo d-fx-print-monotype"><b>MONO</b></div>','fx-print-thermal':'<div class="demo d-fx-print-thermal"><b>THERMAL</b></div>','fx-print-dotmatrix':'<div class="demo d-fx-print-dotmatrix"><b>DOT MATRIX</b></div>'
  ,'fx-photo-solar':'<div class="demo d-fx-photo-solar"><b>SOLAR</b></div>','fx-photo-cross':'<div class="demo d-fx-photo-cross"><b>CROSS</b></div>','fx-photo-leak':'<div class="demo d-fx-photo-leak"><b>LEAK</b></div>','fx-photo-burn':'<div class="demo d-fx-photo-burn"><b>BURN</b></div>','fx-photo-infrared':'<div class="demo d-fx-photo-infrared"><b>INFRA</b></div>','fx-photo-contrast':'<div class="demo d-fx-photo-contrast"><b>MONO</b></div>','fx-photo-separation':'<div class="demo d-fx-photo-separation"><b>RGB</b></div>','fx-photo-multiple':'<div class="demo d-fx-photo-multiple"><b>DOUBLE</b></div>','fx-photo-motion':'<div class="demo d-fx-photo-motion"><b>MOTION</b></div>','fx-photo-scan':'<div class="demo d-fx-photo-scan"><b>SCAN</b></div>'
  ,'fx-glitch-data':'<div class="demo d-fx-glitch-data"><b>DATA</b><i></i></div>','fx-glitch-sort':'<div class="demo d-fx-glitch-sort"><b>SORT</b></div>','fx-glitch-slice':'<div class="demo d-fx-glitch-slice"><b>SLICE</b></div>','fx-glitch-channel':'<div class="demo d-fx-glitch-channel"><b>RGB</b></div>','fx-glitch-dither':'<div class="demo d-fx-glitch-dither"><b>DITHER</b></div>','fx-glitch-threshold':'<div class="demo d-fx-glitch-threshold"><b>THRESHOLD</b></div>','fx-glitch-ascii':'<div class="demo d-fx-glitch-ascii"><b>@#$%<br>ASCII</b></div>','fx-glitch-typehalf':'<div class="demo d-fx-glitch-typehalf"><b>TYPE</b></div>','fx-glitch-liquify':'<div class="demo d-fx-glitch-liquify"><b>LIQUIFY</b></div>','fx-glitch-wave':'<div class="demo d-fx-glitch-wave"><b>WAVE</b></div>'
  ,'fx-collage-scrap':'<div class="demo d-fx-collage-scrap"><b>SCRAP</b><i>✦</i></div>','fx-collage-torn':'<div class="demo d-fx-collage-torn"><b>TORN</b></div>','fx-collage-geo':'<div class="demo d-fx-collage-geo"><i></i><b>GEO</b></div>','fx-collage-archive':'<div class="demo d-fx-collage-archive"><b>ARCHIVE 04</b></div>','fx-collage-botanical':'<div class="demo d-fx-collage-botanical"><i>❧</i><b>HERBARIUM</b></div>','fx-collage-textile':'<div class="demo d-fx-collage-textile"><b>TEXTILE</b></div>','fx-collage-food':'<div class="demo d-fx-collage-food"><i></i><b>FOOD</b></div>','fx-collage-surreal':'<div class="demo d-fx-collage-surreal"><b>UNREAL</b></div>','fx-collage-copy':'<div class="demo d-fx-collage-copy"><b>COPY</b></div>','fx-collage-object':'<div class="demo d-fx-collage-object"><i></i><b>ASSEMBLE</b></div>'
  ,'fx-pattern-checker':'<div class="demo d-fx-pattern-checker"><b>CHECK</b></div>','fx-pattern-polka':'<div class="demo d-fx-pattern-polka"><b>DOTS</b></div>','fx-pattern-stripe':'<div class="demo d-fx-pattern-stripe"><b>STRIPE</b></div>','fx-pattern-herring':'<div class="demo d-fx-pattern-herring"><b>HERRING</b></div>','fx-pattern-kaleido':'<div class="demo d-fx-pattern-kaleido"><b>KALEIDO</b></div>','fx-pattern-moire':'<div class="demo d-fx-pattern-moire"><b>MOIRE</b></div>','fx-pattern-maze':'<div class="demo d-fx-pattern-maze"><b>MAZE</b></div>','fx-pattern-contour':'<div class="demo d-fx-pattern-contour"><b>CONTOUR</b></div>','fx-pattern-topo':'<div class="demo d-fx-pattern-topo"><b>TOPO</b></div>','fx-pattern-tess':'<div class="demo d-fx-pattern-tess"><b>TESS</b></div>'
  ,'fx-illus-flat':'<div class="demo d-fx-illus-flat"><i></i><b>FLAT</b></div>','fx-illus-monoline':'<div class="demo d-fx-illus-monoline"><b>MONO</b></div>','fx-illus-isometric':'<div class="demo d-fx-illus-isometric"><i></i><b>ISO</b></div>','fx-illus-silhouette':'<div class="demo d-fx-illus-silhouette"><i></i><b>SILHOUETTE</b></div>','fx-illus-engraving':'<div class="demo d-fx-illus-engraving"><b>ENGRAVE</b></div>','fx-illus-technical':'<div class="demo d-fx-illus-technical"><b>TECH / 01</b></div>','fx-illus-doodle':'<div class="demo d-fx-illus-doodle"><b>~ DOODLE ~</b></div>','fx-illus-crayon':'<div class="demo d-fx-illus-crayon"><b>CRAYON</b></div>','fx-illus-airbrush':'<div class="demo d-fx-illus-airbrush"><b>AIR</b></div>','fx-illus-gradient':'<div class="demo d-fx-illus-gradient"><b>VECTOR</b></div>'
  ,'fx-info-infographic':'<div class="demo d-fx-info-infographic"><b>72%</b><i></i></div>','fx-info-dataart':'<div class="demo d-fx-info-dataart"><i></i><i></i><i></i></div>','fx-info-map':'<div class="demo d-fx-info-map"><svg><path d="M10 90 L80 20 L180 70"/></svg></div>','fx-info-pictogram':'<div class="demo d-fx-info-pictogram"><b>● → ▲ → ■</b></div>','fx-info-timeline':'<div class="demo d-fx-info-timeline"><i></i><i></i><i></i><b>2000—2026</b></div>','fx-info-taxonomy':'<div class="demo d-fx-info-taxonomy"><b>ROOT</b><i>└ BRANCH</i></div>','fx-info-flow':'<div class="demo d-fx-info-flow"><i>START</i><b>→</b><i>END</i></div>','fx-info-index':'<div class="demo d-fx-info-index"><b>01</b><span>INDEX / 02 / 03</span></div>','fx-info-modular':'<div class="demo d-fx-info-modular"><i></i><i></i><i></i><i></i></div>','fx-info-parametric':'<div class="demo d-fx-info-parametric"><b>PARAM</b><i></i></div>'
  ,'fx-web-brutal':'<div class="demo d-fx-web-brutal"><b>WEB / RAW</b></div>','fx-web-corecore':'<div class="demo d-fx-web-corecore"><b>CORECORE</b><i></i></div>','fx-web-nostalgia':'<div class="demo d-fx-web-nostalgia"><button>ENTER_1999</button></div>','fx-web-memphis':'<div class="demo d-fx-web-memphis"><i></i><b>HELLO!</b></div>','fx-web-quiet':'<div class="demo d-fx-web-quiet"><b>ATELIER</b></div>','fx-web-grotesque':'<div class="demo d-fx-web-grotesque"><b>NEO</b></div>','fx-web-anti':'<div class="demo d-fx-web-anti"><b>ANTI</b><i>!</i></div>','fx-web-postinternet':'<div class="demo d-fx-web-postinternet"><b>UPLOAD / IRL</b></div>','fx-web-generative':'<div class="demo d-fx-web-generative"><i></i><b>GENERATE</b></div>','fx-web-ai':'<div class="demo d-fx-web-ai"><b>UNREAL</b></div>'
  ,'fx-cover-word':'<div class="demo d-fx-cover-word"><b>WORD</b></div>','fx-cover-crop':'<div class="demo d-fx-cover-crop"><b>LETTER</b></div>','fx-cover-repeat':'<div class="demo d-fx-cover-repeat"><b>REPEAT<br>REPEAT</b></div>','fx-cover-circle':'<div class="demo d-fx-cover-circle"><b>TYPE</b></div>','fx-cover-path':'<div class="demo d-fx-cover-path"><b>FOLLOW THE LINE</b></div>','fx-cover-hand':'<div class="demo d-fx-cover-hand"><b>dear.</b></div>','fx-cover-typewriter':'<div class="demo d-fx-cover-typewriter"><b>CHAPTER 01</b></div>','fx-cover-calligraphy':'<div class="demo d-fx-cover-calligraphy"><b>風</b></div>','fx-cover-monogram':'<div class="demo d-fx-cover-monogram"><b>UW</b></div>','fx-cover-dictionary':'<div class="demo d-fx-cover-dictionary"><b>word</b><span>/wɜːrd/ noun</span></div>'
  ,'fx-cover-photo-portrait':'<div class="demo d-fx-cover-photo-portrait"><i></i><b>PORTRAIT</b></div>','fx-cover-photo-back':'<div class="demo d-fx-cover-photo-back"><i></i><b>AWAY</b></div>','fx-cover-photo-group':'<div class="demo d-fx-cover-photo-group"><i></i><i></i><i></i><b>TOGETHER</b></div>','fx-cover-photo-still':'<div class="demo d-fx-cover-photo-still"><i></i><b>STILL LIFE</b></div>','fx-cover-photo-arch':'<div class="demo d-fx-cover-photo-arch"><i></i><b>STRUCTURE</b></div>','fx-cover-photo-aerial':'<div class="demo d-fx-cover-photo-aerial"><i></i><b>ABOVE</b></div>','fx-cover-photo-night':'<div class="demo d-fx-cover-photo-night"><i></i><b>NIGHT</b></div>','fx-cover-photo-doc':'<div class="demo d-fx-cover-photo-doc"><i></i><b>DOCUMENT</b></div>','fx-cover-photo-motion':'<div class="demo d-fx-cover-photo-motion"><i></i><b>MOVE</b></div>','fx-cover-photo-double':'<div class="demo d-fx-cover-photo-double"><i></i><b>DOUBLE</b></div>'
  ,'fx-cover-process-dither':'<div class="demo d-fx-cover-process-dither"><b>DITHER</b></div>','fx-cover-process-halftone':'<div class="demo d-fx-cover-process-halftone"><b>HALFTONE</b></div>','fx-cover-process-duo':'<div class="demo d-fx-cover-process-duo"><b>DUO</b></div>','fx-cover-process-threshold':'<div class="demo d-fx-cover-process-threshold"><b>THRESHOLD</b></div>','fx-cover-process-pixel':'<div class="demo d-fx-cover-process-pixel"><b>PIXEL</b></div>','fx-cover-process-scanline':'<div class="demo d-fx-cover-process-scanline"><b>SCANLINE</b></div>','fx-cover-process-channel':'<div class="demo d-fx-cover-process-channel"><b>SHIFT</b></div>','fx-cover-process-thermal':'<div class="demo d-fx-cover-process-thermal"><b>THERMAL</b></div>','fx-cover-process-negative':'<div class="demo d-fx-cover-process-negative"><b>NEGATIVE</b></div>','fx-cover-process-xray':'<div class="demo d-fx-cover-process-xray"><b>X-RAY</b></div>'
  ,'fx-cover-illus-flat':'<div class="demo d-fx-cover-illus-flat"><i></i><b>FLAT</b></div>','fx-cover-illus-line':'<div class="demo d-fx-cover-illus-line"><b>LINE</b></div>','fx-cover-illus-wood':'<div class="demo d-fx-cover-illus-wood"><b>WOODCUT</b></div>','fx-cover-illus-water':'<div class="demo d-fx-cover-illus-water"><b>WATER</b></div>','fx-cover-illus-oil':'<div class="demo d-fx-cover-illus-oil"><b>OIL</b></div>','fx-cover-illus-comic':'<div class="demo d-fx-cover-illus-comic"><i>01</i><i>02</i><b>COMIC</b></div>','fx-cover-illus-tech':'<div class="demo d-fx-cover-illus-tech"><b>TECH</b></div>','fx-cover-illus-botanical':'<div class="demo d-fx-cover-illus-botanical"><b>BOTANY</b></div>','fx-cover-illus-map':'<div class="demo d-fx-cover-illus-map"><b>MAP</b></div>','fx-cover-illus-surreal':'<div class="demo d-fx-cover-illus-surreal"><b>DREAM</b></div>'
  ,'fx-cover-geo-concentric':'<div class="demo d-fx-cover-geo-concentric"><b>FOCUS</b></div>','fx-cover-geo-stripes':'<div class="demo d-fx-cover-geo-stripes"><b>STRIPES</b></div>','fx-cover-geo-checker':'<div class="demo d-fx-cover-geo-checker"><b>CHECK</b></div>','fx-cover-geo-modular':'<div class="demo d-fx-cover-geo-modular"><i></i><i></i><i></i><i></i></div>','fx-cover-geo-coordinate':'<div class="demo d-fx-cover-geo-coordinate"><b>GRID 04</b></div>','fx-cover-geo-chart':'<div class="demo d-fx-cover-geo-chart"><i></i><i></i><i></i></div>','fx-cover-geo-param':'<div class="demo d-fx-cover-geo-param"><b>PARAM</b></div>','fx-cover-geo-random':'<div class="demo d-fx-cover-geo-random"><i></i><i></i><b>RANDOM</b></div>','fx-cover-geo-sym':'<div class="demo d-fx-cover-geo-sym"><b>SYMMETRY</b></div>','fx-cover-geo-asym':'<div class="demo d-fx-cover-geo-asym"><b>ASYM</b></div>'
  ,'fx-cover-material-foil':'<div class="demo d-fx-cover-material-foil"><b>FOIL</b></div>','fx-cover-material-deboss':'<div class="demo d-fx-cover-material-deboss"><b>DEBOSS</b></div>','fx-cover-material-emboss':'<div class="demo d-fx-cover-material-emboss"><b>EMBOSS</b></div>','fx-cover-material-cloth':'<div class="demo d-fx-cover-material-cloth"><b>CLOTH</b></div>','fx-cover-material-leather':'<div class="demo d-fx-cover-material-leather"><b>LEATHER</b></div>','fx-cover-material-clear':'<div class="demo d-fx-cover-material-clear"><b>CLEAR</b></div>','fx-cover-material-trace':'<div class="demo d-fx-cover-material-trace"><b>TRACE</b></div>','fx-cover-material-holo':'<div class="demo d-fx-cover-material-holo"><b>HOLO</b></div>','fx-cover-material-fluo':'<div class="demo d-fx-cover-material-fluo"><b>FLUO</b></div>','fx-cover-material-deckle':'<div class="demo d-fx-cover-material-deckle"><b>DECKLE</b></div>'
  ,'fx-cover-archive-library':'<div class="demo d-fx-cover-archive-library"><b>LIBRARY CARD</b><span>DATE / 2026</span></div>','fx-cover-archive-folder':'<div class="demo d-fx-cover-archive-folder"><b>PROJECT FILE</b></div>','fx-cover-archive-lab':'<div class="demo d-fx-cover-archive-lab"><b>LAB / SAMPLE 04</b></div>','fx-cover-archive-passport':'<div class="demo d-fx-cover-archive-passport"><b>◉ PASSPORT</b></div>','fx-cover-archive-ticket':'<div class="demo d-fx-cover-archive-ticket"><b>ADMIT ONE</b></div>','fx-cover-archive-news':'<div class="demo d-fx-cover-archive-news"><b>THE DAILY</b></div>','fx-cover-archive-manual':'<div class="demo d-fx-cover-archive-manual"><b>STEP 01</b></div>','fx-cover-archive-meta':'<div class="demo d-fx-cover-archive-meta"><b>METADATA</b></div>','fx-cover-archive-barcode':'<div class="demo d-fx-cover-archive-barcode"><b>||| || |||</b></div>','fx-cover-archive-qr':'<div class="demo d-fx-cover-archive-qr"><b>▦ QR</b></div>'
  ,'fx-cover-space-tunnel':'<div class="demo d-fx-cover-space-tunnel"><b>TUNNEL</b></div>','fx-cover-space-iso':'<div class="demo d-fx-cover-space-iso"><b>ISO SPACE</b></div>','fx-cover-space-section':'<div class="demo d-fx-cover-space-section"><b>SECTION A—A</b></div>','fx-cover-space-horizon':'<div class="demo d-fx-cover-space-horizon"><b>HORIZON</b></div>','fx-cover-space-bird':'<div class="demo d-fx-cover-space-bird"><b>BIRD VIEW</b></div>','fx-cover-space-mirror':'<div class="demo d-fx-cover-space-mirror"><b>MIRROR</b></div>','fx-cover-space-portal':'<div class="demo d-fx-cover-space-portal"><b>PORTAL</b></div>','fx-cover-space-droste':'<div class="demo d-fx-cover-space-droste"><b>IN / IN</b></div>','fx-cover-space-fold':'<div class="demo d-fx-cover-space-fold"><b>FOLD</b></div>','fx-cover-space-stage':'<div class="demo d-fx-cover-space-stage"><b>STAGE</b></div>'
  ,'fx-cover-mood-mystery':'<div class="demo d-fx-cover-mood-mystery"><b>MYSTERY</b></div>','fx-cover-mood-solitude':'<div class="demo d-fx-cover-mood-solitude"><b>ALONE</b></div>','fx-cover-mood-speed':'<div class="demo d-fx-cover-mood-speed"><b>FAST</b></div>','fx-cover-mood-warm':'<div class="demo d-fx-cover-mood-warm"><b>HOME</b></div>','fx-cover-mood-cold':'<div class="demo d-fx-cover-mood-cold"><b>TECH</b></div>','fx-cover-mood-dream':'<div class="demo d-fx-cover-mood-dream"><b>DREAM</b></div>','fx-cover-mood-horror':'<div class="demo d-fx-cover-mood-horror"><b>FEAR</b></div>','fx-cover-mood-romantic':'<div class="demo d-fx-cover-mood-romantic"><b>LOVE</b></div>','fx-cover-mood-epic':'<div class="demo d-fx-cover-mood-epic"><b>EPIC</b></div>','fx-cover-mood-humor':'<div class="demo d-fx-cover-mood-humor"><b>FUNNY</b></div>'
  ,'fx-cover-series-color':'<div class="demo d-fx-cover-series-color"><b>VOL. 03</b></div>','fx-cover-series-number':'<div class="demo d-fx-cover-series-number"><b>07</b></div>','fx-cover-series-puzzle':'<div class="demo d-fx-cover-series-puzzle"><i></i><i></i><i></i><i></i></div>','fx-cover-series-panorama':'<div class="demo d-fx-cover-series-panorama"><b>PANORAMA</b></div>','fx-cover-series-variable':'<div class="demo d-fx-cover-series-variable"><b>NAME / 2048</b></div>','fx-cover-series-gradient':'<div class="demo d-fx-cover-series-gradient"><b>FLOW</b></div>','fx-cover-series-video':'<div class="demo d-fx-cover-series-video"><b>LOOP ▶</b></div>','fx-cover-series-audio':'<div class="demo d-fx-cover-series-audio"><i></i><i></i><i></i><b>AUDIO</b></div>','fx-cover-series-reveal':'<div class="demo d-fx-cover-series-reveal"><b>CLICK TO REVEAL</b></div>','fx-cover-series-ar':'<div class="demo d-fx-cover-series-ar"><b>▣ AR READY</b></div>'
  ,'fx-color-tetradic':'<div class="demo d-fx-color-tetradic"><i></i><i></i><i></i><i></i></div>','fx-color-rectangle':'<div class="demo d-fx-color-rectangle"><i></i><i></i><i></i><i></i></div>','fx-color-square':'<div class="demo d-fx-color-square"><i></i><i></i><i></i><i></i></div>','fx-color-double':'<div class="demo d-fx-color-double"><i></i><i></i><i></i><i></i></div>','fx-color-warm':'<div class="demo d-fx-color-warm"><b>WARM</b></div>','fx-color-cool':'<div class="demo d-fx-color-cool"><b>COOL</b></div>','fx-color-neutral':'<div class="demo d-fx-color-neutral"><b>NEUTRAL</b></div>','fx-color-earth':'<div class="demo d-fx-color-earth"><b>EARTH</b></div>','fx-color-jewel':'<div class="demo d-fx-color-jewel"><b>JEWEL</b></div>','fx-color-candy':'<div class="demo d-fx-color-candy"><b>CANDY</b></div>','fx-color-highvalue':'<div class="demo d-fx-color-highvalue"><i></i><i></i><i></i><i></i></div>','fx-color-lowvalue':'<div class="demo d-fx-color-lowvalue"><i></i><i></i><i></i><i></i></div>','fx-color-highchroma':'<div class="demo d-fx-color-highchroma"><i></i><i></i><i></i></div>','fx-color-lowchroma':'<div class="demo d-fx-color-lowchroma"><i></i><i></i><i></i></div>','fx-color-pastel':'<div class="demo d-fx-color-pastel"><i></i><i></i><i></i></div>','fx-color-fluorescent':'<div class="demo d-fx-color-fluorescent"><i></i><i></i><i></i></div>','fx-color-grayscale':'<div class="demo d-fx-color-grayscale"><i></i><i></i><i></i><i></i><i></i></div>','fx-color-valuegradient':'<div class="demo d-fx-color-valuegradient"></div>','fx-color-valuecontrast':'<div class="demo d-fx-color-valuecontrast"><b>CONTRAST</b></div>','fx-color-localhighlight':'<div class="demo d-fx-color-localhighlight"><i></i><b>FOCUS</b></div>'
  ,'fx-gradient-linear':'<div class="demo d-fx-gradient-linear"></div>','fx-gradient-radial':'<div class="demo d-fx-gradient-radial"></div>','fx-gradient-conic':'<div class="demo d-fx-gradient-conic"></div>','fx-gradient-multistop':'<div class="demo d-fx-gradient-multistop"></div>','fx-gradient-spectrum':'<div class="demo d-fx-gradient-spectrum"></div>','fx-gradient-metallic':'<div class="demo d-fx-gradient-metallic"></div>','fx-gradient-pearlescent':'<div class="demo d-fx-gradient-pearlescent"></div>','fx-gradient-dither':'<div class="demo d-fx-gradient-dither"></div>','fx-gradient-contour':'<div class="demo d-fx-gradient-contour"></div>','fx-gradient-hue':'<div class="demo d-fx-gradient-hue"></div>'
  ,'fx-access-colorblind':'<div class="demo d-fx-access-colorblind"><i></i><i></i><i></i><i></i></div>','fx-access-highcontrast':'<div class="demo d-fx-access-highcontrast"><b>Aa</b><span>HIGH CONTRAST</span></div>','fx-access-darkscale':'<div class="demo d-fx-access-darkscale"><i></i><i></i><i></i><i></i></div>','fx-access-lightscale':'<div class="demo d-fx-access-lightscale"><i></i><i></i><i></i><i></i></div>','fx-access-adaptive':'<div class="demo d-fx-access-adaptive"><b>Adaptive text</b></div>','fx-access-semantic':'<div class="demo d-fx-access-semantic"><i>✓</i><i>!</i><i>×</i><i>i</i></div>','fx-access-categorical':'<div class="demo d-fx-access-categorical"><i></i><i></i><i></i><i></i><i></i></div>','fx-access-sequential':'<div class="demo d-fx-access-sequential"></div>','fx-access-diverging':'<div class="demo d-fx-access-diverging"></div>','fx-access-ambient':'<div class="demo d-fx-access-ambient"><b>AMBIENT</b></div>'
  ,'fx-type-geometric':'<div class="demo d-fx-type-geometric"><b>O0 GQ</b><span>GEOMETRIC</span></div>','fx-type-humanist':'<div class="demo d-fx-type-humanist"><b>Humanist</b><span>open &amp; warm</span></div>','fx-type-neogrotesk':'<div class="demo d-fx-type-neogrotesk"><b>NEUTRAL</b><span>neo grotesque</span></div>','fx-type-transitional':'<div class="demo d-fx-type-transitional"><b>Editorial</b><span>TRANSITIONAL SERIF</span></div>','fx-type-didone':'<div class="demo d-fx-type-didone"><b>Mode</b><span>DIDONE</span></div>','fx-type-oldstyle':'<div class="demo d-fx-type-oldstyle"><b>Chapter</b><span>old style reading</span></div>','fx-type-slab':'<div class="demo d-fx-type-slab"><b>FIELD NOTES</b></div>','fx-type-mono':'<div class="demo d-fx-type-mono"><b>&gt; npm run build</b><span>MONOSPACE SYSTEM</span></div>','fx-type-rounded':'<div class="demo d-fx-type-rounded"><b>Hello!</b><span>rounded type</span></div>','fx-type-contrastpair':'<div class="demo d-fx-type-contrastpair"><b>Contrast</b><span>sans + serif pairing</span></div>'
  ,'fx-type-chamfer':'<div class="demo d-fx-type-chamfer"><b>CHAMFER</b></div>','fx-type-modular':'<div class="demo d-fx-type-modular"><b>MODULAR</b></div>','fx-type-constructed':'<div class="demo d-fx-type-constructed"><b>GEO</b><i></i></div>','fx-type-dotmatrix':'<div class="demo d-fx-type-dotmatrix"><b>DOT MATRIX</b></div>','fx-type-pixel':'<div class="demo d-fx-type-pixel"><b>PIXEL</b></div>','fx-type-segment':'<div class="demo d-fx-type-segment"><b>12:48</b></div>','fx-type-inktrap':'<div class="demo d-fx-type-inktrap"><b>ink trap</b></div>','fx-type-ligature':'<div class="demo d-fx-type-ligature"><b>fi fl ffi</b></div>','fx-type-monoline':'<div class="demo d-fx-type-monoline"><b>MONOLINE</b></div>','fx-type-reverse':'<div class="demo d-fx-type-reverse"><b>REVERSE</b></div>'
  ,'fx-type-scale':'<div class="demo d-fx-type-scale"><b>Type scale</b><span>12 · 16 · 24 · 36</span></div>','fx-type-fluid':'<div class="demo d-fx-type-fluid"><b>Fluid heading</b><span>scales with viewport</span></div>','fx-type-responsive':'<div class="demo d-fx-type-responsive"><b>Responsive</b><span>desktop / mobile</span></div>','fx-type-rhythm':'<div class="demo d-fx-type-rhythm"><b>Vertical rhythm</b><i></i><i></i><i></i></div>','fx-type-baselinegrid':'<div class="demo d-fx-type-baselinegrid"><b>Baseline grid</b><i></i><i></i><i></i></div>','fx-type-hanging':'<div class="demo d-fx-type-hanging"><b>“Quote”</b><span>hanging punctuation</span></div>','fx-type-optical':'<div class="demo d-fx-type-optical"><b>Optical</b><span>margin alignment</span></div>','fx-type-dropcap':'<div class="demo d-fx-type-dropcap"><b>D</b><span>rop cap opens the paragraph with a strong editorial gesture.</span></div>','fx-type-smallcaps':'<div class="demo d-fx-type-smallcaps"><b>SECTION LABEL</b><span>Small caps preserve rhythm</span></div>','fx-type-measure':'<div class="demo d-fx-type-measure"><span>Readable measure keeps a paragraph calm and easy to scan across the page.</span></div>'
  ,'fx-display-wavy':'<div class="demo d-fx-display-wavy"><b>WAVE TYPE</b></div>','fx-display-arched':'<div class="demo d-fx-display-arched"><b>ARCHED</b></div>','fx-display-circular':'<div class="demo d-fx-display-circular"><b>◌ TYPE ◌</b></div>','fx-display-perspective':'<div class="demo d-fx-display-perspective"><b>DEPTH</b></div>','fx-display-isometric':'<div class="demo d-fx-display-isometric"><b>ISO</b></div>','fx-display-extruded':'<div class="demo d-fx-display-extruded"><b>EXTRUDE</b></div>','fx-display-inflated':'<div class="demo d-fx-display-inflated"><b>PUFF</b></div>','fx-display-liquid':'<div class="demo d-fx-display-liquid"><b>LIQUID</b></div>','fx-display-mirrored':'<div class="demo d-fx-display-mirrored"><b>MIRROR</b></div>','fx-display-kaleido':'<div class="demo d-fx-display-kaleido"><b>✦ TYPE ✦</b></div>'
  ,'fx-material-metaltype':'<div class="demo d-fx-material-metaltype"><b>METAL</b></div>','fx-material-glasstype':'<div class="demo d-fx-material-glasstype"><b>GLASS</b></div>','fx-material-furrytype':'<div class="demo d-fx-material-furrytype"><b>FURRY</b></div>','fx-material-claytype':'<div class="demo d-fx-material-claytype"><b>CLAY</b></div>','fx-material-papertype':'<div class="demo d-fx-material-papertype"><b>PAPER</b></div>','fx-material-woodtype':'<div class="demo d-fx-material-woodtype"><b>WOOD</b></div>','fx-material-halftype':'<div class="demo d-fx-material-halftype"><b>HALFTONE</b></div>','fx-material-graintype':'<div class="demo d-fx-material-graintype"><b>GRAIN</b></div>','fx-material-neontype':'<div class="demo d-fx-material-neontype"><b>NEON</b></div>','fx-material-embrotype':'<div class="demo d-fx-material-embrotype"><b>THREAD</b></div>'
  ,'fx-motion-weighttype':'<div class="demo d-fx-motion-weighttype"><b>BREATHE</b></div>','fx-motion-widthtype':'<div class="demo d-fx-motion-widthtype"><b>WIDTH</b></div>','fx-motion-randomglyph':'<div class="demo d-fx-motion-randomglyph"><b>R4ND0M</b></div>','fx-motion-scramble':'<div class="demo d-fx-motion-scramble"><b>SCRAMBLE</b></div>','fx-motion-typewriter':'<div class="demo d-fx-motion-typewriter"><b>TYPE_</b></div>','fx-motion-cascadeglyph':'<div class="demo d-fx-motion-cascadeglyph"><b>CASCADE</b></div>','fx-motion-audiotype':'<div class="demo d-fx-motion-audiotype"><b>AUDIO</b><i></i><i></i><i></i></div>','fx-motion-cursortype':'<div class="demo d-fx-motion-cursortype"><b>CURSOR</b></div>','fx-motion-generative':'<div class="demo d-fx-motion-generative"><b>GEN/TYPE</b></div>','fx-motion-variabletype':'<div class="demo d-fx-motion-variabletype"><b>VARIABLE</b></div>'
  ,'fx-layout-topbar':'<div class="demo d-fx-layout-topbar"><b>UI WIKI</b><span>Library</span><i>＋</i></div>','fx-layout-dualnav':'<div class="demo d-fx-layout-dualnav"><b>Projects</b><span>Overview</span><span>Activity</span></div>','fx-layout-mega':'<div class="demo d-fx-layout-mega"><b>Products</b><div><span>Design</span><span>Develop</span><span>Resources</span></div></div>','fx-layout-bottomnav':'<div class="demo d-fx-layout-bottomnav"><i>⌂</i><i>◉</i><i>＋</i><i>☆</i></div>','fx-layout-navisland':'<div class="demo d-fx-layout-navisland"><b>Menu</b><span>Work</span><span>About</span><i>+</i></div>','fx-layout-drawer':'<div class="demo d-fx-layout-drawer"><b>☰</b><div><span>Dashboard</span><span>Settings</span></div></div>','fx-layout-collapsibleside':'<div class="demo d-fx-layout-collapsibleside"><b>◀</b><span>Workspace</span><span>Files</span></div>','fx-layout-iconrail':'<div class="demo d-fx-layout-iconrail"><i>⌂</i><i>□</i><i>⚙</i></div>','fx-layout-palette':'<div class="demo d-fx-layout-palette"><b>⌘  Search commands</b><span>Recent actions</span></div>','fx-layout-breadcrumb':'<div class="demo d-fx-layout-breadcrumb"><span>Home</span><b>/</b><span>Projects</span><b>/</b><strong>UI Wiki</strong></div>'
  ,'fx-layout-singlecolumn':'<div class="demo d-fx-layout-singlecolumn"><b>Single column</b><span>Readable width keeps focus.</span></div>','fx-layout-twocolumn':'<div class="demo d-fx-layout-twocolumn"><b>Article</b><span>Aside</span></div>','fx-layout-newspaper':'<div class="demo d-fx-layout-newspaper"><i></i><i></i><i></i><i></i></div>','fx-layout-toc':'<div class="demo d-fx-layout-toc"><nav>01 Intro<br><b>02 Method</b><br>03 Notes</nav><span>Method content</span></div>','fx-layout-sidenote':'<div class="demo d-fx-layout-sidenote"><b>Body text</b><i>note 01</i></div>','fx-layout-pullquote':'<div class="demo d-fx-layout-pullquote"><span>Body copy</span><b>“Make space”</b></div>','fx-layout-chapter':'<div class="demo d-fx-layout-chapter"><i>01</i><i>02</i><i>03</i></div>','fx-layout-immersive':'<div class="demo d-fx-layout-immersive"><b>Read without noise</b></div>','fx-layout-annotated':'<div class="demo d-fx-layout-annotated"><b>Canvas</b><i>↗ note</i></div>','fx-layout-compare':'<div class="demo d-fx-layout-compare"><span>Version A</span><b>⇄</b><span>Version B</span></div>'
  ,'fx-layout-compactlist':'<div class="demo d-fx-layout-compactlist"><span>Deploy</span><b>success</b><i>2m</i></div>','fx-layout-mediaobject':'<div class="demo d-fx-layout-mediaobject"><i>IMG</i><span><b>Media title</b><small>metadata · 2 min</small></span></div>','fx-layout-groupedlist':'<div class="demo d-fx-layout-groupedlist"><b>Today</b><span>Design review</span><b>Yesterday</b><span>Research notes</span></div>','fx-layout-alphaindex':'<div class="demo d-fx-layout-alphaindex"><nav>A&nbsp; B&nbsp; C&nbsp; D&nbsp; E</nav><span>A — Alpha<br>A — Atlas</span></div>','fx-layout-cardrail':'<div class="demo d-fx-layout-cardrail"><i>01</i><i>02</i><i>03</i></div>','fx-layout-gallery':'<div class="demo d-fx-layout-gallery"><i></i><i></i><i></i><i></i></div>','fx-layout-cluster':'<div class="demo d-fx-layout-cluster"><i>A</i><i>B</i><i>C</i><i>D</i></div>','fx-layout-honeycomb':'<div class="demo d-fx-layout-honeycomb"><i>1</i><i>2</i><i>3</i><i>4</i><i>5</i></div>','fx-layout-pilltiles':'<div class="demo d-fx-layout-pilltiles"><span>Design</span><span>Motion</span><span>Color</span></div>','fx-layout-tagcloud':'<div class="demo d-fx-layout-tagcloud"><b>design</b><span>motion</span><i>type</i><em>grid</em></div>'
  ,'fx-layout-kpi':'<div class="demo d-fx-layout-kpi"><div><b>84.2K</b><small>Revenue</small></div><div><b>+18%</b><small>Growth</small></div></div>','fx-layout-trading':'<div class="demo d-fx-layout-trading"><b>BTC&nbsp; 68,240</b><span>+2.4%</span><i>BUY</i></div>','fx-layout-multipane':'<div class="demo d-fx-layout-multipane"><i></i><i></i><i></i></div>','fx-layout-masterdetail':'<div class="demo d-fx-layout-masterdetail"><nav>Inbox<br><b>Project</b><br>Archive</nav><span>Project details</span></div>','fx-layout-inspector':'<div class="demo d-fx-layout-inspector"><b>Canvas</b><aside>Inspector<br><small>Fill · Type · Size</small></aside></div>','fx-layout-dockable':'<div class="demo d-fx-layout-dockable"><i>Layers</i><i>Assets</i><b>＋</b></div>','fx-layout-pivot':'<div class="demo d-fx-layout-pivot"><span>Region</span><span>Q1</span><span>Q2</span><b>APAC&nbsp; 42&nbsp; 58</b></div>','fx-layout-filterresults':'<div class="demo d-fx-layout-filterresults"><nav>Filter × &nbsp; 3 results</nav><span>Result A</span><span>Result B</span></div>','fx-layout-alertcenter':'<div class="demo d-fx-layout-alertcenter"><b>ALERTS <em>3</em></b><span>● API latency</span><span>● Disk space</span></div>','fx-layout-controlwall':'<div class="demo d-fx-layout-controlwall"><i>98%</i><i>42ms</i><i>ONLINE</i></div>'
  ,'fx-layout-longform':'<div class="demo d-fx-layout-longform"><b>Profile details</b><i></i><i></i><i></i></div>','fx-layout-stepper':'<div class="demo d-fx-layout-stepper"><i>1</i><b>2</b><i>3</i><i>4</i></div>','fx-layout-splitform':'<div class="demo d-fx-layout-splitform"><span>First name</span><span>Last name</span></div>','fx-layout-conversation':'<div class="demo d-fx-layout-conversation"><b>What is your goal?</b><span>Type an answer…</span></div>','fx-layout-inlineedit':'<div class="demo d-fx-layout-inlineedit"><span>Project title</span><b>✎</b></div>','fx-layout-review':'<div class="demo d-fx-layout-review"><b>Review submission</b><span>3 fields · Edit</span></div>','fx-layout-conditional':'<div class="demo d-fx-layout-conditional"><span>Account type</span><b>Business⌄</b><i>Tax ID</i></div>','fx-layout-bulkedit':'<div class="demo d-fx-layout-bulkedit"><b>3 selected</b><span>Move</span><span>Archive</span></div>','fx-layout-checkout':'<div class="demo d-fx-layout-checkout"><i>Cart</i><i>Address</i><b>Pay</b><i>Done</i></div>','fx-layout-application':'<div class="demo d-fx-layout-application"><b>Application</b><span>● Review → ○ Decision</span></div>'
  ,'fx-layout-saashero':'<div class="demo d-fx-layout-saashero"><b>Build better, faster.</b><span>Start free →</span></div>','fx-layout-featurematrix':'<div class="demo d-fx-layout-featurematrix"><b>Feature</b><i>Basic</i><i>Pro</i><span>Analytics</span><b>✓</b><b>✓</b></div>','fx-layout-pricing':'<div class="demo d-fx-layout-pricing"><i>Starter<br><b>$9</b></i><i>Pro<br><b>$29</b></i><i>Team<br><b>$79</b></i></div>','fx-layout-casestudy':'<div class="demo d-fx-layout-casestudy"><b>Challenge → Result</b><span>+42% conversion</span></div>','fx-layout-testimonial':'<div class="demo d-fx-layout-testimonial"><i>“”</i><span>Made our workflow calm.</span><b>— Alex</b></div>','fx-layout-brandstory':'<div class="demo d-fx-layout-brandstory"><b>1998</b><span>Scroll to discover</span></div>','fx-layout-career':'<div class="demo d-fx-layout-career"><nav>Design roles</nav><span>Product Designer · Remote</span></div>','fx-layout-agenda':'<div class="demo d-fx-layout-agenda"><b>09:30</b><span>Keynote</span><b>11:00</b><span>Workshop</span></div>','fx-layout-course':'<div class="demo d-fx-layout-course"><i>01</i><span>Typography basics</span><b>72%</b></div>','fx-layout-help':'<div class="demo d-fx-layout-help"><b>How can we help?</b><span>⌕ Search articles</span></div>'
  ,'fx-layout-mapsidebar':'<div class="demo d-fx-layout-mapsidebar"><div>⌖  Map</div><aside>Places<br><b>3 results</b></aside></div>','fx-layout-mapcards':'<div class="demo d-fx-layout-mapcards"><i></i><b>Selected place</b></div>','fx-layout-floorplan':'<div class="demo d-fx-layout-floorplan"><i>1F</i><span>▦ ▦ ▦<br>▦ ● ▦</span></div>','fx-layout-coordinate':'<div class="demo d-fx-layout-coordinate"><i></i><b>(3, 2)</b></div>','fx-layout-nodegraph':'<div class="demo d-fx-layout-nodegraph"><i>A</i><i>B</i><i>C</i><span></span></div>','fx-layout-whiteboard':'<div class="demo d-fx-layout-whiteboard"><b>∞</b><i>note</i><i>idea</i></div>','fx-layout-minimap':'<div class="demo d-fx-layout-minimap"><div></div><aside></aside></div>','fx-layout-geostory':'<div class="demo d-fx-layout-geostory"><i>01</i><b>Along the coast</b><span>●—●—●</span></div>','fx-layout-route':'<div class="demo d-fx-layout-route"><b>A</b><span>━━━</span><b>B</b><small>24 min</small></div>','fx-layout-zones':'<div class="demo d-fx-layout-zones"><i>Zone A</i><i>Zone B</i><i>Zone C</i></div>'
  ,'fx-layout-containerquery':'<div class="demo d-fx-layout-containerquery"><i>Card</i><span>container: 320px</span></div>','fx-layout-priorityreflow':'<div class="demo d-fx-layout-priorityreflow"><b>Primary</b><span>Secondary</span><i>More</i></div>','fx-layout-mobilestack':'<div class="demo d-fx-layout-mobilestack"><i>01</i><i>02</i><i>03</i></div>','fx-layout-tabletpane':'<div class="demo d-fx-layout-tabletpane"><nav>List</nav><span>Detail pane</span></div>','fx-layout-foldable':'<div class="demo d-fx-layout-foldable"><i>LEFT</i><b>HINGE</b><i>RIGHT</i></div>','fx-layout-ultrawide':'<div class="demo d-fx-layout-ultrawide"><i>main content</i><aside>tools</aside><aside>info</aside></div>','fx-layout-tenfoot':'<div class="demo d-fx-layout-tenfoot"><b>TV HOME</b><span>▶  Watch now</span></div>','fx-layout-orientation':'<div class="demo d-fx-layout-orientation"><i>↻</i><b>Portrait ↔ Landscape</b></div>','fx-layout-density':'<div class="demo d-fx-layout-density"><i>Compact</i><span>Comfortable</span><b>Spacious</b></div>','fx-layout-typeresponsive':'<div class="demo d-fx-layout-typeresponsive"><b>Readable type</b><span>measure follows font size</span></div>'
  ,'fx-layout-freeform':'<div class="demo d-fx-layout-freeform"><i>A</i><i>B</i><i>C</i></div>','fx-layout-brokengrid':'<div class="demo d-fx-layout-brokengrid"><i>GRID</i><b>BREAK</b></div>','fx-layout-diagonal':'<div class="demo d-fx-layout-diagonal"><i>01</i><i>02</i><i>03</i></div>','fx-layout-triangular':'<div class="demo d-fx-layout-triangular"><i>A</i><i>B</i><i>C</i></div>','fx-layout-concentric':'<div class="demo d-fx-layout-concentric"><i></i><b>CORE</b></div>','fx-layout-spiral':'<div class="demo d-fx-layout-spiral"><i>1</i><i>2</i><i>3</i><i>4</i></div>','fx-layout-orbital':'<div class="demo d-fx-layout-orbital"><b>●</b><i>○</i><i>○</i><i>○</i></div>','fx-layout-fan':'<div class="demo d-fx-layout-fan"><b>+</b><i>1</i><i>2</i><i>3</i></div>','fx-layout-perspective':'<div class="demo d-fx-layout-perspective"><i>near</i><i>far</i></div>','fx-layout-isometric':'<div class="demo d-fx-layout-isometric"><i>A</i><i>B</i><i>C</i></div>'
  ,'fx-layout-emptystate':'<div class="demo d-fx-layout-emptystate"><i>○</i><b>No projects yet</b><span>Create your first project →</span></div>','fx-layout-errorrecovery':'<div class="demo d-fx-layout-errorrecovery"><b>Something went wrong</b><span>Try again</span></div>'
};

const getExtraDemoMarkup=type=>extraDemoMarkup[type]||'';


const base = location.pathname.includes('/categories/') || location.pathname.includes('/terms/') ? '../' : './';
const FAVORITES_KEY='ui-wiki-favorites';
const RECENT_KEY='ui-wiki-recent';
const COMPARE_KEY='ui-wiki-compare';
const readList=key=>{try{return JSON.parse(localStorage.getItem(key)||'[]')}catch{return[]}};
const writeList=(key,list)=>{try{localStorage.setItem(key,JSON.stringify(list))}catch{}};
const toggleList=(key,id,limit=30)=>{const list=readList(key),next=list.includes(id)?list.filter(item=>item!==id):[id,...list].slice(0,limit);writeList(key,next);return next};
const layoutGroups=[
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
];
const layoutGroupFor=term=>{
  if(term.cat!=='ui-layout')return null;
  const list=byCategory('ui-layout'),index=list.findIndex(item=>item.id===term.id);
  return [...layoutGroups].reverse().find(group=>index>=list.findIndex(item=>item.id===group.start))||layoutGroups[0];
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
function termCard(term){const saved=readList(FAVORITES_KEY).includes(term.id),group=layoutGroupFor(term);return `<article class="term-card" data-filter="${term.name} ${term.en} ${term.tags.join(' ')}"${group?` data-layout-group="${group.id}"`:''}><button class="term-favorite${saved?' is-saved':''}" data-favorite="${term.id}" type="button" aria-label="${saved?'取消收藏':'收藏'} ${term.name}" aria-pressed="${saved}">${saved?'★':'☆'}</button><div class="preview" tabindex="0" role="button" aria-label="预览 ${term.name}">${demoMarkup(term.demo)}</div><small>${group?`${getCategory(term.cat).name} · ${group.name}`:getCategory(term.cat).name}</small><h3><a class="term-card-link" href="${base}terms/${term.id}.html">${term.name}</a></h3><p>${term.en}</p><div class="tags">${term.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div></article>`}
function mountLayoutGroups(){
  const grid=document.querySelector('[data-terms]');if(!grid)return;
  const bar=document.createElement('nav');bar.className='layout-groups';bar.setAttribute('aria-label','布局二级分组');
  const counts=Object.fromEntries(layoutGroups.map(group=>[group.id,grid.querySelectorAll(`[data-layout-group="${group.id}"]`).length]));
  bar.innerHTML=`<button class="active" type="button" data-layout-filter="all">全部 <b>${grid.children.length}</b></button>${layoutGroups.filter(group=>counts[group.id]).map(group=>`<button type="button" data-layout-filter="${group.id}">${group.name} <b>${counts[group.id]}</b></button>`).join('')}`;
  grid.before(bar);
  bar.addEventListener('click',event=>{const button=event.target.closest('[data-layout-filter]');if(!button)return;bar.querySelectorAll('button').forEach(item=>item.classList.toggle('active',item===button));grid.querySelectorAll('.term-card').forEach(card=>card.hidden=button.dataset.layoutFilter!=='all'&&card.dataset.layoutGroup!==button.dataset.layoutFilter)});
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
function relatedCSS(term){
  try{
    const token=`d-${term.demo}`;
    const rules=[...document.styleSheets].flatMap(sheet=>[...sheet.cssRules]).filter(rule=>rule.cssText?.includes(token)||rule.selectorText==='.stage .demo').map(rule=>rule.cssText);
    if(rules.length)return rules.join('\n\n');
  }catch{}
  return `.d-${term.demo} {\n  --demo-color: #53d7d0;\n  --demo-color-2: #ff8066;\n}`;
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
  if(cat.id==='ui-layout')mountLayoutGroups();
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
