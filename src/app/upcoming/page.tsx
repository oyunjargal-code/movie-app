"use client";

import { MovieCard } from "@/app/_components";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Upcoming() {
  return (
    <div>
      <div className="flex justify-between m-2">
        <Link href="/">
          <Button variant={"outline"}>
            <ArrowLeft /> Back
          </Button>
        </Link>
        <h1 className="m-2 bold">Upcoming</h1>
      </div>
    </div>
  );
}
