"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { searchMovies } from "@/lib/api/searchMovies";
import { Search } from "lucide-react";
import Link from "next/link";
import { ChangeEventHandler, useEffect, useState } from "react";
import { SearchMovieCard } from "./SearchMovieCard";
import { Movie } from "@/lib/types";

export const SearchMovie = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);

  const [open, setOpen] = useState<boolean>(false);

  const onChangeSearchValue: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (searchValue === "") {
      setMovies([]);
      setOpen(false);
      return;
    }

    const timer = setTimeout(async () => {
      const { results } = await searchMovies(searchValue, "1");

      setMovies(results); // movie hadgalj avna
      setOpen(true); // modal gargaj irj bgaa
    }, 500);
    return () => clearTimeout(timer); // text bicheh bolgond huleej bgaad duushad ni huselt ilgeene
  }, [searchValue]);

  const onSelectMovie = () => {
    setOpen(false);
  };

  return (
    <div className="relative w-fit ">
      <InputGroup className="max-w-xs">
        <InputGroupInput
          value={searchValue}
          onChange={onChangeSearchValue}
          placeholder="Search..."
          className="w-95"
        />

        <InputGroupAddon>
          <Search />
          {open && (
            <div
              className={`w-100 flex flex-col gap-2 p-2 top-full mt-2 translate-x-1/3 bg-[#F4F4F5] pl-4
 rounded-xl absolute z-50`}
            >
              {movies.length === 0 ? (
                <div className="flex justify-center w-full">
                  <h1 className="text-xl text-black">Not found</h1>
                </div>
              ) : (
                <div>
                  {movies.slice(0, 5).map((movie) => {
                    return (
                      <Link
                        key={movie.id}
                        href={`/details/${movie.id}`}
                        onClick={onSelectMovie}
                      >
                        <SearchMovieCard
                          name={movie.title}
                          rating={movie.vote_average}
                          img={movie.poster_path}
                        />
                      </Link>
                    );
                  })}
                  <Link
                    href={`/search?q=${searchValue}&page=1`}
                    onClick={onSelectMovie}
                  >
                    <p className="hide">See all results for "{searchValue}"</p>
                  </Link>
                </div>
              )}
            </div>
          )}
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};
