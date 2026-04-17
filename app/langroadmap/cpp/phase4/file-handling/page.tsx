"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function FileHandlingLesson() {
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
            File Handling in C++
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed">
            Learn how to read from and write to external files. This is vital for handling persistent data and processing large test cases in competitive programming.
          </p>
        </header>

        <article className="prose prose-invert max-w-none space-y-12">
          {/* Section 1: The fstream Library */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-4 italic text-left">The fstream Library</h2>
            <p className="text-neutral-300 leading-8 text-[18px]">
              To work with files, C++ provides the <code>&lt;fstream&gt;</code> library. It works very similarly to <code>cin</code> and <code>cout</code>, but instead of the console, the data flows to/from a file on your disk.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-xl">
                <h4 className="text-red-500 font-bold mb-2 text-xs uppercase tracking-widest">ofstream</h4>
                <p className="text-sm text-neutral-400">Used to <strong>create</strong> and <strong>write</strong> to files.</p>
              </div>
              <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-xl">
                <h4 className="text-red-500 font-bold mb-2 text-xs uppercase tracking-widest">ifstream</h4>
                <p className="text-sm text-neutral-400">Used to <strong>read</strong> from existing files.</p>
              </div>
              <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-xl">
                <h4 className="text-red-500 font-bold mb-2 text-xs uppercase tracking-widest">fstream</h4>
                <p className="text-sm text-neutral-400">A combination of both (Read + Write).</p>
              </div>
            </div>
            
          </section>

          {/* Section 2: Writing to a File */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Writing Data (Output)</h2>
            <p className="text-neutral-300 mb-6 text-[17px]">
              Just like <code>cout &lt;&lt;</code> sends data to the screen, <code>outFile &lt;&lt;</code> sends data to your file.
            </p>
            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl">
              <span className="text-blue-500">#include</span> <span className="text-orange-400">&lt;fstream&gt;</span><br/>
              <span className="text-red-500">ofstream</span> <span className="text-yellow-400">outFile</span>(<span className="text-orange-400">"data.txt"</span>);<br/><br/>
              <span className="text-red-500">if</span> (outFile.is_open()) &#123;<br/>
              &nbsp;&nbsp;outFile &lt;&lt; <span className="text-orange-400">"Storing this in a file."</span> &lt;&lt; endl;<br/>
              &nbsp;&nbsp;outFile.close(); <span className="text-neutral-500">// Always close your files!</span><br/>
              &#125;
            </div>
          </section>

          {/* Section 3: Reading from a File */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Reading Data (Input)</h2>
            <p className="text-neutral-300 leading-8 text-[17px]">
              We use a <code>while</code> loop with <code>getline()</code> to read a file line-by-line until we reach the end of the file (EOF).
            </p>
            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl">
              <span className="text-red-500">string</span> line;<br/>
              <span className="text-red-500">ifstream</span> <span className="text-yellow-400">inFile</span>(<span className="text-orange-400">"data.txt"</span>);<br/><br/>
              <span className="text-red-500">while</span> (<span className="text-yellow-400">getline</span>(inFile, line)) &#123;<br/>
              &nbsp;&nbsp;cout &lt;&lt; line &lt;&lt; endl;<br/>
              &#125;<br/>
              inFile.close();
            </div>
          </section>
        </article>

        {/* Footer Navigation */}
        <div className="mt-20 flex justify-between border-t border-neutral-800 pt-10">
          <Link href="/langroadmap/cpp/phase4/templates">
            <motion.div
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 group cursor-pointer text-left"
            >
              <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors">
                <ChevronLeft className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Previous</span>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                  Templates in C++
                </span>
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