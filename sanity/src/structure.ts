import S from '@sanity/desk-tool/structure-builder';
import { GiSpermWhale, GiPartyFlags, GiBabyFace } from 'react-icons/gi';
import { RiTeamFill } from 'react-icons/ri';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.documentListItem().icon(GiBabyFace).id('aboutLuka').schemaType('aboutLuka'),
      S.documentListItem()
        .icon(GiSpermWhale)
        .id('landing')
        .schemaType('landing')
        .title('Landing Page'),
      S.documentTypeListItem('news').icon(GiPartyFlags),
      S.documentListItem().id('team').schemaType('team').icon(RiTeamFill).title('Team'),
    ]);
