import { MovieList } from "../types";
import { options } from "./index";

export const getUpcomingMovies = async (): Promise<MovieList> => {
  const respose = await fetch(
    `${process.env.baseUrl}/movie/upcoming?language=en-US&page=1`,
    options,
  );
  const data = await respose.json();

  return data;
};
