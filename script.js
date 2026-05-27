const yearEl = document.getElementById('year');
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

yearEl.textContent = new Date().getFullYear();

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
