"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronLeft, Terminal, Code2, Layers } from "lucide-react";

export default function OperatorsLesson() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e7eb] pb-20 font-sans">
      <main className="max-w-6xl mx-auto px-6 pt-16">
        {/* Navigation */}
        <Link href="/">
            <motion.div className="absolute top-8 left-8 z-50 flex items-center gap-2 cursor-pointer group">
            <ChevronLeft className="w-4 h-4 text-red-600"/>
            <span className="text-xl font-black tracking-tighter text-red-600 uppercase">CodeStruct_</span>
            </motion.div>
        </Link>

        <Link href="/langroadmap/cpp" className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors mt-10 mb-10 text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to C++ Roadmap
        </Link>

        {/* Header */}
        <header className="mb-12 border-b border-neutral-800 pb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Operators & Expressions in C++</h1>
          <p className="text-neutral-400 text-lg leading-relaxed">
            A deep dive into the symbols that drive logic and mathematical operations within C++.
          </p>
        </header>

        <article className="prose prose-invert max-w-none space-y-16">
          
          {/* Section: Introduction */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-4 italic">Operators</h2>
            <p className="text-neutral-300 leading-8 text-[18px]">
              Operators in C++ are symbols that perform operations on variables and values. They can be classified into different categories based on their functionality.
            </p>
            
            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Types of Operators in C++</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Arithmetic Operators", "Relational (Comparison) Operators", "Logical Operators", 
                "Bitwise Operators", "Assignment Operators", "Unary Operators", 
                "Ternary Operator (?:)", "Comma Operator (,)", "Sizeof Operator (sizeof)", "Pointer Operators (& and *)"
              ].map((type) => (
                <div key={type} className="p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg text-sm text-neutral-300 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500" /> {type}
                </div>
              ))}
            </div>
          </section>

          {/* 1. Arithmetic Operators */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-red-600 pl-4">1. Arithmetic Operators</h2>
            <p className="text-neutral-400 mb-6">Used for mathematical calculations.</p>
            
            <div className="overflow-x-auto rounded-xl border border-neutral-800 mb-6">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#111] text-neutral-400 uppercase text-[11px] tracking-widest">
                  <tr>
                    <th className="px-6 py-4">Operator</th>
                    <th className="px-6 py-4">Description</th>
                    <th className="px-6 py-4">Example (a=10, b=3)</th>
                    <th className="px-6 py-4">Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-900 text-neutral-300">
                  <tr><td className="px-6 py-4 text-red-400 font-mono">+</td><td className="px-6 py-4">Addition</td><td className="px-6 py-4 font-mono text-xs">a + b</td><td className="px-6 py-4">10 + 3 = 13</td></tr>
                  <tr><td className="px-6 py-4 text-red-400 font-mono">-</td><td className="px-6 py-4">Subtraction</td><td className="px-6 py-4 font-mono text-xs">a - b</td><td className="px-6 py-4">10 - 3 = 7</td></tr>
                  <tr><td className="px-6 py-4 text-red-400 font-mono">*</td><td className="px-6 py-4">Multiplication</td><td className="px-6 py-4 font-mono text-xs">a * b</td><td className="px-6 py-4">10 * 3 = 30</td></tr>
                  <tr><td className="px-6 py-4 text-red-400 font-mono">/</td><td className="px-6 py-4">Division</td><td className="px-6 py-4 font-mono text-xs">a / b</td><td className="px-6 py-4">10 / 3 = 3 (integer division)</td></tr>
                  <tr><td className="px-6 py-4 text-red-400 font-mono">%</td><td className="px-6 py-4">Modulus (Remainder)</td><td className="px-6 py-4 font-mono text-xs">a % b</td><td className="px-6 py-4">10 % 3 = 1</td></tr>
                </tbody>
              </table>
            </div>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm leading-7">
              <span className="text-blue-500">#include</span> <span className="text-orange-400">&lt;iostream&gt;</span><br/>
              <span className="text-red-500">using namespace</span> std;<br/><br/>
              <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>() &#123;<br/>
              &nbsp;&nbsp;<span className="text-red-500">int</span> a = <span className="text-blue-400">10</span>, b = <span className="text-blue-400">3</span>;<br/><br/>
              &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Addition: "</span> &lt;&lt; a + b &lt;&lt; endl;<br/>
              &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Subtraction: "</span> &lt;&lt; a - b &lt;&lt; endl;<br/>
              &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Multiplication: "</span> &lt;&lt; a * b &lt;&lt; endl;<br/>
              &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Division: "</span> &lt;&lt; a / b &lt;&lt; endl;<br/>
              &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Modulus: "</span> &lt;&lt; a % b &lt;&lt; endl;<br/><br/>
              &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br/>
              &#125;
            </div>
          </section>

          {/* 2. Relational Operators */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-red-600 pl-4">2. Relational (Comparison) Operators</h2>
            <p className="text-neutral-400 mb-6">Used to compare values and return 1 (true) or 0 (false).</p>
            <div className="overflow-x-auto rounded-xl border border-neutral-800 mb-6">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#111] text-neutral-400 uppercase text-[11px] tracking-widest">
                  <tr>
                    <th className="px-6 py-4">Operator</th>
                    <th className="px-6 py-4">Description</th>
                    <th className="px-6 py-4">Example (a=5, b=10)</th>
                    <th className="px-6 py-4">Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-900 text-neutral-300">
                  <tr><td className="px-6 py-4 text-red-400 font-mono">==</td><td className="px-6 py-4">Equal to</td><td className="px-6 py-4 font-mono text-xs">a == b</td><td className="px-6 py-4">0 (false)</td></tr>
                  <tr><td className="px-6 py-4 text-red-400 font-mono">!=</td><td className="px-6 py-4">Not equal to</td><td className="px-6 py-4 font-mono text-xs">a != b</td><td className="px-6 py-4">1 (true)</td></tr>
                  <tr><td className="px-6 py-4 text-red-400 font-mono">&gt;</td><td className="px-6 py-4">Greater than</td><td className="px-6 py-4 font-mono text-xs">a &gt; b</td><td className="px-6 py-4">0 (false)</td></tr>
                  <tr><td className="px-6 py-4 text-red-400 font-mono">&lt;</td><td className="px-6 py-4">Less than</td><td className="px-6 py-4 font-mono text-xs">a &lt; b</td><td className="px-6 py-4">1 (true)</td></tr>
                  <tr><td className="px-6 py-4 text-red-400 font-mono">&gt;=</td><td className="px-6 py-4">Greater than or equal to</td><td className="px-6 py-4 font-mono text-xs">a &gt;= b</td><td className="px-6 py-4">0 (false)</td></tr>
                  <tr><td className="px-6 py-4 text-red-400 font-mono">&lt;=</td><td className="px-6 py-4">Less than or equal to</td><td className="px-6 py-4 font-mono text-xs">a &lt;= b</td><td className="px-6 py-4">1 (true)</td></tr>
                </tbody>
              </table>
            </div>

            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm leading-7 shadow-2xl">
              <span className="text-blue-500">#include</span> <span className="text-orange-400">&lt;iostream&gt;</span><br/>
              <span className="text-red-500">using namespace</span> std;<br/><br/>
              <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>() &#123;<br/>
              &nbsp;&nbsp;<span className="text-red-500">int</span> a = <span className="text-blue-400">5</span>, b = <span className="text-blue-400">10</span>;<br/><br/>
              &nbsp;&nbsp;cout &lt;&lt; (a == b) &lt;&lt; endl;<br/>
              &nbsp;&nbsp;cout &lt;&lt; (a != b) &lt;&lt; endl;<br/>
              &nbsp;&nbsp;cout &lt;&lt; (a &lt; b) &lt;&lt; endl;<br/><br/>
              &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br/>
              &#125;
            </div>
          </section>

          {/* 3. Logical Operators */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-red-600 pl-4">3. Logical Operators</h2>
            <p className="text-neutral-400 mb-6">Used to perform logical operations (AND, OR, NOT).</p>
            <div className="overflow-x-auto rounded-xl border border-neutral-800 mb-6">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#111] text-neutral-400 uppercase text-[11px] tracking-widest">
                  <tr>
                    <th className="px-6 py-4">Operator</th>
                    <th className="px-6 py-4">Description</th>
                    <th className="px-6 py-4">Example (a=1, b=0)</th>
                    <th className="px-6 py-4">Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-900 text-neutral-300">
                  <tr><td className="px-6 py-4 text-red-400 font-mono">&&</td><td className="px-6 py-4">Logical AND</td><td className="px-6 py-4 font-mono text-xs">a && b</td><td className="px-6 py-4">0 (false)</td></tr>
                  <tr><td className="px-6 py-4 text-red-400 font-mono">||</td><td className="px-6 py-4">Logical OR</td><td className="px-6 py-4 font-mono text-xs">a || b</td><td className="px-6 py-4">1 (true)</td></tr>
                  <tr><td className="px-6 py-4 text-red-400 font-mono">!</td><td className="px-6 py-4">Logical NOT</td><td className="px-6 py-4 font-mono text-xs">!a</td><td className="px-6 py-4">0 (false)</td></tr>
                </tbody>
              </table>
            </div>
            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm leading-7">
              <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>() &#123;<br/>
              &nbsp;&nbsp;<span className="text-red-500">int</span> a = <span className="text-blue-400">1</span>, b = <span className="text-blue-400">0</span>;<br/>
              &nbsp;&nbsp;cout &lt;&lt; (a &amp;&amp; b) &lt;&lt; endl;<br/>
              &nbsp;&nbsp;cout &lt;&lt; (a || b) &lt;&lt; endl;<br/>
              &nbsp;&nbsp;cout &lt;&lt; (!a) &lt;&lt; endl;<br/>
              &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br/>
              &#125;
            </div>
          </section>

          {/* 4. Bitwise Operators */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-red-600 pl-4">4. Bitwise Operators</h2>
            <p className="text-neutral-400 mb-6">Perform bitwise operations on integers.</p>
            <div className="overflow-x-auto rounded-xl border border-neutral-800 mb-6">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#111] text-neutral-400 uppercase text-[11px] tracking-widest">
                  <tr>
                    <th className="px-6 py-4">Operator</th>
                    <th className="px-6 py-4">Description</th>
                    <th className="px-6 py-4">Example (a=5 (0101), b=3 (0011))</th>
                    <th className="px-6 py-4">Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-900 text-neutral-300 text-xs">
                  <tr><td className="px-6 py-4 text-red-400 font-mono font-bold">&</td><td className="px-6 py-4">Bitwise AND</td><td className="px-6 py-4 font-mono">a & b</td><td className="px-6 py-4">1 (0001)</td></tr>
                  <tr><td className="px-6 py-4 text-red-400 font-mono font-bold">|</td><td className="px-6 py-4">Bitwise OR</td><td className="px-6 py-4 font-mono">a | b</td><td className="px-6 py-4">7 (0111)</td></tr>
                  <tr><td className="px-6 py-4 text-red-400 font-mono font-bold">^</td><td className="px-6 py-4">Bitwise XOR</td><td className="px-6 py-4 font-mono">a ^ b</td><td className="px-6 py-4">6 (0110)</td></tr>
                  <tr><td className="px-6 py-4 text-red-400 font-mono font-bold">&lt;&lt;</td><td className="px-6 py-4">Left shift</td><td className="px-6 py-4 font-mono">a &lt;&lt; 1</td><td className="px-6 py-4">10 (1010)</td></tr>
                  <tr><td className="px-6 py-4 text-red-400 font-mono font-bold">&gt;&gt;</td><td className="px-6 py-4">Right shift</td><td className="px-6 py-4 font-mono">a &gt;&gt; 1</td><td className="px-6 py-4">2 (0010)</td></tr>
                  <tr><td className="px-6 py-4 text-red-400 font-mono font-bold">~</td><td className="px-6 py-4">Bitwise NOT</td><td className="px-6 py-4 font-mono">~a</td><td className="px-6 py-4">-6 (2’s complement)</td></tr>
                </tbody>
              </table>
            </div>
            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm leading-7">
              <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>() &#123;<br/>
              &nbsp;&nbsp;<span className="text-red-500">int</span> a = <span className="text-blue-400">5</span>, b = <span className="text-blue-400">3</span>;<br/>
              &nbsp;&nbsp;cout &lt;&lt; (a &amp; b) &lt;&lt; endl;<br/>
              &nbsp;&nbsp;cout &lt;&lt; (a | b) &lt;&lt; endl;<br/>
              &nbsp;&nbsp;cout &lt;&lt; (a ^ b) &lt;&lt; endl;<br/>
              &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br/>
              &#125;
            </div>
          </section>

          {/* 5. Assignment Operators */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-red-600 pl-4">5. Assignment Operators</h2>
            <p className="text-neutral-400 mb-6">Used to assign values to variables.</p>
            <div className="overflow-x-auto rounded-xl border border-neutral-800 mb-6 text-sm">
              <table className="w-full text-left">
                <thead className="bg-[#111] text-neutral-400 uppercase text-[11px] tracking-widest">
                  <tr><th className="px-6 py-4">Operator</th><th className="px-6 py-4">Example (a = 10)</th><th className="px-6 py-4">Equivalent To</th></tr>
                </thead>
                <tbody className="divide-y divide-neutral-900 text-neutral-300 font-mono">
                  <tr><td className="px-6 py-4 text-red-400">=</td ><td className="px-6 py-4">a = 10</td><td className="px-6 py-4">a = 10</td></tr>
                  <tr><td className="px-6 py-4 text-red-400">+=</td><td className="px-6 py-4">a += 5</td><td className="px-6 py-4">a = a + 5</td></tr>
                  <tr><td className="px-6 py-4 text-red-400">-=</td><td className="px-6 py-4">a -= 5</td><td className="px-6 py-4">a = a - 5</td></tr>
                  <tr><td className="px-6 py-4 text-red-400">*=</td><td className="px-6 py-4">a *= 5</td><td className="px-6 py-4">a = a * 5</td></tr>
                  <tr><td className="px-6 py-4 text-red-400">/=</td><td className="px-6 py-4">a /= 5</td><td className="px-6 py-4">a = a / 5</td></tr>
                  <tr><td className="px-6 py-4 text-red-400">%=</td><td className="px-6 py-4">a %= 5</td><td className="px-6 py-4">a = a % 5</td></tr>
                </tbody>
              </table>
            </div>
            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm leading-7 shadow-2xl">
              <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>() &#123;<br/>
              &nbsp;&nbsp;<span className="text-red-500">int</span> a = <span className="text-blue-400">10</span>;<br/>
              &nbsp;&nbsp;a += <span className="text-blue-400">5</span>;<br/>
              &nbsp;&nbsp;cout &lt;&lt; a &lt;&lt; endl;<br/>
              &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br/>
              &#125;
            </div>
          </section>

          {/* 6. Unary Operators */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-red-600 pl-4">6. Unary Operators</h2>
            <p className="text-neutral-400 mb-6">Operate on a single operand.</p>
            <div className="overflow-x-auto rounded-xl border border-neutral-800 mb-6 text-sm">
              <table className="w-full text-left">
                <thead className="bg-[#111] text-neutral-400 uppercase text-[11px] tracking-widest">
                  <tr><th className="px-6 py-4">Operator</th><th className="px-6 py-4">Description</th><th className="px-6 py-4">Example (a = 5)</th></tr>
                </thead>
                <tbody className="divide-y divide-neutral-900 text-neutral-300">
                  <tr><td className="px-6 py-4 text-red-400 font-mono">++</td><td className="px-6 py-4">Increment</td><td className="px-6 py-4 font-mono">a++ (post-increment)</td></tr>
                  <tr><td className="px-6 py-4 text-red-400 font-mono">--</td><td className="px-6 py-4">Decrement</td><td className="px-6 py-4 font-mono">--a (pre-decrement)</td></tr>
                  <tr><td className="px-6 py-4 text-red-400 font-mono">-</td><td className="px-6 py-4">Unary minus</td><td className="px-6 py-4 font-mono">-a</td></tr>
                  <tr><td className="px-6 py-4 text-red-400 font-mono">+</td><td className="px-6 py-4">Unary plus</td><td className="px-6 py-4 font-mono">+a</td></tr>
                </tbody>
              </table>
            </div>
            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm leading-7">
              <span className="text-red-500">int</span> a = <span className="text-blue-400">5</span>;<br/>
              cout &lt;&lt; ++a &lt;&lt; endl; <span className="text-neutral-600">// Output: 6</span><br/>
              cout &lt;&lt; a-- &lt;&lt; endl; <span className="text-neutral-600">// Output: 6</span>
            </div>
          </section>

          {/* 7. Ternary Operator */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-red-600 pl-4">7. Ternary Operator (?:)</h2>
            <p className="text-neutral-400 mb-4 italic text-sm">A shorthand for if-else conditions.</p>
            <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-xl mb-4 font-mono text-blue-400 text-xs">
              condition ? expression1 : expression2;
            </div>
            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm leading-7">
              <span className="text-red-500">int</span> age = <span className="text-blue-400">20</span>;<br/>
              (age &gt;= <span className="text-blue-400">18</span>) ? cout &lt;&lt; <span className="text-orange-400">"Adult"</span> : cout &lt;&lt; <span className="text-orange-400">"Minor"</span>;
            </div>
          </section>

          {/* 8. Comma Operator */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-red-600 pl-4">8. Comma Operator (,)</h2>
            <ul className="list-disc ml-6 text-neutral-300 space-y-2 text-sm leading-6 mb-4">
              <li>Used to separate expressions</li>
              <li>Returns the last expression</li>
            </ul>
            <code className="text-blue-400 bg-black/40 p-2 rounded block w-fit border border-neutral-800 text-xs">int a, b, c;</code>
          </section>

          {/* 9. Sizeof Operator */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-red-600 pl-4">9. Sizeof Operator</h2>
            <p className="text-neutral-400 mb-4">Returns the size of a variable or data type.</p>
            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm leading-7">
              cout &lt;&lt; <span className="text-red-500">sizeof</span>(<span className="text-red-500">int</span>);
            </div>
          </section>

          {/* 10. Pointer Operators */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-red-600 pl-4">10. Pointer Operators (& and *)</h2>
            <ul className="list-disc ml-6 text-neutral-300 space-y-2 text-sm leading-6 mb-4">
              <li><span className="text-red-500 font-bold">&</span> → Address-of operator (gets memory address)</li>
              <li><span className="text-red-500 font-bold">*</span> → Dereference operator (access value at an address)</li>
            </ul>
            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm leading-7">
              <span className="text-red-500">int</span> a = <span className="text-blue-400">10</span>;<br/>
              <span className="text-red-500">int</span> *ptr = &amp;a;<br/>
              cout &lt;&lt; &amp;a &lt;&lt; endl;<br/>
              cout &lt;&lt; *ptr &lt;&lt; endl;
            </div>
          </section>

          <hr className="border-neutral-800 my-20" />

          {/* SECTION: EXPRESSIONS */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-4 italic">Expressions in C++</h2>
            <p className="text-neutral-300 leading-8 text-[18px]">
              In C++, an expression is a combination of variables, constants, operators, and function calls that evaluates to a single value. Expressions are used to perform operations and calculate values in C++ programs.
            </p>
            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Types of Expressions in C++</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                "Arithmetic Expressions", "Relational Expressions", "Logical Expressions", 
                "Bitwise Expressions", "Assignment Expressions", "Unary Expressions", 
                "Conditional (Ternary) Expressions", "Comma Expressions"
              ].map((exp) => (
                <div key={exp} className="p-3 bg-neutral-900/30 border border-neutral-800 rounded text-sm text-neutral-400 font-mono">
                  {exp}
                </div>
              ))}
            </div>
          </section>

          {/* Expression Details 1-8 */}
          <section className="space-y-12">
            <div>
              <h4 className="text-white font-bold mb-2">1. Arithmetic Expressions</h4>
              <p className="text-neutral-400 text-sm mb-4 leading-6">Arithmetic expressions perform basic mathematical operations such as addition, subtraction, multiplication, and division.</p>
              <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm mb-4 leading-7 shadow-xl">
                <span className="text-red-500">int</span> a = <span className="text-blue-400">5</span>, b = <span className="text-blue-400">3</span>;<br/>
                <span className="text-red-500">int</span> result = a + b * <span className="text-blue-400">2</span>;<br/>
                cout &lt;&lt; <span className="text-orange-400">"Result: "</span> &lt;&lt; result &lt;&lt; endl;
              </div>
              <div className="p-3 bg-neutral-900 border-l-2 border-red-500 text-xs font-mono mb-2">Output: Result: 11</div>
              <p className="text-xs text-neutral-500">Explanation: Multiplication b * 2 is done first, then the result is added to a.</p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">2. Relational Expressions</h4>
              <p className="text-neutral-400 text-sm mb-4">Relational expressions compare two values and return true (1) or false (0).</p>
              <div className="grid grid-cols-3 gap-2 text-xs font-mono text-red-500">
                <span>== (equal to)</span><span>!= (not equal to)</span><span>&gt; (greater than)</span>
                <span>&lt; (less than)</span><span>&gt;= (greater than or equal)</span><span>&lt;= (less than or equal)</span>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">3. Logical Expressions</h4>
              <p className="text-neutral-400 text-sm mb-4">Logical expressions perform logical operations.</p>
              <div className="grid grid-cols-3 gap-2 text-xs font-mono text-red-500">
                <span>&& (logical AND)</span><span>|| (logical OR)</span><span>! (logical NOT)</span>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">4. Bitwise Expressions</h4>
              <p className="text-neutral-400 text-sm mb-4 leading-6">Bitwise expressions perform operations on binary bits.</p>
              <div className="grid grid-cols-3 gap-2 text-xs font-mono text-red-500 mb-6">
                <span>& (bitwise AND)</span><span>| (bitwise OR)</span><span>^ (bitwise XOR)</span>
                <span>&lt;&lt; (left shift)</span><span>&gt;&gt; (right shift)</span><span>~ (bitwise NOT)</span>
              </div>
              <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm mb-4">
                 <span className="text-red-500">int</span> a = <span className="text-blue-400">5</span>, b = <span className="text-blue-400">3</span>;<br/>
                 <span className="text-red-500">int</span> result = a &amp; b;<br/>
                 cout &lt;&lt; <span className="text-orange-400">"Result: "</span> &lt;&lt; result &lt;&lt; endl;
              </div>
              <div className="p-3 bg-neutral-900 border-l-2 border-red-500 text-xs font-mono mb-2">Output: Result: 1</div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">5. Assignment Expressions</h4>
              <p className="text-neutral-400 text-sm mb-4">Assignment expressions assign values to variables and return the assigned value.</p>
              <div className="flex gap-4 text-xs font-mono text-red-500 mb-6">
                {["=", "+=", "-=", "*=", "/=", "%="].map(op => <span key={op}>{op}</span>)}
              </div>
              <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm mb-4">
                 <span className="text-red-500">int</span> a = <span className="text-blue-400">5</span>;<br/>
                 <span className="text-red-500">int</span> b = (a = <span className="text-blue-400">10</span>);<br/>
                 cout &lt;&lt; <span className="text-orange-400">"a = "</span> &lt;&lt; a &lt;&lt; <span className="text-orange-400">" b = "</span> &lt;&lt; b &lt;&lt; endl;
              </div>
              <div className="p-3 bg-neutral-900 border-l-2 border-red-500 text-xs font-mono mb-2">Output: a = 10 b = 10</div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">6. Unary Expressions</h4>
              <p className="text-neutral-400 text-sm mb-4">Unary expressions operate on a single operand.</p>
              <div className="flex gap-4 text-xs font-mono text-red-500 mb-6">
                {["++ (increment)", "-- (decrement)", "! (logical NOT)", "- (negation)"].map(op => <span key={op}>{op}</span>)}
              </div>
              <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm mb-4">
                 <span className="text-red-500">int</span> a = <span className="text-blue-400">5</span>;<br/>
                 <span className="text-red-500">int</span> result = ++a;<br/>
                 cout &lt;&lt; <span className="text-orange-400">"Result: "</span> &lt;&lt; result &lt;&lt; endl;
              </div>
              <div className="p-3 bg-neutral-900 border-l-2 border-red-500 text-xs font-mono mb-2">Output: Result: 6</div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-2">7. Conditional (Ternary) Expression</h4>
              <p className="text-neutral-400 text-sm mb-4 italic text-xs">A shorthand for if-else.</p>
              <code className="block mb-4 p-2 bg-black border border-neutral-800 text-blue-400 text-xs rounded">condition ? expression1 : expression2;</code>
              <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm mb-4 leading-7 shadow-xl">
                 <span className="text-red-500">int</span> a = <span className="text-blue-400">5</span>, b = <span className="text-blue-400">3</span>;<br/>
                 <span className="text-red-500">int</span> result = (a &gt; b) ? a : b;<br/>
                 cout &lt;&lt; <span className="text-orange-400">"The larger value is: "</span> &lt;&lt; result &lt;&lt; endl;
              </div>
              <div className="p-3 bg-neutral-900 border-l-2 border-red-500 text-xs font-mono mb-2">Output: The larger value is: 5</div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-2">8. Comma Expression</h4>
              <p className="text-neutral-400 text-sm mb-4">The comma operator evaluates multiple expressions and returns the last expression value.</p>
              <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm mb-4 leading-7">
                 <span className="text-red-500">int</span> a = <span className="text-blue-400">1</span>, b = <span className="text-blue-400">2</span>, c = <span className="text-blue-400">3</span>;<br/>
                 <span className="text-red-500">int</span> result = (a++, b++, c++);<br/>
                 cout &lt;&lt; <span className="text-orange-400">"a = "</span> &lt;&lt; a &lt;&lt; <span className="text-orange-400">" b = "</span> &lt;&lt; b &lt;&lt; <span className="text-orange-400">" c = "</span> &lt;&lt; c &lt;&lt; endl;<br/>
                 cout &lt;&lt; <span className="text-orange-400">"result = "</span> &lt;&lt; result &lt;&lt; endl;
              </div>
              <div className="p-3 bg-neutral-900 border-l-2 border-red-500 text-xs font-mono mb-2">Output: a = 2 b = 3 c = 4<br/>result = 3</div>
            </div>
          </section>
        </article>

        {/* Navigation Footer */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-neutral-800 pt-10">
          <Link href="/langroadmap/cpp/input-output">
            <motion.div whileHover={{ x: -5 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-4 group cursor-pointer text-left">
              <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors">
                <ChevronLeft className="w-5 h-5 text-red-500" />
              </div>
              <div className="text-left">
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Previous Lesson</span>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">Input and Output</span>
              </div>
            </motion.div>
          </Link>

          <Link href="/langroadmap/cpp/control-structures">
            <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-4 group cursor-pointer text-right">
              <div className="text-right">
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Next Lesson</span>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">Control Structures</span>
              </div>
              <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors">
                <ArrowRight className="w-5 h-5 text-red-500" />
              </div>
            </motion.div>
          </Link>
        </div>
      </main>
    </div>
  );
}