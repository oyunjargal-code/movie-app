import { MovieList } from "../types";
import { options } from "./index";

export const getPopularMovies = async (): Promise<MovieList> => {
  const respose = await fetch(
    `${process.env.baseUrl}/movie/popular?language=en-US&page=1}`,
    options,
  );
  const data = await respose.json();

  return data;
};
