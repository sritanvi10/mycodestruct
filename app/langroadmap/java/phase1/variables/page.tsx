"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function JavaVariablesLesson() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e7eb] pb-20 font-sans">
      <main className="max-w-6xl mx-auto px-6 pt-16">
        {/* Direct Home Navigation */}
        <Link href="/">
          <motion.div
            className="absolute top-8 left-8 z-50 flex items-center gap-2 cursor-pointer group"
          >
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
            Java Variables & Data Types
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed">
            A comprehensive guide to understanding how data is stored and typed in the Java Virtual Machine (JVM).
          </p>
        </header>

        {/* Article Body */}
        <article className="prose prose-invert max-w-none space-y-12">
          {/* Section 1: Definition */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-4 italic">Understanding Variables in Java</h2>
            <p className="text-neutral-300 leading-8 text-[18px]">
              In Java, a <strong>variable</strong> is a container which holds the value while the Java program is executed. Java is a <strong>strongly-typed</strong> language, meaning every variable must be declared with a data type before it can be used. This ensures type safety and allows the JVM to allocate the exact amount of memory needed. Unlike some languages, Java variables have distinct scopes (Instance, Static, and Local) that dictate their lifecycle.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 bg-neutral-900/50 rounded-xl border border-neutral-800">
                <h4 className="text-red-500 font-bold mb-2 uppercase text-xs tracking-widest">Syntax</h4>
                <code className="text-blue-400 font-mono text-sm">type variableName = value;</code>
              </div>
              <div className="p-4 bg-neutral-900/50 rounded-xl border border-neutral-800">
                <h4 className="text-red-500 font-bold mb-2 uppercase text-xs tracking-widest">Example</h4>
                <code className="text-blue-400 font-mono text-sm">int speedLimit = 60;</code>
              </div>
            </div>
          </section>

          {/* Section 2: Data Type Classification */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">Classification of Data Types</h2>
            <p className="text-neutral-300 mb-6 text-[17px]">
              Java data types are strictly divided into two main categories:
            </p>

            <div className="overflow-x-auto rounded-lg border border-neutral-800 mb-8">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#111] text-neutral-400 uppercase text-[11px] tracking-widest border-b border-neutral-800">
                  <tr>
                    <th className="px-6 py-4">Type Category</th>
                    <th className="px-6 py-4">Description</th>
                    <th className="px-6 py-4">Examples</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-900 text-neutral-300">
                  <tr className="hover:bg-white/[0.02]">
                    <td className="px-6 py-4 font-bold text-white">Primitive</td>
                    <td className="px-6 py-4">Predefined by the language; holds simple values.</td>
                    <td className="px-6 py-4 font-mono text-red-400 text-xs">byte, short, int, long, float, double, boolean, char</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02]">
                    <td className="px-6 py-4 font-bold text-white">Non-Primitive (Reference)</td>
                    <td className="px-6 py-4">Refers to objects; created by the programmer.</td>
                    <td className="px-6 py-4 font-mono text-red-400 text-xs">String, Array, Class, Interface</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3: Primitive Deep Dive */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Primitive Data Types</h2>
            <ul className="space-y-4 text-neutral-300 list-disc ml-6 text-[17px]">
              <li><strong className="text-red-500">byte:</strong> 1 byte. Stores whole numbers from -128 to 127.</li>
              <li><strong className="text-red-500">short:</strong> 2 bytes. Stores whole numbers from -32,768 to 32,767.</li>
              <li><strong className="text-red-500">int:</strong> 4 bytes. Stores whole numbers from -2.1B to 2.1B. <span className="text-neutral-500">(Default for whole numbers)</span></li>
              <li><strong className="text-red-500">long:</strong> 8 bytes. Stores huge whole numbers. Ends with 'L' (e.g., <code className="text-blue-300">long dist = 150000000L;</code>)</li>
              <li><strong className="text-red-500">float:</strong> 4 bytes. Sufficient for 6-7 decimal digits. Ends with 'f'.</li>
              <li><strong className="text-red-500">double:</strong> 8 bytes. Sufficient for 15 decimal digits. <span className="text-neutral-500">(Default for decimals)</span></li>
              <li><strong className="text-red-500">boolean:</strong> 1 bit. Stores <code>true</code> or <code>false</code>.</li>
              <li><strong className="text-red-500">char:</strong> 2 bytes. Stores a single character/ASCII value using Unicode.</li>

              <div className="bg-red-900/10 border-l-4 border-red-600 p-6 mt-8">
                <h4 className="text-white font-bold mb-2">The "Why" of Memory Optimization</h4>
                <p className="text-neutral-400 leading-relaxed">
                  You might wonder: <strong>"Why use 'byte' when I can use 'int'?"</strong>. 
                  In modern software, memory might seem infinite, but in high-performance Java applications (like Android apps or Big Data processing), using a <code>byte[]</code> instead of an <code>int[]</code> saves 75% of memory. As a professional developer, choosing the smallest possible type for your data range is a hallmark of code efficiency.
                </p>
              </div>
            </ul>
          </section>

          {/* Section 4: Reference Types */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Non-Primitive Types</h2>
              <p className="text-neutral-400 text-sm mb-4 leading-6">These types don't store the value itself, but a <strong>reference</strong> (address) to the location in memory where the object is stored.</p>
              <div className="bg-[#111] border border-neutral-800 rounded-lg p-5 font-mono text-1xl leading-6">
                <span className="text-red-500 font-bold">String</span> name = <span className="text-orange-400">"Java"</span>;<br />
                <span className="text-red-500 font-bold">int</span>[] scores = &#123;<span className="text-blue-400">90, 85</span>&#125;;
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Wrapper Classes</h2>
              <p className="text-neutral-400 text-sm mb-4 leading-6">Java provides objects for primitives to be used in Collections (like ArrayList). <span className="text-red-500 font-bold italic">(Essential for DSA)</span>.</p>
              <div className="bg-[#111] border border-neutral-800 rounded-lg p-5 font-mono text-1xl leading-6">
                <span className="text-red-500 font-bold">Integer</span> myInt = <span className="text-blue-400">5</span>;<br />
                <span className="text-red-500 font-bold">Double</span> myDouble = <span className="text-blue-400">5.99</span>;
              </div>
            </div>
          </section>

          {/* Section 5: Implementation Example */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Java Implementation Example</h2>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl">
              <span className="text-red-500">public class</span> <span className="text-yellow-400">Main</span> &#123;<br />
              &nbsp;&nbsp;<span className="text-red-500">public static void</span> <span className="text-yellow-400">main</span>(String[] args) &#123;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-neutral-500">// Variable Declaration</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">int</span> age = <span className="text-blue-400">21</span>;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">double</span> price = <span className="text-blue-400">99.99</span>;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">char</span> letter = <span className="text-blue-400">'J'</span>;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">boolean</span> isJavaFun = <span className="text-blue-400">true</span>;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">String</span> msg = <span className="text-orange-400">"Hello Java"</span>;<br /><br />

              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-neutral-500">// Output using System.out.println</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-orange-400">"Age: "</span> + age);<br />
              &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-orange-400">"Price: "</span> + price);<br />
              &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-orange-400">"Grade: "</span> + letter);<br />
              &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-orange-400">"Message: "</span> + msg);<br />
              &nbsp;&nbsp;&#125;<br />
              &#125;
            </div>

            <div className="mt-4">
              <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2 ml-1">Console Output</h4>
              <div className="bg-[#111] border border-neutral-800 rounded-lg p-4 font-mono text-sm text-neutral-300">
                Age: 21<br />
                Price: 99.99<br />
                Grade: J<br />
                Message: Hello Java
              </div>
            </div>
          </section>
        </article>

        {/* Next Lesson Button */}
        <div className="mt-20 flex justify-end border-t border-neutral-800 pt-10">
          <Link href="/langroadmap/java/phase1/io">
            <motion.div
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 group cursor-pointer"
            >
              <div className="text-right">
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Next Lesson</span>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                  Input & Output in Java
                </span>
              </div>
              <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors">
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
            className="fixed bottom-8 right-8 z-50 p-4 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-colors border border-red-500/20"
            aria-label="Back to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}