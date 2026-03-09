import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

interface SlotDef {
    edge: "left" | "right" | "bottom" | "top";
    frameStyle: CSSProperties;
    motionPeek: string;
    motionHide: string;
    imageStyle: CSSProperties;
    imageTransform?: string;
}

interface CharConfig {
    src: string;
    slots: SlotDef[];
}

const CHARS: CharConfig[] = [
    {
        src: "/milady-dark.png",
        slots: [
            {
                edge: "left",
                frameStyle: {
                    left: 0,
                    top: "33%",
                    width: "clamp(12rem, 15vw, 14rem)",
                    height: "clamp(12rem, 15vw, 14rem)",
                },
                motionPeek: "translate3d(0, 0, 0)",
                motionHide: "translate3d(-96%, 0, 0)",
                imageStyle: {
                    width: "clamp(11rem, 16vw, 14rem)",
                    top: "52%",
                    left: "56%",
                },
                imageTransform: "translate(-50%, -50%) rotate(90deg)",
            },
            {
                edge: "right",
                frameStyle: {
                    right: 0,
                    top: "53%",
                    width: "clamp(12rem, 15vw, 14rem)",
                    height: "clamp(12rem, 15vw, 14rem)",
                },
                motionPeek: "translate3d(0, 0, 0)",
                motionHide: "translate3d(96%, 0, 0)",
                imageStyle: {
                    width: "clamp(11rem, 16vw, 14rem)",
                    top: "50%",
                    left: "44%",
                },
                imageTransform: "translate(-50%, -50%) rotate(-90deg)",
            },
        ],
    },
    {
        src: "/milady-green.png",
        slots: [
            {
                edge: "right",
                frameStyle: {
                    right: 0,
                    top: "16%",
                    width: "clamp(12.5rem, 15.5vw, 14.5rem)",
                    height: "clamp(12.5rem, 15.5vw, 14.5rem)",
                },
                motionPeek: "translate3d(0, 0, 0)",
                motionHide: "translate3d(98%, 0, 0)",
                imageStyle: {
                    width: "clamp(11.5rem, 16vw, 14rem)",
                    top: "50%",
                    left: "44%",
                },
                imageTransform: "translate(-50%, -50%) rotate(-90deg)",
            },
            {
                edge: "bottom",
                frameStyle: {
                    bottom: 0,
                    right: "10%",
                    width: "clamp(11rem, 14vw, 13rem)",
                    height: "clamp(11rem, 14vw, 13rem)",
                },
                motionPeek: "translate3d(0, 0, 0)",
                motionHide: "translate3d(0, 98%, 0)",
                imageStyle: {
                    width: "clamp(10rem, 14vw, 12.5rem)",
                    top: "46%",
                    left: "52%",
                },
                imageTransform: "translate(-50%, -50%)",
            },
        ],
    },
    {
        src: "/milady-brown.png",
        slots: [
            {
                edge: "left",
                frameStyle: {
                    left: 0,
                    top: "67%",
                    width: "clamp(12rem, 15vw, 14rem)",
                    height: "clamp(12rem, 15vw, 14rem)",
                },
                motionPeek: "translate3d(0, 0, 0)",
                motionHide: "translate3d(-96%, 0, 0)",
                imageStyle: {
                    width: "clamp(11rem, 16vw, 13.75rem)",
                    top: "50%",
                    left: "56%",
                },
                imageTransform: "translate(-50%, -50%)",
            },
            {
                edge: "top",
                frameStyle: {
                    top: 0,
                    left: "10%",
                    width: "clamp(12rem, 15vw, 14rem)",
                    height: "clamp(12rem, 15vw, 14rem)",
                },
                motionPeek: "translate3d(0, 0, 0)",
                motionHide: "translate3d(0, -96%, 0)",
                imageStyle: {
                    width: "clamp(11rem, 16vw, 13.75rem)",
                    top: "56%",
                    left: "50%",
                },
                imageTransform: "translate(-50%, -50%) rotate(90deg)",
            },
        ],
    },
];

const PEEK_DURATION = 520;
const HIDE_DURATION = 420;
const REAPPEAR_DELAY = 600;

