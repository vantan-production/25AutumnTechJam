"use client";

import Filter from "./filter";
import { useState } from "react";

import { FilterConditions } from "./filter";

type GenreTabProps = {
  onFilterOpen?: (isOpen: boolean) => void;
  onGenreChange?: (genre: string | null) => void;
  onFilterApply?: (conditions: FilterConditions) => void;
};

function GenreTab({
  onFilterOpen,
  onGenreChange,
  onFilterApply,
}: GenreTabProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [modaleOpen, setModaleOpen] = useState(false);

  const genreList = [
    "retro",
    "coffee",
    "sweets",
    "bakery",
    "breakfast",
    "morning",
  ];

  const handleModaleOpen = () => {
    setModaleOpen(true);
    onFilterOpen?.(true);
    onFilterOpen?.(true);
  };

  const handleModaleClose = () => {
    setModaleOpen(false);
    onFilterOpen?.(false);
    onFilterOpen?.(false);
  };

  const handleGenreClick = (index: number) => {
    const newSelectedIndex = index === selectedIndex ? null : index;
    setSelectedIndex(newSelectedIndex);
    onGenreChange?.(
      newSelectedIndex !== null ? genreList[newSelectedIndex] : null
    );
  };

  const genre = genreList.map((item, index) => (
    <div
      className="w-fit px-2 h-11 radius-1 box-shadow flex items-center justify-center flex-shrink-0 cursor-pointer transition-colors"
      style={{
        backgroundColor: selectedIndex === index ? "#050505" : "#ffffff",
        color: selectedIndex === index ? "#ffffff" : "#050505",
      }}
      key={index}
      onClick={() => handleGenreClick(index)}
    >
      {item}
    </div>
  ));

  return (
    <>
      <div className="w-[382px] h-13 mx-auto bg-beige radius-2 box-shadow flex items-center gap-2 px-2.5 left-1">
        <button onClick={handleModaleOpen}>
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z"
              stroke="#050505"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="w-[0.7px] h-8 bg-black flex-shrink-0"></div>
        <div className="flex gap-2 overflow-x-auto flex-2 min-w-0">{genre}</div>
      </div>
      {modaleOpen && (
        <>
          <div
            onClick={handleModaleClose}
            className="fixed inset-0 bg-black/50 z-30"
          />
          <Filter onClose={handleModaleClose} onFilterApply={onFilterApply} />
        </>
      )}
    </>
  );
}

export default GenreTab;
