import { useState } from "react";

function Language() {
  const language = ["日本語", "English", "한국어", "中文"];
  const [count, setCount] = useState<number | null>(null);
  const checkMark = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
    >
      <path
        d="M18.3334 5.5L8.25008 15.5833L3.66675 11"
        stroke="#050505"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  const cliikes = (index: number) => {
    setCount(index === count ? null : index);
  };
  const languageList = language.map((item, index) => (
    <div key={index} onClick={() => cliikes(index)}>
      {item}
      {count === index ? checkMark : null}
    </div>
  ));

  return (
    <div className="w-[382px] h-13 mx-auto bg-beige radius-2 box-shadow flex items-center gap-2 px-2.5 left-1">
      {languageList}
    </div>
  );
}

export default Language;
