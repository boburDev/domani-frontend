import React from "react";

const Card = () => {
  return (
    <div className="relative bg-cover bg-[url('/forCard.png')] w-[546px]  h-[446px]">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.7) 100%)",
        }}
      />
      <div className="absolute w-full bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-center">
        <p className="text-textWhite font-bold text-[24px] transition-all duration-500 ease-out group-hover:translate-y-[-10px]">
          Marvid mavzesi
        </p>
        <p className="text-[20px] text-iron opacity-0 translate-y-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">
          Toshkent sh., Qo'yliq dahasi 5
        </p>
      </div>
    </div>
  );
};

export default Card;
