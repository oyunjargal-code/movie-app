import { ArrowRight } from "lucide-react";
import { MovieCard } from "./MovieCard";
import Link from "next/link";

import { getPopularMovies } from "@/lib/api";
import { Movie } from "@/lib/types";
import { Button } from "@/components/ui/button";

type PopularProps = {
  movies: Movie[];
};

export const Popular = async ({ movies }: PopularProps) => {
  return (
    <div>
      <div className="flex justify-between m-2">
        <h1 className="m-2 bold">Popular</h1>
        <Link href={`popular`}>
          <Button variant={"outline"}>
            See more <ArrowRight />
          </Button>
        </Link>
      </div>
      <div className=" gap-3 pb-4 grid grid-cols-2 md:grid-cols-5">
        {movies.slice(0, 10).map((movie) => {
          return (
            <Link key={movie.id} href={`/details/${movie.id}`}>
              <MovieCard
                name={movie.title}
                rating={movie.vote_average}
                img={movie.poster_path}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
