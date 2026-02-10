import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { MovieCard } from "@/app/_components";
import Link from "next/link";

export default function Popular() {
  return (
    <div>
      <div className="flex justify-between m-2 p-10">
        <Link href="/">
          <Button variant={"outline"}>
            <ArrowLeft />
            Back
          </Button>
        </Link>

        <h1>Popular</h1>
      </div>
    </div>
  );
}
