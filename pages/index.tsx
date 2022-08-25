import type { NextPage } from "next";
import Head from "next/head";
import Landing from "../components/Landing";
import Footer from "../components/Footer";
import Showcases from "../components/Showcases";

const Home: NextPage = () => {
  //Finish page trigger logic
  const triggerTransition = (e: any) => {
    console.log(e.deltaY);
    /*   e.deltaY > 0 ?  */
  };

  return (
    <div
      className="flex flex-col items-center justify-center max-w-6xl mx-auto lg:h-screen absolute inset-0 font-Trispace"
      onWheel={(e) => triggerTransition(e)}
    >
      <Head>
        <title>Civan</title>
        <meta name="description" content="Civan Erbay Web Development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
      <Footer />
      <Showcases />
    </div>
  );
};

export default Home;
