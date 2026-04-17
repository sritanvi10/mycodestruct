"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft } from "lucide-react";

export default function JavaControlFlow() {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowTopBtn(window.scrollY > 400);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const goToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-[#e5e7eb] pb-20 font-sans">
            <main className="max-w-6xl mx-auto px-6 pt-16">
                {/* Header Branding */}
                <Link href="/">
                    <motion.div className="absolute top-8 left-8 z-50 flex items-center gap-2 cursor-pointer group">
                        <ChevronLeft className="w-4 h-4 text-red-600" />
                        <span className="text-xl font-black tracking-tighter text-red-600 uppercase">
                            CodeStruct_
                        </span>
                    </motion.div>
                </Link>

                <Link 
                    href="/langroadmap/java" 
                    className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors mt-10 mb-10 text-sm"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to Java Roadmap
                </Link>

                <header className="mb-12 border-b border-neutral-800 pb-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        Control Flow in Java
                    </h1>
                    <p className="text-neutral-400 text-lg leading-relaxed">
                        Control statements govern the flow of execution in Java. From conditionals to loops, these constructs allow your program to make decisions and repeat tasks efficiently.
                    </p>
                </header>

                <article className="prose prose-invert max-w-none space-y-12">
                    {/* Section 1: Selection Statements */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-4 italic">1. Selection Statements</h2>
                        <p className="text-neutral-300 leading-8 text-[18px] mb-6">
                            Selection statements allow Java programs to choose different paths of execution based on the outcome of an expression.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-4">A. The if-else Hierarchy</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            <div className="p-4 bg-neutral-900/40 border border-neutral-800 rounded-xl">
                                <h4 className="text-red-500 font-bold text-xs uppercase mb-2">Simple if</h4>
                                <pre className="text-xs text-neutral-400">if(age &gt; 18) &#123; ... &#125;</pre>
                            </div>
                            <div className="p-4 bg-neutral-900/40 border border-neutral-800 rounded-xl">
                                <h4 className="text-red-500 font-bold text-xs uppercase mb-2">if-else-if Ladder</h4>
                                <pre className="text-xs text-neutral-400">else if(score &gt; 90) &#123; ... &#125;</pre>
                            </div>
                        </div>

                        <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm shadow-2xl">
                            <span className="text-red-500">int</span> age = <span className="text-blue-400">20</span>;<br/>
                            <span className="text-red-500">boolean</span> hasLicense = <span className="text-blue-400">true</span>;<br/><br/>
                            <span className="text-red-500">if</span>(age &gt;= <span className="text-blue-400">18</span>) &#123;<br/>
                            &nbsp;&nbsp;<span className="text-red-500">if</span>(hasLicense) &#123;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-orange-400">"Can Drive"</span>);<br/>
                            &nbsp;&nbsp;&#125; <span className="text-red-500">else</span> &#123;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-orange-400">"Needs License"</span>);<br/>
                            &nbsp;&nbsp;&#125;<br/>
                            &#125;
                        </div>
                    </section>

                    {/* Section 2: Iteration Statements */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-4 italic">2. Iteration (Loops)</h2>
                        <p className="text-neutral-300 mb-6">Java provides standard loops for repetitive tasks. 
                        

[Image of for and while loop flowcharts]
</p>
                        
                        <div className="space-y-6">
                            <div className="bg-neutral-900/20 border border-neutral-800 p-6 rounded-xl">
                                <h3 className="text-white font-bold mb-2">The for Loop</h3>
                                <p className="text-neutral-400 text-sm mb-4">Best used when the start and end points are known.</p>
                                <div className="bg-black p-4 rounded-lg font-mono text-xs text-blue-400">
                                    <span className="text-red-500">for</span>(<span className="text-red-500">int</span> i = <span className="text-blue-400">1</span>; i &lt;= <span className="text-blue-400">5</span>; i++) &#123;<br/>
                                    &nbsp;&nbsp;System.out.print(i + <span className="text-orange-400">" "</span>);<br/>
                                    &#125;
                                </div>
                            </div>

                            <div className="bg-neutral-900/20 border border-neutral-800 p-6 rounded-xl">
                                <h3 className="text-white font-bold mb-2">The while Loop</h3>
                                <p className="text-neutral-400 text-sm mb-4">Checks condition before executing the block.</p>
                                <div className="bg-black p-4 rounded-lg font-mono text-xs text-blue-400">
                                    <span className="text-red-500">while</span>(condition) &#123;<br/>
                                    &nbsp;&nbsp;<span className="text-neutral-500">// code...</span><br/>
                                    &#125;
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Jump Statements */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-4 italic">3. Jump Statements</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 bg-neutral-900/40 border border-neutral-800 rounded-2xl">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                    <h3 className="text-lg font-bold text-white">break</h3>
                                </div>
                                <p className="text-sm text-neutral-400 leading-6">
                                    Terminates the current loop or switch statement immediately. Control passes to the statement following the loop.
                                </p>
                            </div>
                            <div className="p-6 bg-neutral-900/40 border border-neutral-800 rounded-2xl">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    <h3 className="text-lg font-bold text-white">continue</h3>
                                </div>
                                <p className="text-sm text-neutral-400 leading-6">
                                    Skips the remaining code in the current iteration and jumps to the condition check for the next pass.
                                </p>
                            </div>
                        </div>
                    </section>
                </article>

                {/* Navigation Footer */}
                <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-neutral-800 pt-10">
                    <Link href="/langroadmap/java/phase1/operators">
                        <motion.div whileHover={{ x: -5 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-4 group cursor-pointer text-left">
                            <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors">
                                <ChevronLeft className="w-5 h-5 text-red-500" />
                            </div>
                            <div className="text-left">
                                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Previous Lesson</span>
                                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                                    Operators & Expressions
                                </span>
                            </div>
                        </motion.div>
                    </Link>

                    <Link href="/langroadmap/java/phase2/methods">
                        <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-4 group cursor-pointer text-right">
                            <div className="text-right">
                                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Next Lesson</span>
                                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                                    Phase-2: Methods in Java
                                </span>
                            </div>
                            <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors">
                                <ArrowRight className="w-5 h-5 text-red-500" />
                            </div>
                        </motion.div>
                    </Link>
                </div>
            </main>

            <AnimatePresence>
                {showTopBtn && (
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={goToTop}
                        className="fixed bottom-8 right-8 z-50 p-4 bg-red-600 text-white rounded-full shadow-lg"
                    >
                        <ArrowUp className="w-6 h-6" />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}