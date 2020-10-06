import sanityClient from '@sanity/client';
import sanityImage from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
// import { OpenGraphImages as OpenGraphImage } from 'next-seo/lib/types';

const NODE_ENV = process.env.NODE_ENV || 'development';
// const OPENGRAPH_IMAGE_WIDTH = 1200;
// const OPENGRAPH_IMAGE_HEIGHT = 630;

const sanityOptions = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  useCdn: NODE_ENV === 'production',
};

export const client = sanityClient(sanityOptions);

export const imageUrlBuilder = sanityImage(sanityOptions);

export function imageUrlFor(source: SanityImageSource) {
  return imageUrlBuilder.image(source);
}

export async function getPages() {
  const { pages } = await client.fetch(/* groq */ `
    *[_id == 'websiteSettings'][0] {
      pages[]->{
        external,
        'name': slug.current,
        'title': name,
      }
    }
  `);

  return pages;
}

export async function getSocialLinks() {
  return client.fetch(/* groq */ `
    *[_id == 'aboutLuka'][0].socials {
      'iconName': icon,
      name,
      url
    }
  `);
}
