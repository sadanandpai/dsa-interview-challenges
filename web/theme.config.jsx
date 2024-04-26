import { useRouter } from "next/router";

const metaTags = (
  <>
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <meta
      name="description"
      content="A curated list of data structures and algorithms problems along with the solution to crack engineering interviews"
    />
    <meta
      property="og:url"
      content="https://dsa-interview-challenges.vercel.app/"
    />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="DSA Intereview Challenges" />
    <meta
      property="og:description"
      content="A curated list of data structures and algorithms problems along with the solution to crack engineering interviews"
    />
    <meta
      name="image"
      property="og:image"
      content="https://dsa-interview-challenges.vercel.app/programmer.png"
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:domain" content="jscodechallenges.vercel.app" />
    <meta
      property="twitter:url"
      content="https://dsa-interview-challenges.vercel.app/"
    />
    <meta name="twitter:title" content="DSA Intereview Challenges" />
    <meta
      name="twitter:description"
      content="A curated list of data structures and algorithms problems along with the solution to crack engineering interviews"
    />
    <meta
      name="twitter:image"
      content="https://dsa-interview-challenges.vercel.app/programmer.png"
    />
    <meta name="author" content="Sadanand Pai" />
  </>
);

const config = {
  head: metaTags,
  logo: <span>DSA Interview Challenges</span>,
  docsRepositoryBase:
    "https://github.com/sadanandpai/dsa-interview-challenges/tree/main/web",
  search: {
    placeholder: "Search",
  },
  project: {
    link: "https://github.com/sadanandpai/dsa-interview-challenges",
  },
  feedback: { content: null },
  toc: { component: null },
  gitTimestamp: null,
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath === "/") {
      return {
        titleTemplate: "DSA Interview Challenges",
      };
    }

    return {
      titleTemplate: "%s - DSA Interview Challenges",
    };
  },
  footer: {
    text: (
      <span>
        <a
          href="https://github.com/sadanandpai/dsa-interview-challenges/blob/main/LICENSE"
          target="_blank"
        >
          MIT License - Copyright (c) 2024
        </a>
      </span>
    ),
  },
};

export default config;
