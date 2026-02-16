"use client";
import { Button } from "@/components/ui/button";
import { Moon, Search, ChevronDown, Film } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { ChangeEventHandler, use, useEffect, useState } from "react";
import { searchMovies } from "@/lib/api/searchMovies";
import { Movie } from "@/lib/types";

export const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);

  console.log({ searchValue });

  const onChangeSearchValue: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (searchValue === "") {
      setMovies([]);
      return;
    }

    const timer = setTimeout(async () => {
      const data = await searchMovies(searchValue);
      console.log({ data });

      setMovies(data.results);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchValue]);

  return (
    <div className="w-full h-fit flex justify-between p-6 max-w-360">
      <div className="flex gap-2 p-2">
        <Film className="w-5 h-5 text-[#4338CA] dark:text-white" />
        <p className="font-['Inter'] font-bold italic text-[16px] text-[#4338CA] dark:text-white">
          Movie Z
        </p>
      </div>
      <div>
        <div className="hidden lg:flex gap-2 ">
          <Button variant="outline">
            <ChevronDown />
            Genre
          </Button>
          <div className="relative w-fit">
            <InputGroup className="max-w-xs">
              <InputGroupInput
                value={searchValue}
                onChange={onChangeSearchValue}
                placeholder="Search..."
                className="w-95"
              />
              <InputGroupAddon>
                <Search />
              </InputGroupAddon>
            </InputGroup>
            <div className={`w-144.5 bg-red-500 rounded-xl absolute`}>
              {movies.map((movie) => (
                <h1 key={movie.id}>{movie.title}</h1>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <ModeToggle />
        <Button variant="outline" className="lg:hidden">
          <Search />
        </Button>
      </div>
    </div>
  );
};
