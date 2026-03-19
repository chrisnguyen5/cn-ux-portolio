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
import { MacbookScrollDemo } from "@/components/MacbookScrollDemo";
import { EncryptedTextDemo } from "@/components/EncryptedTextDemo";
import { ThreeDMarqueeDemo } from "@/components/ThreeDMarqueeDemo";
import { TerminalDemo } from "@/components/TerminalDemo";
import { DottedGlowBackgroundDemoSecond } from "@/components/DottedGlowBackgroundDemoSecond";
import { ImagesBadgeDemoTwo } from "@/components/ImagesBadgeDemoTwo";
import { Globe3DDemoThird } from "@/components/Globe3DDemoThird";
import { Globe3DDemoSecond } from "@/components/Globe3DDemoSecond";
import { BentoGridThirdDemo } from "@/components/BentoGridThirdDemo"; 
import { AppleCardsCarouselDemo } from "@/components/AppleCardsCarouselDemo";
import { HeroParallaxDemo } from "@/components/HeroParallaxDemo";



export default function Home() {
  return (
    <div className="grid  items-center justify-items-center min-h-screen pb-20">
      <main className="flex flex-col items-center sm:items-start">
        <AuroraBackgroundDemo />
      </main>
       <MacbookScrollDemo />
        <GlowingEffectDemo />
      <DottedGlowBackgroundDemoSecond />
      <HeroParallaxDemo />
      <FloatingDockDemo />
    </div>
  );
}
