import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { MovieCard } from "@/app/_components";
import Link from "next/link";

export default function TopRated() {
  return (
    <div>
      <div className="flex justify-between m-2">
        <Link href="/">
          <Button variant={"outline"}>
            <ArrowLeft />
            Back
          </Button>
        </Link>

        <h1>Top Rated</h1>
      </div>
    </div>
  );
}
