import { defineType } from 'sanity';

export const TextBlock = defineType({
  name: 'textBlock',
  title: 'Text',
  type: 'array',
  of: [
    {
      marks: {
        annotations: [
          {
            name: 'link',
            title: 'Link',
            type: 'object',
            fields: [{ name: 'url', type: 'url' }],
          },
        ],
      },
      styles: [],
      type: 'block',
    },
  ],
});
