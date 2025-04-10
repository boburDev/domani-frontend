import Image from "next/image";

// Card.tsx
type CardProps = {
  id?: number;
  name: string;
  location: string;
  img: string;
  type?: string;
  images?: string[];
};

const Card = ({ name, location, img }: CardProps) => {
  return (
    <div className="relative w-[335px] lg:w-[546px] h-[238px] lg:h-[441px] rounded-xl overflow-hidden group shadow-md">
      <div className="w-full h-full cursor-pointer">
        <Image
          src={`/images${img}`}
          alt={name}
          width={546}
          height={400}
          className="w-full h-full object-cover transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
        <div className="absolute w-full bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-center">
          {/* Title */}
          <p className="text-textWhite font-bold text-[14px] md:text-[18px] sm:text-[24px] opacity-100 translate-y-0 transition-all duration-500">
            {name}
          </p>
          {/* Location */}
          <p className="text-[14px] sm:text-[20px] text-iron opacity-100 translate-y-0 transition-all duration-500 mt-1">
            {location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
