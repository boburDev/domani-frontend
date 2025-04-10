"use client";
import React from "react";
import Image from "next/image";
import { mavridBuilding } from "@/assets";
import { useLanguage } from "./LanguageProvider";
import { useForm } from "react-hook-form";
type SubmitRequset = {
  userName: string;
  email: string;
  phoneNumber: string;
};
const Contact = () => {
  const { t } = useLanguage();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SubmitRequset>();
  const onSubmit = (data: SubmitRequset) => {
    console.log(data);
  };
  return (
    <div className="container mx-auto">
      <div className="flex pt-[100px] lg:pt-[230px] pb-[100px] lg:pb-[230px]">
        <div className="w-full lg:w-[733px] pb-[36px] lg:pr-20" id="about">
          <h3 className="text-black font-semibold text-[32px] lg:text-[48px] w-fit">
            {t.contact_title}
          </h3>
          <div>
            <div className="w-full">
              <form
                noValidate
                onSubmit={handleSubmit(onSubmit)}
                className="lg:px-8 pb-8"
              >
                <div className="pt-[32px] lg:pt-[95px] max-w-[539px]">
                  <label
                    className="block text-black text-[18px] mb-[2px]"
                    htmlFor="username"
                  >
                    {t.name_label}
                  </label>
                  <input
                    className="appearance-none focus:outline-none focus:shadow-outline border border-lightGrey rounded-2xl w-full h-10 md:h-[60px] text-[#9696A1] text-[18px] pl-6"
                    type="text"
                    placeholder={t.name_placeholder}
                    required
                    autoComplete="name"
                    {...register("userName", { required: true })}
                  />
                  {errors.userName && (
                    <p className="text-red-500 text-xs mt-1">
                      {t.errorContact}
                    </p>
                  )}
                </div>

                <div className="pt-10 max-w-[539px]">
                  <label
                    className="block text-black text-[18px] mb-[2px]"
                    htmlFor="email"
                  >
                    {t.email_label}
                  </label>
                  <input
                    className="appearance-none focus:outline-none focus:shadow-outline border border-lightGrey rounded-2xl w-full h-10 md:h-[60px] text-[#9696A1] text-[18px] pl-6"
                    type="email"
                    placeholder={t.email_placeholder}
                    required
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    title={t.email_pattern_title}
                    autoComplete="email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {t.errorContact}
                    </p>
                  )}
                </div>

                <div className="pt-10 max-w-[539px]">
                  <label
                    className="block text-black text-[18px] mb-[2px]"
                    htmlFor="tel"
                  >
                    {t.phone_label}
                  </label>
                  <input
                    className="appearance-none focus:outline-none focus:shadow-outline border border-lightGrey rounded-2xl
                     w-full h-10 md:h-[60px] text-[#9696A1] text-[18px] pl-6"
                    type="tel"
                    placeholder={t.phone_placeholder}
                    required
                    pattern="^\+998\s?\(?\d{2}\)?\s?\d{3}\s?\d{2}\s?\d{2}$"
                    title={t.phone_pattern_title}
                    autoComplete="tel"
                    {...register("phoneNumber", { required: true })}
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-xs mt-1">
                      {t.errorContact}
                    </p>
                  )}
                </div>
                <div className="max-w-[539px] mt-[45px]">
                  <button
                    className="required bg-black text-textWhite w-full h-[66px] font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    {t.submit_button}
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
