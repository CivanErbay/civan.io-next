import React, { useState } from "react";
import { animated, useSpring } from "react-spring";

export default function Description() {
  function Text() {
    const [flip, set] = useState(false);
    const props = useSpring({
      to: { opacity: 1 },
      from: { opacity: 0 },
      reset: true,
      reverse: flip,
      delay: 1000,
      fontSize: "2em",
      onRest: () => set(flip),
    });

    return (
      <animated.div style={props}>
        <h4 className="text-center font-2xl">
          another passionate & reliable frontend developer
        </h4>
      </animated.div>
    );
  }
  return (
    <>
      <Text />
    </>
  );
}
