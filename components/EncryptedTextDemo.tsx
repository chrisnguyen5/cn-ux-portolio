"use client";

import { EncryptedText } from "@/components/ui/encrypted-text";
import React from "react";

export function EncryptedTextDemo() {
  return (
    <div className="">
     <h2 className="mb-4 max-w-2xl text-2xl font-extrabold tracking-tight text-balance text-neutral-900 md:text-5xl lg:text-6xl dark:text-white">
        <EncryptedText text="Got a problem worth solving?" />
      </h2>
    </div>
  );
}
