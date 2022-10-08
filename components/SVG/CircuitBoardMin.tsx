//@ts-nocheck
import * as React from "react";
import { useEffect } from "react";
import styles from "./CircuitBoard.module.css";

const CircuitBoard = (props: any) => {
  useEffect(() => {
    /*  const paths = document.querySelectorAll("svg path");

    paths.forEach((item, index) => {
      let pathLength: number = Math.round(item.getTotalLength());
      item.setAttribute("stroke-dasharray", pathLength);
      item.setAttribute("stroke-dashoffset", pathLength);
      //item.style.strokeWidth = 6;

      item.innerHTML =
        "<animate  attributeName='stroke-dashoffset' begin='0s' dur='5s' to='0' fill='freeze' />";
      //console.log(index, pathLength, item.innerHTML, speed)
    });

    setTimeout(() => {
      paths.forEach((item) => {
        item.style.fill = "white";
      });
    }, 2000); */
   /*  drawSVG(2); */
  }, []);

  const drawSVG = (pathNr) => {
    const paths = document.querySelectorAll("svg path");
    const item = paths[pathNr];
    let pathLength: number = Math.round(item.getTotalLength());
    item.setAttribute("stroke-dasharray", pathLength);
    item.setAttribute("stroke-dashoffset", pathLength);
    //item.style.strokeWidth = 6;

    item.style.display = "block";

    setTimeout(() => {
      item.style.fill = "white";
    }, 3000);
    item.innerHTML =
      "<animate attributeName='stroke-dashoffset' begin='0s' dur='6s' to='0' fill='freeze' />";
  };

  return (
    <div className={styles.svgWrapper}>
      <span onClick={() => drawSVG(1)} className={styles.pulse}></span>
      <svg viewBox="0 0 2560 1709" width="2560" height="1708.497">
        <g stroke="#ffffff" strokeOpacity="1">
          <path 
            d="M35 0h13c8 12 5-2 4 71l-4 125-1 59c1 4 0 7-1 11v33l-3 101c-2 31 1 22 7 30l13 13c3 3 6 7 10 8h81c82 0 72-2 83 8l37 36 45 43c31 31 26 27 41 26h44l255 1c4-1 8 0 12-2l16-10c14-6 32 7 25 23-2 6-12 12-22 9-8-2-18-12-25-13H507l-164-1c-5-2-10-8-41-38l-58-56-13-13c-3-3-6-6-10-6l-139-1c-13 2-16-1-20-4-12-13-27-24-27-30-1-6 1-74 1-75l2-106a11645 11645 0 0 0 5-232L35 0m659 557c-4 1-7 4-7 9-1 2 1 5 1 8 9 10 22 0 18-11l-5-5c-2-1-4-2-7-1z"
            className={styles.pathClass}
          />
          <path
            d="M127 0h13l22 21c21 22 27 24 27 31l-2 71c1 3-1 6-1 10l1 16c-1 44-3 39 4 45l73 69 54 51a15174 15174 0 0 0 140 135c33 30 23 26 41 26l100 1h110c5-1 12-8 13-11v-20l-1-5c-4-6-37-35-39-37-16-19 15-41 31-20 5 9 0 18-3 29-2 5 10 12 16 18 8 9 5 5 6 35 0 6-5 9-8 12-11 9-1 6-82 6l-159-1c-6-1-32-30-49-45l-56-53-96-93-57-55c-3-3-42-39-45-44-5-6-2-5-3-19l1-35 1-73c0-19 7-7-45-57l-7-8m561 392c0 6 4 9 11 8 3-2 7-4 7-8h1l-1-7c-5-8-21-8-18 7z"
            className={styles.pathClass}
          />
          <path
            d="M743 0h10l-2 335c2 5 7 8 9 10l9 9 10 9c11 12 17 11 15 25 0 6 1 12-1 17-8 10-22 18-21 24 1 14 10 19 0 34h-1c-4 4-10 5-16 5-8-1-18-11-16-21 1-4 4-8 8-11l8-7 23-22c8-7 6-4 7-19-1-6 0-7-8-14l-23-22c-10-10-13-11-13-18l1-42V46l1-46m9 443c-3 3-1 8-1 11 0 5 7 9 14 5 5-4 5-11 3-14-3-5-12-7-16-2zm9-443h10c0 1-2 52 0 67l-1 132v126c0 6 0 7 10 16l21 19c17 20 30 9 38 27 4 17-14 27-27 20-13-6-10-16-11-29-1-10-2-5-22-26-7-6-18-15-19-21V205l1-17v-18l-1-124c2-17-1-14 1-26V0m52 387 1 7c2 3 3 6 10 5 2 0 3-2 4-3l3-3v-7c-4-11-19-7-18 1z"
            className={styles.pathClass}
          />
        </g>
      </svg>
{/* 
      <svg viewBox="0 0 2560 1709" width="2560" height="1708.497">
        <g stroke="#ffffff" strokeOpacity="1">
          <path
            d="M35 0h13c8 12 5-2 4 71l-4 125-1 59c1 4 0 7-1 11v33l-3 101c-2 31 1 22 7 30l13 13c3 3 6 7 10 8h81c82 0 72-2 83 8l37 36 45 43c31 31 26 27 41 26h44l255 1c4-1 8 0 12-2l16-10c14-6 32 7 25 23-2 6-12 12-22 9-8-2-18-12-25-13H507l-164-1c-5-2-10-8-41-38l-58-56-13-13c-3-3-6-6-10-6l-139-1c-13 2-16-1-20-4-12-13-27-24-27-30-1-6 1-74 1-75l2-106a11645 11645 0 0 0 5-232L35 0m659 557c-4 1-7 4-7 9-1 2 1 5 1 8 9 10 22 0 18-11l-5-5c-2-1-4-2-7-1z"
            className={styles.pathClass}
          />
          <path
            d="M127 0h13l22 21c21 22 27 24 27 31l-2 71c1 3-1 6-1 10l1 16c-1 44-3 39 4 45l73 69 54 51a15174 15174 0 0 0 140 135c33 30 23 26 41 26l100 1h110c5-1 12-8 13-11v-20l-1-5c-4-6-37-35-39-37-16-19 15-41 31-20 5 9 0 18-3 29-2 5 10 12 16 18 8 9 5 5 6 35 0 6-5 9-8 12-11 9-1 6-82 6l-159-1c-6-1-32-30-49-45l-56-53-96-93-57-55c-3-3-42-39-45-44-5-6-2-5-3-19l1-35 1-73c0-19 7-7-45-57l-7-8m561 392c0 6 4 9 11 8 3-2 7-4 7-8h1l-1-7c-5-8-21-8-18 7z"
            className={styles.pathClass}
          />
          <path
            d="M743 0h10l-2 335c2 5 7 8 9 10l9 9 10 9c11 12 17 11 15 25 0 6 1 12-1 17-8 10-22 18-21 24 1 14 10 19 0 34h-1c-4 4-10 5-16 5-8-1-18-11-16-21 1-4 4-8 8-11l8-7 23-22c8-7 6-4 7-19-1-6 0-7-8-14l-23-22c-10-10-13-11-13-18l1-42V46l1-46m9 443c-3 3-1 8-1 11 0 5 7 9 14 5 5-4 5-11 3-14-3-5-12-7-16-2zm9-443h10c0 1-2 52 0 67l-1 132v126c0 6 0 7 10 16l21 19c17 20 30 9 38 27 4 17-14 27-27 20-13-6-10-16-11-29-1-10-2-5-22-26-7-6-18-15-19-21V205l1-17v-18l-1-124c2-17-1-14 1-26V0m52 387 1 7c2 3 3 6 10 5 2 0 3-2 4-3l3-3v-7c-4-11-19-7-18 1z"
            className={styles.pathClass}
          />
        </g>
      </svg> */}
    </div>
  );
};

export default CircuitBoard;

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
