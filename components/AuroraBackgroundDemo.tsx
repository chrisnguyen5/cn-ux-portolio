"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { FlipWordsDemo } from "@/components/FlipWordsDemo";
import Image from "next/image";
import Image1 from '../public/me.png';
import { HeroScrollDemo } from "@/components/HeroScrollDemo";
import { MacbookScrollDemo } from "@/components/MacbookScrollDemo";
import { EncryptedTextDemo } from "@/components/EncryptedTextDemo";
import { WorldMapDemo } from "@/components/WorldMapDemo";
import { TextGenerateEffectDemo } from "./TextGenerateEffectDemo";
import { ThreeDMarqueeDemo } from "@/components/ThreeDMarqueeDemo";
import { ImagesBadgeDemoTwo } from "./ImagesBadgeDemoTwo";
import { NoiseBackgroundDemo } from "./NoiseBackgroundDemo";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-8"
      >
       <FlipWordsDemo />
      </motion.div>
       <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
          duration: 0.9,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-1 items-center justify-center px-1"
      >
        <NoiseBackgroundDemo />
      </motion.div>
    </AuroraBackground>
  );
}
