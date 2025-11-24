import Image from "next/image";
import { type shopRequest, Shop } from "../../api/shop";
import { useEffect, useState } from "react";

export function Omiyage() {
  const [omiyageShops, setOmiyageShops] = useState<shopRequest[]>([]);
  const [selectedShopId, setSelectedShopId] = useState<number | null>(null);

  const handleClick = (shopId: number) => {
    setSelectedShopId(selectedShopId === shopId ? null : shopId);
  };

  useEffect(() => {
    const fetchShops = async () => {
      const shops = await Shop();
      if (shops.success && shops.data.length > 0) {
        const filteredOmiyageShops = shops.data.filter((shop) => {
          const isOmiyage = shop.is_cafe === false || !shop.is_cafe;
          return isOmiyage;
        });

        if (filteredOmiyageShops.length > 0) {
          setOmiyageShops(filteredOmiyageShops);
        }
      }
    };
    fetchShops();
  }, []);

  if (omiyageShops.length === 0) {
    return <div className="mx-3">お土産屋が見つかりませんでした</div>;
  }

  return (
    <button className="flex gap-x-2 w-full overflow-x-auto overflow-y-hidden">
      {omiyageShops.map((shop) => (
        <div
          key={shop.id}
          className={`w-[350px] ml-2 h-[140px] bg-green radius-3 p-2 ${
            selectedShopId === shop.id ? "border-[1.5px] border-black" : ""
          }`}
          onClick={() => handleClick(shop.id)}
        >
          <div className="flex justify-between">
            <div>
              <h2 className="h2 w-[220px] my-2">{shop.name}</h2>
              <div className="flex gap-x-2 w-[220px] overflow-x-auto ">
                <p className="w-fit px-2 py-1 rounded-1 bg-beige small">
                  タグ1
                </p>
                <p className="w-fit px-2 py-1 rounded-1 bg-beige small">
                  タグ2
                </p>
                <p className="w-fit px-2 py-1 rounded-1 bg-beige small">
                  タグ3
                </p>
              </div>
              <p className="p w-[220px] my-2">{shop.description}</p>
            </div>
            <div className="w-[114px] h-[124px]">
              <Image
                src={shop.image_urls[0]}
                alt={shop.name}
                className="w-full h-full object-cover radius-3"
                width={110}
                height={110}
              />
            </div>
          </div>
        </div>
      ))}
    </button>
  );
}
