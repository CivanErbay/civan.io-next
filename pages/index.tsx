import type { NextPage } from "next";
import Head from "next/head";
import Landing from "../components/Landing";
import Footer from "../components/Footer";
import { Showcases } from "../components/Showcases";
import { Navigation } from "../components/Navigation";
import { MutableRefObject, useRef } from "react";

const Home: NextPage = () => {
  const showCaseRef = useRef<
    HTMLButtonElement | null | MutableRefObject<HTMLButtonElement>
  >(null)
  

  return (
    <div
      className="flex flex-col items-center justify-center max-w-6xl mx-auto inset-0 font-Trispace" //absolute
    >
      <Head>
        <title>Civan</title>
        <meta name="description" content="Civan Erbay Web Development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation ref={showCaseRef} />
      <Landing />

      <Showcases ref={showCaseRef} />
      <Footer />
    </div>
  );
};

export default Home;
