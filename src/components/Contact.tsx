import React from "react";
import Image from "next/image";
import { mavridBuilding } from "@/assets";

const Contact = () => {
  return (
    <div className="container mx-auto">
      <div className="flex pt-[100px] lg:pt-[230px] pb-[100px] lg:pb-[230px]">
        <div className="w-full lg:w-[733px] pb-[36px] lg:pr-6" id="about">
          <p className="text-black font-semibold text-[32px] lg:text-[48px]">
            Kontakt qoldiring{" "}
          </p>
          <div>
            <div className="w-full">
              <form className="lg:px-8 pb-8">
                <div className="pt-[32px] lg:pt-[95px] max-w-[539px]">
                  <label
                    className="block text-black text-[18px] mb-2"
                    htmlFor="username"
                  >
                    Ism-familiya
                  </label>
                  <input
                    className="shadow appearance-none focus:outline-none focus:shadow-outline border border-lightGrey rounded-2xl w-full h-[60px] text-[#9696A1] text-[18px] pl-6"
                    type="text"
                    placeholder="Rustamov Ali"
                    required
                    autoComplete="name"
                  />
                </div>

                <div className="pt-10 max-w-[539px]">
                  <label
                    className="block text-black text-[18px] mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="shadow appearance-none focus:outline-none focus:shadow-outline border border-lightGrey rounded-2xl w-full h-[60px] text-[#9696A1] text-[18px] pl-6"
                    type="email"
                    placeholder="rustamov@gmail.com"
                    required
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    title="Iltimos, to'g'ri email manzilini kiriting"
                    autoComplete="email"
                  />
                </div>

                <div className="mb-4 pt-10 max-w-[539px]">
                  <label
                    className="block text-black text-[18px] mb-2"
                    htmlFor="tel"
                  >
                    Telefon raqam
                  </label>
                  <input
                    className="shadow appearance-none focus:outline-none focus:shadow-outline border border-lightGrey rounded-2xl w-full h-[60px] text-[#9696A1] text-[18px] pl-6"
                    type="tel"
                    placeholder="+998 (99) 885 30 10"
                    required
                    pattern="^\+998\s?\(?\d{2}\)?\s?\d{3}\s?\d{2}\s?\d{2}$"
                    title="Iltimos, to'g'ri formatda raqam kiriting (+998 (99) 123 45 67 formatida)"
                    autoComplete="tel"
                  />
                </div>
                <div className=" max-w-[539px]">
                  <button
                    className="required bg-black text-textWhite mt-[57px] w-full h-[60px] font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Yuborish
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="pt-[20px] hidden lg:flex">
          <Image
            src={mavridBuilding}
            alt="img"
            className="w-[909px] h-[635px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
