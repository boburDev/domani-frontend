"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { phoneHeader, phoneHeaderBlack } from "@/assets";
import { Menu, X } from "lucide-react";
import useLanguage from "../hooks/useLanguage";
import useTranslation from "../hooks/useTranslation";

const Header = () => {
  const pathname = usePathname();
  const isDark = pathname === "/" || pathname === "/social";
  const { language, changeLanguage } = useLanguage();
  const translations = useTranslation(language);

  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const textColor = isDark ? "text-textWhite" : "text-textBlack";
  const logoSrc = isDark ? "/Logo.svg" : "/LogoBlack.png";

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

  if (!translations) return null;

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
            <div className="w-full flex justify-between items-start">
              <Link
                href="/"
                className="w-[113px] h-[28px] md:w-[244px] md:h-[61px]"
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
              <div className="hidden lg:flex gap-[60px] text-[20px] font-medium">
                <Link
                  href="/"
                  className={`${textColor} relative pb-[2px] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] ${
                    isDark ? "after:bg-textWhite" : "after:bg-textBlack"
                  } after:transition-all after:duration-200 hover:after:w-full`}
                >
                  {translations.home}
                </Link>

                <div
                  ref={dropdownRef}
                  className={`relative ${textColor} pb-[2px] cursor-pointer font-medium`}
                >
                  <div
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="font-medium"
                  >
                    Loyihalar
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
                  className={`${textColor} relative font-medium pb-[2px] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] ${
                    isDark ? "after:bg-textWhite" : "after:bg-textBlack"
                  } after:transition-all after:duration-200 hover:after:w-full`}
                >
                  Maqola
                </Link>
                <Link
                  href="/about"
                  className={`${textColor} relative font-medium pb-[2px] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] ${
                    isDark ? "after:bg-textWhite" : "after:bg-textBlack"
                  } after:transition-all after:duration-200 hover:after:w-full`}
                >
                  Biz haqimizda
                </Link>
                <Link
                  href="/social"
                  className={`${textColor} relative font-medium pb-[2px] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] ${
                    isDark ? "after:bg-textWhite" : "after:bg-textBlack"
                  } after:transition-all after:duration-200 hover:after:w-full`}
                >
                  Ijtimoiy tarmoqlar
                </Link>
              </div>

              {/* Contact + Lang - Desktop */}
              <div className="hidden lg:flex">
                <div className="flex gap-4 justify-between items-center text-[22px]">
                  <button className={textColor}>O’Z</button>
                  <button className="text-lightGrey">EN</button>
                  <button className="text-lightGrey">RU</button>
                </div>
                <div className="flex gap-2 items-center pl-6">
                  <Image
                    src={isDark ? phoneHeader : phoneHeaderBlack}
                    alt="img"
                  />
                  <p className={`text-5 font-bold ${textColor}`}>
                    +998(99) 944 30 30
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
              Bosh sahifa
            </Link>
            <Link href="/projects/all" onClick={() => setIsMenuOpen(false)}>
              Barcha loyihalar
            </Link>
            <Link
              href="/projects/multi-storey"
              onClick={() => setIsMenuOpen(false)}
            >
              Ko’p qavatli
            </Link>
            <Link
              href="/projects/low-rise"
              onClick={() => setIsMenuOpen(false)}
            >
              Kam qavatli
            </Link>
            <Link
              href="/projects/non-residential"
              onClick={() => setIsMenuOpen(false)}
            >
              Noturarjoy
            </Link>
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              Maqola
            </Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>
              Biz haqimizda
            </Link>
            <Link href="/social" onClick={() => setIsMenuOpen(false)}>
              Ijtimoiy tarmoqlar
            </Link>

            <div className="flex gap-4 pt-6">
              <button className="text-white">O’Z</button>
              <button className="text-lightGrey">EN</button>
              <button className="text-lightGrey">RU</button>
            </div>
            <div className="flex gap-2 items-center pt-4">
              <Image src={phoneHeader} alt="img" />
              <p className="text-white font-bold text-lg">+998(99) 944 30 30</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
