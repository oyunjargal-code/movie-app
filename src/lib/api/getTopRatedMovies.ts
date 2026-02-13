import { MovieList } from "../types";
import { options } from "./index";

export const getTopRatedMovies = async (): Promise<MovieList> => {
  const respose = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
    options,
  );
  const data = await respose.json();

  return data;
};
