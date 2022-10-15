//@ts-nocheck
import * as React from "react";
import { useEffect, useRef } from "react";
import styles from "./CircuitBoard.module.css";

const CircuitBoard = () => {
  let pathRef = useRef();

  useEffect(() => {
    if (pathRef.current) {
      let pathLength = pathRef.current.getTotalLength();

      // The start position of the drawing
      pathRef.current.style.strokeDasharray = pathLength;
      // Hide the triangle by offsetting dash. Remove this line to show the triangle before scroll draw
      pathRef.current.style.strokeDashoffset = pathLength;

      drawFunction(pathRef.current, pathLength);
    }
  });

  const drawFunction = (path, pathLength) => {
    let scrollpercent =
      (document.body.scrollTop + document.documentElement.scrollTop) /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight);

    let draw = pathLength * scrollpercent;

   // console.log(draw);

    // Reverse the drawing (when scrolling upwards)
    path.style.strokeDashoffset = pathLength - draw;
  };

  return (
    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 z-10">
      <svg width="44" height="1459" viewBox="0 0 44 1459">
        <path
          ref={pathRef}
          fill="none"
          stroke="black"
          strokeWidth="1"
          d="M42.9861 1418.9C51.0714 1458.28 8.38693 1477.92 0.442694 1434C-2.03003 1415.34 6.27 1406.94 15.0453 1386.46C17.6323 1380.54 18.8827 1374.89 17.9755 1343.19C17.8179 1314.71 17.6794 1235.61 17.5028 1221.66C17.5028 1221.66 17.4646 1126.8 17.4405 1126.31C17.1127 1112.88 17.5294 907.456 17.0834 833.676C17.5002 802.986 16.8674 741.842 16.5561 615.579C16.5625 602.884 16.7658 347.055 16.7658 347.055C17.6832 303.56 16.6082 249.536 16.6336 216.022C16.6336 216.022 16.4824 16.6085 16.4862 0L25.2361 0C25.2361 0 25.3834 156.217 25.3834 156.22C25.5308 169.53 25.6211 287.369 25.724 296.754C25.724 296.754 26.3136 664.791 26.3136 664.801C26.3136 664.803 26.5931 799.022 26.5931 799.022C26.09 829.635 27.1026 1021.8 26.8104 1107.3C26.3288 1414.96 25.3034 1376.71 33.6149 1394.78C36.6848 1402.85 41.2656 1409.98 42.9861 1418.9ZM30.5856 1414.33C27.1751 1410.96 22.8269 1413.56 18.9983 1413.62C18.7036 1413.95 18.1076 1414.6 17.8052 1414.93C15.2791 1415.99 13.4341 1418.67 11.5039 1420.99C11.5344 1421.4 11.6043 1422.2 11.6437 1422.6L10.744 1422.27C9.75925 1427 8.73636 1433.04 11.5649 1437C13.2854 1439.42 14.7352 1442.52 17.1609 1443.73L16.6654 1444.28C27.7927 1452.63 37.3672 1440.53 36.6924 1428.17C36.6924 1422.5 34.0342 1417.32 30.5856 1414.33Z"
        />
      </svg>
    </div>
  );
};

export default CircuitBoard;
