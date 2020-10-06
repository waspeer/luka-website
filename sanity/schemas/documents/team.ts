import { GiSpaceSuit } from 'react-icons/gi';

import { DocumentType } from '../../lib/data-types';

export const Team: DocumentType<'person'> = {
  name: 'team',
  title: 'Team',
  type: 'document',
  fields: [
    {
      hidden: true,
      name: 'name',
      type: 'string',
    },
    {
      name: 'members',
      title: 'Members',
      type: 'array',
      of: [{ type: 'person', icon: GiSpaceSuit }],
    },
  ],
};
