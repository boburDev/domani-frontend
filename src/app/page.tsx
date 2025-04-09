"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import Team from "@/components/Staff";
import Contact from "@/components/Contact";
import Counter from "@/components/Counter";
import dynamic from "next/dynamic";
import projectData from "@/data/projects.json";

import {
  aboutBuilding,
  architecture,
  city,
  firstService,
  fourthService,
  functionImg,
  insidePartner,
  iskanderPartner,
  leaf,
  muradB_partner,
  osiyoPartner,
  secondService,
  shake,
  thirdService,
} from "@/assets";
import Card from "@/components/Card";
import { useLanguage } from "@/components/LanguageProvider";

// Dynamically import
const WorldMap = dynamic(() => import("@/components/WorldMap"), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
});

const Home = () => {
  const { language, t } = useLanguage();
  return (
    <main>
      <section className="relative bg-cover bg-center bg-[url('/images/home-bg.jpg')] w-full h-[100vh]">
        <div className="absolute inset-0 bg-black opacity-55 z-0" />
        <div className="container mx-auto relative z-10">
          <div className="text-[25px] md:text-[48px] lg:text-[84px] font-bold text-center text-textWhite pt-[247px] md:pt-[250px] lg:pt-[401px] font-playfair px-5">
            <span className="hidden sm:flex justify-center">{t.slogan1}</span>
            <div className="flex justify-center flex-wrap sm:hidden">
              <span className="inline-block">{t.slogan2}</span>
              <span className="inline-block">{t.slogan3}</span>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-5">
        <div className="flex  pt-[42px] md:pt-[150px] lg:pt-[283px]">
          <Counter />
        </div>
        <div className="pt-[42px] md:pt-[150px] lg:pt-[246px]">
          <div className="max-w-[1650px] h-[200px] md:h-[450px] lg:h-[868px] flex justify-center ">
            <WorldMap />
          </div>
        </div>
        <div className="pt-[50px] md:pt-[150px] lg:pt-[256px]">
          <p className="text-black font-semibold text-[18px] md:text-[28px] lg:text-[48px]">
            {t.partners}
          </p>
          <div className="flex justify-between items-center w-full pt-[30px] lg:pt-[91px]">
            <Link
              className="cursor-pointer"
              href="https://iskanderbuildings.uz/"
            >
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
        {/* CARD DATA */}
        <div className="pt-[50px] md:pt-[80px] lg:pt-[181px]" id="projects">
          <p className="text-black font-semibold text-[18px] md:text-[28px] lg:text-[48px] pb-[40px] lg:pb-[80px]">
            {t.projects}
          </p>
          <div className="flex flex-wrap justify-center lg:grid grid-cols-2 xxl:grid-cols-3 gap-x-16 gap-y-8 ">
            {projectData.map((item) => (
              <div key={item.id}>
                {/* Card */}
                <Link
                  href={`/projects/${item.id}`} // Loyihaning detallariga yo'naltiruvchi Link
                  className="group"
                >
                  <Card
                    name={item[`name_${language}`]}
                    location={item[`location_${language}`]}
                    img={item.imgPath}
                    id={item.id}
                    type={item.type}
                  />
                </Link>
              </div>
            ))}
          </div>
          {/* Link to projects */}
          <Link
            href="/projects/all"
            className="pt-[90px] flex justify-center items-center group text-[18px] md:text-[32px] font-medium text-black pb-1 relative"
          >
            <span className="relative">
              {t.btnToAll}
              <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-transparent group-hover:bg-black transition-all duration-300"></span>
            </span>
          </Link>
        </div>
      </section>
      <section className="container mx-auto px-5">
        <div className="flex pt-[70px] md:pt-[230px]">
          <div className="xl:w-[733px] pb-[36px] pr-6" id="about">
            <p className="text-black font-semibold text-[18px]  md:text-[48px]">
              {t.about}
            </p>
            <p className="pt-[30px] md:pt-[80px] text-[14px] md:text-[26px] text-textBlack">
              {t.show1}
            </p>
            <div className="pt-[20px] max-w-[909px] h-[235px] md:h-[635px] flex xl:hidden">
              <Image
                src={aboutBuilding}
                alt="img"
                className="w-[100%] h-full"
              />
            </div>
            <p className="pt-[50px] md:pt-[101px] text-black text-[18px]  md:text-[32px] font-semibold">
              {t.mission_title}
            </p>
            <p className="pt-[20px] text-[14px] md:text-[26px] text-textBlack ">
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

        {/* The section for Services */}

        <div className="pt-[80px] md:pt-[230px]">
          <div className="font-semibold text-[48px] text-black">
            <p className="text-black font-semibold text-[18px] md:text-[48px]">
              {t.services}
            </p>
            <div className="flex flex-wrap lg:flex-nowrap justify-center lg:flex lg:justify-between gap-8 pt-8">
              <div className="relative w-[217px] h-[176px] lg:w-[412px] lg:h-[333px] rounded-xl overflow-hidden group shadow-md">
                <Link href="/projects/multi-storey">
                  <div className="w-full h-full cursor-pointer">
                    <Image
                      src={firstService}
                      alt={"asd"}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
                    <div className="absolute w-full bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-center">
                      <p className="text-textWhite font-bold text-[14px] md:text-[24px]  transition-all duration-500 ease-out translate-y-0">
                        {t.servicemulti}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="relative w-[217px] h-[176px] lg:w-[412px] lg:h-[333px] rounded-xl overflow-hidden group shadow-md">
                <Link href="/projects/low-rise">
                  <div className="w-full h-full cursor-pointer">
                    <Image
                      src={secondService}
                      alt={"asd"}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
                    <div className="absolute w-full bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-center">
                      <p className="text-textWhite font-bold text-[14px] md:text-[24px]  transition-all duration-500 ease-out translate-y-0">
                        {t.serviceLowrise}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="relative  w-[217px] h-[176px] lg:w-[412px] lg:h-[333px] rounded-xl overflow-hidden group shadow-md">
                <Link href="/projects/none-residential">
                  <div className="w-full h-full cursor-pointer">
                    <Image
                      src={thirdService}
                      alt={"asd"}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
                    <div className="absolute w-full bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-center">
                      <p className="text-textWhite font-bold text-[14px] md:text-[24px]  transition-all duration-500 ease-out translate-y-0">
                        {t.serviceNonresidential}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="relative  w-[217px] h-[176px] lg:w-[412px] lg:h-[333px] rounded-xl overflow-hidden group shadow-md">
                <div>
                  <div className="w-full h-full cursor-pointer">
                    <Image
                      src={fourthService}
                      alt={"asd"}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
                    <div className="absolute w-full bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-center">
                      <p className="text-textWhite font-bold text-[14px] md:text-[24px]  transition-all duration-500 ease-out translate-y-0">
                        {t.serviceOwnership}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-[186px]">
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

        <Team />
      </section>
      <section className="container mx-auto px-5">
        <Contact />
      </section>
    </main>
  );
};

export default Home;
