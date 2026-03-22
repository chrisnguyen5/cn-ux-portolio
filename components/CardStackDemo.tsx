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
    name: "Designing with AI tools",
    designation: "Phase 1",
    content: (
      <p>
        Currently learning how to <Highlight>Vibe design</Highlight> with Google Stitch, Paper, & Figma Make 🙏
      </p>
    ),
  },
  {
    id: 1,
    name: "Coding with AI IDEs",
    designation: "Phase 2",
    content: (
      <p>
       Now{" "}
        <Highlight>vibe coding</Highlight> is a thing <Highlight>I guess</Highlight>.
      </p>
    ),
  },
  {
    id: 2,
    name: "Adapting to the AI era",
    designation: "Phase 3",
    content: (
      <p>
        Become an
        <Highlight>AI robot</Highlight> in the near future.
      </p>
    ),
  },
];
