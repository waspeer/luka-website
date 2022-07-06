import S from '@sanity/desk-tool/structure-builder';
import { GiSpermWhale, GiPartyFlags, GiBabyFace, GiSixEyes } from 'react-icons/gi';
import { RiTeamFill } from 'react-icons/ri';

const structure = () =>
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
      // S.documentTypeListItem('page'),
    ]);

export default structure;
