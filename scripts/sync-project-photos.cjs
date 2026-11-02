// Match each project HTML file with its same-named photo directory.
// Run from the repository root: node scripts/sync-project-photos.cjs
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '../projects');
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) { walk(file); continue; }
    if (!entry.name.endsWith('.html')) continue;
    const stem = path.basename(entry.name, '.html');
    const photosDir = path.join(dir, stem);
    if (!fs.existsSync(photosDir) || !fs.statSync(photosDir).isDirectory()) continue;
    const photos = fs.readdirSync(photosDir, { withFileTypes: true })
      .filter(item => item.isFile() && /\.(jpe?g|png|webp|avif)$/i.test(item.name) && !/poster/i.test(item.name))
      .map(item => item.name).sort((a, b) => a.localeCompare(b, 'en', { numeric: true }));
    if (!photos.length) continue;
    const html = fs.readFileSync(file, 'utf8');
    const pattern = /<div class="gallery-grid"[^>]*>[\s\S]*?<\/div>(?=\s*<\/article>)/;
    if (!pattern.test(html)) continue;
    const figures = photos.map((name, i) => {
      const src = `${encodeURIComponent(stem)}/${encodeURIComponent(name)}`;
      return `<figure><a href="${src}" target="_blank" rel="noopener noreferrer" aria-label="View production photo ${i + 1} at full size"><img src="${src}" alt="${stem === 'Tempest2025' ? 'Naked Shakes production of The Tempest' : stem} — production photo ${i + 1}" loading="lazy" decoding="async"></a></figure>`;
    });
    const gallery = `<div class="gallery-grid" role="group" aria-label="Production photos">\n${figures.join('\n')}\n</div>`;
    let updated = html.replace(pattern, gallery);
    if (!updated.includes('project-gallery.js')) {
      const script = path.relative(dir, path.resolve(__dirname, '../project-gallery.js')).split(path.sep).join('/');
      updated = updated.replace('</head>', '<script src="' + script + '" defer></script></head>');
    }
    fs.writeFileSync(file, updated);
    console.log(`${path.relative(root, file)}: ${photos.length} photos (posters excluded)`);
  }
}
walk(root);
