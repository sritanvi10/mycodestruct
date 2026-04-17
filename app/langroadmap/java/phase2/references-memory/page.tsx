"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft, Database, HardDrive, Share2, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function JavaMemoryLesson() {
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
          href="/langroadmap/java"
          className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors mt-10 mb-10 text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Java Roadmap
        </Link>

        {/* Article Header */}
        <header className="mb-12 border-b border-neutral-800 pb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            References & <span className="text-red-600">Memory_</span>
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl">
            Understand how Java manages data under the hood. Learn the difference between Stack and Heap memory and how reference variables point to objects.
          </p>
        </header>

        <article className="prose prose-invert max-w-none space-y-16">
          
          {/* 1. Stack vs Heap */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Database className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">1. Stack vs. Heap Memory</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              Java divides memory into two primary sections. The <strong>Stack</strong> is used for static memory allocation (primitive variables and method execution), while the <strong>Heap</strong> is used for dynamic memory allocation (objects and arrays).
            </p>

            

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800">
                <h4 className="text-red-500 font-bold mb-2 uppercase text-xs tracking-widest">Stack Memory</h4>
                <ul className="text-sm text-neutral-400 space-y-2 list-disc pl-4">
                  <li>Stores local variables and primitive types.</li>
                  <li>Fast access; managed in LIFO (Last-In-First-Out) order.</li>
                  <li>Memory is reclaimed as soon as the method exits.</li>
                </ul>
              </div>
              <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800">
                <h4 className="text-red-500 font-bold mb-2 uppercase text-xs tracking-widest">Heap Memory</h4>
                <ul className="text-sm text-neutral-400 space-y-2 list-disc pl-4">
                  <li>Stores all objects and arrays (the "new" stuff).</li>
                  <li>Shared across the entire application.</li>
                  <li>Managed by the Garbage Collector.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 2. Reference Variables */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Share2 className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">2. Reference Variables</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              In Java, you never handle an object directly. You handle a <strong>Reference</strong>. When you create an object using <code>new</code>, the object is placed in the Heap, and the variable (located in the Stack) stores the <strong>memory address</strong> of that object.
            </p>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl">
              <span className="text-red-500">MyObject</span> obj1 = <span className="text-red-500">new</span> <span className="text-yellow-400">MyObject</span>();<br/>
              <span className="text-red-500">MyObject</span> obj2 = obj1; <span className="text-neutral-500">// obj2 now points to the SAME object as obj1</span><br/><br/>
              
              obj2.<span className="text-blue-400">value</span> = <span className="text-blue-400">50</span>;<br/>
              System.out.println(obj1.<span className="text-blue-400">value</span>); <span className="text-neutral-500">// Output: 50 (Because they share the same memory)</span>
            </div>
          </section>

          {/* 3. Garbage Collection */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Trash2 className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">3. Automatic Garbage Collection</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              Unlike C++, Java doesn't require you to manually delete objects. The <strong>Garbage Collector (GC)</strong> periodically looks at the Heap for objects that no longer have any references pointing to them. Once an object is unreachable, it is flagged for deletion to free up memory.
            </p>
            
            <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800 my-6">
              <p className="text-sm text-neutral-300 italic">
                <strong>Pro Tip:</strong> Setting a reference to <code>null</code> (e.g., <code>obj = null;</code>) makes the object it was pointing to eligible for Garbage Collection if no other variables are referencing it.
              </p>
            </div>
          </section>

          {/* Summary Box */}
          <section>
            <div className="bg-red-900/5 border border-red-900/20 p-8 rounded-2xl">
               <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">SUMMARY</h4>
               <ul className="text-sm text-neutral-400 space-y-4 list-none p-0 m-0">
                 <li><span className="text-red-500 font-bold">The Stack:</span> Home of local primitives and reference variables.</li>
                 <li><span className="text-red-500 font-bold">The Heap:</span> Home of all objects; much larger than the stack.</li>
                 <li><span className="text-red-500 font-bold">Pass-by-Value:</span> Java passes everything by value. For objects, it passes the <strong>value of the reference</strong> (the address).</li>
                 <li><span className="text-red-500 font-bold">No Pointers:</span> Java prevents manual memory address manipulation for security and simplicity.</li>
               </ul>
            </div>
          </section>

        </article>

        {/* Pagination Section */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-neutral-800 pt-10">
          <Link href="/langroadmap/java/phase2/arrays-strings" className="w-full md:w-auto">
            <motion.div whileHover={{ x: -5 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-4 group cursor-pointer text-left">
              <div className="w-12 h-12 shrink-0 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors">
                <ChevronLeft className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Previous Lesson</span>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">Arrays & Strings in Java</span>
              </div>
            </motion.div>
          </Link>

          <Link href="/langroadmap/java/phase3/arraylist-linkedlist" className="w-full md:w-auto">
            <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-4 group cursor-pointer text-right justify-end">
              <div>
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Next Lesson</span>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">ArrayList & LinkedList in Phase-3 of Java</span>
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