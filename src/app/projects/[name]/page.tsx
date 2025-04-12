"use client";

import React, { useEffect, useState } from "react";
import Contact from "@/components/Contact";
import projectJson from "@/data/projects.json";
import Card from "@/components/Card";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";
import Image from "next/image";

const Projects = () => {
  const { language, t } = useLanguage();
  const params = useParams();

  const projectData = ["non-residential", "low-rise", "multi-storey"].includes(
    params.name as string
  )
    ? projectJson.filter((p) => p.type === params.name)
    : projectJson;
  const projectsNames = {
    "non-residential": `${t.serviceNonresidentialAll}`,
    "low-rise": `${t.serviceLowriseAll}`,
    "multi-storey": `${t.servicemultiAll}`,
    all: `${t.allName}`,
  };
  return (
    <div>
      <div>
        <div className="container mx-auto pt-[100px] md:pt-[150px] lg:pt-[262px]">
          <p className="text-black px-5 font-semibold text-18 sm:text-[28px] lg:text-[48px]">
            {projectsNames[params.name as keyof typeof projectsNames] || ""}{" "}
            {t.theName}
          </p>

          <div className="flex-col gap-8 hidden lg:flex">
            {/* Row 1 */}
            <div className="flex items-center pt-[65px] gap-[30px]">
              {projectData.slice(0, 3).map((project, index) => (
                <Link
                  href={`/projects/${project.type}/${project.id}`}
                  key={index}
                  className="group"
                >
                  <div className="relative w-full lg:max-w-[546px] h-[441px] rounded-xl overflow-hidden shadow-md">
                    <div className="w-full h-full">
                      <Image
                        loading="lazy"
                        width={500}
                        height={600}
                        src={`/images${project.imgPath}`}
                        alt="Card"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 group-hover:bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
                    <div className="absolute w-full bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-center">
                      <p className="text-textWhite font-bold text-[24px] opacity-0 translate-y-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                        {project[`name_${language}`]}
                      </p>
                      <p className="text-[20px] text-iron opacity-0 translate-y-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 mt-1">
                        {project[`location_${language}`]}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Row 2 */}
            <div className="flex justify-between gap-[30px]">
              {projectData.length >= 5 && (
                <>
                  <Link
                    href={`/projects/${projectData[3].type}/${projectData[3].id}`}
                    className="group w-full max-w-[546px]"
                  >
                    {/* Kichik card */}
                    <div className="relative h-[441px] rounded-xl overflow-hidden shadow-md">
                      <Image
                        loading="lazy"
                        width={500}
                        height={600}
                        src={`/images${projectData[3].imgPath}`}
                        alt="Card"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Overlay & Text */}
                      <div className="absolute inset-0 group-hover:bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
                      <div className="absolute w-full bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-center">
                        <p className="text-textWhite font-bold text-[24px] opacity-0 translate-y-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                          {projectData[3][`name_${language}`]}
                        </p>
                        <p className="text-[20px] text-iron opacity-0 translate-y-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 mt-1">
                          {projectData[3][`location_${language}`]}
                        </p>
                      </div>
                    </div>
                  </Link>

                  {/* Project 5 mavjud bo‘lsa, max-width 1122px bo‘ladi, yo‘q bo‘lsa u joyni to‘ldiradi */}
                  <Link
                    href={
                      projectData[4]
                        ? `/projects/${projectData[4].type}/${projectData[4].id}`
                        : "#"
                    }
                    className="group w-full"
                  >
                    <div
                      className={`relative ${
                        projectData[4] ? "max-w-[1122px]" : ""
                      } h-[441px] rounded-xl overflow-hidden shadow-md`}
                    >
                      {projectData[4] ? (
                        <>
                          <Image
                            loading="lazy"
                            width={500}
                            height={600}
                            src={`/images${projectData[4].imgPath}`}
                            alt="Card"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 group-hover:bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
                          <div className="absolute w-full bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-center">
                            <p className="text-textWhite font-bold text-[24px] opacity-0 translate-y-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                              {projectData[4][`name_${language}`]}
                            </p>
                            <p className="text-[20px] text-iron opacity-0 translate-y-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 mt-1">
                              {projectData[4][`location_${language}`]}
                            </p>
                          </div>
                        </>
                      ) : (
                        <div className="w-full h-full bg-gray-200 rounded-xl" /> // Bo'sh joy to‘ldirish
                      )}
                    </div>
                  </Link>
                </>
              )}
            </div>

            {/* Row 3 */}
            <div className="flex justify-between items-end gap-[30px] ">
              {projectData.slice(5, 8).map((project, index) => (
                <Link
                  href={`/projects/${project.type}/${project.id}`}
                  key={index}
                  className="group"
                >
                  <div
                    className={`relative ${
                      index === 0
                        ? "max-w-[546px] h-[441px]"
                        : "max-w-[546px] h-[441px]"
                    } rounded-xl overflow-hidden shadow-md`}
                  >
                    <div className="w-full h-full">
                      <Image
                        loading="lazy"
                        width={500}
                        height={600}
                        src={`/images${project.imgPath}`}
                        alt="Card"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 group-hover:bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
                    <div className="absolute w-full bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-center">
                      <p className="text-textWhite font-bold text-[24px] opacity-0 translate-y-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                        {project[`name_${language}`]}
                      </p>
                      <p className="text-[20px] text-iron opacity-0 translate-y-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 mt-1">
                        {project[`location_${language}`]}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile layout */}
          <div className="pt-12 flex flex-wrap justify-center gap-8 lg:hidden">
            {projectData.map((item) => (
              <Link
                href={`/projects/${item.type}/${item.id}`}
                key={item.id}
                className="group"
              >
                <Card
                  name={item[`name_${language}`]}
                  location={item[`location_${language}`]}
                  img={item.imgPath}
                  id={item.id}
                  type={item.type}
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="container mx-auto px-5">
          <Contact page={window.location.pathname} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
