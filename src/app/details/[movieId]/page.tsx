import { details } from "@/lib/api";
import { Star } from "lucide-react";

type DetailsPageProps = {
  params: Promise<{ movieId: string }>;
};

const DetailsPage = async ({ params }: DetailsPageProps) => {
  const { movieId } = await params;

  const movie = await details(movieId);
  const imgBaseUrl = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <div>
        <div className="flex justify-between">
          <div>
            <h1 className="text-4xl">{movie.title}</h1>
            <p>{movie.release_date}</p>
          </div>
          <div className="flex gap-1 p-2">
            <div>
              <Star className="w-5 h-5 text-[#FDE047] fill-[#FDE047]" />
              <span className="text-sm dark:text-[#71717A)]">
                {movie.popularity}/10
              </span>
            </div>
            {/* <div>
          <h1>{movie.vote_count}</h1>
        </div> */}
          </div>
        </div>
      </div>
      <div>
        <img
          className="h-[148px] w-[100px] "
          src={`${imgBaseUrl}${movie.poster_path}`}
          alt="poster"
        />
      </div>
      <div>
        <p>{movie.overview}</p>
      </div>
      <div>{/* <p>{movie.}</p> */}</div>
    </div>
  );
};

export default DetailsPage;
