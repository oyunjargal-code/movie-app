"use client";
import {
  Foother,
  Header,
  MovieDescription,
  Popular,
  TopRated,
  Upcoming,
} from "@/_components";

export default function Home() {
  return (
    <div className="flex flex-col gap-6 items-center justify-center xl:mx-auto">
      <Header />
      <MovieDescription />
      <Upcoming />
      <TopRated />
      <Popular />
      <Foother />
    </div>
  );
}
