"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft, Box, List, MoveRight, Zap, Calculator, SortAsc } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Page() {
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
            STL Utilities & <span className="text-red-600">Sorting Algorithms_</span>
          </h1>
        </header>

        <article className="prose prose-invert max-w-none space-y-16">
          {/* EXTRA USEFUL FUNCTIONS SECTION */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Zap className="text-red-600" /> Extra Useful Functions
            </h2>

            <div className="space-y-12">
              {/* next_permutation */}
              <div className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">1. next_permutation in STL</h3>
                <p className="text-neutral-300 leading-8 mb-4">
                  It is used to rearrange the elements in the range <code className="text-red-400">[first, last)</code> into the next lexicographically greater permutation. A permutation is each of several possible ways in which a set or number of things can be ordered or arranged.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 text-sm mb-8">
                  <div className="bg-black/40 p-4 rounded-lg border border-neutral-800">
                    <span className="text-red-500 font-bold block mb-2 uppercase tracking-widest text-xs">Depth:</span>
                    If the function can rearrange the object as a lexicographically greater permutation, it returns true. If it is impossible (the container is sorted in descending order), it transforms the range into the first permutation (sorted ascending) and returns false.
                  </div>
                  <div className="bg-black/40 p-4 rounded-lg border border-neutral-800">
                    <span className="text-red-500 font-bold block mb-2 uppercase tracking-widest text-xs">Time Complexity:</span>
                    O(N) where N is the distance between first and last.
                  </div>
                </div>

                <h4 className="text-red-500 font-bold uppercase text-sm mb-4 tracking-widest">Example Code:</h4>
                <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mb-6 text-left text-neutral-300">
                  <span className="text-blue-500">#include</span> <span className="text-orange-400">&lt;bits/stdc++.h&gt;</span><br/>
                  <span className="text-red-500">using namespace</span> std;<br/><br/>
                  <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>() &#123;<br/>
                  &nbsp;&nbsp;vector&lt;<span className="text-red-500">int</span>&gt; vec = &#123;<span className="text-blue-400">1, 2, 3</span>&#125;;<br/><br/>
                  &nbsp;&nbsp;<span className="text-neutral-500">// Generate all permutations</span><br/>
                  &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Permutations:"</span> &lt;&lt; endl;<br/>
                  &nbsp;&nbsp;<span className="text-red-500">do</span> &#123;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">for</span> (<span className="text-red-500">int</span> x : vec) cout &lt;&lt; x &lt;&lt; <span className="text-orange-400">" "</span>;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; endl;<br/>
                  &nbsp;&nbsp;&#125; <span className="text-red-500">while</span> (<span className="text-yellow-400">next_permutation</span>(vec.<span className="text-yellow-400">begin</span>(), vec.<span className="text-yellow-400">end</span>()));<br/><br/>
                  &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br/>
                  &#125;
                </div>

                <h4 className="text-red-500 font-bold uppercase text-sm mb-4 tracking-widest">Output:</h4>
                <div className="p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300 text-left">
                  Permutations:<br/>
                  1 2 3<br/>
                  1 3 2<br/>
                  2 1 3<br/>
                  2 3 1<br/>
                  3 1 2<br/>
                  3 2 1
                </div>
              </div>

              {/* builtin_popcount */}
              <div className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">2. __builtin_popcount()</h3>
                <p className="text-neutral-300 leading-8 mb-4">
                  This is a built-in function in GCC compiler that counts the number of set bits (1s) in an integer. It is extremely efficient for bit manipulation tasks.
                </p>
                <div className="grid md:grid-cols-2 gap-6 text-sm mb-8">
                  <div className="bg-black/40 p-4 rounded-lg border border-neutral-800">
                    <span className="text-red-500 font-bold block mb-2 uppercase tracking-widest text-xs">Depth:</span>
                    It uses CPU-specific instructions to perform the count extremely fast. For <code className="text-red-400">long long</code>, use <code className="text-red-400">__builtin_popcountll()</code>.
                  </div>
                  <div className="bg-black/40 p-4 rounded-lg border border-neutral-800">
                    <span className="text-red-500 font-bold block mb-2 uppercase tracking-widest text-xs">Use Case:</span>
                    Commonly used in competitive programming for parity checks, Hamming distance, or subsets calculations.
                  </div>
                </div>

                <h4 className="text-red-500 font-bold uppercase text-sm mb-4 tracking-widest">Example Code:</h4>
                <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mb-6 text-left text-neutral-300">
                  <span className="text-blue-500">#include</span> <span className="text-orange-400">&lt;bits/stdc++.h&gt;</span><br/>
                  <span className="text-red-500">using namespace</span> std;<br/><br/>
                  <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>() &#123;<br/>
                  &nbsp;&nbsp;<span className="text-red-500">int</span> n1 = <span className="text-blue-400">7</span>;  <span className="text-neutral-500">// Binary: 0111</span><br/>
                  &nbsp;&nbsp;<span className="text-red-500">long long</span> n2 = <span className="text-blue-400">15</span>; <span className="text-neutral-500">// Binary: 1111</span><br/><br/>
                  &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Set bits in 7: "</span> &lt;&lt; <span className="text-yellow-400">__builtin_popcount</span>(n1) &lt;&lt; endl;<br/>
                  &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Set bits in 15: "</span> &lt;&lt; <span className="text-yellow-400">__builtin_popcountll</span>(n2) &lt;&lt; endl;<br/><br/>
                  &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br/>
                  &#125;
                </div>

                <h4 className="text-red-500 font-bold uppercase text-sm mb-4 tracking-widest">Output:</h4>
                <div className="p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300 text-left">
                  Set bits in 7: 3<br/>
                  Set bits in 15: 4
                </div>
              </div>

              {/* sort */}
              <div className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">3. sort() in C++ STL</h3>
                <p className="text-neutral-300 leading-8 mb-4">
                  The most widely used function for sorting elements in a range. By default, it sorts in ascending order using a highly optimized hybrid algorithm.
                </p>
                <div className="grid md:grid-cols-2 gap-6 text-sm mb-8">
                  <div className="bg-black/40 p-4 rounded-lg border border-neutral-800">
                    <span className="text-red-500 font-bold block mb-2 uppercase tracking-widest text-xs">Algorithm:</span>
                    It uses <strong>IntroSort</strong> (QuickSort + HeapSort + Insertion Sort), ensuring <code className="text-red-400">O(N log N)</code> even in the worst case.
                  </div>
                  <div className="bg-black/40 p-4 rounded-lg border border-neutral-800">
                    <span className="text-red-500 font-bold block mb-2 uppercase tracking-widest text-xs">Syntax:</span>
                    <code className="text-blue-400">sort(v.begin(), v.end());</code><br/>
                    <code className="text-blue-400">sort(arr, arr + n, greater&lt;int&gt;());<span className="text-neutral-500"> // Descending order</span></code>
                  </div>
                </div>

                <h4 className="text-red-500 font-bold uppercase text-sm mb-4 tracking-widest">Example Code:</h4>
                <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mb-6 text-left text-neutral-300">
                  <span className="text-blue-500">#include</span> <span className="text-orange-400">&lt;bits/stdc++.h&gt;</span><br/>
                  <span className="text-red-500">using namespace</span> std;<br/><br/>
                  <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>() &#123;<br/>
                  &nbsp;&nbsp;vector&lt;<span className="text-red-500">int</span>&gt; v = &#123;<span className="text-blue-400">4, 2, 5, 1, 3</span>&#125;;<br/><br/>
                  &nbsp;&nbsp;<span className="text-neutral-500">// Ascending order</span><br/>
                  &nbsp;&nbsp;<span className="text-yellow-400">sort</span>(v.<span className="text-yellow-400">begin</span>(), v.<span className="text-yellow-400">end</span>());<br/>
                  &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Ascending: "</span>;<br/>
                  &nbsp;&nbsp;<span className="text-red-500">for</span>(<span className="text-red-500">int</span> x : v) cout &lt;&lt; x &lt;&lt; <span className="text-orange-400">" "</span>;<br/>
                  &nbsp;&nbsp;cout &lt;&lt; endl;<br/><br/>
                  &nbsp;&nbsp;<span className="text-neutral-500">// Descending order</span><br/>
                  &nbsp;&nbsp;<span className="text-yellow-400">sort</span>(v.<span className="text-yellow-400">begin</span>(), v.<span className="text-yellow-400">end</span>(), greater&lt;<span className="text-red-500">int</span>&gt;());<br/>
                  &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Descending: "</span>;<br/>
                  &nbsp;&nbsp;<span className="text-red-500">for</span>(<span className="text-red-500">int</span> x : v) cout &lt;&lt; x &lt;&lt; <span className="text-orange-400">" "</span>;<br/><br/>
                  &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br/>
                  &#125;
                </div>

                <h4 className="text-red-500 font-bold uppercase text-sm mb-4 tracking-widest">Output:</h4>
                <div className="p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300 text-left">
                  Ascending: 1 2 3 4 5<br/>
                  Descending: 5 4 3 2 1
                </div>
              </div>

              {/* min/max element */}
              <div className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">4. min_element() & max_element()</h3>
                <p className="text-neutral-300 leading-8 mb-4">
                  These functions find the smallest and largest elements in a container. They return an iterator, making them useful for finding both the value and the position.
                </p>
                <div className="grid md:grid-cols-2 gap-6 text-sm mb-8">
                  <div className="bg-black/40 p-4 rounded-lg border border-neutral-800">
                    <span className="text-red-500 font-bold block mb-2 uppercase tracking-widest text-xs">Note:</span>
                    Since they return <strong>iterators</strong>, you must use the <code className="text-red-400">*</code> operator to access the value.
                  </div>
                  <div className="bg-black/40 p-4 rounded-lg border border-neutral-800">
                    <span className="text-red-500 font-bold block mb-2 uppercase tracking-widest text-xs">Position:</span>
                    Subtract <code className="text-red-400">v.begin()</code> from the iterator to find the index of the element.
                  </div>
                </div>

                <h4 className="text-red-500 font-bold uppercase text-sm mb-4 tracking-widest">Example Code:</h4>
                <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mb-6 text-left text-neutral-300">
                  <span className="text-blue-500">#include</span> <span className="text-orange-400">&lt;bits/stdc++.h&gt;</span><br/>
                  <span className="text-red-500">using namespace</span> std;<br/><br/>
                  <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>() &#123;<br/>
                  &nbsp;&nbsp;vector&lt;<span className="text-red-500">int</span>&gt; v = &#123;<span className="text-blue-400">10, 50, 20, 90, 40</span>&#125;;<br/><br/>
                  &nbsp;&nbsp;<span className="text-red-500">auto</span> min_it = <span className="text-yellow-400">min_element</span>(v.<span className="text-yellow-400">begin</span>(), v.<span className="text-yellow-400">end</span>());<br/>
                  &nbsp;&nbsp;<span className="text-red-500">auto</span> max_it = <span className="text-yellow-400">max_element</span>(v.<span className="text-yellow-400">begin</span>(), v.<span className="text-yellow-400">end</span>());<br/><br/>
                  &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Minimum value: "</span> &lt;&lt; *min_it &lt;&lt; endl;<br/>
                  &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Maximum value: "</span> &lt;&lt; *max_it &lt;&lt; endl;<br/>
                  &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Max element index: "</span> &lt;&lt; max_it - v.<span className="text-yellow-400">begin</span>() &lt;&lt; endl;<br/><br/>
                  &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br/>
                  &#125;
                </div>

                <h4 className="text-red-500 font-bold uppercase text-sm mb-4 tracking-widest">Output:</h4>
                <div className="p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300 text-left">
                  Minimum value: 10<br/>
                  Maximum value: 90<br/>
                  Max element index: 3
                </div>
              </div>
            </div>
          </section>

          <hr className="my-16 border-neutral-800" />

          {/* SORTING ALGORITHMS SECTION */}
          <section>
            <h2 className="text-5xl font-black text-white mb-12 tracking-tighter uppercase italic">
              Sorting <span className="text-red-600">Algorithms_</span>
            </h2>

            {/* BUBBLE SORT */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold text-white mb-4 border-l-4 border-red-600 pl-4">1. Bubble Sort</h3>
              <p className="text-neutral-300 mb-6 leading-8">
                Bubble Sort is a comparison-based algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This specific implementation is <strong>optimized</strong>: if no swaps occur during a pass, the array is already sorted, and the algorithm terminates early.
              </p>
              
              <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 mb-8">
              <h4 className="text-red-500 font-bold uppercase text-sm mb-4">Algorithm:</h4>
              <div className="space-y-6 text-neutral-300 leading-7">
                <div>
                  <p className="mb-2"><strong className="text-white">1. Select the range of the unsorted array:</strong></p>
                  <p>Use an outer loop <code className="text-red-400">(i)</code> that runs backward from <code className="text-red-400">n-1</code> to <code className="text-red-400">0</code>. The value <code className="text-red-400">i = n-1</code> means the range is <code className="text-red-400">0 to n-1</code>, <code className="text-red-400">i = n-2</code> means the range is <code className="text-red-400">0 to n-2</code>, and so on.</p>
                </div>

                <div>
                  <p className="mb-2"><strong className="text-white">2. Push the maximum element to the end:</strong></p>
                  <p>Use an inner loop <code className="text-red-400">(j)</code> from <code className="text-red-400">0 to i-1</code>. Compare adjacent elements and swap if <code className="text-red-400">arr[j] &gt; arr[j+1]</code>. This ensures the maximum element in the current range moves to index <code className="text-red-400">i</code>.</p>
                </div>

                <div>
                  <p className="mb-2"><strong className="text-white">3. Progressively sort the array:</strong></p>
                  <p>After each outer loop iteration, the sorted portion grows from the end:</p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-neutral-400">
                    <li>After the 1st iteration: The last element is sorted.</li>
                    <li>After the 2nd iteration: The last two elements are sorted.</li>
                  </ul>
                </div>

                <div>
                  <p className="mb-2"><strong className="text-white">4. Optimization (Best Case O(N)):</strong></p>
                  <p>If the array is already sorted, no swaps will occur. We check if a swap took place during the first iteration; if <code className="text-red-400">didSwap</code> remains <code className="text-red-400">0</code>, we break early. This reduces the complexity to <code className="text-red-400">O(N)</code> as the outer loop runs only once.</p>
                </div>
              </div>
            </div>

              <h4 className="text-red-500 font-bold uppercase text-sm mb-4 tracking-widest">Code:</h4>
              <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mb-4 text-left text-neutral-300">
                <span className="text-blue-500">#include</span> <span className="text-orange-400">&lt;bits/stdc++.h&gt;</span><br/>
                <span className="text-red-500">using namespace</span> std;<br/><br/>
                <span className="text-red-500">class</span> <span className="text-yellow-400">BubbleSort</span> &#123;<br/>
                <span className="text-red-500">public</span>:<br/>
                &nbsp;&nbsp;<span className="text-red-500">void</span> <span className="text-yellow-400">bubble_sort</span>(vector&lt;<span className="text-red-500">int</span>&gt;& arr) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">int</span> n = arr.size();<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">for</span> (<span className="text-red-500">int</span> i = n - 1; i &gt;= 0; i--) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">int</span> didSwap = 0;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">for</span> (<span className="text-red-500">int</span> j = 0; j &lt;= i - 1; j++) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">if</span> (arr[j] &gt; arr[j + 1]) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">swap</span>(arr[j], arr[j + 1]);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;didSwap = 1;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">if</span> (didSwap == 0) <span className="text-red-500">break</span>;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"After Using Bubble Sort:"</span> &lt;&lt; endl;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">for</span> (<span className="text-red-500">int</span> num : arr) cout &lt;&lt; num &lt;&lt; <span className="text-orange-400">" "</span>;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; endl;<br/>
                &nbsp;&nbsp;&#125;<br/>
                &#125;;
              </div>

              <h4 className="text-red-500 font-bold uppercase text-sm mb-4 tracking-widest">Output:</h4>
              <div className="p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300 text-left">
                Before Using Bubble Sort:<br/>
                13 46 24 52 20 9 <br/>
                After Using Bubble Sort:<br/>
                9 13 20 24 46 52 
              </div>
            </div>

            {/* SELECTION SORT */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold text-white mb-4 border-l-4 border-red-600 pl-4">2. Selection Sort</h3>
              <p className="text-neutral-300 mb-6 leading-8">
                Selection sort works by repeatedly finding the minimum element from the unsorted part and putting it at the beginning. This implementation uses a simple swap mechanism to move the smallest identified value to its correct position in each pass.
              </p>
              
              <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 mb-8">
                <h4 className="text-red-500 font-bold uppercase text-sm mb-4">Algorithm:</h4>
                <div className="space-y-6 text-neutral-300 leading-7">
                  <div>
                    <p className="mb-2"><strong className="text-white">1. Select the unsorted range:</strong></p>
                    <p>Use an outer loop <code className="text-red-400">(i)</code> that runs forward from <code className="text-red-400">0</code> to <code className="text-red-400">n-1</code>. This index <code className="text-red-400">i</code> marks the start of the current unsorted range. For example, when <code className="text-red-400">i=1</code>, the range is from index <code className="text-red-400">1 to n-1</code>.</p>
                  </div>

                  <div>
                    <p className="mb-2"><strong className="text-white">2. Identify the minimum:</strong></p>
                    <p>In each iteration, use an inner loop to find the smallest element within the current range <code className="text-red-400">[i...n-1]</code>. Store this index in a variable (e.g., <code className="text-red-400">mini</code>).</p>
                  </div>

                  <div>
                    <p className="mb-2"><strong className="text-white">3. Swap with the front:</strong></p>
                    <p>Swap the identified minimum element with the first element of the current unsorted range (at index <code className="text-red-400">i</code>).</p>
                  </div>

                  <div>
                    <p className="mb-2"><strong className="text-white">4. Progression:</strong></p>
                    <p>After each iteration of the outer loop, the element at index <code className="text-red-400">i</code> is guaranteed to be in its final sorted position. The sorted portion grows from the left side of the array.</p>
                  </div>
                </div>
              </div>

              <h4 className="text-red-500 font-bold uppercase text-sm mb-4 tracking-widest">Code:</h4>
              <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mb-4 text-left text-neutral-300">
                <span className="text-blue-500">#include</span> <span className="text-orange-400">&lt;bits/stdc++.h&gt;</span><br/>
                <span className="text-red-500">using namespace</span> std;<br/><br/>
                <span className="text-red-500">void</span> <span className="text-yellow-400">selection_sort</span>(<span className="text-red-500">int</span> arr[], <span className="text-red-500">int</span> n) &#123;<br/>
                &nbsp;&nbsp;<span className="text-red-500">for</span> (<span className="text-red-500">int</span> i = 0; i &lt; n - 1; i++) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">int</span> mini = i;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">for</span> (<span className="text-red-500">int</span> j = i + 1; j &lt; n; j++) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">if</span> (arr[j] &lt; arr[mini]) mini = j;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-neutral-500">// Manual swap</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">int</span> temp = arr[mini];<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;arr[mini] = arr[i];<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;arr[i] = temp;<br/>
                &nbsp;&nbsp;&#125;<br/><br/>
                &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"After selection sort: "</span> &lt;&lt; endl;<br/>
                &nbsp;&nbsp;<span className="text-red-500">for</span> (<span className="text-red-500">int</span> i = 0; i &lt; n; i++) cout &lt;&lt; arr[i] &lt;&lt; <span className="text-orange-400">" "</span>;<br/>
                &nbsp;&nbsp;cout &lt;&lt; endl;<br/>
                &#125;
              </div>

              <h4 className="text-red-500 font-bold uppercase text-sm mb-4 tracking-widest">Output:</h4>
              <div className="p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300 text-left">
                Before selection sort: <br/>
                13 46 24 52 20 9 <br/>
                After selection sort: <br/>
                9 13 20 24 46 52 
              </div>
            </div>

            {/* INSERTION SORT */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold text-white mb-4 border-l-4 border-red-600 pl-4">3. Insertion Sort</h3>
              <p className="text-neutral-300 mb-6 leading-8">
                Insertion sort is similar to how we sort playing cards in our hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.
              </p>
              
              <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 mb-8">
                <h4 className="text-red-500 font-bold uppercase text-sm mb-4">Algorithm:</h4>
                <div className="space-y-6 text-neutral-300 leading-7">
                  <div>
                    <p className="mb-2"><strong className="text-white">1. Select the unsorted element:</strong></p>
                    <p>In each iteration, select an element from the unsorted part of the array using an outer loop starting from index <code className="text-red-400">1</code>.</p>
                  </div>

                  <div>
                    <p className="mb-2"><strong className="text-white">2. Identify the correct position:</strong></p>
                    <p>Take the selected element (called the <code className="text-red-400">key</code>) and find its correct position within the sorted part of the array (to its left).</p>
                  </div>

                  <div>
                    <p className="mb-2"><strong className="text-white">3. Shift and Insert:</strong></p>
                    <p>Use an inner loop to shift elements that are greater than the <code className="text-red-400">key</code> one position to the right. This creates a vacancy where the <code className="text-red-400">key</code> is finally placed.</p>
                  </div>

                  <div>
                    <p className="mb-2"><strong className="text-white">4. Complete sorting:</strong></p>
                    <p>Continue this process for all elements until the entire array is sorted. The sorted portion expands one element at a time from left to right.</p>
                  </div>
                </div>
              </div>

              <h4 className="text-red-500 font-bold uppercase text-sm mb-4 tracking-widest">Code:</h4>
              <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mb-4 text-left text-neutral-300">
                <span className="text-blue-500">#include</span> <span className="text-orange-400">&lt;bits/stdc++.h&gt;</span><br/>
                <span className="text-red-500">using namespace</span> std;<br/><br/>
                <span className="text-red-500">class</span> <span className="text-yellow-400">Solution</span> &#123;<br/>
                <span className="text-red-500">public</span>:<br/>
                &nbsp;&nbsp;vector&lt;<span className="text-red-500">int</span>&gt; <span className="text-yellow-400">insertionSort</span>(vector&lt;<span className="text-red-500">int</span>&gt;& nums) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">int</span> n = nums.size();<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">for</span> (<span className="text-red-500">int</span> i = 1; i &lt; n; i++) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">int</span> key = nums[i];<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">int</span> j = i - 1;<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-neutral-500">// Shift elements greater than key</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">while</span> (j &gt;= 0 && nums[j] &gt; key) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nums[j + 1] = nums[j];<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;j--;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nums[j + 1] = key;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">return</span> nums;<br/>
                &nbsp;&nbsp;&#125;<br/>
                &#125;;
              </div>

              <h4 className="text-red-500 font-bold uppercase text-sm mb-4 tracking-widest">Output:</h4>
              <div className="p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300 text-left">
                Before Using Insertion Sort: <br/>
                13 46 24 52 20 9 <br/>
                After Using Insertion Sort: <br/>
                9 13 20 24 46 52 
              </div>
            </div>

            {/* MERGE SORT */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold text-white mb-4 border-l-4 border-red-600 pl-4">4. Merge Sort</h3>
              <p className="text-neutral-300 mb-6 leading-8">
                Merge Sort is a classic <strong>Divide and Conquer</strong> algorithm. The core idea is based on breaking down a big problem into smaller, manageable sub-problems—sorting smaller arrays and then merging those solutions to get the final sorted result.
              </p>
              
              <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 mb-8">
                <h4 className="text-red-500 font-bold uppercase text-sm mb-4">Algorithm:</h4>
                <div className="space-y-4 text-neutral-300 leading-7">
                  <p>
                    It is much easier to merge two sorted arrays than to sort a large unsorted one. Instead of sorting the entire array at once, Merge Sort breaks it into halves repeatedly until we reach arrays of size 1, then merges them back.
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li><strong>Base Case:</strong> If the array has one or zero elements, it is already sorted; return as is.</li>
                    <li><strong>Divide:</strong> Split the array into two halves by finding the middle index: <code className="text-red-400">mid = (low + high) / 2</code>.</li>
                    <li><strong>Conquer:</strong> Apply the merge sort algorithm recursively on each of the two halves.</li>
                    <li><strong>Merge:</strong> Once we have two sorted halves, merge them by comparing elements one by one and placing the smaller element into a temporary array.</li>
                    <li><strong>Restore:</strong> Copy the sorted elements from the temporary array back into the original array.</li>
                  </ul>
                </div>
              </div>

              <h4 className="text-red-500 font-bold uppercase text-sm mb-4 tracking-widest">Code:</h4>
              <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mb-4 text-left text-neutral-300">
                <span className="text-blue-500">#include</span> <span className="text-orange-400">&lt;bits/stdc++.h&gt;</span><br/>
                <span className="text-red-500">using namespace</span> std;<br/><br/>
                <span className="text-red-500">class</span> <span className="text-yellow-400">Solution</span> &#123;<br/>
                <span className="text-red-500">public</span>:<br/>
                &nbsp;&nbsp;<span className="text-red-500">void</span> <span className="text-yellow-400">merge</span>(vector&lt;<span className="text-red-500">int</span>&gt;& arr, <span className="text-red-500">int</span> low, <span className="text-red-500">int</span> mid, <span className="text-red-500">int</span> high) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;vector&lt;<span className="text-red-500">int</span>&gt; temp;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">int</span> left = low, right = mid + 1;<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">while</span> (left &lt;= mid && right &lt;= high) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">if</span> (arr[left] &lt;= arr[right]) temp.push_back(arr[left++]);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">else</span> temp.push_back(arr[right++]);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">while</span> (left &lt;= mid) temp.push_back(arr[left++]);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">while</span> (right &lt;= high) temp.push_back(arr[right++]);<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">for</span> (<span className="text-red-500">int</span> i = low; i &lt;= high; i++) arr[i] = temp[i - low];<br/>
                &nbsp;&nbsp;&#125;<br/><br/>
                &nbsp;&nbsp;<span className="text-red-500">void</span> <span className="text-yellow-400">mergeSort</span>(vector&lt;<span className="text-red-500">int</span>&gt;& arr, <span className="text-red-500">int</span> low, <span className="text-red-500">int</span> high) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">if</span> (low &gt;= high) <span className="text-red-500">return</span>;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">int</span> mid = (low + high) / 2;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">mergeSort</span>(arr, low, mid);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">mergeSort</span>(arr, mid + 1, high);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">merge</span>(arr, low, mid, high);<br/>
                &nbsp;&nbsp;&#125;<br/>
                &#125;;
              </div>

              <h4 className="text-red-500 font-bold uppercase text-sm mb-4 tracking-widest">Output:</h4>
              <div className="p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300 text-left">
                Before Merge Sort: 5 2 8 4 1 <br/>
                After Merge Sort: 1 2 4 5 8
              </div>
            </div>

            {/* QUICK SORT */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold text-white mb-4 border-l-4 border-red-600 pl-4">5. Quick Sort</h3>
              <p className="text-neutral-300 mb-6 leading-8">
                QuickSort is an efficient <strong>Divide and Conquer</strong> algorithm. The core idea lies in partitioning the array around a pivot element such that all elements smaller than the pivot lie to its left and all greater elements lie to its right, ensuring the pivot is in its correct sorted place.
              </p>
              
              <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 mb-8">
                <h4 className="text-red-500 font-bold uppercase text-sm mb-4">Algorithm:</h4>
                <div className="space-y-4 text-neutral-300 leading-7">
                  <p>
                    By partitioning the array, the problem is broken down into smaller subproblems where each side of the pivot can be independently sorted.
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li><strong>Select Pivot:</strong> Choose a pivot element (in this implementation, the last element <code className="text-red-400">arr[high]</code>).</li>
                    <li><strong>Partitioning:</strong> Rearrange elements so those smaller than or equal to the pivot move to the left using a pointer <code className="text-red-400">i</code>.</li>
                    <li><strong>Place Pivot:</strong> Swap the pivot into its final sorted position at <code className="text-red-400">i + 1</code>.</li>
                    <li><strong>Recursion:</strong> Independently apply <code className="text-red-400">quickSort</code> to the left subarray <code className="text-red-400">[low...pi-1]</code> and the right subarray <code className="text-red-400">[pi+1...high]</code>.</li>
                    <li><strong>Base Case:</strong> Recursion stops when a subarray has zero or one element.</li>
                  </ul>
                </div>
              </div>

              <h4 className="text-red-500 font-bold uppercase text-sm mb-4 tracking-widest">Code:</h4>
              <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mb-4 text-left text-neutral-300">
                <span className="text-blue-500">#include</span> <span className="text-orange-400">&lt;bits/stdc++.h&gt;</span><br/>
                <span className="text-red-500">using namespace</span> std;<br/><br/>
                <span className="text-red-500">class</span> <span className="text-yellow-400">Solution</span> &#123;<br/>
                <span className="text-red-500">public</span>:<br/>
                &nbsp;&nbsp;<span className="text-red-500">void</span> <span className="text-yellow-400">quickSort</span>(vector&lt;<span className="text-red-500">int</span>&gt;& arr, <span className="text-red-500">int</span> low, <span className="text-red-500">int</span> high) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">if</span> (low &lt; high) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">int</span> pivotIndex = <span className="text-yellow-400">partition</span>(arr, low, high);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">quickSort</span>(arr, low, pivotIndex - 1);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">quickSort</span>(arr, pivotIndex + 1, high);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;&#125;<br/><br/>
                &nbsp;&nbsp;<span className="text-red-500">int</span> <span className="text-yellow-400">partition</span>(vector&lt;<span className="text-red-500">int</span>&gt;& arr, <span className="text-red-500">int</span> low, <span className="text-red-500">int</span> high) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">int</span> pivot = arr[high];<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">int</span> i = low - 1;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">for</span> (<span className="text-red-500">int</span> j = low; j &lt; high; j++) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">if</span> (arr[j] &lt;= pivot) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i++;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">swap</span>(arr[i], arr[j]);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">swap</span>(arr[i + 1], arr[high]);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">return</span> i + 1;<br/>
                &nbsp;&nbsp;&#125;<br/>
                &#125;;
              </div>

              <h4 className="text-red-500 font-bold uppercase text-sm mb-4 tracking-widest">Output:</h4>
              <div className="p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300 text-left">
                Before Quick Sort: 10 7 8 9 1 5 <br/>
                After Quick Sort: 1 5 7 8 9 10 
              </div>
            </div>
          </section>
        </article>
            <div className="mt-20 flex justify-between border-t border-neutral-800 pt-10">
                {/* Previous Lesson Button */}
                <Link href="/langroadmap/cpp/phase3/stack-queue-deque-priority-queues">
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
                                Stack, Queue, Deque... in C++ STL_
                            </span>
                        </div>
                    </motion.div>
                </Link>

                {/* Next Lesson Button */}
                <Link href="/langroadmap/cpp/phase4/oop">
                    <motion.div
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-4 group cursor-pointer"
                    >
                        <div className="text-right">
                            <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Next Lesson</span>
                            <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                                Phase-4 in C++...
                            </span>
                        </div>
                        <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors">
                            <ArrowRight className="w-5 h-5 text-red-500" />
                        </div>
                    </motion.div>
                </Link>
            </div>
      </main>

      {/* Scroll To Top Button */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={goToTop}
            className="fixed bottom-8 right-8 p-4 bg-red-600 text-white rounded-full shadow-2xl hover:bg-red-700 transition-all z-50"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}