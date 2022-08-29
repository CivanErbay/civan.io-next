import Image from "next/image";

export default function Landing() {
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

        <div className="flex flex-col">
          <h1 className="text-xl lg:text-7xl text-center lg:text-left">
            It&apos;s me <span className="text-gray-600 font-bold">Civan</span>
          </h1>
          <p className="text-l lg:text-2xl mt-3 lg:ml-2 text-center lg:text-left">
            your passionate & reliable frontend developer
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
