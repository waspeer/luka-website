import { GiAcousticMegaphone, GiSpermWhale } from 'react-icons/gi';

import { DocumentType } from '../../lib/data-types';

export const WebsiteSettings: DocumentType<'button' | 'page'> = {
  name: 'websiteSettings',
  title: 'Website Settings',
  type: 'document',
  fields: [
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      description: 'A short description that will be shown on for example Google / Facebook / etc.',
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'pages',
      title: 'Pages',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'page' }] }],
      validation: (Rule) => Rule.unique(),
    },
    {
      name: 'ctas',
      title: 'Call to Actions',
      type: 'array',
      of: [{ type: 'button', icon: GiAcousticMegaphone }],
    },
  ],
  preview: {
    prepare: () => ({ title: 'Website Settings', media: GiSpermWhale }),
  },
};
