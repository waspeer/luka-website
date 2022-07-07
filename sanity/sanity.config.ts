import { GiBabyFace, GiSpermWhale, GiPartyFlags, GiSixEyes } from 'react-icons/gi';
import { RiTeamFill } from 'react-icons/ri';
import { createConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

import { schemaTypes } from './schemas';

export default createConfig({
  name: 'default',
  title: 'Luka',

  projectId: 'zl2qg45f',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.documentListItem().icon(GiBabyFace).id('aboutLuka').schemaType('aboutLuka'),
            S.documentListItem()
              .icon(GiSpermWhale)
              .id('websiteSettings')
              .schemaType('websiteSettings')
              .title('Website Settings'),
            S.documentTypeListItem('news').icon(GiPartyFlags),
            S.documentTypeListItem('video').icon(GiSixEyes),
            S.documentListItem().id('team').schemaType('team').icon(RiTeamFill).title('Team'),
          ]),
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
