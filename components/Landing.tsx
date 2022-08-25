import Image from "next/image";

export default function Landing() {
  return (
    <>
      <div className="w-full relative h-full flex items-center justify-center">
        <div className="text-[100px] lg:text-[300px] mr-10 mb-10 leading-none">
          {" "}
          &lt;{" "}
        </div>

        <div className="flex flex-col font-Trispace">
          <h1 className="text-xl lg:text-7xl">
            It's me <span className="text-gray-600 font-bold">Civan</span>
          </h1>
          <p className="text-l lg:text-2xl mt-3 lg:ml-2">
            a passionate & reliable frontend developer
          </p>
        </div>

        <div className="text-[100px] lg:text-[300px] ml-10 mb-10 leading-none">
          {" "}
          &gt;{" "}
        </div>
      </div>
      <div className="absolute bottom-0">
        <div className="w-[300px] h-[300px] relative lg:w-[300px] lg:h-[300px]">
          <Image
            src="/pixel_me.png"
            layout="fill"
            objectFit="contain"
            alt="civan erbay"
          ></Image>
        </div>
      </div>
    </>
  );
}
