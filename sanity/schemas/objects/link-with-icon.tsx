import * as icons from 'react-icons/fa';
import { defineType } from 'sanity';

import { IconPicker } from '../input-components/icon-picker';

export const LinkWithIcon = defineType({
  name: 'linkWithIcon',
  title: 'Link',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      validation: (Rule) => Rule.required().error('Icon is required'),
      components: {
        input: IconPicker,
      },
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      iconName: 'icon',
      title: 'name',
    },
    prepare: ({ iconName, title }: any) => {
      const Icon = icons[iconName as keyof typeof icons];
      const QuestionMark = icons.FaQuestion;

      return {
        media: Icon ? <Icon /> : <QuestionMark />,
        title,
      };
    },
  },
});
