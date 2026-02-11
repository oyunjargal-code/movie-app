import { MovieCard } from "@/app/_components";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

import Link from "next/link";
import { getUpcomingMovies } from "@/lib/api";
const UpcomingPage = async () => {
  const data = await getUpcomingMovies();
  const movies = data.results;
  return (
    <div>
      <div className="flex justify-between m-2">
        <Link href="/">
          <Button variant={"outline"}>
            <ArrowLeft /> Back
          </Button>
        </Link>
        <h1 className="m-2 bold">Upcoming</h1>
      </div>
      <div className=" gap-3 pb-4 grid grid-cols-2 md:grid-cols-5">
        {movies.map((movie) => {
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

export default UpcomingPage;
