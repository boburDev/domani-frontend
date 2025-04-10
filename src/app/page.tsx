"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Spinner from "@/components/Spinner";

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
import ArrowRightIcon from "@/assets/icons/ArrowRightIcon";

// Dynamically import
const WorldMap = dynamic(() => import("@/components/WorldMap"), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
});

const Home = () => {
  const { language, t } = useLanguage();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Ma'lumotlar kelishi uchun simulyatsiya
    setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 soniya kutish
  }, []);

  return (
    <main>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <section className="relative bg-cover bg-center bg-[url('/images/home-bg.jpg')] w-full h-[100vh]">
            <div className="absolute inset-0 bg-black opacity-55 z-0" />
            <div className="container mx-auto relative z-10">
              <div className="text-[25px] md:text-[48px] lg:text-[84px] font-bold text-center text-textWhite pt-[247px] md:pt-[250px] lg:pt-[401px] font-playfair px-5">
                <span className="flex justify-center">{t.slogan1}</span>
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
                    className="w-[112px] lg:w-[393px]  opacity-20 bg-lightGrey hover:opacity-100 md:hover:scale-105 transition-transform duration-300"
                  />
                </Link>

                <Link className="cursor-pointer" href="#">
                  <Image
                    src={osiyoPartner}
                    alt="img"
                    className="w-[67px] h-[35px] lg:w-[251px] lg:h-[129px] opacity-20 bg-lightGrey hover:opacity-100 md:hover:scale-105 transition-transform duration-300"
                  />
                </Link>

                <Link className="cursor-pointer" href="https://mbc.uz/">
                  <Image
                    src={muradB_partner}
                    alt="img"
                    className="duration-300 opacity-20 bg-lightGrey hover:opacity-100 md:hover:scale-105 transition-transform w-[54px] h-[54px] lg:w-[165px] lg:h-[165px]"
                  />
                </Link>

                <Link className="cursor-pointer" href="#">
                  <Image
                    src={insidePartner}
                    alt="img"
                    className="w-[74px] h-[44px] lg:w-[205px] lg:h-[120px] opacity-20 bg-lightGrey hover:opacity-100 md:hover:scale-105 transition-transform duration-300"
                  />
                </Link>
              </div>
            </div>
            {/* CARD DATA */}
            <div className="pt-[50px] md:pt-[80px] lg:pt-[181px]">
              <p className="text-black font-semibold text-[18px] md:text-[28px] lg:text-[48px] pb-[30px] lg:pb-[80px]">
                {t.projects}
              </p>
              <div className="flex flex-wrap justify-center xxl:grid  xxl:grid-cols-3 gap-x-8 xxl:gap-x-20 gap-y-8">
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
              <div className="flex justify-center pt-10 md:pt-[90px]">
                <Link
                  href="/projects/all"
                  className="flex items-center text-[18px] md:text-[32px] font-medium text-black underline underline-offset-[25%]"
                >
                  <span>{t.btnToAll}</span>
                  <ArrowRightIcon className="ml-3" />
                </Link>
              </div>
            </div>
          </section>
          <section className="container mx-auto px-5">
            <div className="flex pt-[70px] md:pt-[230px]">
              <div className="xl:w-[733px] pb-[36px] md:pr-[35px]" id="about">
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

            {/* The section for Services */}

            <div className="pt-[50px] md:pt-[230px]">
              <div className="font-semibold text-[48px] text-black">
                <p className="text-black font-semibold text-[18px] md:text-[48px] mb-[30px] md:mb-20">
                  {t.services}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[15px] lg:gap-[17px]  lg:h-[450px] overflow-hidden">
                  <div className="flex items-start ">
                    <div className="relative w-2/3 h-[176px] lg:w-[412px] lg:h-[333px] rounded-xl overflow-hidden group shadow-md">
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
                  </div>
                  <div className="flex items-end lg:justify-start justify-end">
                    <div className="relative w-2/3 h-[176px] lg:w-[412px] lg:h-[333px] rounded-xl overflow-hidden group shadow-md">
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
                  </div>
                  <div className="flex items-start">
                    <div className="relative  w-2/3 h-[176px] lg:w-[412px] lg:h-[333px] rounded-xl overflow-hidden group shadow-md">
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
                  </div>
                  <div className="flex items-end lg:justify-start justify-end">
                    <div className="relative w-2/3 h-[176px] lg:w-[412px] lg:h-[333px] rounded-xl overflow-hidden group shadow-md">
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
            </div>
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
                    {t.principle1_about}
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
            <Contact page={window.location.pathname} />
          </section>
        </div>
      )}
    </main>
  );
};

export default Home;
