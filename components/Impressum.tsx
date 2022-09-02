import { useEffect, useState } from "react";
import styles from "./Impressum.module.css";
import classNames from "classnames";

export default function Impressum() {
  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 1000);
  });
  const [animate, setAnimate] = useState(false);

  return (
    <div
      className={`bottom-0 flex justify-between items-end w-full fixed lg:px-5 opacity-0 ${
        styles.animate
      } ${animate && styles.appear}`}
    >
      <div
        className={`relative flex justify-between items-center px-2 h-screen ${styles.impressumLeft}`}
      >
        <div className="h-1/3 w-[2px] bg-white"></div>
        <h2>civan.erbay@web.de &#x2f;&#x2f; 2022</h2>
        <div className="h-1/3 w-[2px] bg-white"></div>
      </div>
      <div className="relative flex flex-col lg:flex-row">
        <div
          className={`flex items-center justify-between h-screen px-2 ${styles.impressumRight}`}
        >
          <div className="h-1/3 w-[2px] bg-white"></div>

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
              <img className={styles.iconList} src="/insta-white.png" alt="twitter" />
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

          <div className="h-1/3 w-[2px] bg-white"></div>
        </div>
      </div>
    </div>
    /*  </div> */
  );
}
