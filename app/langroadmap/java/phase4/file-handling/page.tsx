"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft, HardDrive, FileText, Edit3, Database, Save, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function FileHandlingLesson() {
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
            File <span className="text-red-600">Handling_</span>
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl">
            Persistence is key. Learn how to store data permanently on disk using Java's IO streams and modern NIO.2.
          </p>
        </header>

        <article className="prose prose-invert max-w-none space-y-20">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Edit3 className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">1. Writing to a File</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              We use <code>FileWriter</code> wrapped in a <code>BufferedWriter</code> for efficient writing. 
              <strong>Important:</strong> Always use <strong>Try-With-Resources</strong> to ensure the file stream closes automatically.
            </p>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm leading-7 shadow-2xl">
              <span className="text-red-500">try</span> (BufferedWriter writer = <span className="text-red-500">new</span> BufferedWriter(<span className="text-red-500">new</span> FileWriter(<span className="text-orange-400">"data.txt"</span>))) &#123;<br/>
              &nbsp;&nbsp;writer.write(<span className="text-orange-400">"Hello CodeStruct Students!"</span>);<br/>
              &nbsp;&nbsp;writer.newLine();<br/>
              &nbsp;&nbsp;writer.write(<span className="text-orange-400">"File handling made easy."</span>);<br/>
              &#125; <span className="text-red-500">catch</span> (IOException e) &#123;<br/>
              &nbsp;&nbsp;e.printStackTrace();<br/>
              &#125;
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <Search className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white italic m-0">2. Reading from a File</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              To read text, we use <code>BufferedReader</code> which provides the handy <code>readLine()</code> method to process data line-by-line.
            </p>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm leading-7">
              <span className="text-red-500">try</span> (BufferedReader reader = <span className="text-red-500">new</span> BufferedReader(<span className="text-red-500">new</span> FileReader(<span className="text-orange-400">"data.txt"</span>))) &#123;<br/>
              &nbsp;&nbsp;String line;<br/>
              &nbsp;&nbsp;<span className="text-red-500">while</span> ((line = reader.readLine()) != <span className="text-red-500">null</span>) &#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(line);<br/>
              &nbsp;&nbsp;&#125;<br/>
              &#125; <span className="text-red-500">catch</span> (IOException e) &#123; ... &#125;
            </div>
          </section>

          <section className="bg-neutral-900/50 p-8 rounded-2xl border border-neutral-800">
            <h4 className="text-white font-bold mb-4 flex items-center gap-2"><HardDrive className="text-red-500" /> Best Practices</h4>
            <ul className="text-sm text-neutral-400 space-y-2 list-disc pl-5">
              <li>Always catch <code>IOException</code>.</li>
              <li>Use <code>BufferedWriter</code> instead of raw <code>FileWriter</code> to minimize disk access.</li>
              <li>Prefer <code>java.nio.file.Files</code> for modern, cleaner syntax in Java 8+.</li>
            </ul>
          </section>
        </article>
        <div className="mt-20 flex justify-between border-t border-neutral-800 pt-10">
          <Link href="/langroadmap/java/phase4/generics">
            <div className="flex items-center gap-4 cursor-pointer group">
              <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors"><ChevronLeft className="text-red-500" /></div>
              <div><span className="text-xs text-neutral-500 uppercase block">Previous</span><span className="text-xl font-bold text-white">Generics in Java</span></div>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}