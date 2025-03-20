"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export default function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-[300px] w-full items-center justify-center overflow-hidden p-10"
      ref={containerRef}
    >
      <div className="flex size-full max-h-[200px] max-w-lg flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <Icons.database />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.videoYo />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <Icons.files />
          </Circle>
          <Circle ref={div4Ref} className="size-16">
            <Icons.intelnet />
          </Circle>
          <Circle ref={div6Ref}>
            <Icons.translate />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <Icons.mobdev />
          </Circle>
          <Circle ref={div7Ref}>
            <Icons.cloudfluff />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}

const Icons = {
  files: () => (
    <svg
      width="48"
      height="48"
      viewBox="0 -960 960 960"
      fill="#1f1f1f"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
d="M780-160H260q-24 0-42-18t-18-42v-640q0-24 18-42t42-18h348l232 232v468q0 24-18 42t-42 18ZM578-662v-198H260v640h520v-442H578ZM140-40q-24 0-42-18t-18-42v-619h60v619h498v60H140Zm120-820v198-198 640-640Z"
      />
    </svg>
  ),
  intelnet: () => (
    <svg
      width="48"
      height="48"
      viewBox="0 -960 960 960"
      fill="#1f1f1f"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M297-160q-8 0-15-4t-11-11l-84-150h71l42 80h90v-30h-72l-42-80H171l-63-110q-2-4-3-7.5t-1-7.5q0-2 4-15l63-110h105l42-80h72v-30h-90l-42 80h-71l84-150q4-7 11-11t15-4h118q13 0 21.5 8.5T445-770v175h-85l-30 30h115v130h-98l-39-80h-98l-30 30h108l40 80h117v215q0 13-8.5 21.5T415-160H297Zm273 0q-29 0-49.5-20.5T500-230q0-21 11-38t29-25v-374q-18-8-29-25t-11-38q0-29 20.5-49.5T570-800q29 0 49.5 20.5T640-730q0 21-11 38t-29 25v114l100-60q-3-31 18-54t52-23q29 0 49.5 20.5T840-620q0 29-20.5 49.5T770-550q-11 0-21-3t-18-8l-108 65 116 93q7-3 15-5t16-2q29 0 49.5 20.5T840-340q0 29-20.5 49.5T770-270q-35 0-55.5-27T702-356l-102-82v146q17 8 28 24.5t11 37.5q0 29-20 49.5T570-160Z" />
    </svg>

  ),
  database: () => (
    <svg
      width="48"
      height="48"
      viewBox="0 -960 960 960"
      fill="#1f1f1f"
      xmlns="http://www.w3.org/2000/svg"
      >
      <path d="M480-120q-151 0-255.5-46.5T120-280v-400q0-66 105.5-113T480-840q149 0 254.5 47T840-680v400q0 67-104.5 113.5T480-120Zm0-488q86 0 176.5-26.5T773-694q-27-32-117.5-59T480-780q-88 0-177 26t-117 60q28 35 116 60.5T480-608Zm-1 214q42 0 84-4.5t80.5-13.5q38.5-9 73.5-22t63-29v-155q-29 16-64 29t-74 22q-39 9-80 14t-83 5q-42 0-84-5t-80.5-14q-38.5-9-73-22T180-618v155q27 16 61 29t72.5 22q38.5 9 80.5 13.5t85 4.5Zm1 214q48 0 99-8.5t93.5-22.5q42.5-14 72-31t35.5-35v-125q-28 16-63 28.5T643.5-352q-38.5 9-80 13.5T479-334q-43 0-85-4.5T313.5-352q-38.5-9-72.5-21.5T180-402v126q5 17 34 34.5t72 31q43 13.5 94 22t100 8.5Z"/>
    </svg>
  ),
  mobdev: () => (
    <svg
      width="48"
      height="48"
      viewBox="0 -960 960 960"
      fill="#1f1f1f"
      xmlns="http://www.w3.org/2000/svg"
    >
     <path d="M344-296 160-480l184-184 42 44-140 140 140 140-42 44Zm-144 30h60v76h440v-76h60v166q0 24-18 42t-42 18H260q-24 0-42-18t-18-42v-166Zm60-440h-60v-154q0-24 18-42t42-18h440q24 0 42 18t18 42v154h-60v-64H260v64Zm0 576v30h440v-30H260Zm0-700h440v-30H260v30Zm356 534-42-44 140-140-140-140 42-44 184 184-184 184ZM260-830v-30 30Zm0 700v30-30Z"/>
    </svg>  
  ),
  videoYo: () => (
    <svg
      width="48"
      height="48"
      viewBox="0 -960 960 960"
      fill="#1f1f1f"
      xmlns="http://www.w3.org/2000/svg"
    >
    <path d="m424-373 260-167-260-167v334ZM260-200q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h560q24 0 42 18t18 42v560q0 24-18 42t-42 18H260Zm0-60h560v-560H260v560ZM140-80q-24 0-42-18t-18-42v-620h60v620h620v60H140Zm120-740v560-560Z"/>
    </svg>
  ),
  translate: () => (
    <svg
      width="48"
      height="48"
      viewBox="0 -960 960 960"
      fill="#1f1f1f"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M824.94-305Q802-305 786-321.04q-16-16.04-16-38.96v-100q0-22.92 16.06-38.96t39-16.04Q848-515 864-498.96q16 16.04 16 38.96v100q0 22.92-16.06 38.96t-39 16.04ZM810-160v-66q-51-8-85-43.5T690-355h30q2 42 32.5 71t72.5 29q42 0 72.5-29t32.5-71h30q-1 50-35 85.5t-85 43.96V-160h-30ZM399-500q-67 0-108.5-41.5T249-650q0-67 41.5-108.5T399-800q7 0 19 1.5t22 3.5q-26 31-38.5 66.5T389-650q0 43 12.5 78.5T440-505q-11.05 2.78-22.52 3.89Q406-500 399-500ZM40-160v-94q0-37 17.5-63t51.5-45q39-22 98-37.5T340-423q-65 31-90.5 75T224-254v94H40Zm559-340q-63 0-106.5-43.5T449-650q0-63 43.5-106.5T599-800q63 0 106.5 43.5T749-650q0 63-43.5 106.5T599-500Zm0-60q38 0 64-26.44T689-650q0-38-26-64t-63.5-26q-37.5 0-64 26T509-650.5q0 37.5 26.44 64T599-560ZM284-160v-94q0-35 18.5-63.5T353-360q47-21 108.5-40.5T599-420q5 0 13.5.5t14.5.5q-6 15-10 29.5t-6 29.5h-12q-72 0-124 16.5T377-306q-16 8-24.5 21.5T344-254v34h304q11 16 26 31.5t35 28.5H284Zm315-490Zm0 430Z"/>
    </svg>
  ),
  cloudfluff: () => (
    <svg
      width="48"
      height="48"
      viewBox="0 -960 960 960"
      fill="#1f1f1f">
      xmlns="http://www.w3.org/2000/svg"
    >
<path d="M251-160q-88 0-149.5-61.5T40-371q0-78 50-137t127-71q20-97 94-158.5T482-799q112 0 189 81.5T748-522v24q72-2 122 46.5T920-329q0 69-50 119t-119 50H251Zm0-60h500q45 0 77-32t32-77q0-45-32-77t-77-32h-63v-84q0-91-61-154t-149-63q-88 0-149.5 63T267-522h-19q-62 0-105 43.5T100-371q0 63 44 107t107 44Zm229-260Z"/>   
    </svg>
  ),
};
