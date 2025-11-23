"use client";

import { useEffect, useState, useRef } from "react";
import { Shop } from "../../api/shop";

type ShopData = {
  id: number;
  name: string;
  description: string;
  image_url: string;
  address?: string;
};

type SearchProps = {
  onFilteredShopsChange?: (shops: ShopData[]) => void;
};

function Search({ onFilteredShopsChange }: SearchProps) {
  const [allShops, setAllShops] = useState<ShopData[]>([]);
  const [filteredShops, setFilteredShops] = useState<ShopData[]>([]);
  const [search, setSearch] = useState(true);
  const [inputPH, setInputPH] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchShops = async () => {
      const res = await Shop();
      if (res.success && res.data.length > 0) {
        setAllShops(res.data);
        setFilteredShops(res.data);
        onFilteredShopsChange?.(res.data);
      }
    };
    fetchShops();
  }, []);

  const handleSearch = () => {
    if (!inputPH.trim()) {
      setFilteredShops(allShops);
      onFilteredShopsChange?.(allShops);
    } else {
      const query = inputPH.toLowerCase().trim();
      const result = allShops.filter(
        (shop) =>
          shop.name.toLowerCase().includes(query) ||
          shop.description.toLowerCase().includes(query) ||
          (shop.address && shop.address.toLowerCase().includes(query))
      );
      setFilteredShops(result);
      onFilteredShopsChange?.(result);
    }

    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const closePH = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <path
        d="M21 7L7 21M7 7L21 21"
        stroke="#050505"
        strokeOpacity="0.6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const handleClear = () => {
    setInputPH("");
    setFilteredShops(allShops);
    onFilteredShopsChange?.(allShops);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    if (inputPH) {
      setSearch(false);
    }
    if (!search && inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputPH, search]);

  return (
    <div className="w-[382px] mx-auto h-14 bg-beige radius-2 p-2 box-shadow">
      {search ? (
        <div className="w-full h-full flex">
          <input
            type="text"
            placeholder=" search coffee shop..."
            onClick={() => setSearch(false)}
            ref={inputRef}
            className="w-[297px] h-full bg-white radius-1 text-black/60 pl-1 text-start outline-none !important auto-line: none !important drop-shadow-1"
          />
          <div className="w-21 h-full flex items-center justify-center">
            <div className="w-8 h-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M6.66667 14.6667C6.66667 20.5577 11.4423 25.3333 17.3333 25.3333C23.2244 25.3333 28 20.5577 28 14.6667C28 8.77563 23.2244 4 17.3333 4C11.4423 4 6.66667 8.77563 6.66667 14.6667Z"
                  stroke="#050505"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.99999 28L9.79999 22.2"
                  stroke="#050505"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex justify-between">
          <div className="relative w-[297px] h-full">
            <input
              type="text"
              placeholder=" search coffee shop..."
              value={inputPH}
              onChange={(e) => setInputPH(e.target.value)}
              onKeyPress={handleKeyPress}
              ref={inputRef}
              className="w-[297px] h-full bg-white radius-1 text-black/60 pl-1 text-start outline-none !important auto-line: none !important drop-shadow-1"
            />
            {inputPH && (
              <button
                onClick={handleClear}
                className="absolute right-2 top-1/2 -translate-y-1/2"
              >
                {closePH}
              </button>
            )}
          </div>
          <div className="w-12 h-full flex items-center justify-center border-green border-1 radius-2">
            <button className="w-8 h-8" onClick={handleSearch} type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M6.66667 14.6667C6.66667 20.5577 11.4423 25.3333 17.3333 25.3333C23.2244 25.3333 28 20.5577 28 14.6667C28 8.77563 23.2244 4 17.3333 4C11.4423 4 6.66667 8.77563 6.66667 14.6667Z"
                  stroke="#050505"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.99999 28L9.79999 22.2"
                  stroke="#050505"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
