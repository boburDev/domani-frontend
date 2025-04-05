"use client";
import staff from "../../staff.json";

const Team = () => {
  return (
    <div className="pt-[230px]">
      <p className="text-black font-semibold text-[48px]">Bizning jamoa </p>
      <div className="grid grid-cols-4 gap-8 pt-[80px]">
        {staff.map((person, index) => (
          <div
            key={index}
            className="w-[378px] h-[542px] relative bg-cover rounded-xl overflow-hidden group"
            style={{
              backgroundImage: `url('${person.img}')`,
            }}
          >
            <div
              className="absolute inset-0 z-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.7) 100%)",
              }}
            />
            <div className="absolute w-full bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-center">
              <p className="text-textWhite font-bold text-[24px] transition-all duration-500 ease-out group-hover:translate-y-[-10px]">
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
