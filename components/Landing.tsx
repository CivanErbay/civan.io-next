/* eslint-disable react-hooks/rules-of-hooks */
import styles from "./Landing.module.css";
import Image from "next/image";
import { gsap } from "gsap";


export default function Landing() {
  return (
    <>
      <div id="landingSection" className="relative min-h-[750px] md:h-[1000] w-full flex items-center justify-center flex-col md:flex-row">
        <div
          className={`top-[0px] left-0 w-[240px] h-auto md:w-[400px] md:h-auto md:top-[40px] md:left-[70px] absolute rounded-md tet-white  px-6 py-4 md:p-2 flex flex-col font-2xl opacity-0 ${styles.animate} `}
        >
          {/*  <div
            className={`md:w-6 md:h-6 bg-white md:top-[15px] md:right-[15px] absolute rounded-md ${styles.pulseAnim} `}
          ></div> */}
          <span>Sup Visitor!</span>
          <span className="text-4xl leading-none md:text-5xl py-1 font-bold">
            I&apos;m <span className="font-bold ">Civan</span>
          </span>
          <span>welcome to my webspace</span>
          {/*  <span>
              Every science is, among other things, an ordering, a simplifying,
              a digesting of the incomprehensible for the spirit. HH
            </span> */}
        </div>

        <div
          className={`w-[200px] h-[165px] top-[240px] right-18 md:w-[350px] md:h-[350px] md:right-[3px] md:top-[325px] absolute rounded-md md:rounded-md px-5 py-2 md:p-8 opacity-0 ${styles.animate2} ${styles.logo}`}
        >
          {/*   <div
            className={`md:w-6 md:h-6 bg-white md:top-[74px] md:left-[97px] absolute rounded-md ${styles.connector} `}
          ></div>
          <div
            className={`md:w-6 md:h-6 bg-white md:top-[15px] md:left-[160px] absolute rounded-md ${styles.connector} `}
          ></div> */}
          <Image
            className="civan"
            src="/pixel_me.svg"
            /* layout="fill" */
            width={300}
            height={300}
            objectFit="contain"
            alt="civan erbay"
          ></Image>
        </div>

        <div
          className={`bottom-[120px] w-[230px] right-16 md:bottom-auto md:top-[310px] md:left-[90px] md:w-[350px] absolute rounded-md text-white py-3 md:p-8 opacity-0 ${styles.animate3}`}
        >
          {/*  <div
            className={`md:w-7 md:h-7 bg-white md:bottom-[20px] md:left-[27px] absolute rounded-full`}
          ></div> */}
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
      </div>
    </>
  );
}
