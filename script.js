const yearEl = document.getElementById('year');
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

yearEl.textContent = new Date().getFullYear();

menuBtn.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('#nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

window.addEventListener('DOMContentLoaded', () => {
  if (!window.gsap) return;

  gsap.registerPlugin(ScrollTrigger);

  gsap.to('.glow-1', { x: 30, y: 20, duration: 6, repeat: -1, yoyo: true, ease: 'sine.inOut' });
  gsap.to('.glow-2', { x: -30, y: -18, duration: 7, repeat: -1, yoyo: true, ease: 'sine.inOut' });

  gsap.from('.hero-content h2', { opacity: 0, y: 30, duration: 0.9, ease: 'power2.out' });

  gsap.utils.toArray('.reveal-up').forEach((el, i) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: Math.min(i * 0.05, 0.35),
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%'
      }
    });
  });
  navLinks.classList.toggle('open');
});
