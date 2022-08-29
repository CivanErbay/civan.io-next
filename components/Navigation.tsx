import React from "react";

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

  return (
    <>
      <div className="sticky top-0 z-50 flex justify-evenly">
        <button onClick={scrollIntoView}>Showcases</button>
      </div>
    </>
  );
});
