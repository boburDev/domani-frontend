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

const Footer = () => {
  return (
    <div className="bg-rangoonGreen">
      <div className="container mx-auto">
        <div className="flex pt-[92px] justify-between px-[80px]">
          <div>
            <Link href="#">
              <img className="w-[244px] h-[60px]" src="Logo.svg" alt="Logo" />
            </Link>
          </div>
          <div className="flex flex-col gap-5">
            <Link
              href="/"
              className="text-lightGrey hover:text-textWhite duration-200"
            >
              Bosh sahifa
            </Link>
            <Link
              href="/"
              className="text-lightGrey hover:text-textWhite duration-200"
            >
              Loyihalar
            </Link>
            <Link
              href="/"
              className="text-lightGrey hover:text-textWhite duration-200"
            >
              Maqola
            </Link>
            <Link
              href="/"
              className="text-lightGrey hover:text-textWhite duration-200"
            >
              Biz haqimizda
            </Link>
            <Link
              href="/"
              className="text-lightGrey hover:text-textWhite duration-200"
            >
              Ijtimoiy tarmoq
            </Link>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-5 text-lightGrey">
              <Image src={phoneIcon} alt="image" className="w-8 h-8" />
              <p className="text-5">+998(99) 944 30 30</p>
            </div>
            <div className="flex items-center gap-5 text-lightGrey">
              <Image src={mailIcon} alt="image" className="w-8 h-8" />
              <p className="text-5">domaniarchitect@gmail.com</p>
            </div>
            <div className="flex items-center gap-5 text-lightGrey">
              <Image src={locationIcon} alt="image" className="w-8 h-8" />
              <p className="text-5 max-w-[370px]">
                Mirzo Ulug'bek tumani, Mirzo Ulugbek shoh ko'chasi, Stair
                Academy binosi 2-qavat
              </p>
            </div>
            <div className="flex gap-4">
              <Image src={telegram} alt="img" />
              <Image src={youtube} alt="img" />
              <Image src={instagram} alt="img" />
            </div>
          </div>
        </div>
        <div>
          <p className="text-center text-textWhite pt-[107px] pb-9">
            © developed by nuvex.uz
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
