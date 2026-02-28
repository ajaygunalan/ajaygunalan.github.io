// publish.js — image lightbox for ajaygunalan.com
// Click any image to view it fullscreen, click again or press Esc to close

document.addEventListener('click', function (e) {
  const img = e.target.closest('.markdown-rendered img');
  if (!img) return;

  const overlay = document.createElement('div');
  overlay.style.cssText =
    'position:fixed;inset:0;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;z-index:9999;cursor:zoom-out;';

  const clone = document.createElement('img');
  clone.src = img.src;
  clone.style.cssText = 'max-width:90vw;max-height:90vh;border-radius:4px;';

  overlay.appendChild(clone);
  document.body.appendChild(overlay);

  function close() { overlay.remove(); document.removeEventListener('keydown', onKey); }
  function onKey(e) { if (e.key === 'Escape') close(); }

  overlay.addEventListener('click', close);
  document.addEventListener('keydown', onKey);
});
