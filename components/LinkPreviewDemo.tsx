"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";

export function LinkPreviewDemo() {
  return (
    <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeIn",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-8"
          >
           <div className="flex justify-center items-center h-[24rem] flex-col px-4">
     
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
        Please visit my {" "}
        <LinkPreview
          url="https://chrisnguyen.vercel.app/"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-400 to-indigo-700 font-serif"
        >
          Resume
        </LinkPreview>{" "}
        if you would like to learn more about my experiences and expertise.
      </p>
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
        My{" "}
        <LinkPreview url="https://chrisnguyen.vercel.app/contact" className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-400 to-indigo-700 font-serif">
          Email
        </LinkPreview>,{" "} 
        <LinkPreview url="https://github.com/chrisnguyen5" className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-400 to-indigo-700 font-serif">
          GitHub
        </LinkPreview>
        ,{" "}and{" "}
        <LinkPreview url="https://www.linkedin.com/in/chrisnguyen2" className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-400 to-indigo-700 font-serif">
          LinkedIn
        </LinkPreview>{" "}
        are other great ways to connect as well.
      </p>
    </div>
          </motion.div>
    
  );
}
