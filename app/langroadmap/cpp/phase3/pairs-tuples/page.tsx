"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft, Box, List, MoveRight, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Page() {
    const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) setShowTopBtn(true);
      else setShowTopBtn(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e7eb] pb-20 font-sans text-[18px]">
        <main className="max-w-6xl mx-auto px-6 pt-16">
            {/* Brand Header */}
            <Link href="/">
            <motion.div className="absolute top-8 left-8 z-50 flex items-center gap-2 cursor-pointer group">
                <ChevronLeft className="w-4 h-4 text-red-600" />
                <span className="text-xl font-black tracking-tighter text-red-600 uppercase">
                CodeStruct_
                </span>
            </motion.div>
            </Link>

            {/* Navigation */}
            <Link
            href="/langroadmap/cpp"
            className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors mt-10 mb-10 text-sm"
            >
            <ArrowLeft className="w-4 h-4" /> Back to C++ Roadmap
            </Link>

            {/* Article Header */}
            <header className="mb-12 border-b border-neutral-800 pb-10">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                    Pairs & Tuples <span className="text-red-600">in C++ STL_</span>
                </h1>
            </header>

            <article className="prose prose-invert max-w-none space-y-16">
                <section>
                    <h2 className="text-3xl font-bold text-white mb-4">What is a pair?</h2>
                    <p className="text-neutral-300 leading-8 mb-6">
                        A pair in STL is a container that stores two values together as a single unit. These values can be of the same or different data types.
                    </p>

                    <h3 className="text-xl font-bold text-white mb-6 text-red-500">Functions in pair:</h3>
                    <div className="space-y-4 text-neutral-300 mb-10">
                        <p><strong>first</strong> - used to access the first element of the pair.</p>
                        <p><strong>second</strong> - used to access the second element of the pair.</p>
                        <p><strong>make_pair()</strong> - used to create a pair.</p>
                        <p><strong>swap()</strong> - swaps two pairs.</p>
                    </div>

                    <h3 className="text-xl font-bold text-white mt-12 mb-4 uppercase tracking-widest text-red-500">Code:</h3>
                    <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mb-4 text-left">
                    <span className="text-blue-500">#include</span><span className="text-orange-400">&lt;bits/stdc++.h&gt;</span><br/>
                    <span className="text-red-500">using namespace</span> std;<br/><br/>

                    <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>() &#123;<br/>
                    &nbsp;&nbsp;<span className="text-neutral-500">// Declare a pair</span><br/>
                    &nbsp;&nbsp;pair&lt;<span className="text-red-500">int</span>, <span className="text-red-500">int</span>&gt; p;<br/><br/>

                    &nbsp;&nbsp;<span className="text-neutral-500">// Assign values</span><br/>
                    &nbsp;&nbsp;p.first = <span className="text-blue-400">10</span>;<br/>
                    &nbsp;&nbsp;p.second = <span className="text-blue-400">20</span>;<br/><br/>

                    &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Pair values: "</span> &lt;&lt; p.first &lt;&lt; <span className="text-orange-400">" "</span> &lt;&lt; p.second &lt;&lt; endl;<br/><br/>

                    &nbsp;&nbsp;<span className="text-neutral-500">// Using make_pair</span><br/>
                    &nbsp;&nbsp;pair&lt;<span className="text-red-500">int</span>, <span className="text-red-500">int</span>&gt; p2 = make_pair(<span className="text-blue-400">5</span>, <span className="text-blue-400">15</span>);<br/><br/>

                    &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Second pair: "</span> &lt;&lt; p2.first &lt;&lt; <span className="text-orange-400">" "</span> &lt;&lt; p2.second &lt;&lt; endl;<br/><br/>

                    &nbsp;&nbsp;<span className="text-neutral-500">// Swap pairs</span><br/>
                    &nbsp;&nbsp;p.swap(p2);<br/><br/>

                    &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"After swap: "</span> &lt;&lt; p.first &lt;&lt; <span className="text-orange-400">" "</span> &lt;&lt; p.second &lt;&lt; endl;<br/><br/>

                    &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br/>
                    &#125;
                    </div>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4 uppercase tracking-widest text-red-500">Output:</h3>
                    <div className="p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300 mb-12 text-left">
                    Pair values: 10 20 <br/>
                    Second pair: 5 15 <br/>
                    After swap: 5 15
                    </div>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4 text-red-500">Other useful points:</h3>
                    <ul className="space-y-2 text-neutral-300 list-none p-0 mb-16">
                        <li>Pairs can be nested: pair&lt;int, pair&lt;int, int&gt;&gt;</li>
                        <li>Pairs are heavily used in maps and sorting.</li>
                        <li>Pairs are compared lexicographically by default.</li>
                    </ul>
                </section>
                    <hr className="my-16 border-neutral-800" />

                <section>
                        <h2 className="text-3xl font-bold text-white mb-4">What is a tuple?</h2>
                        <p className="text-neutral-300 leading-8 mb-6">
                            A tuple in STL is a container that can store multiple values of different data types. Unlike pairs, tuples can hold more than two elements.
                        </p>

                        <h3 className="text-xl font-bold text-white mb-6 text-red-500">Functions in tuple:</h3>
                        <div className="space-y-4 text-neutral-300 mb-10">
                            <p><strong>make_tuple()</strong> – used to create a tuple.</p>
                            <p><strong>get&lt;index&gt;()</strong> – used to access elements (0-based index).</p>
                            <p><strong>tie()</strong> – used to unpack tuple values into variables.</p>
                            <p><strong>tuple_size</strong> – returns number of elements in tuple.</p>
                        </div>

                        <h3 className="text-xl font-bold text-white mt-12 mb-4 uppercase tracking-widest text-red-500">Code:</h3>
                        <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mb-4 text-left">
                        <span className="text-blue-500">#include</span><span className="text-orange-400">&lt;bits/stdc++.h&gt;</span><br/>
                        <span className="text-red-500">using namespace</span> std;<br/><br/>

                        <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>() &#123;<br/>
                        &nbsp;&nbsp;<span className="text-neutral-500">// Create a tuple</span><br/>
                        &nbsp;&nbsp;tuple&lt;<span className="text-red-500">int</span>, <span className="text-red-500">string</span>, <span className="text-red-500">double</span>&gt; t;<br/><br/>

                        &nbsp;&nbsp;t = make_tuple(<span className="text-blue-400">1</span>, <span className="text-orange-400">"Pranav"</span>, <span className="text-blue-400">99.5</span>);<br/><br/>

                        &nbsp;&nbsp;<span className="text-neutral-500">// Access elements</span><br/>
                        &nbsp;&nbsp;cout &lt;&lt; get&lt;<span className="text-blue-400">0</span>&gt;(t) &lt;&lt; endl;<br/>
                        &nbsp;&nbsp;cout &lt;&lt; get&lt;<span className="text-blue-400">1</span>&gt;(t) &lt;&lt; endl;<br/>
                        &nbsp;&nbsp;cout &lt;&lt; get&lt;<span className="text-blue-400">2</span>&gt;(t) &lt;&lt; endl;<br/><br/>

                        &nbsp;&nbsp;<span className="text-neutral-500">// Unpack using tie</span><br/>
                        &nbsp;&nbsp;<span className="text-red-500">int</span> a;<br/>
                        &nbsp;&nbsp;<span className="text-red-500">string</span> b;<br/>
                        &nbsp;&nbsp;<span className="text-red-500">double</span> c;<br/><br/>

                        &nbsp;&nbsp;tie(a, b, c) = t;<br/><br/>

                        &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Unpacked: "</span> &lt;&lt; a &lt;&lt; <span className="text-orange-400">" "</span> &lt;&lt; b &lt;&lt; <span className="text-orange-400">" "</span> &lt;&lt; c &lt;&lt; endl;<br/><br/>

                        &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br/>
                        &#125;
                        </div>

                        <h3 className="text-xl font-bold text-white mt-8 mb-4 uppercase tracking-widest text-red-500">Output:</h3>
                        <div className="p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300 mb-12 text-left">
                        1 <br/>
                        Pranav <br/>
                        99.5 <br/>
                        Unpacked: 1 Pranav 99.5
                        </div>

                        <h3 className="text-xl font-bold text-white mt-8 mb-4 text-red-500">Other useful points:</h3>
                        <ul className="space-y-2 text-neutral-300 list-none p-0 mb-16">
                            <li>Tuples can store multiple heterogeneous values.</li>
                            <li>Access is always done using get&lt;index&gt;().</li>
                            <li>Used less frequently in CP compared to pairs.</li>
                            <li>Useful when returning multiple values from a function.</li>
                        </ul>
                </section>
            </article>
            {/* Navigation Buttons */}
        <div className="mt-20 flex justify-between border-t border-neutral-800 pt-10">
            {/* Previous Lesson Button */}
            <Link href="/langroadmap/cpp/phase3/sets">
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
                            Sets in C++
                        </span>
                    </div>
                </motion.div>
            </Link>

            {/* Next Lesson Button */}
            <Link href="/langroadmap/cpp/phase3/stack-queue-deque-priority-queues">
                <motion.div
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-4 group cursor-pointer"
                >
                    <div className="text-right">
                        <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Next Lesson</span>
                        <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                            Stacks, Queues.. in C++
                        </span>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors">
                        <ArrowRight className="w-5 h-5 text-red-500" />
                    </div>
                </motion.div>
            </Link>
        </div>

        {/* Back to Top */}
        <AnimatePresence>
          {showTopBtn && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goToTop}
              className="fixed bottom-8 right-8 z-50 p-4 bg-red-600 text-white rounded-full shadow-lg border border-red-500/20"
            >
              <ArrowUp className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>
        </main>
    </div>
  );
}