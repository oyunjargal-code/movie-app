import { MovieCard } from "@/app/_components";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { getUpcomingMovies } from "@/lib/api";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
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

  const { results: movies } = await getUpcomingMovies(page);

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
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="?page=1">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="?page=2" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="?page=3">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
