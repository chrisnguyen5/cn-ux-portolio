"use client";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { AnimatedModalDemo } from "./AnimatedModalDemo";

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "What",
    },
    {
      text: "are",
    },
    {
      text: "we",
    },
    {
      text: "waiting",
    },
    {
      text: "for?",
    },
    {
      text: "Let's",
      className: "text-gray-500 dark:text-gray-500",
    },
    {
      text: "build",
      className: "text-gray-500 dark:text-gray-500",
    },
    {
      text: "something",
      className: "text-gray-500 dark:text-gray-500",
    },
    {
      text: "great!",
      className: "text-gray-500 dark:text-gray-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] z-50">
      <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
        If you're still here:
      </p>
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <AnimatedModalDemo />
      </div>
    </div>
  );
}
