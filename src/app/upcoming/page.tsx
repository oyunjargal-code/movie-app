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

type UpcomingProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function UpcomingPage({ searchParams }: UpcomingProps) {
  const { page } = await searchParams;

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

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={`?page=${Number(page) - 1}`}
              aria-disabled={Number(page) <= 1}
              tabIndex={Number(page) <= 1 ? -1 : undefined}
              className={
                Number(page) <= 1 ? "pointer-events-none opacity-30" : undefined
              }
            />
          </PaginationItem>
          {pages.map((pageNum, index) => {
            if (Number(pageNum) + 3 < currentPage) return null;
            if (Number(pageNum) - 3 > currentPage) return null;
            return (
              <PaginationItem key={index}>
                <PaginationLink href={`?page=${pageNum}`}>
                  {pageNum}
                </PaginationLink>
              </PaginationItem>
            );
          })}
          <PaginationItem>
            <PaginationNext href={`?page=${Number(page) + 1}`} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
