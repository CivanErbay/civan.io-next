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

const Home: NextPage = () => {
  const showCaseRef = useRef<
    HTMLButtonElement | null | MutableRefObject<HTMLButtonElement>
  >(null);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 10);

    setTimeout(() => {
      const board = document.getElementById("white-board")
      console.log(board)
    }, 5000);
 

  });

  const [animate, setAnimate] = useState(false);


  

  return (
    <div id="landing" 
      className={`flex flex-col items-center justify-center max-w-5xl w-0 mx-auto inset-0 font-Trispace shadow-2xl bg-sky-800 text-white px-5 ${
        "animate"
      } ${animate && "wideLanding"}`} //absolute
    >

    {/*} <div className="boardStyle">
            <img
                src="/board-white.svg"
              />
    </div> */}
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