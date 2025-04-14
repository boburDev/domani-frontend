"use client";
import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";

const Counter = () => {
  const { t } = useLanguage();

  const stats = [
    { id: 1, value: 14, label: `${t.countert1}` },
    { id: 2, value: 400, label: `${t.countert2}` },
    { id: 3, value: 13, label: `${t.countert3}` },
    { id: 4, value: 20, label: `${t.countert4}` },
  ];

  const [counts, setCounts] = useState<number[]>(
    new Array(stats.length).fill(0)
  );

  useEffect(() => {
    const duration = 2500;
    const intervalTime = 20;

    const updatedCounts = [...counts];

    stats.forEach((stat, index) => {
      const step = stat.value / (duration / intervalTime);
      let currentCount = 1;

      const interval = setInterval(() => {
        currentCount += step;
        if (currentCount >= stat.value) {
          currentCount = stat.value;
          clearInterval(interval);
        }

        updatedCounts[index] = Math.floor(currentCount);
        setCounts([...updatedCounts]);
      }, intervalTime);
    });

    return () => {
      stats.forEach((_, index) => clearInterval(index));
    };
  }, []);

  return (
    <div className="w-full flex flex-wrap lg:flex-nowrap justify-between gap-y-10">
      {stats.map((stat, index) => (
        <div
          key={stat.id}
          className="w-1/2 lg:w-auto border-l-[2px] md:border-l-[3px] border-gainsboro pl-6 lg:pl-12 flex flex-col items-start"
        >
          <div className="w-[130px]">
            <p className="text-black font-semibold text-[24px] md:text-[48px] lg:text-[64px] leading-none">
              {counts[index]}
              {index < 2 && "+"}{" "}
              {/* Faqat birinchi ikkita statistikada "+" qo'yiladi */}
            </p>
          </div>
          <p className="text-black font-medium text-[14px] lg:text-[22px] pt-6">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Counter;
