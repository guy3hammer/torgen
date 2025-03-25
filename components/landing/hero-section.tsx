"use client";

import { AuroraText } from "@/components/magicui/aurora-text";
import { BorderBeam } from "@/components/magicui/border-beam";
import TextShimmer from "@/components/magicui/text-shimmer";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section
      id="hero"
      className="relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8"
    >
      <p className="text-grey">Tired of subsidizing proprietary AI?</p>
      <br></br>
      <h1 className="bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <span><strong><AuroraText>Open Source AI</AuroraText></strong></span>
        <br className="hidden md:block" /> is Changing the Game
      </h1>

      <p className="mb-12 text-lg tracking-tight text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        <br></br>
        <br></br>
        <br></br>

        Secure your data and escape lock-in
	       <br className="hidden md:block" /> by adopting an <i>OSAI-first</i> strategy</p>
        <br></br>
        <br></br>
          <div className="mt-6">
            <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16 [&_path]:fill-white">
		
              	<li>
	          <img
           		src={'/deepseek-logo.svg'} 
           		className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
        	  />
		</li>
		    
		<li>
                <img
           		src={'/mistral-logo.svg'} 
           		className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                />
              	</li>
		    
		<li>
                <img
                  src={'/hf-logo.svg'}
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                />
              	</li>
		    
              <li>
                <img
                  src={'/qwen-logo.svg'}
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                />
              </li>

              <li>
                <img
                  src={'/baidu-logo.svg'}
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                />
              </li>
		    
              <li>
                <img
                  src={'/n8n-logo.svg'}
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                />
              </li>

              <li>
                <img
                  src={'/ollama-logo.svg'}
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                />
              </li>
		    
              <li>
                <img
                  src={'/llama-logo.svg'}
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                />
              </li>

              <li>
                <img
                  src={'/pytorch-logo.svg'}
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                />
              </li>
		    
              <li>
                <img
                  src={'/tensorflow-logo.svg'}
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                />
              </li>

              <li>
                <img
                  src={'/gemma-logo.svg'}
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                />
              </li>

              <li>
                <img
                  src={'/protectai-logo.svg'}
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                />
              </li>	

              <li>
                <img
                  src={'/adrotoolbox-logo.svg'}
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                />
              </li>

              <li>
                <img
                  src={'/aigoat-logo.svg'}
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                />
              </li>		    
            </ul>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
      <p className="mb-12 text-sm tracking-tight text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]"
      ><br></br>
      Equip your team with <i>private</i> OSAI models
        <br className="hidden md:block" />  and automation tools for pennies on the dollar
      </p>
		    
      <div
        ref={ref}
        className="relative mt-[8rem] animate-fade-up opacity-0 [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)]"
      >
      
        <div
          className={`rounded-xl border border-white/10 bg-white bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:[filter:blur(180px)] before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_40%)] ${
            inView ? "before:animate-image-glow" : ""
          }`}
        >
          <BorderBeam
            size={200}
            duration={12}
            delay={11}
            colorFrom="var(--color-one)"
            colorTo="var(--color-two)"
          />

          <img
            src="/appops-dark.png"
            alt="App Ops Image"
            className="hidden relative w-full h-full rounded-[inherit] border object-contain dark:block"
          />
          <img
            src="/appops-light.png"
            alt="App Ops Image"
            className="block relative w-full h-full  rounded-[inherit] border object-contain dark:hidden"
          />
        </div>
      </div>        

    </section>
  );
}
