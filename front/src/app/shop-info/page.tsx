"use client";

import Image from "next/image";
import { useState } from "react";
import Header from "../../../components/layout/header";
import Bookmark from "../../../components/ui/bookmark";

export default function ShopInfo() {
  const images = [
    "/img/img1.png",
    "/img/image2.png",
    "/img/img1.png",
    "/img/image2.png",
    "/img/img1.png",
  ];
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null && selectedImageIndex < images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  return (
    <div>
      <Header></Header>
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-white/70 flex items-center justify-center z-50">
          {selectedImageIndex !== null && selectedImageIndex > 0 && (
            <div
              className="absolute top-1/2 left-5 -translate-y-1/2 cursor-pointer"
              onClick={goToPrevious}
            >
              <svg
                className="w-9 h-9 text-black"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 8 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
                />
              </svg>
            </div>
          )}
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <Image
              src={images[selectedImageIndex]}
              width={250}
              height={250}
              alt={`image${selectedImageIndex + 1}`}
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl font-bold bg-black/80 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70"
            >
              ×
            </button>
          </div>
          {selectedImageIndex !== null &&
            selectedImageIndex < images.length - 1 && (
              <div
                className="absolute top-1/2 right-5 -translate-y-1/2 cursor-pointer"
                onClick={goToNext}
              >
                <svg
                  className="w-9 h-9 text-black"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 8 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                  />
                </svg>
              </div>
            )}
        </div>
      )}

      <div className="flex justify-center flex-col my-1">
        <div className="flex gap-2 overflow-x-auto px-2">
          <Image
            src={images[0]}
            width={110}
            height={110}
            alt="image1"
            className="w-[110px] h-[110px] cursor-pointer"
            onClick={() => handleImageClick(0)}
          />
          <Image
            src={images[1]}
            width={110}
            height={110}
            alt="image2"
            className="w-[110px] h-[110px] cursor-pointer"
            onClick={() => handleImageClick(1)}
          />
          <Image
            src={images[2]}
            width={110}
            height={110}
            alt="image1"
            className="w-[110px] h-[110px] cursor-pointer"
            onClick={() => handleImageClick(2)}
          />
          <Image
            src={images[3]}
            width={110}
            height={110}
            alt="image2"
            className="w-[110px] h-[110px] cursor-pointer"
            onClick={() => handleImageClick(3)}
          />
          <Image
            src={images[4]}
            width={110}
            height={110}
            alt="image1"
            className="w-[110px] h-[110px] cursor-pointer"
            onClick={() => handleImageClick(4)}
          />
        </div>
      </div>
      <div className="flex justify-center items-center my-1">
        <div className="bg-green h-fit w-[377px] radius-3">
        <div className="flex justify-end">
          <div className="p-2">
            <Bookmark></Bookmark>
            </div>
        </div>
          <div className="grid grid-cols-[4fr_6fr]  text-black pl-4 pb-3">
            <p className="font-bold text-xl">explanation</p>
            <p>
              A Showa-era cafe that will make you feel like you've traveled back
              in time
            </p>
          </div>

          <div className="bg-black h-[0.3px] w-[360px] mx-auto"></div>

          <div className="grid grid-cols-[4fr_6fr]  text-black pl-4 pt-3 pb-3">
            <p className="font-bold text-xl">
              Distance from<br></br>
              Nagoya Station
            </p>
            <p>6 minutes walk</p>
          </div>

          <div className="bg-black h-[0.3px] w-[360px] mx-auto"></div>
          <div className="grid grid-cols-[4fr_6fr]  text-black pl-4 pt-3 pb-3">
            <p className="font-bold text-xl">
              Distance from<br></br>
              Nagoya Station
            </p>
            <p>6 minutes walk</p>
          </div>

          <div className="bg-black h-[0.3px] w-[360px] mx-auto"></div>

          <div className="grid grid-cols-[4fr_6fr]   text-black pl-4 pt-3 pb-3">
            <p className="font-bold text-xl">Address</p>
            <p>
              4-1-4 Taiko, Nakamura-ku,<br></br>
              Nagoya City,Aichi<br></br>
              Prefecture, 453-0801
            </p>
          </div>
          <div className="grid grid-cols-[4fr_6fr]   text-black pl-4 pt-3 pb-3">
            <p className="font-bold text-xl">Address</p>
            <p>
              4-1-4 Taiko, Nakamura-ku,<br></br>
              Nagoya City,Aichi<br></br>
              Prefecture, 453-0801
            </p>
          </div>

          <div className=" bg-black h-[0.3px] w-[360px] mx-auto"></div>
          <div className=" bg-black h-[0.3px] w-[360px] mx-auto"></div>

          <div className="grid grid-cols-[4fr_6fr]   text-black pl-4 pt-3 pb-3">
            <p className="font-bold text-xl">Business hours</p>
            <p>AM 7:30 ～PM 15:00</p>
          </div>
          <div className="grid grid-cols-[4fr_6fr]   text-black pl-4 pt-3 pb-3">
            <p className="font-bold text-xl">Business hours</p>
            <p>AM 7:30 ～PM 15:00</p>
          </div>

          <div className="bg-black h-[0.3px] w-[360px] mx-auto"></div>
          <div className="bg-black h-[0.3px] w-[360px] mx-auto"></div>

          <div className="grid grid-cols-[4fr_6fr]  text-black pl-4 pt-3 pb-3">
            <p className="font-bold text-xl">budget</p>
            <p>¥ 1,000 ~ 5,000</p>
          </div>
          <div className="grid grid-cols-[4fr_6fr]  text-black pl-4 pt-3 pb-3">
            <p className="font-bold text-xl">budget</p>
            <p>¥ 1,000 ~ 5,000</p>
          </div>

          <div className="bg-black h-[0.3px] w-[360px] mx-auto"></div>
          <div className="bg-black h-[0.3px] w-[360px] mx-auto"></div>

          <div className="grid grid-cols-[4fr_6fr]   text-black pl-4 pt-3 pb-2">
            <p className="font-bold text-xl">Tell</p>
            <p>052-452-5113</p>
          </div>
        </div>
      </div>
    </div>
  );
}

