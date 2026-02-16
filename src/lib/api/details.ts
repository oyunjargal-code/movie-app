import { MovieDetails } from "../types";
import { options } from "./shared/options";

export const details = async (movieId: string): Promise<MovieDetails> => {
  const respose = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options,
  );
  const data = await respose.json();
  console.log("move ID:", movieId);
  return data;
};
