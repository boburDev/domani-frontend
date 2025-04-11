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
    <div className="relative  h-[238px] lg:h-[441px] rounded-xl overflow-hidden group shadow-md">
      <div className="w-full h-full group cursor-pointer">
        <Image
          width={546}
          height={400}
          src={`/images${img}`}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 lg:group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t lg:group-hover:bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
        <div className="absolute w-full bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-center">
          <p className="text-textWhite font-bold text-[18px] sm:text-[24px] lg:opacity-0 lg:translate-y-4 transition-all duration-500 ease-out lg:group-hover:opacity-100 lg:group-hover:translate-y-0">
            {name}
          </p>
          <p className="text-[16px] sm:text-[20px] text-iron mt-1 lg:opacity-0 lg:translate-y-4 transition-all duration-500 ease-out lg:group-hover:opacity-100 lg:group-hover:translate-y-0">
            {location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
