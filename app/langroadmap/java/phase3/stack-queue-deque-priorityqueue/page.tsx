"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft, Layers, FastForward, Timer, Inbox, Repeat, AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function AdvancedStructuresLesson() {
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
            Linear <span className="text-red-600">Structures_</span>
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl">
            Control the order of data processing. Learn how Stacks, Queues, and Heaps drive the logic of complex applications.
          </p>
        </header>

        <article className="prose prose-invert max-w-none space-y-20">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Layers className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">1. Stack (LIFO)</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              A <strong>Stack</strong> follows the Last-In, First-Out principle. Imagine a stack of dinner plates; the last one you put on top is the first one you take off.
            </p>

            

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm leading-7">
              Stack&lt;String&gt; history = <span className="text-red-500">new</span> Stack&lt;&gt;();<br/>
              history.push(<span className="text-orange-400">"Home"</span>);<br/>
              history.push(<span className="text-orange-400">"Settings"</span>);<br/><br/>
              String current = history.pop(); <span className="text-neutral-500">// Removes "Settings"</span><br/>
              String top = history.peek(); <span className="text-neutral-500">// Views "Home" without removing</span>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <FastForward className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">2. Queue & Deque (FIFO)</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              A <strong>Queue</strong> is First-In, First-Out (like a line at the movies). A <strong>Deque</strong> (Double-Ended Queue) allows adding/removing from <strong>both ends</strong>.
            </p>

            <div className="bg-red-900/5 border border-red-900/20 p-6 rounded-xl my-6 flex gap-3">
              <AlertTriangle className="text-red-500 shrink-0" />
              <p className="text-sm text-neutral-400 m-0">
                In Java, we rarely use <code>new Queue()</code>. Instead, we use <code>Queue&lt;T&gt; q = new LinkedList&lt;&gt;();</code> or <code>ArrayDeque</code>.
              </p>
            </div>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm leading-7">
              Deque&lt;Integer&gt; dq = <span className="text-red-500">new</span> ArrayDeque&lt;&gt;();<br/>
              dq.addFirst(<span className="text-blue-400">1</span>);<br/>
              dq.addLast(<span className="text-blue-400">2</span>);<br/>
              <span className="text-red-500">int</span> first = dq.pollFirst(); <span className="text-neutral-500">// Gets 1</span>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <Timer className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">3. PriorityQueue (Min/Max Heap)</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              A <strong>PriorityQueue</strong> is used when elements have an associated "importance." By default, Java's PQ is a <strong>Min-Heap</strong> (smallest number comes out first).
            </p>

            

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm leading-7">
              <span className="text-neutral-500">// To create a Max-Heap (Largest first)</span><br/>
              PriorityQueue&lt;Integer&gt; maxHeap = <span className="text-red-500">new</span> PriorityQueue&lt;&gt;(Collections.reverseOrder());<br/><br/>
              maxHeap.add(<span className="text-blue-400">10</span>);<br/>
              maxHeap.add(<span className="text-blue-400">50</span>);<br/>
              System.out.println(maxHeap.poll()); <span className="text-neutral-500">// Output: 50</span>
            </div>
          </section>
        </article>
        {/* Footer Navigation */}
        <div className="mt-20 flex justify-between border-t border-neutral-800 pt-10">
          <Link href="/langroadmap/java/phase3/pairs">
            <div className="flex items-center gap-4 cursor-pointer group">
              <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors"><ChevronLeft className="text-red-500" /></div>
              <div><span className="text-xs text-neutral-500 uppercase block">Previous</span><span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">Pairs in Java</span></div>
            </div>
          </Link>
          <Link href="/langroadmap/java/phase3/sorting">
            <div className="flex items-center gap-4 cursor-pointer group text-right">
              <div><span className="text-xs text-neutral-500 uppercase block">Next</span><span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">Sorting in Java</span></div>
              <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors"><ArrowRight className="text-red-500" /></div>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}