"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function TemplatesLesson() {
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
            C++ Templates (Generics)
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed">
            Stop writing the same code twice. Templates allow you to write generic functions and classes that work with any data type, which is the secret behind the C++ STL.
          </p>
        </header>

        <article className="prose prose-invert max-w-none space-y-12">
          {/* Section 1: The Concept */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-4 italic text-left">The Blueprint of Blueprints</h2>
            <p className="text-neutral-300 leading-8 text-[18px]">
              Imagine you built a perfect <strong>Stack</strong> data structure for integers. Now you suddenly need one for strings. Without templates, you'd have to copy-paste the whole class and change every <code>int</code> to <code>string</code>. 
              <br /><br />
              <strong>Templates</strong> allow you to pass the <strong>Data Type</strong> as a parameter, just like you pass values to a function.
            </p>
            
          </section>

          {/* Section 2: Function Templates */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Function Templates</h2>
            <p className="text-neutral-300 mb-6 text-[17px]">
              Used to create a single function that can handle multiple types (int, float, char, etc.).
            </p>
            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl">
              <span className="text-blue-500">template</span> &lt;<span className="text-red-500">typename</span> T&gt;<br />
              <span className="text-red-500">T</span> <span className="text-yellow-400">myMax</span>(T a, T b) &#123;<br />
              &nbsp;&nbsp;<span className="text-red-500">return</span> (a &gt; b) ? a : b;<br />
              &#125;<br /><br />
              <span className="text-neutral-500">// Usage:</span><br />
              cout &lt;&lt; <span className="text-yellow-400">myMax</span>&lt;<span className="text-red-500">int</span>&gt;(<span className="text-blue-400">3</span>, <span className="text-blue-400">7</span>); <span className="text-neutral-500">// T becomes int</span><br />
              cout &lt;&lt; <span className="text-yellow-400">myMax</span>&lt;<span className="text-red-500">double</span>&gt;(<span className="text-blue-400">3.5</span>, <span className="text-blue-400">2.1</span>); <span className="text-neutral-500">// T becomes double</span>
            </div>
          </section>

          {/* Section 3: Class Templates (Critical for DSA) */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Class Templates</h2>
            <p className="text-neutral-300 leading-8 text-[17px]">
              This is how we build generic Nodes for Linked Lists or Trees. The placeholder <code>T</code> represents the type of data the structure will hold.
            </p>
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 mt-6">
              <h4 className="text-red-500 font-bold mb-4 uppercase text-xs tracking-widest">Generic Node Structure</h4>
              <div className="bg-black p-4 rounded-lg font-mono text-sm leading-7 text-blue-300">
                <span className="text-blue-500">template</span> &lt;<span className="text-red-500">typename</span> T&gt;<br />
                <span className="text-red-500">class</span> <span className="text-yellow-400">Node</span> &#123;<br />
                &nbsp;&nbsp;<span className="text-red-500">public:</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;T data;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;Node* next;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">Node</span>(T val) &#123; data = val; next = <span className="text-blue-400">nullptr</span>; &#125;<br />
                &#125;;
              </div>
            </div>
          </section>

          {/* Section 4: Why "T"? */}
          <section className="p-6 bg-neutral-900 border border-neutral-800 rounded-2xl">
            <h2 className="text-xl font-bold text-white mb-3">What is "T"?</h2>
            <p className="text-neutral-400 leading-7">
              There is nothing magical about the letter <code>T</code>. It is just a naming convention standing for <strong>"Type"</strong>. You could write <code>template &lt;typename Data&gt;</code> and use <code>Data</code> everywhere instead. However, in competitive programming and professional C++, <code>T</code> is the universal standard.
            </p>
          </section>

          {/* Section 5: Connection to STL */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">Relationship with STL</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 border border-neutral-800 rounded-xl bg-[#0d0d0d]">
                <h4 className="text-white font-bold mb-2">Standard Template Library</h4>
                <p className="text-neutral-400 text-sm leading-6">
                  The "T" in <strong>STL</strong> stands for Template. Every time you write <code>vector&lt;int&gt;</code>, you are utilizing a template.
                </p>
              </div>
              <div className="p-5 border border-neutral-800 rounded-xl bg-[#0d0d0d]">
                <h4 className="text-white font-bold mb-2">Type Safety</h4>
                <p className="text-neutral-400 text-sm leading-6">
                  Templates are checked at compile-time. If you try to put a <code>string</code> into a <code>Node&lt;int&gt;</code>, C++ will catch the error before you even run the code.
                </p>
              </div>
            </div>
          </section>
        </article>

        {/* Footer Navigation */}
        <div className="mt-20 flex justify-between border-t border-neutral-800 pt-10">
          <Link href="/langroadmap/cpp/phase4/memory">
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
                  Memory Management
                </span>
              </div>
            </motion.div>
          </Link>

          <Link href="/langroadmap/cpp/phase4/file-handling">
            <motion.div
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 group cursor-pointer text-right"
            >
              <div>
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Next Phase</span>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                  File Handling in C++
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