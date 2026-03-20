import { MovieCard } from "@/app/_components";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { details, getMovieCredits } from "@/lib/api";
import { getMovieThriller } from "@/lib/api/getMovieThriller";
import { getSameMovies } from "@/lib/api/getSameMovie";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";

type DetailsPageProps = {
  params: Promise<{ movieId: string }>;
};

// const DetailsPage = async ({ params }: DetailsPageProps) => {
//   const { movieId } = await params;

//   const movie = await details(movieId);
//   const imgBaseUrl = "https://image.tmdb.org/t/p/original";
//   const { results: similarMovies } = await getSameMovies(movieId, "1");
//   const { results: trailerResults } = await getMovieThriller(movieId);

//   const trailer = trailerResults.find((trailer) => trailer.type === "Trailer");
//   const trailerKey = trailer?.key;

//   const credits = await getMovieCredits(movieId);
//   console.log({ movie });
//   const writer = credits.crew
//     .filter((person) => person.job === "Writer")
//     .map((person) => person.name);
//   console.log("writer:", writer);

//   return (
//     <div className="w-360 mx-auto">
//       <div>
//         <div className="flex justify-between">
//           <div>
//             <h3 className="text-4xl font-bold ">{movie.title}</h3>
//             <p>{movie.release_date}</p>
//           </div>
//           <div className="flex flex-col gap-1 p-2">
//             <div>
//               <Star className="w-5 h-5 text-[#FDE047] fill-[#FDE047]" />
//               <span className="text-sm dark:text-[#71717A)]">
//                 {movie.vote_average.toFixed()}/10
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex gap-2 justify-center">
//         <div className="h-106 w-72.5">
//           <img src={`${imgBaseUrl}${movie.poster_path}`} alt="poster" />
//         </div>
//         <div className="h-107 w-190">
//           <iframe
//             src={`//www.youtube-nocookie.com/embed/${trailerKey}`}
//             allowFullScreen
//             className="min-h-107 w-full"
//           />
//         </div>
//       </div>

//       <div className="gap-2 p-2 grid grid-cols-2">
//         <div className="gap-2 p-2">
//           <div className="p-2 gap-3 pb-4 grid grid-cols-2 md:grid-cols-5">
//             {movie.genres.map((genre) => (
//               <Badge variant={"secondary"} key={genre.id}>
//                 {genre.name}
//               </Badge>
//             ))}
//           </div>

//           <p>{movie.overview}</p>
//         </div>
//       </div>
//       <div>
//         <div className="grid grid-cols-2 m-2">
//           <h3 className="font-bold">Director</h3>
//           <div>
//             {credits.crew
//               .filter((person) => person.job === "Director")
//               .map((person) => person.name)}
//           </div>
//         </div>
//         <div className="grid grid-cols-2 m-2">
//           <h3 className="font-bold">Writers</h3>
//           <div>
//             {credits.crew
//               .filter((person) => person.job === "Writer")
//               .map((person) => person.name)}
//           </div>
//         </div>
//         <div className="grid grid-cols-2 m-2">
//           <h3 className="font-bold">Stars</h3>
//           <div>
//             {credits.cast.slice(0, 3).map((actor) => (
//               <p key={actor.id}>{actor.name}</p>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="flex justify-between">
//         <h2 className="font-bold">More like this</h2>
//         <Link href={`/sameMovie?movieId=${movieId}&page=1`}>
//           <Button className="p-2" variant={"outline"}>
//             See more
//           </Button>
//         </Link>
//       </div>
//       <div className=" gap-3 pb-4 grid grid-cols-2 md:grid-cols-5">
//         {similarMovies.slice(0, 5).map((movie) => {
//           return (
//             <Link key={movie.id} href={`/details/${movie.id}`}>
//               <MovieCard
//                 name={movie.title}
//                 rating={movie.vote_average}
//                 img={movie.poster_path}
//               />
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

