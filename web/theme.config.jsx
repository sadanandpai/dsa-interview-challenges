const metaTags = (
  <>
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <meta
      name="description"
      content="A curated list of data structures and algorithms problems along with the solution in JavaScript to crack engineering interviews"
    />
    <meta
      property="og:url"
      content="hhttps://dsa-interview-challenges.vercel.app/"
    />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="JavaScript Code Challenges" />
    <meta
      property="og:description"
      content="A curated list of data structures and algorithms problems along with the solution in JavaScript to crack engineering interviews"
    />
    <meta
      name="image"
      property="og:image"
      content="hhttps://dsa-interview-challenges.vercel.app/programmer.svg"
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:domain" content="jscodechallenges.vercel.app" />
    <meta
      property="twitter:url"
      content="hhttps://dsa-interview-challenges.vercel.app/"
    />
    <meta name="twitter:title" content="JavaScript Code Challenges" />
    <meta
      name="twitter:description"
      content="A curated list of data structures and algorithms problems along with the solution in JavaScript to crack engineering interviews"
    />
    <meta
      name="twitter:image"
      content="hhttps://dsa-interview-challenges.vercel.app/programmer.svg"
    />
    <meta name="author" content="Sadanand Pai" />
  </>
);

export default {
  head: metaTags,
  logo: <span>DSA Interview Challenges</span>,
  project: {
    link: "https://github.com/sadanandpai/dsa-interview-challenges",
  },
  feedback: { content: null },
  toc: { component: null },
  gitTimestamp: null,
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
