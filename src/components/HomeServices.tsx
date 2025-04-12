"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import Image from "next/image";
import {
  firstService,
  fourthService,
  secondService,
  thirdService,
} from "@/assets";

const HomeServices = () => {
  const { t } = useLanguage();
  return (
    <section>
      <div className="pt-[80px] md:pt-[230px]">
        <div className="font-semibold text-[48px] text-black">
          <p className="text-black font-semibold text-[18px] md:text-[48px] mb-[30px] md:mb-20">
            {t.services}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[15px] lg:gap-[17px]  lg:h-[450px] overflow-hidden">
            <div className="flex items-start ">
              <div className="relative w-2/3 h-[176px] lg:w-[412px] lg:h-[333px] rounded-xl overflow-hidden group shadow-md">
                <Link href="/projects/multi-storey">
                  <div className="w-full h-full cursor-pointer">
                    <Image
                      loading="lazy"
                      src={firstService}
                      alt={"asd"}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
                    <div className="absolute w-full bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-center">
                      <p className="text-textWhite font-bold text-[14px] md:text-[24px]  transition-all duration-500 ease-out translate-y-0">
                        {t.servicemulti}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex items-end lg:justify-start justify-end">
              <div className="relative w-2/3 h-[176px] lg:w-[412px] lg:h-[333px] rounded-xl overflow-hidden group shadow-md">
                <Link href="/projects/low-rise">
                  <div className="w-full h-full cursor-pointer">
                    <Image
                      loading="lazy"
                      src={secondService}
                      alt={"asd"}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
                    <div className="absolute w-full bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-center">
                      <p className="text-textWhite font-bold text-[14px] md:text-[24px]  transition-all duration-500 ease-out translate-y-0">
                        {t.serviceLowrise}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex items-start">
              <div className="relative  w-2/3 h-[176px] lg:w-[412px] lg:h-[333px] rounded-xl overflow-hidden group shadow-md">
                <Link href="/projects/none-residential">
                  <div className="w-full h-full cursor-pointer">
                    <Image
                      loading="lazy"
                      src={thirdService}
                      alt={"asd"}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
                    <div className="absolute w-full bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-center">
                      <p className="text-textWhite font-bold text-[14px] md:text-[24px]  transition-all duration-500 ease-out translate-y-0">
                        {t.serviceNonresidential}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex items-end lg:justify-start justify-end">
              <div className="relative w-2/3 h-[176px] lg:w-[412px] lg:h-[333px] rounded-xl overflow-hidden group shadow-md">
                <div>
                  <div className="w-full h-full cursor-pointer">
                    <Image
                      loading="lazy"
                      src={fourthService}
                      alt={"asd"}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
                    <div className="absolute w-full bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-center">
                      <p className="text-textWhite font-bold text-[14px] md:text-[24px]  transition-all duration-500 ease-out translate-y-0">
                        {t.serviceOwnership}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
