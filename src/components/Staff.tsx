"use client";
import staff from "../data/staff.json";

const Team = () => {
  return (
    <div className="pt-[100px] lg:pt-[230px]">
      <p className="text-black font-semibold text-[32px] lg:text-[48px]">
        Bizning jamoa
      </p>
      <div className="flex flex-wrap justify-center md:grid md:grid-cols-2 xxl:grid-cols-3 2xl:grid-cols-4 gap-8 pt-[80px]">
        {staff.map((person, index) => (
          <div
            key={index}
            className="w-[290px] h-[427px] lg:w-[378px] lg:h-[542px] relative rounded-xl overflow-hidden group shadow-md"
          >
            {/* Image */}
            <img
              src={person.img}
              alt={person.name}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />

            {/* Text */}
            <div className="absolute w-full bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-center">
              <p className="text-textWhite font-bold text-[24px] transition-all duration-500 ease-out group-hover:-translate-y-2">
                {person.name}
              </p>
              <p className="text-[20px] text-iron opacity-0 translate-y-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                {person.position}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
