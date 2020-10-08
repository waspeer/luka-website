import sanityClient from '@sanity/client';
import sanityImage from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

import {
  LukaInfo,
  NewsItem,
  PageInfo,
  SocialLink,
  TeamMember,
  WebsiteSettings,
} from '~model/types';

const NODE_ENV = process.env.NODE_ENV || 'development';

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

export async function getLukaInfo(): Promise<LukaInfo> {
  return client.fetch(/* groq */ `
    *[_id == 'aboutLuka'][0] {
      bio[] {...},
      discography[] {
        date,
        image {...},
        name,
        url,
      },
    }
  `);
}

export async function getNewsItems(): Promise<NewsItem[]> {
  return client.fetch(/* groq */ `
    *[_type == 'news'] | order(date desc) [0..9] {
      date,
      text[] { ... },
      title,
    }
  `);
}

export async function getPages(): Promise<PageInfo[]> {
  const { pages } = await client.fetch(/* groq */ `
    *[_id == 'websiteSettings'][0] {
      pages[]->{
        'id': _id,
        external,
        'name': slug.current,
        'title': name,
      }
    }
  `);

  return pages;
}

export async function getSocialLinks(): Promise<SocialLink[]> {
  return client.fetch(/* groq */ `
    *[_id == 'aboutLuka'][0].socials {
      'iconName': icon,
      name,
      url
    }
  `);
}

export async function getTeam(): Promise<TeamMember[]> {
  return client.fetch(/* groq */ `
    *[_id == 'team'][0].members {
      email,
      firstName,
      lastName,
      role,
    }
  `);
}

export async function getWebsiteSettings(): Promise<WebsiteSettings> {
  return client.fetch(/* groq */ `
    *[_id == 'websiteSettings'][0] {
      ctas[] {
        text,
        url,
      },
      description,
      mainImage { ... },
      pages[] -> {
        'id': _id,
        external,
        'name': slug.current,
        'title': name,
      }
    }
  `);
}
