"use client";
"use client";
import { Card } from "../../../components/features/card";
import Header from "../../../components/layout/header";
import TabBar from "../../../components/layout/navbar";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
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
  image_url?: string;
};

export default function Bookmark() {
  const [shops, setShops] = useState<shopRequest[]>([]);

  const loadShops = () => {
    const raw = Cookies.get("selectedShops");
    if (!raw) {
      setShops([]);
      return;
    }

    try {
      const parsed: shopRequest[] = JSON.parse(raw);
      const normalized = parsed.map((shop) => ({
        ...shop,
        image_urls: shop.image_urls ?? (shop.image_url ? [shop.image_url] : []),
      }));
      setShops(normalized);
    } catch (err) {
      console.error("failed to parse selectedShops", err);
      setShops([]);
    }
  };

  useEffect(() => {
    loadShops();

    // ブックマーク変更イベントを監視
    const handleBookmarkChange = () => {
      loadShops();
    };

    window.addEventListener("bookmarkChanged", handleBookmarkChange);

    return () => {
      window.removeEventListener("bookmarkChanged", handleBookmarkChange);
    };
  }, []);
  const removeShop = (id: number) => {
    setShops((prev) => {
      const next = prev.filter((shop) => shop.id !== id);
      Cookies.set("selectedShops", JSON.stringify(next));
      return next;
    });
  };

  return (
    <div className="bg-beige h-screen">
      <div className="h-36"></div>
      <Header
        getGenreTab={false}
        getLanguage={false}
        getSearch={true}
        getBackButton={false}
      />
      {shops.length > 0 ? (
        shops.map((shop) => (
          <div key={shop.id} className="py-1">
            <Card shop={shop} />
          </div>
        ))
      ) : (
        <p className="text-center text-black py-4 p">
          ブックマークした店舗はありません。
        </p>
      )}
      <TabBar />
    </div>
  );
}
