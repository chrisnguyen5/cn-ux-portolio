import React from "react";
import { Cover } from "@/components/ui/cover";
import { CompareDemo } from "./CompareDemo";

export function CoverDemo() {
  return (
    <div>
      <h1 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
      <span className="font-bold font-serif italic">About Me :</span> <br /> I <Cover>design</Cover> &
      <Cover>code</Cover> web & mobile apps from scratch.
      </h1>
    </div>
  );
}
