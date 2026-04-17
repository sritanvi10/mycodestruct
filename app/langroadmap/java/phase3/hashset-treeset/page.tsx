"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft, ShieldCheck, Target, Box, Filter, CheckCircle2, XCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function HashSetTreeSetLesson() {
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
            HashSet & <span className="text-red-600">TreeSet_</span>
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl">
            The ultimate filters. Ensure data integrity by preventing duplicates automatically using Java's Set interface.
          </p>
        </header>

        <article className="prose prose-invert max-w-none space-y-20">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">1. HashSet: Unique & Fast</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              A <strong>HashSet</strong> is a collection that stores only unique elements. It is the go-to structure when you want to filter out duplicates. <strong>Fun Fact:</strong> Internally, a HashSet actually creates a <code>HashMap</code> and uses your elements as the Keys!
            </p>

            <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800 my-8">
              <h4 className="text-white font-bold mb-4">Set Mathematics in Java</h4>
              <div className="flex flex-col gap-4 text-sm text-neutral-400">
                <div className="flex gap-4 items-start"><Filter className="text-red-500 w-5 h-5 shrink-0" /> <span><strong>Union:</strong> Use <code>setA.addAll(setB)</code> to combine two sets.</span></div>
                <div className="flex gap-4 items-start"><Box className="text-red-500 w-5 h-5 shrink-0" /> <span><strong>Intersection:</strong> Use <code>setA.retainAll(setB)</code> to keep only common elements.</span></div>
              </div>
            </div>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm leading-7">
              Set&lt;String&gt; set = <span className="text-red-500">new</span> HashSet&lt;&gt;();<br/>
              set.add(<span className="text-orange-400">"Apple"</span>);<br/>
              set.add(<span className="text-orange-400">"Banana"</span>);<br/>
              set.add(<span className="text-orange-400">"Apple"</span>); <span className="text-neutral-500">// Won't be added</span><br/><br/>
              System.out.println(set.contains(<span className="text-orange-400">"Apple"</span>)); <span className="text-neutral-500">// Output: true</span>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <Target className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">2. TreeSet: Sorted Uniqueness</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              If you need a unique list of items that stays sorted at all times, use <strong>TreeSet</strong>. Like TreeMap, it uses a tree structure, making it slower than HashSet but infinitely more organized.
            </p>

            

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm leading-7">
              TreeSet&lt;Integer&gt; nums = <span className="text-red-500">new</span> TreeSet&lt;&gt;();<br/>
              nums.add(<span className="text-blue-400">100</span>); nums.add(<span className="text-blue-400">10</span>); nums.add(<span className="text-blue-400">50</span>);<br/><br/>
              <span className="text-neutral-500">// Iterates in order: 10, 50, 100</span><br/>
              nums.forEach(n -&gt; System.out.println(n));
            </div>
          </section>

          <section className="bg-red-900/5 p-8 rounded-2xl border border-red-900/20">
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Key Differences Summary</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-500 w-5 h-5" />
                <span className="text-neutral-400"><strong>HashSet:</strong> Best performance (O(1)), no order.</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-500 w-5 h-5" />
                <span className="text-neutral-400"><strong>LinkedHashSet:</strong> Slightly slower, but maintains <strong>Insertion Order</strong>.</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-500 w-5 h-5" />
                <span className="text-neutral-400"><strong>TreeSet:</strong> Slowest (O(log n)), keeps elements <strong>Sorted</strong>.</span>
              </div>
            </div>
          </section>
        </article>
        {/* Footer Navigation */}
        <div className="mt-20 flex justify-between border-t border-neutral-800 pt-10">
          <Link href="/langroadmap/java/phase3/hashmap-treemap">
            <div className="flex items-center gap-4 cursor-pointer group">
              <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors"><ChevronLeft className="text-red-500" /></div>
              <div><span className="text-xs text-neutral-500 uppercase block">Previous</span><span className="text-xl font-bold text-white">HashMap & TreeMap</span></div>
            </div>
          </Link>
          <Link href="/langroadmap/java/phase3/pairs">
            <div className="flex items-center gap-4 cursor-pointer group text-right">
              <div><span className="text-xs text-neutral-500 uppercase block">Next</span><span className="text-xl font-bold text-white">Pairs in Java</span></div>
              <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors"><ArrowRight className="text-red-500" /></div>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}