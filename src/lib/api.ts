import { Response } from "./types";

const baseUrl =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

const popularUrl = "/movie/popular?language=en-US&page=1";
const upcomingUrl = "/movie/upcoming?language=en-US&page=1";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTU1MDFiMDkwYzg4ZWUxZTk3MTMzNzQyNjczOGJjNyIsIm5iZiI6MTc3MDYwODQ2NS4zMzMsInN1YiI6IjY5ODk1NzUxMTNhMmRjZDNiNThmZDJkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c04TTyCpa_mJ7K1FYuisT2OF3YfIM65zarF2__SUYlQ";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
};

export const getPopularMovies = async (): Promise<Response> => {
  const respose = await fetch(`${baseUrl}${popularUrl}`, options);
  const data = await respose.json();

  return data;
};

export const getUpcomingMovies = async (): Promise<Response> => {
  const respose = await fetch(`${baseUrl}${upcomingUrl}`, options);
  const data = await respose.json();

  return data;
};

export const getTopRatedMovies = async (): Promise<Response> => {
  const respose = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options,
  );
  const data = await respose.json();

  return data;
};
