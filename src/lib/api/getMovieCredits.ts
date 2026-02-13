import { Credits } from "../types";
import { options } from "./index";

export const getMovieCredits = async (movieId: string): Promise<Credits> => {
  // const respose = await fetch(`${baseUrl}/movie/${movieId}/credits`, options);

  const respose = await fetch(
    `${process.env.baseUrl}/movie/${movieId}/credits?language=en-US`,
    options,
  );

  const data = await respose.json();

  return data;
};
