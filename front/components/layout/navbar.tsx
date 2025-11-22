"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function TabBar() {
  const [active, setActive] = useState(1);
  const router = useRouter();
  return (
    <div className="fixed bottom-3">
      <div className="flex bg-beige  h-14 mx-3 rounded-lg justify-between">
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
  );
}

export default TabBar;
