"use client";
import { instagramIcon, telegramIcon, youtubeIcon } from "@/assets";
import Contact from "@/components/Contact";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";


const Social = () => {
  const { t } = useLanguage();
  return (
    <div>
      <section className="relative bg-cover bg-[url('/main-bg.png')] w-full h-[100vh]">
        <div className="absolute inset-0 bg-black opacity-55 z-0" />
        <div className="container mx-auto px-5">
          <div className="relative z-10">
            <p className="max-w-[1477px] text-[25px] md:text-[48px] lg:text-[56px] xl:text-[84px] font-bold text-center md:text-start text-textWhite pt-[140px] md:pt-[180px] lg:pt-[237px] font-playfair">
              {t.social_title}
            </p>
          </div>
          <div className="z-50 absolute pt-[70px] xl:pt-[100px] flex gap-4 sm:gap-6 md:gap-12 left-1/2 -translate-x-1/2  lg:left-1/3 xxl:left-2/4">
            <Link
              href="https://www.instagram.com/"
              className="w-[120px] h-[120px] lg:w-[220px] lg:h-[200px] flex flex-col items-center justify-center gap-4 rounded-xl text-textWhite backdrop-blur-lg bg-textWhite/30 transition-transform transform hover:scale-110 hover:-translate-y- duration-500"
            >
              <Image
                src={instagramIcon}
                alt="img"
                className="w-[28px] lg:w-[60px]"
              />
              <p className="text-textWhite text-[14px] lg:text-[24px]">
                {t.social_instagram}
              </p>
            </Link>
            <Link
              href="https://t.me/"
              className="w-[120px] h-[120px] lg:w-[220px] lg:h-[200px] flex flex-col items-center justify-center gap-4 rounded-xl text-textWhite backdrop-blur-lg bg-textWhite/30 transition-transform transform hover:scale-110 hover:-translate-y-2 duration-500"
            >
              <Image
                src={telegramIcon}
                alt="img"
                className="w-[28px] lg:w-[60px]"
              />
              <p className="text-textWhite text-[14px] lg:text-[24px] ">
                {t.social_telegram}
              </p>
            </Link>
            <Link
              href="https://www.youtube.com/"
              className="w-[120px] h-[120px] lg:w-[220px] lg:h-[200px] flex flex-col items-center justify-center gap-4 rounded-xl text-textWhite backdrop-blur-lg bg-textWhite/30 transition-transform transform hover:scale-110 hover:-translate-y-2 duration-500"
            >
              <Image
                src={youtubeIcon}
                alt="img"
                className="w-[28px] lg:w-[60px]"
              />
              <p className="text-textWhite text-[14px] lg:text-[24px]">
                {t.social_youtube}
              </p>
            </Link>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-5">
        <Contact />
      </section>
    </div>
  );
};

export default Social;
