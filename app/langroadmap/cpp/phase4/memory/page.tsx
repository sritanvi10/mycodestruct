"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function MemoryManagement() {
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
        {/* Navigation */}
        <Link href="/">
          <motion.div className="absolute top-8 left-8 z-50 flex items-center gap-2 cursor-pointer group">
            <ChevronLeft className="w-4 h-4 text-red-600" />
            <span className="text-xl font-black tracking-tighter text-red-600 uppercase">
              CodeStruct_
            </span>
          </motion.div>
        </Link>

        <Link
          href="/langroadmap/cpp"
          className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors mt-10 mb-10 text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to C++ Roadmap
        </Link>

        {/* Header */}
        <header className="mb-12 border-b border-neutral-800 pb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Memory Management in C++
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed">
            Understanding how C++ handles memory allocation is the secret to writing efficient algorithms. We'll focus on Stack vs. Heap and Dynamic Allocation—the core of building Linked Lists and Trees.
          </p>
        </header>

        <article className="prose prose-invert max-w-none space-y-12">
          {/* Section 1: Introduction */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-4 italic text-left">The Two Types of Memory</h2>
            <p className="text-neutral-300 leading-8 text-[18px]">
              In C++, memory is divided into several segments, but for DSA, the two most important ones are the <strong>Stack</strong> and the <strong>Heap</strong>. Managing these correctly prevents <strong>Memory Leaks</strong> and <strong>Segmentation Faults</strong>.
            </p>
            
          </section>

          {/* Section 2: Stack vs Heap Table */}
          <section>
            <div className="overflow-x-auto rounded-lg border border-neutral-800 mb-8">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#111] text-neutral-400 uppercase text-[11px] tracking-widest border-b border-neutral-800">
                  <tr>
                    <th className="px-6 py-4">Feature</th>
                    <th className="px-6 py-4">Stack Memory</th>
                    <th className="px-6 py-4">Heap Memory</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-900 text-neutral-300">
                  <tr className="hover:bg-white/[0.02]">
                    <td className="px-6 py-4 font-bold text-white">Allocation</td>
                    <td className="px-6 py-4">Automatic (Managed by Compiler)</td>
                    <td className="px-6 py-4">Manual (Managed by Programmer)</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02]">
                    <td className="px-6 py-4 font-bold text-white">Lifetime</td>
                    <td className="px-6 py-4">Exists only within function scope</td>
                    <td className="px-6 py-4">Exists until explicitly deleted</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02]">
                    <td className="px-6 py-4 font-bold text-white">Speed</td>
                    <td className="px-6 py-4 text-400">Very Fast</td>
                    <td className="px-6 py-4 text-400">Slower than Stack</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02]">
                    <td className="px-6 py-4 font-bold text-white">Size</td>
                    <td className="px-6 py-4">Fixed/Limited</td>
                    <td className="px-6 py-4 text-400">Flexible/Large</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3: Dynamic Allocation (The 'new' keyword) */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 italic">1. Dynamic Memory Allocation</h2>
            <p className="text-neutral-300 leading-8 text-[17px]">
              When we build a Linked List, we don't know how many nodes we need until the program is running. This is where the <code>new</code> keyword comes in. It requests memory from the <strong>Heap</strong> at runtime.
            </p>
            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mt-6">
              <span className="text-neutral-500">// Static Allocation (Stack)</span><br />
              <span className="text-red-500">int</span> x = <span className="text-blue-400">10</span>;<br /><br />
              
              <span className="text-neutral-500">// Dynamic Allocation (Heap)</span><br />
              <span className="text-red-500">int</span>* ptr = <span className="text-red-500">new</span> <span className="text-red-500">int</span>(<span className="text-blue-400">20</span>);<br />
              <span className="text-neutral-500">// 'ptr' lives on the Stack, but it points to memory on the Heap.</span>
            </div>
          </section>

          {/* Section 4: Deallocation (The 'delete' keyword) */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 italic">2. Cleaning Up</h2>
            <p className="text-neutral-300 leading-8 text-[17px]">
              Unlike Java or Python, C++ does not have a garbage collector. If you use <code>new</code>, you <strong>must</strong> use <code>delete</code> once you're done with the memory. Failing to do so causes a <strong>Memory Leak</strong>.
            </p>
            <div className="bg-[#111] border border-red-900/30 rounded-lg p-5 font-mono text-sm leading-6 border-l-4 border-l-red-600">
              <span className="text-red-500">delete</span> ptr; <span className="text-neutral-500">// Frees the memory back to the Heap</span><br />
              ptr = <span className="text-blue-400">nullptr</span>; <span className="text-neutral-500">// Good practice: avoid dangling pointers</span>
            </div>
          </section>

          {/* Section 5: Real-world DSA Application */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">Memory in Linked Lists</h2>
            <p className="text-neutral-300 mb-6">
              Here is how we use dynamic memory to create a node that survives even after a function finishes:
            </p>
            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7">
              <span className="text-red-500">struct</span> <span className="text-yellow-400">Node</span> &#123;<br />
              &nbsp;&nbsp;<span className="text-red-500">int</span> data;<br />
              &nbsp;&nbsp;Node* next;<br />
              &#125;;<br /><br />
              <span className="text-red-500">void</span> <span className="text-yellow-400">createNode</span>() &#123;<br />
              &nbsp;&nbsp;<span className="text-neutral-500">// This node will persist because it's on the Heap</span><br />
              &nbsp;&nbsp;Node* newNode = <span className="text-red-500">new</span> Node &#123;<span className="text-blue-400">10</span>, <span className="text-blue-400">nullptr</span>&#125;;<br />
              &#125;
            </div>
          </section>
        </article>

        <div className="mt-20 flex justify-between border-t border-neutral-800 pt-10">
          {/* Previous Lesson */}
          <Link href="/langroadmap/cpp/phase4/oop">
            <motion.div
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 group cursor-pointer text-left"
            >
              <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors">
                <ChevronLeft className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Previous</span>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                  Object Oriented Programming in C++
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Next Lesson */}
          <Link href="/langroadmap/cpp/phase4/templates">
            <motion.div
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 group cursor-pointer text-right"
            >
              <div>
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Next Phase</span>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                  Templates in C++
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
            onClick={goToTop}
            className="fixed bottom-8 right-8 z-50 p-4 bg-red-600 text-white rounded-full shadow-lg border border-red-500/20"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}