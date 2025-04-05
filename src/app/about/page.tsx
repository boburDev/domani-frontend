import { abouThird, aboutSecond, archBereau } from "@/assets";
import Contact from "@/components/Contact";
import Team from "@/components/Staff";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-5">
      <section className="pt-[150px] md:pt-[250px] xl:pt-[312px]">
        <div className="lg:flex justify-between ">
          <div className="lg:pr-[73px]">
            <p className="text-black text-[28px] font-medium sm:text-[28px] md:text-[48px]">
              Arxitektura dizayn byurosi
            </p>
            <p className="text-[26px] text-textBlack pt-[42px] max-w-[822px]">
              Domani architects byurosi 2019 yilda tashkil etilgan. O‘zbekiston
              bozorida faoliyati yuritib keladi. Ekologik va funksional
              arxitekturasining qarashlari va estetikasini targ‘ib qilmoqda,
              Jamoamizda 35+ nafar turli sohalarga ixtisoslashgan
              professionallar ishlaydi, bu esa istalgan murakkablikdagi
              loyihalarni to‘liq siklda yaratish imkonini beradi. Domani
              architects yirik turar-joy va tijorat binolari, shahar
              rejalashtirish hamda rekreatsion hududlar rivojlantirish bo‘yicha
              xalqaro loyihalar ustida ishlaydi. Biz inson kapitalini
              rivojlantirish, shahar va hududlarning iqtisodiy, tabiiy hamda
              turistik salohiyatini ochib berish, bilimlar iqtisodiyotini
              shakllantirishga yo‘naltirilgan loyihalarga alohida e’tibor
              qaratamiz.
            </p>
          </div>
          <div>
            <Image
              src={archBereau}
              alt="img"
              className="max-w-[827] pt-[50px] h-full"
            />
          </div>
        </div>
        <div className="lg:flex  flex-row-reverse justify-between pt-8 lg:pt-[132px]">
          <div>
            <p className="text-[26px] text-textBlack pt-[42px] max-w-[822px]">
              <span className="inline-block">
                Ijodkor mutaxassislar jamoasi, bizning asosiy maqsadimiz har bir
                makonni nafislik va ma’no bilan to‘ldirishdir. Biz har bir
                mijozga individual yondashgan holda, zamonaviy, funksional va
                tijorat jihatdan samarali loyihalar ishlab chiqamiz. Bizning
                yechimlarimiz vaqt sinovidan o‘tgan va o‘zining dolzarbligini
                yo‘qotmaydi.
              </span>
              To‘liq sikl yondashuvi tufayli biz loyihani dastlabki g‘oyadan
              boshlab, uning to‘liq hayotga tatbiq etilishigacha bo‘lgan barcha
              bosqichlarini amalga oshiramiz. Bu esa mijozlarimizga ishonch va
              qulaylik bag‘ishlaydi.
              <span className="inline-block">
                {" "}
                Biz ishonch va sifatni tanlaymiz!
              </span>
            </p>
          </div>
          <div className="lg:pr-[114px] pt-[30px] lg:pt-0">
            <Image src={aboutSecond} alt="img" className="w-[793] h-full" />
          </div>
        </div>
        <div className="lg:flex justify-between pt:pt-10 lg:pt-[130px]">
          <div className="lg:pr-[114px]">
            <p className="text-[26px] text-textBlack pt-[55px] max-w-[822px]">
              <span className="inline-block">
                Obro‘imiz biz uchun eng katta boylik, shu sababli har bir
                loyihamizga yuksak mas’uliyat bilan yondashamiz.
              </span>
              <span className="inline-block">
                {" "}
                Bizning ijodiy yondashuvimiz va professional ish uslubimiz
                xalqaro va milliy arxitektura tanlovlarida bir necha bor e’tirof
                etilgan.
              </span>
              <span className="inline-block">
                Mukofotlarga sazovor bo‘lgan loyihalarimiz sifat va
                innovatsiyaning yorqin namunasi!
              </span>
              <span className="inline-block">
                Domani Architects – arxitektura san’atini yangi darajaga olib
                chiqamiz!
              </span>
            </p>
          </div>
          <div className="pt-10">
            <Image src={abouThird} alt="img" className="w-[793px] h-[509px]" />
          </div>
        </div>
      </section>
      <section>
        <Team />
        <Contact />
      </section>
    </div>
  );
};

export default About;
