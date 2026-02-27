import { getMovieByGenreId } from "@/lib/api/getMoviesByGenresId";
import { GenreList } from "../_components/GenreList";
import { Divide } from "lucide-react";
import { MovieCard } from "../_components";
import Link from "next/link";

export default async function SearchGenres({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { genre } = await searchParams;

  const { results } = await getMovieByGenreId(String(genre));

  return (
    <div className="flex flex-col md:flex-row gap-10 m-5 justify-center">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {results.map((movie) => {
          return (
            <Link key={movie.id} href={`/details/${movie.id}`}>
              <MovieCard
                img={movie.poster_path}
                name={movie.title}
                rating={movie.vote_average}
              />
            </Link>
          );
        })}
      </div>
      <span className="border border-muted-foreground/60 max-h-100"></span>
      <GenreList />
    </div>
  );
}
