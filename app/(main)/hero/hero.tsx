"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react";
import { FaFacebook } from "react-icons/fa";

export function HeroSection() {
    const [cursorVisible, setCursorVisible] = useState(true);

    // Cursor blinking effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCursorVisible((prev) => !prev);
        }, 600);
        return () => clearInterval(interval);
    }, []);
    return (
        <section className="relative flex flex-col  items-center justify-center px-8 py-20 min-h-screen ">

            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="relative flex flex-col items-center md:items-start">
                    {/* Avatar Glow */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-purple-600/40 blur-3xl rounded-full"></div>
                        <div className="relative w-40 h-40 md:w-56 md:h-56">
                            <Image
                                src="/Me.png" // apna avatar image
                                alt="Avatar"
                                fill
                                className="object-contain relative z-10"
                            />
                            {/* Arrow Text */}
                            <p className="absolute -top-8 left-1/2 md:left-[90%] -translate-x-1/2 md:translate-x-0 text-sm text-gray-200 whitespace-nowrap">
                                Hello! I Am{" "}
                                <span className="text-purple-400 font-medium">Ibrahim Memon</span>
                            </p>
                            <span className="hidden md:block absolute -top-10 left-1/2 md:left-[88%] -translate-x-1/2 md:translate-x-0 text-gray-400">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 200 100"
                                    className="w-44 h-24"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="1.2"
                                >
                                    <g transform="scale(-1,1) translate(-120,0)">
                                        {/* Arrow curve from top → down */}
                                        <path d="M 20 30 C 20 80, 130 80, 150 50" />

                                        {/* Arrow head */}
                                        <path d="M 172 47 L 182 50 L 120 53" />


                                    </g>

                                </svg>
                            </span>

                        </div>


                    </div>
                </div>
                <div>
                    {/* Right Side */}
                    <div className="mt-12 md:mt-0 md:ml-16 text-center md:text-left max-w-xl">
                        <p className="text-gray-300 text-lg">A Designer who</p>

                        <h1 className="text-3xl md:text-5xl font-bold text-white leading-snug mt-2">
                            Judges a book <br /> by its{" "}
                            <span className="relative text-purple-400 font-extrabold italic">
                                cover
                                {/* Ellipse border around word */}
                                <span className="absolute -inset-1 rounded-full border-1  border-purple-400"></span>
                            </span>
                            ...
                        </h1>

                        <p className="mt-3 text-gray-400 text-sm">
                            Because if the cover does not impress you what else can?
                        </p>
                    </div>





                </div>

            </div>




            {/* text start */}
            <div className="max-w-3xl py-20">
                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                    I&apos;m a{" "}
                    <span className="text-purple-400">Software Engineer</span>
                    {cursorVisible && <span className="text-purple-400">|</span>}
                </h1>

                {/* Subheading */}
                <p className="mt-4 text-sm sm:text-xs font-medium text-gray-300">
                    Currently, I&apos;m a Software Engineer at{" "}
                    <Link
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-semibold text-blue-400 hover:text-blue-500 transition"
                    >
                        <FaFacebook className="text-sm text-blue-500" /> Facebook
                    </Link>
                    .
                </p>

                {/* Description */}
                <p className="mt-6 text-base sm:text-md text-gray-400 leading-relaxed font-normal">
                    A self-taught <span className="text-gray-200 font-medium">UI/UX designer</span>, functioning in the
                    industry for 3+ years now. I make meaningful and delightful digital
                    products that create an equilibrium between <span className="text-gray-200 font-medium">user needs</span> and{" "}
                    <span className="text-gray-200 font-medium">business goals</span>.
                </p>
            </div>
        </section>


    )
}
