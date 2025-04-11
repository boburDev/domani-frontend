"use client";
import { notFound, useParams } from "next/navigation";
import projectData from "@/data/projects.json";
import Contact from "@/components/Contact";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
// import { useEffect, useState } from "react";



export default  function ProjectDetails() {
    const params = useParams();
    const id = params?.id;
    const pageName = params?.name;
    
  const project = projectData.find((p) => p.id === Number(id));
  const { t } = useLanguage();

  if (!project) notFound();

  const chunkImages = (images: string[]) => {
    const chunks: string[][] = [];
    for (let i = 0; i < images.length; i += 5) {
      chunks.push(images.slice(i, i + 5));
    }
    return chunks;
  };
  const projectsNames = {
    "non-residential": `${t.serviceNonresidentialAll}`,
    "low-rise": `${t.serviceLowriseAll}`,
    "multi-storey": `${t.servicemultiAll}`,
    all: `${t.allName}`,
  };
  const imageRows = chunkImages(project.images);


  return (
    <div>
 
      <div className="container mx-auto px-5 ">
        <p className="pt-[120px] pb-5 sm:pt-[180px] lg:pt-[306px] px-5 text-black font-semibold text-[18px] sm:text-[28px] lg:text-[48px]">
        {projectsNames[params.name as keyof typeof projectsNames] || ""}{" "}
        {t.theName}
        </p>

        {project?.description && (
          <p className="text-[26px] text-black/70 mt-4 px-5 pb-[65px]">
            {project.description}
          </p>
        )}

        <div className="flex-col gap-8 hidden lg:flex">
          {imageRows.map((row, rowIndex) => (
            <div key={rowIndex}>
              {/* Row 1 */}
              {row[0] && (
                <div className="flex justify-between items-center gap-[30px]">
                  <div className="relative w-[335px] h-[238px] lg:w-full lg:h-[441px] rounded-xl overflow-hidden group shadow-md">
                    <Image
                      width={500}
                      height={600}
                      src={`/images${row[0]}`}
                      alt={`Project image ${rowIndex * 5 + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              )}

              {/* Row 2 */}
              {(row[1] || row[2]) && (
                <div className="flex justify-between gap-[30px] mt-8">
                  {row[1] && row.length === 2 ? (
                    <div className="relative w-full h-[504px] rounded-xl overflow-hidden group shadow-md">
                      <Image
                        width={500}
                        height={600}
                        src={`/images${row[1]}`}
                        alt={`Project image ${rowIndex * 5 + 2}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  ) : (
                    <>
                      {row[1] && (
                        <div className="relative w-[636px] h-[504px] rounded-xl overflow-hidden group shadow-md">
                          <Image
                            width={500}
                            height={600}
                            src={`/images${row[1]}`}
                            alt={`Project image ${rowIndex * 5 + 2}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                      )}
                      {row[2] && (
                        <div className="relative w-[1032px] h-[504px] rounded-xl overflow-hidden group shadow-md">
                          <Image
                            width={500}
                            height={600}
                            src={`/images${row[2]}`}
                            alt={`Project image ${rowIndex * 5 + 3}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}

              {/* Row 3 */}
              {(row[3] || row[4]) && (
                <div className="flex justify-between items-end gap-[30px] mt-8">
                  {row[3] && !row[4] ? (
                    <div className="relative w-full h-[537px] rounded-xl overflow-hidden group shadow-md">
                      <Image
                        width={500}
                        height={600}
                        src={`/images${row[3]}`}
                        alt={`Project image ${rowIndex * 5 + 4}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  ) : (
                    <>
                      {row[3] && (
                        <div className="relative w-[963px] h-[537px] rounded-xl overflow-hidden group shadow-md">
                          <Image
                            width={500}
                            height={600}
                            src={`/images${row[3]}`}
                            alt={`Project image ${rowIndex * 5 + 4}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                      )}
                      {row[4] && (
                        <div className="relative w-[705px] h-[537px] rounded-xl overflow-hidden group shadow-md">
                          <Image
                            width={500}
                            height={600}
                            src={`/images${row[4]}`}
                            alt={`Project image ${rowIndex * 5 + 5}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Responsive Version */}
        <div className="flex flex-wrap justify-center items-center gap-5 lg:hidden">
          {project.images.map((img, idx) => (
            <div
              key={idx}
              className="relative w-[335px] h-[238px] rounded-xl overflow-hidden group shadow-md "
            >
              <Image
                width={500}
                height={600}
                src={`/images/${img}`}
                alt={`Project image ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
        <Contact page={`/projects/${pageName}`} />
      </div>
    </div>
  );
}
