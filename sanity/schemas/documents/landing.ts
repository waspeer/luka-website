import { GiAcousticMegaphone, GiSpermWhale } from 'react-icons/gi';
import { DocumentType } from '../../lib/data-types';

export const Landing: DocumentType<'button'> = {
  name: 'landing',
  title: 'Landing Page',
  type: 'document',
  fields: [
    {
      hidden: true,
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'ctas',
      title: 'Call to Actions',
      type: 'array',
      of: [{ type: 'button', icon: GiAcousticMegaphone }],
    },
  ],
  preview: {
    prepare: () => ({ media: GiSpermWhale }),
  },
};
