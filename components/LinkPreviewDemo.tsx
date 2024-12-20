"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";

export function LinkPreviewDemo() {
  return (
    <div className="flex justify-center items-center h-[35rem] flex-col px-4">
     
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
        Please visit my{" "}
        <LinkPreview
          url="https://chrisnguyen.vercel.app/"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          Resume
        </LinkPreview>{" "}
        if you would like to learn more about my experiences and expertise.
      </p>
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
        My{" "}
        <LinkPreview url="https://chrisnguyen.vercel.app/contact" className="font-bold">
          Email
        </LinkPreview>,{" "} 
        <LinkPreview url="https://github.com/chrisnguyen5" className="font-bold">
          GitHub
        </LinkPreview>
        ,{" "}and{" "}
        <LinkPreview url="https://www.linkedin.com/in/chrisnguyen2" className="font-bold">
          LinkedIn
        </LinkPreview>{" "}
        are other great ways to connect as well.
      </p>
    </div>
  );
}
