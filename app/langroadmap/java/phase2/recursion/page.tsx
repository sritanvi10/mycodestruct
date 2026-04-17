"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft, GitMerge, StopCircle, RefreshCcw, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function JavaRecursionLesson() {
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
            Java <span className="text-red-600">Recursion_</span>
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl">
            Master the art of methods that call themselves. Break complex logic into elegant, self-referential solutions using the Java Call Stack.
          </p>
        </header>

        <article className="prose prose-invert max-w-none space-y-16">
          
          {/* 1. What is Recursion? */}
          <section>
            <div className="flex items-center gap-3 mb-4">
               <RefreshCcw className="text-red-600 w-8 h-8" />
               <h2 className="text-3xl font-bold text-white italic m-0">1. Recursion in Java</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              In Java, <strong>Recursion</strong> is a technique where a method calls itself to solve a smaller instance of the same problem. Think of it as a process that keeps "drilling down" into a task until it hits a rock-bottom limit. In the Java Virtual Machine (JVM), every recursive call creates a new <strong>Stack Frame</strong> in memory, which is why managing recursion properly is vital to avoid performance issues.
            </p>
            
          </section>

          {/* 2. Base Case */}
          <section>
            <div className="flex items-center gap-3 mb-4">
               <StopCircle className="text-red-600 w-8 h-8" />
               <h2 className="text-3xl font-bold text-white italic m-0">2. The Base Case</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              The <strong>Base Case</strong> is your exit strategy. It is a simple conditional check that returns a value without making further recursive calls. Without this, Java will throw a <code>StackOverflowError</code> because the method would occupy infinite memory space.
            </p>

            <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800 my-6">
              <h4 className="text-red-500 font-bold mb-4 uppercase text-xs tracking-widest">Java Base Case Example</h4>
              <div className="text-blue-400 font-mono text-sm leading-7">
                if (n == 0) &#123;<br/>
                &nbsp;&nbsp;return 1; // The simplest possible answer<br/>
                &#125;
              </div>
            </div>
          </section>

          {/* 3. Recursive Case */}
          <section>
            <div className="flex items-center gap-3 mb-4">
               <GitMerge className="text-red-600 w-8 h-8" />
               <h2 className="text-3xl font-bold text-white italic m-0">3. The Recursive Case</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              The <strong>Recursive Case</strong> is where the method logic resides. Here, the method calls itself but with a <strong>reduced</strong> argument. This ensures that with every step, the program gets closer to the Base Case.
            </p>
          </section>

          {/* 4. Full Implementation */}
          <section>
            <div className="flex items-center gap-3 mb-4">
               <Terminal className="text-red-600 w-8 h-8" />
               <h2 className="text-3xl font-bold text-white italic m-0">4. Implementation: Factorial in Java</h2>
            </div>
            
            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mb-4">
              <span className="text-red-500">public class</span> <span className="text-yellow-400">RecursionDemo</span> &#123;<br/>
              &nbsp;&nbsp;<span className="text-red-500">public static int</span> <span className="text-yellow-400">factorial</span>(<span className="text-red-500">int</span> n) &#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-neutral-500">// Base Case</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">if</span> (n &lt;= <span className="text-blue-400">1</span>) &#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">1</span>;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-neutral-500">// Recursive Case</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">else</span> &#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">return</span> n * <span className="text-yellow-400">factorial</span>(n - <span className="text-blue-400">1</span>);<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
              &nbsp;&nbsp;&#125;<br/><br/>

              &nbsp;&nbsp;<span className="text-red-500">public static void</span> <span className="text-yellow-400">main</span>(String[] args) &#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-yellow-400">factorial</span>(<span className="text-blue-400">5</span>)); <span className="text-neutral-500">// Prints: 120</span><br/>
              &nbsp;&nbsp;&#125;<br/>
              &#125;
            </div>
            
            <div className="p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300">
                <span className="text-neutral-500 uppercase text-xs block mb-1">Output</span>
                120
            </div>

            <div className="mt-10 bg-red-900/5 border border-red-900/20 p-8 rounded-2xl">
                <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Key Takeaways</h4>
                <ul className="text-sm text-neutral-400 space-y-4 list-none p-0 m-0">
                  <li><span className="text-red-500 font-bold">Traceability:</span> Use print statements to track how the stack grows.</li>
                  <li><span className="text-red-500 font-bold">Stack Depth:</span> Java has a default stack size; extremely deep recursion may require iterative solutions.</li>
                  <li><span className="text-red-500 font-bold">Memory:</span> Each call consumes memory until the base case is reached.</li>
                </ul>
            </div>
          </section>

        </article>

        {/* Pagination Section */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-neutral-800 pt-10">
          <Link href="/langroadmap/java/phase2/methods" className="w-full md:w-auto">
            <motion.div whileHover={{ x: -5 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-4 group cursor-pointer text-left">
              <div className="w-12 h-12 shrink-0 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors">
                <ChevronLeft className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Previous Lesson</span>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">Methods in Java</span>
              </div>
            </motion.div>
          </Link>

          <Link href="/langroadmap/java/phase2/arrays-strings" className="w-full md:w-auto">
            <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-4 group cursor-pointer text-right justify-end">
              <div>
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Next Lesson</span>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">Arrays & Strings in Java</span>
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