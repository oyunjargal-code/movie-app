import { Star } from "lucide-react";

type MovieCardType = {
  img: string;
  rating: number;
  name: string;
  id: number;
};

export const MovieCard = ({ img, rating, name }: MovieCardType) => {
  return (
    <div className="w-full dark:text-black">
      <img
        src={img}
        alt={name}
        className="w-full h-75 md:h-87.5 rounded-t-lg"
      />
      <div className="w-full bg-[#F4F4F5] h-21 rounded-b-lg flex flex-col">
        <div className="  flex gap-1 p-2">
          <Star className="w-5 h-5 text-[#FDE047] fill-[#FDE047]" />
          <span className="text-sm dark:text-[#71717A)]">{rating}/10</span>
        </div>

        <div className=" bottom-2 left-2.5">
          <h3 className="text-xl p-2 ">{name}</h3>
        </div>
      </div>
    </div>
  );
};
