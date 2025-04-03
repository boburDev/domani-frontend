import { iskanderPartner, map, osiyoPartner } from "@/assets";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <main>
      <div className="relative bg-cover bg-[url('/main-bg.png')] w-full h-[100vh]">
        <div className="absolute inset-0 bg-black opacity-55 z-0" />
        <section className="container mx-auto relative z-10">
          <p className="text-[84px] font-bold text-center text-textWhite pt-[401px] font-playfair">
            Minimalizm. Bu Funktsionallik. Mukammallik
          </p>
        </section>
      </div>

      <section className="container mx-auto px-[120px]">
        <div className="flex pt-[283px]">
          <div className="flex justify-between w-full">
            <div className="border-l-4 border-gainsboro pl-12">
              <p className="text-black font-medium text-[64px]">6</p>
              <p className="text-black font-medium text-[22px] pt-6">Tajriba</p>
            </div>
            <div className="border-l-4 border-gainsboro pl-12">
              <p className="text-black font-medium text-[64px]">158+</p>
              <p className="text-black font-medium text-[22px] pt-6">
                Proyektlar
              </p>
            </div>
            <div className="border-l-4 border-gainsboro pl-12">
              <p className="text-black font-medium text-[64px]">420+</p>
              <p className="text-black font-medium text-[22px] pt-6">
                Lorem ipsum
              </p>
            </div>
            <div className="border-l-4 border-gainsboro pl-12">
              <p className="text-black font-medium text-[64px]">14</p>
              <p className="text-black font-medium text-[22px] pt-6">
                Lorem ipsum
              </p>
            </div>
          </div>
        </div>
        <div className="pt-[246px]">
          <Image src={map} alt="img" />
        </div>
        <div className="pt-[256px] pb-[363px]">
          <p className="text-black font-semibold text-[48px]">Hamkorlarimiz</p>
          <div className="flex justify-between w-full pt-[91px]">
            <Image
              src={iskanderPartner}
              alt="img"
              className="opacity-20 bg-lightGrey hover:opacity-100 duration-300"
            />
            <Image
              src={osiyoPartner}
              alt="img"
              className="opacity-20 bg-lightGrey hover:opacity-100 duration-300"
            />
            <Image
              src={iskanderPartner}
              alt="img"
              className="opacity-20 bg-lightGrey hover:opacity-100 duration-300"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
