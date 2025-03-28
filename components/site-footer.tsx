"use client";


import Link from "next/link";
import { AuroraText } from "@/components/magicui/aurora-text";
import { RetroGrid } from "@/components/magicui/retro-grid";



export function SiteFooter() {
  return (
    <footer>

      <div className="flex items-center justify-center">
      <h1 className="bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]"
      ><span><AuroraText><strong>Torgen AI</strong></AuroraText></span>
      </h1>
            </div>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<div className="flex items-center justify-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            Copyright © {new Date().getFullYear()}{" "}
            <Link href="/" className="cursor-pointer">
              Torgen AI
            </Link>
            . All Rights Reserved.
          </span>
<RetroGrid />

        </div>
      {/*   <SiteBanner /> */}
    </footer>
  );
}


