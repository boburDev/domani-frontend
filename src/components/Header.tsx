// import React from "react";
// import Link from "next/link";
// import { phoneHeader } from "@/assets";
// import Image from "next/image";

// const Header = () => {
//   return (
//     <div>
//       <div className="fixed z-50 top-0 left-0 right-0 scrolled ">
//         {" "}
//         <div className="container mx-auto  pl-[120px] pr-[109px]  pt-[82px] ">
//           <div className="flex justify-between items-start">
//             <Link href="/">
//               <img src="Logo.svg" alt="img" className="w-[244px] h-[61px]" />
//             </Link>
//             <div className="flex gap-[60px] text-[20px] font-medium">
//               <Link
//                 href="/"
//                 className="text-textWhite relative pb-[2px] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-textWhite after:transition-all after:duration-200 hover:after:w-full"
//               >
//                 Bosh sahifa
//               </Link>
//               <Link
//                 href="#projects"
//                 className="text-textWhite relative pb-[2px] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-textWhite after:transition-all after:duration-200 hover:after:w-full"
//               >
//                 Loyihalar
//               </Link>
//               <Link
//                 href="/"
//                 className="text-textWhite relative pb-[2px] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-textWhite after:transition-all after:duration-200 hover:after:w-full"
//               >
//                 Maqola
//               </Link>
//               <Link
//                 href="#about"
//                 className="text-textWhite relative pb-[2px] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-textWhite after:transition-all after:duration-200 hover:after:w-full"
//               >
//                 Biz haqimizda
//               </Link>
//               <Link
//                 href="/"
//                 className="text-textWhite relative pb-[2px] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-textWhite after:transition-all after:duration-200 hover:after:w-full"
//               >
//                 Ijtimoiy tarmoq
//               </Link>
//             </div>
//             <div className="flex">
//               <div className="flex gap-4 justify-between items-center text-[22px]">
//                 <button className="text-textWhite font-semibold">O’Z</button>
//                 <button className="text-lightGrey">EN</button>
//                 <button className="text-lightGrey">RU</button>
//               </div>
//               <div className="flex gap-2 items-center pl-6">
//                 <Image src={phoneHeader} alt="img" />
//                 <p className="text-5 font-bold text-textWhite">
//                   +998(99) 944 30 30
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { phoneHeader } from "@/assets";
import Image from "next/image";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="fixed z-50 top-0 left-0 right-0 transition-all duration-300">
        <div
          className={` ${
            isScrolled
              ? "pt-[25px] pb-5 bg-black border-b border-textWhite bg-opacity-45"
              : "pt-[82px] pb-10"
          } pl-[120px] pr-[109px] transition-all duration-500`}
        >
          <div className="container mx-auto flex justify-between items-start">
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
                href="/projects"
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
                href="/about"
                className="text-textWhite relative pb-[2px] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-textWhite after:transition-all after:duration-200 hover:after:w-full"
              >
                Biz haqimizda
              </Link>
              <Link
                href="/social"
                className="text-textWhite relative pb-[2px] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-textWhite after:transition-all after:duration-200 hover:after:w-full"
              >
                Ijtimoiy tarmoqlar
              </Link>
            </div>
            <div className="flex">
              <div className="flex gap-4 justify-between items-center text-[22px]">
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
