import { Credits } from "../types";
import { options } from "./shared/options";

export const getMovieCredits = async (movieId: string): Promise<Credits> => {
  // const respose = await fetch(`${baseUrl}/movie/${movieId}/credits`, options);

  const respose = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    options,
  );

  const data = await respose.json();

  return data;
};
