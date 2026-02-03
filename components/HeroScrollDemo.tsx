"use client";
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-medium text-neutral-700 dark:text-white">
              <span className="font-mono">Based in SoCal & available to</span><br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-neutral-800 font-serif">
                work anywhere
              </span>
            </h1>
          </>
        }
      >
        <img
          src={`https://images.pexels.com/photos/12422179/pexels-photo-12422179.jpeg`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
