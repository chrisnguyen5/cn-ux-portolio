import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = ["custom", "dynamic", "beautiful", "modern"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl md:text-7xl mx-auto font-semibold text-neutral-600 dark:text-white">
      👋 I'm Chris Nguyen, a UX developer. 
      <br />
        I build
        <FlipWords words={words} />experiences.
      </div>
     
    </div>
  );
}
