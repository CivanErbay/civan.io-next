import type { NextPage } from "next";
import Head from "next/head";
import Landing from "../components/Landing";
import Footer from "../components/Footer";
import Impressum from "../components/Impressum";
import { Showcases } from "../components/Showcases";
import { Navigation } from "../components/Navigation";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import FadeIn from "../components/FadeIn";
import { setTimeout } from "timers";
import  CircuitBoard  from "../components/SVG/CircuitBoard"


const Home: NextPage = () => {
  const showCaseRef = useRef<
    HTMLButtonElement | null | MutableRefObject<HTMLButtonElement>
  >(null);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 10);

  /*   setTimeout(() => {
      const board = document.getElementsByTagName("path")
      console.log(board)
    }, 2000);
 
   console.log(document.querySelectorAll("svg path")); */
  });

  const [animate, setAnimate] = useState(false);


  

  return (
    <div id="landing" 
      className={`flex flex-col items-center justify-center relative max-w-5xl w-0 mx-auto inset-0 font-Trispace shadow-2xl bg-sky-800 text-white px-5 ${
        "animate"
      } ${animate && "wideLanding"}`} //absolute
    >

  <div className="absolute overflow-hidden top-0 left-0 w-full">    
    <CircuitBoard/>
  </div>


      <Head>
        <title>Civan</title>
        <meta name="description" content="Civan Erbay Web Development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation ref={showCaseRef} />
      <Landing />

      <FadeIn>
        <Showcases ref={showCaseRef} />
      </FadeIn>

      <Impressum />

      <Footer />
    </div>
  );
};

export default Home;

{/*<script type="text/ecmascript">
<![CDATA[
	const path = document.getElementById("pathone").getAttribute('opacity');
	console.log(path)
]]>
	console.log('blub')
</script>*/}