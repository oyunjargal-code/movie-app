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
  // const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const onChangeSearchValue: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (searchValue === "") {
      setMovies([]);
      return;
    }

    const timer = setTimeout(async () => {
      const { results } = await searchMovies(searchValue);

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
          {movies.slice(0, 5).map((movie) => {
            return (
              <div className={`w-[150px] bg-[#F4F4F5] pl-4
//  rounded-xl absolute z-50`}>
                <SearchMovieCard key={movie.id} name={movie.title} />
              </div>
            );
          })}
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

//  {open && (
//         <div
//           className={`w-[150px] bg-[#F4F4F5] pl-4
//  rounded-xl absolute z-50`}
//         >
//           {movies.slice(0, 5).map((movie) => {
//             return (
//               <Link
//                 key={movie.id}
//                 href={`/details/${movie.id}`}
//                 onClick={onSelectMovie}
//               >
//                 <SearchMovieCard
//                   key={movie.id}
//                   name={movie.title}
//                   rating={movie.vote_average}
//                   img={movie.poster_path}
//                 />
//               </Link>
//             );
//           })}
//           <Link href={`/search?q=${searchValue}`}>
//             <p className="hide">See all results for "{searchValue}"</p>
//           </Link>
//         </div>
//       )}
