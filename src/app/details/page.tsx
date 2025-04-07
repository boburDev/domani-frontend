import React from "react";
import projectData from "@/data/projects.json"; // JSON import
import Contact from "@/components/Contact";
import Card from "@/components/Card";

const DetailsForCheck = () => {
  return (
    <div className="container mx-auto px-5">
      <p className="pt-[120px] sm:pt-[180px] lg:pt-[306px] px-5 text-black font-semibold text-18 sm:text-[28px] lg:text-[48px] ">
        Details
      </p>
      <div className=" flex-col gap-8 hidden lg:flex">
        {/* Row 1 */}
        <div className="flex justify-between items-center pt-[65px] gap-[30px]">
          {projectData.slice(0, 1).map((project, index) => (
            <div
              className="relative w-[335px] h-[238px] lg:w-full lg:h-[441px] rounded-xl overflow-hidden group shadow-md"
              key={index}
            >
              <div className="w-full h-full">
                <img
                  src={project.imgPath}
                  alt="Card"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 group-hover:bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
            </div>
          ))}
        </div>

        {/* Row 2*/}
        <div className="flex justify-between gap-[30px]">
          {projectData.slice(1, 3).map((project, index) => (
            <div
              className={`relative ${
                index === 1
                  ? "w-[1032px] h-[504px]" // Ikkinchi loyiha katta o'lchamda
                  : "w-[636px] h-[504px]" // Boshqa loyihalar kichik o'lchamda
              }  rounded-xl overflow-hidden group shadow-md`}
              key={project.id} // Loyihani noyob identifikatsiya qilish uchun
            >
              <div className="w-full h-full">
                <img
                  src={project.imgPath} // Loyiha rasmiga manzil (JSON dan olingan)
                  alt="Card"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 group-hover:bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />

              <div className="absolute w-full bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-center">
                <p className="text-textWhite font-bold text-[24px] opacity-0 translate-y-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                  {project.name} {/* Loyiha nomi */}
                </p>
                <p className="text-[20px] text-iron opacity-0 translate-y-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 mt-1">
                  {project.location} {/* Loyiha manzili */}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Row 3 */}
        <div className="flex justify-between items-end gap-[30px] ">
          {projectData.slice(3, 5).map((project, index) => (
            <div
              className={`relative ${
                index === 0 ? "w-[963px] h-[537px]" : "w-[705px] h-[537px]"
              }  rounded-xl overflow-hidden group shadow-md`}
              key={index}
            >
              <div className="w-full h-full">
                <img
                  src={project.imgPath}
                  alt="Card"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 group-hover:bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
              <div className="absolute w-full bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-center">
                <p className="text-textWhite font-bold text-[24px] opacity-0 translate-y-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                  {project.name}
                </p>
                <p className="text-[20px] text-iron opacity-0 translate-y-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 mt-1">
                  {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Before lg 1024px */}
      <div className="pt-12 flex flex-wrap justify-center gap-8 lg:hidden">
        {projectData.slice(1, 6).map((item) => (
          <Card
            key={item.id}
            name={item.name}
            location={item.location}
            img={item.imgPath}
            id={item.id}
            type={item.type}
          />
        ))}
      </div>
      <Contact />
    </div>
  );
};

export default DetailsForCheck;
