//@ts-nocheck
import type { NextPage } from "next";
import Head from "next/head";
import Landing from "../components/Landing";
import Footer from "../components/Footer";
import Impressum from "../components/Impressum";
import { Showcases } from "../components/Showcases";
import { Navigation } from "../components/Navigation";
import { MutableRefObject, useState, useEffect, useRef } from "react";
import CircuitBoardMin from "../components/SVG/CircuitBoardMin";
import CircuitStraightLong from "../components/SVG/CircuitStraightLong";
import CroppedBoard from "../components/SVG/CroppedBoard";

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
        className={`flex flex-col items-center justify-center w-full relative max-w-sm md:max-w-5xl mx-auto inset-0 font-Trispace text-white px-5 z-10`} //absolute
      >
        <div className="absolute overflow-hidden z-10 w-full -top-1 md:left-0">
          <CircuitBoardMin />
        </div>

        {/*  <CircuitStraightLong /> */}

        <Navigation ref={showCaseRef} />
        <Landing />

        <CroppedBoard />

        <Showcases ref={showCaseRef} />

        <Impressum />

        <Footer />
      </div>
    </>
  );
};

export default Home;
