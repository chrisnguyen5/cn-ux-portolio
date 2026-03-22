"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Take",
      className: "text-white text-2xl md:text-6xl font-bold text-center",
    },
    {
      text: "a",
      className: "text-white text-2xl md:text-6xl font-bold text-center",
    },
    {
      text: "Peak",
      className: "text-white text-2xl md:text-6xl font-bold text-center",
    },
    {
      text: "!",
      className: "text-white text-2xl md:text-6xl font-bold text-center",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
