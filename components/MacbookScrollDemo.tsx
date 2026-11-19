import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { CoverDemo } from "@/components/CoverDemo";

export function MacbookScrollDemo() {
  return (
    <div className="w-full overflow-hidden bg-white dark:bg-[#0B0B0F]">
      <MacbookScroll
        title={
          <span>
          It's all in the details.
          </span>
        }
        src={`/linear.webp`}
        showGradient={false}
      />
    </div>
  );
}
