import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { MovieCard } from "./MovieCard";
import Link from "next/link";
import { getUpcomingMovies } from "@/lib/api";
import { Movie } from "@/lib/types";

type UpcomingProps = {
  movies: Movie[];
};

export const Upcoming = async ({ movies }: UpcomingProps) => {
  console.log({ movies });
  return (
    <div>
      <div className="flex justify-between m-2">
        <h1 className="m-2 bold">Upcoming</h1>
        <Link href="upcoming/?page=1">
          <Button variant={"outline"}>
            See more <ArrowRight />
          </Button>
        </Link>
      </div>
      <div className="gap-3 pb-4 grid grid-cols-2 md:grid-cols-5">
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
