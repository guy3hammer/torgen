"use client";

import { HyperText } from "@/components/magicui/hyper-text";
import { BorderBeam } from "@/components/magicui/border-beam";
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
            src="/devops-dark.png"
            alt="Dev Ops Image"
            className="hidden relative w-full h-full rounded-[inherit] border object-contain dark:block"
          />
          <img
            src="/devops-light.png"
            alt="Dev Ops Image"
            className="block relative w-full h-full  rounded-[inherit] border object-contain dark:hidden"
          />
        </div>
	</div>       
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
  <h2><HyperText>Leapfrog Your Competitors</HyperText></h2>
        <br></br>
        <br></br>	    
    </section>
  );
}
