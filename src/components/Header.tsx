import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <div className="bg-black">
        <div className="container mx-auto pt-[82px] pb-10 px-[120px]">
          <div className="flex justify-between items-center">
            <Link href="/">
              <img src="Logo.svg" alt="img" />
            </Link>
            <div className="flex gap-[48px]">
              <Link href="/" className="text-textWhite ">
                Bosh sahifa
              </Link>
              <Link href="/" className="text-textWhite ">
                Loyihalar
              </Link>
              <Link href="/" className="text-textWhite ">
                Maqola
              </Link>
              <Link href="/" className="text-textWhite ">
                Biz haqimizda
              </Link>
              <Link href="/" className="text-textWhite ">
                Ijtimoiy tarmoq
              </Link>
            </div>
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
