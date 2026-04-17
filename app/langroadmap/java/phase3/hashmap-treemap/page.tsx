"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft, Search, SortAsc, Hash, Layers, AlertCircle, Terminal, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function HashMapTreeMapLesson() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

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
            HashMap & <span className="text-red-600">TreeMap_</span>
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl">
            Dictionaries of the Java world. Learn to store data in key-value pairs with lightning-fast hashing or organized tree sorting.
          </p>
        </header>

        <article className="prose prose-invert max-w-none space-y-20">
          {/* Section 1: Hashing Logic */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Hash className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">1. HashMap: The Power of Hashing</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              A <strong>HashMap</strong> uses a technique called <strong>Hashing</strong>. It takes a key, converts it into an integer (hashcode), and maps that to a specific index in an array called a "bucket."
            </p>

            

            <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800 my-8">
              <h4 className="text-white font-bold mb-4">Core Hashing Concepts</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 m-0 text-sm text-neutral-400">
                <li className="p-3 border border-neutral-800 rounded bg-black/30"><strong>Hash Collision:</strong> When two different keys produce the same index. Java handles this using a LinkedList (or Tree) at that bucket.</li>
                <li className="p-3 border border-neutral-800 rounded bg-black/30"><strong>Load Factor:</strong> Usually 0.75. When the map is 75% full, it doubles in size to keep operations fast.</li>
              </ul>
            </div>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm leading-7">
              Map&lt;String, String&gt; capitals = <span className="text-red-500">new</span> HashMap&lt;&gt;();<br/><br/>
              capitals.put(<span className="text-orange-400">"USA"</span>, <span className="text-orange-400">"Washington D.C."</span>);<br/>
              capitals.put(<span className="text-orange-400">"India"</span>, <span className="text-orange-400">"New Delhi"</span>);<br/><br/>
              <span className="text-neutral-500">// O(1) Search</span><br/>
              <span className="text-red-500">if</span> (capitals.containsKey(<span className="text-orange-400">"USA"</span>)) &#123;<br/>
              &nbsp;&nbsp;System.out.println(capitals.get(<span className="text-orange-400">"USA"</span>));<br/>
              &#125;<br/><br/>
              <span className="text-neutral-500">// Iterating through keys and values</span><br/>
              <span className="text-red-500">for</span> (Map.Entry&lt;String, String&gt; entry : capitals.entrySet()) &#123;<br/>
              &nbsp;&nbsp;System.out.println(entry.getKey() + <span className="text-orange-400">" : "</span> + entry.getValue());<br/>
              &#125;
            </div>
          </section>

          {/* Section 2: TreeMap Sorting */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <SortAsc className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">2. TreeMap: Sorted Maps</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              While HashMap is fast, it's messy—order is random. <strong>TreeMap</strong> implements the <code>SortedMap</code> interface. It uses a <strong>Red-Black Tree</strong> structure to keep keys sorted naturally (Alphabetical for strings, numeric for integers).
            </p>

            

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm leading-7">
              TreeMap&lt;Integer, String&gt; sortedMap = <span className="text-red-500">new</span> TreeMap&lt;&gt;();<br/>
              sortedMap.put(<span className="text-blue-400">50</span>, <span className="text-orange-400">"Low"</span>);<br/>
              sortedMap.put(<span className="text-blue-400">100</span>, <span className="text-orange-400">"High"</span>);<br/>
              sortedMap.put(<span className="text-blue-400">10</span>, <span className="text-orange-400">"Critical"</span>);<br/><br/>
              <span className="text-neutral-500">// The keys will ALWAYS print in order: 10, 50, 100</span><br/>
              System.out.println(sortedMap.keySet());
            </div>
          </section>

          {/* Section 3: The hashCode() and equals() Contract */}
          <section className="bg-neutral-900/30 p-8 rounded-2xl border border-neutral-800">
            <h3 className="text-white font-bold mb-4 flex items-center gap-2"><AlertCircle className="text-red-500" /> The Map Contract</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              When using a custom object (like a <code>User</code> class) as a Key in a HashMap, you <strong>must</strong> override <code>hashCode()</code> and <code>equals()</code>. If two objects are equal, they must return the same hashcode. If you fail to do this, your map will "lose" objects or store duplicates of the "same" user.
            </p>
          </section>

          {/* Detailed Table */}
          <section>
            <h3 className="text-white font-bold mb-6">Map Comparison</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-black border border-neutral-800 rounded-xl">
                <h4 className="text-red-500 m-0 mb-2">HashMap</h4>
                <ul className="text-sm text-neutral-400 space-y-2 list-none p-0">
                  <li>🚀 <strong>Speed:</strong> O(1) Average</li>
                  <li>🌑 <strong>Order:</strong> Unordered</li>
                  <li>🚫 <strong>Nulls:</strong> Allows one null key</li>
                </ul>
              </div>
              <div className="p-6 bg-black border border-neutral-800 rounded-xl">
                <h4 className="text-red-500 m-0 mb-2">TreeMap</h4>
                <ul className="text-sm text-neutral-400 space-y-2 list-none p-0">
                  <li>📉 <strong>Speed:</strong> O(log n)</li>
                  <li>📶 <strong>Order:</strong> Sorted</li>
                  <li>❌ <strong>Nulls:</strong> No null keys allowed</li>
                </ul>
              </div>
            </div>
          </section>
        </article>

        {/* Footer Navigation */}
        <div className="mt-20 flex justify-between border-t border-neutral-800 pt-10">
          <Link href="/langroadmap/java/phase3/arraylist-linkedlist">
            <div className="flex items-center gap-4 cursor-pointer group">
              <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors"><ChevronLeft className="text-red-500" /></div>
              <div><span className="text-xs text-neutral-500 uppercase block">Previous</span><span className="text-xl font-bold text-white">ArrayList & LinkedList</span></div>
            </div>
          </Link>
          <Link href="/langroadmap/java/phase3/hashset-treeset">
            <div className="flex items-center gap-4 cursor-pointer group text-right">
              <div><span className="text-xs text-neutral-500 uppercase block">Next</span><span className="text-xl font-bold text-white">HashSet & TreeSet</span></div>
              <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors"><ArrowRight className="text-red-500" /></div>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}