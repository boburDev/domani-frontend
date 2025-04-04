import React from "react";
import Image from "next/image";
import { mavridBuilding } from "@/assets";

const Contact = () => {
  return (
    <div className="container mx-auto">
      <div className="flex pt-[230px] pb-[230px]">
        <div className="w-[733px] pb-[36px] pr-6" id="about">
          <p className="text-black font-semibold text-[48px]">
            Kontakt qoldiring{" "}
          </p>
          <div>
            <div className="w-full">
              <form className="px-8 pb-8">
                <div className="pt-[95px]">
                  <label
                    className="block text-black text-[18px] mb-2"
                    htmlFor="username"
                  >
                    Ism-familiya
                  </label>
                  <input
                    className="shadow appearance-none focus:outline-none focus:shadow-outline border border-lightGrey rounded-2xl w-[539px] h-[60px] text-[#9696A1] text-[18px] pl-6"
                    type="text"
                    placeholder="Rustamov Ali"
                    required
                    autoComplete="name"
                  />
                </div>

                <div className="pt-10">
                  <label
                    className="block text-black text-[18px] mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="shadow appearance-none focus:outline-none focus:shadow-outline border border-lightGrey rounded-2xl w-[539px] h-[60px] text-[#9696A1] text-[18px] pl-6"
                    type="email"
                    placeholder="rustamov@gmail.com"
                    required
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    title="Iltimos, to'g'ri email manzilini kiriting"
                    autoComplete="email"
                  />
                </div>

                <div className="mb-4 pt-10">
                  <label
                    className="block text-black text-[18px] mb-2"
                    htmlFor="tel"
                  >
                    Telefon raqam
                  </label>
                  <input
                    className="shadow appearance-none focus:outline-none focus:shadow-outline border border-lightGrey rounded-2xl w-[539px] h-[60px] text-[#9696A1] text-[18px] pl-6"
                    type="tel"
                    placeholder="+998 (99) 885 30 10"
                    required
                    pattern="^\+998\s?\(?\d{2}\)?\s?\d{3}\s?\d{2}\s?\d{2}$"
                    title="Iltimos, to'g'ri formatda raqam kiriting (+998 (99) 123 45 67 formatida)"
                    autoComplete="tel"
                  />
                </div>

                <button
                  className="required bg-black text-textWhite mt-[57px] h-[60px] w-[539px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Yuborish
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="pt-[20px]">
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
