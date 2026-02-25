import { Button } from "@/components/ui/button";
import { Search, ChevronDown, Film } from "lucide-react";

import { ModeToggle } from "@/components/ui/mode-toggle";
import Link from "next/link";
import { SearchMovie } from "./SearchMovie";

export const HeaderNew = () => {
  return (
    <div className="w-full h-fit flex justify-between p-6 max-w-360">
      <div className="flex gap-2 p-2">
        <Link href="/">
          <Film className="w-5 h-5 text-[#4338CA] dark:text-white" />
          <p className="font-['Inter'] font-bold italic text-[16px] text-[#4338CA] dark:text-white">
            Movie Z
          </p>
        </Link>
      </div>
      <div>
        <div className="hidden lg:flex gap-2 ">
          <Button variant="outline">
            <ChevronDown />
            Genre
          </Button>
        </div>
      </div>

      <SearchMovie />

      <div className="flex gap-2">
        <ModeToggle />
        <Button variant="outline" className="lg:hidden">
          <Search />
        </Button>
      </div>
    </div>
  );
};
