import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import Card from "./Card";
import projectData from "@/data/projects.json"
import ArrowRightIcon from "@/assets/icons/ArrowRightIcon";

const HomeProjects = () => {
    const { language, t } = useLanguage();
    
  return (
    <section className="pt-[50px] md:pt-[80px] lg:pt-[229px]" id="projects">
        <p className="text-black font-semibold text-[18px] md:text-[28px] lg:text-[48px] mb-[30px] lg:mb-[80px]">
          {t.projects}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[31px] ">
          {projectData.map((item) => (
            <div key={item.id}>
              {/* Card */}
              <Link
                href={`/projects/${item.type}/${item.id}`} // Loyihaning detallariga yo'naltiruvchi Link
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
            </div>
          ))}
        </div>
        {/* Link to projects */}
        <div className="flex justify-center pt-10 md:pt-[90px]">
          <Link
            href="/projects/all"
            className="flex items-center text-[18px] md:text-[32px] font-medium text-black underline underline-offset-[25%]"
          >
            <span>{t.btnToAll}</span>
            <ArrowRightIcon className="ml-3" />
          </Link>
        </div>
    </section>
  );
};

export default HomeProjects;
