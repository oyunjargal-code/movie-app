import { Badge } from "@/components/ui/badge";
import { Genre as GenreType } from "@/lib/types";

type GenreProps = {
  genre: GenreType;
};

export const Genre = ({ genre }: GenreProps) => {
  return <Badge>{genre.name}</Badge>;
};
