"use client";

import { CloudShader } from "@/components/ui/cloud-shader";
import { motion } from "motion/react";
import { StickyScrollRevealDemo } from "@/components/StickyScrollRevealDemo";
import { BentoGridThirdDemo } from "@/components/BentoGridThirdDemo";
import { TerminalDemo } from "@/components/TerminalDemo";
import { CoverDemo } from "@/components/CoverDemo";
import { CompareDemo } from "@/components/CompareDemo";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import { FeaturesSectionDemo } from "@/components/FeaturesSectionDemo"; 

export function CloudShaderHeroDemo() {
  return (
    <div className="relative min-h-[50rem] w-full overflow-hidden">
      <CloudShader className="absolute inset-0" />


      {/* hero */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 pt-12 text-center md:pt-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
          {"It's all in the process."
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>
      </div>

      {/* dashboard image */}
      <div className="relative z-10 mx-auto mt-12 w-full max-w-6xl px-4 pb-4 md:mt-16 md:px-8">
        {/* <div className="rounded-2xl border border-white/30 bg-white/20 p-2 shadow-2xl backdrop-blur-md md:rounded-[2rem] md:p-3">
          <img
            src="https://i.postimg.cc/RvqFp0km/Screenshot-2026-03-19-at-3-22-56-PM.png"
            alt="AAA design system"
            className="w-full rounded-xl border border-black/5 shadow-lg md:rounded-3xl"
          />
        </div> */}
        <FeaturesSectionDemo />
         {/* <TerminalDemo /> */}
      </div>
    </div>
  );
}
