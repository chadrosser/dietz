// ── PAGE SWITCHING via URL hash ──
function showPage(id) {
  document.querySelectorAll('.page').forEach(function(p) {
    p.classList.remove('active');
  });
  var target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
    window.scrollTo(0, 0);
  }
}

function handleHash() {
  var hash = window.location.hash.replace('#', '') || 'home';
  showPage(hash);
}

// Run on hashchange (nav clicks)
window.addEventListener('hashchange', handleHash);

// Run as early as possible
document.addEventListener('DOMContentLoaded', handleHash);

// Run again after full load as fallback
window.addEventListener('load', handleHash);

// Final fallback in case Cloudflare delays things
setTimeout(handleHash, 100);
setTimeout(handleHash, 500);

// ── CAROUSEL ──
function startCarousel() {
  var imgs = document.querySelectorAll('.carousel-img');
  if (!imgs.length) return;
  var current = 0;

  imgs[0].classList.add('visible');

  function nextSlide() {
    imgs[current].classList.remove('visible');
    current = (current + 1) % imgs.length;
    imgs[current].classList.add('visible');
  }

  setInterval(nextSlide, 5000);
}

document.addEventListener('DOMContentLoaded', startCarousel);

// ── FILM STILLS TOGGLE ──
function toggleStills(item) {
  var stills = item.querySelector('.film-stills');
  var label = item.querySelector('.film-expand');
  if (!stills) return;
  stills.classList.toggle('open');
  if (label) {
    label.textContent = stills.classList.contains('open') ? 'Close ↑' : 'View stills ↓';
  }
}
