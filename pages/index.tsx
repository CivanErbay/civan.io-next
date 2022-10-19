//@ts-nocheck
import type { NextPage } from "next";
import Head from "next/head";
import Landing from "../components/Landing";
import Footer from "../components/Footer";
import Impressum from "../components/Impressum";
import { Showcases } from "../components/Showcases";
import { Navigation } from "../components/Navigation";
import { MutableRefObject, useState, useEffect, useRef } from "react";
import CircuitChord from "../components/SVG/CircuitChord";
import CircuitStraightLong from "../components/SVG/CircuitStraightLong";

const Home: NextPage = () => {
  const showCaseRef = useRef<
    HTMLButtonElement | null | MutableRefObject<HTMLButtonElement>
  >(null);

  const [scrollPercent, setScrollPercent] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = (event) => {
    setScrollPercent(
      (document.body.scrollTop + document.documentElement.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight)
    );
    //console.log("scrollPercent", scrollPercent);
  };

  return (
    <>
      <Head>
        <title>Civan</title>
        <meta name="description" content="Civan Erbay Web Development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        id="landing"
        className={`flex flex-col w-full relative max-w-sm md:max-w-5xl top-0 mx-auto inset-0 font-Trispace text-white px-5 z-10`} //absolute
      >
        <div className="absolute w-full top-20 md:left-36 rotate-90 z-10">
          <CircuitChord />
        </div>

        {/*  <CircuitStraightLong /> */}
        <Navigation ref={showCaseRef} />

        <div className="flex justify-end items-end h-[80vh]">
          <Landing />
        </div>

        <Showcases ref={showCaseRef} />

        <Impressum />

        <Footer />
      </div>
    </>
  );
};

export default Home;
