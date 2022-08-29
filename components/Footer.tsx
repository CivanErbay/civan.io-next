import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="w-[150px] h-[150px] relative lg:w-[300px] lg:h-[300px] bottom-0">
        <Image
          src="/pixel_me.png"
          layout="fill"
          objectFit="contain"
          alt="civan erbay"
        ></Image>
      </div>
    </>
  );
}