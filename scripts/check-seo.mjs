import {readFile,stat} from 'node:fs/promises';
import {categories,terms} from '../data/lexicon.js';

const [home,category,term,sitemap,robots,image]=await Promise.all([
  readFile('index.html','utf8'),
  readFile('categories/ui-visual.html','utf8'),
  readFile('terms/glassmorphism.html','utf8'),
  readFile('sitemap.xml','utf8'),
  readFile('robots.txt','utf8'),
  stat('assets/social-preview.png')
]);

const expectedUrls=1+categories.length+terms.length;
const checks=[
  ['homepage canonical',home.includes('rel="canonical" href="https://xvshiting.github.io/ui-wiki/"')],
  ['one homepage social title',(home.match(/property="og:title"/g)||[]).length===1],
  ['category canonical',category.includes('/categories/ui-visual.html')],
  ['term canonical',term.includes('/terms/glassmorphism.html')],
  ['term DefinedTerm schema',term.includes('"@type":"DefinedTerm"')],
  ['social preview metadata',term.includes('/assets/social-preview.png')&&term.includes('summary_large_image')],
  ['complete sitemap',(sitemap.match(/<url>/g)||[]).length===expectedUrls],
  ['robots advertises sitemap',robots.includes('Sitemap: https://xvshiting.github.io/ui-wiki/sitemap.xml')],
  ['social preview PNG is non-empty',image.size>10000]
];

const failed=checks.filter(([,pass])=>!pass).map(([name])=>name);
if(failed.length){console.error(failed.map(name=>`FAIL: ${name}`).join('\n'));process.exit(1)}
console.log(`PASS: SEO metadata and ${expectedUrls}-URL sitemap are complete.`);
