"use client";
import { Card } from "../../../components/features/card";
import Header from "../../../components/layout/header";
import TabBar from "../../../components/layout/navbar";
import { Shop } from "../../../api/shop";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { type shopRequest } from "../../../api/shop";

export default function Bookmark() {
  const { t } = useTranslation();
  const [shops, setShops] = useState<shopRequest[]>([]);

  const fetchShops = async () => {
      try {
        const res = await Shop();
        if (res.success && res.data.length > 0) {
          setShops(res.data);
        } else {
          setShops([]);
        }
      } catch (error) {
        console.error(error);
        setShops([]);
      }
    };
  

  useEffect(() => {
    fetchShops()
  }, []);

  const translatedShops = shops.map((shop) => ({
    ...shop,
    name: t(`shops.${shop.id}.name`, { defaultValue: shop.name }),
    description: t(`shops.${shop.id}.description`, {
      defaultValue: shop.description,
    }),
    address: t(`shops.${shop.id}.address`, { defaultValue: shop.address }),
  }));

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
        <div className="text-center py-8 text-black/60">{"noResults"}</div>
      )}
      <TabBar />
    </div>
  );
}
