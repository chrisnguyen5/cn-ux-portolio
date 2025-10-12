import React from "react";
import { FlipWords } from "./ui/flip-words";
import { PointerHighlightDemo } from "./PointerHighlightDemo";

export function FlipWordsDemo() {
  const words = ["custom", "purposeful", "beautiful", "modern"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl md:text-7xl mx-auto font-medium text-neutral-600 dark:text-white">
      👋 I'm <span className="text-black">Chris Nguyen</span>
      , a UX developer. 
      <br />
        I build
        <FlipWords words={words} />experiences.
      </div>
     
    </div>
  );
}
