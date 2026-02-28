import { MovieCard } from "@/app/_components";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { getUpcomingMovies } from "@/lib/api";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { PagePagination } from "../_components/PagePagination";

type UpcomingProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function UpcomingPage({ searchParams }: UpcomingProps) {
  const { page } = await searchParams;
  const url = "upcoming";

  const { results: movies, total_pages } = await getUpcomingMovies(page);

  const currentPage = Number(page ?? 1);
  const totalPagesCount = Number(total_pages) || 0;
  const limitedPages = Math.min(total_pages, 500);

  const pages = Array.from({ length: limitedPages }, (_, index) => index + 1);

  return (
    <div className="w-360 mx-auto">
      <div className="flex justify-between m-2">
        <Link href="/">
          <Button variant={"outline"}>
            <ArrowLeft />
            Back
          </Button>
        </Link>

        <h1 className="m-2 bold">Upcoming</h1>
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
