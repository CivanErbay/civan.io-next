
export default function Footer() {
  return (
    <>
      <div className="bottom-0 flex justify-between items-end w-full fixed lg:px-5">
        <div
          className="relative flex items-center"
          style={{ writingMode: "tb-rl", transform: "rotate(-180deg)" }}
        >
          <div className="h-[150px] w-[2px] bg-black mb-6"></div>
          <h2>civan.erbay@web.de &#x2f;&#x2f; 2022</h2>
        </div>
        <div className="relative flex flex-col lg:flex-row">
          <div
            className="flex  items-center"
            style={{ writingMode: "tb-rl", transform: "rotate(-180deg)" }}
          >
            <div className="h-[150px] w-[2px] bg-black mb-6"></div>
            <h2 className="mb-6">contact</h2>
            <h2>legal notice</h2>
          </div>
        </div>
      </div>
    </>
  );
}
