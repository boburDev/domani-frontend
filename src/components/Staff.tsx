"use client";
import Image from "next/image";
import staff from "../data/staff.json";
import { useLanguage } from "./LanguageProvider";

const Team = () => {
  const { language } = useLanguage();

  return (
    <div className="pt-[40px] md:pt-[100px] lg:pt-[230px]">
      <p className="text-black font-semibold text-[18px] md:text-[32px] lg:text-[48px] px-[9px]">
        Bizning jamoa
      </p>
      <div className="flex flex-wrap justify-center md:grid md:grid-cols-2 xxl:grid-cols-3 2xl:grid-cols-4 gap-8 pt-[30px] md:pt-[73px] lg:gap-[62px]">
        {staff.map((person, index) => (
          <div
            key={index}
            className="w-[290px] h-[427px] lg:w-[378px] lg:h-[542px] relative rounded-xl overflow-hidden group shadow-md"
          >
            {/* Image */}
            <Image
              src={person.img}
              alt={person[`name_${language}`]}
              width={350}
              height={400}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />

            {/* Text */}
            <div className="absolute w-full bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-center">
              <p className="text-textWhite font-bold text-[18px] md:text-[24px] transition-all duration-500 ease-out md:group-hover:-translate-y-2">
                {person[`name_${language}`]}
              </p>
              <p className="text-[14px] md:text-[20px] text-iron opacity-100 md:opacity-0 translate-y-4 transition-all duration-500 ease-out md:group-hover:opacity-100 md:group-hover:translate-y-0">
                {person[`position_${language}`]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
