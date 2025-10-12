import Image from "next/image";
import { CompareDemo } from "@/components/CompareDemo";
import { CoverDemo } from "@/components/CoverDemo";
import { TextRevealCardPreview } from "@/components/TextRevealCardPreview";
import { AuroraBackgroundDemo } from "@/components/AuroraBackgroundDemo";
import { LinkPreviewDemo } from "@/components/LinkPreviewDemo";
import { ThreeDCardDemo } from "@/components/ThreeDCardDemo";
import { ThreeDCardDemo2 } from "@/components/ThreeDCardDemo2";
import { ThreeDCardDemo3 } from "@/components/ThreeDCardDemo3";
import { ThreeDCardDemo4 } from "@/components/ThreeDCardDemo4";
import { StickyScrollRevealDemo } from "@/components/StickyScrollRevealDemo";
import { WavyBackgroundDemo } from "@/components/WavyBackgroundDemo";
import { TextGenerateEffectDemo } from "@/components/TextGenerateEffectDemo";
import { TypewriterEffectSmoothDemo } from "@/components/TypewriterEffectSmoothDemo";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import { LayoutGridDemo } from "@/components/LayoutGridDemo";
import { GlowingEffectDemo } from "@/components/GlowingEffectDemo";
import { BackgroundBoxesDemo } from "@/components/BackgroundBoxesDemo";
import { WorldMapDemo } from "@/components/WorldMapDemo";
import { BackgroundRippleEffectDemo } from "@/components/BackgroundRippleEffectsDemo";
import { HeroScrollDemo } from "@/components/HeroScrollDemo";
import { FloatingDockDemo } from "@/components/FloatingDockDemo";
import { FollowingPointerDemo } from "@/components/FollowingPointerDemo";


export default function Home() {
  return (
    <div className="grid  items-center justify-items-center min-h-screen pb-20">
      <main className="flex flex-col items-center sm:items-start">
        <AuroraBackgroundDemo />
      </main>
      <HeroScrollDemo/>
      <CoverDemo />
      <TypewriterEffectSmoothDemo />
      <div className="flex flex-col md:flex-row gap-2">
        <ThreeDCardDemo4 />
        <ThreeDCardDemo />
        <ThreeDCardDemo2 />
      </div>
       <div className="flex flex-col md:flex-row gap-2">
         <ThreeDCardDemo3 />
      </div>
      <div className="flex flex-col m-4">
       <TextGenerateEffectDemo />
       </div>
      <GlowingEffectDemo />
      <LinkPreviewDemo />
      <FloatingDockDemo />
    </div>
  );
}
