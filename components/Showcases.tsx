import Link from "next/link";
import React from "react";

// eslint-disable-next-line react/display-name
export const Showcases = React.forwardRef((props, ref) => {
  return (
    <div
      ref={(element) => {
        if (typeof ref === "function") {
          ref(element);
        } else if (ref != null) {
          ref.current = element;
        }
      }}
      className="w-full relative h-screen flex items-center justify-center flex-col px-5"
    >
      <h2 className="font-bold">Showcases</h2>
      <div className="flex flex-col">
        {/* <Link href="/">deka.de (denkwerk)</Link>
        <Link href="/">swm.de (denkwerk)</Link>
        <Link href="/">Emmortalise</Link>
        <Link href="/">TellZy</Link>
        <Link href="/">MundZuMund-Festival</Link> */}
      </div>
    </div>
  );
});
