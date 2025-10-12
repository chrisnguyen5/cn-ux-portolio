"use client";

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconFileCv,
  IconMailHeart,
  IconAppWindow
} from "@tabler/icons-react";
import Image from "next/image";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Projects",
      icon: (
        <IconAppWindow className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://chrisnguyen.vercel.app/projects",
    },
    {
      title: "Contact",
      icon: (
        <IconMailHeart className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://chrisnguyen.vercel.app/contact",
    },
    {
      title: "Resume",
      icon: (
        <IconFileCv className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://chrisnguyen.vercel.app/resume",
    },

    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/chrisnguyen2",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/chrisnguyen5",
    },
  ];
  return (
    <div className="flex items-center justify-center h-[8rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
