"use client";

import { CloudShader } from "@/components/ui/cloud-shader";
import { motion } from "motion/react";
import { TerminalDemo } from "@/components/TerminalDemo";

export function CloudMacDemo() {
  return (
    <div className="relative h-[23rem] w-full overflow-hidden">
      <CloudShader className="absolute inset-0" />
      {/* dashboard image */}
      <div className="relative z-10 mx-auto  max-w-6xl px-4 md:px-8">
       <TerminalDemo />
      </div>
    </div>
  );
}
