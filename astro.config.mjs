// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://phddropout.net',
  // Build pages as /maths.html rather than /maths/index.html, so that the
  // site's existing URLs (and links to them from elsewhere) keep working.
  build: { format: 'file' },
});
