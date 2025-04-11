"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { architecture, city, functionImg, leaf, shake } from "@/assets";

const HomePrinciples = () => {
  const { t } = useLanguage();
  return (
    <section>
      <div className="pt-[70px] md:pt-[186px]">
        <p className="text-black font-semibold text-[18px] md:text-[48px]">
          {t.principles}
        </p>
        <div className="pt-[80px] flex lg:flex justify-center md:justify-between flex-wrap gap-[20px] md:gap-[50px]">
          <div className="hover:shadow-md p-4 duration-300 rounded-xl">
            <div className="border-b-4 w-[42px] md:w-[126px] border-gainsboro">
              <Image src={functionImg} alt="img" className="pb-6" />
            </div>
            <p className="text-[16px] md:text-[26px] font-semibold text-black pt-5 ">
              {t.principle1_title}
            </p>
            <p className="pt-5 text-[14px] md:text-[26px] text-textBlack max-w-[665px]">
              Biz binolarni nafaqat estetik, balki amaliy jihatdan ham qulay,
              samarali va chidamli loyihalashtiramiz.
            </p>
          </div>
          <div className="hover:shadow-md p-4 duration-300 rounded-xl">
            <div className="border-b-4 w-[42px] md:w-[126px] border-gainsboro">
              <Image src={leaf} alt="img" className="pb-6" />
            </div>
            <p className="text-[16px] md:text-[26px] font-semibold text-black pt-5 ">
              {t.principle2_title}
            </p>
            <p className="pt-5 text-[14px] md:text-[26px] text-textBlack max-w-[665px]">
              {t.show4}
            </p>
          </div>
          <div className="hover:shadow-md p-4 duration-300 rounded-xl">
            <div className="border-b-4 w-[42px] md:w-[126px] border-gainsboro">
              <Image src={city} alt="img" className="pb-6" />
            </div>
            <p className="text-[16px] md:text-[26px] font-semibold text-black pt-5 ">
              {t.principle3_title}
            </p>
            <p className="pt-5 text-[14px] md:text-[26px] text-textBlack max-w-[665px]">
              {t.show5}
            </p>
          </div>
          <div className="hover:shadow-md p-4 duration-300 rounded-xl">
            <div className="border-b-4 w-[42px] md:w-[126px] border-gainsboro">
              <Image src={architecture} alt="img" className="pb-6" />
            </div>
            <p className="text-[16px] md:text-[26px] font-semibold text-black pt-5 ">
              {t.principle4_title}
            </p>
            <p className="pt-5 text-[14px] md:text-[26px] text-textBlack max-w-[665px]">
              {t.show6}
            </p>
          </div>
          <div className="hover:shadow-md p-4 duration-300 rounded-xl">
            <div className="border-b-4 w-[42px] md:w-[126px] border-gainsboro">
              <Image src={shake} alt="img" className="pb-6" />
            </div>
            <p className="text-[16px] md:text-[26px] font-semibold text-black pt-5 ">
              {t.principle5_title}
            </p>
            <p className="pt-5 text-[14px] md:text-[26px] text-textBlack max-w-[665px]">
              {t.show7}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePrinciples;
