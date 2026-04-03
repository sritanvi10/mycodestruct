"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft, Box, List, MoveRight, Zap } from "lucide-react";
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
                    Sets <span className="text-red-600">in C++ STL_</span>
                </h1>
            </header>

            <article className="prose prose-invert max-w-none space-y-16">
                {/* UNORDERED_SET SECTION */}
                <section>
                <h2 className="text-3xl font-bold text-white mb-4">What is an unordered set?</h2>
                <p className="text-neutral-300 leading-8 mb-6">
                    An unordered set in STL is a container that stores unique elements in no particular order. Every operation on an unordered set takes O(1) complexity in the average case and takes O(n) in the worst case.
                </p>

                <h3 className="text-xl font-bold text-white mb-6 text-red-500">Functions in unordered set:</h3>
                <div className="space-y-4 text-neutral-300 mb-10">
                    <p><strong>insert()</strong> - to insert an element in the unordered set.</p>
                    <p><strong>begin()</strong> - return an iterator pointing to the first element in the unordered set.</p>
                    <p><strong>end()</strong> - returns an iterator to the theoretical element after the last element.</p>
                    <p><strong>count()</strong> - it returns 1 if the element is present in the container otherwise 0.</p>
                    <p><strong>clear()</strong> - deletes all the elements in unordered set.</p>
                    <p><strong>find()</strong> - to search an element in the unordered set.</p>
                    <p><strong>size()</strong> - returns the size of the unordered set.</p>
                </div>

                <h3 className="text-xl font-bold text-white mt-12 mb-4 uppercase tracking-widest text-red-500">Code:</h3>
                <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mb-4 text-left">
                    <span className="text-blue-500">#include</span><span className="text-orange-400">&lt;bits/stdc++.h&gt;</span><br/>
                    <span className="text-red-500">using namespace</span> std;<br/><br/>
                    <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>() &#123;<br/>
                    &nbsp;&nbsp;<span className="text-neutral-500">// Declare an unordered_set of integers</span><br/>
                    &nbsp;&nbsp;unordered_set&lt;<span className="text-red-500">int</span>&gt; s;<br/><br/>
                    &nbsp;&nbsp;<span className="text-neutral-500">// Insert elements from 1 to 10 into the unordered_set</span><br/>
                    &nbsp;&nbsp;<span className="text-red-500">for</span> (<span className="text-red-500">int</span> i = <span className="text-blue-400">1</span>; i &lt;= <span className="text-blue-400">10</span>; i++) &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;s.<span className="text-yellow-400">insert</span>(i); <span className="text-neutral-500">// insert() adds a new element to the set</span><br/>
                    &nbsp;&nbsp;&#125;<br/><br/>
                    &nbsp;&nbsp;<span className="text-neutral-500">// Display all elements present in the unordered_set</span><br/>
                    &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Elements present in the unordered set: "</span>;<br/>
                    &nbsp;&nbsp;<span className="text-red-500">for</span> (<span className="text-red-500">auto</span> it = s.<span className="text-yellow-400">begin</span>(); it != s.<span className="text-yellow-400">end</span>(); it++) &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; *it &lt;&lt; <span className="text-orange-400">" "</span>; <span className="text-neutral-500">// Dereference iterator to access the element</span><br/>
                    &nbsp;&nbsp;&#125;<br/>
                    &nbsp;&nbsp;cout &lt;&lt; endl;<br/><br/>
                    &nbsp;&nbsp;<span className="text-red-500">int</span> n = <span className="text-blue-400">2</span>;<br/>
                    &nbsp;&nbsp;<span className="text-neutral-500">// Check if element 2 exists in the set using find()</span><br/>
                    &nbsp;&nbsp;<span className="text-red-500">if</span> (s.<span className="text-yellow-400">find</span>(<span className="text-blue-400">2</span>) != s.<span className="text-yellow-400">end</span>()) <span className="text-neutral-500">// find() returns an iterator to element if found, else s.end()</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; n &lt;&lt; <span className="text-orange-400">" is present in unordered set"</span> &lt;&lt; endl;<br/><br/>
                    &nbsp;&nbsp;<span className="text-neutral-500">// Erase the first element from the set using iterator</span><br/>
                    &nbsp;&nbsp;s.<span className="text-yellow-400">erase</span>(s.<span className="text-yellow-400">begin</span>()); <span className="text-neutral-500">// erase() removes element at given iterator position</span><br/><br/>
                    &nbsp;&nbsp;<span className="text-neutral-500">// Display elements after deletion</span><br/>
                    &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Elements after deleting the first element: "</span>;<br/>
                    &nbsp;&nbsp;<span className="text-red-500">for</span> (<span className="text-red-500">auto</span> it = s.<span className="text-yellow-400">begin</span>(); it != s.<span className="text-yellow-400">end</span>(); it++) &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; *it &lt;&lt; <span className="text-orange-400">" "</span>;<br/>
                    &nbsp;&nbsp;&#125;<br/>
                    &nbsp;&nbsp;cout &lt;&lt; endl;<br/><br/>
                    &nbsp;&nbsp;<span className="text-neutral-500">// Display size of the unordered set</span><br/>
                    &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"The size of the unordered set is: "</span> &lt;&lt; s.<span className="text-yellow-400">size</span>() &lt;&lt; endl;<br/><br/>
                    &nbsp;&nbsp;<span className="text-neutral-500">// Check if the unordered set is empty</span><br/>
                    &nbsp;&nbsp;<span className="text-red-500">if</span> (s.<span className="text-yellow-400">empty</span>() == <span className="text-red-500">false</span>) <span className="text-neutral-500">// empty() returns true if set has no elements</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"The unordered set is not empty "</span> &lt;&lt; endl;<br/>
                    &nbsp;&nbsp;<span className="text-red-500">else</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"The unordered set is empty"</span> &lt;&lt; endl;<br/><br/>
                    &nbsp;&nbsp;<span className="text-neutral-500">// Clear all elements from the unordered set</span><br/>
                    &nbsp;&nbsp;s.<span className="text-yellow-400">clear</span>(); <span className="text-neutral-500">// clear() removes all elements</span><br/><br/>
                    &nbsp;&nbsp;<span className="text-neutral-500">// Display size after clearing</span><br/>
                    &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Size of the unordered set after clearing all the elements: "</span> &lt;&lt; s.<span className="text-yellow-400">size</span>();<br/>
                    &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br/>
                    &#125;
                </div>

                <h3 className="text-xl font-bold text-white mt-8 mb-4 uppercase tracking-widest text-red-500">Output:</h3>
                <div className="p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300 mb-12 text-left">
                    Elements present in the unordered set: 10 9 8 7 6 5 4 3 2 1 <br/>
                    2 is present in unordered set<br/>
                    Elements after deleting the first element: 9 8 7 6 5 4 3 2 1 <br/>
                    The size of the unordered set is: 9<br/>
                    The unordered set is not empty <br/>
                    Size of the unordered set after clearing all the elements: 0
                </div>

                <h3 className="text-xl font-bold text-white mt-8 mb-4 text-red-500">Other functions:</h3>
                <ul className="space-y-2 text-neutral-300 list-none p-0 mb-16">
                    <li><strong>cbegin()</strong> – it refers to the first element of the unordered set.</li>
                    <li><strong>cend()</strong> – it refers to the theoretical element after the last element of the unordered set.</li>
                    <li><strong>bucket_size()</strong> - gives the total number of elements present in a specific bucket in an unordered set.</li>
                    <li><strong>emplace()</strong> - to insert an element in the unordered set.</li>
                    <li><strong>max_size()</strong> - the maximum elements an unordered_set can hold.</li>
                    <li><strong>max_bucket_count()</strong> - to check the maximum number of buckets an unordered set can hold.</li>
                </ul>
                </section>

                <hr className="my-16 border-neutral-800" />

                {/* SET SECTION */}
                <section>
                <h2 className="text-3xl font-bold text-white mb-4">What is a set?</h2>
                <p className="text-neutral-300 leading-8 mb-6">
                    A set in STL is a container that stores unique elements in a particular order. Every operation on a set takes O(1) complexity in the average case and takes O(n) in the worst case.
                </p>

                

                <h3 className="text-xl font-bold text-white mb-6 text-red-500">Functions in set:</h3>
                <div className="space-y-6 text-neutral-300 mb-10">
                    <div>
                    <p><strong>insert()</strong> – to insert an element in the set.</p>
                    <code className="text-blue-400 block bg-black p-3 rounded mt-2 font-mono text-sm">
                        set&lt;int&gt; s;<br/>
                        s.insert(1);<br/>
                        s.insert(2);
                    </code>
                    </div>
                    <div>
                    <p><strong>begin()</strong> – return an iterator pointing to the first element in the set.</p>
                    <code className="text-blue-400 block bg-black p-2 rounded mt-2 font-mono text-sm">s.begin();</code>
                    </div>
                    <div>
                    <p><strong>end()</strong> – returns an iterator to the theoretical element after the last element.</p>
                    <code className="text-blue-400 block bg-black p-2 rounded mt-2 font-mono text-sm">s.end();</code>
                    </div>
                    <div>
                    <p><strong>count()</strong> – returns true or false based on whether the element is present in the set or not.</p>
                    <code className="text-blue-400 block bg-black p-3 rounded mt-2 font-mono text-sm">
                        set&lt;int&gt; s;<br/>
                        s.insert(1);<br/>
                        s.insert(2);<br/>
                        s.count(2); //returns true
                    </code>
                    </div>
                    <div>
                    <p><strong>clear()</strong> – deletes all the elements in the set.</p>
                    <code className="text-blue-400 block bg-black p-2 rounded mt-2 font-mono text-sm">s.clear();</code>
                    </div>
                    <div>
                    <p><strong>find()</strong> – to search an element in the set.</p>
                    <code className="text-blue-400 block bg-black p-3 rounded mt-2 font-mono text-sm">
                        set&lt;int&gt; s;<br/>
                        s.insert(1);<br/>
                        s.insert(2);<br/>
                        if(s.find(2)!=s.end()) cout&lt;&lt;"true"&lt;&lt;endl;
                    </code>
                    </div>
                    <div>
                    <p><strong>erase()</strong> – to delete a single element or elements between a particular range.</p>
                    <code className="text-blue-400 block bg-black p-2 rounded mt-2 font-mono text-sm">s.erase();</code>
                    </div>
                    <div>
                    <p><strong>size()</strong> – returns the size of the set.</p>
                    <code className="text-blue-400 block bg-black p-2 rounded mt-2 font-mono text-sm">s.size();</code>
                    </div>
                    <div>
                    <p><strong>empty()</strong> – to check if the set is empty or not.</p>
                    <code className="text-blue-400 block bg-black p-2 rounded mt-2 font-mono text-sm">s.empty();</code>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-white mt-12 mb-4 uppercase tracking-widest text-red-500">Code:</h3>
                <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mb-4 text-left">
                    <span className="text-blue-500">#include</span><span className="text-orange-400">&lt;bits/stdc++.h&gt;</span><br/>
                    <span className="text-red-500">using namespace</span> std;<br/><br/>
                    <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>() &#123;<br/>
                    &nbsp;&nbsp;set &lt; <span className="text-red-500">int</span> &gt; s;<br/>
                    &nbsp;&nbsp;<span className="text-red-500">for</span> (<span className="text-red-500">int</span> i = <span className="text-blue-400">1</span>; i &lt;= <span className="text-blue-400">10</span>; i++) &#123;  <span className="text-neutral-500">//Iterate through 10 and insert the value of i in the set</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;s.<span className="text-yellow-400">insert</span>(i);<br/>
                    &nbsp;&nbsp;&#125;<br/><br/>
                    &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Elements present in the set: "</span>;<br/>
                    &nbsp;&nbsp;<span className="text-red-500">for</span> (<span className="text-red-500">auto</span> it = s.<span className="text-yellow-400">begin</span>(); it != s.<span className="text-yellow-400">end</span>(); it++) &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; * it &lt;&lt; <span className="text-orange-400">" "</span>;  <span className="text-neutral-500">//If element is found print it</span><br/>
                    &nbsp;&nbsp;&#125;<br/>
                    &nbsp;&nbsp;cout &lt;&lt; endl;<br/>
                    &nbsp;&nbsp;<span className="text-red-500">int</span> n = <span className="text-blue-400">2</span>;<br/>
                    &nbsp;&nbsp;<span className="text-red-500">if</span> (s.<span className="text-yellow-400">find</span>(<span className="text-blue-400">2</span>) != s.<span className="text-yellow-400">end</span>())<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; n &lt;&lt; <span className="text-orange-400">" is present in set"</span> &lt;&lt; endl;  <span className="text-neutral-500">//Print the element</span><br/><br/>
                    &nbsp;&nbsp;s.<span className="text-yellow-400">erase</span>(s.<span className="text-yellow-400">begin</span>());<br/>
                    &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Elements after deleting the first element: "</span>;<br/>
                    &nbsp;&nbsp;<span className="text-red-500">for</span> (<span className="text-red-500">auto</span> it = s.<span className="text-yellow-400">begin</span>(); it != s.<span className="text-yellow-400">end</span>(); it++) &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; * it &lt;&lt; <span className="text-orange-400">" "</span>;<br/>
                    &nbsp;&nbsp;&#125;<br/>
                    &nbsp;&nbsp;cout &lt;&lt; endl;<br/><br/>
                    &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"The size of the set is: "</span> &lt;&lt; s.<span className="text-yellow-400">size</span>() &lt;&lt; endl;  <span className="text-neutral-500">///Return the size of the set</span><br/><br/>
                    &nbsp;&nbsp;<span className="text-red-500">if</span> (s.<span className="text-yellow-400">empty</span>() == <span className="text-red-500">false</span>)<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"The set is not empty "</span> &lt;&lt; endl;  <span className="text-neutral-500">//If set is not empty and elements are still present in it</span><br/>
                    &nbsp;&nbsp;<span className="text-red-500">else</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"The set is empty"</span> &lt;&lt; endl;  <span className="text-neutral-500">//If set is empty</span><br/>
                    &nbsp;&nbsp;s.<span className="text-yellow-400">clear</span>();<br/>
                    &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Size of the set after clearing all the elements: "</span> &lt;&lt; s.<span className="text-yellow-400">size</span>();<br/>
                    &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br/>
                    &#125;
                </div>

                <h3 className="text-xl font-bold text-white mt-8 mb-4 uppercase tracking-widest text-red-500">Output:</h3>
                <div className="p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300 mb-12 text-left">
                    Elements present in the set: 1 2 3 4 5 6 7 8 9 10 <br/>
                    2 is present in set<br/>
                    Elements after deleting the first element: 2 3 4 5 6 7 8 9 10 <br/>
                    The size of the set is: 9<br/>
                    The set is not empty <br/>
                    Size of the set after clearing all the elements: 0
                </div>

                <h3 className="text-xl font-bold text-white mt-8 mb-4 text-red-500">Other functions:</h3>
                <ul className="space-y-2 text-neutral-300 list-none p-0 mb-16">
                    <li><strong>cbegin()</strong> – it refers to the first element of the set.</li>
                    <li><strong>cend()</strong> – it refers to the theoretical element after the last element of the set.</li>
                    <li><strong>rbegin()</strong> – it points to the last element of the set.</li>
                    <li><strong>rend()</strong> – it points to the theoretical element before the first element of the set.</li>
                    <li><strong>bucket_size()</strong> – gives the total number of elements present in a specific bucket in a set.</li>
                    <li><strong>emplace()</strong> – to insert an element in the set.</li>
                    <li><strong>max_size()</strong> – the maximum elements a set can hold.</li>
                    <li><strong>max_bucket_count()</strong> – to check the maximum number of buckets a set can hold.</li>
                </ul>
                </section>

                <hr className="my-16 border-neutral-800" />

                {/* UNORDERED_MULTISET SECTION */}
                <section>
                <h2 className="text-3xl font-bold text-white mb-4">What is an Unordered-multiset?</h2>
                <p className="text-neutral-300 leading-8 mb-6">
                    An unordered_multiset in STL is an associative container just like an unordered set the only difference is it can store duplicate elements in it.
                </p>

                <h3 className="text-xl font-bold text-white mb-6 text-red-500">Functions in multiset:</h3>
                <div className="space-y-4 text-neutral-300 mb-10">
                    <p><strong>insert()</strong> – Used to insert an element in the unordered_multiset.</p>
                    <p><strong>begin()</strong> – Returns an iterator pointing to the first element in the unordered_multiset.</p>
                    <p><strong>end()</strong> – Returns an iterator pointing to the theoretical element after the last element.</p>
                    <p><strong>count()</strong> – Returns the count of a particular element in the unordered_multiset.</p>
                    <p><strong>clear()</strong> – Deletes all the elements in the unordered_multiset.</p>
                    <p><strong>find()</strong> – Searches for an element in the unordered_multiset and returns an iterator to it if found, otherwise returns end().</p>
                    <p><strong>erase()</strong> – Deletes a single element or elements between a specified range.</p>
                    <p><strong>size()</strong> – Returns the number of elements present in the unordered_multiset.</p>
                    <p><strong>empty()</strong> – Checks if the unordered_multiset is empty or not.</p>
                </div>

                <h3 className="text-xl font-bold text-white mt-12 mb-4 uppercase tracking-widest text-red-500">Code:</h3>
                <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mb-4 text-left">
                    <span className="text-blue-500">#include</span><span className="text-orange-400">&lt;bits/stdc++.h&gt;</span><br/>
                    <span className="text-red-500">using namespace</span> std;<br/><br/>
                    <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>() &#123;<br/>
                    &nbsp;&nbsp;<span className="text-neutral-500">// Declare an unordered_multiset of integers</span><br/>
                    &nbsp;&nbsp;unordered_multiset&lt;<span className="text-red-500">int</span>&gt; s;<br/><br/>
                    &nbsp;&nbsp;<span className="text-neutral-500">// Insert elements from 1 to 10 into the unordered_multiset</span><br/>
                    &nbsp;&nbsp;<span className="text-red-500">for</span> (<span className="text-red-500">int</span> i = <span className="text-blue-400">1</span>; i &lt;= <span className="text-blue-400">10</span>; i++) &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;s.<span className="text-yellow-400">insert</span>(i);<br/>
                    &nbsp;&nbsp;&#125;<br/><br/>
                    &nbsp;&nbsp;<span className="text-neutral-500">// Insert an additional 5 to demonstrate duplicate storage</span><br/>
                    &nbsp;&nbsp;s.<span className="text-yellow-400">insert</span>(<span className="text-blue-400">5</span>);<br/><br/>
                    &nbsp;&nbsp;<span className="text-neutral-500">// Display all elements of the unordered_multiset</span><br/>
                    &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Elements present in the unordered multiset: "</span>;<br/>
                    &nbsp;&nbsp;<span className="text-red-500">for</span> (<span className="text-red-500">auto</span> it = s.<span className="text-yellow-400">begin</span>(); it != s.<span className="text-yellow-400">end</span>(); it++) &#123; <span className="text-neutral-500">// Iterate over each element</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; *it &lt;&lt; <span className="text-orange-400">" "</span>; <span className="text-neutral-500">// Dereference iterator to get the value</span><br/>
                    &nbsp;&nbsp;&#125;<br/>
                    &nbsp;&nbsp;cout &lt;&lt; endl;<br/><br/>
                    &nbsp;&nbsp;<span className="text-red-500">int</span> n = <span className="text-blue-400">2</span>;<br/>
                    &nbsp;&nbsp;<span className="text-neutral-500">// Check if element '2' is present using find()</span><br/>
                    &nbsp;&nbsp;<span className="text-red-500">if</span> (s.<span className="text-yellow-400">find</span>(<span className="text-blue-400">2</span>) != s.<span className="text-yellow-400">end</span>())<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; n &lt;&lt; <span className="text-orange-400">" is present in unordered multiset"</span> &lt;&lt; endl;<br/><br/>
                    &nbsp;&nbsp;<span className="text-neutral-500">// Erase the first element using iterator</span><br/>
                    &nbsp;&nbsp;s.<span className="text-yellow-400">erase</span>(s.<span className="text-yellow-400">begin</span>());<br/>
                    &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Elements after deleting the first element: "</span>;<br/>
                    &nbsp;&nbsp;<span className="text-red-500">for</span> (<span className="text-red-500">auto</span> it = s.<span className="text-yellow-400">begin</span>(); it != s.<span className="text-yellow-400">end</span>(); it++) &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; *it &lt;&lt; <span className="text-orange-400">" "</span>;<br/>
                    &nbsp;&nbsp;&#125;<br/>
                    &nbsp;&nbsp;cout &lt;&lt; endl;<br/><br/>
                    &nbsp;&nbsp;<span className="text-neutral-500">// Display the size of the unordered_multiset</span><br/>
                    &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"The size of the unordered multiset is: "</span> &lt;&lt; s.<span className="text-yellow-400">size</span>() &lt;&lt; endl;<br/><br/>
                    &nbsp;&nbsp;<span className="text-neutral-500">// Check if the unordered_multiset is empty</span><br/>
                    &nbsp;&nbsp;<span className="text-red-500">if</span> (s.<span className="text-yellow-400">empty</span>() == <span className="text-red-500">false</span>)<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"The unordered multiset is not empty "</span> &lt;&lt; endl;<br/>
                    &nbsp;&nbsp;<span className="text-red-500">else</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"The unordered multiset is empty"</span> &lt;&lt; endl;<br/><br/>
                    &nbsp;&nbsp;<span className="text-neutral-500">// Clear all elements from the unordered_multiset</span><br/>
                    &nbsp;&nbsp;s.<span className="text-yellow-400">clear</span>();<br/>
                    &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Size of the unordered multiset after clearing all the elements: "</span> &lt;&lt; s.<span className="text-yellow-400">size</span>();<br/>
                    &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br/>
                    &#125;
                </div>

                <h3 className="text-xl font-bold text-white mt-8 mb-4 uppercase tracking-widest text-red-500">Output:</h3>
                <div className="p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300 mb-12 text-left">
                    Elements present in the unordered multiset: 5 10 9 8 7 6 5 4 3 2 1 <br/>
                    2 is present in unordered multiset<br/>
                    Elements after deleting the first element: 10 9 8 7 6 5 4 3 2 1 <br/>
                    The size of the unordered multiset is: 10<br/>
                    The unordered multiset is not empty <br/>
                    Size of the unordered multiset after clearing all the elements: 0
                </div>

                <h3 className="text-xl font-bold text-white mt-8 mb-4 text-red-500">Other functions:</h3>
                <ul className="space-y-2 text-neutral-300 list-none p-0 mb-16">
                    <li><strong>cbegin()</strong> – it refers to the first element of the unordered multiset.</li>
                    <li><strong>cend()</strong> – it refers to the theoretical element after the last element of the unordered multiset.</li>
                    <li><strong>rbegin()</strong> – it points to the last element of the unordered multiset.</li>
                    <li><strong>rend()</strong> – it points to the theoretical element before the first element of the unordered multiset.</li>
                    <li><strong>emplace()</strong> – to insert an element in the unordered multiset.</li>
                    <li><strong>max_size()</strong> – the maximum elements an unordered multiset can hold.</li>
                </ul>
                </section>

                <hr className="my-16 border-neutral-800" />

                {/* MULTISET SECTION */}
                <section>
                <h2 className="text-3xl font-bold text-white mb-4">What is a Multiset in C++ STL?</h2>
                <p className="text-neutral-300 leading-8 mb-6">
                    A multiset in STL is an associative container similar to a set, but it allows duplicate elements.
                </p>

                <h4 className="text-lg font-bold text-white uppercase tracking-widest text-red-500">Syntax</h4>
                <code className="text-blue-400 block bg-black p-3 rounded mt-2 mb-4 font-mono text-sm">
                    multiset&lt;object_type&gt; variable_name;
                </code>

                <h4 className="text-lg font-bold text-white mt-4 uppercase tracking-widest text-red-500">Example</h4>
                <div className="bg-black p-3 rounded mt-2 mb-8">
                    <code className="text-blue-400 block font-mono text-sm">multiset&lt;int&gt; s;</code>
                    <code className="text-blue-400 block font-mono text-sm">multiset&lt;string&gt; str;</code>
                </div>

                <h3 className="text-xl font-bold text-white mb-6 text-red-500">Functions in Multiset</h3>
                <div className="space-y-6 text-neutral-300 mb-10">
                    <div>
                    <p>1. <strong>insert()</strong> – to insert an element</p>
                    <code className="text-blue-400 block bg-black p-3 rounded mt-2 font-mono text-sm">
                        multiset&lt;int&gt; s;<br/>
                        s.insert(1);<br/>
                        s.insert(2);
                    </code>
                    </div>
                    <div>
                    <p>2. <strong>begin()</strong> - returns iterator to first element</p>
                    <code className="text-blue-400 block bg-black p-2 rounded mt-2 font-mono text-sm">s.begin();</code>
                    </div>
                    <div>
                    <p>3. <strong>end()</strong> - returns iterator after last element</p>
                    <code className="text-blue-400 block bg-black p-2 rounded mt-2 font-mono text-sm">s.end();</code>
                    </div>
                    <div>
                    <p>4. <strong>count()</strong> - count occurrences of an element</p>
                    <code className="text-blue-400 block bg-black p-3 rounded mt-2 font-mono text-sm">
                        multiset&lt;int&gt; s;<br/>
                        s.insert(1);<br/>
                        s.insert(2);<br/>
                        s.count(2); // returns 1
                    </code>
                    </div>
                    <div>
                    <p>5. <strong>clear()</strong> - deletes all elements</p>
                    <code className="text-blue-400 block bg-black p-2 rounded mt-2 font-mono text-sm">s.clear();</code>
                    </div>
                    <div>
                    <p>6. <strong>find()</strong> - search an element</p>
                    <code className="text-blue-400 block bg-black p-3 rounded mt-2 font-mono text-sm">
                        multiset&lt;int&gt; s;<br/>
                        s.insert(1);<br/>
                        s.insert(2);<br/>
                        if (s.find(2) != s.end()) cout &lt;&lt; "true" &lt;&lt; endl;
                    </code>
                    </div>
                    <div>
                    <p>7. <strong>erase()</strong> - delete a single element or range</p>
                    <code className="text-blue-400 block bg-black p-2 rounded mt-2 font-mono text-sm">s.erase();</code>
                    </div>
                    <div>
                    <p>8. <strong>size()</strong> - returns number of elements</p>
                    <code className="text-blue-400 block bg-black p-2 rounded mt-2 font-mono text-sm">s.size();</code>
                    </div>
                    <div>
                    <p>9. <strong>empty()</strong> - checks if multiset is empty</p>
                    <code className="text-blue-400 block bg-black p-2 rounded mt-2 font-mono text-sm">s.empty();</code>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-white mt-12 mb-4 uppercase tracking-widest text-red-500">Code:</h3>
                <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mb-4 text-left">
                    <span className="text-blue-500">#include</span> <span className="text-orange-400">&lt;bits/stdc++.h&gt;</span><br/>
                    <span className="text-red-500">using namespace</span> std;<br/><br/>
                    <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>() &#123;<br/>
                    &nbsp;&nbsp;<span className="text-neutral-500">// Declare a multiset of integers</span><br/>
                    &nbsp;&nbsp;multiset&lt;<span className="text-red-500">int</span>&gt; s;<br/><br/>
                    &nbsp;&nbsp;<span className="text-neutral-500">// Insert elements 1 to 10</span><br/>
                    &nbsp;&nbsp;<span className="text-red-500">for</span> (<span className="text-red-500">int</span> i = <span className="text-blue-400">1</span>; i &lt;= <span className="text-blue-400">10</span>; i++) &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;s.<span className="text-yellow-400">insert</span>(i);<br/>
                    &nbsp;&nbsp;&#125;<br/><br/>
                    &nbsp;&nbsp;<span className="text-neutral-500">// Insert a duplicate element</span><br/>
                    &nbsp;&nbsp;s.<span className="text-yellow-400">insert</span>(<span className="text-blue-400">5</span>);<br/><br/>
                    &nbsp;&nbsp;<span className="text-neutral-500">// Display elements in the multiset (ordered automatically)</span><br/>
                    &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Elements present in the multiset: "</span>;<br/>
                    &nbsp;&nbsp;<span className="text-red-500">for</span> (<span className="text-red-500">auto</span> it = s.<span className="text-yellow-400">begin</span>(); it != s.<span className="text-yellow-400">end</span>(); it++) &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; *it &lt;&lt; <span className="text-orange-400">" "</span>;<br/>
                    &nbsp;&nbsp;&#125;<br/>
                    &nbsp;&nbsp;cout &lt;&lt; endl;<br/><br/>
                    &nbsp;&nbsp;<span className="text-neutral-500">// Search for a specific element (2 in this case)</span><br/>
                    &nbsp;&nbsp;<span className="text-red-500">int</span> n = <span className="text-blue-400">2</span>;<br/>
                    &nbsp;&nbsp;<span className="text-red-500">if</span> (s.<span className="text-yellow-400">find</span>(<span className="text-blue-400">2</span>) != s.<span className="text-yellow-400">end</span>())<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; n &lt;&lt; <span className="text-orange-400">" is present in multiset"</span> &lt;&lt; endl;<br/><br/>
                    &nbsp;&nbsp;<span className="text-neutral-500">// Erase the first element</span><br/>
                    &nbsp;&nbsp;s.<span className="text-yellow-400">erase</span>(s.<span className="text-yellow-400">begin</span>());<br/><br/>
                    &nbsp;&nbsp;<span className="text-neutral-500">// Display elements after deletion</span><br/>
                    &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Elements after deleting the first element: "</span>;<br/>
                    &nbsp;&nbsp;<span className="text-red-500">for</span> (<span className="text-red-500">auto</span> it = s.<span className="text-yellow-400">begin</span>(); it != s.<span className="text-yellow-400">end</span>(); it++) &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; *it &lt;&lt; <span className="text-orange-400">" "</span>;<br/>
                    &nbsp;&nbsp;&#125;<br/>
                    &nbsp;&nbsp;cout &lt;&lt; endl;<br/><br/>
                    &nbsp;&nbsp;<span className="text-neutral-500">// Display the size of the multiset</span><br/>
                    &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"The size of the multiset is: "</span> &lt;&lt; s.<span className="text-yellow-400">size</span>() &lt;&lt; endl;<br/><br/>
                    &nbsp;&nbsp;<span className="text-neutral-500">// Check if the multiset is empty</span><br/>
                    &nbsp;&nbsp;<span className="text-red-500">if</span> (!s.<span className="text-yellow-400">empty</span>())<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"The multiset is not empty"</span> &lt;&lt; endl;<br/>
                    &nbsp;&nbsp;<span className="text-red-500">else</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"The multiset is empty"</span> &lt;&lt; endl;<br/><br/>
                    &nbsp;&nbsp;<span className="text-neutral-500">// Clear all elements</span><br/>
                    &nbsp;&nbsp;s.<span className="text-yellow-400">clear</span>();<br/><br/>
                    &nbsp;&nbsp;<span className="text-neutral-500">// Display size after clearing</span><br/>
                    &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Size of the multiset after clearing: "</span> &lt;&lt; s.<span className="text-yellow-400">size</span>();<br/>
                    &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br/>
                    &#125;
                </div>

                <h3 className="text-xl font-bold text-white mt-8 mb-4 uppercase tracking-widest text-red-500">Output:</h3>
                <div className="p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300 mb-12 text-left">
                    Elements present in the multiset: 1 2 3 4 5 5 6 7 8 9 10 <br/>
                    2 is present in multiset<br/>
                    Elements after deleting the first element: 2 3 4 5 5 6 7 8 9 10 <br/>
                    The size of the multiset is: 10<br/>
                    The multiset is not empty<br/>
                    Size of the multiset after clearing: 0
                </div>

                <h3 className="text-xl font-bold text-white mt-8 mb-4 text-red-500">Other Useful Functions</h3>
                <ul className="space-y-2 text-neutral-300 list-none p-0 mb-16">
                    <li><strong>cbegin()</strong> returns constant iterator to first element</li>
                    <li><strong>cend()</strong> returns constant iterator after last element</li>
                    <li><strong>rbegin()</strong> returns reverse iterator to last element</li>
                    <li><strong>rend()</strong> returns reverse iterator before first element</li>
                    <li><strong>emplace()</strong> insert an element efficiently</li>
                    <li><strong>max_size()</strong> returns maximum number of elements a multiset can hold</li>
                </ul>
                </section>
            </article>
            {/* Navigation Buttons */}
            <div className="mt-20 flex justify-between border-t border-neutral-800 pt-10">
                {/* Previous Lesson Button */}
                <Link href="/langroadmap/cpp/phase3/maps">
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
                                Maps in C++
                            </span>
                        </div>
                    </motion.div>
                </Link>

                {/* Next Lesson Button */}
                <Link href="/langroadmap/cpp/phase3/pairs-tuples">
                    <motion.div
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-4 group cursor-pointer"
                    >
                        <div className="text-right">
                            <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Next Lesson</span>
                            <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                                Pairs, Tuples in C++
                            </span>
                        </div>
                        <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors">
                            <ArrowRight className="w-5 h-5 text-red-500" />
                        </div>
                    </motion.div>
                </Link>
            </div>

        {/* Back to Top */}
        <AnimatePresence>
          {showTopBtn && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goToTop}
              className="fixed bottom-8 right-8 z-50 p-4 bg-red-600 text-white rounded-full shadow-lg border border-red-500/20"
            >
              <ArrowUp className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>
        </main>
    </div>
  );
}