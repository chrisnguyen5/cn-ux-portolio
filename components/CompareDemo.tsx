import React from "react";
import { Compare } from "@/components/ui/compare";

export function CompareDemo() {
  return (
    <div className="p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 px-4">
      <Compare
        firstImage="https://assets.aceternity.com/code-solution.png"
        secondImage="https://www.yamaha.com/us/yvn/img/hero.jpg"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover"
        className="h-[250px] w-[350px] md:h-[600px] md:w-[700px]"
        slideMode="hover"
      />
    </div>
  );
}
