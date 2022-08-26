import Link from "next/link";
import React from "react";

interface refProps {
  value: string;
  // other props with basic types
}

// eslint-disable-next-line react/display-name
export const Showcases = () => {
  return (
    <div className="w-full relative h-screen flex items-center justify-center flex-col px-5">
      <h2>Showcases</h2>
      <div className="flex flex-col">
        <Link href="/">Emmortalise</Link>
        <Link href="/">Emmortalise</Link>
        <Link href="/">Emmortalise</Link>
      </div>
    </div>
  );
};
