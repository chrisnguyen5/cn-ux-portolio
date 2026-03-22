"use client";

import { EncryptedText } from "@/components/ui/encrypted-text";
import React from "react";

export function EncryptedTextDemo() {
  return (
    <div className="mx-auto flex justify-center text-2xl md:text-2xl  max-w-7xl">
      <p className="text-center text-neutral-700 dark:text-neutral-300">
        If you're interested in collaborating, let's connect:{" "}<br/><br/>  
        <EncryptedText text="chrisnguyen5@gmail.com" />
      </p>
    </div>
  );
}
