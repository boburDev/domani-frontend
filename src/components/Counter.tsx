"use client";
import { useEffect, useState } from "react";

const stats = [
  { id: 1, value: 14, label: "Tajriba" },
  { id: 2, value: 350, label: "Loyihalar" },
  { id: 3, value: 13, label: "Gektar - eng katta yer maydoni" },
  { id: 4, value: 20, label: "Etaj - eng baland loyiha" },
];

const Counter = () => {
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
    <div className="flex justify-between w-full">
      {stats.map((stat, index) => (
        <div
          key={stat.id}
          className="border-l-4 border-gainsboro pl-12 flex flex-col items-start"
        >
          <div className="w-[130px]">
            {" "}
            {/* Fixed width for number */}
            <p className="text-black font-semibold text-[64px] leading-none">
              {counts[index]}+
            </p>
          </div>
          <p className="text-black font-medium text-[22px] pt-6">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Counter;
