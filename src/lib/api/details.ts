import { MovieDetails } from "../types";
import { options } from "./index";

export const details = async (movieId: string): Promise<MovieDetails> => {
  const respose = await fetch(
    `${process.env.baseUrl}/movie/${movieId}?language=en-US`,
    options,
  );
  const data = await respose.json();
  console.log("move ID:", movieId);
  return data;
};
