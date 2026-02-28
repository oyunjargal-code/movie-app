import { Genres, MovieList } from "../types";
import { options } from "./shared/options";

export const getMovieByGenreId = async (
  genreId: string,
  page: string | string[] | undefined,
): Promise<MovieList> => {
  const pageNumber = page ? String(page) : "1";

  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${genreId}&page=${pageNumber}`,
    options,
  );
  const data = await response.json();
  return data;
};
