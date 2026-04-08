const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let rx = 0, ry = 0, cx = 0, cy = 0;
document.addEventListener('mousemove', e => {
    cx = e.clientX; cy = e.clientY;
    cursor.style.left = cx + 'px';
    cursor.style.top = cy + 'px';
});
function animRing() {
    rx += (cx - rx) * 0.12;
    ry += (cy - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animRing);
}
animRing();
document.querySelectorAll('a, button, .portfolio-item, .stat-item').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.width = '18px'; cursor.style.height = '18px';
        ring.style.width = '54px'; ring.style.height = '54px';
        ring.style.borderColor = 'rgba(232,213,163,0.8)';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.width = '10px'; cursor.style.height = '10px';
        ring.style.width = '38px'; ring.style.height = '38px';
        ring.style.borderColor = 'rgba(232,213,163,0.5)';
    });
});

// Modal
function openModal(url, title) {
    document.getElementById('modal-iframe').src = url + '?autoplay=1';
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeModal(e) {
    if (!e || e.target === document.getElementById('modal') || e.currentTarget.tagName === 'BUTTON') {
        document.getElementById('modal').classList.remove('active');
        document.getElementById('modal-iframe').src = '';
        document.body.style.overflow = '';
    }
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal({}); });

// Scroll Reveal
const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80);
            obs.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
reveals.forEach(el => obs.observe(el));

// Nav on scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    nav.style.background = window.scrollY > 80
        ? 'rgba(8,8,8,0.97)'
        : 'transparent';
});

function filtrarPortfolio(type, event) {
  const youtube = document.querySelector('.portfolio-youtube');
  const tiktok = document.querySelector('.portfolio-tiktok');

  if (type === 'tiktok') {
    youtube.style.display = 'none';
    tiktok.style.display = 'flex';
  } else {
    youtube.style.display = 'grid';
    tiktok.style.display = 'none';
  }

  document.querySelectorAll('.skill-tag').forEach(btn => {
    btn.classList.remove('active');
  });

  event.target.classList.add('active');
}