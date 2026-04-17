"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft, Cpu, Box, Share2, Layers, Shield, Zap, Terminal, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function OOPLesson() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

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

        <header className="mb-12 border-b border-neutral-800 pb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            The Four Pillars of <span className="text-red-600">OOP_</span>
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl">
            Object-Oriented Programming is the soul of Java. Transition from writing scripts to building scalable, modular systems using Classes and Objects.
          </p>
        </header>

        <article className="prose prose-invert max-w-none space-y-20">
          {/* Section 1: Inheritance */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Share2 className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">1. Inheritance: The "Is-A" Relationship</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              Inheritance allows a <strong>Subclass</strong> to acquire properties and methods from a <strong>Superclass</strong>. This promotes code reusability. In Java, we use the <code>extends</code> keyword.
            </p>
            
            

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm leading-7 shadow-2xl mt-6">
              <span className="text-neutral-500">// Superclass</span><br/>
              <span className="text-red-500">class</span> <span className="text-yellow-400">Animal</span> &#123;<br/>
              &nbsp;&nbsp;<span className="text-red-500">void</span> <span className="text-blue-400">eat</span>() &#123; System.out.println(<span className="text-orange-400">"Eating..."</span>); &#125;<br/>
              &#125;<br/><br/>
              <span className="text-neutral-500">// Subclass</span><br/>
              <span className="text-red-500">class</span> <span className="text-yellow-400">Dog</span> <span className="text-red-500">extends</span> <span className="text-yellow-400">Animal</span> &#123;<br/>
              &nbsp;&nbsp;<span className="text-red-500">void</span> <span className="text-blue-400">bark</span>() &#123; System.out.println(<span className="text-orange-400">"Woof!"</span>); &#125;<br/>
              &#125;
            </div>
          </section>

          {/* Section 2: Polymorphism */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Layers className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">2. Polymorphism: Many Forms</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              Polymorphism allows one action to behave differently based on the object performing it. 
              <strong>Method Overriding</strong> (Runtime) and <strong>Method Overloading</strong> (Compile-time) are the two ways Java achieves this.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              <div className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl">
                <h4 className="text-red-500 font-bold m-0 mb-2">Static Polymorphism</h4>
                <p className="text-sm text-neutral-400">Multiple methods with the same name but different parameters within the same class.</p>
              </div>
              <div className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl">
                <h4 className="text-red-500 font-bold m-0 mb-2">Dynamic Polymorphism</h4>
                <p className="text-sm text-neutral-400">A subclass provides a specific implementation of a method already defined in its parent.</p>
              </div>
            </div>
          </section>

          {/* Section 3: Encapsulation & Abstraction */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Shield className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">3. Encapsulation & Abstraction</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              <strong>Encapsulation</strong> is about data hiding (using <code>private</code> variables and <code>getters/setters</code>). 
              <strong>Abstraction</strong> focuses on hiding internal complexity (using <code>abstract</code> classes and <code>interfaces</code>).
            </p>

            <div className="bg-red-900/5 border border-red-900/20 p-8 rounded-2xl">
              <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">WHY OOP MATTERS?</h4>
              <ul className="text-sm text-neutral-400 space-y-4 list-none p-0">
                <li className="flex gap-3"><Zap className="w-5 h-5 text-red-500 shrink-0" /> <span><strong>DRY (Don't Repeat Yourself):</strong> Through inheritance.</span></li>
                <li className="flex gap-3"><Code2 className="w-5 h-5 text-red-500 shrink-0" /> <span><strong>Security:</strong> Protecting data via encapsulation.</span></li>
                <li className="flex gap-3"><Box className="text-red-500 w-5 h-5 shrink-0" /> <span><strong>Flexibility:</strong> Swapping implementations via polymorphism.</span></li>
              </ul>
            </div>
          </section>
        </article>

        <div className="mt-20 flex justify-between border-t border-neutral-800 pt-10">
          <Link href="/langroadmap/java/phase3/sorting">
            <div className="flex items-center gap-4 cursor-pointer group">
              <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors"><ChevronLeft className="text-red-500" /></div>
              <div><span className="text-xs text-neutral-500 uppercase block">Previous</span><span className="text-xl font-bold text-white">Sorting in Phase-3 of Java</span></div>
            </div>
          </Link>
          <Link href="/langroadmap/java/phase4/exception-handling">
            <div className="flex items-center gap-4 cursor-pointer group text-right">
              <div><span className="text-xs text-neutral-500 uppercase block">Next</span><span className="text-xl font-bold text-white">Exception Handling in Java</span></div>
              <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors"><ArrowRight className="text-red-500" /></div>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}