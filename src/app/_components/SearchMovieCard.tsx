import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

type SearchMovieType = {
  img: string;
  rating: number;
  name: string;
};

export const SearchMovieCard = ({ img, rating, name }: SearchMovieType) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-end justify-between">
        <div className="flex gap-2">
          <div className="w-17 h-25">
            <img
              src={`https://image.tmdb.org/t/p/w500${img}`}
              alt={name}
              className="w-full h-full rounded-md object-cover"
            />
          </div>
          <div>
            <h1 className="text-[#09090B] text-md">{name}</h1>
            <div className="flex gap-1 p-2">
              <Star className="w-3 h-3 text-[#FDE047] fill-[#FDE047]" />
              <span className="text-sm dark:text-[#71717A)]">
                {rating.toFixed(1)}/10
              </span>
            </div>
          </div>
        </div>

        <Button variant="link" className="text-black">
          See more <ArrowRight />
        </Button>
      </div>
      <span className="w-full border border-muted-foreground"></span>
    </div>
  );
  // return (
  //   <div>
  //     <div className="left-2.5">
  //       <h5 className="text-sm p-2 truncate">{name}</h5>
  //     </div>
  //     <img
  //       src={`https://image.tmdb.org/t/p/w500${img}`}
  //       alt={name}
  //       className="w-25 h-12 md:h-25 rounded-t-lg "
  //     />
  //     <div>
  //       <div className="  flex gap-1 p-2">
  //         <Star className="w-3 h-3 text-[#FDE047] fill-[#FDE047]" />
  //         <span className="text-sm dark:text-[#71717A)]">{rating}/10</span>
  //       </div>
  //     </div>
  //   </div>
  // );
};
