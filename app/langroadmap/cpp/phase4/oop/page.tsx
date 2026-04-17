"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function OOPIntroduction() {
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
            OOP for DSA in C++
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed">
            We are going to cover OOPS(Object Oriented Programming) as much as required for DSA only. These are the essential Object-Oriented concepts required to build custom data structures like Linked Lists, Trees, and Graphs.
          </p>
        </header>

        <article className="prose prose-invert max-w-none space-y-12">
          {/* Section 1: Why OOP for DSA? */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-4 italic text-left">Why OOP for DSA?</h2>
            <p className="text-neutral-300 leading-8 text-[18px]">
              In Data Structures, we often need to create <strong>Custom Types</strong>. For example, a "Node" in a Linked List needs to store both a <code>value</code> (int/char) and a <code>pointer</code> to the next node. OOP allows us to wrap these different data types into a single unit.
            </p>
          </section>

          {/* Section 2: Classes and Objects */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">1. Classes & Objects</h2>
            <p className="text-neutral-300 mb-6 text-[17px]">
              A <strong>Class</strong> is a blueprint (like a map of a house), and an <strong>Object</strong> is the actual instance (the physical house).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 bg-neutral-900/50 rounded-xl border border-neutral-800">
                <h4 className="text-red-500 font-bold mb-2 uppercase text-xs tracking-widest">The Blueprint (Class)</h4>
                <pre className="text-blue-400 font-mono text-sm">
{`class Node {
  public:
    int data;
    Node* next;
};`}
                </pre>
              </div>
              <div className="p-4 bg-neutral-900/50 rounded-xl border border-neutral-800">
                <h4 className="text-red-500 font-bold mb-2 uppercase text-xs tracking-widest">The Instance (Object)</h4>
                <pre className="text-blue-400 font-mono text-sm">
{`Node n1; 
n1.data = 10;
n1.next = NULL;`}
                </pre>
              </div>
            </div>
          </section>

          {/* Section 3: Constructors */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Constructors</h2>
            <p className="text-neutral-300 leading-8 text-[17px]">
              A <strong>Constructor</strong> is a special function that runs automatically when an object is created. In DSA, we use them to initialize node values immediately.
            </p>
            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl">
              <span className="text-red-500">class</span> <span className="text-yellow-400">Node</span> &#123;<br />
              &nbsp;&nbsp;<span className="text-red-500">public:</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">int</span> data;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;Node* next;<br /><br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-neutral-500">// Constructor</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">Node</span>(<span className="text-red-500">int</span> val) &#123;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data = val;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;next = <span className="text-blue-400">nullptr</span>;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
              &#125;;
            </div>
          </section>

          {/* Section 4: The 'this' Keyword & Access Modifiers */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Access Modifiers</h2>
              <p className="text-neutral-400 text-[16px] mb-4 leading-6">
                Controls who can access the data.
              </p>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li><strong className="text-red-500">public:</strong> Accessible from anywhere. (Most used in DSA for simplicity)</li>
                <li><strong className="text-red-500">private:</strong> Only accessible within the class.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">The 'this' Pointer</h2>
              <p className="text-neutral-400 text-[16px] mb-4 leading-6">
                A pointer that points to the current object. Useful when parameter names match class variable names.
              </p>
              <div className="bg-[#111] border border-neutral-800 rounded-lg p-4 font-mono text-xs text-blue-300">
                this-&gt;data = data;
              </div>
            </div>
          </section>

          {/* Section 5: Pillars of OOP (Simplified for DSA) */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">Four Pillars (DSA Context)</h2>
            <div className="overflow-x-auto rounded-lg border border-neutral-800">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#111] text-neutral-400 uppercase text-[11px] tracking-widest border-b border-neutral-800">
                  <tr>
                    <th className="px-6 py-4">Pillar</th>
                    <th className="px-6 py-4">Meaning for DSA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-900 text-neutral-300">
                  <tr className="hover:bg-white/[0.02]">
                    <td className="px-6 py-4 font-bold text-white">Encapsulation</td>
                    <td className="px-6 py-4">Grouping the data and functions into a Class.</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02]">
                    <td className="px-6 py-4 font-bold text-white">Abstraction</td>
                    <td className="px-6 py-4">Hiding internal logic (e.g., calling <code>list.sort()</code> without knowing the inner code).</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02]">
                    <td className="px-6 py-4 font-bold text-white">Inheritance</td>
                    <td className="px-6 py-4">Creating a class from another (e.g., a "Square" inheriting from "Shape").</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02]">
                    <td className="px-6 py-4 font-bold text-white">Polymorphism</td>
                    <td className="px-6 py-4">One function name, many forms (Function Overloading).</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </article>

        <div className="mt-20 flex justify-between border-t border-neutral-800 pt-10">
                {/* Previous Lesson Button */}
                <Link href="/langroadmap/cpp/phase3/useful-functions-sorting-algorithms">
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
                                Useful Functions & ... in Phase-3 of C++
                            </span>
                        </div>
                    </motion.div>
                </Link>

                {/* Next Lesson Button */}
                <Link href="/langroadmap/cpp/phase4/memory">
                    <motion.div
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-4 group cursor-pointer"
                    >
                        <div className="text-right">
                            <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Next Lesson</span>
                            <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                                Memory Management
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
