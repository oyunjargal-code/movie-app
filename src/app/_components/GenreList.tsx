import { getGenres } from "@/lib/api/getGenres";
import { Genre } from "../_components/Genre";
import Link from "next/link";

export const GenreList = async ({
  genrePathId,
}: {
  genrePathId: string | string[] | undefined;
}) => {
  const { genres } = await getGenres();

  return (
    <div className="max-w-97 flex flex-col gap-2">
      <h1 className="font-bold text-2xl">Search by genre</h1>
      <p>See lists of movies by genre</p>
      <div className="flex gap-2 flex-wrap">
        {genres.map((genre) => (
          <Link key={genre.id} href={`/searchGenres?genre=${genre.id}`}>
            <Genre genre={genre} genreId={genre.id} genrePathId={genrePathId} />
          </Link>
        ))}
      </div>
    </div>
  );
};
