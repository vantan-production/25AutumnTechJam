"use client";
import { Card } from "../../../components/features/card";
import Header from "../../../components/layout/header";
import TabBar from "../../../components/layout/navbar";
import { Shop } from "../../../api/shop";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

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

export default function ShopList() {
  const { t } = useTranslation();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [shops, setShops] = useState<shopRequest[]>([]);
  const fetchShops = async () => {
    try {
      const res = await Shop();
      if (res.success && res.data.length > 0) {
        setShops(res.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchShops();
  }, []);

  const handleFilteredShopsChange = (filteredShops: any[]) => {
    setShops(filteredShops);
  };

  const translatedShops = shops.map((shop) => ({
    ...shop,
    name: t(`shops.${shop.id}.name`, { defaultValue: shop.name }),
    description: t(`shops.${shop.id}.description`, {
      defaultValue: shop.description,
    }),
    address: t(`shops.${shop.id}.address`, { defaultValue: shop.address }),
  }));

  return (
    <div className="bg-beige h-screen w-full">
      <div className="h-[258px] bg-beige"></div>
      <div className="bg-beige">
        <Header
          getGenreTab={true}
          getLanguage={true}
          getSearch={true}
          getBackButton={false}
          onFilterOpen={setIsFilterOpen}
          onFilteredShopsChange={handleFilteredShopsChange}
        />
        {translatedShops.length > 0 ? (
          translatedShops.slice(0, 20).map((item) => (
            <div className="py-1" key={item.id}>
              <Card shop={item} />
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-black/60">
            {t("noResults", { defaultValue: "検索結果がありません" })}
          </div>
        )}
        {!isFilterOpen && (
          <div className="fixed bottom-3">
            <TabBar />
          </div>
        )}
      </div>
      <div className="h-[80px] bg-beige"></div>
    </div>
  );
}
