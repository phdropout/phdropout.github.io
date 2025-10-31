// Year in footer
(function () {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

// Theme toggle: persists across pages, defaults to light, respects saved choice.
(function () {
  const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const html = document.documentElement;

themeToggle.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);

  // Change the icon image accordingly
  themeIcon.src = newTheme === 'dark' ? 'toggles/light_mode.png' : 'toggles/dark_mode.png';
  themeIcon.alt = newTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
});

// Load previously saved theme on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  html.setAttribute('data-theme', savedTheme);
  themeIcon.src = savedTheme === 'dark' ? 'toggles/light_mode.png' : 'toggles/dark_mode.png';
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
