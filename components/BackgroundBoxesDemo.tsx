"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/lib/utils";
import { FloatingDockDemo } from "./FloatingDockDemo";
import { WorldMapDemo } from "./WorldMapDemo"; 
import { Globe3DDemoSecond } from "./Globe3DDemoSecond";
import { Globe } from "lucide-react";
import { TerminalDemo } from "./TerminalDemo";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-[23rem] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      {/* <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        Tailwind is Awesome
      </h1> */}
       <h1 className="z-20 md:text-4xl text-xl text-white relative font-bold font-serif italic text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
         Let's connect
        </h1>
      {/* <p className="text-center mt-2 text-neutral-300 relative z-20">
        Click below to learn more 
      </p> */}
    
      <div className="relative z-20 mt-4">
      {/* <FloatingDockDemo /> */}
      <TerminalDemo />
      </div>
    </div>
  );
}
