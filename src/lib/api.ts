import { Credits, MovieDetails, Response } from "./types";
import dotenv from "dotenv";
// dotenv.config({ path: "src/.env" });
const baseUrl = "https://api.themoviedb.org/3";

const popularUrl = "/movie/popular?language=en-US&page=1";
const upcomingUrl = "/movie/upcoming?language=en-US&page=1";
const topRatedUrl = "/movie/top_rated?language=en-US&page=1";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTU1MDFiMDkwYzg4ZWUxZTk3MTMzNzQyNjczOGJjNyIsIm5iZiI6MTc3MDYwODQ2NS4zMzMsInN1YiI6IjY5ODk1NzUxMTNhMmRjZDNiNThmZDJkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c04TTyCpa_mJ7K1FYuisT2OF3YfIM65zarF2__SUYlQOL";

// const token = process.env.TOKEN;
// console.log("Token ni:", token);

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
  const respose = await fetch(`${baseUrl}${topRatedUrl}`, options);
  const data = await respose.json();

  return data;
};

export const details = async (movieId: string): Promise<MovieDetails> => {
  const respose = await fetch(
    `${baseUrl}/movie/${movieId}?language=en-US`,
    options,
  );
  const data = await respose.json();
  console.log("move ID:", movieId);
  return data;
};

export const getMovieCredits = async (movieId: string): Promise<Credits> => {
  // const respose = await fetch(`${baseUrl}/movie/${movieId}/credits`, options);

  const respose = await fetch(
    `${baseUrl}/movie/${movieId}/credits?language=en-US`,
    options,
  );

  const data = await respose.json();

  return data;
};
