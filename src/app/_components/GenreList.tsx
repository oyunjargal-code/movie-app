import { getGenres } from "@/lib/api/getGenres";
import { Genre } from "../_components/Genre";

export const GenreList = async () => {
  const { genres } = await getGenres();

  return (
    <div>
      {genres.map((genre) => {
        return <Genre key={genre.id} genre={genre} />;
      })}
    </div>
  );
};
