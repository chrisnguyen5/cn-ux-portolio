import React from "react";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { TerminalDemo } from "@/components/TerminalDemo";
import { CoverDemo } from "@/components/CoverDemo";

export function DottedGlowBackgroundDemoSecond() {
  return (
    <div className="relative mx-auto flex w-full max-w-7xl items-center justify-center mt-10">
      <DottedGlowBackground
        className="pointer-events-none mask-radial-to-90% mask-radial-at-center opacity-20 dark:opacity-100"
        opacity={1}
        gap={10}
        radius={1.6}
        colorLightVar="--color-neutral-500"
        glowColorLightVar="--color-neutral-600"
        colorDarkVar="--color-neutral-500"
        glowColorDarkVar="--color-sky-800"
        backgroundOpacity={0}
        speedMin={0.3}
        speedMax={1.6}
        speedScale={1}
      />

      <div className="relative z-10 flex w-full flex-col items-center justify-between space-y-6 px-8 py-16 text-center md:flex-row">
       <CoverDemo />
       <TerminalDemo />
      </div>
    </div>
  );
}
