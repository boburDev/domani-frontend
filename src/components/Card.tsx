// import React from "react";

// const Card = () => {
//   return (
//     <div className="relative w-[335px] h-[238px] lg:w-[546px] lg:h-[441px] rounded-xl overflow-hidden group shadow-md">
//       <div className="w-full h-full">
//         <img
//           src="/forCard.png"
//           alt="Card"
//           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//         />
//       </div>

//       <div className="absolute inset-0 group-hover:bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />

//       <div className="absolute w-full bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-center">
//         <p className="text-textWhite font-bold text-[24px] opacity-0 translate-y-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">
//           Marvid mavzesi
//         </p>
//         <p className="text-[20px] text-iron opacity-0 translate-y-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 mt-1">
//           Toshkent sh., Qo'yliq dahasi 5
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Card;

type CardProps = {
  id?: number;
  name: string;
  location: string;
  img: string;
  type?: string;
};

const Card = ({ name, location, img }: CardProps) => {
  return (
    <div className="relative w-[335px] h-[238px] lg:w-[546px] lg:h-[441px] rounded-xl overflow-hidden group shadow-md">
      <div className="w-full h-full">
        <img
          src={img}
          alt="Card"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="absolute inset-0 group-hover:bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />

      <div className="absolute w-full bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-center">
        <p className="text-textWhite font-bold text-[18px] sm:text-[24px] opacity-0 translate-y-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">
          {name}
        </p>
        <p className="text-[14px] sm:text-[20px] text-iron opacity-0 translate-y-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 mt-1">
          {location}
        </p>
      </div>
    </div>
  );
};

export default Card;
