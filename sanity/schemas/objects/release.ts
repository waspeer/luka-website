import type { ObjectType } from '../../lib/data-types';

export const Release: ObjectType = {
  name: 'release',
  title: 'Release',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    },
    {
      description: 'Link to for example spotify / link tree / etc.',
      name: 'url',
      title: 'Link',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
  ],
};
