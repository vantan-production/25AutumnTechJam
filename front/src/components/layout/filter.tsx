"use client";

import dynamic from "next/dynamic";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";

// 動的インポートで SSR を無効化
const IgrRangeSlider = dynamic(
  () => import("igniteui-react").then((mod) => mod.IgrRangeSlider),
  { ssr: false }
);

export const Filter = () => {
  const [defaultValues, setDefaultValues] = useState([0, 99]);
  const minBudget = 0;
  const maxBudget = 20000;
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 bg-beige w-[393px] h-[474px] rounded-tl-[50px] rounded-tr-[50px]">
      <div className="flex justify-center items-center">
        <div className="bg-black w-[138px] h-[3px] mt-[8.5px]"></div>
      </div>
      <div className="text-black mt-11 ml-11 text-xl">Staying time</div>
      <div className="flex gap-2 text-black mt-2 ml-11">
        <div className="text-base bg-white w-fit h-fit py-2 px-2 rounded-xl min-w-15 flex items-center justify-center drop-shadow-1">
          30 min
        </div>

        <div className="text-base bg-white w-fit h-fit py-2 px-2 rounded-xl min-w-15 flex items-center justify-center drop-shadow-1">
          1h
        </div>

        <div className="text-base bg-white w-fit h-fit py-2 px-2 rounded-xl min-w-15 flex items-center justify-center drop-shadow-1">
          1h 30min
        </div>
      </div>
      <div className="flex gap-2 text-black mt-2 ml-11">
        <div className="text-base bg-white w-fit h-fit py-2 px-2 rounded-xl border-green min-w-15 flex items-center justify-center drop-shadow-1">
          2h
        </div>

        <div className="text-base bg-white w-fit h-fit py-2 px-2 rounded-xl min-w-15 flex items-center justify-center drop-shadow-1">
          2h 30min
        </div>

        <div className="text-base bg-white w-fit h-fit py-2 px-2 rounded-xl min-w-15 flex items-center justify-center drop-shadow-1">
          3h
        </div>
      </div>
      <div className="text-black mt-12 ml-11 text-xl">Staying date</div>
      <div className="flex gap-2 text-black ml-11 mt-2">
        <div className="flex items-center justify-center text-base bg-white w-12 h-[35px] py-2 px-2 rounded-xl">
          11
        </div>

        <div className="w-[9px] h-[29px] text-2xl">/</div>

        <div className="flex items-center justify-center text-base bg-white w-12 h-[35px] py-2 px-2 rounded-xl">
          25
        </div>

        <div className="w-[9px] h-[29px] text-2xl">/</div>

        <div className="flex items-center justify-center text-base bg-white w-[70px] h-[35px] py-2 px-2 rounded-xl">
          2025
        </div>
      </div>
      <div className="text-black mt-12 ml-11 text-xl">Budget</div>
      <div className="flex items-center justify-between w-[329px] mx-auto">
        <div className="w-fit">{minBudget}</div>
        <div className="w-fit">{maxBudget}</div>
      </div>
      <div className="flex items-center justify-center">
        <Slider
          className="rc-slider"
          range
          defaultValue={[0, 99]}
          min={0}
          max={20000}
          onChangeComplete={() => {}}
          styles={{
            handle: {
              height: 20,
              width: 20,
              marginTop: "-8px",
              opacity: 1,
            },
            rail: { height: 5 },
          }}
          value={defaultValues}
          onChange={(value) => setDefaultValues(value as number[])}
        />
      </div>
      <div className="flex items-center justify-start w-[329px] gap-2 mx-auto">
        <p>¥</p>
        <div className="w-3 bg-white radius-3 box-shadow-1">
          {defaultValues[0]}
        </div>
        <p>~</p>
        <div>{defaultValues[1]}</div>
      </div>
    </div>
  );
};
