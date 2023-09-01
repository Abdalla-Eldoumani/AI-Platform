"use client";

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import TypeWriterComponent from "typewriter-effect";
import { Button } from "./ui/button";


export const LandingHero = () => {
    const { isSignedIn } = useAuth();

    return(
        <div className="text-white font-bold py-36 text-center space-y-5">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:7xl space-y-5 font-extrabold">
                <h1>The Best AI tool for</h1>
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    <TypeWriterComponent options={{
                        strings: [
                            "Chatting",
                            "Code Generation",
                            "Image Generation",
                            "Video Generation",
                            "Music Generation",
                        ],
                        autoStart: true,
                        loop: true,
                    }} />
                </div>
            </div>
            <div className="text-sm md:text-xl font-light text-zinc-400">
                With a few clicks you can make your dreams come true.
            </div>
            <div>
                <Link href={isSignedIn ? "/dashboard" : "/settings"}>
                    <Button variant="premium" className="font-semibold rounded-full md:text-lg md:p-6 p-4">
                        Get Started for Free
                    </Button>
                </Link>
            </div>
            <div className="text-zinc-400 text-xs md:text-sm font-normal">
                No credit card required.
            </div>
        </div>
    )
}