import { next } from '@vercel/edge';
import sanityClient from 'picosanity';

const PUBLIC_SANITY_DATASET = process.env.PUBLIC_SANITY_DATASET;
const PUBLIC_SANITY_PROJECT_ID = process.env.PUBLIC_SANITY_PROJECT_ID;

if (!(PUBLIC_SANITY_DATASET && PUBLIC_SANITY_PROJECT_ID)) {
  throw new Error('PUBLIC_SANITY_DATASET and PUBLIC_SANITY_PROJECT_ID must be defined.');
}

export const client = sanityClient({
  apiVersion: '2022-07-06',
  dataset: PUBLIC_SANITY_DATASET,
  projectId: PUBLIC_SANITY_PROJECT_ID,
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
