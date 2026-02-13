import { MovieList } from "../types";
import { options } from "./index";

export const getPopularMovies = async (
  searchValue: string,
): Promise<MovieList> => {
  const respose = await fetch(
    `${process.env.baseUrl}/search/movie?query=${searchValue}&language=en-US}`,
    options,
  );
  const data = await respose.json();

  return data;
};
