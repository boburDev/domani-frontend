// "use client";

// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { phoneHeader } from "@/assets";
// import Image from "next/image";

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 20) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div>
//       <div className="fixed z-50 top-0 left-0 right-0 transition-all duration-300">
//         <div
//           className={` ${
//             isScrolled
//               ? "pt-[25px] pb-5 bg-black border-b border-textWhite bg-opacity-45"
//               : "lg:pt-[82px] lg:pb-10 pt-[29px] pb-2"
//           } xxl:pl-[120px] xxl:pr-[109px] transition-all duration-500`}
//         >
//           <div className="container mx-auto flex justify-between items-start">
//             <Link
//               href="/"
//               className="w-[113px] h-[28px] md:w-[244px] md:h-[61px]"
//             >
//               <Image
//                 width={100}
//                 height={100}
//                 src="Logo.svg"
//                 alt="img"
//                 className="w-full h-full"
//               />
//             </Link>
//             <div className="hidden lg:flex gap-[60px] text-[20px] font-medium">
//               <Link
//                 href="/"
//                 className="text-textWhite relative pb-[2px] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-textWhite after:transition-all after:duration-200 hover:after:w-full"
//               >
//                 Bosh sahifa
//               </Link>
//               <div className="text-textWhite relative pb-[2px] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] group">
//                 Loyihalar
//                 <div className="hidden group-hover:flex">
//                   <div className="w-[172px] h-[185px] p-5 text-[14px] text-textBlack absolute bg-textWhite font-semibold rounded-xl flex flex-col gap-[15px] mt-1">
//                     <Link href="/projects/all">
//                       <div>Barcha loyihalar</div>
//                     </Link>
//                     <Link href="/projects/multi-storey">
//                       <div>Ko’p qavatli</div>
//                     </Link>
//                     <Link href="/projects/low-rise">
//                       <div>Kam qavatli</div>
//                     </Link>
//                     <Link href="/projects/non-residential">
//                       <div>Noturarjoy</div>
//                     </Link>
//                   </div>
//                 </div>
//               </div>

//               <Link
//                 href="/"
//                 className="text-textWhite relative pb-[2px] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-textWhite after:transition-all after:duration-200 hover:after:w-full"
//               >
//                 Maqola
//               </Link>
//               <Link
//                 href="/about"
//                 className="text-textWhite relative pb-[2px] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-textWhite after:transition-all after:duration-200 hover:after:w-full"
//               >
//                 Biz haqimizda
//               </Link>
//               <Link
//                 href="/social"
//                 className="text-textWhite relative pb-[2px] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-textWhite after:transition-all after:duration-200 hover:after:w-full"
//               >
//                 Ijtimoiy tarmoqlar
//               </Link>
//             </div>
//             <div className="hidden lg:flex ">
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
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
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
              : "lg:pt-[82px] lg:pb-10 pt-[29px] pb-2"
          } xxl:pl-[120px] xxl:pr-[109px] transition-all duration-500`}
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
                  src="/Logo.svg"
                  alt="img"
                  className="w-full h-full"
                />
              </Link>

              {/* Desktop nav */}
              <div className="hidden lg:flex gap-[60px] text-[20px] font-medium">
                <Link
                  href="/"
                  className="text-textWhite relative pb-[2px] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-textWhite after:transition-all after:duration-200 hover:after:w-full"
                >
                  Bosh sahifa
                </Link>
                <div className="text-textWhite relative pb-[2px] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] group">
                  Loyihalar
                  <div className="hidden group-hover:flex">
                    <div className="w-[172px] h-[185px] p-5 text-[14px] text-textBlack absolute bg-textWhite font-semibold rounded-xl flex flex-col gap-[15px] mt-1">
                      <Link href="/projects/all">
                        <div>Barcha loyihalar</div>
                      </Link>
                      <Link href="/projects/multi-storey">
                        <div>Ko’p qavatli</div>
                      </Link>
                      <Link href="/projects/low-rise">
                        <div>Kam qavatli</div>
                      </Link>
                      <Link href="/projects/non-residential">
                        <div>Noturarjoy</div>
                      </Link>
                    </div>
                  </div>
                </div>
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

              {/* Contact + Lang - Desktop */}
              <div className="hidden lg:flex">
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

              {/* Hamburger button */}
              <div className="lg:hidden flex items-center">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? (
                    <X size={32} color="white" />
                  ) : (
                    <Menu size={32} color="white" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-40 flex flex-col pt-8 items-center text-textWhite text-xl font-semibold gap-y-4">
            {/* X belgisini ekranning yuqori o'ng burchagiga joylashtiramiz */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 z-50"
            >
              <X size={32} color="white" />
            </button>

            {/* Mobil menyu linklari */}
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

            {/* Lang & Phone */}
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
