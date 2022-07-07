import { GiSpaceSuit } from 'react-icons/gi';
import { defineType } from 'sanity';

export const Team = defineType({
  name: 'team',
  title: 'Team',
  type: 'document',
  fields: [
    {
      hidden: true,
      name: 'name',
      type: 'string',
    },
    {
      name: 'members',
      title: 'Members',
      type: 'array',
      of: [{ type: 'person', icon: GiSpaceSuit }],
    },
  ],
});
