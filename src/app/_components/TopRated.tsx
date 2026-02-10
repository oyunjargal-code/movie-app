import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { MovieCard } from "./MovieCard";
import Link from "next/link";
import { getTopRatedMovies } from "@/lib/api";

export const TopRated = async () => {
  const data = await getTopRatedMovies();

  return (
    <div>
      <div className="flex justify-between m-2">
        <h1>Top Rated</h1>
        <Link href="/topRated">
          <Button variant={"outline"}>
            See more <ArrowRight />
          </Button>
        </Link>
      </div>
      <div className=" gap-3 pb-4 grid grid-cols-2 md:grid-cols-5">
        {data.results.slice(0, 10).map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              name={movie.title}
              rating={movie.vote_average}
              img={movie.poster_path}
            />
          );
        })}
      </div>
    </div>
  );
};
