import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>My Blog</title>
        <meta name="description" content="My blog"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main>My Blog</main>

    </div>
  );
};

export default Home;
