const btn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
if (btn && nav) {
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', String(open));
  });
}
