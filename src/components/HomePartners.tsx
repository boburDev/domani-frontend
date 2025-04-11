"use client"

import { insidePartner, iskanderPartner, muradB_partner, osiyoPartner } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

const HomePartners = () => {
    const {  t } = useLanguage();
  return (
    <section>
      <div className="pt-[50px] md:pt-[150px] lg:pt-[267px]">
        <p className="text-black font-semibold text-[18px] md:text-[28px] lg:text-[48px] mb-[38px] lg:mb-[30px]">
          {t.partners}
        </p>
        <div className="flex justify-between items-center w-full ">
          <Link className="cursor-pointer" href="https://iskanderbuildings.uz/">
            <Image
              src={iskanderPartner}
              alt="img"
              className="w-[112px] lg:w-[393px]  opacity-20 bg-lightGrey hover:opacity-100 hover:scale-105 transition-transform duration-300"
            />
          </Link>

          <Link className="cursor-pointer" href="#">
            <Image
              src={osiyoPartner}
              alt="img"
              className="w-[67px] h-[35px] lg:w-[251px] lg:h-[129px] opacity-20 bg-lightGrey hover:opacity-100 hover:scale-105 transition-transform duration-300"
            />
          </Link>

          <Link className="cursor-pointer" href="https://mbc.uz/">
            <Image
              src={muradB_partner}
              alt="img"
              className="duration-300 opacity-20 bg-lightGrey hover:opacity-100 hover:scale-105 transition-transform w-[54px] h-[54px] lg:w-[165px] lg:h-[165px]"
            />
          </Link>

          <Link className="cursor-pointer" href="#">
            <Image
              src={insidePartner}
              alt="img"
              className="w-[74px] h-[44px] lg:w-[205px] lg:h-[120px] opacity-20 bg-lightGrey hover:opacity-100 hover:scale-105 transition-transform duration-300"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePartners;
