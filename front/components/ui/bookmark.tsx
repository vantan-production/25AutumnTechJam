"use client";
import { useState, useEffect } from "react";
import { login } from "../../api/auth/login";
import { register } from "../../api/auth/register";
export function Bookmark() {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  useEffect(() => {
    const fetchBookmark = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/bookmark`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setIsBookmarked(data.isBookmarked);
    };
    fetchBookmark();
  }, []);
  if (login.success) {
    return (
      <button
        className="flex justify-center items-center w-9 h-9 bg-beige rounded-1"
        onClick={handleBookmark}
      ></button>
    );
  }
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
