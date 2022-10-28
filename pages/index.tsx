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
import Triangle from "../components/SVG/Triangle";
import { gsap } from "gsap";
import CircuitStraightLong from "../components/SVG/CircuitStraightLong";

const Home: NextPage = () => {
  const showCaseRef = useRef<
    HTMLButtonElement | null | MutableRefObject<HTMLButtonElement>
  >(null);

  const [scrollPercent, setScrollPercent] = useState("");
  const [preloader, setPreloader] = useState(true);

  setTimeout(() => {
    setPreloader(false);
  }, 5300);

  useEffect(() => {
    gsap.fromTo(
      ".preloader",
      { scale: 1 },
      { scale: 0, duration: 1, delay: 4 }
    );

    gsap.fromTo(
      ".preloader-name",
      { scale: 0 },
      { scale: 1, duration: 1, delay: 0 }
    );

    gsap.fromTo(
      ".preloader-name",
      { scale: 1 },
      { scale: 0, duration: 1, delay: 2 }
    );

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
  };

  return (
    <>
      <Head>
        <title>Civan</title>
        <meta name="description" content="Civan Erbay Web Development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {preloader ? (
        <>
          <div className="preloader flex items-center justify-center h-screen relative">
            <Triangle />
          </div>
          <h1 className="preloader-name absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-5 font-Oswald text-[#47B5FF] font-light text-2xl">
            ci
          </h1>
        </>
      ) : (
        <div
          id="landing"
          className={`flex flex-col items-center justify-center w-full relative max-w-sm md:max-w-5xl mx-auto inset-0 font-Trispace text-white px-5 z-10 antialiased`} //absolute
        >
          <div className="absolute overflow-hidden w-full -top-1 md:left-0">
            <CircuitBoardMin />
          </div>

          {/*  <CircuitStraightLong /> */}

          <Navigation ref={showCaseRef} />
          <Landing />

          <Showcases ref={showCaseRef} />

          <Impressum />

          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
