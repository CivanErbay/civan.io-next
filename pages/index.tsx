import type { NextPage } from "next";
import Head from "next/head";
import Landing from "../components/Landing";
import Footer from "../components/Footer";
import Showcases from "../components/Showcases";
import { useEffect, useState } from "react";
import { useScrollDirection } from "react-use-scroll-direction";

const Home: NextPage = () => {
  const [offset, setOffset] = useState(0);

  const { isScrollingUp, scrollDirection } = useScrollDirection();

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);

    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  console.log(scrollDirection);

  return (
    <div className="flex flex-col items-center justify-center max-w-6xl mx-auto lg:h-screen absolute inset-0 font-Trispace">
      <Head>
        <title>Civan</title>
        <meta name="description" content="Civan Erbay Web Development" />
        <link rel="icon" href="/favicon.ico" />
        <div>{isScrollingUp && "Up"}</div>
      </Head>
      <Landing />
      <Footer />
      <Showcases />
    </div>
  );
};

export default Home;
