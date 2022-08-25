import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="absolute bottom-0">
        <div className="w-[150px] h-[150px] relative lg:w-[300px] lg:h-[300px]">
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
