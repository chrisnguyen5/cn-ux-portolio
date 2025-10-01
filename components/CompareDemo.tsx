import React from "react";
import Image from "next/image";
import { Compare } from "@/components/ui/compare";

export function CompareDemo() {
  return (
    <div className="p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 px-4">
      <Compare
        firstImage="https://assets.aceternity.com/code-solution.png"
        secondImage="https://app.box.com/representation/file_version_2210162862185/thumb_1024.jpg?shared_name=e0nw0exzh2wejfn46ifkpcuyyphu6o58"
        // src="/public/"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover"
        className="h-[250px] w-[350px] md:h-[600px] md:w-[700px]"
        slideMode="hover"
      />
    </div>
  );
}
