"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft, Box, ShieldCheck, Zap, Code2, Repeat, Braces } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function GenericsLesson() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e7eb] pb-20 font-sans text-[18px]">
      <main className="max-w-6xl mx-auto px-6 pt-16">
        <Link href="/langroadmap/java">
          <motion.div className="absolute top-8 left-8 z-50 flex items-center gap-2 cursor-pointer group">
            <ChevronLeft className="w-4 h-4 text-red-600" />
            <span className="text-xl font-black tracking-tighter text-red-600 uppercase">CodeStruct_</span>
          </motion.div>
        </Link>

        <Link href="/langroadmap/java" className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors mt-10 mb-10 text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Java Roadmap
        </Link>

        <header className="mb-12 border-b border-neutral-800 pb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Java <span className="text-red-600">Generics_</span>
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl">
            Type safety without the boilerplate. Generics allow you to write classes and methods that work with any data type while catching type errors at compile time.
          </p>
        </header>

        <article className="prose prose-invert max-w-none space-y-20">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Braces className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">1. Generic Classes</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              A Generic Class can hold any object type. Instead of hardcoding <code>String</code> or <code>Integer</code>, we use a placeholder <code>&lt;T&gt;</code>.
            </p>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm leading-7 shadow-2xl">
              <span className="text-red-500">class</span> <span className="text-yellow-400">Box</span>&lt;T&gt; &#123;<br/>
              &nbsp;&nbsp;<span className="text-red-500">private</span> T content;<br/>
              &nbsp;&nbsp;<span className="text-red-500">public void</span> <span className="text-blue-400">set</span>(T item) &#123; <span className="text-red-500">this</span>.content = item; &#125;<br/>
              &nbsp;&nbsp;<span className="text-red-500">public</span> T <span className="text-blue-400">get</span>() &#123; <span className="text-red-500">return</span> content; &#125;<br/>
              &#125;<br/><br/>
              <span className="text-neutral-500">// Usage</span><br/>
              Box&lt;String&gt; stringBox = <span className="text-red-500">new</span> Box&lt;&gt;();<br/>
              stringBox.set(<span className="text-orange-400">"Hello Generics"</span>);
            </div>
          </section>

          <section className="bg-red-900/5 p-8 rounded-2xl border border-red-900/20">
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">WHY USE GENERICS?</h4>
            <div className="space-y-4">
              <div className="flex gap-4">
                <ShieldCheck className="text-red-500 shrink-0" />
                <p className="text-sm text-neutral-400 m-0"><strong>Compile-time Checking:</strong> No more <code>ClassCastException</code> at runtime.</p>
              </div>
              <div className="flex gap-4">
                <Repeat className="text-red-500 shrink-0" />
                <p className="text-sm text-neutral-400 m-0"><strong>Reusability:</strong> Write the logic once, use it for <code>Double</code>, <code>Employee</code>, or <code>User</code>.</p>
              </div>
            </div>
          </section>
        </article>
        <div className="mt-20 flex justify-between border-t border-neutral-800 pt-10">
                  <Link href="/langroadmap/java/phase4/exception-handling">
                    <div className="flex items-center gap-4 cursor-pointer group">
                      <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors"><ChevronLeft className="text-red-500" /></div>
                      <div><span className="text-xs text-neutral-500 uppercase block">Previous</span><span className="text-xl font-bold text-white">Exception Handling in Java</span></div>
                    </div>
                  </Link>
                  <Link href="/langroadmap/java/phase4/file-handling">
                    <div className="flex items-center gap-4 cursor-pointer group text-right">
                      <div><span className="text-xs text-neutral-500 uppercase block">Next</span><span className="text-xl font-bold text-white">File Handling in Java</span></div>
                      <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors"><ArrowRight className="text-red-500" /></div>
                    </div>
                  </Link>
        </div>
      </main>
    </div>
  );
}