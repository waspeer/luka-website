import sitemap from '@astrojs/sitemap';
import solid from '@astrojs/solid-js';
import vercel from '@astrojs/vercel/serverless';
import robotsTxt from 'astro-robots-txt';
import { defineConfig } from 'astro/config';

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [solid(), sitemap({ customPages: ['https://lisaluka.com'] }), robotsTxt()],
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
