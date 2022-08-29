import style from "./Landing.module.css";
import React, { useEffect } from "react";

export default function Landing() {
  useEffect(() => {
    const textDisplay = document.getElementById("typewriter");
    const phrases = ["Hey there & welcome to my personal webspace, I'm Civan "];
    let i = 0;
    let j = 0;
    let currentPhrase: any = [];

    function loop() {

      if (textDisplay != null) {
        textDisplay.innerHTML = currentPhrase.join("");

        if (i < phrases.length) {
          if (j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j]);
            j++;
            textDisplay.innerHTML = currentPhrase.join("");
          } else return;
        }
      }
      setTimeout(loop, 150);
    }

    loop();
  });

  return (
    <>
      <div className="w-full relative h-screen flex items-center justify-center flex-col px-5 lg:flex-row">
        {/*      <Image
            src="/grid.png"
            layout="fill"
            objectFit="contain"
            alt="civan erbay"
            className="transform rotate-[90deg] left-0"
          ></Image> */}

        <div className="text-[30px] mb-4 leading-none lg:text-[200px] lg:mb-10 font-bold lg:font-normal">
          &lt;
        </div>

        <div className={`flex flex-col px-5`}>
          <h1
            id="typewriter"
            className={`text-xl lg:text-5xl text-justify lg:text-left ${style.typewriter}`}
          >
            {/*  Hey there & welcome to my personal webspace, I&apos;m{" "} Civan */}
          </h1>
          <p className="text-l lg:text-2xl mt-3 lg:ml-2 text-center lg:text-left">
            another passionate & reliable frontend developer
          </p>
        </div>

        <div className="text-[30px] leading-none flex mt-5 lg:mt-0 lg:text-[200px] font-bold lg:font-normal">
          <span>/ </span>
          <span>&gt;</span>
        </div>
      </div>
    </>
  );
}
