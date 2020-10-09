import { DocumentType } from '../../lib/data-types';

export const News: DocumentType<'textBlock'> = {
  name: 'news',
  title: 'News',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
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
      name: 'text',
      title: 'Content',
      type: 'textBlock',
      validation: (Rule) => Rule.required(),
    },
  ],
  orderings: [
    {
      title: 'Date',
      name: 'date',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
};
