import { MovieList } from "../types";
import { options } from "./shared/options";

export const getUpcomingMovies = async (
  page: string | string[] | undefined,
): Promise<MovieList> => {
  const pageNumber = page ? String(page) : "1";

  const respose = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${pageNumber}`,
    options,
  );
  const data = await respose.json();

  return data;
};
