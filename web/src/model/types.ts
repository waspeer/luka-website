import { IconName } from '@fortawesome/free-brands-svg-icons';

export interface PageInfo {
  external: boolean;
  name: string;
  title: string;
}

export interface SocialLink {
  iconName: IconName;
  name: string;
  url: string;
}
