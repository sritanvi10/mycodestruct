"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft, Layers, Type, Binary, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function ArraysStringsLesson() {
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
            Arrays & <span className="text-red-600">Strings_</span>
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl">
            Learn how to store multiple values in a single variable and handle text using character arrays and the C++ String class.
          </p>
        </header>

        <article className="prose prose-invert max-w-none space-y-16">
          
          {/* 1. Arrays in C++ */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Layers className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">1. Arrays in C++</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              An <strong>array</strong> is a fixed-size collection of elements of the same data type stored in <strong>contiguous memory locations</strong>. They allow you to store multiple values under a single name, accessible via an <strong>index</strong> starting at 0.
            </p>

            {/* 1D Arrays */}
            <div className="mt-12 space-y-6">
              <h3 className="text-2xl font-bold text-red-500 italic">A. 1D Arrays (Linear)</h3>
              <p className="text-neutral-300 leading-7">
                The simplest form of an array, representing a single row or a list of data.
              </p>
              
              <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl">
                <span className="text-red-500">int</span> nums[<span className="text-blue-400">3</span>] = &#123;<span className="text-blue-400">10, 20, 30</span>&#125;;<br/><br/>
                
                <span className="text-neutral-500">// 1. Printing all elements using a loop</span><br/>
                <span className="text-red-500">for</span>(<span className="text-red-500">int</span> i = <span className="text-blue-400">0</span>; i &lt; <span className="text-blue-400">3</span>; i++) &#123;<br/>
                &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Element at index "</span> &lt;&lt; i &lt;&lt; <span className="text-orange-400">": "</span> &lt;&lt; nums[i] &lt;&lt; endl;<br/>
                &#125;<br/><br/>

                <span className="text-neutral-500">// 2. Targeted Indexing</span><br/>
                cout &lt;&lt; <span className="text-orange-400">"Specific Point (Index 2): "</span> &lt;&lt; nums[<span className="text-blue-400">2</span>];
              </div>
              <div className="p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300">
                <span className="text-neutral-500 uppercase text-xs block mb-1">Output</span>
                Element at index 0: 10<br/>
                Element at index 1: 20<br/>
                Element at index 2: 30<br/>
                Specific Point (Index 2): 30
              </div>
            </div>

            {/* 2D Arrays */}
            <div className="mt-16 space-y-6">
              <h3 className="text-2xl font-bold text-red-500 italic">B. 2D Arrays (Matrix)</h3>
              <p className="text-neutral-300 leading-7">
                Often called a <strong>Matrix</strong>, a 2D array consists of rows and columns. Think of it like a grid or table.
              </p>
              
              <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl">
                <span className="text-red-500">int</span> matrix[<span className="text-blue-400">2</span>][<span className="text-blue-400">2</span>] = &#123; &#123;<span className="text-blue-400">1, 2</span>&#125;, &#123;<span className="text-blue-400">3, 4</span>&#125; &#125;;<br/><br/>

                <span className="text-neutral-500">// 1. Printing all elements (Nested Loops)</span><br/>
                <span className="text-red-500">for</span>(<span className="text-red-500">int</span> r = <span className="text-blue-400">0</span>; r &lt; <span className="text-blue-400">2</span>; r++) &#123;<br/>
                &nbsp;&nbsp;<span className="text-red-500">for</span>(<span className="text-red-500">int</span> c = <span className="text-blue-400">0</span>; c &lt; <span className="text-blue-400">2</span>; c++) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; matrix[r][c] &lt;&lt; <span className="text-orange-400">" "</span>;<br/>
                &nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;cout &lt;&lt; endl;<br/>
                &#125;<br/><br/>

                <span className="text-neutral-500">// 2. Targeted Indexing</span><br/>
                cout &lt;&lt; <span className="text-orange-400">"Value at Row 1, Col 0: "</span> &lt;&lt; matrix[<span className="text-blue-400">1</span>][<span className="text-blue-400">0</span>]; 
              </div>
              <div className="p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300">
                <span className="text-neutral-500 uppercase text-xs block mb-1">Output</span>
                1 2<br/>
                3 4<br/>
                Value at Row 1, Col 0: 3
              </div>
            </div>

            {/* 3D Arrays */}
            <div className="mt-16 space-y-6">
              <h3 className="text-2xl font-bold text-red-500 italic">C. 3D Arrays (Cube)</h3>
              <p className="text-neutral-300 leading-7">
                A 3D array is an <strong>array of 2D arrays</strong>. Imagine a stack of matrices forming a cube of data.
              </p>
              
              <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl">
                <span className="text-red-500">int</span> cube[<span className="text-blue-400">2</span>][<span className="text-blue-400">2</span>][<span className="text-blue-400">2</span>] = &#123; <br/>
                &nbsp;&nbsp;&#123; &#123;<span className="text-blue-400">1, 2</span>&#125;, &#123;<span className="text-blue-400">3, 4</span>&#125; &#125;,<br/>
                &nbsp;&nbsp;&#123; &#123;<span className="text-blue-400">5, 6</span>&#125;, &#123;<span className="text-blue-400">7, 8</span>&#125; &#125; <br/>
                &#125;;<br/><br/>

                <span className="text-neutral-500">// 1. Printing all elements (Triple Nested Loop)</span><br/>
                <span className="text-red-500">for</span>(<span className="text-red-500">int</span> d = <span className="text-blue-400">0</span>; d &lt; <span className="text-blue-400">2</span>; d++) &#123;<br/>
                &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Layer "</span> &lt;&lt; d &lt;&lt; <span className="text-orange-400">":"</span> &lt;&lt; endl;<br/>
                &nbsp;&nbsp;<span className="text-red-500">for</span>(<span className="text-red-500">int</span> r = <span className="text-blue-400">0</span>; r &lt; <span className="text-blue-400">2</span>; r++) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">for</span>(<span className="text-red-500">int</span> c = <span className="text-blue-400">0</span>; c &lt; <span className="text-blue-400">2</span>; c++) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; cube[d][r][c] &lt;&lt; <span className="text-orange-400">" "</span>;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; endl;<br/>
                &nbsp;&nbsp;&#125;<br/>
                &#125;<br/><br/>

                <span className="text-neutral-500">// 2. Targeted Indexing</span><br/>
                cout &lt;&lt; <span className="text-orange-400">"Deep Point (Layer 1, Row 1, Col 0): "</span> &lt;&lt; cube[<span className="text-blue-400">1</span>][<span className="text-blue-400">1</span>][<span className="text-blue-400">0</span>];
              </div>
              <div className="p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300">
                <span className="text-neutral-500 uppercase text-xs block mb-1">Output</span>
                Layer 0:<br/>
                1 2<br/>
                3 4<br/>
                Layer 1:<br/>
                5 6<br/>
                7 8<br/>
                Deep Point (Layer 1, Row 1, Col 0): 7
              </div>
            </div>
          </section>

          {/* 2. Strings in C++ */}
          <section>
            <div className="flex items-center gap-3 mb-4">
               <Type className="text-red-600 w-8 h-8" />
               <h2 className="text-3xl font-bold text-white italic m-0">2. Strings in C++</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              A <strong>string</strong> is a sequence of characters used to store text, such as names, words, or sentences. In C++, strings can be represented in two primary ways: <strong>Character Arrays</strong> (C-style) and the <strong>String Class</strong> (Modern C++).
            </p>
          </section>

          {/* 3. Character Arrays */}
          <section>
            <div className="flex items-center gap-3 mb-4">
               <Binary className="text-red-600 w-8 h-8" />
               <h2 className="text-2xl font-bold text-white m-0 text-red-500 italic">A. Character Arrays (C-style Strings)</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              A character array is an array that stores characters (<code>char</code>). When characters are stored together in an array and end with a <strong>null character (<code>'\0'</code>)</strong>, they form a string. The null character marks the end of the string in memory.
            </p>

            

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 my-6 shadow-2xl">
              <span className="text-neutral-500">// Syntax with Initialization</span><br/>
              <span className="text-red-500">char</span> name[] = <span className="text-orange-400">"Code"</span>;<br/><br/>
              <span className="text-neutral-500">// Behind the scenes:</span><br/>
              <span className="text-neutral-500">// &#123; 'C', 'o', 'd', 'e', '\0' &#125; <br/> // The null character '\0' is automatically added at the end of the string literal for the compiler to recognize where the string ends in memory. <br/></span>
              <span className="text-red-500">cout</span> &lt;&lt; name; <span className="text-neutral-500">// Output: Code</span>
            </div>
            <div className="mt-4 p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300">
              <span className="text-neutral-500 uppercase text-xs block mb-1">Output</span>
              Code
            </div>
          </section>

          {/* 4. String Class */}
          <section>
            <div className="flex items-center gap-3 mb-4">
               <Code2 className="text-red-600 w-8 h-8" />
               <h2 className="text-2xl font-bold text-white m-0 text-red-500 italic">B. String Class in C++</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              C++ provides a built-in <code>string</code> class in the standard library (<code>&lt;string&gt;</code>), which makes working with strings much easier and safer than character arrays. It handles memory automatically and allows for simple concatenation.
            </p>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 my-6 shadow-2xl">
              <span className="text-blue-500">#include</span> <span className="text-orange-400">&lt;string&gt;</span><br/>
              <span className="text-neutral-500">// Syntax with Initialization</span><br/>
              <span className="text-red-500">string</span> greeting = <span className="text-orange-400">"Hello C++"</span>;<br/>
              <span className="text-red-500">cout</span> &lt;&lt; greeting; <span className="text-neutral-500">// Output: Hello C++</span>
            </div>
            <div className="mt-4 p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300">
              <span className="text-neutral-500 uppercase text-xs block mb-1">Output</span>
              Hello C++
            </div>
          </section>

          {/* Summary Box */}
          <section>
            <div className="bg-red-900/5 border border-red-900/20 p-8 rounded-2xl">
               <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">SUMMARY</h4>
               <ul className="text-sm text-neutral-400 space-y-4 list-none p-0 m-0">
                 <li><span className="text-red-500 font-bold">Array:</span> A collection of elements of the same data type stored together.</li>
                 <li><span className="text-red-500 font-bold">String:</span> A sequence of characters used to store text.</li>
                 <li><span className="text-white font-bold">Two ways to represent strings:</span></li>
                 <li><span className="text-red-500 font-bold">String Class:</span> A modern C++ way to handle strings with built-in functionality and memory management.</li>
                 <li><span className="text-red-500 font-bold">Character Array:</span> An array of characters that forms a string ending with <code>'\0'</code>.</li>
               </ul>
            </div>
          </section>

        </article>

        {/* Pagination Section */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-neutral-800 pt-10">
          <Link href="/langroadmap/cpp/phase2/recursion" className="w-full md:w-auto">
            <motion.div whileHover={{ x: -5 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-4 group cursor-pointer text-left">
              <div className="w-12 h-12 shrink-0 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors">
                <ChevronLeft className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Previous Lesson</span>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">Recursion</span>
              </div>
            </motion.div>
          </Link>

          <Link href="/langroadmap/cpp/phase2/pointers" className="w-full md:w-auto">
            <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-4 group cursor-pointer text-right justify-end">
              <div>
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Next Lesson</span>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">Pointers & Memory</span>
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