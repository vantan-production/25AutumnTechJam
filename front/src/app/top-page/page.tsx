import { Card } from "../../../components/features/card";
import Header from "../../../components/layout/header";
import TabBar from "../../../components/layout/navbar";

export default function Page() {
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
    <div className="space-y-4">
      <Header />
      {repeatedItems.map((item, index) => (
        <Card
          key={index}
          shopName={item.shopName}
          businessHours={item.businessHours}
          parse={item.parse}
          explanation={item.explanation}
        />
      ))}
      <div className="fixed bottom-4 left-0 w-full z-50">
        <TabBar />
      </div>
    </div>
  );
}
