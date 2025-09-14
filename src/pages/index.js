import { NextSeo } from 'next-seo';
import useSiteConfig from '@shared/hooks/useSiteConfig';

import Layout from '../layout/layout';

import Home from '@features/home';

export default function HomePage() {
  const config = useSiteConfig();

  return (
    <Layout>
      <NextSeo
        openGraph={{
          title: config.title,
          url: config.url,
          description: config.description,
        }}
      />
      <Home />
    </Layout>
  );
}
