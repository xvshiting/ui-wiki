# 参与贡献 UI Wiki

感谢你帮助 UI Wiki 建立更准确、可操作的设计知识库。你可以提交新效果、修正术语、优化预览、补充设计说明或改进无障碍体验。

## 推荐一种新效果

不需要先写代码。请使用 [效果征集模板](https://github.com/xvshiting/ui-wiki/issues/new?template=effect-request.md)，说明名称、适用场景、与现有条目的区别，并尽可能附上公开参考资料。

## 提交实现

一个完整效果应同时包含：

1. `data/extra-terms.js` 中的名称、英文名、标签、说明、场景与原则；
2. `assets/extra-demos.js` 中能够解释机制的专属 HTML；
3. 对应 CSS 文件中的专属视觉或交互规则；
4. `data/controls.js` 中真实有效的参数；
5. 由 `node scripts/build.mjs` 生成的静态页面。

请避免只更换名称、颜色或文字的重复效果。词条需要有可辨认的设计机制，并在列表卡片与详情页中保持同一个视觉模型。

## 本地检查

```bash
node scripts/build.mjs
python scripts/check-search.py
node scripts/check-controls.mjs
node scripts/check-previews.mjs
node scripts/check-effect-fidelity.mjs
node scripts/check-semantic-interactions.mjs
node scripts/check-category-groups.mjs
node scripts/check-source-export.mjs
```

UI Wiki 是纯静态网站。请勿引入必须依赖后端、数据库或私有服务才能工作的功能。
