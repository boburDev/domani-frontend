"use client";
import { notFound, useParams } from "next/navigation";
import projectData from "@/data/projects.json";
import Contact from "@/components/Contact";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { useState } from "react";

export default function ProjectDetails() {
  const params = useParams();
  const id = params?.id;
  const pageName = params?.name;
  const project = projectData.find((p) => p.id === Number(id));
  const { t, language } = useLanguage() as {
    t: any;
    language: "uz" | "ru" | "en";
  };

  if (!project) notFound();

  const chunkImages = (images: string[]) => {
    const chunks: string[][] = [];
    for (let i = 0; i < images.length; i += 5) {
      chunks.push(images.slice(i, i + 5));
    }
    return chunks;
  };
  const nameMap = {
    uz: project.name_uz,
    ru: project.name_ru,
    en: project.name_en,
  };
  const imageRows = chunkImages(project.images);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  function handleOpen(url: string) {
    setActive(url);
    setIsOpen(true);
  }
  return (
    <>
      <div className="container mx-auto px-5 ">
        <p className="pt-[120px] pb-5 sm:pt-[180px] lg:pt-[306px] px-5 text-black font-semibold text-[18px] sm:text-[28px] lg:text-[48px]">
          {nameMap[language]}
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
                  <div className="relative w-[335px] h-[238px] lg:w-full lg:h-[541px] rounded-xl overflow-hidden group shadow-md">
                    <Image
                      loading="lazy"
                      onClick={() => handleOpen(`/images${row[0]}`)}
                      width={3840}
                      height={2805}
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
                        loading="lazy"
                        width={3840}
                        height={2805}
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
                            loading="lazy"
                            onClick={() => handleOpen(`/images${row[1]}`)}
                            width={4000}
                            height={2600}
                            src={`/images${row[1]}`}
                            alt={`Project image ${rowIndex * 5 + 2}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                      )}
                      {row[2] && (
                        <div className="relative w-[1032px] h-[504px] rounded-xl overflow-hidden group shadow-md">
                          <Image
                            loading="lazy"
                            onClick={() => handleOpen(`/images${row[2]}`)}
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
                        loading="lazy"
                        onClick={() => handleOpen(`/images${row[3]}`)}
                        width={2500}
                        height={2000}
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
                            loading="lazy"
                            onClick={() => handleOpen(`/images${row[3]}`)}
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
                            loading="lazy"
                            onClick={() => handleOpen(`/images${row[4]}`)}
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
                loading="lazy"
                onClick={() => handleOpen(`/images${img}`)}
                width={2840}
                height={2305}
                src={`/images${img}`}
                alt={`Project image ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
        <Contact page={`/projects/${pageName}`} />
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="w-[100vw] max-w-[100vw] p-0 h-screen !rounded-none border-none">
          <DialogHeader className="pt-6">
            <div className="flex justify-between items-center">
              <DialogTitle></DialogTitle>
              <span></span>
            </div>
          </DialogHeader>
          <DialogDescription className="hidden">asdsad</DialogDescription>
          <div className="px-6">
            <div>
              <div className="w-full h-full flex justify-center items-center">
                <Image
                  src={active}
                  alt="product"
                  width={3840}
                  height={2805}
                  className="w-[1042px] h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
