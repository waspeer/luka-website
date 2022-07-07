import { BsFileText, BsArrowUpRight } from 'react-icons/bs';
import { defineType } from 'sanity';

export const Page = defineType({
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
    prepare: ({ isExternal, title }: any) => ({
      media: isExternal ? BsArrowUpRight : BsFileText,
      title,
    }),
  },
});
