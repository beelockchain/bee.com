"use client";

import { useEffect, useRef, useState } from "react";

const TABS = [
    "Blockchain",
    "AI",
    "Game",
    "Consultant",
    "Software",
    "Web3",

] as const;

type TabType = typeof TABS[number];

const TAB_CONTENT: Record<TabType, { title: string; desc: string }> = {
    Blockchain: {
        title: "Digital Transformation Services",
        desc: "We build decentralized applications, smart contracts, and secure blockchain infrastructures for enterprises.",
    },
    AI: {
        title: "Software Development",
        desc: "We create intelligent automation, AI-driven analytics, and custom machine learning models.",
    },
    Game: {
        title: "Blockchain Development",
        desc: "We develop immersive gaming experiences using Unity, Unreal Engine, and WebGL technologies.",
    },
    Consultant: {
        title: "AI Development",
        desc: "We guide businesses with digital transformation strategies, system architecture, and technology roadmaps.",
    },
    Software: {
        title: "DevOps Services",
        desc: "We build robust, scalable software tailored to your business workflows.",
    },
    Web3: {
        title: "Digital Marketing",
        desc: "We deliver next-gen decentralized apps, NFT platforms, and crypto payment integrations.",
    },

};

export default function Transformes() {
    const [activeTab, setActiveTab] = useState(0);
    const sectionRefs = useRef<HTMLDivElement[]>([]);

    const addToRefs = (el: HTMLDivElement | null) => {
        if (el && !sectionRefs.current.includes(el)) {
            sectionRefs.current.push(el);
        }
    };

    /* ================= Scroll Sync ================= */
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const target = entry.target as HTMLElement;
                        const index = Number(target.dataset.index);
                        setActiveTab(index);
                    }
                });
            },
            {
                threshold: 0.6,
            }
        );

        sectionRefs.current.forEach((sec) => observer.observe(sec));
        return () => observer.disconnect();
    }, []);

    const scrollToSection = (index: number) => {
        sectionRefs.current[index]?.scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
    };

    return (
        <section className="w-full min-h-screen  px-20 py-24">
            {/* Header */}
            <div>
                <img src="/Services.png"/>
            </div>
            <div className="text-center mb-20">
                <h1 className="text-4xl font-bold text-black">Digital Transformation</h1>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    A full spectrum of digital transformation services to elevate your business
                </p>
            </div>

            {/* Main Layout */}
            <div className="grid grid-cols-[320px_1fr] gap-24 relative">
                {/* LEFT TABS */}
                <div className="sticky top-32 h-fit space-y-6">
                    {TABS.map((tab, index) => (
                        <button
                            key={tab}
                            onClick={() => scrollToSection(index)}
                            className={`
    block w-full
    text-left text-xl font-medium
    whitespace-normal break-words
    leading-snug
    transition-all
    ${activeTab === index
                                    ? "text-black font-bold"
                                    : "text-gray-400 hover:text-black"}
  `}
                        >
                            {TAB_CONTENT[tab].title}
                        </button>
                    ))}
                </div>

                {/* RIGHT CONTENT */}
                <div className="space-y-[120px]">
                    {TABS.map((tab, index) => (
                        <div
                            key={tab}
                            ref={addToRefs}
                            data-index={index}
                            className="min-h-[60vh] flex flex-col justify-center"
                        >
                            <h2 className="text-3xl font-bold text-black">
                                {TAB_CONTENT[tab].title}
                            </h2>

                            <p className="text-gray-600 mt-6 text-lg max-w-xl">
                                {TAB_CONTENT[tab].desc}
                            </p>

                            <button className="mt-8 inline-flex items-center gap-2 font-semibold text-black underline">
                                {TAB_CONTENT[tab].title}
                                <span className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center">
                                    →
                                </span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
