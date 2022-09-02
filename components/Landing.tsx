/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import Description from "./Description";
import FadeIn from "./FadeIn";
import styles from "./Landing.module.css";
import { useTrail, a } from "@react-spring/web";
import Image from "next/image";

export default function Landing() {
  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 1000);
    setTimeout(() => {
      setAnimate2(true);
    }, 1500);
  });

  const [animate, setAnimate] = useState(false);
  const [animate2, setAnimate2] = useState(false);

  return (
    <>
      <div className="relative h-screen w-full flex items-center justify-center flex-col px-7 lg:flex-row text-white">
        <div className="px-5 flex w-full justify-evenly items-center">
          <div
            className={`w-[450px] flex flex-col text-xl opacity-0 ${
              styles.animate
            } ${animate && styles.appear}`}
          >
            <span>Hey there!</span>
            <span className="text-9xl py-4 font-bold">
              I&apos;m <span className="font-bold ">Civan</span>
            </span>
            <span>welcome to my webspace</span>
          </div>
          <div
            className={`w-[150px] h-[150px] relative lg:w-[250px] lg:h-[250px] opacity-0 border-8 rounded-full bg-cyan-900 overflow-hidden drop-shadow-2xl ${
              styles.animate
            } ${animate2 && styles.appear}`}
          >
            <Image
              src="/pixel_me.png"
              layout="fill"
              objectFit="contain"
              alt="civan erbay"
            ></Image>
          </div>
        </div>
      </div>

      <FadeIn>
        <Description />
      </FadeIn>
    </>
  );
}
