<div align="center">

![UI Wiki — Open Design Knowledge Base](assets/readme-hero.svg)

# UI WIKI

### Design effects, from principles to implementation.

[English](README.md) · [简体中文](README.zh-CN.md)

[![Live Demo](https://img.shields.io/badge/Live_Demo-Open_UI_WIKI-53d7d0?style=for-the-badge&labelColor=07111f)](https://xvshiting.github.io/ui-wiki/)
[![GitHub Stars](https://img.shields.io/github/stars/xvshiting/ui-wiki?style=for-the-badge&logo=github&label=STAR&labelColor=07111f&color=ff8066)](https://github.com/xvshiting/ui-wiki)

**660 design effects · 660 dedicated pages · no backend · works locally**

</div>

## What is UI Wiki?

UI Wiki is an open, interactive reference for UI layouts, interface aesthetics, motion, graphic design, cover design, color, and typography.

It is more than a glossary. Every entry combines a purpose-built preview with practical guidance, adjustable parameters, and editable HTML/CSS. Use it to discover ideas, understand mechanisms, compare approaches, or study an implementation directly.

> A new color or label does not make a new effect. Every entry should have a recognizable mechanism, a dedicated preview, and meaningful design guidance.

## What you can do

| Capability | What it offers |
|---|---|
| **Explore** | Browse by domain, tags, and category-specific subgroups |
| **Interact** | Try pointer, click, drag, scroll, gesture, and state effects |
| **Tune** | Adjust supported colors, spacing, radius, scale, and timing |
| **Inspect** | Edit and rerun the HTML/CSS behind an effect |
| **Organize** | Save favorites, revisit entries, and compare effects |
| **Reuse** | Copy the current CSS as an implementation starting point |

## 660 effects across six domains

| Domain | Entries | Coverage |
|---|---:|---|
| **UI Layout** | 107 | Navigation, reading, workspaces, forms, maps, responsive and experimental layouts |
| **UI Visual** | 78 | Glass, light, material, digital texture, and layered surfaces |
| **Interaction & Motion** | 121 | Click, transition, scroll, drag, gesture, form, pointer, and state feedback |
| **Graphic Design** | 118 | Modernism, retro, print, photography, collage, illustration, and information design |
| **Cover Design** | 118 | Type, photography, illustration, geometry, materials, mood, and series systems |
| **Color & Typography** | 38 | Color systems, accessibility, letterforms, typesetting, and kinetic type |

## Highlights

- Purpose-built previews that demonstrate the real principle.
- Interactive examples including cursor repulsion, depth focus, and drag snapping.
- A parameter lab and editable source playground.
- Local favorites, recent history, and effect comparison.
- Semantic controls, keyboard focus, and reduced-motion support.
- A static architecture with no backend or database.

## Run locally

```bash
git clone git@github.com:xvshiting/ui-wiki.git
cd ui-wiki
python3 -m http.server 8000
```

Open `http://localhost:8000/`, or visit the **[live site](https://xvshiting.github.io/ui-wiki/)**.

## Project structure

```text
ui-wiki/
├── index.html       # Home page and domain entry points
├── categories/     # Generated category pages
├── terms/          # 660 generated effect pages
├── data/           # Entries and parameter mappings
├── assets/         # UI, previews, and effect implementations
└── scripts/        # Build and regression checks
```

## Add an effect

1. Add its data to `data/lexicon.js` or `data/extra-terms.js`.
2. Create dedicated preview markup in `assets/app.js` or `assets/extra-demos.js`.
3. Implement the real mechanism in the appropriate stylesheet.
4. Expose only parameters that genuinely affect it in `data/controls.js`.
5. Rebuild and run all checks.

```bash
node scripts/build.mjs
for file in scripts/check-*.mjs; do node "$file"; done
```

## Contributing

Contributions are welcome. Effects should be distinct, explain their principle, expose working controls, and remain usable on narrow screens and with reduced motion.

See **[CONTRIBUTING.md](CONTRIBUTING.md)** or suggest an addition with the [effect request template](https://github.com/xvshiting/ui-wiki/issues/new?template=effect-request.md).

<div align="center">

**[Live Demo](https://xvshiting.github.io/ui-wiki/)** · **[Source](https://github.com/xvshiting/ui-wiki)** · **[Issues](https://github.com/xvshiting/ui-wiki/issues)**

Made for designers and developers who want to understand how design effects work.

</div>
