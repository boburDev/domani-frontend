"use client";

import React from "react";
import Contact from "@/components/Contact";
import projectData from "@/data/projects.json";
import Card from "@/components/Card";
import Link from "next/link";

const Projects = () => {
  return (
    <div>
      <div className="container mx-auto pt-[262px]">
        <p className="text-black px-5 font-semibold text-18 sm:text-[28px] lg:text-[48px]">
          Loyihalar
        </p>

        <div className="flex-col gap-8 hidden lg:flex">
          {/* Row 1 */}
          <div className="flex justify-between items-center pt-[65px] gap-[30px]">
            {projectData.slice(0, 3).map((project, index) => (
              <Link
                href={`/projects/${project.id}`}
                key={index}
                className="group"
              >
                <div className="relative w-[335px] h-[238px] lg:w-[546px] lg:h-[441px] rounded-xl overflow-hidden shadow-md">
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
              </Link>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex justify-between gap-[30px]">
            {projectData.slice(3, 5).map((project, index) => (
              <Link
                href={`/projects/${project.id}`}
                key={project.id}
                className="group"
              >
                <div
                  className={`relative ${
                    index === 1 ? "w-[1122px] h-[611px]" : "w-[546px] h-[441px]"
                  } rounded-xl overflow-hidden shadow-md`}
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
              </Link>
            ))}
          </div>

          {/* Row 3 */}
          <div className="flex justify-between items-end gap-[30px] -mt-[170px]">
            {projectData.slice(5, 8).map((project, index) => (
              <Link
                href={`/projects/${project.id}`}
                key={index}
                className="group"
              >
                <div
                  className={`relative ${
                    index === 0 ? "w-[546px] h-[611px]" : "w-[546px] h-[441px]"
                  } rounded-xl overflow-hidden shadow-md`}
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
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile layout */}
        <div className="pt-12 flex flex-wrap justify-center gap-8 lg:hidden">
          {projectData.map((item) => (
            <Link href={`/projects/${item.id}`} key={item.id} className="group">
              <Card
                name={item.name}
                location={item.location}
                img={item.imgPath}
                id={item.id}
                type={item.type}
              />
            </Link>
          ))}
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Projects;
