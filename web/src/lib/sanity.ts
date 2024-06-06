import sanityImage from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import sanityClient from 'picosanity';
import { getEnvironmentVariable } from './get-environment-variable';
import type {
  LukaInfo,
  NewsItem,
  PageInfo,
  SocialLink,
  TeamMember,
  Video,
  WebsiteSettings,
} from './types';

export const client = sanityClient({
  apiVersion: '2022-07-06',
  dataset: getEnvironmentVariable('PUBLIC_SANITY_DATASET'),
  projectId: getEnvironmentVariable('PUBLIC_SANITY_PROJECT_ID'),
  useCdn: import.meta.env?.MODE === 'production',
});

export const imageUrlBuilder = sanityImage(client);

export function imageUrlFor(source: SanityImageSource) {
  return imageUrlBuilder.image(source);
}

export async function getLukaInfo(): Promise<LukaInfo> {
  return fetchQuery(
    'LukaInfo',
    /* groq */ `
      *[_id == 'aboutLuka'][0] {
        bio[] {...},
        discography[] {
          date,
          image {...},
          name,
          url,
        },
      }
    `,
  );
}

export async function getNewsItems(): Promise<NewsItem[]> {
  return fetchQuery(
    'NewsItems',
    /* groq */ `
      *[_type == 'news'] | order(date desc) [0..9] {
        date,
        text[] { ... },
        title,
      }
    `,
  );
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
  return fetchQuery(
    'SocialLinks',
    /* groq */ `
      *[_id == 'aboutLuka'][0].socials[] {
        'iconName': icon,
        name,
        url
      }
    `,
  );
}

export async function getTeam(): Promise<TeamMember[]> {
  return fetchQuery(
    'Team',
    /* groq */ `
      *[_id == 'team'][0].members[] {
        companyName,
        companyUrl,
        email,
        firstName,
        lastName,
        role,
      }
    `,
  );
}

export async function getVideos(): Promise<Video[]> {
  return fetchQuery(
    'Videos',
    /* groq */ `
      *[_type == 'video'] | order(date desc) {
      caption,
      date,
      name,
      url,
      }
    `,
  );
}

export async function getWebsiteSettings(): Promise<WebsiteSettings> {
  return fetchQuery(
    'WebsiteSettings',
    /* groq */ `
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
    `,
  );
}

// ----------------- //

// Wrapper for potential caching
async function fetchQuery(_key: string, query: string) {
  const result = await client.fetch(query);
  return result;
}
