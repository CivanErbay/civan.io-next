import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="relative w-full ">
   {/*    <div className="w-[150px] h-[150px] relative lg:w-[300px] lg:h-[300px] bottom-0 mx-auto">
        <Image
          src="/pixel_me.png"
          layout="fill"
          objectFit="contain"
          alt="civan erbay"
        ></Image>
      </div> */}
      <Link href={"./legal"}>
        <a className="absolute right-0 bottom-2">legal notice</a>
      </Link>
    </div>
  );
}
