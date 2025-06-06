"use client";
import { aboutBuilding, aboutSecond, archBereau } from "@/assets";
import Contact from "@/components/Contact";
import { useLanguage } from "@/components/LanguageProvider";
import Team from "@/components/Staff";
import Image from "next/image";
const About = () => {
  const { t } = useLanguage();

  return (
    <>
      <div className="container mx-auto px-5">
        <section className="pt-[150px] md:pt-[250px] xl:pt-[312px]">
          <div className="lg:flex justify-between ">
            <div className="lg:pr-[73px]">
              <p className="text-black text-[18px] font-medium sm:text-[28px] md:text-[48px]">
                {t.about_title}
              </p>
              <p className="text-[14px] md:text-[26px] text-textBlack pt-[12px] md:pt-[42px] max-w-[822px]">
                {t.about_description}
              </p>
            </div>
            <div>
              <Image
                width={850}
                height={850}
                loading="lazy"
                src={archBereau}
                alt="img"
                className="max-w-[827] pt-[50px] h-full"
              />
            </div>
          </div>
          <div className="lg:flex  flex-row-reverse justify-between pt-8 lg:pt-[132px]">
            <div>
              <p className="text-[14px] md:text-[26px] text-textBlack pt-[42px] max-w-[822px]">
                <span className="inline-block">{t.about_teamDescription}</span>
                {t.about_cycleDescription}
                <span className="inline-block"> {t.about_trust}</span>
              </p>
            </div>
            <div className="lg:pr-[114px] pt-[30px] lg:pt-0">
              <Image
                width={850}
                height={850}
                loading="lazy"
                src={aboutSecond}
                alt="img"
                className="w-[793] h-full"
              />
            </div>
          </div>
          <div className="lg:flex justify-between pt:pt-10 lg:pt-[130px]">
            <div className="lg:pr-[114px]">
              <p className="text-[14px] md:text-[26px] text-textBlack pt-[55px] max-w-[822px]">
                <span className="inline-block">{t.about_reputation}</span>
                <span className="inline-block"> {t.about_award}</span>
                <span className="inline-block">{t.about_award}</span>
                <span className="inline-block">{t.about_future}</span>
              </p>
            </div>
            <div className="pt-10 flex justify-start items-start">
              <Image
                width={14527}
                height={6224}
                loading="lazy"
                src={aboutBuilding}
                alt="img"
                className="w-[793px] h-[full] rounded-xl object-contain"
              />
            </div>
          </div>
        </section>
        <section>
          <Team />
          <Contact page={window.location.pathname} />
        </section>
      </div>
    </>
  );
};

export default About;
