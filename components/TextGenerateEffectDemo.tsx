"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `My approach and tools of choice.
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
