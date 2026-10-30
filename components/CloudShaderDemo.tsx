"use client";

import { CloudShader } from "@/components/ui/cloud-shader";
import { FloatingDockDemo } from "@/components/FloatingDockDemo";
import { CompareDemo } from "@/components/CompareDemo";
import { SidebarDemo } from "@/components/SidebarDemo";
import { PointerHighlightDemo } from "@/components/PointerHighlightDemo";




export function CloudShaderDemo() {
  return (
    <div className="rounded-md relative h-[23rem] w-full overflow-hidden">
      <CloudShader className="absolute inset-0" />

      {/* dashboard image */}
      <div className="relative z-10 mx-auto mt-12 w-full max-w-6xl px-4 pb-4 md:mt-16 md:px-8">
       <PointerHighlightDemo />
        <FloatingDockDemo />
      </div>
    </div>
  );
}
