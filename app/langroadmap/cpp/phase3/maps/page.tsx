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
                    Maps, Sets, Pairs & Tuples <span className="text-red-600">in C++ STL_</span>
                </h1>
            </header>

            <article className="prose prose-invert max-w-none space-y-16">
                {/* UNORDERED_MAP SECTION */}
                <section>
                <h2 className="text-3xl font-bold text-white mb-4">What is an unordered_map in STL?</h2>
                <p className="text-neutral-300 leading-8 mb-6">
                    unordered_map in STL are associative containers where each element consists of a key value and a mapped value. Two mapped values cannot have the same key value. The elements can be in any order.
                </p>

                <h4 className="text-lg font-bold text-white uppercase tracking-widest text-red-500">Syntax:</h4>
                <code className="text-blue-400 block bg-black p-3 rounded mt-2 mb-8 font-mono text-sm">
                    unordered_map&lt;object_type, object_type&gt; variable_name;
                </code>

                <h3 className="text-xl font-bold text-white mb-6 text-red-500">Functions in Unordered map:</h3>
                <div className="space-y-4 text-neutral-300 mb-10">
                    <p><strong>insert()</strong> – Used to insert an element in the unordered_map.</p>
                    <p><strong>begin()</strong> – Returns an iterator pointing to the first element in the map.</p>
                    <p><strong>end()</strong> – Returns an iterator pointing to the theoretical element after the last element.</p>
                    <p><strong>clear()</strong> – Deletes all the elements in the map.</p>
                    <p><strong>find()</strong> – Searches for an element in the map and returns an iterator to it if found, otherwise returns end().</p>
                    <p><strong>erase()</strong> – Deletes a single element by key or elements in a specified range using iterators.</p>
                    <p><strong>size()</strong> – Returns the number of elements present in the map.</p>
                    <p><strong>empty()</strong> – Checks if the map is empty or not.</p>
                </div>

                <h3 className="text-xl font-bold text-white mt-12 mb-4 uppercase tracking-widest text-red-500">CODE:</h3>
                <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mb-4">
                    <span className="text-blue-500">#include</span> <span className="text-orange-400">&lt;bits/stdc++.h&gt;</span><br/>
                    <span className="text-red-500">using namespace</span> std; <span className="text-neutral-500">// Allows direct use of standard library objects without prefixing std::</span><br/><br/>
                    <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>() &#123;<br/>
                    &nbsp;&nbsp;<span className="text-neutral-500">// Declare an unordered_map 'mp' with key and value both of type int</span><br/>
                    &nbsp;&nbsp;unordered_map&lt;<span className="text-red-500">int</span>, <span className="text-red-500">int</span>&gt; mp;<br/><br/>
                    &nbsp;&nbsp;<span className="text-neutral-500">// Insert 5 key-value pairs into the unordered_map</span><br/>
                    &nbsp;&nbsp;<span className="text-neutral-500">// Each key is i, and each value is i * 10</span><br/>
                    &nbsp;&nbsp;<span className="text-red-500">for</span> (<span className="text-red-500">int</span> i = <span className="text-blue-400">1</span>; i &lt;= <span className="text-blue-400">5</span>; i++) &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;mp.<span className="text-yellow-400">insert</span>(&#123; i , i * <span className="text-blue-400">10</span> &#125;);<br/>
                    &nbsp;&nbsp;&#125;<br/><br/>
                    &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Elements present in the map: "</span> &lt;&lt; endl;<br/>
                    &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Key\tElement"</span> &lt;&lt; endl;<br/><br/>
                    &nbsp;&nbsp;<span className="text-neutral-500">// Iterate through the map and print each key-value pair</span><br/>
                    &nbsp;&nbsp;<span className="text-neutral-500">// 'auto it' is an iterator pointing to each element</span><br/>
                    &nbsp;&nbsp;<span className="text-red-500">for</span> (<span className="text-red-500">auto</span> it = mp.<span className="text-yellow-400">begin</span>(); it != mp.<span className="text-yellow-400">end</span>(); it++) &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; it-&gt;first &lt;&lt; <span className="text-orange-400">"\t"</span> &lt;&lt; it-&gt;second &lt;&lt; endl; <span className="text-neutral-500">// 'first' = key, 'second' = value</span><br/>
                    &nbsp;&nbsp;&#125;<br/><br/>
                    &nbsp;&nbsp;<span className="text-neutral-500">// Search for an element with key = 2</span><br/>
                    &nbsp;&nbsp;<span className="text-red-500">int</span> n = <span className="text-blue-400">2</span>;<br/>
                    &nbsp;&nbsp;<span className="text-red-500">if</span> (mp.<span className="text-yellow-400">find</span>(n) != mp.<span className="text-yellow-400">end</span>()) <span className="text-neutral-500">// mp.find(n) returns an iterator to the key if found, else mp.end()</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; n &lt;&lt; <span className="text-orange-400">" is present in map"</span> &lt;&lt; endl;<br/><br/>
                    &nbsp;&nbsp;<span className="text-neutral-500">// Erase the first element in the map</span><br/>
                    &nbsp;&nbsp;<span className="text-neutral-500">// Note: unordered_map does not maintain any order of elements</span><br/>
                    &nbsp;&nbsp;mp.<span className="text-yellow-400">erase</span>(mp.<span className="text-yellow-400">begin</span>());<br/><br/>
                    &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Elements after deleting the first element: "</span> &lt;&lt; endl;<br/>
                    &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Key\tElement"</span> &lt;&lt; endl;<br/>
                    &nbsp;&nbsp;<span className="text-red-500">for</span> (<span className="text-red-500">auto</span> it = mp.<span className="text-yellow-400">begin</span>(); it != mp.<span className="text-yellow-400">end</span>(); it++) &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; it-&gt;first &lt;&lt; <span className="text-orange-400">"\t"</span> &lt;&lt; it-&gt;second &lt;&lt; endl;<br/>
                    &nbsp;&nbsp;&#125;<br/><br/>
                    &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"The size of the map is: "</span> &lt;&lt; mp.<span className="text-yellow-400">size</span>() &lt;&lt; endl;<br/><br/>
                    &nbsp;&nbsp;<span className="text-red-500">if</span> (!mp.<span className="text-yellow-400">empty</span>()) <span className="text-neutral-500">// mp.empty() returns true if the map has no elements</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"The map is not empty "</span> &lt;&lt; endl;<br/>
                    &nbsp;&nbsp;<span className="text-red-500">else</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"The map is empty"</span> &lt;&lt; endl;<br/><br/>
                    &nbsp;&nbsp;mp.<span className="text-yellow-400">clear</span>();<br/>
                    &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Size of the map after clearing all the elements: "</span> &lt;&lt; mp.<span className="text-yellow-400">size</span>();<br/>
                    &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br/>
                    &#125;
                </div>

                <h3 className="text-xl font-bold text-white mt-8 mb-4 uppercase tracking-widest text-red-500">Output:</h3>
                <div className="p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300 mb-12">
                    Elements present in the map: <br/>
                    Key Element <br/>
                    5 50 <br/>
                    4 40 <br/>
                    3 30 <br/>
                    2 20 <br/>
                    1 10 <br/>
                    2 is present in map <br/>
                    Elements after deleting the first element: <br/>
                    Key Element <br/>
                    4   40 <br/>
                    3 30 <br/>
                    2 20 <br/>
                    1 10 <br/>
                    The size of the map is: 4 <br/>
                    The map is not empty <br/>
                    Size of the map after clearing all the elements: 0
                </div>

                <h3 className="text-xl font-bold text-white mt-8 mb-4 text-red-500">Other functions:</h3>
                <ul className="space-y-2 text-neutral-300 list-none p-0 mb-12">
                    <li><strong>cbegin()</strong> - it refers to the first element of the unordered_map.</li>
                    <li><strong>cend()</strong> - it refers to the theoretical element after the last element of the unordered_map.</li>
                    <li><strong>rbegin()</strong> - it points to the last element of the unordered_map.</li>
                    <li><strong>rend()</strong> - it points to the theoretical element before the first element of the unordered_map.</li>
                    <li><strong>emplace()</strong> - to insert an element in the unordered_map.</li>
                    <li><strong>max_size()</strong> - the maximum elements a unordered_map can hold.</li>
                </ul>
                </section>

                <hr className="my-16 border-neutral-800" />

                {/* MAP SECTION */}
                <section>
                <h2 className="text-3xl font-bold text-white mb-4">What is map in C++ STL?</h2>
                <p className="text-neutral-300 leading-8 mb-6">
                    map in STL are associative containers where each element consists of a key value and a mapped value. Two mapped values cannot have the same key value. map keeps keys sorted with O(log n) lookup time, while unordered_map stores keys unordered with average O(1) lookup time. So, map is slower than unordered_map but ensures keys are sorted.
                </p>

                <h4 className="text-lg font-bold text-white uppercase tracking-widest text-red-500">Syntax:</h4>
                <code className="text-blue-400 block bg-black p-3 rounded mt-2 mb-4 font-mono text-sm">
                    map&lt;object_type, object_type&gt; variable_name;
                </code>
                
                <h4 className="text-lg font-bold text-white mt-4 uppercase tracking-widest text-red-500">Example:</h4>
                <div className="bg-black p-3 rounded mt-2 mb-8">
                    <code className="text-blue-400 block font-mono text-sm">map&lt;int,int&gt; mpp;</code>
                    <code className="text-blue-400 block font-mono text-sm">map&lt;string,int&gt; mpp;</code>
                </div>

                <h3 className="text-xl font-bold text-white mb-6 text-red-500">Functions in map:</h3>
                <div className="space-y-6 text-neutral-300 mb-10">
                    <div>
                    <p><strong>insert()</strong> – to insert an element in the map.</p>
                    <code className="text-blue-400 block bg-black p-3 rounded mt-2 font-mono text-sm">
                        map&lt;int,int&gt; mp;<br/>
                        mp.insert(&#123;1,10&#125;);<br/>
                        mp.insert(&#123;2,20&#125;);
                    </code>
                    </div>
                    <div>
                    <p><strong>begin()</strong> – return an iterator pointing to the first element in the map.</p>
                    <code className="text-blue-400 block bg-black p-2 rounded mt-2 font-mono text-sm">mp.begin();</code>
                    </div>
                    <div>
                    <p><strong>end()</strong> – returns an iterator to the theoretical element after the last element.</p>
                    <code className="text-blue-400 block bg-black p-2 rounded mt-2 font-mono text-sm">mp.end();</code>
                    </div>
                    <div>
                    <p><strong>clear()</strong> – deletes all the elements in the map.</p>
                    <code className="text-blue-400 block bg-black p-2 rounded mt-2 font-mono text-sm">mp.clear();</code>
                    </div>
                    <div>
                    <p><strong>find()</strong> – to search for an element in the map.</p>
                    <code className="text-blue-400 block bg-black p-3 rounded mt-2 font-mono text-sm">
                        map&lt;int,int&gt; mp;<br/>
                        mp.insert(&#123;1,10&#125;);<br/>
                        mp.insert(&#123;2,20&#125;);<br/>
                        if(mp.find(2)!=mp.end()) cout&lt;&lt;"true"&lt;&lt;endl;
                    </code>
                    </div>
                    <div>
                    <p><strong>erase()</strong> – to delete a single element or elements between a particular range.</p>
                    <code className="text-blue-400 block bg-black p-3 rounded mt-2 font-mono text-sm">
                        mp.erase(key);<br/>
                        mp.erase(iterator position);<br/>
                        mp.erase(iterator position 1, iterator position 2);
                    </code>
                    </div>
                    <div>
                    <p><strong>size()</strong> – returns the number of elements on the map.</p>
                    <code className="text-blue-400 block bg-black p-2 rounded mt-2 font-mono text-sm">mp.size();</code>
                    </div>
                    <div>
                    <p><strong>empty()</strong> – to check if the map is empty or not.</p>
                    <code className="text-blue-400 block bg-black p-2 rounded mt-2 font-mono text-sm">mp.empty();</code>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-white mt-12 mb-4 uppercase tracking-widest text-red-500">CODE:</h3>
                <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mb-4">
                    <span className="text-blue-500">#include</span> <span className="text-orange-400">&lt;bits/stdc++.h&gt;</span><br/><br/>
                    <span className="text-red-500">using namespace</span> std;<br/><br/>
                    <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>() &#123;<br/>
                    &nbsp;&nbsp;map &lt; <span className="text-red-500">int</span>, <span className="text-red-500">int</span> &gt; mp;<br/>
                    &nbsp;&nbsp;<span className="text-red-500">for</span> (<span className="text-red-500">int</span> i = <span className="text-blue-400">1</span>; i &lt;= <span className="text-blue-400">5</span>; i++) &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;mp.<span className="text-yellow-400">insert</span>(&#123;i , i * <span className="text-blue-400">10</span>&#125;);<br/>
                    &nbsp;&nbsp;&#125;<br/><br/>
                    &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Elements present in the map: "</span> &lt;&lt; endl;<br/>
                    &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Key\tElement"</span> &lt;&lt; endl;<br/>
                    &nbsp;&nbsp;<span className="text-red-500">for</span> (<span className="text-red-500">auto</span> it = mp.<span className="text-yellow-400">begin</span>(); it != mp.<span className="text-yellow-400">end</span>(); it++) &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; it -&gt; first &lt;&lt; <span className="text-orange-400">"\t"</span> &lt;&lt; it -&gt; second &lt;&lt; endl;<br/>
                    &nbsp;&nbsp;&#125;<br/><br/>
                    &nbsp;&nbsp;<span className="text-red-500">int</span> n = <span className="text-blue-400">2</span>;<br/>
                    &nbsp;&nbsp;<span className="text-red-500">if</span> (mp.<span className="text-yellow-400">find</span>(<span className="text-blue-400">2</span>) != mp.<span className="text-yellow-400">end</span>())<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; n &lt;&lt; <span className="text-orange-400">" is present in map"</span> &lt;&lt; endl;<br/><br/>
                    &nbsp;&nbsp;mp.<span className="text-yellow-400">erase</span>(mp.<span className="text-yellow-400">begin</span>());<br/>
                    &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Elements after deleting the first element: "</span> &lt;&lt; endl;<br/>
                    &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Key\tElement"</span> &lt;&lt; endl;<br/>
                    &nbsp;&nbsp;<span className="text-red-500">for</span> (<span className="text-red-500">auto</span> it = mp.<span className="text-yellow-400">begin</span>(); it != mp.<span className="text-yellow-400">end</span>(); it++) &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; it -&gt; first &lt;&lt; <span className="text-orange-400">"\t"</span> &lt;&lt; it -&gt; second &lt;&lt; endl;<br/>
                    &nbsp;&nbsp;&#125;<br/><br/>
                    &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"The size of the map is: "</span> &lt;&lt; mp.<span className="text-yellow-400">size</span>() &lt;&lt; endl;<br/><br/>
                    &nbsp;&nbsp;<span className="text-red-500">if</span> (mp.<span className="text-yellow-400">empty</span>() == <span className="text-red-500">false</span>)<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"The map is not empty "</span> &lt;&lt; endl;<br/>
                    &nbsp;&nbsp;<span className="text-red-500">else</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"The map is empty"</span> &lt;&lt; endl;<br/>
                    &nbsp;&nbsp;mp.<span className="text-yellow-400">clear</span>();<br/>
                    &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Size of the map after clearing all the elements: "</span> &lt;&lt; mp.<span className="text-yellow-400">size</span>();<br/>
                    &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br/>
                    &#125;
                </div>

                <h3 className="text-xl font-bold text-white mt-8 mb-4 uppercase tracking-widest text-red-500">Output:</h3>
                <div className="p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300 mb-12">
                    Elements present in the map:<br/>
                    Key Element<br/>
                    1 10<br/>
                    2 20<br/>
                    3 30<br/>
                    4 40<br/>
                    5 50<br/>
                    2 is present in map<br/>
                    Elements after deleting the first element:<br/>
                    Key Element<br/>
                    2 20<br/>
                    3 30<br/>
                    4 40<br/>
                    5 50<br/>
                    The size of the map is: 4<br/>
                    The map is not empty<br/>
                    Size of the map after clearing all the elements: 0
                </div>

                <h3 className="text-xl font-bold text-white mt-8 mb-4 text-red-500">Other functions:</h3>
                <ul className="space-y-2 text-neutral-300 list-none p-0 mb-12">
                    <li><strong>cbegin()</strong> – it refers to the first element of the map.</li>
                    <li><strong>cend()</strong> – it refers to the theoretical element after the last element of the map.</li>
                    <li><strong>rbegin()</strong> – it points to the last element of the map.</li>
                    <li><strong>rend()</strong> – it points to the theoretical element before the first element of the map.</li>
                    <li><strong>emplace()</strong> – to insert an element in the map.</li>
                    <li><strong>max_size()</strong> – the maximum elements a map can hold.</li>
                </ul>
                </section>

                <hr className="my-16 border-neutral-800" />

                {/* UNORDERED_MULTIMAP SECTION */}
                <section>
                <h2 className="text-3xl font-bold text-white mb-4">What is an unordered_multimap in C++ STL?</h2>
                <p className="text-neutral-300 leading-8 mb-6">
                    unordered_multimap in STL are associative containers like unordered maps where each element consists of a key value and a mapped value, the only difference is unordered multimaps can store duplicate elements
                </p>

                <h4 className="text-lg font-bold text-white uppercase tracking-widest text-red-500">Syntax:</h4>
                <code className="text-blue-400 block bg-black p-3 rounded mt-2 font-mono text-sm">
                    unordered_multimap&lt;object_type, object_type&gt; variable_name;
                </code>
                
                <h4 className="text-lg font-bold text-white mt-4 uppercase tracking-widest text-red-500">Example:</h4>
                <div className="bg-black p-3 rounded mt-2 mb-8">
                    <code className="text-blue-400 block font-mono text-sm">unordered_multimap&lt;int,int&gt; mpp;</code>
                    <code className="text-blue-400 block font-mono text-sm">unordered_multimap&lt;string,int&gt; mpp;</code>
                </div>

                <h3 className="text-xl font-bold text-white mb-6 text-red-500">Functions in the multimap:</h3>
                <div className="space-y-6 text-neutral-300 mb-10">
                    <div>
                    <p><strong>insert()</strong> – to insert an element in the unordered multimap.</p>
                    <code className="text-blue-400 block bg-black p-3 rounded mt-2 font-mono text-sm">
                        unordered_multimap&lt;int,int&gt; mp;<br/>
                        mp.insert(&#123;1,10&#125;);<br/>
                        mp.insert(&#123;2,20&#125;);
                    </code>
                    </div>
                    <div>
                    <p><strong>begin()</strong> – return an iterator pointing to the first element in the unordered multimap.</p>
                    <code className="text-blue-400 block bg-black p-2 rounded mt-2 font-mono text-sm">mp.begin();</code>
                    </div>
                    <div>
                    <p><strong>end()</strong> – returns an iterator to the theoretical element after the last element.</p>
                    <code className="text-blue-400 block bg-black p-2 rounded mt-2 font-mono text-sm">mp.end();</code>
                    </div>
                    <div>
                    <p><strong>clear()</strong> – deletes all the elements in the unordered multimap.</p>
                    <code className="text-blue-400 block bg-black p-2 rounded mt-2 font-mono text-sm">mp.clear();</code>
                    </div>
                    <div>
                    <p><strong>find()</strong> – to search for an element in the unordered map.</p>
                    <code className="text-blue-400 block bg-black p-3 rounded mt-2 font-mono text-sm">
                        unordered_multimap&lt;int,int&gt; mp;<br/>
                        mp.insert(&#123;1,10&#125;);<br/>
                        mp.insert(&#123;2,20&#125;);<br/>
                        if(mp.find(2)!=mp.end()) cout&lt;&lt;"true"&lt;&lt;endl;
                    </code>
                    </div>
                    <div>
                    <p><strong>erase()</strong> – to delete a single element or elements between a particular range.</p>
                    <code className="text-blue-400 block bg-black p-3 rounded mt-2 font-mono text-sm">
                        mp.erase(key);<br/>
                        mp.erase(iterator position);<br/>
                        mp.erase(iterator position 1, iterator position 2);
                    </code>
                    </div>
                    <div>
                    <p><strong>size()</strong> – returns the number of elements on the unordered multimap.</p>
                    <code className="text-blue-400 block bg-black p-2 rounded mt-2 font-mono text-sm">mp.size();</code>
                    </div>
                    <div>
                    <p><strong>empty()</strong> – to check if the unordered multimap is empty or not.</p>
                    <code className="text-blue-400 block bg-black p-2 rounded mt-2 font-mono text-sm">mp.empty();</code>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-white mt-12 mb-4 uppercase tracking-widest text-red-500">CODE:</h3>
                <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mb-4">
                    <span className="text-blue-500">#include</span> <span className="text-orange-400">&lt;bits/stdc++.h&gt;</span><br/>
                    <span className="text-red-500">using namespace</span> std;<br/><br/>
                    <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>() &#123;<br/>
                    &nbsp;&nbsp;unordered_multimap &lt; <span className="text-red-500">int</span>, <span className="text-red-500">int</span> &gt; mp;<br/>
                    &nbsp;&nbsp;<span className="text-red-500">for</span> (<span className="text-red-500">int</span> i = <span className="text-blue-400">1</span>; i &lt;= <span className="text-blue-400">5</span>; i++) &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;mp.<span className="text-yellow-400">insert</span>(&#123;i , i * <span className="text-blue-400">10</span>&#125;);<br/>
                    &nbsp;&nbsp;&#125;<br/>
                    &nbsp;&nbsp;mp.<span className="text-yellow-400">insert</span>(&#123;<span className="text-blue-400">4</span>,<span className="text-blue-400">40</span>&#125;);<br/><br/>
                    &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Elements present in the unordered multimap: "</span> &lt;&lt; endl;<br/>
                    &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Key\tElement"</span> &lt;&lt; endl;<br/>
                    &nbsp;&nbsp;<span className="text-red-500">for</span> (<span className="text-red-500">auto</span> it = mp.<span className="text-yellow-400">begin</span>(); it != mp.<span className="text-yellow-400">end</span>(); it++) &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; it -&gt; first &lt;&lt; <span className="text-orange-400">"\t"</span> &lt;&lt; it -&gt; second &lt;&lt; endl;<br/>
                    &nbsp;&nbsp;&#125;<br/><br/>
                    &nbsp;&nbsp;<span className="text-red-500">int</span> n = <span className="text-blue-400">2</span>;<br/>
                    &nbsp;&nbsp;<span className="text-red-500">if</span> (mp.<span className="text-yellow-400">find</span>(<span className="text-blue-400">2</span>) != mp.<span className="text-yellow-400">end</span>())<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; n &lt;&lt; <span className="text-orange-400">" is present in unordered multimap"</span> &lt;&lt; endl;<br/><br/>
                    &nbsp;&nbsp;mp.<span className="text-yellow-400">erase</span>(mp.<span className="text-yellow-400">begin</span>());<br/>
                    &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Elements after deleting the first element: "</span> &lt;&lt; endl;<br/>
                    &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Key\tElement"</span> &lt;&lt; endl;<br/>
                    &nbsp;&nbsp;<span className="text-red-500">for</span> (<span className="text-red-500">auto</span> it = mp.<span className="text-yellow-400">begin</span>(); it != mp.<span className="text-yellow-400">end</span>(); it++) &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; it -&gt; first &lt;&lt; <span className="text-orange-400">"\t"</span> &lt;&lt; it -&gt; second &lt;&lt; endl;<br/>
                    &nbsp;&nbsp;&#125;<br/><br/>
                    &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"The size of the unordered multimap is: "</span> &lt;&lt; mp.<span className="text-yellow-400">size</span>() &lt;&lt; endl;<br/><br/>
                    &nbsp;&nbsp;<span className="text-red-500">if</span> (mp.<span className="text-yellow-400">empty</span>() == <span className="text-red-500">false</span>)<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"The unordered multimap is not empty "</span> &lt;&lt; endl;<br/>
                    &nbsp;&nbsp;<span className="text-red-500">else</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"The unordered multimap is empty"</span> &lt;&lt; endl;<br/>
                    &nbsp;&nbsp;mp.<span className="text-yellow-400">clear</span>();<br/>
                    &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Size of the unordered multimap after clearing all the elements: "</span> &lt;&lt; mp.<span className="text-yellow-400">size</span>();<br/>
                    &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br/>
                    &#125;
                </div>

                <h3 className="text-xl font-bold text-white mt-8 mb-4 uppercase tracking-widest text-red-500">Output:</h3>
                <div className="p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300 mb-12">
                    Elements present in the unordered multimap:<br/>
                    Key Element<br/>
                    5 50<br/>
                    4 40<br/>
                    4 40<br/>
                    3 30<br/>
                    2 20<br/>
                    1 10<br/>
                    2 is present in unordered multimap<br/>
                    Elements after deleting the first element:<br/>
                    Key Element<br/>
                    4 40<br/>
                    4 40<br/>
                    3 30<br/>
                    2 20<br/>
                    1 10<br/>
                    The size of the unordered multimap is: 5<br/>
                    The unordered multimap is not empty<br/>
                    Size of the unordered multimap after clearing all the elements: 0
                </div>

                <h3 className="text-xl font-bold text-white mt-8 mb-4 text-red-500">Other functions:</h3>
                <ul className="space-y-2 text-neutral-300 list-none p-0 mb-12">
                    <li><strong>cbegin()</strong> – it refers to the first element of the unordered multimap.</li>
                    <li><strong>cend()</strong> – it refers to the theoretical element after the last element of the unordered multimap.</li>
                    <li><strong>rbegin()</strong> – it points to the last element of the unordered multimap.</li>
                    <li><strong>rend()</strong> – it points to the theoretical element before the first element of the unordered multimap.</li>
                    <li><strong>emplace()</strong> – to insert an element in the unordered multimap.</li>
                    <li><strong>max_size()</strong> – the maximum elements an unordered multimap can hold.</li>
                </ul>
                </section>

                <hr className="my-16 border-neutral-800" />

                {/* MULTIMAP SECTION */}
                <section>
                <h2 className="text-3xl font-bold text-white mb-4">What is a multimap in C++ STL?</h2>
                <p className="text-neutral-300 leading-8 mb-4">
                    multimap in STL are associative containers like maps where each element consists of a key value and a mapped value, the only difference is multimaps can store duplicate elements.
                </p>

                

                <h3 className="text-xl font-bold text-white mb-6 text-red-500">Functions in the multimap:</h3>
                <div className="space-y-3 text-neutral-300 mb-10">
                    <p><strong>insert()</strong> to insert an element in the multimap.</p>
                    <p><strong>begin()</strong> return an iterator pointing to the first element in the multimap.</p>
                    <p><strong>end()</strong> returns an iterator to the theoretical element after the last element.</p>
                    <p><strong>clear()</strong> deletes all the elements in the multimap.</p>
                    <p><strong>find()</strong> to search for an element in the map.</p>
                    <p><strong>erase()</strong> to delete a single element or elements between a particular range.</p>
                    <p><strong>size()</strong> returns the number of elements in the multimap.</p>
                    <p><strong>empty()</strong> to check if the multimap is empty or not.</p>
                </div>

                <h3 className="text-xl font-bold text-white mt-12 mb-4 uppercase tracking-widest text-red-500">CODE:</h3>
                <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mb-4">
                    <span className="text-blue-500">#include</span> <span className="text-orange-400">&lt;bits/stdc++.h&gt;</span><br/>
                    <span className="text-red-500">using namespace</span> std;<br/><br/>
                    <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>() &#123;<br/>
                    &nbsp;&nbsp;multimap &lt; <span className="text-red-500">int</span>, <span className="text-red-500">int</span> &gt; mp;<br/>
                    &nbsp;&nbsp;<span className="text-red-500">for</span> (<span className="text-red-500">int</span> i = <span className="text-blue-400">1</span>; i &lt;= <span className="text-blue-400">5</span>; i++) &#123;  <span className="text-neutral-500">//Iterate in the map till 5</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;mp.<span className="text-yellow-400">insert</span>(&#123;i , i * <span className="text-blue-400">10</span>&#125;);  <span className="text-neutral-500">//Insert elements from i to i*10</span><br/>
                    &nbsp;&nbsp;&#125;<br/>
                    &nbsp;&nbsp;mp.<span className="text-yellow-400">insert</span>(&#123;<span className="text-blue-400">4</span>,<span className="text-blue-400">40</span>&#125;); <br/><br/>
                    &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Elements present in the multimap: "</span> &lt;&lt; endl;  <span className="text-neutral-500">//Print the elements in the map</span><br/>
                    &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Key\tElement"</span> &lt;&lt; endl;  <span className="text-neutral-500">//Print the keys in the map</span><br/>
                    &nbsp;&nbsp;<span className="text-red-500">for</span> (<span className="text-red-500">auto</span> it = mp.<span className="text-yellow-400">begin</span>(); it != mp.<span className="text-yellow-400">end</span>(); it++) &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; it -&gt; first &lt;&lt; <span className="text-orange-400">"\t"</span> &lt;&lt; it -&gt; second &lt;&lt; endl;  <span className="text-neutral-500">//Print it.first and second from the map</span><br/>
                    &nbsp;&nbsp;&#125;<br/><br/>
                    &nbsp;&nbsp;<span className="text-red-500">int</span> n = <span className="text-blue-400">2</span>;<br/>
                    &nbsp;&nbsp;<span className="text-red-500">if</span> (mp.<span className="text-yellow-400">find</span>(<span className="text-blue-400">2</span>) != mp.<span className="text-yellow-400">end</span>())<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; n &lt;&lt; <span className="text-orange-400">" is present in multimap"</span> &lt;&lt; endl;  <span className="text-neutral-500">//If element in found</span><br/><br/>
                    &nbsp;&nbsp;mp.<span className="text-yellow-400">erase</span>(mp.<span className="text-yellow-400">begin</span>());<br/>
                    &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Elements after deleting the first element: "</span> &lt;&lt; endl;<br/>
                    &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Key\tElement"</span> &lt;&lt; endl;<br/>
                    &nbsp;&nbsp;<span className="text-red-500">for</span> (<span className="text-red-500">auto</span> it = mp.<span className="text-yellow-400">begin</span>(); it != mp.<span className="text-yellow-400">end</span>(); it++) &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; it -&gt; first &lt;&lt; <span className="text-orange-400">"\t"</span> &lt;&lt; it -&gt; second &lt;&lt; endl;<br/>
                    &nbsp;&nbsp;&#125;<br/><br/>
                    &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"The size of the multimap is: "</span> &lt;&lt; mp.<span className="text-yellow-400">size</span>() &lt;&lt; endl;<br/><br/>
                    &nbsp;&nbsp;<span className="text-red-500">if</span> (mp.<span className="text-yellow-400">empty</span>() == <span className="text-red-500">false</span>)<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"The multimap is not empty "</span> &lt;&lt; endl;  <span className="text-neutral-500">//If map is not empty</span><br/>
                    &nbsp;&nbsp;<span className="text-red-500">else</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"The multimap is empty"</span> &lt;&lt; endl;  <span className="text-neutral-500">//If map is emptybr/</span><br/>
                    &nbsp;&nbsp;mp.<span className="text-yellow-400">clear</span>();<br/>
                    &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Size of the multimap after clearing all the elements: "</span> &lt;&lt; mp.<span className="text-yellow-400">size</span>();  <span className="text-neutral-500">//Print the size of the map</span><br/>
                    &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br/>
                    &#125;
                </div>

                <h3 className="text-xl font-bold text-white mt-8 mb-4 text-red-500">Other functions:</h3>
                <ul className="space-y-2 text-neutral-300 list-none p-0 mb-12">
                    <li><strong>cbegin()</strong> - it refers to the first element of the multimap.</li>
                    <li><strong>cend()</strong> - it refers to the theoretical element after the last element of the multimap.</li>
                    <li><strong>rbegin()</strong> - it points to the last element of the multimap.</li>
                    <li><strong>rend()</strong> - it points to the theoretical element before the first element of the multimap.</li>
                    <li><strong>emplace()</strong> - to insert an element in the multimap.</li>
                    <li><strong>max_size()</strong> - the maximum elements a multimap can hold.</li>
                </ul>
            </section>
            </article>
            {/* Navigation Buttons */}
        <div className="mt-20 flex justify-between border-t border-neutral-800 pt-10">
            {/* Previous Lesson Button */}
            <Link href="/langroadmap/cpp/phase3/vectors">
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
                            Vectors, Lists & Iterators in C++
                        </span>
                    </div>
                </motion.div>
            </Link>

            {/* Next Lesson Button */}
            <Link href="/langroadmap/cpp/phase3/sets">
                <motion.div
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-4 group cursor-pointer"
                >
                    <div className="text-right">
                        <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Next Lesson</span>
                        <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                            Sets in C++
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