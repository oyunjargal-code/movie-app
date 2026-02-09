import { Star } from "lucide-react";
import { MovieCard } from "./MovieCard";
const movieCards = [
  {
    id: 1,
    name: "Titanic",
    rating: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL94Dz7To4p6R3AVyLsyaPcZK5iQqNS29NkA&s",
  },
  {
    id: 2,
    name: "Harry Potter",
    rating: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsCiAXswOiFuucVXOTeqw95qWU7YEVEKS4qw&s",
  },
  {
    id: 3,
    name: "Wonder",
    rating: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8gUxvBM0BaRU5q1qN0tbVSHhmtXi7A7Ea3A&s",
  },
  {
    id: 4,
    name: "Avatar",
    rating: 4,
    image:
      "https://m.media-amazon.com/images/I/81N2Jxv26XL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 5,
    name: "Lucie",
    rating: 5,
    image: "https://i.ebayimg.com/images/g/UgcAAOSwdm9mDfNe/s-l1600.webp",
  },
  {
    id: 6,
    name: "Titanic",
    rating: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL94Dz7To4p6R3AVyLsyaPcZK5iQqNS29NkA&s",
  },
  {
    id: 7,
    name: "Harry Potter",
    rating: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsCiAXswOiFuucVXOTeqw95qWU7YEVEKS4qw&s",
  },
  {
    id: 8,
    name: "Wonder",
    rating: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8gUxvBM0BaRU5q1qN0tbVSHhmtXi7A7Ea3A&s",
  },
  {
    id: 9,
    name: "Avatar",
    rating: 4,
    image:
      "https://m.media-amazon.com/images/I/81N2Jxv26XL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 10,
    name: "Lucie",
    rating: 5,
    image: "https://i.ebayimg.com/images/g/UgcAAOSwdm9mDfNe/s-l1600.webp",
  },
];

export const MovieCardList = () => {
  return (
    <div>
      <div className=" gap-3 pb-4 grid grid-cols-2 md:grid-cols-5">
        {movieCards.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              id={movie.id}
              img={movie.image}
              name={movie.name}
              rating={movie.rating}
            />
          );
        })}
      </div>
    </div>
  );
};
