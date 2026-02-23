import { MovieList } from "../types";
import { options } from "./shared/options";

export const getPopularMovies = async (
  page: string | string[] | undefined,
): Promise<MovieList> => {
  const respose = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page ?? 1}`,
    options,
  );
  const data = await respose.json();

  return data;
};
