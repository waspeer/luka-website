import App, { AppContext, AppProps } from 'next/app';

import { getPages, getSocialLinks } from '~model/sanity/sanity-client';
import { PageInfo, SocialLink } from '~model/types';
import { Layout } from '~view/layout';
import '~view/styles/globals.css';

interface CustomAppProps extends AppProps {
  pages: PageInfo[];
  socialLinks: SocialLink[];
}

function CustomApp({ Component, pageProps, pages, socialLinks }: CustomAppProps) {
  return (
    <Layout pages={pages} socialLinks={socialLinks}>
      <Component {...pageProps} />
    </Layout>
  );
}

CustomApp.getInitialProps = async (appContext: AppContext) => {
  const [appProps, pages, socialLinks] = await Promise.all([
    App.getInitialProps(appContext),
    getPages(),
    getSocialLinks(),
  ]);

  return { ...appProps, pages, socialLinks };
};

export default CustomApp;
