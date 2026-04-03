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
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div className="bg-black/40 p-4 rounded-lg border border-neutral-800">
                    <span className="text-red-500 font-bold block mb-2 uppercase tracking-widest text-xs">Depth:</span>
                    If the function can rearrange the object as a lexicographically greater permutation, it returns true. If it is impossible (the container is sorted in descending order), it transforms the range into the first permutation (sorted ascending) and returns false.
                  </div>
                  <div className="bg-black/40 p-4 rounded-lg border border-neutral-800">
                    <span className="text-red-500 font-bold block mb-2 uppercase tracking-widest text-xs">Time Complexity:</span>
                    O(N) where N is the distance between first and last.
                  </div>
                </div>
              </div>

              {/* builtin_popcount */}
              <div className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">2. __builtin_popcount()</h3>
                <p className="text-neutral-300 leading-8 mb-4">
                  This is a built-in function in GCC compiler (not technically C++ standard, but widely used in competitive programming) that counts the number of set bits (1s) in an integer.
                </p>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div className="bg-black/40 p-4 rounded-lg border border-neutral-800">
                    <span className="text-red-500 font-bold block mb-2 uppercase tracking-widest text-xs">Depth:</span>
                    It uses CPU-specific instructions to perform the count extremely fast. For <code className="text-red-400">long long</code>, use <code className="text-red-400">__builtin_popcountll()</code>.
                  </div>
                  <div className="bg-black/40 p-4 rounded-lg border border-neutral-800 text-blue-400 font-mono">
                    int n = 7; // Binary: 111<br/>
                    cout &lt;&lt; __builtin_popcount(n); // Output: 3
                  </div>
                </div>
              </div>

              {/* sort */}
              <div className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">3. sort() in C++ STL</h3>
                <p className="text-neutral-300 leading-8 mb-4">
                  The most widely used function for sorting elements in a range. By default, it sorts in ascending order.
                </p>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div className="bg-black/40 p-4 rounded-lg border border-neutral-800">
                    <span className="text-red-500 font-bold block mb-2 uppercase tracking-widest text-xs">Depth:</span>
                    It uses <strong>IntroSort</strong>, a hybrid of QuickSort, HeapSort, and Insertion Sort. It ensures a worst-case time complexity of O(N log N).
                  </div>
                  <div className="bg-black/40 p-4 rounded-lg border border-neutral-800">
                    <span className="text-red-500 font-bold block mb-2 uppercase tracking-widest text-xs">Syntax:</span>
                    <code className="text-blue-400">sort(v.begin(), v.end());</code><br/>
                    <code className="text-blue-400">sort(arr, arr + n);</code>
                  </div>
                </div>
              </div>

              {/* min/max element */}
              <div className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">4. min_element() & max_element()</h3>
                <p className="text-neutral-300 leading-8 mb-4">
                  These functions find the smallest and largest elements in a range, respectively.
                </p>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div className="bg-black/40 p-4 rounded-lg border border-neutral-800">
                    <span className="text-red-500 font-bold block mb-2 uppercase tracking-widest text-xs">Note:</span>
                    These functions return an <strong>iterator</strong> to the element. To get the actual value, you must dereference it using the <code className="text-red-400">*</code> operator.
                  </div>
                  <div className="bg-black/40 p-4 rounded-lg border border-neutral-800 text-blue-400 font-mono">
                    auto it = max_element(v.begin(), v.end());<br/>
                    cout &lt;&lt; *it; // Prints max value
                  </div>
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
                Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. With each pass, the largest remaining element "bubbles up" to its correct position at the end.
              </p>
              
              <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 mb-8">
                <h4 className="text-red-500 font-bold uppercase text-sm mb-4">Algorithm:</h4>
                <ol className="list-decimal list-inside space-y-2 text-neutral-300">
                  <li>Run nested loops: outer loop from 0 to n-1, inner from 0 to n-i-1.</li>
                  <li>Compare <code className="bg-black px-2 py-1 rounded text-red-400">arr[j]</code> and <code className="bg-black px-2 py-1 rounded text-red-400">arr[j+1]</code>.</li>
                  <li>If <code className="text-red-400">arr[j] &gt; arr[j+1]</code>, swap them.</li>
                  <li>Repeat until the array is sorted.</li>
                </ol>
              </div>

              

              <h4 className="text-red-500 font-bold uppercase text-sm mb-4">Code:</h4>
              <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mb-4">
                <span className="text-red-500">void</span> <span className="text-yellow-400">bubbleSort</span>(<span className="text-red-500">int</span> arr[], <span className="text-red-500">int</span> n) &#123;<br/>
                &nbsp;&nbsp;<span className="text-red-500">for</span> (<span className="text-red-500">int</span> i = 0; i &lt; n - 1; i++) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">for</span> (<span className="text-red-500">int</span> j = 0; j &lt; n - i - 1; j++) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">if</span> (arr[j] &gt; arr[j + 1])<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">swap</span>(arr[j], arr[j + 1]);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;&#125;<br/>
                &#125;
              </div>

              <h4 className="text-red-500 font-bold uppercase text-sm mb-4">Output:</h4>
              <div className="p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300 text-left">
                Sorted array: 11 12 22 25 34 64 90
              </div>
            </div>

            {/* SELECTION SORT */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold text-white mb-4 border-l-4 border-red-600 pl-4">2. Selection Sort</h3>
              <p className="text-neutral-300 mb-6 leading-8">
                Selection sort works by repeatedly finding the minimum element from the unsorted part and putting it at the beginning. It maintains two subarrays: the sorted part and the remaining unsorted part.
              </p>
              
              <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 mb-8">
                <h4 className="text-red-500 font-bold uppercase text-sm mb-4">Algorithm:</h4>
                <ol className="list-decimal list-inside space-y-2 text-neutral-300">
                  <li>Initialize <code className="text-red-400">min_idx</code> to the current position.</li>
                  <li>Traverse the unsorted array to find the smallest element.</li>
                  <li>Swap the found minimum element with the first element of the unsorted part.</li>
                  <li>Repeat for the rest of the array.</li>
                </ol>
              </div>

              

              <h4 className="text-red-500 font-bold uppercase text-sm mb-4">Code:</h4>
              <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mb-4">
                <span className="text-red-500">void</span> <span className="text-yellow-400">selectionSort</span>(<span className="text-red-500">int</span> arr[], <span className="text-red-500">int</span> n) &#123;<br/>
                &nbsp;&nbsp;<span className="text-red-500">for</span> (<span className="text-red-500">int</span> i = 0; i &lt; n - 1; i++) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">int</span> min_idx = i;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">for</span> (<span className="text-red-500">int</span> j = i + 1; j &lt; n; j++)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">if</span> (arr[j] &lt; arr[min_idx]) min_idx = j;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">swap</span>(arr[min_idx], arr[i]);<br/>
                &nbsp;&nbsp;&#125;<br/>
                &#125;
              </div>

              <h4 className="text-red-500 font-bold uppercase text-sm mb-4">Output:</h4>
              <div className="p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300 text-left">
                Sorted array: 11 12 22 25 64
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
                <ol className="list-decimal list-inside space-y-2 text-neutral-300">
                  <li>Iterate from <code className="text-red-400">arr[1]</code> to <code className="text-red-400">arr[n]</code>.</li>
                  <li>Compare the current element (key) to its predecessor.</li>
                  <li>If the key element is smaller than its predecessor, compare it to the elements before.</li>
                  <li>Move the greater elements one position up to make space for the swapped element.</li>
                </ol>
              </div>

              <h4 className="text-red-500 font-bold uppercase text-sm mb-4">Code:</h4>
              <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mb-4">
                <span className="text-red-500">void</span> <span className="text-yellow-400">insertionSort</span>(<span className="text-red-500">int</span> arr[], <span className="text-red-500">int</span> n) &#123;<br/>
                &nbsp;&nbsp;<span className="text-red-500">for</span> (<span className="text-red-500">int</span> i = 1; i &lt; n; i++) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">int</span> key = arr[i];<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">int</span> j = i - 1;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">while</span> (j &gt;= 0 && arr[j] &gt; key) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[j + 1] = arr[j];<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;j = j - 1;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;arr[j + 1] = key;<br/>
                &nbsp;&nbsp;&#125;<br/>
                &#125;
              </div>

              <h4 className="text-red-500 font-bold uppercase text-sm mb-4">Output:</h4>
              <div className="p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300 text-left">
                Sorted array: 5 6 11 12 13
              </div>
            </div>

            {/* MERGE SORT */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold text-white mb-4 border-l-4 border-red-600 pl-4">4. Merge Sort</h3>
              <p className="text-neutral-300 mb-6 leading-8">
                Merge Sort is a Divide and Conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves.
              </p>
              
              <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 mb-8">
                <h4 className="text-red-500 font-bold uppercase text-sm mb-4">Algorithm:</h4>
                <ul className="list-disc list-inside space-y-2 text-neutral-300">
                  <li><strong>Divide:</strong> Find the midpoint and split the array.</li>
                  <li><strong>Conquer:</strong> Recursively sort the two halves.</li>
                  <li><strong>Combine:</strong> Merge the two sorted halves back into a single sorted array.</li>
                </ul>
              </div>

              

              <h4 className="text-red-500 font-bold uppercase text-sm mb-4">Code:</h4>
              <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mb-4">
                <span className="text-red-500">void</span> <span className="text-yellow-400">mergeSort</span>(<span className="text-red-500">int</span> arr[], <span className="text-red-500">int</span> l, <span className="text-red-500">int</span> r) &#123;<br/>
                &nbsp;&nbsp;<span className="text-red-500">if</span> (l &gt;= r) <span className="text-red-500">return</span>;<br/>
                &nbsp;&nbsp;<span className="text-red-500">int</span> m = l + (r - l) / 2;<br/>
                &nbsp;&nbsp;<span className="text-yellow-400">mergeSort</span>(arr, l, m);<br/>
                &nbsp;&nbsp;<span className="text-yellow-400">mergeSort</span>(arr, m + 1, r);<br/>
                &nbsp;&nbsp;<span className="text-yellow-400">merge</span>(arr, l, m, r);<br/>
                &#125;
              </div>

              <h4 className="text-red-500 font-bold uppercase text-sm mb-4">Output:</h4>
              <div className="p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300 text-left">
                Sorted array: 5 6 7 11 12 13
              </div>
            </div>

            {/* QUICK SORT */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold text-white mb-4 border-l-4 border-red-600 pl-4">5. Quick Sort</h3>
              <p className="text-neutral-300 mb-6 leading-8">
                QuickSort is another Divide and Conquer algorithm. It picks an element as a 'pivot' and partitions the given array around the picked pivot.
              </p>
              
              <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 mb-8">
                <h4 className="text-red-500 font-bold uppercase text-sm mb-4">Algorithm:</h4>
                <ol className="list-decimal list-inside space-y-2 text-neutral-300">
                  <li>Pick a pivot element (last, first, or random).</li>
                  <li>Partitioning: Rearrange array so elements &lt; pivot are on left, and &gt; pivot are on right.</li>
                  <li>Recursively sort the sub-arrays.</li>
                </ol>
              </div>

              

              <h4 className="text-red-500 font-bold uppercase text-sm mb-4">Code:</h4>
              <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mb-4">
                <span className="text-red-500">void</span> <span className="text-yellow-400">quickSort</span>(<span className="text-red-500">int</span> arr[], <span className="text-red-500">int</span> low, <span className="text-red-500">int</span> high) &#123;<br/>
                &nbsp;&nbsp;<span className="text-red-500">if</span> (low &lt; high) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">int</span> pi = <span className="text-yellow-400">partition</span>(arr, low, high);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">quickSort</span>(arr, low, pi - 1);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">quickSort</span>(arr, pi + 1, high);<br/>
                &nbsp;&nbsp;&#125;<br/>
                &#125;
              </div>

              <h4 className="text-red-500 font-bold uppercase text-sm mb-4">Output:</h4>
              <div className="p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300 text-left">
                Sorted array: 1 5 7 8 9 10
              </div>
            </div>
          </section>
        </article>
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