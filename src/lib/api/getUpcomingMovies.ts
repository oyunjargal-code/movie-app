import { MovieList } from "../types";
import { options } from "./shared/options";

export const getUpcomingMovies = async (): Promise<MovieList> => {
  const respose = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`,
    options,
  );
  const data = await respose.json();

  return data;
};
