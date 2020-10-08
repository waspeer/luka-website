import { ObjectType } from '../../lib/data-types';

export const Person: ObjectType = {
  name: 'person',
  title: 'Person',
  type: 'object',
  fieldsets: [
    { name: 'name', title: 'Name', options: { columns: 2 } },
    { name: 'contact', title: 'Contact' },
  ],
  fields: [
    {
      fieldset: 'name',
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      fieldset: 'name',
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      fieldset: 'contact',
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    },
  ],
  preview: {
    select: {
      email: 'email',
      role: 'role',
      title: 'firstName',
    },
    prepare: ({ email, role, title }) => ({
      title,
      subtitle: `${role}, ${email}`,
    }),
  },
};
