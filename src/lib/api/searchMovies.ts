import { MovieList } from "../types";
import { options } from "./shared/options";

export const searchMovies = async (
  searchValue: string,
  page: string,
): Promise<MovieList> => {
  const respose = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchValue}&language=en-US&page=${page}`,
    options,
  );
  const data = await respose.json();

  return data;
};
