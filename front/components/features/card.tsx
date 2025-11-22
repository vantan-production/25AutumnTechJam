"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Bookmark from "../ui/bookmark";

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

type Props = {
  shop: shopRequest;
};

export function Card({ shop }: Props) {
  const router = useRouter();

  return (
    <div
      className="rounded-2 bg-green mx-3 flex p-2 gap-x-4"
      onClick={() => {
        router.push(`/shop-info?id=${shop.id}`);
      }}
    >
      <div className="rounded-2 bg-white p-18 w-[144px] h-[164px] relative overflow-hidden">
        <Image
          src={shop.image_url}
          alt={shop.name}
          fill
          className="object-cover rounded-2"
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <div className="w-full flex gap-x-4 items-center justify-between">
          <div className="text-black h2 w-[135px] no-wrap text-ellipsis overflow-hidde line-clamp-2">
            {shop.name}
          </div>
          <Bookmark></Bookmark>
        </div>
        <div className="w-full flex gap-x-4 items-center justify-between">
          <div className="text-black small">
            {shop.opens_at}-{shop.closes_at}
          </div>
          <div className="bg-beige rounded-full text-black small w-fit px-2">
            {shop.min_budget ? `¥${shop.min_budget}~` : ""}
          </div>
        </div>
        <div className="text-black p text-start">{shop.description}</div>
      </div>
    </div>
  );
}

export default Card;
