"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft, AlertOctagon, ShieldAlert, Zap, Terminal, HelpCircle, RefreshCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function ExceptionHandlingLesson() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

        <header className="mb-12 border-b border-neutral-800 pb-10 mt-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Exception <span className="text-red-600">Handling_</span>
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl">
            Don't let your code crash. Learn to anticipate errors, catch them gracefully, and ensure resources are closed properly.
          </p>
        </header>

        <article className="prose prose-invert max-w-none space-y-20">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <AlertOctagon className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">1. The Try-Catch-Finally Block</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              Exceptions are events that disrupt the normal flow of a program. Java uses the <code>try</code> block to wrap risky code and <code>catch</code> to handle the fallout. The <code>finally</code> block runs <strong>regardless</strong> of an error.
            </p>

            

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm leading-7 shadow-2xl">
              <span className="text-red-500">try</span> &#123;<br/>
              &nbsp;&nbsp;<span className="text-red-500">int</span> result = <span className="text-blue-400">10</span> / <span className="text-blue-400">0</span>; <span className="text-neutral-500">// Risky operation</span><br/>
              &#125; <span className="text-red-500">catch</span> (ArithmeticException e) &#123;<br/>
              &nbsp;&nbsp;System.err.println(<span className="text-orange-400">"Error: Cannot divide by zero"</span>);<br/>
              &#125; <span className="text-red-500">finally</span> &#123;<br/>
              &nbsp;&nbsp;System.out.println(<span className="text-orange-400">"Cleanup operations here."</span>);<br/>
              &#125;
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <ShieldAlert className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">2. Checked vs Unchecked</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800">
                <h4 className="text-red-500 font-bold mb-2">Checked Exceptions</h4>
                <p className="text-sm text-neutral-400">Enforced by the compiler. You <strong>must</strong> handle them or declare them. (e.g., <code>IOException</code>)</p>
              </div>
              <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800">
                <h4 className="text-red-500 font-bold mb-2">Unchecked Exceptions</h4>
                <p className="text-sm text-neutral-400">Occur at runtime. Not checked by compiler. Usually caused by logic errors. (e.g., <code>NullPointerException</code>)</p>
              </div>
            </div>
          </section>

          <section>
             <div className="flex items-center gap-3 mb-6">
              <RefreshCcw className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">3. Throw vs Throws</h2>
            </div>
            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm leading-7">
              <span className="text-neutral-500">// 'throws' declares that a method MIGHT throw an exception</span><br/>
              <span className="text-red-500">public void</span> <span className="text-blue-400">readFile</span>() <span className="text-red-500">throws</span> IOException &#123;<br/>
              &nbsp;&nbsp;<span className="text-neutral-500">// 'throw' is used to actually trigger an exception manually</span><br/>
              &nbsp;&nbsp;<span className="text-red-500">if</span> (fileNotFound) <span className="text-red-500">throw new</span> <span className="text-yellow-400">IOException</span>(<span className="text-orange-400">"Missing file"</span>);<br/>
              &#125;
            </div>
          </section>
        </article>
        <div className="mt-20 flex justify-between border-t border-neutral-800 pt-10">
          <Link href="/langroadmap/java/phase4/oop">
            <div className="flex items-center gap-4 cursor-pointer group">
              <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors"><ChevronLeft className="text-red-500" /></div>
              <div><span className="text-xs text-neutral-500 uppercase block">Previous</span><span className="text-xl font-bold text-white">Object-Oriented Programming in Java</span></div>
            </div>
          </Link>
          <Link href="/langroadmap/java/phase4/generics">
            <div className="flex items-center gap-4 cursor-pointer group text-right">
              <div><span className="text-xs text-neutral-500 uppercase block">Next</span><span className="text-xl font-bold text-white">Generics in Java</span></div>
              <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors"><ArrowRight className="text-red-500" /></div>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}