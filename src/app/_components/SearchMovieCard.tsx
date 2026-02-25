import { Star } from "lucide-react";

type SearchMovieType = {
  img?: string;
  rating?: number;
  name: string;
  id?: number;
};

export const SearchMovieCard = ({ img, rating, name }: SearchMovieType) => {
  return (
    <div>
      <div className="left-2.5">
        <h5 className="text-sm p-2 truncate">{name}</h5>
      </div>
      <img
        src={`https://image.tmdb.org/t/p/w500${img}`}
        alt={name}
        className="w-25 h-12 md:h-[100px] rounded-t-lg "
      />
      <div>
        <div className="  flex gap-1 p-2">
          <Star className="w-3 h-3 text-[#FDE047] fill-[#FDE047]" />
          <span className="text-sm dark:text-[#71717A)]">{rating}/10</span>
        </div>
      </div>
    </div>
  );
};
