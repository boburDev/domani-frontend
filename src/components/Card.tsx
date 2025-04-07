import Link from "next/link";

type CardProps = {
  id?: number;
  name: string;
  location: string;
  img: string;
  type?: string;
  images?: string[];
};

const Card = ({ id, name, location, img }: CardProps) => {
  return (
    <div className="relative w-[335px] h-[238px] lg:w-[546px] lg:h-[441px] rounded-xl overflow-hidden group shadow-md">
      <Link href={`/projects/${id}`}>
        <div className="w-full h-full group cursor-pointer">
          <img
            src={img}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

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
      </Link>
    </div>
  );
};

export default Card;
