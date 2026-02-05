import { Button } from "@/components/ui/button";
type DescriptionTextType = {
  name: string;
  rating: number;
  desc: string;
};
export const DescriptionTextDesktop = ({
  name,
  rating,
  desc,
}: DescriptionTextType) => {
  return (
    <div className="hidden sm:block md:top-1/2 md:left-1/12 md:w-100 md:absolute z-10  md:text-white">
      <div className="flex md:flex-col justify-between p-2">
        <div>
          <p className="text-sm">Now Playing:</p>
          <p className="text-2xl">{name}</p>
        </div>
        <div className="flex gap-2">
          <img
            className="w-[23.3px]
h-[22.19px] flex"
            src="./Star.svg"
            alt="Star"
          />
          <div className="flex">
            <p className="text-base">{rating}</p>
            <p className="text-base text-[#71717A]">/10</p>
          </div>
        </div>
      </div>
      <div>
        <p className="p-2 h-fit">{desc}</p>
      </div>
      <div className="ml-2 text-black">
        <Button className="text-black" variant={"outline"}>
          <img src="./playBlack.svg" alt="play" /> Watch Trailer
        </Button>
      </div>
    </div>
  );
};
