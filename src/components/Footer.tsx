"use client";
import {
  instagram,
  locationIcon,
  mailIcon,
  phoneIcon,
  telegram,
  youtube,
} from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useLanguage } from "./LanguageProvider";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-rangoonGreen">
      <div className="container mx-auto px-5">
        <div className="flex flex-col">
          <div className="flex justify-center md:hidden pt-10">
            <Link href="#">
              <Image
                width={200}
                height={50}
                className="w-[244px] h-[60px]"
                src="Logo.svg"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="flex pt-[92px] sm:gap-5 xl:pr-[340px] justify-between w-full">
            <div className="hidden md:flex">
              <Link href="#">
                <Image
                  width={200}
                  height={50}
                  className="w-[244px] h-[60px]"
                  src="Logo.svg"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="flex flex-col gap-5">
              <Link
                href="/"
                className="text-lightGrey shadow-lg hover:underline hover:decoration-2 hover:underline-offset-8 duration-200"
              >
                {t.fhome}
              </Link>

              <Link
                href="/projects"
                className="text-lightGrey shadow-lg hover:underline hover:decoration-2  hover:underline-offset-8 duration-200"
              >
                {t.fprojects}
              </Link>
              <Link
                href="/"
                className="text-lightGrey shadow-lg hover:underline hover:decoration-2  hover:underline-offset-8 duration-200"
              >
                {t.farticles}
              </Link>
              <Link
                href="/about"
                className="text-lightGrey shadow-lg hover:underline hover:decoration-2 hover:underline-offset-8 duration-200"
              >
                {t.fabout}
              </Link>
              <Link
                href="/social"
                className="text-lightGrey shadow-lg hover:underline hover:decoration-2  hover:underline-offset-8 duration-200"
              >
                {t.fsocial_network}
              </Link>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-5 text-lightGrey">
                <Link href="tel:+998999443030">
                  <Image src={phoneIcon} alt="image" className="w-8 h-8" />
                </Link>

                <Link href="tel:+998999443030" className="text-5">
                  {t.fphone}
                </Link>
              </div>
              <div className="flex items-center gap-5 text-lightGrey">
                <Link href="mailto:domaniarchitect@gmail.com">
                  <Image src={mailIcon} alt="image" className="w-8 h-8" />
                </Link>
                <Link
                  href="mailto:domaniarchitect@gmail.com"
                  className="text-5"
                >
                  {t.femail}
                </Link>
              </div>
              <div className="flex items-center gap-5 text-lightGrey">
                <Link
                  target="_blank"
                  href="https://www.google.com/maps?q=Mirzo+Ulug'bek+tumani,+Mirzo+Ulugbek+shoh+ko'chasi,+Stair+Academy+binosi+2-qavat"
                >
                  <Image src={locationIcon} alt="image" className="w-8 h-8" />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.google.com/maps?q=Mirzo+Ulug'bek+tumani,+Mirzo+Ulugbek+shoh+ko'chasi,+Stair+Academy+binosi+2-qavat"
                  className="text-5 max-w-[202px] md:max-w-[370px] "
                >
                  {t.faddress}
                </Link>
              </div>

              <div className="flex gap-4">
                <Link
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={telegram} alt="Telegram" />
                </Link>
                <Link
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={youtube} alt="YouTube" />
                </Link>
                <Link
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={instagram} alt="Instagram" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-center text-textWhite pt-[50px] md:pt-[107px] pb-9">
            {t.fpowered_by}
            <Link
              href="https://nuvex.uz/"
              target="_blank"
              className="relative pb-1 after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-transparent hover:after:bg-textWhite underline underline-offset-4"
            >
              {t.fcompany_name}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
