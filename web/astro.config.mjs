import sitemap from '@astrojs/sitemap';
import solid from '@astrojs/solid-js';
import robotsTxt from 'astro-robots-txt';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [solid(), sitemap(), robotsTxt()],
  site: 'https://lisaluka.com',
  vite: {
    ssr: {
      external: ['svgo'],
    },
  },
  experimental: {
    integrations: true,
  },
});
