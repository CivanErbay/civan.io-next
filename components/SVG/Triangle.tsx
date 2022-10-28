//@ts-nocheck
import * as React from "react";
import { useEffect, useState } from "react";

const Triangle = (props: any) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.screen.width < 768 ? setIsMobile(true) : "";

    const paths = document.querySelectorAll("svg path");
    let i = 0;
    paths.forEach((item, index) => {
      i++;
      let pathLength: number = Math.round(item.getTotalLength());
      item.setAttribute("stroke-dasharray", pathLength);
      item.setAttribute("stroke-dashoffset", pathLength);
      //item.style.strokeWidth = 6;
      let speed = pathLength / 250;
      //console.log(speed)

      item.innerHTML =
        "<animate id='a" +
        i +
        "' attributeName='stroke-dashoffset' begin='1s' dur='" +
        speed +
        "s' to='0' fill='freeze' />";
    });
  }, []);

  return (
    <svg
      id="svg2"
      viewBox="0 0 364.88 319"
      version="1.1"
      stroke="#47B5FF"
      strokeWidth="2"
      fill="none"
      width="300px"
      height="300px"
    >
      <g id="layer1" transform="translate(-178.88 -328)">
        <g id="g3850">
          <path
            id="path2996"
            d="m206.01 644.89-26.01-52.53 154.81-262.38 123.99 209.35h-51.518l-72.478-118.95z"
          />
          <path
            id="path2998"
            d="m542.06 592.73-25.54 51.695-310.34 0.1116 128.61-224.01 22.981 37.482-74.37 134.98z"
          />
          <path
            id="path3002"
            d="m335 329.36h52l155 263-258.62 0.55357 29.625-53.554h146z"
          />
        </g>
      </g>
    </svg>
  );
};

export default Triangle;

//g means group of paths - works like somehow like a div, you can apply fill and stroke there to all including elements (except you overwrite the)
//d= means drawing

//Inside Path Data --> Capital letters are absolute, small letters are relative
//Z,z at the end of a drawing means its closing the shape at the point of beginning
//M moveTo --> at the beginning and it will never work with out the M
//L,l lineTo --> straigt line
//H,h horizontal Line --> needs only y Position
//V,v vertical Line --> needs only X Position
//C,c cubic-bezier --> two dots curve
//S,s reflecting cubic-bezier --> two dots curve mirrored
//Q,q quadratic bezier --> like cubic bezier but with only one control point between
//T,t reflecting quadratic-bezier --> quadratic-bezier mirrored
//A,a elliptical arc
