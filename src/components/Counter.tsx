// "use client";
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
    <div className="w-full flex flex-wrap md:flex-nowrap justify-between gap-y-10">
      {stats.map((stat, index) => (
        <div
          key={stat.id}
          className="w-1/2 md:w-auto border-l-4 border-gainsboro pl-6 md:pl-12 flex flex-col items-start"
        >
          <div className="w-[130px]">
            <p className="text-black font-semibold text-[24px] md:text-[48px] lg:text-[64px] leading-none">
              {counts[index]}+
            </p>
          </div>
          <p className="text-black font-medium text-[14px] md:text-[22px] pt-6">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Counter;
