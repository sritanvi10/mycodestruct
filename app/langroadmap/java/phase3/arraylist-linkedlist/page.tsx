"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft, List, Activity, Repeat, Zap, AlertTriangle, Code2, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function ArrayListLinkedListLesson() {
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
        {/* Navigation */}
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
            ArrayList & <span className="text-red-600">LinkedList_</span>
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl">
            Go beyond fixed-size arrays. Master the dynamic resizing mechanism of ArrayLists and the pointer-based node architecture of LinkedLists.
          </p>
        </header>

        <article className="prose prose-invert max-w-none space-y-20">
          {/* Section 1: ArrayList Deep Dive */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <List className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">1. ArrayList: Dynamic Arrays</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              An <strong>ArrayList</strong> is essentially a "smart" array. In Java, standard arrays have a fixed size. The ArrayList class uses a standard array internally, but when it runs out of space, it automatically creates a larger array (usually 1.5x the size) and copies the elements over.
            </p>

            

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8 text-center">
              <div className="p-4 bg-neutral-900/50 border border-neutral-800 rounded-lg">
                <h5 className="text-red-500 font-bold m-0">Access</h5>
                <p className="text-2xl text-white font-mono">O(1)</p>
              </div>
              <div className="p-4 bg-neutral-900/50 border border-neutral-800 rounded-lg">
                <h5 className="text-red-500 font-bold m-0">Addition</h5>
                <p className="text-2xl text-white font-mono">O(1)*</p>
              </div>
              <div className="p-4 bg-neutral-900/50 border border-neutral-800 rounded-lg">
                <h5 className="text-red-500 font-bold m-0">Removal</h5>
                <p className="text-2xl text-white font-mono">O(n)</p>
              </div>
            </div>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm leading-7 shadow-2xl">
              <span className="text-neutral-500">// Initialize with specific type (Generics)</span><br/>
              ArrayList&lt;Integer&gt; scores = <span className="text-red-500">new</span> ArrayList&lt;&gt;();<br/><br/>
              <span className="text-neutral-500">// Common Operations</span><br/>
              scores.add(<span className="text-blue-400">95</span>); <span className="text-neutral-500">// Adds to end</span><br/>
              scores.add(<span className="text-blue-400">0</span>, <span className="text-blue-400">100</span>); <span className="text-neutral-500">// Adds at index 0 (shifts others)</span><br/>
              scores.set(<span className="text-blue-400">1</span>, <span className="text-blue-400">98</span>); <span className="text-neutral-500">// Updates index 1</span><br/>
              <span className="text-red-500">int</span> val = scores.get(<span className="text-blue-400">0</span>); <span className="text-neutral-500">// Retrieval</span><br/>
              scores.remove(Integer.valueOf(<span className="text-blue-400">95</span>)); <span className="text-neutral-500">// Remove by value</span>
            </div>
          </section>

          {/* Section 2: LinkedList Architecture */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Activity className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">2. LinkedList: Node-Based List</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              A <strong>LinkedList</strong> in Java is a <strong>doubly-linked list</strong>. It doesn't use a contiguous block of memory. Instead, it uses nodes. Each node contains the data, a <code>next</code> pointer, and a <code>prev</code> pointer.
            </p>

            

            <div className="bg-red-900/5 border border-red-900/20 p-6 rounded-xl my-6">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="text-red-500 w-5 h-5" />
                <h4 className="text-white font-bold m-0">When to use LinkedList?</h4>
              </div>
              <p className="text-sm text-neutral-400 m-0">
                Despite popular belief, ArrayList is almost always faster due to <strong>CPU Cache Locality</strong>. Use LinkedList only if you are performing constant-time insertions/deletions at the very beginning or end (e.g., implementing a Deque).
              </p>
            </div>
          </section>

          {/* Section 3: Iterators & Concurrent Modification */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Repeat className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">3. Iterators and Safe Loops</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              When looping through a list, you cannot remove elements using a standard for-each loop; this triggers a <code>ConcurrentModificationException</code>. To safely remove while iterating, you must use an <strong>Iterator</strong>.
            </p>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm leading-7 shadow-2xl">
              List&lt;String&gt; names = <span className="text-red-500">new</span> LinkedList&lt;&gt;();<br/>
              names.add(<span className="text-orange-400">"Alice"</span>); names.add(<span className="text-orange-400">"Bob"</span>);<br/><br/>
              <span className="text-neutral-500">// THE WRONG WAY:</span><br/>
              <span className="text-red-500">for</span> (String n : names) &#123;<br/>
              &nbsp;&nbsp;<span className="text-red-500">if</span> (n.equals(<span className="text-orange-400">"Bob"</span>)) names.remove(n); <span className="text-red-500">// CRASH!</span><br/>
              &#125;<br/><br/>
              <span className="text-neutral-500">// THE RIGHT WAY (Iterator):</span><br/>
              Iterator&lt;String&gt; it = names.iterator();<br/>
              <span className="text-red-500">while</span> (it.hasNext()) &#123;<br/>
              &nbsp;&nbsp;String n = it.next();<br/>
              &nbsp;&nbsp;<span className="text-red-500">if</span> (n.equals(<span className="text-orange-400">"Bob"</span>)) it.remove(); <span className="text-neutral-500">// Safe removal</span><br/>
              &#125;
            </div>
          </section>

          {/* Table Comparison */}
          <section className="mt-10">
            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">The Showdown: ArrayList vs LinkedList</h3>
            <div className="overflow-x-auto border border-neutral-800 rounded-xl">
              <table className="w-full text-left border-collapse">
                <thead className="bg-neutral-900">
                  <tr>
                    <th className="p-4 border-b border-neutral-800 text-red-500">Feature</th>
                    <th className="p-4 border-b border-neutral-800 text-white">ArrayList</th>
                    <th className="p-4 border-b border-neutral-800 text-white">LinkedList</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-400">
                  <tr>
                    <td className="p-4 border-b border-neutral-800 font-bold">Internal Structure</td>
                    <td className="p-4 border-b border-neutral-800">Dynamic Array</td>
                    <td className="p-4 border-b border-neutral-800">Doubly Linked List</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-neutral-800 font-bold">Memory Overhead</td>
                    <td className="p-4 border-b border-neutral-800">Low</td>
                    <td className="p-4 border-b border-neutral-800">High (Pointers for every node)</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-neutral-800 font-bold">Best Use Case</td>
                    <td className="p-4 border-b border-neutral-800">Searching / Storing Data</td>
                    <td className="p-4 border-b border-neutral-800">Queue / Frequent head edits</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4: Advanced Tips */}
          <section className="bg-red-900/5 border border-red-900/20 p-8 rounded-2xl">
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">PERFORMANCE TIPS</h4>
            <ul className="text-sm text-neutral-400 space-y-4 list-none p-0">
              <li className="flex gap-3"><Zap className="w-5 h-5 text-red-500 shrink-0" /> <span><strong>Initial Capacity:</strong> If you know you'll store 1000 items, use <code>new ArrayList&lt;&gt;(1000)</code> to prevent costly re-sizes.</span></li>
              <li className="flex gap-3"><Code2 className="w-5 h-5 text-red-500 shrink-0" /> <span><strong>Interface Programming:</strong> Always declare as <code>List&lt;String&gt; list = new ArrayList&lt;&gt;();</code> so you can switch implementations easily later.</span></li>
            </ul>
          </section>
        </article>

        {/* Footer Navigation */}
        <div className="mt-20 flex justify-between border-t border-neutral-800 pt-10">
          <Link href="/langroadmap/java/phase2/references-memory">
            <div className="flex items-center gap-4 cursor-pointer group">
              <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors"><ChevronLeft className="text-red-500" /></div>
              <div><span className="text-xs text-neutral-500 uppercase block">Previous</span><span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">References & Memory in Phase-2 of Java</span></div>
            </div>
          </Link>
          <Link href="/langroadmap/java/phase3/hashmap-treemap">
            <div className="flex items-center gap-4 cursor-pointer group text-right">
              <div><span className="text-xs text-neutral-500 uppercase block">Next</span><span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">HashMap & TreeMap in Java</span></div>
              <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors"><ArrowRight className="text-red-500" /></div>
            </div>
          </Link>
        </div>
      </main>

      <AnimatePresence>
        {showTopBtn && (
          <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={goToTop} className="fixed bottom-8 right-8 p-4 bg-red-600 text-white rounded-full shadow-lg"><ArrowUp /></motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}