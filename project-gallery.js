// Keep full-size photographs on the project page, with a clear way back.
document.addEventListener('click', (event) => {
  const link = event.target.closest('.gallery-grid a');
  if (!link || !/\.(jpe?g|png|webp|avif)(?:[?#]|$)/i.test(link.href)) return;
  if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  const viewer = document.createElement('dialog');
  viewer.className = 'photo-viewer';
  viewer.setAttribute('aria-label', 'Full-size production photo');
  const back = document.createElement('button');
  back.className = 'photo-viewer-back';
  back.type = 'button';
  back.setAttribute('aria-label', 'Back to photo gallery');
  back.innerHTML = '<span aria-hidden="true">&larr;</span>';
  back.addEventListener('click', () => viewer.close());
  const image = document.createElement('img');
  image.src = link.href;
  image.alt = link.querySelector('img')?.alt || 'Production photo';
  viewer.append(back, image);
  const previousOverflow = document.body.style.overflow;
  document.body.style.overflow = 'hidden';
  viewer.addEventListener('close', () => {
    document.body.style.overflow = previousOverflow;
    viewer.remove();
    link.focus({ preventScroll: true });
  }, { once: true });
  document.body.append(viewer);
  viewer.showModal();
  back.focus();
});
