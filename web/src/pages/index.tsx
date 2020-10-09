import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { OpenGraphImages } from 'next-seo/lib/types';

import {
  getLukaInfo,
  getNewsItems,
  getTeam,
  getVideos,
  getWebsiteSettings,
  imageUrlFor,
} from '~model/sanity/sanity-client';
import { LukaInfo, NewsItem, PageInfo, TeamMember, Video, WebsiteSettings } from '~model/types';
import { AboutSection } from '~view/sections/about';
import { ContactSection } from '~view/sections/contact';
import { LandingSection } from '~view/sections/landing';
import { MusicSection } from '~view/sections/music';
import { NewsSection } from '~view/sections/news';
import { ShowsSection } from '~view/sections/shows';
import { VideoSection } from '~view/sections/video';

/**
 * SECTION MAP
 */

type PropsWithPageInfo = Props & { pageInfo: PageInfo };

const sectionMap = new Map<string, (props: PropsWithPageInfo) => JSX.Element>([
  [
    '50b9016b-5e95-43bc-921b-9fee646cf7f0',
    ({ newsItems, pageInfo }) => <NewsSection id={pageInfo.name} items={newsItems} />,
  ],
  [
    '855ed417-34fa-4bb2-8bc7-3175d6f36cd5',
    ({ lukaInfo, pageInfo }) => <MusicSection id={pageInfo.name} releases={lukaInfo.discography} />,
  ],
  [
    'e5b85f12-6666-4796-8d16-65933dc101b4',
    ({ lukaInfo, pageInfo }) => <AboutSection bio={lukaInfo.bio} id={pageInfo.name} />,
  ],
  ['c02fb670-eefe-4829-be44-b2ba173b1e4a', ({ pageInfo }) => <ShowsSection id={pageInfo.name} />],
  [
    '31b57636-7533-48ec-87d7-78c89574f9c1',
    ({ pageInfo, team }) => <ContactSection id={pageInfo.name} team={team} />,
  ],
  [
    '1b49ee70-a1e3-467f-b89e-73a503ae9c7b',
    ({ pageInfo, videos }) => <VideoSection id={pageInfo.name} videos={videos} />,
  ],
]);

/**
 * SECTION COMPONENT
 */

function Section(props: PropsWithPageInfo) {
  const SectionComponent = sectionMap.get(props.pageInfo.id);

  if (!SectionComponent) {
    throw new Error(`Section with title ${props.pageInfo.title} has no component`);
  }

  return <SectionComponent {...props} />;
}

/**
 * INDEX PAGE
 */

interface Props {
  lukaInfo: LukaInfo;
  newsItems: NewsItem[];
  team: TeamMember[];
  videos: Video[];
  websiteSettings: WebsiteSettings;
}

const OPEN_GRAPH_IMAGE_WIDTH = 1200;
const OPEN_GRAPH_IMAGE_HEIGHT = 630;

export default function Home(props: Props) {
  const { ctas, description, mainImage, pages } = props.websiteSettings;
  const openGraphImage: OpenGraphImages = {
    width: OPEN_GRAPH_IMAGE_WIDTH,
    height: OPEN_GRAPH_IMAGE_HEIGHT,
    alt: 'Luka',
    url: imageUrlFor(mainImage)
      .width(OPEN_GRAPH_IMAGE_WIDTH)
      .height(OPEN_GRAPH_IMAGE_HEIGHT)
      .url()!,
  };

  return (
    <>
      <NextSeo
        description={description}
        title="Luka"
        openGraph={{
          description,
          images: [openGraphImage],
          locale: 'en_EN',
          site_name: 'Luka',
          title: 'Luka',
          type: 'website',
        }}
      />

      <LandingSection mainImage={mainImage} ctas={ctas} />

      {pages
        .filter(({ external }) => !external)
        .map((pageInfo) => (
          <Section {...props} key={pageInfo.id} pageInfo={pageInfo} />
        ))}
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const [lukaInfo, newsItems, team, videos, websiteSettings] = await Promise.all([
    getLukaInfo(),
    getNewsItems(),
    getTeam(),
    getVideos(),
    getWebsiteSettings(),
  ]);

  return {
    props: {
      lukaInfo,
      newsItems,
      team,
      videos,
      websiteSettings,
    },
  };
};
