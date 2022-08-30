import React, { useEffect, useState } from "react";

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
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      setScrollY(window.scrollY);
    });
  }, []);
  return (
    <>
      {scrollY < 100 ? (
        <div className="sticky top-0 py-5 z-50 flex justify-end w-full">
          <div className="w-1/3 flex justify-evenly">
            <button onClick={scrollIntoView}>Showcases</button>
            <button onClick={scrollIntoView}>Contact</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
});
