import { MovieList } from "../types";
import { options } from "./shared/options";

export const getSameMovies = async (
  id: string,
  page: string,
): Promise<MovieList> => {
  const pageNumber = page ? String(page) : "1";

  const respose = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=${pageNumber}`,
    options,
  );
  const data = await respose.json();

  return data;
};
