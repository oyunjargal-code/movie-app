import { Badge } from "@/components/ui/badge";
import { Genre as GenreType } from "@/lib/types";
// import { ChevronRight } from "lucide-react";
import { ChevronRight, X } from "lucide-react";

// type GenreProps = {
//   genre: GenreType;
//   genreId: number;
//   genrePathId: string | string[] | undefined;
// };

// export const Genre = ({ genre, genreId, genrePathId }: GenreProps) => {
//   const isActive = genreId === Number(genrePathId);
//   return (
//     <Badge
//       variant="outline"
//       className={`
//         transition-colors 
//         ${isActive ? "bg-black text-white" : "bg-transparent text-black"} 
//         group-hover:bg-slate-100 
//         group-active:bg-black 
//         group-active:text-white
//       `}
//     >
//       {genre.name} <ChevronRight />
//     </Badge>
//   );
// };

type GenreProps = {
  genre: GenreType;
  genreId: number;
  isActive: boolean;
};

export const Genre = ({ genre, isActive }: GenreProps) => {
  return (
    <Badge
      variant="outline"
      className={`
        transition-colors cursor-pointer
        ${isActive
          ? "bg-foreground text-background"
          : "bg-transparent text-foreground"
        }
        hover:bg-muted
      `}
    >
      {genre.name} {isActive ? <X className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
    </Badge>
  );
};