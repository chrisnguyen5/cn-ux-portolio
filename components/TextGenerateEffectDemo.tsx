"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Please see some of my recent projects below.
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect className="mx-10 mt-20 flex items-center justify-center" words={words} />;
}
