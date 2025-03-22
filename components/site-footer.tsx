import Link from "next/link";
import Syncopate from 'next/font/google';
import "@fontsource/syncopate";
import { AuroraText } from "@/components/magicui/aurora-text";


export function SiteFooter() {
  return (
    <footer>
      <div className="flex items-center justify-center">
      <h1 className="bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <span><strong><AuroraText>Torgen AI</AuroraText></strong></span>
      </h1>
            </div>
<br></br>
<div className="text-xl flex items-center justify-center">Embrace the OSAI Revolution</div>
<br></br>
<div className="flex items-center justify-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            Copyright © {new Date().getFullYear()}{" "}
            <Link href="/" className="cursor-pointer">
              Torgen AI
            </Link>
            . All Rights Reserved.
          </span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      {/*   <SiteBanner /> */}
    </footer>
  );
}
