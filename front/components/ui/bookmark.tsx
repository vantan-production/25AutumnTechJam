"use client";
import { useState, useEffect } from "react";
import type { MouseEvent } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { ShopDetail, type shopRequest } from "../../api/shop";

type bookmarkProps = {
  shopId: number;
  onLoginRequired?: () => void;
};

function readSelectedShops(): shopRequest[] {
  const raw = Cookies.get("selectedShops");
  if (!raw) {
    return [];
  }

  try {
    return JSON.parse(raw);
  } catch (error) {
    console.error("ブックマークの読み込みに失敗しました。", error);
    return [];
  }
}

function writeSelectedShops(shops: shopRequest[]) {
  if (shops.length === 0) {
    Cookies.remove("selectedShops");
    return;
  }
  Cookies.set("selectedShops", JSON.stringify(shops));
}

export function Bookmark({ shopId, onLoginRequired }: bookmarkProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [modal, setModal] = useState(false);

  const syncBookmarkState = (shops: shopRequest[]) => {
    setIsBookmarked(shops.some((shop) => shop.id === shopId));
  };

  useEffect(() => {
    syncBookmarkState(readSelectedShops());
  }, [shopId]);

  const addBookmark = async () => {
    const res = await ShopDetail(shopId);
    if (!res.success || !res.data) {
      throw new Error(res.message ?? "ブックマークの追加に失敗しました。");
    }

    const current = res.data;
    const list = readSelectedShops();
    const withoutCurrent = list.filter((shop) => shop.id !== current.id);
    const next = [...withoutCurrent, current];

    writeSelectedShops(next);
    syncBookmarkState(next);
  };

  const removeBookmark = () => {
    const list = readSelectedShops();
    const next = list.filter((shop) => shop.id !== shopId);
    writeSelectedShops(next);
    syncBookmarkState(next);
  };

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (isSubmitting) return;

    if (isBookmarked) {
      setModal(true);
      return;
    }

    addBookmark();

    try {
      setIsSubmitting(true);
      if (isBookmarked) {
        removeBookmark();
        setModal(true);
      } else {
        await addBookmark();
      }
    } catch (error) {
      console.error("ブックマークの追加/削除に失敗しました。", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button
        className="flex justify-center items-center w-9 h-9 bg-beige rounded-1 disabled:opacity-60"
        onClick={handleClick}
        disabled={isSubmitting}
        aria-pressed={isBookmarked}
      >
        {isBookmarked ? (
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
        ) : (
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
        )}
      </button>
      {modal && (
        <div
          className="py-5 w-[300px] h-[150px] bg-white border-[0.5px] border-black rounded-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 fixed"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <h2 className="text-black text-center h4">
            ブックマークを削除しますか？
          </h2>
          <div className="flex justify-center gap-3 items-center mx-auto h-[100px]">
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeBookmark();
                setModal(false);
              }}
              className="bg-green text-white p-2 rounded-2 p h-10 w-[100px]"
            >
              削除
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setModal(false);
              }}
              className="bg-black text-white border-2 p border-black p-2 rounded-2"
            >
              キャンセル
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Bookmark;
