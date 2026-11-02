// Theme toggle: persists across pages and defaults to light. The saved theme is
// applied by an inline script in the page head, before the page first paints.
(function () {
  const html = document.documentElement;

  document.getElementById('theme-toggle').addEventListener('click', () => {
    const newTheme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    try {
      localStorage.setItem('theme', newTheme);
    } catch (e) {
      // Storage can be blocked; the theme still applies to this page.
    }
  });
})();

// Footer: current year and last-updated date
(function () {
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  const lastUpdatedSpan = document.getElementById('last-updated');
  if (lastUpdatedSpan) {
    lastUpdatedSpan.textContent = new Date(document.lastModified).toLocaleDateString(undefined, {
      year: 'numeric', month: 'short', day: 'numeric'
    });
  }
})();

// Table of contents: highlight the section currently being read
(function () {
  const links = Array.from(document.querySelectorAll('#toc a'));
  if (!links.length || !('IntersectionObserver' in window)) return;

  const linkFor = new Map();
  links.forEach((link) => {
    const section = document.getElementById(decodeURIComponent(link.getAttribute('href').slice(1)));
    if (section) linkFor.set(section, link);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => link.removeAttribute('aria-current'));
      linkFor.get(entry.target).setAttribute('aria-current', 'true');
    });
  }, { rootMargin: '-15% 0px -75% 0px' });

  linkFor.forEach((_, section) => observer.observe(section));
})();
