import Image from "next/image";
const workItems = [
  {
    icon: '/data.png',
    title: 'CIB on the Mobile',
    desc: 'Track your client onboard seamlessly by our amazing tool and digital adoption process.',
  },
  {
    icon: '/au.png',
    title: 'CIB on the Mobile',
    desc: 'Track your client onboard seamlessly by our amazing tool and digital adoption process.',
  },
  {
    icon: '/bar.png',
    title: 'CIB on the Mobile',
    desc: 'Track your client onboard seamlessly by our amazing tool and digital adoption process.',
  },
  {
    icon: '/web.png',
    title: 'CIB on the Mobile',
    desc: 'Track your client onboard seamlessly by our amazing tool and digital adoption process.',
  },
];

export default function WorkExperience() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center relative pb-32 pt-16 ">
      {/* Center radial glow background */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
        <div className="w-[900px] h-[600px] rounded-full bg-purple-600/40 blur-3xl opacity-18" />
      </div>
      {/* Heading */}
      <h2 className="relative z-10 text-white text-[2.5rem] font-semibold tracking-wide mb-16 text-left w-full max-w-5xl px-6">
        Work Experience
      </h2>
      {/* Cards grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl px-6 ">
        {workItems.map((item, i) => (
          <div
            key={i}
            className="group relative rounded-2xl bg-gradient-to-br from-[#241f47] via-[#22143b] to-[#38195c] p-4 flex items-center shadow-[0_8px_32px_0_rgba(92,54,165,0.26)] overflow-hidden transition-all duration-300 border-t-2 border-purple-400"
          >
            {/* Top left corner glow */}
            <div className="absolute -top-8 -left-8 w-28 h-28 bg-purple-400 opacity-30 blur-2xl rounded-full pointer-events-none z-0" />

            {/* Card overall subtile glow */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-400/10 rounded-3xl blur-lg pointer-events-none" />
            
            {/* Decorative particles/dots */}
            <div className="absolute top-12 left-20 w-2 h-2 rounded-full bg-purple-200/80" />
            <div className="absolute top-7 left-12 w-1.5 h-1.5 rounded-full bg-pink-300/70" />
            <div className="absolute top-16 left-28 w-1.5 h-1.5 rounded-full bg-white/40" />
            <div className="absolute top-20 left-8 w-1.5 h-1.5 rounded-full bg-purple-400/70" />
            
            {/* Icon (with shadow glow below) */}
            <div className="relative mr-8 flex-shrink-0 z-10 flex items-center">
              {/* Icon shadow circle below for 3d */}
              <div className="absolute w-16 h-16   blur-2xl opacity-50 left-2 top-8 pointer-events-none" />
              <Image
                src={item.icon}
                alt="Work card icon"
                className="w-15 h-15 relative z-50 drop-shadow-[0_4px_16px_rgba(100,80,220,0.4)]"
                width={15}
                height={15}
              />
            </div>
            {/* Card Content */}
            <div className="flex flex-col z-10 justify-center">
              <h3 className="text-white text-[1rem] font-bold mb-2">{item.title}</h3>
              <p className="text-gray-300 text-xs max-w-[350px] mb-7">{item.desc}</p>
              {/* Outlined Button - matches screenshot */}
              <button className="max-w-40 border-1  text-xs border-white text-white px-6 py-2 rounded-xl font-semibold hover:bg-purple-950/20 transition-colors duration-200">
                LEARN MORE
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
