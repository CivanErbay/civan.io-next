import style from "./Impressum.module.css";

export default function Footer() {
  return (
    <>
      <div className="bottom-0 flex justify-between items-end w-full fixed lg:px-5">
        <div
          className={`relative flex items-center h-screen bg-emerald-400 lg:bg-transparent ${style.impressum}`}
        >
          <div className="h-[150px] w-[2px] bg-black mb-6"></div>
          <h2>civan.erbay@web.de &#x2f;&#x2f; 2022</h2>
        </div>
        <div className="relative flex flex-col lg:flex-row">
          <div
            className={`flex items-center h-screen bg-emerald-400 lg:bg-transparent ${style.impressum}`}
          >
            <div className="h-[150px] w-[2px] bg-black mb-6"></div>
            <h2>legal notice</h2>
          </div>
        </div>
      </div>
    </>
  );
}
