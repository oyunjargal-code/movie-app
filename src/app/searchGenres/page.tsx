import { getMovieByGenreId } from "@/lib/api/getMoviesByGenresId";
import { GenreList } from "../_components/GenreList";
import { Divide } from "lucide-react";

export default async function SearchGenres({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { genre } = await searchParams;

  const { results } = await getMovieByGenreId(String(genre));

  return (
    <div className="flex">
      <div>
        {results.map((movie) => {
          return <h1 key={movie.id}>{movie.title}</h1>;
        })}
      </div>
      <GenreList />
    </div>
  );
}
