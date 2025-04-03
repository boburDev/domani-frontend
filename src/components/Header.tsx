import React from "react";
import Link from "next/link";
import { phoneHeader } from "@/assets";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <div className="fixed z-50 top-0 left-0 right-0">
        {" "}
        <div className="container mx-auto pt-[82px]  pl-[120px] pr-[109px] ">
          <div className="flex justify-between items-start">
            <Link href="/">
              <img src="Logo.svg" alt="img" className="w-[244px] h-[61px]" />
            </Link>
            <div className="flex gap-[60px] text-[20px] font-medium">
              <Link
                href="/"
                className="text-textWhite relative pb-[2px] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-textWhite after:transition-all after:duration-200 hover:after:w-full"
              >
                Bosh sahifa
              </Link>
              <Link
                href="/"
                className="text-textWhite relative pb-[2px] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-textWhite after:transition-all after:duration-200 hover:after:w-full"
              >
                Loyihalar
              </Link>
              <Link
                href="/"
                className="text-textWhite relative pb-[2px] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-textWhite after:transition-all after:duration-200 hover:after:w-full"
              >
                Maqola
              </Link>
              <Link
                href="/"
                className="text-textWhite relative pb-[2px] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-textWhite after:transition-all after:duration-200 hover:after:w-full"
              >
                Biz haqimizda
              </Link>
              <Link
                href="/"
                className="text-textWhite relative pb-[2px] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-textWhite after:transition-all after:duration-200 hover:after:w-full"
              >
                Ijtimoiy tarmoq
              </Link>
            </div>
            <div className="flex">
              <div className="flex gap-4 text-[22px]">
                <button className="text-textWhite font-semibold">O’Z</button>
                <button className="text-lightGrey">EN</button>
                <button className="text-lightGrey">RU</button>
              </div>
              <div className="flex gap-2 items-center pl-6">
                <Image src={phoneHeader} alt="img" />
                <p className="text-5 font-bold text-textWhite">
                  +998(99) 944 30 30
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
