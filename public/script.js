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

// Cookie banner: asks once, and can be reopened from the footer
(function () {
  const banner = document.getElementById('consent-banner');
  const KEY = 'cookie-consent';

  const getChoice = () => {
    try {
      return localStorage.getItem(KEY);
    } catch (e) {
      return null;
    }
  };

  const saveChoice = (choice) => {
    try {
      localStorage.setItem(KEY, choice);
    } catch (e) {
      // Storage can be blocked; the choice then applies to this page only.
    }
  };

  // Keep the banner from covering the end of the page while it's open.
  const fitPage = () => {
    document.body.style.paddingBottom = banner.hidden ? '' : `${banner.offsetHeight}px`;
  };

  const showBanner = (isOpen) => {
    banner.hidden = !isOpen;
    fitPage();
  };

  const removeCookies = () => {
    const prefixes = ['_ga', '_gid', '_gat', '_gcl', '__gads', '__gpi', '__eoi'];
    const host = location.hostname;
    document.cookie.split(';').forEach((cookie) => {
      const name = cookie.split('=')[0].trim();
      if (!prefixes.some((prefix) => name.startsWith(prefix))) return;
      ['', `; domain=${host}`, `; domain=.${host}`].forEach((domain) => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain}`;
      });
    });
  };

  document.getElementById('consent-accept').addEventListener('click', () => {
    saveChoice('accepted');
    window.loadConsentedScripts();
    showBanner(false);
  });

  document.getElementById('consent-decline').addEventListener('click', () => {
    saveChoice('declined');
    removeCookies();
    showBanner(false);
    // Scripts that have already loaded can only be stopped by reloading the page.
    if (window.consentedScriptsLoaded) location.reload();
  });

  document.getElementById('consent-settings').addEventListener('click', () => showBanner(true));
  window.addEventListener('resize', fitPage);

  if (!getChoice()) showBanner(true);
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
