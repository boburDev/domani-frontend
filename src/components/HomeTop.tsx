"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "./LanguageProvider";

const HomeTop = () => {
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
    <section
      ref={sectionRef}
      className={`relative bg-cover bg-center w-full h-[1016px] transition-opacity duration-700 ${
        isVisible ? "bg-[url('/images/home-bg.jpg')]" : "bg-none"
      }`}
    >
      <div className="absolute inset-0 bg-black opacity-55 z-0" />
      <div className="container mx-auto relative z-10">
        <div className="text-[25px] md:text-[42px] lg:text-[84px] font-bold text-center text-textWhite pt-[207px] md:pt-[250px] lg:pt-[401px] font-poppins px-1">
          <span className="flex justify-center">{t.slogan1}</span>
        </div>
      </div>
    </section>
  );
};

export default HomeTop;
