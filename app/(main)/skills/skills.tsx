"use client"
import Image from "next/image";
import { useMemo } from "react";

// --- Types ---
type IconChipProps = {
  src: string;   // path to the image
  alt: string;   // alt text
  size: number;  // chip size (px)
};

// --- Responsive Layout Hook ---
function useLayout() {
  let w = 1280;
  if (typeof window !== "undefined") {
    w = window.innerWidth;
  }

  const isLG = w >= 1024;
  const isMD = w >= 768 && w < 1024;

  // sizes per breakpoint
  const ICON_SIZE = isLG ? 52 : isMD ? 44 : 36;
  return { ICON_SIZE };
}

// --- Reusable Icon Chip Component ---
function IconChip({ src, alt, size }: IconChipProps) {
  return (
    <div
      className="rounded-full bg-[#231346] shadow-[0_4px_16px_rgba(112,80,255,0.18)] flex items-center justify-center  transition-all duration-300 ease-out
                 hover:scale-110 hover:shadow-[0_0_20px_rgba(160,128,255,0.5)] hover:bg-[#2e1b55]"
      style={{ width: size, height: size }}
      title={alt}
    >
      <Image
        src={src}
        alt={alt}
        width={Math.round(size * 0.58)}
        height={Math.round(size * 0.58)}
        className="object-contain"
      />
    </div>
  );
}

// --- Main Component ---
export default function SkillsSection() {
  const L = useLayout();

  // Icon data
  const topIcons = useMemo(
    () => [
      { name: "HTML", src: "/HTML5.svg" },
      { name: "CSS3", src: "/CSS3.svg" },
      { name: "React", src: "/React.svg" },
      { name: "Node", src: "/Node.js.svg" },
      { name: "JS", src: "/Javascript.svg" },
      { name: "CSS", src: "/Tailwind CSS.svg" },
    ],
    []
  );

  const bottomIcons = useMemo(
    () => [
      { name: "Nuxt JS", src: "/next.svg" },
      { name: "Typescript", src: "/TypeScript.svg" },
      { name: "Python", src: "/Python.svg" },
      { name: "Java", src: "/Java.svg" },
    ],
    []
  );

  return (
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden ">
      {/* bg glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[44%] w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full bg-purple-800 blur-3xl opacity-30 z-0" />

      {/* heading */}
      <div className="pt-14 md:pt-16 text-center z-10 px-4">
        <h1 className="text-white text-[20px] md:text-[24px] font-medium leading-tight">
          I&apos;m currently looking to join a{" "}
          <span className="text-purple-400 font-semibold">cross-functional</span>{" "}
          team
        </h1>
        <p className="text-white/85 text-[13.5px] md:text-sm mt-2">
          that values improving people&apos;s lives through accessible design
        </p>
      </div>

      {/* top icons */}
      <div className="relative mt-10 z-10 w-full max-w-5xl px-6 py-5 ">
        <div className="flex justify-center flex-wrap gap-4 md:gap-6 lg:gap-8">
          {topIcons.map(({ name, src }) => (
            <IconChip key={name} size={L.ICON_SIZE} src={src} alt={name} />
          ))}
        </div>
      </div>

       {/* bottom icons */}
      <div className="relative z-10 w-full max-w-5xl px-6">
        <div className="flex justify-center flex-wrap gap-4 md:gap-6 lg:gap-8">
          {bottomIcons.map(({ name, src }) => (
            <IconChip key={name} size={L.ICON_SIZE} src={src} alt={name} />
          ))}
        </div>
      </div>

      {/* center Σ orb */}
      <div className="relative mt-14 md:mt-12 mb-10 md:mb-15 z-10">
        <div className="absolute -inset-8 rounded-full bg-purple-900 blur-3xl opacity-30" />
        <div className="relative w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-full border border-purple-700 bg-gradient-to-br from-[#301d54] to-[#422578] shadow-[0_8px_48px_rgba(112,80,255,0.32)] flex items-center justify-center">
          <span className="text-purple-100 drop-shadow-[0_0_10px_rgba(255,255,255,0.7)] text-6xl md:text-8xl font-bold select-none">
            Σ
          </span>
        </div>
      </div>

      <svg
        viewBox="0 0 1000 250"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] md:w-[1000px] h-[220px] md:h-[250px] pointer-events-none"
        aria-hidden
      >
        <ellipse
          cx="500"
          cy="200"
          rx="420"
          ry="72"
          fill="none"
          stroke="#a080ff"
          strokeOpacity="0.11"
          strokeWidth="2"
        />
        <ellipse
          cx="500"
          cy="200"
          rx="335"
          ry="52"
          fill="none"
          stroke="#ac6fff"
          strokeOpacity="0.09"
          strokeWidth="2"
        />
        <ellipse
          cx="500"
          cy="200"
          rx="240"
          ry="32"
          fill="none"
          stroke="#ae89e6"
          strokeOpacity="0.085"
          strokeWidth="2"
        />
      </svg>
      {/* bottom rings */}
<svg
  viewBox="0 0 1000 260"
  className="absolute bottom-0 left-1/2 -translate-x-1/2 
             w-[95%] max-w-[1000px] h-[200px] md:h-[240px] 
             pointer-events-none"
  aria-hidden
>
  <defs>
    {/* soft gradient for depth */}
    <radialGradient id="ringGradient" cx="50%" cy="50%" r="65%">
      <stop offset="0%" stopColor="rgba(168,128,255,0.6)" />
      <stop offset="100%" stopColor="rgba(168,128,255,0)" />
    </radialGradient>
  </defs>

  {/* largest ring */}
  <ellipse
    cx="500"
    cy="210"
    rx="420"
    ry="75"
    fill="none"
    stroke="url(#ringGradient)"
    strokeWidth="2"
    opacity="0.25"
  />

  {/* middle ring */}
  <ellipse
    cx="500"
    cy="210"
    rx="335"
    ry="54"
    fill="none"
    stroke="url(#ringGradient)"
    strokeWidth="2"
    opacity="0.2"
  />

  {/* smallest ring */}
  <ellipse
    cx="500"
    cy="210"
    rx="240"
    ry="36"
    fill="none"
    stroke="url(#ringGradient)"
    strokeWidth="2"
    opacity="0.15"
  />
</svg>

    </section>
  );
}
