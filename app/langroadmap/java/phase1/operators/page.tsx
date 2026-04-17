"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft } from "lucide-react";

export default function JavaOperators() {
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
                        Java Operators & Expressions
                    </h1>
                    <p className="text-neutral-400 text-lg leading-relaxed">
                        A deep dive into the symbols that drive logic and mathematical operations within Java. While similar to C++, Java provides stricter type checking and handles memory automatically, removing the need for pointer operators.
                    </p>
                </header>

                <article className="prose prose-invert max-w-none space-y-12">
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-4 italic">Operators</h2>
                        <p className="text-neutral-300 leading-8 text-[18px]">
                            Operators in Java are special symbols used to perform operations on variables and values. In Java, operators can be categorized into several groups based on their behavior.
                        </p>

                        <div className="flex flex-wrap gap-2 mt-4">
                            {["Arithmetic", "Relational", "Logical", "Bitwise", "Assignment", "Unary", "Ternary"].map((tag) => (
                                <span key={tag} className="px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-xs text-neutral-400">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* 1. Arithmetic Operators */}
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">1. Arithmetic Operators</h2>
                        <div className="overflow-x-auto rounded-lg border border-neutral-800 mb-6">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-[#111] text-neutral-400 uppercase text-[11px] tracking-widest border-b border-neutral-800">
                                    <tr>
                                        <th className="px-6 py-4">Operator</th>
                                        <th className="px-6 py-4">Description</th>
                                        <th className="px-6 py-4">Result (a=10, b=3)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-neutral-900 text-neutral-300">
                                    <tr><td className="px-6 py-4 text-red-500 font-bold">+</td><td className="px-6 py-4">Addition</td><td className="px-6 py-4">13</td></tr>
                                    <tr><td className="px-6 py-4 text-red-500 font-bold">-</td><td className="px-6 py-4">Subtraction</td><td className="px-6 py-4">7</td></tr>
                                    <tr><td className="px-6 py-4 text-red-500 font-bold">*</td><td className="px-6 py-4">Multiplication</td><td className="px-6 py-4">30</td></tr>
                                    <tr><td className="px-6 py-4 text-red-500 font-bold">/</td><td className="px-6 py-4">Division (Integer)</td><td className="px-6 py-4">3</td></tr>
                                    <tr><td className="px-6 py-4 text-red-500 font-bold">%</td><td className="px-6 py-4">Modulus (Remainder)</td><td className="px-6 py-4">1</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm shadow-2xl">
                            <span className="text-red-500">public class</span> <span className="text-yellow-400">ArithmeticDemo</span> &#123;<br/>
                            &nbsp;&nbsp;<span className="text-red-500">public static void</span> <span className="text-yellow-400">main</span>(String[] args) &#123;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">int</span> a = <span className="text-blue-400">10</span>, b = <span className="text-blue-400">3</span>;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-orange-400">"Add: "</span> + (a + b));<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-orange-400">"Div: "</span> + (a / b)); <span className="text-neutral-500">// Result is 3</span><br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-orange-400">"Mod: "</span> + (a % b));<br/>
                            &nbsp;&nbsp;&#125;<br/>
                            &#125;
                        </div>
                    </section>

                    {/* 2. Relational Operators */}
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">2. Relational Operators</h2>
                        <p className="text-neutral-400 mb-4">In Java, these always return a <code className="text-blue-400">boolean</code> value (true/false) instead of 1/0.</p>
                        
                        <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm shadow-2xl">
                            <span className="text-red-500">int</span> x = <span className="text-blue-400">5</span>, y = <span className="text-blue-400">10</span>;<br/>
                            System.out.println(x == y); <span className="text-neutral-500">// false</span><br/>
                            System.out.println(x != y); <span className="text-neutral-500">// true</span><br/>
                            System.out.println(x &lt; y);  <span className="text-neutral-500">// true</span>
                        </div>
                    </section>

                    {/* 3. Logical Operators */}
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">3. Logical Operators</h2>
                        <p className="text-neutral-400 mb-4 text-sm">Used for Boolean logic. Note: Java uses "short-circuiting" for && and ||.</p>
                        
                        <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm shadow-2xl">
                            <span className="text-red-500">boolean</span> a = <span className="text-blue-400">true</span>, b = <span className="text-blue-400">false</span>;<br/>
                            System.out.println(a && b); <span className="text-neutral-500">// false (AND)</span><br/>
                            System.out.println(a || b); <span className="text-neutral-500">// true (OR)</span><br/>
                            System.out.println(!a);     <span className="text-neutral-500">// false (NOT)</span>
                        </div>
                    </section>

                    {/* 4. Bitwise Operators */}
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">4. Bitwise Operators</h2>
                        <div className="bg-neutral-900/40 p-6 rounded-2xl border border-neutral-800 mb-6">
                            <p className="text-sm text-neutral-400">Java also includes the <code className="text-red-400"> "&gt;&gt;&gt;" </code> (Unsigned Right Shift) operator, which fills shifted bits with zeros regardless of the sign.</p>
                        </div>
                        <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm shadow-2xl">
                            <span className="text-red-500">int</span> a = <span className="text-blue-400">5</span>; <span className="text-neutral-500">// 0101</span><br/>
                            System.out.println(a &lt;&lt; <span className="text-blue-400">1</span>); <span className="text-neutral-500">// 10 (1010)</span><br/>
                            System.out.println(a &gt;&gt; <span className="text-blue-400">1</span>); <span className="text-neutral-500">// 2 (0010)</span>
                        </div>
                    </section>

                    {/* 6. Unary Operators */}
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">5. Unary & Assignment</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-neutral-900/30 border border-neutral-800 rounded-xl">
                                <h4 className="text-red-500 font-bold text-xs uppercase mb-2">Increment Example</h4>
                                <code className="text-sm">int i = 10;<br/>System.out.println(i++); // Prints 10<br/>System.out.println(++i); // Prints 12</code>
                            </div>
                            <div className="p-4 bg-neutral-900/30 border border-neutral-800 rounded-xl">
                                <h4 className="text-red-500 font-bold text-xs uppercase mb-2">Shorthand Example</h4>
                                <code className="text-sm">int x = 5;<br/>x += 10; // x is now 15<br/>x *= 2;  // x is now 30</code>
                            </div>
                        </div>
                    </section>

                    {/* 7. Ternary Operator */}
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">6. Ternary Operator (?:)</h2>
                        <p className="text-neutral-400 mb-4 italic">A shorthand for if-else that must return a value.</p>
                        <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm shadow-2xl">
                            <span className="text-red-500">int</span> age = <span className="text-blue-400">20</span>;<br/>
                            String status = (age &gt;= <span className="text-blue-400">18</span>) ? <span className="text-orange-400">"Adult"</span> : <span className="text-orange-400">"Minor"</span>;<br/>
                            System.out.println(status);
                        </div>
                    </section>

                    {/* Expressions Section */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-4 italic">Expressions</h2>
                        <p className="text-neutral-300 leading-8 text-[18px]">
                            An expression is any legal combination of literals, variables, and operators that evaluates to a single value. Java follows standard <strong>Operator Precedence</strong> (PEMDAS).
                        </p>
                        <div className="mt-6 bg-[#111] border border-neutral-800 rounded-lg p-5">
                            <code className="text-sm text-neutral-300">
                                <span className="text-red-500">int</span> result = <span className="text-blue-400">10</span> + <span className="text-blue-400">5</span> * <span className="text-blue-400">2</span>; <span className="text-neutral-500">// Evaluates to 20</span>
                            </code>
                        </div>
                    </section>
                </article>

                {/* Navigation Footer */}
                <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-neutral-800 pt-10">
                    <Link href="/langroadmap/java/phase1/io">
                        <motion.div whileHover={{ x: -5 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-4 group cursor-pointer text-left">
                            <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors">
                                <ChevronLeft className="w-5 h-5 text-red-500" />
                            </div>
                            <div className="text-left">
                                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Previous Lesson</span>
                                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                                    Input and Output in Java
                                </span>
                            </div>
                        </motion.div>
                    </Link>

                    <Link href="/langroadmap/java/phase1/control-flow">
                        <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-4 group cursor-pointer text-right">
                            <div className="text-right">
                                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Next Lesson</span>
                                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                                    Control Flow in Java
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