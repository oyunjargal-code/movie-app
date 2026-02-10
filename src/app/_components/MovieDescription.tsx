"use client";
import { MovieCard } from "./MovieCard";
import { Button } from "@/components/ui/button";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { DescriptionTextPhone } from "./DescriptionTextPhone";
import { Upcoming } from "./Upcoming";
import Autoplay from "embla-carousel-autoplay";
import { DescriptionTextDesktop } from "./DescriptionTextDesktop";
import { Movie } from "@/lib/types";

type PopularProps = {
  movies: Movie[];
};

export const MovieDescription = ({ movies }: PopularProps) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );
  console.log(movies);
  return (
    <div className="w-full">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={() => plugin.current.stop()}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {movies.slice(0, 3).map((movie) => {
            return (
              <CarouselItem key={movie.id} className="w-full relative">
                <img
                  className="w-full h-75 md:h-150 bg-cover bg-center"
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  alt=""
                />
                <DescriptionTextPhone
                  name={movie.title}
                  rating={movie.vote_average}
                  desc={movie.overview}
                />
                <DescriptionTextDesktop
                  name={movie.title}
                  rating={movie.vote_average}
                  desc={movie.overview}
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20" />
      </Carousel>
    </div>
  );
};
