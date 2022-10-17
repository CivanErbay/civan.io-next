/* eslint-disable react-hooks/rules-of-hooks */
import styles from "./Landing.module.css";
import Image from "next/image";
import { gsap } from "gsap";

export default function Landing() {
  return (
    <>
      <div
        id="landingSection"
        className="relative md:h-auto pb-10 w-full md:flex-row bg-green-400"
      >
        <div
          className={`h-auto md:w-3/5 md:h-auto flex flex-col font-2xl p-10 opacity-0 ${styles.animate} `}
        >
          <div className="flex flex-col mb-10 ml-10">
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

          <Image
            className="civan"
            src="/pixel_me.svg"
            /* layout="fill" */
            width={200}
            height={200}
            objectFit="contain"
            alt="civan erbay"
          ></Image>

          <div className="md:text-right font-2xl mt-10">
            <h4>another passionate frontend developer</h4>
            <p>
              currently employed at{" "}
              <a className="underline" href="https://denkwerk.com">
                denkwerk
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
