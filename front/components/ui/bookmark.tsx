"use client";
import { useState } from "react";
export function Bookmark() {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };
  return isBookmarked ? (
    <button
      className="flex justify-center items-center w-9 h-9 bg-beige rounded-1"
      onClick={handleBookmark}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="30"
        viewBox="0 0 21 26"
        fill="none"
      >
        <path
          d="M6 9.5H14.5M10.3333 5.5V14M19.6667 25L10.3333 18.3333L1 25V3.66667C1 2.95942 1.28095 2.28115 1.78105 1.78105C2.28115 1.28095 2.95942 1 3.66667 1H17C17.7072 1 18.3855 1.28095 18.8856 1.78105C19.3857 2.28115 19.6667 2.95942 19.6667 3.66667V25Z"
          stroke="#F6CAA3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  ) : (
    <button
      className="flex justify-center items-center w-9 h-9 bg-beige rounded-1"
      onClick={handleBookmark}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="30"
        viewBox="0 0 21 26"
        fill="none"
      >
        <path
          d="M19.6667 25L10.3333 18.3333L1 25V3.66667C1 2.95942 1.28095 2.28115 1.78105 1.78105C2.28115 1.28095 2.95942 1 3.66667 1H17C17.7072 1 18.3855 1.28095 18.8856 1.78105C19.3857 2.28115 19.6667 2.95942 19.6667 3.66667V25Z"
          fill="#F6CAA3"
        />
        <path
          d="M6 9.5H14.5M10.3333 5.5V14M19.6667 25L10.3333 18.3333L1 25V3.66667C1 2.95942 1.28095 2.28115 1.78105 1.78105C2.28115 1.28095 2.95942 1 3.66667 1H17C17.7072 1 18.3855 1.28095 18.8856 1.78105C19.3857 2.28115 19.6667 2.95942 19.6667 3.66667V25Z"
          stroke="#F6CAA3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default Bookmark;
