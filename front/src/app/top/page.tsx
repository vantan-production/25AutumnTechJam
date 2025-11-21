"use client";
import { Card } from "../../../components/features/card";
import Header from "../../../components/layout/header";
import TabBar from "../../../components/layout/navbar";

export default function ShopList() {
  const items = [
    {
      shopName: "shop-name",
      businessHours: "7:00-11:30",
      parse: "¥800~1000",
      explanation: "This shop is beautiful and traditional.",
    },
  ];

  const repeatedItems = Array.from({ length: 10 }, () => items[0]);
  return (
    <div className="bg-beige">
      <Header
        getGenreTab={false}
        getLanguage={false}
        getSearch={true}
        getBackButton={false}
      />
      {repeatedItems.map((item, index) => (
        <div className="py-1" key={index}>
          <Card
            shopName={item.shopName}
            businessHours={item.businessHours}
            parse={item.parse}
            explanation={item.explanation}
          />
        </div>
      ))}
      <div className="fixed bottom-3">
        <TabBar />
      </div>
    </div>
  );
}
