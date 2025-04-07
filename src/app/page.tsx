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
  functionImg,
  insidePartner,
  iskanderPartner,
  leaf,
  muradB_partner,
  osiyoPartner,
  shake,
} from "@/assets";
import Card from "@/components/Card";

// Dynamically import
const WorldMap = dynamic(() => import("@/components/WorldMap"), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
});

const Home = () => {
  return (
    <main>
      <section className="relative bg-cover bg-[url('/main-bg.png')] w-full h-[100vh]">
        <div className="absolute inset-0 bg-black opacity-55 z-0" />
        <div className="container mx-auto relative z-10">
          <p className="text-[84px] font-bold text-center text-textWhite pt-[401px] font-playfair">
            Minimalizm. Bu Funktsionallik. Mukammallik
          </p>
        </div>
      </section>
      <section className="container mx-auto ">
        <div className="flex pt-[283px]">
          <Counter />
        </div>
        <div className="pt-[246px]">
          <div className="max-w-[1650px] h-[868px]">
            <WorldMap />
          </div>
        </div>
        <div className="pt-[256px]">
          <p className="text-black font-semibold text-[48px]">Hamkorlarimiz</p>
          <div className="flex justify-between items-center w-full pt-[91px]">
            <Link href="https://iskanderbuildings.uz/">
              <Image
                src={iskanderPartner}
                alt="img"
                className="opacity-20 bg-lightGrey hover:opacity-100 hover:scale-105 transition-transform duration-300"
              />
            </Link>

            <Image
              src={osiyoPartner}
              alt="img"
              className="w-[251px] h-[129px] opacity-20 bg-lightGrey hover:opacity-100 hover:scale-105 transition-transform duration-300"
            />

            <Link href="https://mbc.uz/">
              <Image
                src={muradB_partner}
                alt="img"
                className="duration-300 opacity-20 bg-lightGrey hover:opacity-100 hover:scale-105 transition-transform w-[165px] h-[165px]"
              />
            </Link>

            <Image
              src={insidePartner}
              alt="img"
              className="w-[205px] h-[120px] opacity-20 bg-lightGrey hover:opacity-100 hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        {/* CARD DATA */}
        <div className="pt-[181px]" id="projects">
          <p className="text-black font-semibold text-18 sm:text-[28px] lg:text-[48px] pb-[80px]">
            Loyihalarimiz
          </p>
          <div className="flex flex-wrap justify-center lg:grid grid-cols-2 xxl:grid-cols-3 gap-8 ">
            {projectData.map((item) => (
              <Card
                key={item.id}
                name={item.name}
                location={item.location}
                img={item.imgPath}
                id={item.id}
                type={item.type}
              />
            ))}
          </div>
          {/* Link to projects */}
          <Link
            href="/projects"
            className="pt-[90px] flex justify-center items-center group text-[32px] font-medium text-black pb-1 after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px]"
          >
            Barchasini ko’rish
          </Link>
        </div>
      </section>
      <section className="container mx-auto">
        <div className="flex pt-[230px]">
          <div className="w-[733px] pb-[36px] pr-6" id="about">
            <p className="text-black font-semibold text-[48px]">
              Biz haqimizda
            </p>
            <p className="pt-[80px] text-[26px] text-textBlack">
              Domani architects byurosi 2019 yilda tashkil etilgan. O‘zbekiston
              bozorida faoliyati yuritib keladi. Ekologik va funksional
              arxitekturasining qarashlari va estetikasini targ‘ib qilmoqda,
            </p>
            <p className="pt-[101px] text-black text-[32px] font-semibold">
              Domani Architects Missiyasi
            </p>
            <p className="pt-[20px] text-[26px] text-textBlack ">
              Biz O‘zbekiston arxitekturasida innovatsion va funksional
              dizaynlar bilan boyitish orqali zamonaviy, exclusive va ekologik
              yechimlar yaratishga intilamiz.
            </p>
          </div>
          <div className="pt-[20px]">
            <Image
              src={aboutBuilding}
              alt="img"
              className="w-[909px] h-[635px]"
            />
          </div>
        </div>
        <div className="pt-[230px]">
          <div className="font-semibold text-[48px] text-black">
            <p className="text-black font-semibold text-[48px]">
              Xizmatlarimiz
            </p>
            <div></div>
          </div>
        </div>
        <div className="pt-[186px]">
          <p className="text-black font-semibold text-[48px]">
            Bizning tamoyillarimiz
          </p>
          <div className="pt-[80px] flex justify-between flex-wrap gap-[50px]">
            <div className="hover:shadow-md p-4 duration-300 rounded-xl">
              <div className="border-b-4 w-[126px] border-gainsboro">
                <Image src={functionImg} alt="img" className="pb-6" />
              </div>
              <p className="text-[26px] font-semibold text-black pt-5 ">
                Funktsional va Minimalistik Arxitektura
              </p>
              <p className="pt-5 text-[26px] text-textBlack max-w-[665px]">
                Biz binolarni nafaqat estetik, balki amaliy jihatdan ham qulay,
                samarali va chidamli loyihalashtiramiz.
              </p>
            </div>
            <div className="hover:shadow-md p-4 duration-300 rounded-xl">
              <div className="border-b-4 w-[126px] border-gainsboro">
                <Image src={leaf} alt="img" className="pb-6" />
              </div>
              <p className="text-[26px] font-semibold text-black pt-5 ">
                Ekologik va Energiya Tejamkor Yondashuv{" "}
              </p>
              <p className="pt-5 text-[26px] text-textBlack max-w-[665px]">
                Biz yashil texnologiyalar, ekologik materiallar va passiv uy
                konsepsiyasiga asoslangan loyihalar ishlab chiqamiz.
              </p>
            </div>
            <div className="hover:shadow-md p-4 duration-300 rounded-xl">
              <div className="border-b-4 w-[126px] border-gainsboro">
                <Image src={city} alt="img" className="pb-6" />
              </div>
              <p className="text-[26px] font-semibold text-black pt-5 ">
                Shahar Muhitiga Moslashuv{" "}
              </p>
              <p className="pt-5 text-[26px] text-textBlack max-w-[665px]">
                Toshkent va O‘zbekistonning o‘ziga xos me’moriy an’analarini
                zamonaviy yondashuv bilan uyg‘unlashtirish.
              </p>
            </div>
            <div className="hover:shadow-md p-4 duration-300 rounded-xl">
              <div className="border-b-4 w-[126px] border-gainsboro">
                <Image src={architecture} alt="img" className="pb-6" />
              </div>
              <p className="text-[26px] font-semibold text-black pt-5 ">
                Arxitekturada Innovatsiya va Texnologiyalar{" "}
              </p>
              <p className="pt-5 text-[26px] text-textBlack max-w-[665px]">
                Biz BIM (Building Information Modeling) tizimi va Revit kabi
                ilg‘or texnologiyalarni joriy qilish orqali samaradorlik va
                sifatni oshiramiz.
              </p>
            </div>
            <div className="hover:shadow-md p-4 duration-300 rounded-xl">
              <div className="border-b-4 w-[126px] border-gainsboro">
                <Image src={shake} alt="img" className="pb-6" />
              </div>
              <p className="text-[26px] font-semibold text-black pt-5 ">
                Mijozlarga Yo‘naltirilgan Yondashuv{" "}
              </p>
              <p className="pt-5 text-[26px] text-textBlack max-w-[665px]">
                Biz har bir loyihani mijozning ehtiyojlari va orzulari asosida
                ishlab chiqamiz. Bizning ishimiz har bir mijozga individual
                yondashuvga asoslanadi.
              </p>
            </div>
          </div>
        </div>

        <Team />
      </section>
      <section>
        <Contact />
      </section>
    </main>
  );
};

export default Home;
