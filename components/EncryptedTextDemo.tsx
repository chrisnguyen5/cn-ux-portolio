"use client";

import { EncryptedText } from "@/components/ui/encrypted-text";
import React from "react";

export function EncryptedTextDemo() {
  return (
    <div className="mx-auto flex max-w-lg justify-left text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl">
      <p className="text-left">
        Featured work:{" "}
        <EncryptedText text="Please see below" />
      </p>
    </div>
  );
}
