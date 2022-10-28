/* eslint-disable react-hooks/rules-of-hooks */
import styles from "./Landing.module.css";
import { gsap } from "gsap";
import { useEffect, useState } from "react";

export default function Landing() {


  useEffect(() => {
    gsap.fromTo(
      ".headline-1",
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 2 }
    );
    gsap.fromTo(
      ".headline-2",
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 5 }
    );
     gsap.fromTo(
       ".headline-3",
       { opacity: 0 },
       { opacity: 1, duration: 1, delay: 6 }
     );
  }, []);

  return (
    <>
      <div
        id="landingSection"
        className="relative min-h-[750px] md:h-[1000] w-full flex items-center justify-center flex-col md:flex-row"
      >
        <div
          className={`top-[0px] left-0 w-[230px] h-auto md:w-[550px] md:h-[350px] md:top-[60px] md:left-[70px] absolute px-6 py-4 md:p-2 flex flex-col justify-between font-2xl md:text-5xl`}
        >
          <span className="headline-1 relative">Sup Visitor!</span>
          <br />
          <span className="headline-2 relative">
            welcome to my webspace
          </span>

          <div className={`headline-3 ${styles.button} md:top-[80px]`}>
            <div className={styles.buttonLink}>
              <h1>
                I&apos;m <span className="font-bold text-left">Civan</span>
              </h1>
            </div>
            <div className={styles.extrudeLeft}></div>
            <div className={styles.extrudeLeftAlt}></div>
            <div className={styles.extrudeBottom}></div>
            <div className={styles.extrudeBottomAlt}></div>
          </div>
        </div>
      </div>
        {/*  <span>
              Every science is, among other things, an ordering, a simplifying,
              a digesting of the incomprehensible for the spirit. HH
            </span> */}

     {/*   <div
          className={`w-[200px] h-[165px] top-[240px] right-18 md:w-[350px] md:h-[350px] md:right-[3px] md:top-[325px] absolute rounded-md md:rounded-md px-5 py-2 md:p-8 opacity-0 ${styles.animate2} ${styles.logo}`}
        >
          <Image
            className="civan"
            src="/pixel_me.svg"
            layout="fill" 
            width={300}
            height={300}
            objectFit="contain"
            alt="civan erbay"
          ></Image> 
          
        </div> */}
      {/* 
        <div
          className={`bottom-[120px] w-[230px] right-16 md:bottom-auto md:top-[310px] md:left-[90px] md:w-[350px] absolute rounded-md text-white py-3 md:p-8 opacity-0 ${styles.animate3}`}
        >
          <h4 className="md:text-right font-2xl px-4">
            another passionate frontend developer
          </h4>
          <br />
          <br />
          <p className="md:text-right font-2xl px-4">
            currently employed at{" "}
            <a className="underline" href="https://denkwerk.com">
              denkwerk
            </a>
          </p>
        </div>
        */}
{/*       </div> */}
    </>
  );
}
