/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Description from "./Description";
import FadeIn from "./FadeIn";
import styles from "./Landing.module.css";
import { useTrail, a } from "@react-spring/web";
import Image from "next/image";

export default function Landing() {
  const Trail: React.FC<{ open: boolean; children: any }> = ({
    open,
    children,
  }) => {
    const items = React.Children.toArray(children);
    const trail = useTrail(items.length, {
      config: { mass: 5, tension: 3000, friction: 1000 },
      opacity: open ? 1 : 0,
      x: open ? 0 : 20,
      height: open ? 110 : 0,
      from: { opacity: 0, x: 20, height: 0 },
    });
    return (
      <div>
        {trail.map(({ height, ...style }, index) => (
          <a.div
            key={index}
            className={(styles.trailsText)}
            style={style}
          >
            <a.div style={{ height }}>
              {items[index]}
            </a.div>
          </a.div>
        ))}
      </div>
    );
  };

  const [open, set] = useState(true);
  return (
    <>
      <div className="w-full relative h-screen flex items-center justify-center flex-col px-5 lg:flex-row">
        <div
          className={`${styles.container} px-5`}
          onClick={() => set((state) => !state)}
        >
          <Trail open={open}>
            <span>Hey there!</span>
            <span>
              I&apos;m <span style={{ color: "darkgreen" }}>Civan</span>
            </span>
            <span>This is my</span>
            <span>
              <Image
                src="/web.svg"
                layout="fill"
                objectFit="contain"
                alt="civan erbay"
              ></Image>
            </span>
          </Trail>
        </div>
      </div>

      <FadeIn>
        <Description />
      </FadeIn>
    </>
  );
}
