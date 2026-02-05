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

const discriptions = [
  {
    id: 1,
    name: "Wicked",
    rating: 5,
    desc: "Lorem Wicked Lorem Wicked Lorem Wicked Lorem Wicked Lorem Wicked Lorem Wicked Lorem Wicked",
    image:
      "https://trippystore.com/cdn/shop/products/posters-star-wars-characters-wide-poster-102395-31389138976821.jpg?v=1648751279&width=1346",
  },
  {
    id: 2,
    name: "Interstellar",
    rating: 1,
    desc: "Interstellar Lorem Interstellar Lorem Interstellar Lorem Interstellar Lorem Interstellar Lorem Interstellar Lorem Interstellar Lorem",
    image:
      "https://original.fontsinuse.com/fontsinuse.com/use-images/26/26616/26616.jpeg",
  },
  {
    id: 3,
    name: "Lord of the Rings",
    rating: 8,
    desc: "Lord of the Rings Lord of the Rings Lord of the Rings Lord of the Rings Lord of the Rings Lord of the Rings Lord of the Rings",
    image:
      "https://static.posters.cz/image/350/lord-of-the-rings-trilogy-i133047.jpg",
  },
];

export const MovieDescription = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );
  return (
    <div className="w-full">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={() => plugin.current.stop()}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {discriptions.map((item, index) => {
            return (
              <CarouselItem key={item.id} className="w-full relative">
                <div
                  className="w-full h-75 md:h-150 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                <DescriptionTextPhone
                  name={item.name}
                  rating={item.rating}
                  desc={item.desc}
                />
                <DescriptionTextDesktop
                  name={item.name}
                  rating={item.rating}
                  desc={item.desc}
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
