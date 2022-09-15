import { useEffect, useState } from "react";
import styles from "./Impressum.module.css";

export default function Impressum() {
  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 1000);
  });
  const [animate, setAnimate] = useState(false);

  return (
    <>
      {" "}
      <div
        className={`fixed top-0 -left-10 flex justify-between items-center px-4 h-screen ${
          styles.impressumLeft
        } ${styles.animate} ${animate && styles.appearLeft}`}
      >
        <div className="opacity-0 md:opacity-1 h-1/3 w-[2px] bg-white"></div>
        <h2 className="text-xs">civan.erbay@web.de &#x2f;&#x2f; 2022</h2>
        <div className="opacity-0 md:opacity-1 h-1/3 w-[2px] bg-white"></div>
      </div>
      <div
        className={`fixed top-0 -right-10 flex justify-between items-center px-4 h-screen ${
          styles.impressumRight
        } ${styles.animate} ${animate && styles.appearRight}`}
      >
        <div className="opacity-0 md:opacity-1 h-1/3 w-[2px] bg-white"></div>

        <a
          href="https://twitter.com/navic_007?lang=de"
          aria-label="Twitter"
          target="_blank"
          rel="noreferrer"
        >
          <picture>
            <img
              className={styles.iconList}
              src="/twitter-white.png"
              alt="twitter"
            />
          </picture>
        </a>

        <a
          href="https://www.linkedin.com/in/civan-erbay-009bb01ab/"
          aria-label="Linkedin"
          target="_blank"
          rel="noreferrer"
        >
          <picture>
            <img
              className={styles.iconList}
              src="/linkedin-white.png"
              alt="twitter"
            />
          </picture>
        </a>

        <a
          href="https://www.instagram.com/nvc.007/"
          aria-label="Instagram"
          target="_blank"
          rel="noreferrer"
        >
          <picture>
            <img
              className={styles.iconList}
              src="/insta-white.png"
              alt="twitter"
            />
          </picture>
        </a>

        <a
          href="https://github.com/CivanErbay"
          aria-label="Github"
          target="_blank"
          rel="noreferrer"
        >
          <picture>
            <img
              className={styles.iconList}
              src="/github-white.png"
              alt="twitter"
            />
          </picture>
        </a>

        <div className="opacity-0 md:opacity-1 h-1/3 w-[2px] bg-white"></div>
      </div>
    </>
  );
}
