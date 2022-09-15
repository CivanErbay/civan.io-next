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

  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      if (window.scrollY > 150) setAnimate(true);
      else setAnimate(false);
    });

    setTimeout(() => {
      setAppear(true);
    }, 1400);

  });

  const [animate, setAnimate] = useState(false);
  const [appear, setAppear] = useState(false);

  return (
    <>
      <div
        className={`sticky top-0 opacity-0 py-5 z-50 flex w-screen lg:justify-end lg:w-full -translate-y-10 ${
          styles.appear
        } ${appear && styles.swipein}`}
      >
        <div
          className={`border-4 md:border-8 rounded-md p-5 bg-cyan-900 ${classNames(
            styles.animate,
            styles.navigation,
            animate && styles.hide
          )}`}
        >
          <button className="pr-4" onClick={scrollIntoView}>Showcases</button>
          <button onClick={scrollIntoView}>Contact</button>
        </div>
      </div>
    </>
  );
});
