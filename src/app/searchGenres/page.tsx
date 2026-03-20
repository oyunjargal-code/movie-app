import { getMovieByGenreId } from "@/lib/api/getMoviesByGenresId";
import { GenreList } from "../_components/GenreList";
import { Divide } from "lucide-react";
import { MovieCard } from "../_components";
import Link from "next/link";
import { PagePagination } from "../_components/PagePagination";

// export default async function SearchGenres({
//   searchParams,
// }: {
//   searchParams: { [key: string]: string | string[] | undefined };
// }) {
//   const { genre, page } = await searchParams;

//   const { results: movies, total_pages } = await getMovieByGenreId(
//     String(genre),
//     page,
//   );
//   const url = `/searchGenres?genre=${genre}&`;

//   return (
//     <div className="flex flex-col md:flex-row gap-10 m-5 justify-center">
//       <div>
//         <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
//           {movies?.map((movie) => {
//             return (
//               <Link key={movie.id} href={`/details/${movie.id}`}>
//                 <MovieCard
//                   img={movie.poster_path}
//                   name={movie.title}
//                   rating={movie.vote_average}
//                 />
//               </Link>
//             );
//           })}
//         </div>
//         <PagePagination url={url} page={page} total_pages={total_pages} />
//       </div>

//       <span className="border border-muted-foreground/60 max-h-100"></span>
//       <GenreList genrePathId={genre} />
//     </div>
//   );
// }

export default async function SearchGenres({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { genre, page } = await searchParams;

  const activeIds = Array.isArray(genre)
    ? genre
    : genre
    ? [genre]
    : [];

  // genre сонгоогүй бол хоосон харуулах
  if (activeIds.length === 0) {
    return (
      <div className="flex gap-10 m-5">
        <div className="w-64 shrink-0">
          <GenreList genrePathId={genre} />
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <h2 className="font-semibold text-lg text-muted-foreground">
            Genre сонгоно уу
          </h2>
        </div>
      </div>
    );
  }

  const { results: movies, total_pages } = await getMovieByGenreId(
    activeIds.join(","),
    page,
  );

  const url = `/searchGenres?${activeIds.map((id) => `genre=${id}`).join("&")}&`;

  return (
    <div className="flex gap-10 m-5">
      <div className="w-64 shrink-0">
        <GenreList genrePathId={genre} />
      </div>
      <div className="flex flex-col gap-4 flex-1">
        <h2 className="font-semibold text-lg">
          {movies?.length} titles
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {movies?.map((movie) => (
            <Link key={movie.id} href={`/details/${movie.id}`}>
              <MovieCard
                img={movie.poster_path}
                name={movie.title}
                rating={movie.vote_average}
              />
            </Link>
          ))}
        </div>
        <PagePagination url={url} page={page} total_pages={total_pages} />
      </div>
    </div>
  );
}