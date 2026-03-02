"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Terminal, ChevronLeft } from "lucide-react";

export default function VariablesLesson() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e7eb] pb-20 font-sans">
      <main className="max-w-6xl mx-auto px-6 pt-16">
        {/* Direct Home Navigation - Consistent with Register Page */}
        <Link href="/">
            <motion.div
            className="absolute top-8 left-8 z-50 flex items-center gap-2 cursor-pointer group"
            >
            <ChevronLeft className="w-4 h-4 text-red-600"/>
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
            C++ Variables & Data Types
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed">
            A comprehensive guide to understanding how memory is allocated and managed in C++ using primitive types.
          </p>
        </header>

        {/* Article Body */}
        <article className="prose prose-invert max-w-none space-y-10">
          
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">What is a Variable?</h2>
            <p className="text-neutral-300 leading-7 text-[17px]">
              C++ is a strongly typed language, which means every variable must have a defined type. A variable is essentially a name given to a memory location. It is the basic unit of storage in a program.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Primitive Data Types</h2>
            <p className="text-neutral-300 mb-6 text-[17px]">
              The Standard Template Library (STL) and the core engine of C++ stand out because of their efficiency. These are the most commonly used data types by competitive programmers:
            </p>
            
            <ul className="space-y-4 text-neutral-300 list-disc ml-6 text-[17px]">
              <li><strong className="text-red-500">int:</strong> Used for integers (whole numbers). Occupies 4 bytes. Range: -2,147,483,648 to 2,147,483,647.</li>
              <li><strong className="text-red-500">long long:</strong> Used when integers exceed the `int` range. Occupies 8 bytes.</li>
              <li><strong className="text-red-500">float / double:</strong> Used for decimal numbers. `double` is preferred for higher precision.</li>
              <li><strong className="text-red-500">char:</strong> Stores a single character (e.g., 'a', 'Z'). Occupies 1 byte.</li>
              <li><strong className="text-red-500">string:</strong> Technically a class, but used to store sequences of characters.</li>
              <li><strong className="text-red-500">bool:</strong> Represents logical values: `true` or `false`.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Syntax Example</h2>
            <div className="bg-[#111] border border-neutral-800 rounded-lg p-5 font-mono text-sm overflow-x-auto leading-6">
              <span className="text-neutral-500">// Declaration and Initialization</span><br/>
              <span className="text-red-500">int</span> score = <span className="text-blue-400">100</span>;<br/>
              <span className="text-red-500">double</span> price = <span className="text-blue-400">99.99</span>;<br/>
              <span className="text-red-500">char</span> section = <span className="text-blue-400">'A'</span>;<br/>
              <span className="text-red-500">string</span> name = <span className="text-blue-400">"CodeStruct"</span>;
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}