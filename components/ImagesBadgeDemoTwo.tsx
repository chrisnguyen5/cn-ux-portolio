"use client";
import { ImagesBadge } from "@/components/ui/images-badge";

export function ImagesBadgeDemoTwo() {
  return (
    <div className="flex w-full items-center justify-center mt-5">
      <ImagesBadge
        text=""
        images={[
          "https://chrisnguyen.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbb1.f8109206.jpg&w=2048&q=75",
          "https://chrisnguyen.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fboeing3.fb5ea857.jpg&w=2048&q=75",
          "https://chrisnguyen.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fyamaha1.b64565e5.jpg&w=2048&q=75",
        ]}
        folderSize={{ width: 48, height: 36 }}
        teaserImageSize={{ width: 40, height: 28 }}
        hoverImageSize={{ width: 140, height: 108 }}
        hoverTranslateY={-110}
        hoverSpread={50}
      />
    </div>
  );
}
