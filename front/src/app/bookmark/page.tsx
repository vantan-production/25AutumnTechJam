"use client";
import { Card } from "../../../components/features/card";
import Header from "../../../components/layout/header";
import TabBar from "../../../components/layout/navbar";
import { useState, useEffect } from "react";

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

export default function Bookmark() {
  const [shops, setShops] = useState<shopRequest[]>([]);

  useEffect(() => {
    const mockShops: shopRequest[] = [
      {
        id: 1,
        is_cafe: true,
        name: "shop-name",
        description: "This shop is beautiful and traditional.",
        image_url:
          "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&h=400&fit=crop",
        min_budget: 800,
        opens_at: "7:00",
        closes_at: "11:30",
        address: "",
        phone_number: "",
        latitude: 0,
        longitude: 0,
      },
    ];
    setShops(mockShops);
  }, []);

  return (
    <div className="bg-beige h-screen">
      <div className="h-36"></div>
      <Header
        getGenreTab={false}
        getLanguage={false}
        getSearch={true}
        getBackButton={false}
      />
      {shops.map((shop) => (
        <div key={shop.id} className="py-1">
          <Card shop={shop} />
        </div>
      ))}
      <TabBar />
    </div>
  );
}
