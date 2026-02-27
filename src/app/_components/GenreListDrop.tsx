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
      <DropdownMenuTrigger>
        <Button variant="outline">
          <ChevronDown />
          Genre
        </Button>
        <DropdownMenuContent className="p-5">
          <GenreList />
        </DropdownMenuContent>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};
