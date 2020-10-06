import { BsFileText, BsArrowUpRight } from 'react-icons/bs';

import { DocumentType } from '../../lib/data-types';

export const Page: DocumentType = {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'external',
      title: 'Is external',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      isExternal: 'external',
      title: 'name',
    },
    prepare: ({ isExternal, title }) => ({
      media: isExternal ? BsArrowUpRight : BsFileText,
      title,
    }),
  },
};
