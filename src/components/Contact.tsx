"use client";
import React from "react";
import Image from "next/image";
import { mavridBuilding } from "@/assets";
import { useLanguage } from "./LanguageProvider";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
type SubmitRequset = {
  name: string;
  email: string;
  phone: string;
  page: string;
};

function getName(page: string) {
  switch (page) {
    case "/":
      return "Bosh sahifa";
    case "/projects/multi-storey":
      return "Ko’p qavatli Loyihalar";
    case "/projects/low-rise":
      return "Kam qavatli Loyihalar";
    case "/projects/non-residential":
      return "Noturarjoy Loyihalar";
    case "/projects/all":
      return "Barcha Loyihalar";
    case "/about":
      return "Biz haqimizda";
    case "/social":
      return "Ijtimoiy tarmoqlar";
    default:
      return "Noma’lum sahifa";
  }
}

const Contact = ({ page }: { page: string }) => {
  const { t } = useLanguage();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<SubmitRequset>();
  const onSubmit = async (data: SubmitRequset) => {
    console.log("Form data before sending:", data);
    try {
      data["page"] = getName(page);
      console.log("Sending form data:", data);

      await axios.post("https://leads.domani.uz/submit", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success(t.contactSucess, { theme: "colored" });
      reset();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error response from server:", error.response?.data);
        toast.error(t.contactErrorMesage, { theme: "colored" });
      } else {
        console.error("Unknown error:", error);
      }
      throw error;
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex pt-[100px] lg:pt-[230px] pb-[100px] lg:pb-[230px]">
        <div className="w-full lg:w-[733px] pb-[36px] lg:pr-[90px]" id="about">
          <p className="text-black font-semibold text-[18px] md:text-[32px] lg:text-[48px] w-fit">
            {t.contact_title}
          </p>
          <div>
            <div className="w-full">
              <form
                noValidate
                onSubmit={handleSubmit(onSubmit)}
                className="lg:px-8 pb-8"
              >
                <div className="pt-[32px] lg:pt-[95px] max-w-[539px]">
                  <label
                    className="block text-black text-[12px] md:text-[18px] mb-[2px]"
                    htmlFor="username"
                  >
                    {t.name_label}
                  </label>
                  <input
                    className="appearance-none focus:outline-none focus:shadow-outline border border-lightGrey rounded-2xl w-full h-10 md:h-[60px] text-[#9696A1] text-[12px] md:text-[18px]  pl-6"
                    type="text"
                    placeholder={t.name_placeholder}
                    required
                    autoComplete="name"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {t.errorContact}
                    </p>
                  )}
                </div>

                <div className="pt-10 max-w-[539px]">
                  <label
                    className="block text-black text-[12px] md:text-[18px]  mb-[2px]"
                    htmlFor="email"
                  >
                    {t.email_label}
                  </label>
                  <input
                    className="appearance-none focus:outline-none focus:shadow-outline border border-lightGrey rounded-2xl w-full h-10 md:h-[60px] text-[#9696A1] text-[12px] md:text-[18px]  pl-6"
                    type="email"
                    placeholder={t.email_placeholder}
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    title={t.email_pattern_title}
                    autoComplete="email"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {t.errorContact}
                    </p>
                  )}
                </div>

                <div className="pt-10 max-w-[539px]">
                  <label
                    className="block text-black text-[12px] md:text-[18px]  mb-[2px]"
                    htmlFor="tel"
                  >
                    {t.phone_label}
                  </label>
                  <input
                    className="appearance-none focus:outline-none focus:shadow-outline border border-lightGrey rounded-2xl
                     w-full h-10 md:h-[60px] text-[#9696A1] text-[12px] md:text-[18px]  pl-6"
                    type="tel"
                    placeholder={t.phone_placeholder}
                    required
                    pattern="^\+998\s?\(?\d{2}\)?\s?\d{3}\s?\d{2}\s?\d{2}$"
                    title={t.phone_pattern_title}
                    autoComplete="tel"
                    {...register("phone", { required: true })}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">
                      {t.errorContact}
                    </p>
                  )}
                </div>
                <div className="max-w-[539px] mt-[45px]">
                  <button
                    className="required bg-black text-textWhite w-full h-[45px] md:h-[66px] font-bold text-[14px] md:text-[20px]  py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
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
