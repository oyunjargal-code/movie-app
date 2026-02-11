import { MovieCard } from "@/app/_components";
import { Button } from "@/components/ui/button";
import { details } from "@/lib/api";
import { Link, Star } from "lucide-react";

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
            <h3 className="text-4xl font-bold ">{movie.title}</h3>
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
        <img className="p-2" src={`${imgBaseUrl}${movie.poster_path}`} alt="imgBaseUrl" />
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
<Button className="m-2 rounded-sm" variant={"outline"}>Fairy Tale</Button>
<Button className="m-2 rounded-sm" variant={"outline"}>Pop Musical</Button>
<Button className="m-2 rounded-sm" variant={"outline"}>Fantasy</Button>
<Button className="m-2 rounded-sm" variant={"outline"}>Musical</Button>
<Button className="m-2 rounded-sm" variant={"outline"}>Romance</Button>
        <p>{movie.overview}</p>
      </div>
     
      </div>
      <div>

 <div>
        <h3>Director</h3>
        <p>{movie.adult}</p>
      </div>
      <div className="grid grid-cols-2 m-2">
        <h3>Writers</h3>
        <p>{movie.overview}</p>
      </div>
      <div>
        <h3>Stars</h3>
        <p>{movie.status}</p>
      </div>
      </div>
      <div className="flex justify-between">
        <h2 className="font-bold">More like this</h2>
        <Button variant={"outline"}>See more</Button>
      </div>
      {/* <div className=" gap-3 pb-4 grid grid-cols-2 md:grid-cols-5">
        {movies.slice(0, 10).map((movie) => {
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
      </div> */}
     
      <div>{/* <p>{movie.}</p> */}</div>
    </div>
  );
};

export default DetailsPage;
