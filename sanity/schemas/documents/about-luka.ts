import { DocumentType } from '../../lib/data-types';

export const AboutLuka: DocumentType<'linkWithIcon' | 'textBlock' | 'release'> = {
  name: 'aboutLuka',
  title: 'About Luka',
  type: 'document',
  fieldsets: [{ name: 'links', title: 'Links' }],
  fields: [
    {
      hidden: true,
      name: 'name',
      type: 'string',
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'textBlock',
    },
    {
      name: 'discography',
      title: 'Discography',
      type: 'array',
      of: [{ type: 'release' }],
    },
    {
      description: 'Link to the webshop',
      fieldset: 'links',
      name: 'webshopUrl',
      title: 'Webshop',
      type: 'url',
    },
    {
      description: 'Link to the digital presskit',
      fieldset: 'links',
      name: 'presskitUrl',
      title: 'Presskit',
      type: 'url',
    },
    {
      fieldset: 'links',
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [{ type: 'linkWithIcon' }],
    },
  ],
};
