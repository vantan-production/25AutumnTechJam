"use client";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useEffect, useState } from "react";
import Select from "react-select";

export type FilterConditions = {
  min_budget?: number;
  max_budget?: number;
  day_of_week?: number;
  staying_time?: number;
};

export const buildFilterParams = (
  conditions: FilterConditions,
  genre?: string | null
): URLSearchParams => {
  const params = new URLSearchParams();

  if (conditions.min_budget !== undefined) {
    params.append("min_budget", conditions.min_budget.toString());
  }
  if (conditions.max_budget !== undefined) {
    params.append("max_budget", conditions.max_budget.toString());
  }
  if (conditions.day_of_week !== undefined) {
    params.append("day_of_week", conditions.day_of_week.toString());
  }
  if (conditions.staying_time !== undefined) {
    params.append("staying_time", conditions.staying_time.toString());
  }
  if (genre) {
    params.append("genre", genre);
  }

  return params;
};

type FilterProps = {
  onClose?: () => void;
  onFilterApply?: (
    conditions: FilterConditions,
    params: URLSearchParams
  ) => void;
};

function Filter({ onClose, onFilterApply }: FilterProps) {
  const [defaultValues, setDefaultValues] = useState([0, 20000]);
  const minBudget = 0;
  const maxBudget = 20000;

  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const getButtonStyle = (value: string) => ({
    backgroundColor:
      selectedTime === value ? "var(--color-green)" : "var(--color-white)",
    color: selectedTime === value ? "var(--color-white)" : "var(--color-black)",
  });

  const [year, setYear] = useState<number | null>(null);
  const [month, setMonth] = useState<number | null>(null);
  const [day, setDay] = useState<number | null>(null);

  useEffect(() => {
    const today = new Date();
    setYear(today.getFullYear());
    setMonth(today.getMonth() + 1);
    setDay(today.getDate());
  }, []);

  const START_YEAR = 1980;
  const END_YEAR = new Date().getFullYear() + 10;
  const years = Array.from({ length: END_YEAR - START_YEAR + 1 }, (_, i) => {
    const y = START_YEAR + i;
    return { value: y, label: `${y}年` };
  });

  const months = Array.from({ length: 12 }, (_, i) => ({
    value: i + 1,
    label: `${i + 1}月`,
  }));

  const days = Array.from({ length: 31 }, (_, i) => ({
    value: i + 1,
    label: `${i + 1}日`,
  }));

  const [decision, setDecision] = useState(false);

  useEffect(() => {
    if (selectedTime || defaultValues[0] !== 0 || defaultValues[1] !== 20000) {
      setDecision(true);
    }
  }, [selectedTime, defaultValues]);
  return (
    <div className="fixed bottom-0 left-0 bg-beige w-full h-[500px] rounded-t-[50px] z-90">
    <div className="fixed bottom-0 left-0 bg-beige w-full h-[500px] rounded-t-[50px] z-90">
      <div className="flex justify-center items-center">
        <div className="bg-black w-[138px] h-[3px] mt-[8.5px]"></div>
      </div>
      <div className="text-black mt-11 ml-11 text-xl">Staying time</div>
      {[
        [
          { label: "30 min", value: "30 min" },
          { label: "1h", value: "1h" },
          { label: "1h 30min", value: "1h 30min" },
        ],
        [
          { label: "2h", value: "2h", className: "border-green" },
          { label: "2h 30min", value: "2h 30min" },
          { label: "3h", value: "3h" },
        ],
      ].map((row, rowIdx) => (
        <div key={rowIdx} className="flex gap-2 text-black mt-2 ml-11">
          {row.map((option) => (
            <div
              key={option.value}
              className={`text-base bg-white w-fit h-fit py-2 px-2 rounded-xl min-w-15 flex items-center justify-center drop-shadow-1${
                option.className ? " " + option.className : ""
              }`}
              onClick={() => setSelectedTime(option.value)}
              style={getButtonStyle(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      ))}
      <div className="text-black mt-12 ml-11 text-xl">Staying date</div>
      <div className="flex gap-4 w-[329px] mx-auto">
        <div className="w-28">
          <Select
            options={years}
            value={years.find((y) => y.value === year) || null}
            onChange={(v) => setYear(v?.value ?? null)}
            placeholder="年"
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
            }}
            menuPlacement="top"
            instanceId="year"
          />
        </div>

        <div className="w-20">
          <Select
            options={months}
            value={months.find((m) => m.value === month) || null}
            onChange={(v) => setMonth(v?.value ?? null)}
            placeholder="月"
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
            }}
            menuPlacement="top"
            instanceId="month"
          />
        </div>

        <div className="w-20">
          <Select
            options={days}
            value={days.find((d) => d.value === day) || null}
            onChange={(v) => setDay(v?.value ?? null)}
            placeholder="日"
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
            }}
            menuPlacement="top"
            instanceId="day"
          />
        </div>
      </div>
      <div className="text-black mt-12 ml-11 text-xl">Budget</div>
      <div className="flex items-center justify-between w-[329px] mx-auto">
        <div className="w-fit">{minBudget.toLocaleString("ja-JP")}</div>
        <div className="w-fit">{maxBudget.toLocaleString("ja-JP")}</div>
      </div>
      <div className="flex items-center justify-center">
        <Slider
          className="rc-slider"
          range
          defaultValue={[0, 20000]}
          min={0}
          max={20000}
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
        <div className="w-[65px] p-2 text-center bg-white radius-3 box-shadow-1">
          {defaultValues[0].toLocaleString("ja-JP")}
        </div>
        <p>~</p>
        <div className="w-[65px] p-2 bg-white radius-3 box-shadow-1">
          {defaultValues[1].toLocaleString("ja-JP")}
        </div>
      </div>
      <div className="flex items-center justify-end w-[329px] mx-auto">
        <button
          onClick={() => {
            if (decision) {
              const timeToMinutes: { [key: string]: number } = {
                "30 min": 30,
                "1h": 60,
                "1h 30min": 90,
                "2h": 120,
                "2h 30min": 150,
                "3h": 180,
              };

              let dayOfWeek: number | undefined;
              if (year && month && day) {
                const date = new Date(year, month - 1, day);
                dayOfWeek = date.getDay();
              }

              const conditions: FilterConditions = {
                min_budget:
                  defaultValues[0] !== 0 ? defaultValues[0] : undefined,
                max_budget:
                  defaultValues[1] !== 20000 ? defaultValues[1] : undefined,
                day_of_week: dayOfWeek,
                staying_time: selectedTime
                  ? timeToMinutes[selectedTime]
                  : undefined,
              };

              const params = buildFilterParams(conditions);
              onFilterApply?.(conditions, params);
              onClose?.();
            } else {
              null;
            }
          }}
          className={` w-20 h-fit px-2 py-1 radius-3 ${
            decision
              ? "bg-green text-white"
              : "bg-white border-1 border-black text-black"
          }`}
        >
          Apply
        </button>
      </div>
    </div>
  );
}

export default Filter;
