import type { NextPage } from "next";
import Head from "next/head";
import Landing from "../components/Landing";
import Footer from "../components/Footer";
import Showcases from "../components/Showcases";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-6xl mx-auto lg:h-screen absolute inset-0 font-Trispace">
      <Head>
        <title>Civan</title>
        <meta name="description" content="Civan Erbay Web Development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
      <Footer />
      <Showcases  />
    </div>
  );
};

export default Home;
