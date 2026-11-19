import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { MacbookScrollDemo } from "@/components/MacbookScrollDemo";
import { CompareDemo } from "@/components/CompareDemo";
import { ThreeDMarqueeDemo } from "@/components/ThreeDMarqueeDemo";
import { GlowingEffectDemo } from "@/components/GlowingEffectDemo";

export function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision>
      <GlowingEffectDemo   />
    </BackgroundBeamsWithCollision>
  );
}
