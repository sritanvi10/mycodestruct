"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft, SlidersHorizontal, ArrowDownAZ, Filter, Zap, Terminal, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function SortingLesson() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e7eb] pb-20 font-sans text-[18px]">
      <main className="max-w-6xl mx-auto px-6 pt-16">
        <Link href="/langroadmap/java">
          <motion.div className="absolute top-8 left-8 z-50 flex items-center gap-2 cursor-pointer group">
            <ChevronLeft className="w-4 h-4 text-red-600" />
            <span className="text-xl font-black tracking-tighter text-red-600 uppercase">CodeStruct_</span>
          </motion.div>
        </Link>
        {/* Navigation */}
        <Link
          href="/langroadmap/java"
          className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors mt-10 mb-10 text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Java Roadmap
        </Link>

        <header className="mb-12 border-b border-neutral-800 pb-10 mt-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Sorting & <span className="text-red-600">Comparators_</span>
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl">
            Don't reinvent the wheel. Harness the optimized sorting algorithms built into the Java language for arrays and collections.
          </p>
        </header>

        <article className="prose prose-invert max-w-none space-y-20">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <SlidersHorizontal className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">1. Basic Sorting</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              Java uses different algorithms depending on the data. For primitives (like <code>int[]</code>), it uses <strong>Dual-Pivot Quicksort</strong>. For object collections, it uses <strong>TimSort</strong> (a hybrid of Merge Sort and Insertion Sort).
            </p>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm leading-7 shadow-2xl">
              <span className="text-neutral-500">// Sorting an Array</span><br/>
              <span className="text-red-500">int</span>[] arr = &#123;<span className="text-blue-400">5, 1, 9, 3</span>&#125;;<br/>
              Arrays.sort(arr);<br/><br/>
              <span className="text-neutral-500">// Sorting a List</span><br/>
              ArrayList&lt;String&gt; fruits = <span className="text-red-500">new</span> ArrayList&lt;&gt;(List.of(<span className="text-orange-400">"Pear", "Apple"</span>));<br/>
              Collections.sort(fruits);
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <Filter className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">2. Custom Sorting (Comparators)</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              What if you want to sort a list of <code>Employee</code> objects by their salary? Or sort strings by their length? You need a <strong>Comparator</strong>.
            </p>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm leading-7">
              List&lt;String&gt; names = Arrays.asList(<span className="text-orange-400">"Google", "Apple", "Microsoft"</span>);<br/><br/>
              <span className="text-neutral-500">// Sort by Length (Lambda Expression)</span><br/>
              Collections.sort(names, (s1, s2) -&gt; s1.length() - s2.length());<br/><br/>
              <span className="text-neutral-500">// Sort Descending</span><br/>
              Collections.sort(names, Collections.reverseOrder());
            </div>
          </section>

          <section className="bg-neutral-900/50 p-8 rounded-2xl border border-neutral-800">
            <h4 className="text-white font-bold mb-4 flex items-center gap-2"><ArrowDownAZ className="text-red-500" /> Comparable vs Comparator</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
              <div>
                <h5 className="text-white">Comparable</h5>
                <p className="text-neutral-400">Implemented <strong>inside</strong> the class. Defines the "natural" order. Uses <code>compareTo()</code>.</p>
              </div>
              <div>
                <h5 className="text-white">Comparator</h5>
                <p className="text-neutral-400">Defined <strong>externally</strong>. Allows for multiple different sorting logics for the same class.</p>
              </div>
            </div>
          </section>
        </article>
        {/* Footer Navigation */}
        <div className="mt-20 flex justify-between border-t border-neutral-800 pt-10">
          <Link href="/langroadmap/java/phase3/stack-queue-deque-priorityqueue">
            <div className="flex items-center gap-4 cursor-pointer group">
              <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors"><ChevronLeft className="text-red-500" /></div>
              <div><span className="text-xs text-neutral-500 uppercase block">Previous</span><span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">Stacks, Queues, Deques, and Priority Queues</span></div>
            </div>
          </Link>
          <Link href="/langroadmap/java/phase4/oop">
            <div className="flex items-center gap-4 cursor-pointer group text-right">
              <div><span className="text-xs text-neutral-500 uppercase block">Next</span><span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">Phase-4 Object-Oriented Programming in Java</span></div>
              <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors"><ArrowRight className="text-red-500" /></div>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}