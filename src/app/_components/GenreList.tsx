import { getGenres } from "@/lib/api/getGenres";
import { Genre } from "../_components/Genre";
import Link from "next/link";
import { PagePagination } from "./PagePagination";

// 
export const GenreList = async ({
  genrePathId,
}: {
  genrePathId: string | string[] | undefined;
}) => {
  const { genres } = await getGenres();

  const activeIds = Array.isArray(genrePathId)
    ? genrePathId
    : genrePathId
    ? [genrePathId]
    : [];

  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-bold text-2xl">Genres</h1>
      <p className="text-sm text-muted-foreground">See lists of movies by genre</p>
      <div className="flex gap-2 flex-wrap">
        {genres.map((genre) => {
          const isActive = activeIds.includes(String(genre.id));

          const newIds = isActive
            ? activeIds.filter((id) => id !== String(genre.id))
            : [...activeIds, String(genre.id)];

          const href =
            newIds.length === 0
              ? `/searchGenres?page=1`
              : `/searchGenres?${newIds.map((id) => `genre=${id}`).join("&")}&page=1`;

          return (
            <Link key={genre.id} href={href}>
              <Genre
                genre={genre}
                genreId={genre.id}
                isActive={isActive}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};