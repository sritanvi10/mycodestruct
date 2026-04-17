"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft } from "lucide-react";

export default function JavaInputOutput() {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 400) {
            setShowTopBtn(true);
        } else {
            setShowTopBtn(false);
        }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const goToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-[#e5e7eb] pb-20 font-sans">
            <main className="max-w-6xl mx-auto px-6 pt-16">
                <Link href="/">
                    <motion.div
                    className="absolute top-8 left-8 z-50 flex items-center gap-2 cursor-pointer group"
                    >
                    <ChevronLeft className="w-4 h-4 text-red-600"/>
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
                        Java Input & Output (Scanner & System.out)
                    </h1>
                    <p className="text-neutral-400 text-lg leading-relaxed">
                        A comprehensive guide to handling data streams in Java. Unlike C++, Java requires importing a specific utility class called <code className="bg-neutral-800 px-1 rounded">Scanner</code> to read user input, while using the built-in <code className="bg-neutral-800 px-1 rounded">System.out</code> for displaying results to the console.
                    </p>
                </header>

                <article className="prose prose-invert max-w-none space-y-12">
                    {/* Section: The Stream Concept */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-4 italic">The Concept of Streams</h2>
                        <p className="text-neutral-300 leading-8 text-[18px]">
                            In Java, I/O operations are performed using <strong>Streams</strong>. A stream is a sequence of data. In standard console programming, <code>System.in</code> represents the input stream (keyboard) and <code>System.out</code> represents the output stream (screen).
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            {/* Output explanation */}
                            <div className="p-6 bg-neutral-900/40 rounded-2xl border border-neutral-800 flex flex-col justify-between">
                                <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-500 font-bold">out</div>
                                    <h3 className="text-xl font-semibold text-white">System.out</h3>
                                </div>
                                <p className="text-neutral-400 text-sm mb-4">Used to print data. <code>print()</code> keeps the cursor on the same line, while <code>println()</code> moves it to a new line after printing.</p>
                                </div>
                                <div className="bg-black/50 p-4 rounded-xl font-mono text-1xl text-blue-400">
                                System.out.println(<span className="text-orange-400">"Hello Java"</span>);
                                </div>
                            </div>

                            {/* Input explanation */}
                            <div className="p-6 bg-neutral-900/40 rounded-2xl border border-neutral-800 flex flex-col justify-between">
                                <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-500 font-bold">in</div>
                                    <h3 className="text-xl font-semibold text-white">Scanner (Input)</h3>
                                </div>
                                <p className="text-neutral-400 text-sm mb-4">Found in <code>java.util</code>. It parses primitive types and strings using methods like <code>nextInt()</code> or <code>nextLine()</code>.</p>
                                </div>
                                <div className="bg-black/50 p-4 rounded-xl font-mono text-1xl text-blue-400">
                                sc.nextInt(); <span className="text-neutral-500 text-sm">// Reads an integer</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section: Implementation Example */}
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Java I/O Implementation</h2>
                        <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl">
                        <span className="text-blue-500">import</span> java.util.Scanner; <span className="text-neutral-500">// Required import</span><br/><br/>
                        
                        <span className="text-red-500">public class</span> <span className="text-yellow-400">Main</span> &#123;<br/>
                        &nbsp;&nbsp;<span className="text-red-500">public static void</span> <span className="text-yellow-400">main</span>(String[] args) &#123;<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-neutral-500">// Create a Scanner object</span><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;Scanner sc = <span className="text-red-500">new</span> <span className="text-yellow-400">Scanner</span>(System.in);<br/><br/>
                        
                        &nbsp;&nbsp;&nbsp;&nbsp;System.out.print(<span className="text-orange-400">"Enter your score: "</span>);<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">int</span> score = sc.nextInt(); <span className="text-neutral-500">// Taking input</span><br/><br/>
                        
                        &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-orange-400">"Final Score: "</span> + score);<br/><br/>
                        
                        &nbsp;&nbsp;&nbsp;&nbsp;sc.close(); <span className="text-neutral-500">// Good practice to close the stream</span><br/>
                        &nbsp;&nbsp;&#125;<br/>
                        &#125;
                        </div>

                        {/* Simulated Terminal Output */}
                        <div className="mt-4">
                        <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2 ml-1 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            Console Output
                        </h4>
                        <div className="bg-[#111] border border-neutral-800 rounded-lg p-5 font-mono text-sm">
                            <span className="text-neutral-300 italic">Enter your score: </span><span className="text-white font-bold">95</span><br/>
                            <span className="text-neutral-300">Final Score: 95</span>
                        </div>
                        </div>
                    </section>

                    {/* Section: Common Scanner Methods */}
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-6">Common Scanner Methods</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-4 border border-neutral-800 rounded-xl bg-neutral-900/20">
                                <code className="text-red-400 text-xs">next()</code>
                                <p className="text-neutral-500 text-xs mt-2">Reads a single word (stops at space).</p>
                            </div>
                            <div className="p-4 border border-neutral-800 rounded-xl bg-neutral-900/20">
                                <code className="text-red-400 text-xs">nextLine()</code>
                                <p className="text-neutral-500 text-xs mt-2">Reads a whole line of text.</p>
                            </div>
                            <div className="p-4 border border-neutral-800 rounded-xl bg-neutral-900/20">
                                <code className="text-red-400 text-xs">nextDouble()</code>
                                <p className="text-neutral-500 text-xs mt-2">Reads a decimal value.</p>
                            </div>
                        </div>
                    </section>

                    {/* Section: Visual Flow */}
                    <section className="bg-neutral-900/30 border border-neutral-800 p-8 rounded-2xl text-center">
                        <h3 className="text-white font-semibold mb-6">Java Data Flow</h3>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                            <div className="flex flex-col items-center">
                                <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/50 rounded text-blue-400 font-mono mb-2">Scanner(System.in)</div>
                                <span className="text-xs text-neutral-500">Input Stream</span>
                            </div>
                            <div className="hidden md:block text-neutral-700 text-3xl">→</div>
                            <div className="flex flex-col items-center">
                                <div className="px-4 py-2 bg-red-500/10 border border-red-500/50 rounded text-red-400 font-mono mb-2">System.out.println()</div>
                                <span className="text-xs text-neutral-500">Output Stream</span>
                            </div>
                        </div>
                    </section>
                </article>

                {/* Navigation Footer */}
                <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-neutral-800 pt-10">
                
                {/* Previous Lesson Button */}
                <Link href="/langroadmap/java/phase1/variables">
                    <motion.div
                    whileHover={{ x: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-4 group cursor-pointer text-left"
                    >
                    <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors">
                        <ChevronLeft className="w-5 h-5 text-red-500" />
                    </div>
                    <div className="text-left">
                        <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Previous Lesson</span>
                        <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                            Variables & Data Types in Java
                        </span>
                    </div>
                    </motion.div>
                </Link>

                {/* Next Lesson Button */}
                <Link href="/langroadmap/java/phase1/operators">
                    <motion.div
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-4 group cursor-pointer text-right"
                    >
                    <div className="text-right">
                        <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Next Lesson</span>
                        <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                            Operators & Expressions in Java
                        </span>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors">
                        <ArrowRight className="w-5 h-5 text-red-500" />
                    </div>
                    </motion.div>
                </Link>

                </div>
            </main>

            {/* Back to Top Button */}
            <AnimatePresence>
                {showTopBtn && (
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={goToTop}
                    className="fixed bottom-8 right-8 z-50 p-4 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-colors border border-red-500/20"
                    aria-label="Back to top"
                >
                    <ArrowUp className="w-6 h-6" />
                </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}