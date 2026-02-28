import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { MovieCard } from "@/app/_components";
import Link from "next/link";
import { getPopularMovies } from "@/lib/api";

import { PagePagination } from "../_components/PagePagination";

type PopularProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function PopularPage({ searchParams }: PopularProps) {
  const { page } = await searchParams;
  const url = "popular";
  const { results: movies, total_pages } = await getPopularMovies(page);

  return (
    <div className="w-360 mx-auto">
      <div className="flex justify-between  p-10">
        <Link href="/">
          <Button variant={"outline"}>
            <ArrowLeft />
            Back
          </Button>
        </Link>

        <h1 className="m-2 bold">Popular</h1>
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
