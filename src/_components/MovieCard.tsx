import { Star } from "lucide-react";

type MovieCardProps = {
  img: string;
  rating: number;
  name: string;
  id: number;
};
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
    name: "Wonder",
    rating: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8gUxvBM0BaRU5q1qN0tbVSHhmtXi7A7Ea3A&s",
  },
];

export const MovieCard = (props: MovieCardProps) => {
  const { img, rating, name } = props;
  return (
    <div className="w-full mx-auto  bg-[#F4F4F5] rounded-sm ">
      <img
        className="w-full h-[233px]  md:h-[340px]"
        src="./dear-santa.jpg"
        alt="poster"
      />
      <div className="w-full h-full">
        <div className="flex gap-2 mt-2">
          <Star className="text-[#FDE047]" />
          <div className="flex">
            <p>{rating}/</p>
            <p>10</p>
          </div>
        </div>
        <h1>{name}</h1>
      </div>
    </div>
  );
};
