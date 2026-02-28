import { Badge } from "@/components/ui/badge";
import { Genre as GenreType } from "@/lib/types";
import { ChevronRight } from "lucide-react";

type GenreProps = {
  genre: GenreType;
  genreId: number;
  genrePathId: string | string[] | undefined;
};

export const Genre = ({ genre, genreId, genrePathId }: GenreProps) => {
  const isActive = genreId === Number(genrePathId);
  return (
    <Badge
      variant="outline"
      className={`
        transition-colors 
        ${isActive ? "bg-black text-white" : "bg-transparent text-black"} 
        group-hover:bg-slate-100 
        group-active:bg-black 
        group-active:text-white
      `}
    >
      {genre.name} <ChevronRight />
    </Badge>
  );
};
