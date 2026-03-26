"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft, Target, MousePointer2, Link2, Box } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function PointersLesson() {
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
            Pointers & <span className="text-red-600">Memory_</span>
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl">
            Understand how C++ interacts directly with memory addresses through references and pointers - the building blocks of high-performance programming.
          </p>
        </header>

        <article className="prose prose-invert max-w-none space-y-16">
          
          {/* 1. References in C++ */}
          <section>
            <div className="flex items-center gap-3 mb-4">
               <Link2 className="text-red-600 w-8 h-8" />
               <h2 className="text-3xl font-bold text-white italic m-0">1. References in C++</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              A <strong>reference</strong> in C++ is an alternative name (alias) for an existing variable. It does not create a new variable; instead, it refers to the same memory location as the original variable. When we change the value using the reference, the original variable also changes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
              <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800">
                <h4 className="text-red-500 font-bold mb-4 uppercase text-xs tracking-widest">Syntax</h4>
                <div className="text-blue-400 font-mono text-sm leading-7">
                  data_type &reference_name = variable_name;
                </div>
              </div>
              <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm leading-7">
                <span className="text-red-500">int</span> x = <span className="text-blue-400">10</span>;<br/>
                <span className="text-red-500">int</span> &ref = x; <span className="text-neutral-500">// ref is an alias for x</span><br/>
                ref = <span className="text-blue-400">20</span>; <span className="text-neutral-500">// x is now 20</span>
              </div>
            </div>
            
          </section>

          {/* 2. Pointers in C++ */}
          <section>
            <div className="flex items-center gap-3 mb-4">
               <MousePointer2 className="text-red-600 w-8 h-8" />
               <h2 className="text-3xl font-bold text-white italic m-0">2. Pointers in C++</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              A <strong>pointer</strong> is a variable that stores the <strong>memory address</strong> of another variable. Instead of storing a value directly, a pointer "points" to the location where the value is kept. Pointers are essential for dynamic memory allocation and efficient data handling.
            </p>

            <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800 my-6 max-w-md">
              <h4 className="text-red-500 font-bold mb-4 uppercase text-xs tracking-widest">Pointer Syntax</h4>
              <div className="text-blue-400 font-mono text-sm leading-7">
                data_type *pointer_name;
              </div>
            </div>
          </section>

          {/* 3. Initialization & Dereferencing */}
          <section className="space-y-12">
            <div>
               <div className="flex items-center gap-3 mb-4">
                  <Target className="text-red-600 w-8 h-8" />
                  <h3 className="text-2xl font-bold text-white m-0">3. Initialization & Dereferencing</h3>
               </div>
               <p className="text-neutral-300 leading-8">
                 To initialize a pointer, we use the <strong>address-of operator (&)</strong>. To access the value stored at that address, we use the <strong>dereference operator (*)</strong>.
               </p>
            </div>
            

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl">
              <span className="text-red-500">int</span> x = <span className="text-blue-400">10</span>;<br/>
              <span className="text-red-500">int</span> *ptr = &x; <span className="text-neutral-500">// ptr stores address of x</span><br/><br/>

              <span className="text-neutral-500">// 1. Print Address</span><br/>
              cout &lt;&lt; <span className="text-orange-400">"Address of x: "</span> &lt;&lt; ptr &lt;&lt; endl;<br/><br/>

              <span className="text-neutral-500">// 2. Dereferencing (Accessing Value)</span><br/>
              cout &lt;&lt; <span className="text-orange-400">"Value via ptr: "</span> &lt;&lt; *ptr &lt;&lt; endl;
            </div>

            <div className="p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300">
              <span className="text-neutral-500 uppercase text-xs block mb-1">Output</span>
              Address of x: 0x7ffee4b2<br/>
              Value via ptr: 10
            </div>
          </section>

          {/* Summary Box */}
          <section>
            <div className="bg-red-900/5 border border-red-900/20 p-8 rounded-2xl">
               <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest flex items-center gap-2">
                SUMMARY
               </h4>
               <ul className="text-sm text-neutral-400 space-y-4 list-none p-0 m-0">
                 <li><span className="text-red-500 font-bold">Reference:</span> Another name (alias) for an existing variable. Both use the same memory spot.</li>
                 <li><span className="text-red-500 font-bold">Pointer:</span> A variable that holds a "map" (address) to where another variable lives.</li>
                 <li><span className="text-red-500 font-bold">Dereferencing:</span> Using the pointer to "go to" the address and grab the actual value stored there.</li>
               </ul>
            </div>
          </section>

        </article>

        {/* Pagination Section */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-neutral-800 pt-10">
          <Link href="/langroadmap/cpp/phase2/arrays-strings" className="w-full md:w-auto">
            <motion.div whileHover={{ x: -5 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-4 group cursor-pointer text-left">
              <div className="w-12 h-12 shrink-0 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors">
                <ChevronLeft className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Previous Lesson</span>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">Arrays & Strings</span>
              </div>
            </motion.div>
          </Link>

          <Link href="/langroadmap/cpp/phase3/vectors" className="w-full md:w-auto">
            <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-4 group cursor-pointer text-right justify-end">
              <div>
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Next Lesson</span>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">Phase-3 Vectors, Lists...</span>
              </div>
              <div className="w-12 h-12 shrink-0 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors">
                <ArrowRight className="w-5 h-5 text-red-500" />
              </div>
            </motion.div>
          </Link>
        </div>
      </main>

      {/* Back to Top Button */}
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
    </div>
  );
}