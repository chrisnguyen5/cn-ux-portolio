import React from "react";
import { FlipWords } from "./ui/flip-words";
import { PointerHighlightDemo } from "./PointerHighlightDemo";
import { EncryptedTextDemo } from "./EncryptedTextDemo";

export function FlipWordsDemo() {
  const words = ["human-centric", "purposeful", "beautiful", "modern"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl md:text-7xl mx-auto font-medium text-neutral-600 dark:text-white">
      I'm Chris, a <span className="font-serif italic">UX designer/developer</span>. 
      <br/>
        I build
        <FlipWords words={words} />experiences with <span className="font-serif italic">AI</span>.
      </div>
    </div>
  );
}
