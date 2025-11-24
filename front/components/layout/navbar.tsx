"use client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  onBookmarkClick: () => void;
};

export function TabBar() { // { onBookmarkClick }: Props
  const [active, setActive] = useState<number | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/top") {
      setActive(1);
    } else if (pathname === "/map") {
      setActive(2);
    } else if (pathname === "/bookmark") {
      setActive(3);
    }
  }, [pathname]);

  return (
    <div className="fixed bottom-0 z-100 left-1/2 -translate-x-1/2">
      <div className="flex bg-beige  h-14 mx-3 rounded-lg justify-between box-shadow">
        <button
          onClick={() => {
            setActive(1);
            router.push("/top");
          }}
          className={`w-28 h-12 my-1 mx-1.5 rounded-md ${
            active === 1 ? "bg-white shadow-md" : "bg-beige shadow-none"
          }`}
        >
          <img
            className="w-8 h-8 m-auto"
            src="images/coffeeShopInner.png"
            alt="home"
          />
        </button>
        <button
          onClick={() => {
            setActive(2);
            router.push("/map");
          }}
          className={`w-28 h-12 my-1 mx-1.5 rounded-md ${
            active === 2 ? "bg-white shadow-md" : "bg-beige shadow-none"
          }`}
        >
          <img className="w-8 h-8 m-auto" src="images/mapInner.png" alt="map" />
        </button>
        <div>
          <button
            onClick={() => {
              setActive(3);
              router.push("/bookmark");
            }}
            className={`w-28 h-12 my-1 mx-1.5 rounded-md ${
              active === 3 ? "bg-white shadow-md" : "bg-beige shadow-none"
            }`}
          >
            <img
              className="w-8 h-8 m-auto"
              src="images/bookmarkInner.png"
              alt="keep"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TabBar;

{
  /*setActive(3);
router.push("/bookmark");*/
}
