// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://phddropout.net',
  // Build pages as /maths.html rather than /maths/index.html, so that the
  // site's existing URLs (and links to them from elsewhere) keep working.
  build: { format: 'file' },
  integrations: [
    sitemap({
      // The sitemap omits the .html ending by default, but the site's links and
      // canonical tags include it, and all of them should name the same address.
      serialize(item) {
        return { ...item, url: item.url.endsWith('/') ? item.url : `${item.url}.html` };
      },
    }),
  ],
});
