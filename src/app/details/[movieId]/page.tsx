import { MovieCard } from "@/app/_components";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { details, getMovieCredits } from "@/lib/api";
import { Crew } from "@/lib/types";
import { Link, Star } from "lucide-react";
import { Actor } from "next/font/google";
import { dir } from "node:console";

type DetailsPageProps = {
  params: Promise<{ movieId: string }>;
};

const DetailsPage = async ({ params }: DetailsPageProps) => {
  const { movieId } = await params;

  const movie = await details(movieId);
  const imgBaseUrl = "https://image.tmdb.org/t/p/original";

  const credits = await getMovieCredits(movieId);
  console.log({ movie });
  const writer = credits.crew
    .filter((person) => person.job === "Writer")
    .map((person) => person.name);
  console.log("writer:", writer);

  return (
    <div>
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
      <div>
        <div>
          <img
            className="p-2"
            src={`${imgBaseUrl}${movie.poster_path}`}
            alt="imgBaseUrl"
          />
        </div>
      </div>

      <div className="gap-2 p-2 grid grid-cols-2">
        <div>
          <img
            className="h-[148px] w-[100px] "
            src={`${imgBaseUrl}${movie.poster_path}`}
            alt="poster"
          />
        </div>
        <div className="gap-2 p-2">
          <div className="flex gap-2 p-2">
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
            {/* {dataArray.filter(obj => obj.val > 1 && obj.val2).map(obj => obj.val2);} */}
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
        <Button variant={"outline"}>See more</Button>
      </div>
    </div>
  );
};

export default DetailsPage;
