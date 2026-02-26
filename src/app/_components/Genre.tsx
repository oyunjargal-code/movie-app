import { Badge } from "@/components/ui/badge";
import { Genre as GenreType } from "@/lib/types";
import { ChevronRight } from "lucide-react";

type GenreProps = {
  genre: GenreType;
};

export const Genre = ({ genre }: GenreProps) => {
  return (
    <Badge variant="outline">
      {genre.name} <ChevronRight />
    </Badge>
  );
};
