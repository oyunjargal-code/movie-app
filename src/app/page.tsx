import {
  Foother,
  Header,
  MovieDescription,
  Popular,
  TopRated,
  Upcoming,
  MovieCard,
} from "@/app/_components";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/api";
import Link from "next/link";

const Home = async () => {


  
  const { results: popular } = await getPopularMovies("1");
  const { results: upComing } = await getUpcomingMovies("1");
  const { results: topRated } = await getTopRatedMovies("1");
  console.log("Popular:", { popular });

  return (
    <div className="flex flex-col gap-6 items-center justify-center mx-auto">
      <MovieDescription movies={popular} />

      <Upcoming movies={upComing} />
      <Popular movies={popular} />
      <TopRated movies={topRated} />
    </div>
  );
};
export default Home;
