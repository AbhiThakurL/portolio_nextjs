/* eslint-disable @next/next/no-img-element */
import Image from "next/image";


function GlassDesc({ children, className = "" }) {

  
  return (
    <div className={`relative ${className}`}>
      <div
        className="
          relative rounded-[20px]
          border border-white/15
          bg-white/8
          backdrop-blur-xl
          shadow-[0_20px_60px_rgba(90,50,180,0.35)]
          text-white/90
          transition-all duration-300 hover:shadow-[0_30px_80px_rgba(130,80,255,0.45)]
        "
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(30,18,54,0.6) 0%, rgba(60,40,100,0.55) 50%, rgba(120,90,200,0.5) 100%)",
        }}
      >
        {/* subtle inner glow */}
        <div className="pointer-events-none absolute inset-0 rounded-[20px] ring-1 ring-white/10" />

        <p className="px-6 py-5 md:px-7 md:py-6 leading-relaxed text-[15px] md:text-[16px]">
          {children}
        </p>
      </div>

      {/* floating shadow under bubble */}
      <div className="absolute right-8 -bottom-2 h-4 w-28 rounded-md bg-black/40 blur-md" />
    </div>
  );
}

function ProjectRow({ side = "left", title, tag, image, desc }) {
  const left = side === "left";

  return (
    <div
      className={`relative grid items-center gap-10 md:gap-16
      ${left ? "md:grid-cols-[1.05fr_0.95fr]" : "md:grid-cols-[0.95fr_1.05fr]"} grid-cols-1`}
    >
      {/* local spotlight glow */}
      <div
        className={`pointer-events-none absolute -z-10 top-1/2 -translate-y-1/2
        ${left ? "left-10" : "right-10"}
        w-[700px] h-[700px] rounded-full`}
      />

      {/* text side */}
      <div className={`${left ? "order-1" : "order-2"} flex flex-col`}>
        <span className="text-[13px] tracking-wider text-purple-300/90 uppercase">
          {tag}
        </span>
        <h3 className="mt-1 text-[28px] md:text-[30px] font-semibold text-white">
          {title}
        </h3>

        <div className={`relative mt-4 md:mt-6 max-w-[620px] ${left ? "" : "md:ml-auto"}`}>
          <GlassDesc className={`${left ? "md:translate-x-10" : "md:-translate-x-10"}`}>
            {desc}
          </GlassDesc>
        </div>

        {/* tiny star-like deco */}
        <div className={`mt-6 flex gap-3 ${left ? "" : "md:self-end"} text-purple-300/70`}>
          <span className="text-lg">✦</span>
          <span className="text-lg">✦</span>
        </div>
      </div>

      {/* screenshot card */}
      <div
        className={`${left ? "order-2" : "order-1"} relative transition-transform duration-500 hover:-translate-y-2`}
      >
        <div className="relative rounded-[16px] overflow-hidden shadow-[0_25px_80px_rgba(44,18,84,0.55)]">
          {/* chrome strip */}
          <div className="h-[14px] w-full bg-gradient-to-r from-[#7a4cff] via-[#6f33ff] to-[#b18bff]" />

          {/* screenshot container */}
          <div className="relative bg-[#1B1234] p-4 md:p-5">
            <div className="rounded-[12px] overflow-hidden bg-white shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]">
              <Image
                src={image}
                alt={`${title} screenshot`}
                width={800}
                height={500}
                className="block w-full h-auto"
              />
            </div>
          </div>

          {/* floating notch shadow */}
          <div
            className={`absolute ${left ? "right-10" : "left-10"} -bottom-2 h-4 w-28 rounded-md bg-black/35 blur-md`}
          />
        </div>

        {/* base floor shadow */}
        <div
          className={`absolute -z-10 ${left ? "right-6" : "left-6"} bottom-5
          h-7 w-40 rounded-full bg-black/30 blur-2xl`}
        />
      </div>
    </div>
  );
}

export default function Projects() {
  const items = [
    {
      side: "left",
      title: "Example Project",
      tag: "Featured Project",
      image:
        "/project1.png",
      desc:
        "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio insights. Save new playlists of recommended tracks based on your listening history.",
    },
    {
      side: "right",
      title: "Example Project",
      tag: "Featured Project",
      image:
        "/project2.png",
      desc:
        "A modern dashboard for analyzing your Spotify profile with deep metrics and curated recommendations. Track trends, discover new music, and share playlists with friends seamlessly.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* global vignette */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 -translate-x-1/2 top-10 w-[1600px] h-[1600px] rounded-full bg-purple-700/10 blur-[180px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 space-y-32">
        {items.map((p, i) => (
          <ProjectRow key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
