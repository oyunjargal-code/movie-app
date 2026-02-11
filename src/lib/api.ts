import { MovieDetails, Response } from "./types";
import dotenv from "dotenv";
dotenv.config({ path: "src/.env" });
const baseUrl = "https://api.themoviedb.org/3";

const popularUrl = "/movie/popular?language=en-US&page=1";
const upcomingUrl = "/movie/upcoming?language=en-US&page=1";
const topRatedUrl = "/movie/top_rated?language=en-US&page=1";

const token= ""

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
