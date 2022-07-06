import type { SanityImageObject } from '@sanity/image-url/lib/types/types';

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

export interface SectionProps {
  id: string;
}

export interface SocialLink {
  iconName: string;
  name: string;
  url: string;
}

export interface TeamMember {
  companyName: string;
  companyUrl: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}

export interface Video {
  caption: string;
  date: string;
  name: string;
  url: string;
}

export interface WebsiteSettings {
  description: string;
  mainImage: SanityImageObject;
  pages: PageInfo[];
  ctas: CallToAction[];
}
