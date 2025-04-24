"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { phoneHeader, phoneHeaderBlack } from "@/assets"; // images to be conditionally loaded
import { ChevronDown, Menu, X } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import Container from "./Container";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For controlling mobile menu
  const { language, changeLanguage, t } = useLanguage(); // Language context
  const [isOpen, setIsOpen] = useState(false); // For controlling dropdown menu
  const dropdownRef = useRef<HTMLDivElement>(null); // To detect clicks outside dropdown

  const pathname = usePathname();
  const isDark = pathname === "/" || pathname === "/social";
  const textColor = isDark ? "text-textWhite" : "text-textBlack";
  const logoSrc = isDark ? "/Logo.png" : "/LogoBlack.png";

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
        className={`absolute z-40 top-0 left-0 right-0 transition-all duration-300 font-poppins`}
      >
        <div
          className={`pt-[25px] pb-5 ${
            isDark ? "bg-transparent" : "bg-transparent"
          } border-textWhite lg:pt-[82px] xxl:pl-[120px] xxl:pr-[109px]`}
        >
          <Container>
            <div className="w-full flex lg:gap-3 gap-4 2xl:gap-[110px] justify-between items-center">
              <Link
                href="/"
                className="w-[110px] h-[51px] lg:w-[160px] lg:h-[55px] xl:w-[215px] xl:h-[61px]"
              >
                <Image
                  loading="lazy"
                  width={2880}
                  height={2880}
                  src={logoSrc}
                  alt="logo"
                  className="w-full h-full object-contain"
                />
              </Link>

              {/* Desktop nav */}
              <div className="hidden  lg:flex gap-4 xxl:gap-[62px] lg:text-[20px] text-base font-medium lg:justify-between">
                <Link
                  href="/"
                  className={`${textColor} relative pb-[2px] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] ${
                    isDark
                      ? "after:bg-textWhite"
                      : "after:bg-textBlack font-poppins"
                  } after:transition-all after:duration-200 hover:after:w-full`}
                >
                  {t.home}
                </Link>

                {/* Dropdown menu */}
                <div
                  ref={dropdownRef}
                  className={`relative ${textColor} pb-[2px] cursor-pointer font-medium select-none`}
                >
                  <div
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="font-medium flex items-center gap-1"
                  >
                    {t.countert2}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {isOpen && (
                    <div className="w-[158px] h-[180px] p-5 text-[14px] text-textBlack absolute bg-[#f0f0f0] font-semibold rounded-xl flex flex-col gap-[15px] mt-1 z-50">
                      {[
                        { href: "/projects/all", label: `${t.allProjects}` },
                        {
                          href: "/projects/multi-storey",
                          label: `${t.multiStorey}`,
                        },
                        { href: "/projects/low-rise", label: `${t.lowRise}` },
                        {
                          href: "/projects/non-residential",
                          label: `${t.nonResidential}`,
                        },
                      ].map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="relative w-fit group"
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="border-b-2 border-transparent group-hover:border-textBlack transition-all duration-300 font-semibold text-[14px]">
                            {link.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* <Link
                  href="/"
                  className={`${textColor} relative pb-[2px] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] ${
                    isDark ? "after:bg-textWhite" : "after:bg-textBlack"
                  } after:transition-all after:duration-200 hover:after:w-full`}
                >
                  {t.articles}
                </Link> */}

                <Link
                  href="/about"
                  className={`${textColor} relative pb-[2px] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] ${
                    isDark ? "after:bg-textWhite" : "after:bg-textBlack"
                  } after:transition-all after:duration-200 hover:after:w-full`}
                >
                  {t.about}
                </Link>

                <Link
                  href="/social"
                  className={`${textColor} relative pb-[2px] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] ${
                    isDark ? "after:bg-textWhite" : "after:bg-textBlack"
                  } after:transition-all after:duration-200 hover:after:w-full`}
                >
                  {t.social}
                </Link>
              </div>

              {/* Language switch + phone */}
              <div className="hidden lg:flex items-center xl:gap-[23px] gap-2">
                <div className="flex xl:gap-3.5 gap-[15px] justify-between items-center ">
                  <button
                    onClick={() => toggleLanguage("uz")}
                    className={
                      language === "uz"
                        ? `text-${
                            isDark ? "textWhite" : "textBlack"
                          } font-semibold xl:text-[20px] text-base`
                        : `text-${
                            isDark ? "lightGrey" : "textBlack"
                          } xl:text-[20px] text-base`
                    }
                  >
                    UZ
                  </button>
                  <button
                    onClick={() => toggleLanguage("en")}
                    className={
                      language === "en"
                        ? `text-${
                            isDark ? "textWhite" : "textBlack"
                          } font-semibold xl:text-[20px] text-base`
                        : `text-${
                            isDark ? "lightGrey" : "textBlack"
                          } xl:text-[20px] text-base`
                    }
                  >
                    EN
                  </button>
                  <button
                    onClick={() => toggleLanguage("ru")}
                    className={
                      language === "ru"
                        ? `text-${
                            isDark ? "textWhite" : "textBlack"
                          } font-semibold xl:text-[20px] text-base`
                        : `text-${
                            isDark ? "lightGrey" : "textBlack"
                          } xl:text-[20px] text-base`
                    }
                  >
                    РУ
                  </button>
                </div>
                <Link
                  href="tel:+998999443030"
                  className="flex lg:gap-2 gap-1 items-center"
                >
                  <Image
                    width={50}
                    height={50}
                    loading="lazy"
                    src={!isDark ? phoneHeaderBlack : phoneHeader}
                    alt="img"
                    className="w-[22px] h-[22px] xl:w-[26px] xl:h-[26px]"
                  />
                  <p
                    className={`${
                      isDark ? "text-white" : "text-textBlack"
                    } xl:text-xl text-base font-bold`}
                  >
                    {t.phone}
                  </p>
                </Link>
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
          </Container>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-95 z-40 flex flex-col pt-[25px] items-center text-textWhite text-xl font-semibold gap-y-4">
            {/* LOGO + CLOSE BUTTON */}
            <div className="w-full px-[17px] flex justify-between items-center">
              <Image
                loading="lazy"
                width={2880}
                height={2880}
                src="/Logo.png"
                alt="logo"
                className="object-contain w-[110px] h-[51px] lg:w-[160px] lg:h-[55px] xl:w-[215px] xl:h-[61px]"
              />
              <button onClick={() => setIsMenuOpen(false)}>
                <X size={32} color="white" />
              </button>
            </div>

            {/* NAVIGATION LINKS */}
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
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>
              {t.about}
            </Link>
            <Link href="/social" onClick={() => setIsMenuOpen(false)}>
              {t.social}
            </Link>

            {/* LANGUAGE SWITCHER */}
            <div className="flex gap-4 pt-5">
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

            {/* PHONE SECTION */}
            <div className="flex gap-2 items-center pt-4">
              <Image
                width={50}
                height={50}
                loading="lazy"
                src={phoneHeader}
                alt="img"
                className="w-8 h-8"
              />
              <p className="text-white font-bold text-lg">{t.phone}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
