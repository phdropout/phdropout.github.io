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

// === Footer dynamic year and last-updated ===
const yearSpan = document.getElementById("current-year");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

const lastUpdatedSpan = document.getElementById("last-updated");
if (lastUpdatedSpan) {
  const lastModified = new Date(document.lastModified);
  lastUpdatedSpan.textContent = lastModified.toLocaleDateString(undefined, {
    year: "numeric", month: "short", day: "numeric"
  });
}
