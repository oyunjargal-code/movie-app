import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { GenreList } from "./GenreList";

export const GenreListDrop = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <ChevronDown />
          Genre
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-5">
        <GenreList />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
