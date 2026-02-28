import { MovieList, Trailer } from "../types";
import { options } from "./shared/options";

export const getMovieThriller = async (id: string): Promise<Trailer> => {
  const respose = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
    options,
  );

  const data = await respose.json();

  return data;
};
