import { AboutLuka } from './documents/about-luka';
import { News } from './documents/news';
import { Page } from './documents/page';
import { Team } from './documents/team';
import { Video } from './documents/video';
import { WebsiteSettings } from './documents/website-settings';
import { Button } from './objects/button';
import { LinkWithIcon } from './objects/link-with-icon';
import { Person } from './objects/person';
import { Release } from './objects/release';
import { TextBlock } from './objects/text-block';

export const schemaTypes = [
  // OBJECTS
  Button,
  LinkWithIcon,
  Person,
  Release,
  TextBlock,

  // DOCUMENTS
  AboutLuka,
  News,
  Page,
  Team,
  Video,
  WebsiteSettings,
];
