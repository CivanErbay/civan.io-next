import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="bottom-0 flex justify-between">
        <div className="w-[150px] h-[150px] relative lg:w-[300px] lg:h-[300px] lg:flex lg:justify-evenly items-end pb-4 hidden">
          <h2>civan erbay</h2> <h2>&#x2f;&#x2f; 2022</h2>
        </div>
        <div className="w-[150px] h-[150px] relative lg:w-[300px] lg:h-[300px]">
          <Image
            src="/pixel_me.png"
            layout="fill"
            objectFit="contain"
            alt="civan erbay"
          ></Image>
        </div>
        <div className="w-[150px] h-[150px] relative flex flex-col justify-evenly items-end pb-4 lg:w-[300px] lg:h-[300px] lg:flex-row ">
          <h2>contact</h2>
          <h2>legal notice</h2>
        </div>
      </div>
    </>
  );
}
