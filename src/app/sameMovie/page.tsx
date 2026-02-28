import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { MovieCard } from "@/app/_components";
import Link from "next/link";

import { getSameMovies } from "@/lib/api/getSameMovie";
import { PagePagination } from "../_components/PagePagination";

type SameMovieProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function SameMoviePage({ searchParams }: SameMovieProps) {
  const { page, movieId } = await searchParams;
  const url = `sameMovie?movieId=${movieId}&`;

  const { results: movies, total_pages } = await getSameMovies(
    movieId as string,
    page as string,
  );

  return (
    <div className="w-360 mx-auto">
      <div className="flex justify-between  p-10">
        <Link href="/">
          <Button variant={"outline"}>
            <ArrowLeft />
            Back
          </Button>
        </Link>

        <h1 className="m-2 bold">Same Movies</h1>
      </div>
      <div className=" gap-3 pb-4 grid grid-cols-2 md:grid-cols-5">
        {movies?.map((movie) => {
          return (
            <Link key={movie.id} href={`/details/${movie.id}`}>
              <MovieCard
                key={movie.id}
                name={movie.title}
                rating={movie.vote_average}
                img={movie.poster_path}
              />
            </Link>
          );
        })}
      </div>

      <PagePagination url={url} page={page} total_pages={total_pages} />
    </div>
  );
}
