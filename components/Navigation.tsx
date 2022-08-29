import React from "react";

// eslint-disable-next-line react/display-name
export const Navigation = React.forwardRef((props, ref) => {

   const scrollIntoView = () => {
      ref.current.scrollIntoView({
       block: "center",
       inline: "center",
       behavior: "smooth",
     });
   };

    return (
      <>
        <div className="sticky top-0 z-50 flex justify-evenly">
          <button onClick={scrollIntoView}>Showcases</button>
        </div>
      </>
    );
});