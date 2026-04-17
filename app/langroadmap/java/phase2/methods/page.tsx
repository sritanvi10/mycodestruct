"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function JavaMethodsLesson() {
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
            Java <span className="text-red-600">Methods_</span>
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed">
            The building blocks of Java logic: learning how to define, call, and pass data through modular methods within classes.
          </p>
        </header>

        <article className="prose prose-invert max-w-none space-y-16">
          
          {/* 1. Understanding Methods */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-4">1. Understanding Methods</h2>
            <p className="text-neutral-300 leading-8">
              In Java, we use the term <strong>Method</strong> instead of function. A method is a collection of statements that are grouped together to perform an operation. Unlike C++, where you can define global functions, every method in Java <strong>must be part of a class</strong>. This modular approach allows you to write code once and reuse it across different parts of your application.
            </p>
          </section>

          {/* 2. Syntax & Key Components */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">2. Syntax & Key Components</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-[16px]">
              <div className="p-6 bg-neutral-900/50 rounded-xl border border-neutral-800">
                <h4 className="text-red-500 font-bold mb-4 uppercase text-xs tracking-widest">Method Structure</h4>
                <div className="text-blue-400 font-mono text-sm leading-7">
                  modifier return_type methodName(parameters) &#123;<br/>
                  &nbsp;&nbsp;// Method Body<br/>
                  &nbsp;&nbsp;return value;<br/>
                  &#125;
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-neutral-300 leading-6">
                  <strong className="text-white">Modifier:</strong> Defines access (e.g., <code>public</code>, <code>private</code>, or <code>static</code>).
                </p>
                <p className="text-neutral-300 leading-6">
                  <strong className="text-white">Return Type:</strong> The data type the method returns. Use <code>void</code> if no value is returned.
                </p>
                <p className="text-neutral-300 leading-6">
                  <strong className="text-white">Parameters:</strong> The input data the method accepts.
                </p>
              </div>
            </div>
          </section>

          {/* 3. Example Implementation */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">3. Example Implementation</h2>
            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl">
              <span className="text-red-500">public class</span> <span className="text-yellow-400">Main</span> &#123;<br />
              <br />
              &nbsp;&nbsp;<span className="text-neutral-500">// Static method to check even numbers</span><br />
              &nbsp;&nbsp;<span className="text-red-500">public static boolean</span> <span className="text-yellow-400">isEven</span>(<span className="text-red-500">int</span> num) &#123;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">return</span> num % <span className="text-blue-400">2</span> == <span className="text-blue-400">0</span>;<br />
              &nbsp;&nbsp;&#125;<br /><br />

              &nbsp;&nbsp;<span className="text-red-500">public static void</span> <span className="text-yellow-400">main</span>(String[] args) &#123;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">int</span> n = <span className="text-blue-400">24</span>;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">if</span>(<span className="text-yellow-400">isEven</span>(n)) &#123;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(n + <span className="text-orange-400">" is even."</span>);<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
              &nbsp;&nbsp;&#125;<br />
              &#125;
            </div>
            <div className="mt-4 p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300">
              <span className="text-neutral-500 uppercase text-xs block mb-1">Output</span>
              24 is even.
            </div>
          </section>

          {/* 4. Memory Behavior: Pass by Value */}
          <section className="space-y-10">
            <h2 className="text-2xl font-semibold text-white italic underline decoration-red-600/50">4. Memory & Parameter Passing</h2>
            
            <div className="space-y-4">
              <p className="text-neutral-300 leading-7">
                Java is <strong>strictly Pass-by-Value</strong>. This means when you pass a variable to a method, a copy is made. 
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-neutral-900/30 border border-neutral-800 rounded-2xl">
                    <h3 className="text-white text-lg font-bold mb-2">Primitive Types</h3>
                    <p className="text-neutral-400 text-sm mb-4">Passing an <code>int</code> or <code>double</code> passes a copy of the actual value. Changing it inside doesn't affect the original.</p>
                </div>
                <div className="p-6 bg-neutral-900/30 border border-neutral-800 rounded-2xl">
                    <h3 className="text-white text-lg font-bold mb-2">Reference Types</h3>
                    <p className="text-neutral-400 text-sm mb-4">Passing an object passes a copy of the <strong>reference address</strong>. You can modify the object's contents, but you cannot change which object the original variable points to.</p>
                </div>
              </div>
            </div>

            {/* Pass by Value Comparison */}
            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7">
              <span className="text-red-500">static void</span> <span className="text-yellow-400">modify</span>(<span className="text-red-500">int</span> x) &#123; <br/>
              &nbsp;&nbsp;x = <span className="text-blue-400">100</span>; <span className="text-neutral-500">// Changes local copy only</span><br/>
              &#125;<br/><br/>
              
              <span className="text-red-500">public static void</span> <span className="text-yellow-400">main</span>(String[] args) &#123;<br/>
              &nbsp;&nbsp;<span className="text-red-500">int</span> num = <span className="text-blue-400">10</span>;<br/>
              &nbsp;&nbsp;<span className="text-yellow-400">modify</span>(num);<br/>
              &nbsp;&nbsp;System.out.println(num); <span className="text-neutral-500">// Still prints 10</span><br/>
              &#125;
            </div>
          </section>

        </article>

        {/* Navigation Footer */}
        <div className="mt-20 flex justify-between border-t border-neutral-800 pt-10 text-[16px]">
            <Link href="/langroadmap/java/phase1/control-flow">
                <motion.div
                    whileHover={{ x: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-4 group cursor-pointer text-left"
                >
                <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors">
                    <ChevronLeft className="w-5 h-5 text-red-500" />
                </div>
                <div className="text-left">
                    <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Previous Lesson</span>
                    <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                    Control Flow in Phase-2 of Java
                    </span>
                </div>
                </motion.div>
            </Link>

            <Link href="/langroadmap/java/phase2/recursion">
                <motion.div
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-4 group cursor-pointer"
                >
                <div className="text-right">
                    <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Next Lesson</span>
                    <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                    Recursion in Java
                    </span>
                </div>
                <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors">
                    <ArrowRight className="w-5 h-5 text-red-500" />
                </div>
                </motion.div>
            </Link>
        </div>
      </main>

      {/* Back to Top */}
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