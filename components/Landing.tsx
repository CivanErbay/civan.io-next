/* eslint-disable react-hooks/rules-of-hooks */
import styles from "./Landing.module.css";
import Image from "next/image";
import { gsap } from "gsap";

export default function Landing() {
  return (
    <>
      <div className="relative min-h-[750px] lg:h-screen w-full flex items-center justify-center flex-col lg:flex-row">
        <div
          className={`top-[0px] left-0 w-[240px] h-auto lg:w-[400px] lg:h-auto lg:top-[0px] lg:left-[30px] absolute rounded-md bg-white text-black px-6 py-4 lg:p-10 flex flex-col font-2xl opacity-0 ${styles.animate} `}
        >
          {/*  <div
            className={`lg:w-6 lg:h-6 bg-white lg:top-[15px] lg:right-[15px] absolute rounded-md ${styles.pulseAnim} `}
          ></div> */}
          <span>Sup Visitor!</span>
          <span className="text-4xl leading-none lg:text-5xl py-1 font-bold">
            I&apos;m <span className="font-bold ">Civan</span>
          </span>
          <span>welcome to my webspace</span>
          {/*  <span>
              Every science is, among other things, an ordering, a simplifying,
              a digesting of the incomprehensible for the spirit. HH
            </span> */}
        </div>

        <div
          className={`w-[200px] h-[165px] top-[240px] right-18 lg:w-[350px] lg:h-[350px] lg:right-[3px] lg:top-[295px] absolute rounded-md lg:rounded-full px-5 py-2 lg:p-8 overflow-hidden opacity-0 bg-white ${styles.animate2} ${styles.logo}`}
        >
          {/*   <div
            className={`lg:w-6 lg:h-6 bg-white lg:top-[74px] lg:left-[97px] absolute rounded-md ${styles.connector} `}
          ></div>
          <div
            className={`lg:w-6 lg:h-6 bg-white lg:top-[15px] lg:left-[160px] absolute rounded-md ${styles.connector} `}
          ></div> */}
          <Image
            className="civan"
            src="/pixel_me.png"
            /* layout="fill" */
            width={300}
            height={300}
            objectFit="contain"
            alt="civan erbay"
          ></Image>
        </div>

        <div
          className={`bottom-[120px] w-[230px] right-16 lg:bottom-auto lg:top-[310px] lg:left-[90px] lg:w-[350px] absolute rounded-md bg-white text-black py-3 lg:p-8 opacity-0 ${styles.animate3}`}
        >
          {/*  <div
            className={`lg:w-7 lg:h-7 bg-white lg:bottom-[20px] lg:left-[27px] absolute rounded-full`}
          ></div> */}
          <h4 className="lg:text-right font-2xl px-4">
            another passionate frontend developer
          </h4>
          <br />
          <br />
          <p className="lg:text-right font-2xl px-4">
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
