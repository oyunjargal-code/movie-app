import { Genres } from "../types";
import { options } from "./shared/options";

export const getGenres = async (): Promise<Genres> => {
  const response = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?language=en",
    options,
  );
  const data = await response.json();
  return data;
};
