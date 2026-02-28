import { Badge } from "@/components/ui/badge";
import { Genre as GenreType } from "@/lib/types";
import { ChevronRight } from "lucide-react";

type GenreProps = {
  genre: GenreType;
  genreId: number;
  genrePathId: string | string[] | undefined;
};

export const Genre = ({ genre, genreId, genrePathId }: GenreProps) => {
  return (
    <Badge
      variant="outline"
      className={`${genreId === Number(genrePathId) && "bg-black text-white"}`}
    >
      {genre.name} <ChevronRight />
    </Badge>
  );
};
