import { next } from '@vercel/edge';
import sanityClient from 'picosanity';

import { getEnvironmentVariable } from './src/lib/get-environment-variable';

export const client = sanityClient({
  apiVersion: '2022-07-06',
  dataset: getEnvironmentVariable('PUBLIC_SANITY_DATASET'),
  projectId: getEnvironmentVariable('PUBLIC_SANITY_PROJECT_ID'),
  useCdn: true,
});

export default async function middleware() {
  const response = await client.fetch(/* groq */ `
    *[_id == 'aboutLuka'][0] {
      presskitUrl
    }
  `);

  if (typeof response?.presskitUrl !== 'string') {
    return next();
  }

  return Response.redirect(response.presskitUrl);
}

export const config = {
  matcher: '/presskit',
};
