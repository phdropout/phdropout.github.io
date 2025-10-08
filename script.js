// Year in footer
(function () {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

// Theme toggle: persists across pages, defaults to light, respects saved choice.
(function () {
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');

  // Initialize theme from localStorage or default 'light'
  const saved = localStorage.getItem('theme');
  const initial = (saved === 'dark' || saved === 'light') ? saved : 'light';
  root.setAttribute('data-theme', initial);
  if (btn) btn.textContent = initial === 'dark' ? '☀️' : '🌙';

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  if (btn) {
    btn.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') || 'light';
      setTheme(current === 'light' ? 'dark' : 'light');
    });
  }
})();

