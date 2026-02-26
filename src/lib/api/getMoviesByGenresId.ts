import { Genres, MovieList } from "../types";
import { options } from "./shared/options";

export const getMovieByGenreId = async (
  genreId: string,
): Promise<MovieList> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${genreId}`,
    options,
  );
  const data = await response.json();
  return data;
};
