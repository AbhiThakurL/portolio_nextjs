import Link from "next/link";
/* eslint-disable @next/next/no-img-element */
export default function Footer() {
  return (
    <section className="relative bg-[#12002b] shadow-md text-white">
      <div className="mx-auto max-w-6xl px-6 py-10 md:py-10">
        {/* Heading */}
        <h2 className="text-[22px] md:text-[26px] font-semibold mb-6">Contact</h2>

        {/* Lead copy */}
        <p className="max-w-3xl text-[13.5px] md:text-[15px] text-white/85 leading-relaxed mb-5">
          I&apos;m currently looking to join a cross-functional team that values improving
          people&apos;s lives through accessible design, or have a project in mind? Let&apos;s connect.
        </p>

        {/* Email */}
        <a
          href="mailto:ibrahimmemon930@gmail.com"
          className="inline-block text-[13.5px] md:text-[14px] text-white/90 hover:text-white transition-colors mb-6"
        >
          xmrset@gmail.com
        </a>

        {/* Socials row */}
        <div className="mt-3 flex items-center gap-5">
          {/* Replace src/href with your own icons/links */}
          <Link href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"
            className="opacity-90 hover:opacity-100 transition-opacity">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" className="h-5 w-5 invert" />
          </Link>

          <Link href="https://dribbble.com" target="_blank" rel="noreferrer" aria-label="Dribbble"
            className="opacity-90 hover:opacity-100 transition-opacity">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" alt="Dribbble" className="h-5 w-5 invert" />
          </Link>

          <Link href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"
            className="opacity-90 hover:opacity-100 transition-opacity">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg
" alt="GitHub" className="h-5 w-5 invert" />
          </Link>
        </div>
      </div>
    </section>
  );
}
