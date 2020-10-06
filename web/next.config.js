require('dotenv').config({
  path: '.env.local',
});

const SHOP_PAGE_ID = '2dcc1c0f-86ba-45a0-8a2c-048fec971c24';
const PRESSKIT_PAGE_ID = 'dd645afc-c653-491d-ba72-c51bcb7b0cd0';

const sanityClient = require('@sanity/client')({
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production',
});

const externalPageIds = [SHOP_PAGE_ID, PRESSKIT_PAGE_ID];
const externalUrlMap = new Map([
  [SHOP_PAGE_ID, 'webshopUrl'],
  [PRESSKIT_PAGE_ID, 'presskitUrl'],
]);

module.exports = {
  async redirects() {
    const externalUrls = await sanityClient.fetch(/* groq */ `
      *[_id == 'aboutLuka'][0] {
        presskitUrl,
        webshopUrl,
      }
    `);
    const externalPages = await sanityClient.fetch(/* groq */ `
      *[
        _type == 'page'
        && external
        && _id in *[_id == 'websiteSettings'][0].pages[]._ref
      ] {
        'id': _id,
        'slug': slug.current
      }
    `);

    return externalPages
      .filter(({ id }) => externalPageIds.includes(id))
      .map(({ id, slug }) => ({
        source: `/${slug}`,
        destination: externalUrls[externalUrlMap.get(id)],
        permanent: true,
      }));
  },
};
