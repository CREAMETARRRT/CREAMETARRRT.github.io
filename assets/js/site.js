const menuBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
}

const langButtons = document.querySelectorAll('[data-lang-switch]');
function setLanguage(lang) {
  const normalized = lang === 'zh' ? 'zh' : 'en';
  document.documentElement.dataset.lang = normalized;
  document.documentElement.lang = normalized === 'zh' ? 'zh-CN' : 'en';
  try { localStorage.setItem('creamTartLanguage', normalized); } catch (e) {}
  langButtons.forEach(btn => btn.setAttribute('aria-pressed', String(btn.dataset.langSwitch === normalized)));
}
let storedLanguage = 'en';
try { storedLanguage = localStorage.getItem('creamTartLanguage') || 'en'; } catch (e) {}
setLanguage(storedLanguage);
langButtons.forEach(btn => btn.addEventListener('click', () => setLanguage(btn.dataset.langSwitch)));

const filterButtons = document.querySelectorAll('.archive-filter');
const filterRows = document.querySelectorAll('.archive-filterable .archive-row');
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    filterButtons.forEach(b => b.classList.toggle('is-active', b === btn));
    filterRows.forEach(row => {
      row.hidden = filter !== 'all' && row.dataset.category !== filter;
    });
  });
});
