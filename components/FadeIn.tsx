// React
import { useState } from "react";

// Libs
import { Waypoint } from "react-waypoint";
import { useSpring, animated } from "react-spring";

const FadeIn = ({ children }: any, delay: number) => {
  const [inView, setInview] = useState(false);

  const transition = useSpring({
    delay: delay | 500,
    to: {
      y: !inView ? 24 : 0,
      opacity: !inView ? 0 : 1,
    },
  });
  return (
    <Waypoint onEnter={() => setInview(true)}>
      <animated.div style={transition}>{children}</animated.div>
    </Waypoint>
  );
};

export default FadeIn;
