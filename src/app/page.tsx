import {
  Foother,
  Header,
  MovieDescription,
  Popular,
  TopRated,
  Upcoming,
  MovieCard,
} from "@/app/_components";
import { getPopularMovies, getUpcomingMovies } from "@/lib/api";
import Link from "next/link";

const Home = async () => {
  const { results: popular } = await getPopularMovies();
  const { results: upComing } = await getUpcomingMovies();

  return (
    <div className="flex flex-col gap-6 items-center justify-center xl:mx-auto">
      <Header />

      <MovieDescription movies={popular} />

      <Upcoming movies={upComing} />
      <TopRated />
      <Popular movies={popular} />

      <Foother />
    </div>
  );
};
export default Home;
