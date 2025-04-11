"use client";

import { useLanguage } from "./LanguageProvider";


const HomeTop = () => {
  const { t } = useLanguage();
  return (
    <section className="relative bg-cover bg-center bg-[url('/images/home-bg.jpg')] w-full h-[1016px]">
      <div className="absolute inset-0 bg-black opacity-55 z-0" />
      <div className="container mx-auto relative z-10">
        <div className="text-[25px] md:text-[48px] lg:text-[84px] font-bold text-center text-textWhite pt-[247px] md:pt-[250px] lg:pt-[401px] font-playfair px-5">
          <span className="hidden sm:flex justify-center">{t.slogan1}</span>
          <div className="flex justify-center flex-wrap sm:hidden">
            <p className="inline-block font-bold text-[25px]">{t.slogan2}</p>
            <p className="inline-block font-bold text-[25px]">{t.slogan3}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTop;
