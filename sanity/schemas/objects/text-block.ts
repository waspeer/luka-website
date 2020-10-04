import { ArrayType } from '../../lib/data-types';

export const TextBlock: ArrayType = {
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
};
