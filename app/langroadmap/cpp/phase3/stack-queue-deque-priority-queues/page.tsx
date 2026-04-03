"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ArrowRight, ArrowLeft, ChevronLeft } from "lucide-react";
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight text-left">
            Stack, Queue, Deque & Priority Queue <span className="text-red-600">in C++ STL_</span>
          </h1>
        </header>

        <article className="prose prose-invert max-w-none space-y-16">
          {/* STACK SECTION */}
          <section>
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-3xl font-bold text-white m-0">What is Stack?</h2>
            </div>
            <p className="text-neutral-300 leading-8 mb-6">
              A stack is a non-primitive linear data structure. it is an ordered list in which the addition of a new data item and deletion of the already existing data item is done from only one end known as the top of the stack (TOS). The element which is added in last will be first to be removed and the element which is inserted first will be removed in last. As all the deletion and insertion in a stack are done from the top of the stack, the last added element will be the first to be removed from the stack. That is the reason why stack is also called <strong>Last-in-First-out (LIFO)</strong>.
            </p>
            
            <h3 className="text-xl font-bold text-white mb-6 text-red-500">Functions in Stack:</h3>
            <div className="space-y-6 text-neutral-300 mb-10">
              <div>
                <p><strong>push()</strong> – to insert an element in the stack.</p>
                <code className="text-blue-400 block bg-black p-3 rounded mt-2 font-mono text-sm">
                  stack&lt;int&gt; s;<br/>
                  s.push(110);<br/>
                  s.push(220);
                </code>
              </div>
              <div>
                <p><strong>pop()</strong> – deletes the last element of the stack.</p>
                <code className="text-blue-400 block bg-black p-2 rounded mt-2 font-mono text-sm">s.pop();</code>
              </div>
              <div>
                <p><strong>top()</strong> – returns the element at the top of the stack.</p>
                <code className="text-blue-400 block bg-black p-2 rounded mt-2 font-mono text-sm">s.top();</code>
              </div>
              <div>
                <p><strong>emplace()</strong> – to insert an element in the stack.</p>
                <code className="text-blue-400 block bg-black p-3 rounded mt-2 font-mono text-sm">
                  stack&lt;int&gt; s;<br/>
                  s.emplace(1);<br/>
                  s.emplace(2);
                </code>
              </div>
              <div>
                <p><strong>size()</strong> – returns the number of elements on the stack.</p>
                <code className="text-blue-400 block bg-black p-2 rounded mt-2 font-mono text-sm">s.size();</code>
              </div>
              <div>
                <p><strong>empty()</strong> – to check if the stack is empty or not.</p>
                <code className="text-blue-400 block bg-black p-2 rounded mt-2 font-mono text-sm">s.empty();</code>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mt-12 mb-4 uppercase tracking-widest text-red-500">Code:</h3>
            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mb-4 text-left text-neutral-300">
              <span className="text-blue-500">#include</span><span className="text-orange-400">&lt;bits/stdc++.h&gt;</span><br/>
              <span className="text-red-500">using namespace</span> std;<br/><br/>
              <span className="text-red-500">void</span> <span className="text-yellow-400">printstack</span>(stack&lt;<span className="text-red-500">int</span>&gt; s1)&#123;<br/>
              &nbsp;&nbsp;stack&lt;<span className="text-red-500">int</span>&gt; s2=s1;<br/>
              &nbsp;&nbsp;<span className="text-red-500">while</span>(!s2.<span className="text-yellow-400">empty</span>()) <span className="text-neutral-500">//Iterate while the stack isn't empty</span><br/>
              &nbsp;&nbsp;&#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;cout&lt;&lt;s2.<span className="text-yellow-400">top</span>()&lt;&lt;<span className="text-orange-400">"\n"</span>;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;s2.<span className="text-yellow-400">pop</span>(); <span className="text-neutral-500">//Keep popping the elements</span><br/>
              &nbsp;&nbsp;&#125;<br/>
              &#125;<br/><br/>
              <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>()&#123;<br/>
              &nbsp;&nbsp;stack&lt;<span className="text-red-500">int</span>&gt; s;<br/>
              &nbsp;&nbsp;<span className="text-red-500">for</span>(<span className="text-red-500">int</span> i=<span className="text-blue-400">1</span>;i&lt;=<span className="text-blue-400">5</span>;i++)<br/>
              &nbsp;&nbsp;s.<span className="text-yellow-400">push</span>(i); <span className="text-neutral-500">//Push in the value of i int the stack</span><br/><br/>
              &nbsp;&nbsp;cout&lt;&lt;<span className="text-orange-400">"The elements of the stack are:"</span>&lt;&lt;endl;<br/>
              &nbsp;&nbsp;<span className="text-yellow-400">printstack</span>(s);<br/><br/>
              &nbsp;&nbsp;cout&lt;&lt;<span className="text-orange-400">"The size of the stack: "</span>&lt;&lt;s.<span className="text-yellow-400">size</span>()&lt;&lt;endl;<br/>
              &nbsp;&nbsp;cout&lt;&lt;<span className="text-orange-400">"The top element of the queue: "</span>&lt;&lt;s.<span className="text-yellow-400">top</span>()&lt;&lt;endl;<br/>
              &nbsp;&nbsp;cout&lt;&lt;<span className="text-orange-400">"Pop the top element: "</span>&lt;&lt;endl;<br/>
              &nbsp;&nbsp;s.<span className="text-yellow-400">pop</span>(); <span className="text-neutral-500">//Pop the elements</span><br/>
              &nbsp;&nbsp;<span className="text-yellow-400">printstack</span>(s);<br/>
              &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br/>
              &#125;
            </div>
            <h3 className="text-xl font-bold text-white mt-8 mb-4 uppercase tracking-widest text-red-500 text-left">Output:</h3>
            <div className="p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300 mb-12 text-left">
            The elements of the stack are:<br/>
            5<br/>
            4<br/>
            3<br/>
            2<br/>
            1<br/>
            The size of the stack: 5<br/>
            The top element of the queue: 5<br/>
            Pop the top element: <br/>
            4<br/>
            3<br/>
            2<br/>
            1
            </div>
          </section>

          <hr className="my-16 border-neutral-800" />

          {/* QUEUE SECTION */}
          <section>
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-3xl font-bold text-white m-0">What is queue in C++ STL?</h2>
            </div>
            <p className="text-neutral-300 leading-8 mb-6">
              A queue is a linear list of elements in which deletions can take place only at one end called the front, and insertions can take place only at the end called the rear. The queue is a <strong>First In First Out type of data structure (FIFO)</strong>, the terms FRONT and REAR are used in describing a linear list only when it is implemented as a queue.
            </p>
            
            <h4 className="text-lg font-bold text-white uppercase tracking-widest text-red-500">Example:</h4>
            <div className="bg-black p-3 rounded mt-2 mb-8">
              <code className="text-blue-400 block font-mono text-sm">queue&lt;int&gt; q;</code>
              <code className="text-blue-400 block font-mono text-sm">queue&lt;string&gt; q;</code>
            </div>

            <h3 className="text-xl font-bold text-white mb-6 text-red-500">Functions in Queue:</h3>
            <div className="space-y-6 text-neutral-300 mb-10 text-left">
              <div>
                <p><strong>push()</strong> : to insert an element in the queue.</p>
                <code className="text-blue-400 block bg-black p-3 rounded mt-2 font-mono text-sm">
                  queue&lt;int&gt; q<br/>
                  q.push(110);<br/>
                  q.push(220);
                </code>
              </div>
              <div>
                <p><strong>pop()</strong> : deletes the first element of the queue.</p>
                <code className="text-blue-400 block bg-black p-2 rounded mt-2 font-mono text-sm">q.pop();</code>
              </div>
              <div>
                <p><strong>front()</strong> : returns a reference to the first element of the queue.</p>
                <code className="text-blue-400 block bg-black p-2 rounded mt-2 font-mono text-sm">q.front();</code>
              </div>
              <div>
                <p><strong>back()</strong> : returns a reference to the last element of the queue.</p>
                <code className="text-blue-400 block bg-black p-2 rounded mt-2 font-mono text-sm">q.back();</code>
              </div>
              <div>
                <p><strong>emplace()</strong> : to insert an element in the queue.</p>
                <code className="text-blue-400 block bg-black p-3 rounded mt-2 font-mono text-sm">
                  queue&lt;int&gt; q;<br/>
                  q.emplace(1);<br/>
                  q.emplace(2);
                </code>
              </div>
              <div>
                <p><strong>size()</strong> : returns the number of elements on the queue.</p>
                <code className="text-blue-400 block bg-black p-2 rounded mt-2 font-mono text-sm">q.size();</code>
              </div>
              <div>
                <p><strong>empty()</strong> : to check if the queue is empty or not.</p>
                <code className="text-blue-400 block bg-black p-2 rounded mt-2 font-mono text-sm">q.empty();</code>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mt-12 mb-4 uppercase tracking-widest text-red-500 text-left">Code:</h3>
            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mb-4 text-left text-neutral-300">
              <span className="text-blue-500">#include</span><span className="text-orange-400">&lt;bits/stdc++.h&gt;</span><br/>
              <span className="text-red-500">using namespace</span> std;<br/><br/>
              <span className="text-red-500">void</span> <span className="text-yellow-400">printqueue</span>(queue&lt;<span className="text-red-500">int</span>&gt; q1)&#123;<br/>
              &nbsp;&nbsp;queue&lt;<span className="text-red-500">int</span>&gt; q2=q1;<br/>
              &nbsp;&nbsp;<span className="text-red-500">while</span>(!q2.<span className="text-yellow-400">empty</span>()) <span className="text-neutral-500">//Iterate while the queue in not empty</span><br/>
              &nbsp;&nbsp;&#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;cout&lt;&lt;q2.<span className="text-yellow-400">front</span>()&lt;&lt;<span className="text-orange-400">"\n"</span>;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;q2.<span className="text-yellow-400">pop</span>();<br/>
              &nbsp;&nbsp;&#125;<br/>
              &#125;<br/><br/>
              <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>()&#123;<br/>
              &nbsp;&nbsp;queue&lt;<span className="text-red-500">int</span>&gt; q;<br/>
              &nbsp;&nbsp;<span className="text-red-500">for</span>(<span className="text-red-500">int</span> i=<span className="text-blue-400">1</span>;i&lt;=<span className="text-blue-400">5</span>;i++)<br/>
              &nbsp;&nbsp;q.<span className="text-yellow-400">push</span>(i); <span className="text-neutral-500">//Push the elements in the queue</span><br/><br/>
              &nbsp;&nbsp;cout&lt;&lt;<span className="text-orange-400">"The elements of the queue are:"</span>&lt;&lt;endl;<br/>
              &nbsp;&nbsp;<span className="text-yellow-400">printqueue</span>(q);<br/><br/>
              &nbsp;&nbsp;cout&lt;&lt;<span className="text-orange-400">"The size of the queue: "</span>&lt;&lt;q.<span className="text-yellow-400">size</span>()&lt;&lt;endl;<br/>
              &nbsp;&nbsp;cout&lt;&lt;<span className="text-orange-400">"The front element of the queue: "</span>&lt;&lt;q.<span className="text-yellow-400">front</span>()&lt;&lt;endl;<br/>
              &nbsp;&nbsp;cout&lt;&lt;<span className="text-orange-400">"The last element of the queue: "</span>&lt;&lt;q.<span className="text-yellow-400">back</span>()&lt;&lt;endl;<br/>
              &nbsp;&nbsp;cout&lt;&lt;<span className="text-orange-400">"Pop the front element: "</span>&lt;&lt;endl;<br/>
              &nbsp;&nbsp;q.<span className="text-yellow-400">pop</span>(); <span className="text-neutral-500">//Pop the elements out of the queue</span><br/>
              &nbsp;&nbsp;<span className="text-yellow-400">printqueue</span>(q);<br/>
              &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br/>
              &#125;
            </div>
            <h3 className="text-xl font-bold text-white mt-8 mb-4 uppercase tracking-widest text-red-500 text-left">Output:</h3>
            <div className="p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300 mb-12 text-left">
            The elements of the queue are:<br/>
            1<br/>
            2<br/>
            3<br/>
            4<br/>
            5<br/>
            The size of the queue: 5<br/>
            The front element of the queue: 1<br/>
            The last element of the queue: 5<br/>
            Pop the front element: <br/>
            2<br/>
            3<br/>
            4<br/>
            5
            </div>
          </section>

          <hr className="my-16 border-neutral-800" />

          {/* DEQUE SECTION */}
          <section>
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-3xl font-bold text-white m-0">What is Deque?</h2>
            </div>
            <p className="text-neutral-300 leading-8 mb-6">
              Double Ended Queue which is also called Deque is a type of queue data structure in which the insertion and deletion of elements can be either in front or rear. 
            </p>
            
            <h4 className="text-lg font-bold text-white uppercase tracking-widest text-red-500 text-left">Syntax:</h4>
            <code className="text-blue-400 block bg-black p-3 rounded mt-2 mb-4 font-mono text-sm text-left">
              deque&lt;object_type&gt; variable_name; 
            </code>

            <h4 className="text-lg font-bold text-white mt-4 uppercase tracking-widest text-red-500 text-left">Example:</h4>
            <div className="bg-black p-3 rounded mt-2 mb-8 text-left">
              <code className="text-blue-400 block font-mono text-sm">deque&lt;int&gt; dq;</code>
              <code className="text-blue-400 block font-mono text-sm">deque&lt;string&gt; dq;</code>
            </div>

            <h3 className="text-xl font-bold text-white mb-6 text-red-500">Functions in Deque:</h3>
            <div className="space-y-6 text-neutral-300 mb-10 text-left">
              <div>
                <p><strong>push_back()</strong> – to insert an element at the end of the deque.</p>
                <code className="text-blue-400 block bg-black p-3 rounded mt-2 font-mono text-sm text-left">
                  deque&lt;int&gt; dq;<br/>
                  dq.push_back(110);<br/>
                  dq.push_back(220);
                </code>
              </div>
              <div>
                <p><strong>push_front()</strong> – to insert an element at the front of the deque.</p>
                <code className="text-blue-400 block bg-black p-3 rounded mt-2 font-mono text-sm text-left">
                  deque&lt;int&gt; dq;<br/>
                  dq.push_front(110);<br/>
                  dq.push_front(220);
                </code>
              </div>
              <div>
                <p><strong>pop_back()</strong> – deletes the last element of the deque.</p>
                <code className="text-blue-400 block bg-black p-2 rounded mt-2 font-mono text-sm text-left">dq.pop_back();</code>
              </div>
              <div>
                <p><strong>pop_front()</strong> – deletes the front element of the deque.</p>
                <code className="text-blue-400 block bg-black p-2 rounded mt-2 font-mono text-sm text-left">dq.pop_front();</code>
              </div>
              <div>
                <p><strong>front()</strong> – it gives a reference to the first element of the deque.</p>
                <code className="text-blue-400 block bg-black p-2 rounded mt-2 font-mono text-sm text-left">dq.front();</code>
              </div>
              <div>
                <p><strong>back()</strong> – it gives a reference to the last element of the deque.</p>
                <code className="text-blue-400 block bg-black p-2 rounded mt-2 font-mono text-sm text-left">dq.back();</code>
              </div>
              <div>
                <p><strong>size()</strong> – returns the number of elements on the deque.</p>
                <code className="text-blue-400 block bg-black p-2 rounded mt-2 font-mono text-sm text-left">dq.size();</code>
              </div>
              <div>
                <p><strong>empty()</strong> – to check if the deque is empty or not.</p>
                <code className="text-blue-400 block bg-black p-2 rounded mt-2 font-mono text-sm text-left">dq.empty();</code>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mt-12 mb-4 uppercase tracking-widest text-red-500 text-left">Code:</h3>
            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mb-4 text-left text-neutral-300">
              <span className="text-blue-500">#include</span><span className="text-orange-400">&lt;bits/stdc++.h&gt;</span><br/>
              <span className="text-red-500">using namespace</span> std;<br/>
              <span className="text-red-500">void</span> <span className="text-yellow-400">printdeque</span>(deque&lt;<span className="text-red-500">int</span>&gt; dq)<br/>
              &#123;<br/>
              &nbsp;&nbsp;deque&lt;<span className="text-red-500">int</span>&gt;::iterator it;<br/>
              &nbsp;&nbsp;<span className="text-red-500">for</span>(it=dq.<span className="text-yellow-400">begin</span>();it!=dq.<span className="text-yellow-400">end</span>();it++)<br/>
              &nbsp;&nbsp;&#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;cout&lt;&lt;*it&lt;&lt;<span className="text-orange-400">" "</span>;<br/>
              &nbsp;&nbsp;&#125;<br/>
              &nbsp;&nbsp;cout&lt;&lt;endl;<br/>
              &#125;<br/>
              <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>()<br/>
              &#123;<br/>
              &nbsp;&nbsp;deque&lt;<span className="text-red-500">int</span>&gt; dq;<br/>
              &nbsp;&nbsp;dq.<span className="text-yellow-400">push_back</span>(<span className="text-blue-400">10</span>);<br/>
              &nbsp;&nbsp;dq.<span className="text-yellow-400">push_back</span>(<span className="text-blue-400">20</span>);<br/>
              &nbsp;&nbsp;dq.<span className="text-yellow-400">push_front</span>(<span className="text-blue-400">30</span>);<br/>
              &nbsp;&nbsp;dq.<span className="text-yellow-400">push_front</span>(<span className="text-blue-400">40</span>);<br/>
              &nbsp;&nbsp;dq.<span className="text-yellow-400">push_front</span>(<span className="text-blue-400">50</span>);<br/><br/>
              &nbsp;&nbsp;cout&lt;&lt;<span className="text-orange-400">"The elements in the deque are: "</span>;<br/>
              &nbsp;&nbsp;<span className="text-yellow-400">printdeque</span>(dq);<br/><br/>
              &nbsp;&nbsp;cout&lt;&lt;<span className="text-orange-400">"The size of the deque is: "</span>&lt;&lt;dq.<span className="text-yellow-400">size</span>()&lt;&lt;endl;<br/>
              &nbsp;&nbsp;cout&lt;&lt;<span className="text-orange-400">"The first element in the deque: "</span>&lt;&lt;dq.<span className="text-yellow-400">front</span>()&lt;&lt;endl;<br/>
              &nbsp;&nbsp;cout&lt;&lt;<span className="text-orange-400">"Deleting the first element"</span>&lt;&lt;endl;<br/>
              &nbsp;&nbsp;dq.<span className="text-yellow-400">pop_front</span>();<br/>
              &nbsp;&nbsp;<span className="text-yellow-400">printdeque</span>(dq);<br/>
              &nbsp;&nbsp;cout&lt;&lt;<span className="text-orange-400">"The last element of the deque: "</span>&lt;&lt;dq.<span className="text-yellow-400">back</span>()&lt;&lt;endl;<br/>
              &nbsp;&nbsp;cout&lt;&lt;<span className="text-orange-400">"Deleting the last element"</span>&lt;&lt;endl;<br/>
              &nbsp;&nbsp;dq.<span className="text-yellow-400">pop_back</span>();<br/>
              &nbsp;&nbsp;<span className="text-yellow-400">printdeque</span>(dq);<br/>
              &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br/>
              &#125;
            </div>

            <h3 className="text-xl font-bold text-white mt-8 mb-4 uppercase tracking-widest text-red-500 text-left">Output:</h3>
            <div className="p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300 mb-12 text-left">
              The elements in the deque are: 50 40 30 10 20<br/>
              The size of the deque is: 5<br/>
              The first element in the deque: 50<br/>
              Deleting the first element<br/>
              40 30 10 20<br/>
              The last element of the deque: 20<br/>
              Deleting the last element<br/>
              40 30 10
            </div>

            <h3 className="text-xl font-bold text-white mt-8 mb-4 text-red-500 text-left">Other functions in Deque:</h3>
            <ul className="space-y-2 text-neutral-300 list-none p-0 mb-16 text-left">
              <li><strong>begin()</strong> - it refers to the first element of the deque.</li>
              <li><strong>end()</strong> - it refers to the theoretical element after the last element of the deque.</li>
              <li><strong>cbegin()</strong> – it refers to the first element of the deque.</li>
              <li><strong>cend()</strong> – it refers to the theoretical element after the last element of the deque</li>
              <li><strong>rbegin()</strong> – it points to the last element of the deque.</li>
              <li><strong>rend()</strong> – it points to the theoretical element before the first element of the deque.</li>
              <li><strong>emplace_front()</strong> – to insert an element at the front of the deque.</li>
              <li><strong>emplace_back()</strong> – to insert an element at the end of the deque.</li>
              <li><strong>max_size()</strong> – the maximum elements a deque can hold.</li>
              <li><strong>clear()</strong> - to delete all the elements of the deque.</li>
              <li><strong>erase()</strong> - to delete a single element or elements between a particular range.</li>
            </ul>
          </section>

          <hr className="my-16 border-neutral-800" />

          {/* PRIORITY_QUEUE SECTION */}
          <section>
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-3xl font-bold text-white m-0">What is Priority Queue?</h2>
            </div>
            <p className="text-neutral-300 leading-8 mb-6">
              A priority queue is a special type of queue in which each element is associated with a priority and is served according to its priority. If elements with the same priority occur, they are served according to their order in the queue. By default, in C++ STL, the largest element has the highest priority (Max-Heap).
            </p>

            <h3 className="text-xl font-bold text-white mb-6 text-red-500">Functions in Priority Queue:</h3>
            <div className="space-y-6 text-neutral-300 mb-10 text-left">
              <div>
                <p><strong>push()</strong> – inserts an element into the priority queue.</p>
                <code className="text-blue-400 block bg-black p-3 rounded mt-2 font-mono text-sm text-left">
                  priority_queue&lt;int&gt; pq;<br/>
                  pq.push(10);<br/>
                  pq.push(30);
                </code>
              </div>
              <div>
                <p><strong>pop()</strong> – removes the element with the highest priority (top element).</p>
                <code className="text-blue-400 block bg-black p-2 rounded mt-2 font-mono text-sm text-left">pq.pop();</code>
              </div>
              <div>
                <p><strong>top()</strong> – returns the element with the highest priority.</p>
                <code className="text-blue-400 block bg-black p-2 rounded mt-2 font-mono text-sm text-left">pq.top();</code>
              </div>
              <div>
                <p><strong>size()</strong> – returns the number of elements in the priority queue.</p>
                <code className="text-blue-400 block bg-black p-2 rounded mt-2 font-mono text-sm text-left">pq.size();</code>
              </div>
              <div>
                <p><strong>empty()</strong> – checks if the priority queue is empty.</p>
                <code className="text-blue-400 block bg-black p-2 rounded mt-2 font-mono text-sm text-left">pq.empty();</code>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mt-12 mb-4 uppercase tracking-widest text-red-500 text-left">Code:</h3>
            <div className="bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto leading-7 shadow-2xl mb-4 text-left text-neutral-300 text-left">
              <span className="text-blue-500">#include</span><span className="text-orange-400">&lt;bits/stdc++.h&gt;</span><br/>
              <span className="text-red-500">using namespace</span> std;<br/><br/>
              <span className="text-red-500">int</span> <span className="text-yellow-400">main</span>()&#123;<br/>
              &nbsp;&nbsp;priority_queue&lt;<span className="text-red-500">int</span>&gt; pq;<br/>
              &nbsp;&nbsp;pq.<span className="text-yellow-400">push</span>(<span className="text-blue-400">10</span>);<br/>
              &nbsp;&nbsp;pq.<span className="text-yellow-400">push</span>(<span className="text-blue-400">50</span>);<br/>
              &nbsp;&nbsp;pq.<span className="text-yellow-400">push</span>(<span className="text-blue-400">20</span>);<br/><br/>
              &nbsp;&nbsp;cout&lt;&lt;<span className="text-orange-400">"The top element is: "</span>&lt;&lt;pq.<span className="text-yellow-400">top</span>()&lt;&lt;endl;<br/>
              &nbsp;&nbsp;cout&lt;&lt;<span className="text-orange-400">"The size is: "</span>&lt;&lt;pq.<span className="text-yellow-400">size</span>()&lt;&lt;endl;<br/><br/>
              &nbsp;&nbsp;cout&lt;&lt;<span className="text-orange-400">"Popping elements: "</span>;<br/>
              &nbsp;&nbsp;<span className="text-red-500">while</span>(!pq.<span className="text-yellow-400">empty</span>())&#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;cout&lt;&lt;pq.<span className="text-yellow-400">top</span>()&lt;&lt;<span className="text-orange-400">" "</span>;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;pq.<span className="text-yellow-400">pop</span>();<br/>
              &nbsp;&nbsp;&#125;<br/>
              &nbsp;&nbsp;<span className="text-red-500">return</span> <span className="text-blue-400">0</span>;<br/>
              &#125;
            </div>

            <h3 className="text-xl font-bold text-white mt-8 mb-4 uppercase tracking-widest text-red-500 text-left text-left">Output:</h3>
            <div className="p-4 bg-[#111] border border-neutral-800 rounded-lg font-mono text-sm text-neutral-300 mb-12 text-left">
              The top element is: 50<br/>
              The size is: 3<br/>
              Popping elements: 50 20 10 
            </div>
          </section>
        </article>
            <div className="mt-20 flex justify-between border-t border-neutral-800 pt-10">
                {/* Previous Lesson Button */}
                <Link href="/langroadmap/cpp/phase3/pairs-tuples">
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
                                Pairs & Tuples in C++
                            </span>
                        </div>
                    </motion.div>
                </Link>

                {/* Next Lesson Button */}
                <Link href="/langroadmap/cpp/phase3/useful-functions-sorting-algorithms">
                    <motion.div
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-4 group cursor-pointer"
                    >
                        <div className="text-right">
                            <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Next Lesson</span>
                            <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                                Useful Functions & Sorting Algorithms
                            </span>
                        </div>
                        <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 transition-colors">
                            <ArrowRight className="w-5 h-5 text-red-500" />
                        </div>
                    </motion.div>
                </Link>
            </div>
      </main>

      {/* Floating Action Button */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={goToTop}
            className="fixed bottom-8 right-8 p-4 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-colors z-50"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}