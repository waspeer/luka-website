import solidJs from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({ edgeMiddleware: true }),
  integrations: [icon(), solidJs(), tailwind()],
});
