import Tag from "../ui/tag";
import Image from "next/image";
import { Shop } from "../../api/shop";

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

export function ShopDetailHead({ shop }: { shop: shopRequest }) {
  return (
    <div className="flex gap-x-4 mx-3 p-2 rounded-2 bg-green">
      <div className="flex flex-col gap-y-6 pt-1 pl-1 w-[180px]">
        <div className="text-black text-2xl">{shop.name}</div>
        <div className="flex flex-wrap gap-1">
          {shop.is_cafe ? (
            <Tag content="カフェ"></Tag>
          ) : (
            <Tag content="その他"></Tag>
          )}
        </div>
      </div>
      <div className="rounded-2 bg-white">
        <Image
          src={shop.image_urls[0]}
          alt={shop.name}
          width={160}
          height={160}
          className="object-cover rounded-2 w-[160px] h-[160px]"
        />
      </div>
    </div>
  );
}

export default ShopDetailHead;
