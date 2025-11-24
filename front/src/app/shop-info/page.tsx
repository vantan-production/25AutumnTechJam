"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "../../../components/layout/header";
import Bookmark from "../../../components/ui/bookmark";
import Navbar from "../../../components/layout/navbar";
import { Shop } from "../../../api/shop";
import { travelMap } from "../../../api/lib/travelMap";
import { useSearchParams } from "next/navigation";
import ShopDetailHead from "../../../components/features/shop-detail-head";
import { travelMapResponse } from "../../../api/lib/travelMap";
import { ShopInfo } from "../../../api/shop-info";
import { useTranslation } from "react-i18next";
import { Omiyage } from "../../../components/features/omiyage";

type shopRequest = {
  id: number;
  is_cafe: boolean;
  name: string;
  description: string;
  image_url: string;
  min_budget: number | null;
  opens_at: string;
  closes_at: string;
  address: string;
  phone_number: string;
  latitude: number;
  longitude: number;
};
export default function ShopInfoPage() {
  const searchParams = useSearchParams();
  const shopId = searchParams.get("id");
  type shopRequest = {
    id: number;
    is_cafe: boolean;
    name: string;
    description: string;
    image_urls: string[];
    min_budget: number | null;
    opens_at: string;
    closes_at: string;
    address: string;
    phone_number: string;
    latitude: number;
    longitude: number;
  };
  const [shopInfo, setShopInfo] = useState<shopRequest | null>(null);
  const [loading, setLoading] = useState(true);
  const [travelTime, setTravelTime] = useState<travelMapResponse | null>(null);

  const fetchMapData = async (address: string) => {
    if (!address) {
      return;
    }

    try {
      const data = await travelMap(address);
      setTravelTime(data);
    } catch (error) {
      console.error("Error fetching travel time:", error);
    }
  };

  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (shopInfo && selectedImageIndex < shopInfo.image_urls.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const fetchShop = async () => {
    try {
      const res = await Shop();
      if (res.success && res.data.length > 0) {
        const selectedShop = shopId
          ? res.data.find((s) => s.id === parseInt(shopId))
          : res.data[0];

        if (selectedShop) {
          setShopInfo(selectedShop);
          setSelectedImageIndex(0); // 初期化
          await fetchMapData(selectedShop.address);
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShop();
  }, [shopId]);

  useEffect(() => {
    if (shopInfo?.address) {
      fetchMapData(shopInfo.address);
    }
  }, [shopInfo?.address]);

  const { t } = useTranslation();

  const translatedShopInfo = shopInfo
    ? {
        ...shopInfo,
        name: t(`shops.${shopInfo.id}.name`, { defaultValue: shopInfo.name }),
        description: t(`shops.${shopInfo.id}.description`, {
          defaultValue: shopInfo.description,
        }),
        address: t(`shops.${shopInfo.id}.address`, {
          defaultValue: shopInfo.address,
        }),
      }
    : null;

  return (
    <div className="bg-beige h-screen">
      <div className="h-36"></div>
      <Header
        getGenreTab={false}
        getLanguage={false}
        getSearch={false}
        getBackButton={true}
      />
      {shopInfo && <ShopDetailHead shop={shopInfo} />}
      {shopInfo && shopInfo.image_urls.length > 0 && isModalOpen && (
        <div className="fixed inset-0 bg-white/70 flex items-center justify-center z-50">
          {selectedImageIndex > 0 && (
            <div
              className="absolute top-1/2 left-5 -translate-y-1/2 cursor-pointer z-10"
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
              src={shopInfo.image_urls[selectedImageIndex]}
              width={250}
              height={250}
              alt={shopInfo.name}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl font-bold bg-black/80 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70 z-10"
            >
              ×
            </button>
          </div>
          {selectedImageIndex < shopInfo.image_urls.length - 1 && (
            <div
              className="absolute top-1/2 right-5 -translate-y-1/2 cursor-pointer z-10"
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

      <div className="flex justify-center flex-col my-2 mx-1">
        <div className="flex gap-2 overflow-x-auto px-2">
          {shopInfo && shopInfo.image_urls.length > 0 ? (
            shopInfo.image_urls.map((image, index) => (
              <Image
                key={index}
                src={image}
                width={110}
                height={110}
                alt={shopInfo.name}
                className="w-[110px] h-[110px] object-cover flex-shrink-0 cursor-pointer rounded"
                onClick={() => handleImageClick(index)}
              />
            ))
          ) : (
            <div className="w-[110px] h-[110px]">
              <p className="text-black p">画像がありません</p>
            </div>
          )}
        </div>
      </div>
      <Omiyage />
      <div className="flex flex-col justify-center items-center my-2">
        <div className="bg-green h-fit w-[377px] radius-3">
          <div className="flex justify-end">
            <div className="p-2">
              <Bookmark></Bookmark>
            </div>
          </div>
          <div className="grid grid-cols-[4fr_6fr]  text-black pl-4 pb-3">
            <p className="font-bold h3">explanation</p>
            <p className="p">{shopInfo?.description}</p>
          </div>

          <div className="bg-black h-[0.3px] w-[360px] mx-auto"></div>

          <div className="grid grid-cols-[4fr_6fr] text-black pl-4 pt-3 pb-3">
            <p className="font-bold text-xl">From Nagoya Station</p>
            <div className="p">
              {travelTime && (
                <>
                  <p>Walking: {travelTime.walk.time} minutes</p>
                </>
              )}
            </div>
          </div>

          <div className="bg-black h-[0.3px] w-[360px] mx-auto"></div>

          <div className="grid grid-cols-[4fr_6fr]   text-black pl-4 pt-3 pb-3">
            <p className="font-bold h3">Address</p>
            <p className="p">{shopInfo?.address}</p>
          </div>

          <div className=" bg-black h-[0.3px] w-[360px] mx-auto"></div>

          <div className="grid grid-cols-[4fr_6fr]   text-black pl-4 pt-3 pb-3">
            <p className="font-bold h3">Business hours</p>
            <p className="p">
              {shopInfo?.opens_at} ～ {shopInfo?.closes_at}
            </p>
          </div>

          <div className="bg-black h-[0.3px] w-[360px] mx-auto"></div>

          <div className="grid grid-cols-[4fr_6fr]  text-black pl-4 pt-3 pb-3">
            <p className="font-bold h3">budget</p>
            <p className="p">{`¥${shopInfo?.min_budget}~`}</p>
          </div>

          <div className="bg-black h-[0.3px] w-[360px] mx-auto"></div>

          <div className="grid grid-cols-[4fr_6fr]   text-black pl-4 pt-3 pb-2">
            <p className="font-bold h3">Tell</p>
            <p className="p">{shopInfo?.phone_number}</p>
          </div>
        </div>
      </div>
      <div className="h-20"></div>
      <Navbar />
    </div>
  );
}
