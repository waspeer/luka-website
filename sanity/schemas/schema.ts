import schemaTypes from 'all:part:@sanity/base/schema-type';
import createSchema from 'part:@sanity/base/schema-creator';

import { AboutLuka } from './documents/about-luka';
import { Landing } from './documents/landing';
import { News } from './documents/news';
import { Team } from './documents/team';
import { Button } from './objects/button';
import { LinkWithIcon } from './objects/link-with-icon';
import { Person } from './objects/person';
import { Release } from './objects/release';
import { TextBlock } from './objects/text-block';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // OBJECTS
    Button,
    LinkWithIcon,
    Person,
    Release,
    TextBlock,

    // DOCUMENTS
    AboutLuka,
    Landing,
    News,
    Team,
  ]),
});