export function Comparison() {
    const sectionRef = useRef<HTMLElement>(null);
    const [sectionVisible, setSectionVisible] = useState(false);
    const [charSlots, setCharSlots] = useState([0, 0, 0]);
    const [charStates, setCharStates] = useState<string[]>(["hidden", "hidden", "hidden"]);
    const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setSectionVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    // Staggered entrance when section becomes visible
    useEffect(() => {
        if (!sectionVisible) return;
        const delays = [200, 500, 800];
        delays.forEach((d, i) => {
            const t = setTimeout(() => {
                setCharStates(prev => {
                    const next = [...prev];
                    next[i] = "peeking";
                    return next;
                });
            }, d);
            timersRef.current.push(t);
        });
        return () => timersRef.current.forEach(clearTimeout);
    }, [sectionVisible]);

    const handleMouseEnter = useCallback((charIndex: number) => {
        if (charStates[charIndex] !== "peeking") return;

        // Hide this character
        setCharStates(prev => {
            const next = [...prev];
            next[charIndex] = "hiding";
            return next;
        });

        // After hide animation, switch to other slot and reappear
        const t = setTimeout(() => {
            setCharStates(prev => {
                const next = [...prev];
                next[charIndex] = "hidden";
                return next;
            });

            const t2 = setTimeout(() => {
                // Toggle to the other slot for this character
                setCharSlots(prev => {
                    const next = [...prev];
                    const charSlotsCount = CHARS[charIndex].slots.length;
                    next[charIndex] = (prev[charIndex] + 1) % charSlotsCount;
                    return next;
                });

                requestAnimationFrame(() => {
                    setCharStates(prev => {
                        const next = [...prev];
                        next[charIndex] = "peeking";
                        return next;
                    });
                });
            }, REAPPEAR_DELAY);
            timersRef.current.push(t2);
        }, HIDE_DURATION);
        timersRef.current.push(t);
    }, [charStates]);

    const categories = [
        {
            feature: "Execution Environment",
            milady: "100% Local (macOS/Windows)",
            openclaw: "Cloud Dependent (API)",
            miladySub: "Zero latency. No cloud downtime.",
            openclawSub: "Subject to rate limits and outages.",
        },
        {
            feature: "Privacy & Data",
            milady: "Zero Telemetry",
            openclaw: "Data Collection & Tracking",
            miladySub: "Absolute privacy. Your chats never leave your device.",
            openclawSub: "Conversations stored on corporate servers.",
        },
        {
            feature: "Crypto & Web3",
            milady: "BSC Native Integrated",
            openclaw: "Web2 Restricted",
            miladySub: "Built-in wallet, DEX trades, PancakeSwap routing.",
            openclawSub: "No native crypto capabilities out-of-the-box.",
        },
        {
            feature: "Autonomy",
            milady: "Automated Trading & DAO",
            openclaw: "Standard Chatbot UI",
            miladySub: "Agentic loops execute trades and govern DAOs autonomously.",
            openclawSub: "Requires constant manual prompting and supervision.",
        },
        {
            feature: "Flexibility",
            milady: "Multi-Model Support",
            openclaw: "Proprietary Lockdown",
            miladySub: "Plug in Claude, GPT, Ollama, DeepSeek—your choice.",
            openclawSub: "Locked into a specific, controlled model ecosystem.",
        },
        {
            feature: "Identity",
            milady: "Custom Personality",
            openclaw: "Generic Assistant",
            miladySub: "Fully modifiable character, voice, and behavior traits.",
            openclawSub: "Forced 'helpful AI' standard alignment.",
        }
    ];

    return (
        <section ref={sectionRef} id="comparison" className="relative py-48 bg-transparent text-text-light overflow-hidden">

            {/* Peekaboo characters */}
            {CHARS.map((char, i) => {
                const slot = char.slots[charSlots[i]];
                const state = charStates[i];
                const isPeeking = state === "peeking";

                let motionTransform = slot.motionHide;
                let transition = `transform ${PEEK_DURATION}ms cubic-bezier(0.22, 1, 0.36, 1)`;

                if (isPeeking) {
                    motionTransform = slot.motionPeek;
                } else if (state === "hiding") {
                    motionTransform = slot.motionHide;
                    transition = `transform ${HIDE_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)`;
                } else {
                    transition = "none";
                }

                return (
                    <div
                        key={i}
                        className="absolute z-5 cursor-pointer"
                        style={{
                            ...slot.frameStyle,
                        }}
                        onMouseEnter={() => handleMouseEnter(i)}
                    >
                        <div
                            className="absolute inset-0"
                            style={{
                                transform: motionTransform,
                                transition,
                                willChange: "transform",
                            }}
                        >
                            <img
                                src={char.src}
                                alt=""
                                className="absolute pointer-events-none select-none"
                                draggable={false}
                                style={{
                                    ...slot.imageStyle,
                                    transform: slot.imageTransform,
                                    filter: "drop-shadow(0 8px 28px rgba(0,0,0,0.45))",
                                    maxWidth: "none",
                                }}
                            />
                        </div>
                    </div>
                );
            })}

            <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">

                <div className="mb-32">
                    <p className="text-xs font-mono text-white/50 tracking-[0.2em] uppercase mb-6 flex items-center gap-4">
                        <span className="w-8 h-[1px] bg-white/40"></span>
                        System Specifications
                    </p>
                    <h2 className="text-5xl md:text-7xl font-black leading-[0.85] tracking-tighter uppercase">
                        Milady OS <br />
                        <span className="text-white/40">VS OpenClaw</span>
                    </h2>
                </div>

                <div className="space-y-24">
                    {categories.map((row, index) => (
                        <div key={index} className="flex flex-col md:flex-row md:items-start gap-6 md:gap-16 group border-t border-white/5 pt-12 mt-[-3rem]">

                            <div className="w-full md:w-1/4 pt-2">
                                <h3 className="font-mono text-xs text-brand tracking-[0.2em] uppercase">{row.feature}</h3>
                            </div>

                            <div className="w-full md:w-3/4 flex flex-col sm:flex-row gap-12 sm:gap-24">

                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-2 h-2 bg-brand"></div>
                                        <span className="font-black text-2xl lg:text-3xl uppercase tracking-tighter text-white">{row.milady}</span>
                                    </div>
                                    <p className="font-mono text-sm text-white/90 leading-relaxed pr-8">{row.miladySub}</p>
                                </div>

                                <div className="flex-1 opacity-80 transition-opacity duration-300 group-hover:opacity-100">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-2 h-2 bg-white/60"></div>
                                        <span className="font-medium text-xl lg:text-2xl uppercase tracking-tighter text-white/90 line-through decoration-brand/50">{row.openclaw}</span>
                                    </div>
                                    <p className="font-mono text-sm text-white/70 leading-relaxed pr-8">{row.openclawSub}</p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
