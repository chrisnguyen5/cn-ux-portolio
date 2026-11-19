"use client";
import { CardStack } from "./ui/card-stack";
import { cn } from "@/lib/utils";
export function CardStackDemo() {
  return (
    <div className="mt-4 flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Ways to reach me",
    designation: "Option 1",
    content: (
      <p>
         <Highlight>✉️Email:</Highlight> chrisnguyen5@gmail.com
      </p>
    ),
  },
  {
    id: 1,
    name: "Ways to reach me",
    designation: "Option 2",
    content: (
      <p>
        <Highlight>📱Phone:</Highlight> 714.400.1432
      </p>
    ),
  },
  // {
  //   id: 2,
  //   name: "Ways to reach me",
  //   designation: "Option 3",
  //   content: (
  //     <p>
  //       <Highlight>LinkedIn:</Highlight> url link📱
  //     </p>
  //   ),
  // },
];
