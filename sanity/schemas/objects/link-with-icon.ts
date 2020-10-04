import { ObjectType } from '../../lib/data-types';

export const LinkWithIcon: ObjectType = {
  name: 'linkWithIcon',
  title: 'Link',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
  ],
};
