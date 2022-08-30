import React, { useEffect, useState } from "react";
import styles from "./Navigation.module.css";
import classNames from "classnames";

// eslint-disable-next-line react/display-name
export const Navigation = React.forwardRef<any>((props, ref) => {
  const scrollIntoView = () => {
    if (typeof ref === "function") {
      return;
    } else if (ref != null) {
      ref.current.scrollIntoView({
        block: "center",
        inline: "center",
        behavior: "smooth",
      });
    }
  };
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      setScrollY(window.scrollY);
      if (window.scrollY > 150) setAnimate(true);
      else setAnimate(false);
    });
  }, []);

  const [animate, setAnimate] = useState(false);

  return (
    <>
      <div className="sticky top-0 py-5 z-50 flex justify-end w-full">
        <div
          className={classNames(
            styles.animate,
            styles.navigation,
            animate && styles.grow
          )}
        >
          <button onClick={scrollIntoView}>Showcases</button>
          <button onClick={scrollIntoView}>Contact</button>
        </div>
      </div>
    </>
  );
});
