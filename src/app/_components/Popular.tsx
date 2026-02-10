import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { MovieCard } from "./MovieCard";
import Link from "next/link";
// import { MovieCardList } from "./MovieCardList";
import { getPopularMovies } from "@/lib/api";
import { Movie } from "@/lib/types";

type PopularProps = {
  movies: Movie[];
};

export const Popular = async ({ movies }: PopularProps) => {
  return (
    <div>
      <div className="flex justify-between m-2">
        <h1 className="m-2 bold">Popular</h1>
        <Link href="/popular">
          <Button variant={"outline"}>
            See more <ArrowRight />
          </Button>
        </Link>
      </div>
      <div className=" gap-3 pb-4 grid grid-cols-2 md:grid-cols-5">
        {movies.slice(0, 10).map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              name={movie.title}
              rating={movie.vote_average}
              img={movie.poster_path}
            />
          );
        })}
        {/* <div className=" mx-auto gap-2">
          <MovieCardList />
        </div> */}
      </div>
    </div>
  );
};
