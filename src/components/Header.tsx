"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { phoneHeader, phoneHeaderBlack } from "@/assets";
import { Menu, X } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import PhoneIcon from "@/assets/icons/PhoneIcon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, changeLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isDark = pathname === "/" || pathname === "/social";
  const textColor = isDark ? "text-textWhite" : "text-textBlack";
  const logoSrc = isDark ? "/Logo.svg" : "/LogoBlack.png";

  const toggleLanguage = (lang: string) => {
    changeLanguage(lang as "uz" | "en" | "ru");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      <div
        className={`absolute z-50 top-0 left-0 right-0 transition-all duration-300`}
      >
        <div
          className={`pt-[25px] pb-5 ${
            isDark ? "bg-transparent" : "bg-white"
          } border-textWhite lg:pt-[82px] xxl:pl-[120px] xxl:pr-[109px]`}
        >
          <div className="container mx-auto px-5">
            <div className="w-full flex lg:gap-3 gap-3 2xl:gap-12 justify-between items-center">
              <Link
                href="/"
                className="xl:w-[230px] xl:h-[61px] w-[90px] h-[40px] md:w-[110px] md:h-[51px]"
              >
                <Image
                  width={100}
                  height={100}
                  src={logoSrc}
                  alt="logo"
                  className="w-full h-full"
                />
              </Link>

              {/* Desktop nav */}
              <div className="hidden flex-1 lg:flex lg:gap-6 gap-3 lg:text-[20px] text-base font-medium lg:justify-between">
                <Link
                  href="/"
                  className={`${textColor} relative pb-[2px] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] ${
                    isDark ? "after:bg-textWhite" : "after:bg-textBlack"
                  } after:transition-all after:duration-200 hover:after:w-full`}
                >
                  {t.home}
                </Link>

                <div className="text-textWhite relative pb-[2px] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] group">
                  {t.allProjects}
                  <div className="hidden group-hover:flex">
                    <div className="w-[172px] h-[185px] p-5 text-[14px] text-textBlack absolute bg-textWhite font-semibold rounded-xl flex flex-col gap-[15px] mt-1">
                      <Link href="/projects/all">{t.allProjects}</Link>
                      <Link href="/projects/multi-storey">{t.multiStorey}</Link>
                      <Link href="/projects/low-rise">{t.lowRise}</Link>
                      <Link href="/projects/non-residential">
                        {t.nonResidential}
                      </Link>
                    </div>
                  </div>

                  {isOpen && (
                    <div className="w-[158px] h-[185px] p-5 text-[14px] text-textBlack absolute bg-textWhite font-semibold rounded-xl flex flex-col gap-[15px] mt-1 z-50 ">
                      {[
                        { href: "/projects/all", label: "Barcha loyihalar" },
                        {
                          href: "/projects/multi-storey",
                          label: "Ko’p qavatli",
                        },
                        { href: "/projects/low-rise", label: "Kam qavatli" },
                        {
                          href: "/projects/non-residential",
                          label: "Noturarjoy",
                        },
                      ].map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="relative w-fit pb-1 group"
                        >
                          <span className="after:content-[''] after:block after:h-[2px] after:bg-transparent group-hover:after:bg-textBlack after:transition-all after:duration-300 after:w-0 group-hover:after:w-full">
                            {link.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/"
                  className="text-textWhite hover:after:w-full relative pb-[2px] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-textWhite after:transition-all after:duration-200"
                >
                  {t.articles}
                </Link>

                <Link
                  href="/about"
                  className="text-textWhite hover:after:w-full relative pb-[2px] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-textWhite after:transition-all after:duration-200"
                >
                  {t.about}
                </Link>

                <Link
                  href="/social"
                  className="text-textWhite hover:after:w-full relative pb-[2px] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-textWhite after:transition-all after:duration-200"
                >
                  {t.social}
                </Link>
              </div>

              {/* Language switch + phone */}
              <div className="hidden lg:flex items-center xl:gap-6 gap-3">
                <div className="flex xl:gap-3.5 gap-2 justify-between items-center ">
                  <button
                    onClick={() => toggleLanguage("uz")}
                    className={
                      language === "uz"
                        ? "text-textWhite font-semibold xl:text-[20px] text-base"
                        : "text-lightGrey xl:text-[20px] text-base"
                    }
                  >
                    UZ
                  </button>
                  <button
                    onClick={() => toggleLanguage("en")}
                    className={
                      language === "en"
                        ? "text-textWhite font-semibold xl:text-[20px] text-base"
                        : "text-lightGrey xl:text-[20px] text-base"
                    }
                  >
                    EN
                  </button>
                  <button
                    onClick={() => toggleLanguage("ru")}
                    className={
                      language === "ru"
                        ? "text-textWhite font-semibold xl:text-[20px] text-base"
                        : "text-lightGrey xl:text-[20px] text-base"
                    }
                  >
                    РУ
                  </button>
                </div>
                <div className="flex lg:gap-2 gap-1 items-center">
                  <PhoneIcon className="w-[22px] h-[22px] xl:w-[27px] xl:h-[27px]" />
                  <p className="xl:text-xl text-base font-bold text-textWhite">
                    {t.phone}
                  </p>
                </div>
              </div>

              {/* Hamburger button */}
              <div className="lg:hidden flex items-center">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? (
                    <X size={32} color={isDark ? "white" : "black"} />
                  ) : (
                    <Menu size={32} color={isDark ? "white" : "black"} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-40 flex flex-col pt-8 items-center text-textWhite text-xl font-semibold gap-y-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 z-50"
            >
              <X size={32} color="white" />
            </button>

            <Link
              href="/"
              className="pt-12"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.home}
            </Link>
            <Link href="/projects/all" onClick={() => setIsMenuOpen(false)}>
              {t.allProjects}
            </Link>
            <Link
              href="/projects/multi-storey"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.multiStorey}
            </Link>
            <Link
              href="/projects/low-rise"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.lowRise}
            </Link>
            <Link
              href="/projects/non-residential"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nonResidential}
            </Link>
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              {t.articles}
            </Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>
              {t.about}
            </Link>
            <Link href="/social" onClick={() => setIsMenuOpen(false)}>
              {t.social}
            </Link>

            <div className="flex gap-4 pt-6">
              <button
                onClick={() => toggleLanguage("uz")}
                className="text-white"
              >
                UZ
              </button>
              <button
                onClick={() => toggleLanguage("en")}
                className="text-lightGrey"
              >
                EN
              </button>
              <button
                onClick={() => toggleLanguage("ru")}
                className="text-lightGrey"
              >
                РУ
              </button>
            </div>
            <div className="flex gap-2 items-center pt-4">
              <Image src={phoneHeader} alt="img" />
              <p className="text-white font-bold text-lg">{t.phone}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
