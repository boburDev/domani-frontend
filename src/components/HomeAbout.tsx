"use client"

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { aboutBuilding } from "@/assets";

const HomeAbout = () => {
    const {  t } = useLanguage();
  return (
    <section>
      <div className="hidden md:flex pt-[70px] md:pt-[230px]">
        <div className="xl:w-[733px] pb-[36px] md:pr-6" id="about">
          <p className="text-black font-semibold text-[18px] md:text-[48px]">
            {t.about}
          </p>
          <p className="pt-[15px] md:pt-[80px] text-[14px] md:text-[26px] text-textBlack">
            {t.show1}
          </p>
          <div className="mt-[30px] md:max-w-[909px] h-[235px] md:h-[635px] flex xl:hidden rounded-[12px] overflow-hidden">
            <Image
              width={400}
              height={200}
              src={aboutBuilding}
              alt="img"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="pt-[30px] md:pt-[101px] text-black text-[18px]  md:text-[32px] font-semibold">
            {t.mission_title}
          </p>
          <p className="pt-[15px] md:pt-5 text-[14px] md:text-[26px] text-textBlack ">
            {t.show2}
          </p>
        </div>
        <div className="pt-[20px] hidden xl:flex">
          <Image
            src={aboutBuilding}
            alt="img"
            className="w-[909px] h-[635px] object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
