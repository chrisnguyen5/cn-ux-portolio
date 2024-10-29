import Image from "next/image";
import { CompareDemo } from "@/components/CompareDemo";
import { CoverDemo } from "@/components/CoverDemo";
import { TextRevealCardPreview } from "@/components/TextRevealCardPreview";
import { AuroraBackgroundDemo } from "@/components/AuroraBackgroundDemo";
import { LinkPreviewDemo } from "@/components/LinkPreviewDemo";
import { ThreeDCardDemo } from "@/components/ThreeDCardDemo";
import { StickyScrollRevealDemo } from "@/components/StickyScrollRevealDemo";


export default function Home() {
  return (
    <div className="grid  items-center justify-items-center min-h-screen pb-20">
      <main className="flex flex-col items-center sm:items-start">
      <AuroraBackgroundDemo />
       </main>
     <CoverDemo /> 
     <ThreeDCardDemo />
   <LinkPreviewDemo />
      
      
   
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://chrisnguyen.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Resume
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.github.com/chrisnguyen5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/github.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Github
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/chrisnguyen2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          LinkedIn
        </a>
      </footer> */}
    </div>
  );
}
