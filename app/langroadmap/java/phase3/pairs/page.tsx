"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft, Link2, Share2, Code2, Terminal, Info, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function PairsLesson() {
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
            Java <span className="text-red-600">Pairs_</span>
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl">
            How to couple data effectively in a language that famously forgot to include a built-in Pair class.
          </p>
        </header>

        <article className="prose prose-invert max-w-none space-y-20">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Link2 className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">1. Why no Pair class?</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              C++ has <code>std::pair</code>, but Java's designers preferred specific classes for specific data. However, in Competitive Programming or rapid prototyping, you often need to return two values from a method.
            </p>

            <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800 my-8 flex gap-4">
              <Info className="text-red-500 shrink-0" />
              <p className="text-sm text-neutral-400 m-0 leading-relaxed">
                Java 14+ introduced <strong>Records</strong>, which is the modern, cleanest way to handle pairs. Before Java 14, we used <code>AbstractMap.SimpleEntry</code>.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <Share2 className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">2. Implementation Styles</h2>
            </div>
            
            <h4 className="text-red-500 uppercase text-xs tracking-widest mb-4">A. The Modern Way (Records)</h4>
            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm leading-7 mb-10">
              <span className="text-red-500">public record</span> Pair&lt;K, V&gt;(K key, V value) &#123; &#125;<br/><br/>
              <span className="text-neutral-500">// Usage</span><br/>
              Pair&lt;String, Integer&gt; student = <span className="text-red-500">new</span> Pair&lt;&gt;(<span className="text-orange-400">"John"</span>, <span className="text-blue-400">88</span>);<br/>
              System.out.println(student.key());
            </div>

            <h4 className="text-red-500 uppercase text-xs tracking-widest mb-4">B. The Standard Library Way</h4>
            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm leading-7">
              <span className="text-blue-500">import</span> java.util.AbstractMap.SimpleEntry;<br/><br/>
              SimpleEntry&lt;Integer, Integer&gt; point = <span className="text-red-500">new</span> SimpleEntry&lt;&gt;(<span className="text-blue-400">10</span>, <span className="text-blue-400">20</span>);<br/>
              <span className="text-red-500">int</span> x = point.getKey();<br/>
              <span className="text-red-500">int</span> y = point.getValue();
            </div>
          </section>

          <section className="bg-red-900/5 p-8 rounded-2xl border border-red-900/20">
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">When to create a class instead?</h4>
            <p className="text-sm text-neutral-400 mb-0">
              If your data is more than just a temporary couple (e.g., <code>Latitude</code> and <code>Longitude</code>), always create a dedicated <code>Location</code> class. It makes the code more readable and easier to debug.
            </p>
          </section>
        </article>
        {/* Footer Navigation */}
        <div className="mt-20 flex justify-between border-t border-neutral-800 pt-10">
          <Link href="/langroadmap/java/phase3/hashset-treeset">
            <div className="flex items-center gap-4 cursor-pointer group">
              <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors"><ChevronLeft className="text-red-500" /></div>
              <div><span className="text-xs text-neutral-500 uppercase block">Previous</span><span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">HashSet & TreeSet in Java</span></div>
            </div>
          </Link>
          <Link href="/langroadmap/java/phase3/stack-queue-deque-priorityqueue">
            <div className="flex items-center gap-4 cursor-pointer group text-right">
              <div><span className="text-xs text-neutral-500 uppercase block">Next</span><span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">Stack, Queue, Deque, and PriorityQueue in Java</span></div>
              <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors"><ArrowRight className="text-red-500" /></div>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}