const DetailsPage = async ({ params }: DetailsPageProps) => {
  const { movieId } = await params;

  const movie = await details(movieId);
  const imgBaseUrl = "https://image.tmdb.org/t/p/original";
  const { results: similarMovies } = await getSameMovies(movieId, "1");
  const { results: trailerResults } = await getMovieThriller(movieId);

  const trailer = trailerResults.find((trailer) => trailer.type === "Trailer");
  const trailerKey = trailer?.key;

  const credits = await getMovieCredits(movieId);
  const writer = credits.crew
    .filter((person) => person.job === "Writer")
    .map((person) => person.name);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Title + Rating */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-4xl font-bold">{movie.title}</h3>
          <p className="text-sm text-muted-foreground mt-1">
            {movie.release_date} · {movie.runtime}m
          </p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className="text-sm text-muted-foreground">Rating</p>
          <div className="flex items-center gap-1">
            <Star className="w-5 h-5 text-[#FDE047] fill-[#FDE047]" />
            <span className="font-bold">{movie.vote_average.toFixed(1)}</span>
            <span className="text-sm text-muted-foreground">/10</span>
          </div>
          <p className="text-sm text-muted-foreground">{movie.vote_count}</p>
        </div>
      </div>

      {/* Poster + Trailer */}
      <div className="flex gap-4 mb-6">
        <div className="w-72 shrink-0">
          <img
            src={`${imgBaseUrl}${movie.poster_path}`}
            alt="poster"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="flex-1">
          <iframe
            src={`//www.youtube-nocookie.com/embed/${trailerKey}`}
            allowFullScreen
            className="w-full h-full min-h-96 rounded-md"
          />
        </div>
      </div>

      {/* Genres + Overview */}
      <div className="flex gap-2 flex-wrap mb-4">
        {movie.genres.map((genre) => (
          <Badge variant={"secondary"} key={genre.id}>
            {genre.name}
          </Badge>
        ))}
      </div>
      <p className="text-sm mb-6">{movie.overview}</p>

      {/* Director / Writers / Stars */}
      <div className="divide-y border-t border-b mb-6">
        <div className="grid grid-cols-4 py-3">
          <h3 className="font-bold">Director</h3>
          <div className="col-span-3 text-sm">
            {credits.crew
              .filter((person) => person.job === "Director")
              .map((person) => person.name)
              .join(" · ")}
          </div>
        </div>
        <div className="grid grid-cols-4 py-3">
          <h3 className="font-bold">Writers</h3>
          <div className="col-span-3 text-sm">
            {credits.crew
              .filter((person) => person.job === "Writer")
              .map((person) => person.name)
              .join(" · ")}
          </div>
        </div>
        <div className="grid grid-cols-4 py-3">
          <h3 className="font-bold">Stars</h3>
          <div className="col-span-3 text-sm">
            {credits.cast
              .slice(0, 3)
              .map((actor) => actor.name)
              .join(" · ")}
          </div>
        </div>
      </div>

      {/* More like this */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-xl">More like this</h2>
        <Link href={`/sameMovie?movieId=${movieId}&page=1`}>
          <Button className="gap-1" variant={"outline"}>
            See more <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
      {/* <div className="gap-3 pb-4 grid grid-cols-2 md:grid-cols-5">
        {similarMovies.slice(0, 5).map((movie) => (
          <Link key={movie.id} href={`/details/${movie.id}`}>
            <MovieCard
              name={movie.title}
              rating={movie.vote_average}
              img={movie.poster_path}
            />
          </Link>
        ))}
      </div> */}
      <div className="grid grid-cols-5 gap-3 pb-4">
  {similarMovies.slice(0, 5).map((movie) => (
    <Link key={movie.id} href={`/details/${movie.id}`}>
      <MovieCard
        name={movie.title}
        rating={movie.vote_average}
        img={movie.poster_path}
      />
    </Link>
  ))}
</div>
    </div>
  );
};

export default DetailsPage;

