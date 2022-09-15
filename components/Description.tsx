import React from "react";

export default function Description() {
  return (
    <div className="px-7 border-4 md:border-8 p-5 bg-cyan-900 rounded-md">
      <h4 className="text-center font-2xl px-5">
        another passionate & reliable frontend developer
      </h4>
      <p className="text-center font-2xl px-5">
        currently employed at{" "}
        <a className="underline" href="https://denkwerk.com">
          denkwerk
        </a>
      </p>
    </div>
  );
}
