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
import { useLanguage } from "./LanguageProvider";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <div>
      <div className="bg-rangoonGreen">
        <div className="container mx-auto px-1 md:px-5">
          <div className="flex flex-col">
            <div className="flex justify-center md:hidden pt-10">
              <Link href="#">
                <Image
                  loading="lazy"
                  width={200}
                  height={50}
                  className="md:w-[244px] md:h-[60px] w-[153px] h-[38px]"
                  src="/Logo.svg"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="flex pt-[50px] md:pt-[92px] sm:gap-5 xxl:pr-[340px] justify-between  w-full">
              <div className="hidden md:flex">
                <Link href="#">
                  <Image
                    loading="lazy"
                    width={200}
                    height={50}
                    className="md:w-[244px] md:h-[60px] w-[153px] h-[38px]"
                    src="/Logo.svg"
                    alt="Logo"
                  />
                </Link>
              </div>
              <div className="flex flex-col gap-5">
                <Link
                  href="/"
                  className="text-lightGrey  text-[14px] md:text-[20px] hover:underline hover:decoration-white hover:underline-offset-8 duration-200"
                >
                  {t.fhome}
                </Link>

                <Link
                  href="/projects/all"
                  className="text-lightGrey text-[14px] md:text-[20px] hover:underline hover:decoration-white hover:underline-offset-8 duration-200"
                >
                  {t.fprojects}
                </Link>
                <Link
                  href="/"
                  className="text-lightGrey text-[14px] md:text-[20px] hover:underline hover:decoration-white hover:underline-offset-8 duration-200"
                >
                  {t.farticles}
                </Link>
                <Link
                  href="/about"
                  className="text-lightGrey  text-[14px] md:text-[20px] hover:underline hover:decoration-white hover:underline-offset-8 duration-200"
                >
                  {t.fabout}
                </Link>
                <Link
                  href="/social"
                  className="text-lightGrey  text-[14px] md:text-[20px] hover:underline hover:decoration-white hover:underline-offset-8 duration-200"
                >
                  {t.fsocial_network}
                </Link>
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-5 text-lightGrey">
                  <Link
                    className="text-[14px] md:text-[20px]"
                    href="tel:+998999443030"
                  >
                    <Image
                      loading="lazy"
                      src={phoneIcon}
                      alt="image"
                      width={50}
                      height={50}
                      className="w-5 h-5 md:w-8 md:h-8"
                    />
                  </Link>

                  <Link
                    href="tel:+998999443030"
                    className="text-[14px] md:text-[20px]"
                  >
                    {t.fphone}
                  </Link>
                </div>
                <div className="flex items-center gap-5 text-lightGrey">
                  <Link href="mailto:domaniarchitect@gmail.com">
                    <Image
                      width={50}
                      height={50}
                      loading="lazy"
                      src={mailIcon}
                      alt="image"
                      className="w-5 h-5 md:w-8 md:h-8"
                    />
                  </Link>
                  <Link
                    href="mailto:domaniarchitect@gmail.com"
                    className="text-[14px] md:text-[20px]"
                  >
                    {t.femail}
                  </Link>
                </div>
                <div className="flex items-center gap-5 text-lightGrey">
                  <Link
                    className="text-[14px] md:text-[20px]"
                    target="_blank"
                    href="https://www.google.com/maps?q=Mirzo+Ulug'bek+tumani,+Mirzo+Ulugbek+shoh+ko'chasi,+Stair+Academy+binosi+2-qavat"
                  >
                    <Image
                      width={50}
                      height={50}
                      loading="lazy"
                      src={locationIcon}
                      alt="image"
                      className="w-5 h-5 md:w-8 md:h-8"
                    />
                  </Link>
                  <Link
                    target="_blank"
                    href="https://www.google.com/maps?q=Mirzo+Ulug'bek+tumani,+Mirzo+Ulugbek+shoh+ko'chasi,+Stair+Academy+binosi+2-qavat"
                    className="text-5 max-w-[202px] md:max-w-[370px]  text-[14px] md:text-[20px]"
                  >
                    {t.faddress}
                  </Link>
                </div>

                <div className="flex gap-4">
                  <Link
                    href="https://t.me/Domani_architects"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      width={50}
                      height={50}
                      loading="lazy"
                      src={telegram}
                      alt="Telegram"
                    />
                  </Link>
                  <Link
                    href="https://www.youtube.com/@domaniarchitects8449"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      width={50}
                      height={50}
                      loading="lazy"
                      src={youtube}
                      alt="YouTube"
                    />
                  </Link>
                  <Link
                    href="https://www.instagram.com/domani_architects/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      width={50}
                      height={50}
                      loading="lazy"
                      src={instagram}
                      alt="Instagram"
                    />
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
                className="relative pl-1 pb-1 after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-transparent hover:after:bg-textWhite  underline-offset-4"
              >
                {t.fcompany_name}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
