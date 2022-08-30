import style from "./Impressum.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="bottom-0 flex justify-between items-end w-full fixed lg:px-5">
        <div
          className={`relative flex justify-between items-center h-screen bg-emerald-400 lg:bg-transparent ${style.impressumLeft}`}
        >
          <div className="h-1/3 w-[2px] bg-black"></div>
          <h2>civan.erbay@web.de &#x2f;&#x2f; 2022</h2>
          <div className="h-1/3 w-[2px] bg-black"></div>
        </div>
        <div className="relative flex flex-col lg:flex-row">
          <div
            className={`flex items-center justify-between h-screen bg-emerald-400 lg:bg-transparent ${style.impressumRight}`}
          >
            <div className="h-1/3 w-[2px] bg-black"></div>
            <ul className={style.iconList}>
              <li>
                <a
                  href="https://twitter.com/navic_007?lang=de"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/twitter.svg"
                    layout="fill"
                    objectFit="contain"
                    alt="twitter"
                  ></Image>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/civan-erbay-009bb01ab/"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/linkedin.svg"
                    layout="fill"
                    objectFit="contain"
                    alt="linkedin"
                  ></Image>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/nvc.007/"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/instagram.svg"
                    layout="fill"
                    objectFit="contain"
                    alt="instagram"
                  ></Image>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/navic_007?lang=de"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/twitter.svg"
                    layout="fill"
                    objectFit="contain"
                    alt="twitter"
                  ></Image>
                </a>
              </li>
            </ul>
            <div className="h-1/3 w-[2px] bg-black"></div>
          </div>
        </div>
      </div>
    </>
  );
}
