import type { ObjectType } from '../../lib/data-types';

export const Person: ObjectType = {
  name: 'person',
  title: 'Person',
  type: 'object',
  fieldsets: [
    { name: 'name', title: 'Name', options: { columns: 2 } },
    { name: 'company', title: 'Professional Information', options: { columns: 2 } },
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
      fieldset: 'company',
      name: 'companyName',
      title: 'Company',
      type: 'string',
    },
    {
      fieldset: 'company',
      name: 'companyUrl',
      title: 'Company URL',
      type: 'url',
    },
    {
      fieldset: 'company',
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
      companyName: 'companyName',
      email: 'email',
      role: 'role',
      title: 'firstName',
    },
    prepare: ({ companyName, email, role, title }) => ({
      title,
      subtitle: `${companyName ? `${companyName} | ` : ''}${role}, ${email}`,
    }),
  },
};
