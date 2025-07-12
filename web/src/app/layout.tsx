import 'nextra-theme-docs/style.css';

import { Head, Search } from 'nextra/components';
import { Layout, Navbar } from 'nextra-theme-docs';

import { Metadata } from 'next';
import { ReactNode } from 'react';
import { getPageMap } from 'nextra/page-map';

export const metadata: Metadata = {
  title: 'DSA Interview Challenges',
  description: 'A curated list of data structures and algorithms problems along with the solution to crack engineering interviews',
  keywords: ['dsa', 'data structures', 'algorithms', 'interview', 'challenges'],
  authors: [
    {
      name: 'Sadanand Pai',
      url: 'https://github.com/sadanandpai',
    },
  ],

  openGraph: {
    url: 'https://dsa-interview-challenges.vercel.app/',
    type: 'website',
    title: 'DSA Interview Challenges',
    description: 'A curated list of data structures and algorithms problems along with the solution to crack engineering interviews',
    images: [
      {
        url: 'https://dsa-interview-challenges.vercel.app/programmer.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://dsa-interview-challenges.vercel.app/',
    title: 'DSA Interview Challenges',
    description: 'A curated list of data structures and algorithms problems along with the solution to crack engineering interviews',
    images: ['https://dsa-interview-challenges.vercel.app/programmer.png'],
  },
  creator: 'Sadanand Pai',
  publisher: 'Sadanand Pai',
};

const navbar = <Navbar logo={<strong>DSA Interview Challenges</strong>} projectLink="https://github.com/sadanandpai/dsa-interview-challenges" />;

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/sadanandpai/dsa-interview-challenges/tree/main/web"
          search={<Search placeholder="Search" />}
          feedback={{ content: null }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
