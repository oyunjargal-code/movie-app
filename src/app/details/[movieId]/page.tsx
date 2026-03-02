import { MovieCard } from "@/app/_components";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { details, getMovieCredits } from "@/lib/api";
import { getMovieThriller } from "@/lib/api/getMovieThriller";
import { getSameMovies } from "@/lib/api/getSameMovie";
import { Star } from "lucide-react";
import Link from "next/link";

type DetailsPageProps = {
  params: Promise<{ movieId: string }>;
};

const DetailsPage = async ({ params }: DetailsPageProps) => {
  const { movieId } = await params;

  const movie = await details(movieId);
  const imgBaseUrl = "https://image.tmdb.org/t/p/original";
  const { results: similarMovies } = await getSameMovies(movieId, "1");
  const { results: trailerResults } = await getMovieThriller(movieId);

  const trailer = trailerResults.find((trailer) => trailer.type === "Trailer");
  const trailerKey = trailer?.key;

  const credits = await getMovieCredits(movieId);
  console.log({ movie });
  const writer = credits.crew
    .filter((person) => person.job === "Writer")
    .map((person) => person.name);
  console.log("writer:", writer);

  return (
    <div className="w-360 mx-auto">
      <div>
        <div className="flex justify-between">
          <div>
            <h3 className="text-4xl font-bold ">{movie.title}</h3>
            <p>{movie.release_date}</p>
          </div>
          <div className="flex flex-col gap-1 p-2">
            <div>
              <Star className="w-5 h-5 text-[#FDE047] fill-[#FDE047]" />
              <span className="text-sm dark:text-[#71717A)]">
                {movie.vote_average.toFixed()}/10
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 justify-center">
        <div className="h-106 w-72.5">
          <img src={`${imgBaseUrl}${movie.poster_path}`} alt="poster" />
        </div>
        <div className="h-107 w-190">
          <iframe
            src={`//www.youtube-nocookie.com/embed/${trailerKey}`}
            allowFullScreen
            className="min-h-107 w-full"
          />
        </div>
      </div>

      <div className="gap-2 p-2 grid grid-cols-2">
        <div className="gap-2 p-2">
          <div className="p-2 gap-3 pb-4 grid grid-cols-2 md:grid-cols-5">
            {movie.genres.map((genre) => (
              <Badge variant={"secondary"} key={genre.id}>
                {genre.name}
              </Badge>
            ))}
          </div>

          <p>{movie.overview}</p>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 m-2">
          <h3 className="font-bold">Director</h3>
          <div>
            {credits.crew
              .filter((person) => person.job === "Director")
              .map((person) => person.name)}
          </div>
        </div>
        <div className="grid grid-cols-2 m-2">
          <h3 className="font-bold">Writers</h3>
          <div>
            {credits.crew
              .filter((person) => person.job === "Writer")
              .map((person) => person.name)}
          </div>
        </div>
        <div className="grid grid-cols-2 m-2">
          <h3 className="font-bold">Stars</h3>
          <div>
            {credits.cast.slice(0, 3).map((actor) => (
              <p key={actor.id}>{actor.name}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <h2 className="font-bold">More like this</h2>
        <Link href={`/sameMovie?movieId=${movieId}&page=1`}>
          <Button className="p-2" variant={"outline"}>
            See more
          </Button>
        </Link>
      </div>
      <div className=" gap-3 pb-4 grid grid-cols-2 md:grid-cols-5">
        {similarMovies.slice(0, 5).map((movie) => {
          return (
            <Link key={movie.id} href={`/details/${movie.id}`}>
              <MovieCard
                name={movie.title}
                rating={movie.vote_average}
                img={movie.poster_path}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DetailsPage;
