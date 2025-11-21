"use client";

import { useEffect, useState } from "react";

function Language() {
  const language = ["日本語", "English", "한국어", "中文"];
  const [index, setIndex] = useState(true);
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
  const handleClick = (selectIndex: number) => {
    setCount(selectIndex);
    setTimeout(() => {
      setIndex(true);
    }, 400);
  };
  const languageList = language.map((item, index) => (
    <div key={index} onClick={() => handleClick(index)}>
      {item}
      {count === index ? checkMark : null}
    </div>
  ));
  useEffect(() => {
    if (index) {
      setIndex(true);
    }
  }, [index]);

  return (
    <div className="w-[123px] h-fit radius-3 box-shadow bg-beige">
      {index === true ? (
        <div
          className="w-full h-10 flex items-center gap-1"
          onClick={() => setIndex(false)}
        >
          <p className="p">Language</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.5001 1.07141C11.0506 1.07141 13.9287 3.94948 13.9287 7.49998C13.9287 11.0505 11.0506 13.9286 7.5001 13.9286C3.9496 13.9286 1.07153 11.0505 1.07153 7.49998C1.07153 3.94948 3.9496 1.07141 7.5001 1.07141ZM8.45282 10.6757C7.81876 10.7281 7.18145 10.7281 6.54739 10.6757C6.60739 10.9311 6.67382 11.1673 6.74668 11.3841C6.90803 11.8695 7.08739 12.2153 7.25453 12.4268C7.33618 12.531 7.40239 12.5863 7.44739 12.6133L7.48018 12.6313L7.49946 12.6364L7.52003 12.6313L7.55282 12.6139C7.6275 12.5635 7.69277 12.5004 7.74568 12.4275C7.91282 12.2153 8.09218 11.8695 8.25353 11.3841C8.32639 11.1673 8.39282 10.9311 8.45282 10.6757ZM2.87603 9.7532C3.46004 10.9482 4.48275 11.8717 5.73096 12.3311C5.6555 12.1539 5.5873 11.9738 5.52653 11.7911C5.38663 11.3632 5.27496 10.9266 5.19225 10.4841C4.39667 10.3224 3.62033 10.0774 2.87603 9.7532ZM12.1248 9.7532C11.3887 10.0746 10.6135 10.3208 9.80732 10.4841C9.72464 10.9268 9.61297 11.3636 9.47303 11.7917C9.41132 11.979 9.34318 12.1586 9.26861 12.3304C10.5173 11.8713 11.5405 10.9478 12.1248 9.75255V9.7532ZM8.77039 6.7742C7.92724 6.88624 7.07297 6.88624 6.22982 6.7742C6.19309 7.63774 6.22339 8.50284 6.32046 9.3617C7.10435 9.45106 7.89586 9.45106 8.67975 9.3617C8.75111 8.7437 8.78652 8.12208 8.78582 7.49998C8.78582 7.25313 8.78068 7.01098 8.77039 6.77355V6.7742ZM2.72239 5.59198C2.40866 6.37817 2.29384 7.22963 2.3881 8.07084C3.20719 8.53993 4.08695 8.89404 5.0026 9.1232C4.92382 8.25699 4.90792 7.38621 4.95503 6.5177C4.17494 6.30398 3.42483 5.99297 2.72239 5.59198ZM12.2778 5.59198C11.5754 5.99297 10.8253 6.30398 10.0452 6.5177C10.0923 7.38621 10.0764 8.25699 9.9976 9.1232C10.913 8.89398 11.7926 8.53987 12.6115 8.07084C12.7056 7.22985 12.5908 6.37861 12.2772 5.59263L12.2778 5.59198ZM7.51039 2.36484L7.50332 2.36355L7.49046 2.36548L7.46603 2.37513C7.38349 2.42692 7.3115 2.49389 7.25389 2.57248C7.08675 2.78463 6.90803 3.13048 6.74603 3.6152C6.57246 4.13463 6.43232 4.77234 6.3391 5.4917C7.10933 5.59975 7.89088 5.59975 8.6611 5.4917C8.56789 4.7717 8.4271 4.13463 8.25418 3.6152C8.09218 3.13048 7.91346 2.78398 7.74632 2.57248C7.69341 2.49955 7.62814 2.43646 7.55346 2.38605L7.51039 2.36484ZM5.73096 2.66955C4.77559 3.01977 3.94558 3.64552 3.34596 4.46763C3.88789 4.77877 4.46839 5.03077 5.07846 5.21527C5.18132 4.46698 5.33368 3.7862 5.52653 3.20827C5.58868 3.02055 5.65682 2.84098 5.73096 2.66955ZM9.26925 2.66955C9.34296 2.84098 9.4111 3.02055 9.47368 3.20827C9.66653 3.78684 9.81889 4.46698 9.92175 5.21527C10.5256 5.03226 11.1068 4.78145 11.6542 4.46763C11.0546 3.64552 10.2246 3.01977 9.26925 2.66955Z"
              fill="#050505"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
          >
            <path
              d="M3.75 5.625L7.5 9.375L11.25 5.625"
              stroke="#050505"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      ) : (
        <div className="w-full h-fit flex flex-col gap-2">
          <div
            className="flex items-center gap-2 h-8"
            onClick={() => handleClick(0)}
          >
            <img src="/country/japan.png" alt="japan" className="w-6 h-6" />
            <div>{language[0]}</div>
            {count === 0 ? checkMark : null}
          </div>
          <div
            className="flex items-center gap-2 h-8"
            onClick={() => handleClick(1)}
          >
            <img src="/country/usa.png" alt="english" className="w-6 h-6" />
            <div>{language[1]}</div>
            {count === 1 ? checkMark : null}
          </div>
          <div
            className="flex items-center gap-2 h-8"
            onClick={() => handleClick(2)}
          >
            <img
              src="/country/southKorea.png"
              alt="korean"
              className="w-6 h-6"
            />
            <div>{language[2]}</div>
            {count === 2 ? checkMark : null}
          </div>
          <div
            className="flex items-center gap-2 h-8"
            onClick={() => handleClick(3)}
          >
            <img src="/country/china.png" alt="chinese" className="w-6 h-6" />
            <div>{language[3]}</div>
            {count === 3 ? checkMark : null}
          </div>
        </div>
      )}
    </div>
  );

  // return (
  //   <div className="w-[382px] h-13 mx-auto bg-beige radius-2 box-shadow flex items-center gap-2 px-2.5 left-1">
  //     {languageList}
  //   </div>
  // );
}

export default Language;
