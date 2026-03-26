"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft, Box, List, MoveRight, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function STLFullLesson() {
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
            Vector & List <span className="text-red-600">in C++ STL_</span>
          </h1>
        </header>

        <article className="prose prose-invert max-w-none space-y-16">
          
          {/* VECTOR SECTION */}
          <section>
            <div className="flex items-center gap-3 mb-4">
               <Box className="text-red-600 w-8 h-8" />
               <h2 className="text-3xl font-bold text-white m-0">Vector in C++ STL</h2>
            </div>
            
            <h3 className="text-xl font-bold text-white mt-8 mb-4">What is a Vector?</h3>
            <p className="text-neutral-300 leading-8">
              Vectors in STL are basically dynamic arrays that have the ability to change size whenever elements are added or deleted from them. Vector elements can be easily accessed and traversed using iterators. A vector stores elements in contiguous memory locations.
            </p>

            <h3 className="text-xl font-bold text-white mt-12 mb-4 text-red-500">Most used functions in Vector:</h3>
            <div className="space-y-6 text-neutral-300">
              <div>
                <p><strong>begin()</strong> - it returns an iterator pointing to the first element of the vector.</p>
                <code className="text-blue-400 block bg-black p-2 rounded mt-2">auto iterator = itr;<span className="text-neutral-500">// auto lets the compiler automatically deduce the variable's type from its value, so you don't have to write it. We can basically use it when we don't know or don't want to mention the data type</span><br/>itr = v1.begin();</code>
              </div>
              <div>
                <p><strong>end()</strong> - it returns an iterator pointing to the element theoretically after the last element of the vector.</p>
                <code className="text-blue-400 block bg-black p-2 rounded mt-2">auto iterator = itr;<br/>itr = v1.end();</code>
              </div>
              <div>
                <p><strong>push_back()</strong> - it accepts a parameter and insert the element passed in the parameter in the vectors, the element is inserted at the end.</p>
                <code className="text-blue-400 block bg-black p-2 rounded mt-2">vector&lt;int&gt; v1;<br/>v1.push_back(1);<br/>v1.push_back(2);</code>
              </div>
              <div>
                <p><strong>insert()</strong> - it is used to insert an element at a specified position.</p>
                <code className="text-blue-400 block bg-black p-2 rounded mt-2">auto it= v1.begin();<br/>v1.insert(it,5); //inserting 5 at the beginning</code>
              </div>
              <div>
                <p><strong>erase()</strong> - it is used to delete a specific element</p>
                <code className="text-blue-400 block bg-black p-2 rounded mt-2">vector&lt;int&gt; v1;<br/>auto it= v1.begin();<br/>v1.erase(it);// erasing the first element</code>
              </div>
              <p><strong>pop_back()</strong> - it deletes the last element and returns it to the calling function.</p>
              <code className="text-blue-400 block bg-black p-2 rounded mt-2">v1.pop_back();</code>
              <p><strong>front()</strong> - it returns a reference to the first element of the vector.</p>
              <code className="text-blue-400 block bg-black p-2 rounded mt-2">v1.front();</code>
              <p><strong>back()</strong> - it returns a reference to the last element of the vector.</p>
              <code className="text-blue-400 block bg-black p-2 rounded mt-2">v1.back();</code>
              <p><strong>clear()</strong> - deletes all the elements from the vector.</p>
              <code className="text-blue-400 block bg-black p-2 rounded mt-2">v1.clear();</code>
              <p><strong>empty()</strong> - to check if the vector is empty or not.</p>
              <code className="text-blue-400 block bg-black p-2 rounded mt-2">v1.empty();</code>
              <p><strong>size()</strong> - returns the size of the vector</p>
              <code className="text-blue-400 block bg-black p-2 rounded mt-2">v1.size();</code>
            </div>

            <h3 className="text-xl font-bold text-white mt-12 mb-4 uppercase tracking-widest text-red-500">CODE:</h3>
            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mb-4">
                <span className="text-blue-500">#include</span> <span className="text-orange-400">&lt;bits/stdc++.h&gt;</span><br/><br/>
                <span className="text-red-500">using namespace</span> std;<br/><br/>

                <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>() &#123;<br/>
                &nbsp;&nbsp;vector &lt;<span className="text-red-500">int</span>&gt; v;<br/><br/>
                &nbsp;&nbsp;<span className="text-red-500">for</span> (<span className="text-red-500">int</span> i = <span className="text-blue-400">0</span>; i &lt; <span className="text-blue-400">10</span>; i++) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;v.<span className="text-yellow-400">push_back</span>(i); <span className="text-neutral-500">//inserting elements in the vector</span><br/>
                &nbsp;&nbsp;&#125;<br/><br/>
                &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"the elements in the vector: "</span>;<br/>
                &nbsp;&nbsp;<span className="text-red-500">for</span> (<span className="text-red-500">auto</span> it = v.<span className="text-yellow-400">begin</span>(); it != v.<span className="text-yellow-400">end</span>(); it++)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; * it &lt;&lt; <span className="text-orange-400">" "</span>;<br/><br/>
                &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"\nThe front element of the vector: "</span> &lt;&lt; v.<span className="text-yellow-400">front</span>();&nbsp;&nbsp;<span className="text-neutral-500">//The front element of the vector</span><br/>
                &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"\nThe last element of the vector: "</span> &lt;&lt; v.<span className="text-yellow-400">back</span>(); <span className="text-neutral-500">//The last element of the vector</span><br/>
                &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"\nThe size of the vector: "</span> &lt;&lt; v.<span className="text-yellow-400">size</span>();&nbsp;&nbsp;<span className="text-neutral-500">//The size of the vector</span><br/>
                &nbsp;&nbsp;v.<span className="text-yellow-400">pop_back</span>();<br/>
                &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"\nDeleting element from the end: "</span> &lt;&lt; v[v.<span className="text-yellow-400">size</span>() - <span className="text-blue-400">1</span>];&nbsp;&nbsp;<span className="text-neutral-500">//Deleting element from the end</span><br/>
                &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"\nPrinting the vector after removing the last element:"</span> &lt;&lt; endl;<br/>
                &nbsp;&nbsp;<span className="text-red-500">for</span> (<span className="text-red-500">int</span> i = <span className="text-blue-400">0</span>; i &lt; v.<span className="text-yellow-400">size</span>(); i++)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; v[i] &lt;&lt; <span className="text-orange-400">" "</span>;<br/><br/>
                &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"\nInserting 5 at the beginning:"</span> &lt;&lt; endl;<br/>
                &nbsp;&nbsp;v.<span className="text-yellow-400">insert</span>(v.<span className="text-yellow-400">begin</span>(), <span className="text-blue-400">5</span>);<br/>
                &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"The first element is: "</span> &lt;&lt; v[<span className="text-blue-400">0</span>] &lt;&lt; endl;<br/>
                &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Erasing the first element"</span> &lt;&lt; endl;<br/>
                &nbsp;&nbsp;v.<span className="text-yellow-400">erase</span>(v.<span className="text-yellow-400">begin</span>());&nbsp;&nbsp;<span className="text-neutral-500">//Erasing the elements</span><br/>
                &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Now the first element is: "</span> &lt;&lt; v[<span className="text-blue-400">0</span>] &lt;&lt; endl;<br/><br/>
                &nbsp;&nbsp;<span className="text-red-500">if</span> (v.<span className="text-yellow-400">empty</span>())<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"\nvector is empty"</span>;&nbsp;&nbsp;<span className="text-neutral-500">//If empty then print empty else print not empty</span><br/>
                &nbsp;&nbsp;<span className="text-red-500">else</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"\nvector is not empty"</span> &lt;&lt; endl;&nbsp;&nbsp;<span className="text-neutral-500">//vector is not empty</span><br/><br/>
                &nbsp;&nbsp;v.<span className="text-yellow-400">clear</span>();<br/>
                &nbsp;&nbsp;cout &lt;&lt; <span className="text-orange-400">"Size of the vector after clearing the vector: "</span> &lt;&lt; v.<span className="text-yellow-400">size</span>();&nbsp;&nbsp;<span className="text-neutral-500">//Return the size of the vector</span><br/><br/>
                &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br/>
                &#125;
            </div>

            <h3 className="text-xl font-bold text-white mt-8 mb-4 uppercase tracking-widest text-red-500">OUTPUT:</h3>
            <div className="p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300">
                <span className="text-neutral-500 uppercase text-xs block mb-1">Output</span>
                the elements in the vector: 0 1 2 3 4 5 6 7 8 9 <br/>
                The front element of the vector: 0<br/>
                The last element of the vector: 9<br/>
                The size of the vector: 10<br/>
                Deleting element from the end: 9<br/>
                Printing the vector after removing the last element:<br/>
                0 1 2 3 4 5 6 7 8 <br/>
                Inserting 5 at the beginning:<br/>
                The first element is: 5<br/>
                Erasing the first element<br/>
                Now the first element is: 0<br/>
                vector is not empty<br/>
                Size of the vector after clearing the vector: 0
            </div>

            <h3 className="text-xl font-bold text-white mt-12 mb-4 text-red-500">Other Functions:</h3>
            <ul className="space-y-2 text-neutral-300">
              <li><strong>cbegin()</strong> - it refers to the first element of the vector.</li>
              <li><strong>cend()</strong> - it refers to the theoretical element after the last element of the vector. <span className="font-bold text-amber-50">Note: begin()/end() - give modifiable iterators, cbegin()/cend() - give read-only (const) iterators.</span></li>
              <li><strong>rbegin()</strong> - it points to the last element of the vector.</li>
              <li><strong>rend()</strong> - it points to the theoretical element before the first element of the vector.</li>
              <li><strong>crbegin()</strong> - it refers to the last element of the vector.</li>
              <li><strong>crend()</strong> - it refers to the theoretical element before the first element of the vector.</li>
              <li><strong>max_size()</strong> - returns the maximum size the vector can hold.</li>
              <li><strong>capacity()</strong> - it returns the current capacity of the vector.</li>
            </ul>
          </section>

          <hr className="border-neutral-800" />

          {/* LIST SECTION */}
          <section>
            <div className="flex items-center gap-3 mb-4">
               <List className="text-red-600 w-8 h-8" />
               <h2 className="text-3xl font-bold text-white m-0">List in C++ STL</h2>
            </div>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">What is a List?</h3>
            <p className="text-neutral-300 leading-8">
              A list in STL is a contiguous container that allows the inserting and erasing of elements in constant time and iterating in both directions.
            </p>

            <h4 className="text-lg font-bold text-white mt-8">Syntax:</h4>
            <code className="text-blue-400 block bg-black p-3 rounded">list&lt;object_type&gt; variable_name;</code>
            
            <h4 className="text-lg font-bold text-white mt-4">Example:</h4>
            <code className="text-blue-400 block bg-black p-3 rounded">list&lt;int&gt; li;<br/>list&lt;string&gt; li;</code>

            <h3 className="text-xl font-bold text-white mt-12 mb-4 text-red-500">Functions in List:</h3>
            <div className="space-y-6 text-neutral-300">
              <div>
                <p><strong>push_back()</strong> – to insert an element at the end of the list.</p>
                <code className="text-blue-400 block bg-black p-2 rounded mt-2">list&lt;int&gt; li;<br/>li.push_back(110);<br/>li.push_back(220);</code>
              </div>
              <div>
                <p><strong>push_front()</strong> – to insert an element at the front of the list.</p>
                <code className="text-blue-400 block bg-black p-2 rounded mt-2">list&lt;int&gt; li;<br/>li.push_front(110);<br/>li.push_front(220);</code>
              </div>
              <p><strong>pop_back()</strong> – deletes the last element of the list.</p>
              <code className="text-blue-400 block bg-black p-2 rounded mt-2">li.pop_back();</code>
              <p><strong>pop_front()</strong> – deletes the front element of the list.</p>
              <code className="text-blue-400 block bg-black p-2 rounded mt-2">li.pop_front();</code>
              <p><strong>front()</strong> – it gives a reference to the first element of the list.</p>
              <code className="text-blue-400 block bg-black p-2 rounded mt-2">li.front();</code>
              <p><strong>back()</strong> – it gives a reference to the last element of the list.</p>
              <code className="text-blue-400 block bg-black p-2 rounded mt-2">li.back();</code>
              <p><strong>reverse()</strong> – reverse the list.</p>
              <code className="text-blue-400 block bg-black p-2 rounded mt-2">li.reverse();</code>
              <p><strong>sort()</strong> – sorts the list in ascending order.</p>
              <code className="text-blue-400 block bg-black p-2 rounded mt-2">li.sort();</code>
              <p><strong>size()</strong> – returns the number of elements on the list.</p>
              <code className="text-blue-400 block bg-black p-2 rounded mt-2">li.size();</code>
              <p><strong>empty()</strong> – to check if the list is empty or not.</p>
              <code className="text-blue-400 block bg-black p-2 rounded mt-2">li.empty();</code>
            </div>

            <h3 className="text-xl font-bold text-white mt-12 mb-4 uppercase tracking-widest text-red-500">CODE:</h3>
            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mb-4">
            <span className="text-blue-500">#include</span> <span className="text-orange-400">&lt;bits/stdc++.h&gt;</span><br/>
            <span className="text-red-500">using namespace</span> std;<br/><br/>

            <span className="text-red-500">void</span> <span className="text-yellow-400">printlist</span>(list&lt;<span className="text-red-500">int</span>&gt; li)<br/>
            &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;list&lt;<span className="text-red-500">int</span>&gt;::iterator it;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">for</span>(it=li.<span className="text-yellow-400">begin</span>();it!=li.<span className="text-yellow-400">end</span>();it++)<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cout&lt;&lt;*it&lt;&lt;<span className="text-orange-400">" "</span>;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;cout&lt;&lt;endl;<br/>
            &#125;<br/><br/>

            <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>()<br/>
            &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;list&lt;<span className="text-red-500">int</span>&gt; li;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;li.<span className="text-yellow-400">push_back</span>(<span className="text-blue-400">10</span>);<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;li.<span className="text-yellow-400">push_back</span>(<span className="text-blue-400">20</span>);<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;li.<span className="text-yellow-400">push_front</span>(<span className="text-blue-400">30</span>);<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;li.<span className="text-yellow-400">push_front</span>(<span className="text-blue-400">40</span>);<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;li.<span className="text-yellow-400">push_front</span>(<span className="text-blue-400">50</span>);<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;cout&lt;&lt;<span className="text-orange-400">"The elements in the list are: "</span>;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">printlist</span>(li);<br/><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;cout&lt;&lt;<span className="text-orange-400">"Reversing the list: "</span>;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;li.<span className="text-yellow-400">reverse</span>();<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">printlist</span>(li);<br/><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;cout&lt;&lt;<span className="text-orange-400">"Sorting the list: "</span>;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;li.<span className="text-yellow-400">sort</span>();<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">printlist</span>(li);<br/><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;cout&lt;&lt;<span className="text-orange-400">"The size of the list is: "</span>&lt;&lt;li.<span className="text-yellow-400">size</span>()&lt;&lt;endl;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;cout&lt;&lt;<span className="text-orange-400">"The first element in the list: "</span>&lt;&lt;li.<span className="text-yellow-400">front</span>()&lt;&lt;endl;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;cout&lt;&lt;<span className="text-orange-400">"Deleting the first element"</span>&lt;&lt;endl;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;li.<span className="text-yellow-400">pop_front</span>();<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">printlist</span>(li);<br/><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;cout&lt;&lt;<span className="text-orange-400">"The last element of the list: "</span>&lt;&lt;li.<span className="text-yellow-400">back</span>()&lt;&lt;endl;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;cout&lt;&lt;<span className="text-orange-400">"Deleting the last element"</span>&lt;&lt;endl;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;li.<span className="text-yellow-400">pop_back</span>();<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">printlist</span>(li);<br/><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br/>
            &#125;
            </div>

            <h3 className="text-xl font-bold text-white mt-8 mb-4 uppercase tracking-widest text-red-500">Output:</h3>
            <div className="p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300">
            <span className="text-neutral-500 uppercase text-xs block mb-1">Output</span>
            The elements in the list are: 50 40 30 10 20<br/>
            Reversing the list: 20 10 30 40 50<br/>
            Sorting the list: 10 20 30 40 50<br/>
            The size of the list is: 5<br/>
            The first element in the list: 10<br/>
            Deleting the first element<br/>
            20 30 40 50<br/>
            The last element of the list: 50<br/>
            Deleting the last element<br/>
            20 30 40
            </div>

            <h3 className="text-xl font-bold text-white mt-12 mb-4 text-red-500">Other functions of the list:</h3>
            <ul className="space-y-2 text-neutral-300">
              <li><strong>begin()</strong> - it refers to the first element of the list.</li>
              <li><strong>end()</strong> - it refers to the theoretical element after the last element of the list.</li>
              <li><strong>cbegin()</strong> - it refers to the first element of the list.</li>
              <li><strong>cend()</strong> - it refers to the theoretical element after the last element of the list.</li>
              <li><strong>rbegin()</strong> - it points to the last element of the list.</li>
              <li><strong>rend()</strong> - it points to the theoretical element before the first element of the list.</li>
              <li><strong>emplace_front()</strong> - to insert an element at the front of the list.</li>
              <li><strong>emplace_back()</strong> - to insert an element at the end of the list.</li>
              <li><strong>max_size()</strong> - the maximum elements a list can hold.</li>
              <li><strong>clear()</strong> - to delete all the elements of the list.</li>
              <li><strong>erase()</strong> - to delete a single element or elements between a particular range.</li>
            </ul>
          </section>

          <hr className="border-neutral-800" />

          {/* ITERATORS SECTION */}
          <section>
            <div className="flex items-center gap-3 mb-4">
               <MoveRight className="text-red-600 w-8 h-8" />
               <h2 className="text-3xl font-bold text-white m-0">Iterators in C++</h2>
            </div>
            <p className="text-neutral-300 leading-8">
              An iterator in C++ is an object used to point to elements in a container such as vectors, lists, or sets.
            </p>
            <p className="text-neutral-300 leading-8">
              Iterators work similar to pointers, allowing us to traverse (move through) elements of a container one by one. They are commonly used in loops to access or process elements in containers.
            </p>

            <h4 className="text-lg font-bold text-white mt-8">Syntax</h4>
            <code className="text-blue-400 block bg-black p-3 rounded">vector::iterator iterator_name;</code>
            
            <h4 className="text-lg font-bold text-white mt-4">Example syntax:</h4>
            <code className="text-blue-400 block bg-black p-3 rounded">vector::iterator it;</code>

            <h2 className="text-2xl font-bold text-white mt-16 mb-4">Beginning and End Iterators</h2>
            <p className="text-neutral-300 leading-8 mb-4">Vectors provide special functions to get iterators.</p>
            <ul className="list-disc ml-6 space-y-2 text-neutral-300 mb-8">
              <li><strong>begin()</strong> → Points to the first element of the vector.</li>
              <li><strong>end()</strong> → Points to the position after the last element.</li>
            </ul>

            <h4 className="text-lg font-bold text-white">Syntax</h4>
            <code className="text-blue-400 block bg-black p-3 rounded mt-2">vector_name.begin();<br/>vector_name.end();</code>

            <h4 className="text-lg font-bold text-white mt-4">Example syntax:</h4>
            <code className="text-blue-400 block bg-black p-3 rounded mt-2">numbers.begin();<br/>numbers.end();</code>

            <h2 className="text-2xl font-bold text-white mt-16 mb-4">Accessing Elements Using Iterator</h2>
            <p className="text-neutral-300 leading-8">To access the value pointed by an iterator, we use the dereference operator * .</p>
            
            <h4 className="text-lg font-bold text-white mt-6">Syntax</h4>
            <code className="text-blue-400 block bg-black p-3 rounded">*iterator_name</code>

            <h4 className="text-lg font-bold text-white mt-4">Example syntax:</h4>
            <code className="text-blue-400 block bg-black p-3 rounded">*it</code>
          </section>

          {/* SUMMARY SECTION */}
          <section>
            <div className="bg-red-900/5 border border-red-900/20 p-5 rounded-2xl">
               <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest flex items-center gap-2">
                 <Zap className="w-4 h-4" />NOTE:
               </h4>
               <h5 className="text-white mb-4 uppercase text-xs tracking-widest flex items-center gap-2">In our Data Structures & Algorithms Journey, we don't usually use lists/standard arrays that we've learnt till now, we almost always use vectors to store data of same data type and accessing them through index. But knowing of lists & standard arrays is important, and understanding iterators is crucial for working with vectors effectively.</h5>
            </div>
          </section>

        </article>

        {/* Navigation Buttons */}
        <div className="mt-20 flex justify-between border-t border-neutral-800 pt-10">
            {/* Previous Lesson Button */}
            <Link href="/langroadmap/cpp/phase2/pointers">
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
                            Phase-2 Pointers in C++
                        </span>
                    </div>
                </motion.div>
            </Link>

            {/* Next Lesson Button */}
            <Link href="/langroadmap/cpp/phase3/maps">
                <motion.div
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-4 group cursor-pointer"
                >
                    <div className="text-right">
                        <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Next Lesson</span>
                        <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                            Maps in C++
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