import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { FaQuestion } from 'react-icons/fa';

import { ObjectType } from '../../lib/data-types';
import { IconPicker } from '../../src/input-components/icon-picker';

library.add(fab);

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
    prepare: ({ iconName, title }) => ({
      media: iconName ? <FontAwesomeIcon icon={['fab', iconName]} /> : FaQuestion,
      title,
    }),
  },
};
