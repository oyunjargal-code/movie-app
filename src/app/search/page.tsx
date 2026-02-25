import Link from "next/link";
import { MovieCard } from "../_components";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { searchMovies } from "@/lib/api/searchMovies";

type SearchProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function SearchPage({ searchParams }: SearchProps) {
  const { page, q } = await searchParams;

  const { results: movies, total_pages } = await searchMovies(q, page);

  const currentPage = Number(page ?? 1);
  const limitedPages = Math.min(total_pages, 500);

  const pages = Array(limitedPages)
    .fill(0)
    .map((_, index) => index + 1);
  return (
    <div>
      <div>
        <h1>Search results</h1>
        <h3>
          {} results fo "{q}"
        </h3>
        <div className=" gap-3 pb-4 grid grid-cols-2 md:grid-cols-5">
          {movies.map((movie) => {
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
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
