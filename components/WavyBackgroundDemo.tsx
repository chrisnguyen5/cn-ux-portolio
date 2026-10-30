"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { FloatingDockDemo } from "@/components/FloatingDockDemo";

export function WavyBackgroundDemo() {
  return (
    <WavyBackground className="">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Hero waves are cool
      </p>
      <FloatingDockDemo />
    </WavyBackground>
  );
}
