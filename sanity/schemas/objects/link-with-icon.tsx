import React from 'react';
import * as icons from 'react-icons/fa';

import { ObjectType } from '../../lib/data-types';
import { IconPicker } from '../../src/input-components/icon-picker';

export const LinkWithIcon: ObjectType = {
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
      inputComponent: IconPicker,
      validation: (Rule) => Rule.required().error('Icon is required'),
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
    prepare: ({ iconName, title }) => {
      const Icon = icons[iconName as keyof typeof icons];
      const QuestionMark = icons.FaQuestion;

      return {
        media: Icon ? <Icon /> : <QuestionMark />,
        title,
      };
    },
  },
};
