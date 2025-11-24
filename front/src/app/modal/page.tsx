"use client";
import { useState } from "react";
import TabBar from "../../../components/layout/navbar";
import ModalPage from "../../../components/modal-components/modal-page";

export default function Page() {
  const [isBookmarkClick, setIsBookmarkClick] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const isModalOpen = () => {
    if (!isSubmit) {
      setIsBookmarkClick(!isBookmarkClick);
    }
  };

  const onSubmition = () => {
    setIsSubmit(true);
    setIsBookmarkClick(false);
  };

  return (
    <div className="w-screen h-screen bg-beige">
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <h1 className="text-2xl font-bold text-black mb-4">
          モーダルテストページ
        </h1>
        <button
          onClick={isModalOpen}
          className="px-6 py-3 bg-green text-white rounded-lg hover:bg-green/80 transition-colors"
        >
          モーダルを開く
        </button>
      </div>
      <ModalPage
        isClick={isBookmarkClick}
        onClickSubmit={() => onSubmition()}
        onCloseModal={() => isModalOpen()}
      />
      <TabBar onBookmarkClick={isModalOpen} />
    </div>
  );
}
