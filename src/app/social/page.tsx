"use client";

import { instagramIcon, telegramIcon, youtubeIcon } from "@/assets";
import Contact from "@/components/Contact";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

const Social = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div>
        <section
          ref={sectionRef}
          className={`relative bg-cover object-contain w-full h-[100vh] transition-opacity duration-700 ${
            isVisible ? "bg-[url('/images/barxan/5.png')]" : "bg-none"
          }`}
        >
          <div className="absolute inset-0 bg-black opacity-55 z-0" />
          <div className="container mx-auto px-5">
            <div className="relative z-10">
              <p className="max-w-[1477px] text-[25px] md:text-[48px] lg:text-[56px] xl:text-[54px] font-bold text-center md:text-start text-textWhite pt-[140px] md:pt-[180px] lg:pt-[237px] font-poppins">
                {t.social_title}
              </p>
            </div>
            <div className="z-20 absolute pt-[70px] xl:pt-[100px] flex gap-[10px] sm:gap-6 md:gap-12 left-1/2 -translate-x-1/2  lg:left-1/3 xxl:left-2/4">
              <Link
                target="_blank"
                href="https://www.instagram.com/domani_architects/"
                className="w-[120px] h-[120px] lg:w-[220px] lg:h-[200px] flex flex-col items-center justify-center gap-4 rounded-xl text-textWhite backdrop-blur-lg bg-textWhite/30 transition-transform transform hover:scale-110 hover:-translate-y-2 duration-500"
              >
                <Image
                  width={60}
                  height={30}
                  loading="lazy"
                  src={instagramIcon}
                  alt="Instagram"
                  className="w-[28px] lg:w-[60px]"
                />
                <p className="text-textWhite text-[14px] lg:text-[24px]">
                  {t.social_instagram}
                </p>
              </Link>
              <Link
                target="_blank"
                href="https://t.me/Domani_architects"
                className="w-[120px] h-[120px] lg:w-[220px] lg:h-[200px] flex flex-col items-center justify-center gap-4 rounded-xl text-textWhite backdrop-blur-lg bg-textWhite/30 transition-transform transform hover:scale-110 hover:-translate-y-2 duration-500"
              >
                <Image
                  width={60}
                  height={30}
                  loading="lazy"
                  src={telegramIcon}
                  alt="Telegram"
                  className="w-[28px] lg:w-[60px]"
                />
                <p className="text-textWhite text-[14px] lg:text-[24px] ">
                  {t.social_telegram}
                </p>
              </Link>
              <Link
                target="_blank"
                href="https://www.youtube.com/@domaniarchitects8449"
                className="w-[120px] h-[120px] lg:w-[220px] lg:h-[200px] flex flex-col items-center justify-center gap-4 rounded-xl text-textWhite backdrop-blur-lg bg-textWhite/30 transition-transform transform hover:scale-110 hover:-translate-y-2 duration-500"
              >
                <Image
                  width={60}
                  height={30}
                  loading="lazy"
                  src={youtubeIcon}
                  alt="YouTube"
                  className="w-[28px] lg:w-[60px]"
                />
                <p className="text-textWhite text-[14px] lg:text-[24px]">
                  {t.social_youtube}
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact bo‘limi */}
        <section className="container mx-auto px-5">
          <Contact
            page={typeof window !== "undefined" ? window.location.pathname : ""}
          />
        </section>
      </div>
    </div>
  );
};

export default Social;
