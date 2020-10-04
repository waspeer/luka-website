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
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
    },
    {
      name: 'text',
      title: 'Content',
      type: 'textBlock',
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
