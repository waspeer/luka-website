import type { SanityImageObject } from '@sanity/image-url/lib/types/types';

import { icons } from '~lib/icons';

export interface CallToAction {
  text: string;
  url: string;
}

export interface NewsItem {
  date: string;
  text: any;
  title: string;
}

export interface LukaInfo {
  bio: any[];
  discography: Release[];
}

export interface PageInfo {
  id: string;
  external: boolean;
  name: string;
  title: string;
}

export interface Release {
  date: string;
  image: SanityImageObject;
  name: string;
  url: string;
}

export interface SocialLink {
  iconName: keyof typeof icons;
  name: string;
  url: string;
}

export interface TeamMember {
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}

export interface WebsiteSettings {
  description: string;
  mainImage: SanityImageObject;
  pages: PageInfo[];
  ctas: CallToAction[];
}
