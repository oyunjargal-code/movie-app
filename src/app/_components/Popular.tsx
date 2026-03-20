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
    <div className="w-full h-fit flex flex-col justify-between p-6 max-w-360">
      <div className="flex justify-between m-2">
        <h1 className = "font-semibold text-2xl leading-8 tracking-tight">Popular</h1>
        <Link href={`popular/?page=1`}>
          <Button className="font-medium text-sm leading-5 tracking-normal" variant={"outline"}>
            See more <ArrowRight />
          </Button>
        </Link>
      </div>
      <div className="gap-3 pb-4 grid grid-cols-2 md:grid-cols-5 m-x-auto">
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
