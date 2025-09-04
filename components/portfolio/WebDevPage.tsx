import { useState } from "react";
import { Code, Target, BookOpen, CheckCircle, Play, Users, Clock, Zap, Lightbulb, Eye } from "lucide-react";

export default function WebDevPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Module Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
          <Code className="w-4 h-4" />
          Web Development Module
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Intro to React Hooks: Making Web Pages Come to Life
        </h1>
        <p className="text-slate-600 text-lg">
          Learn how to use React's useState hook to create interactive, dynamic web applications.
        </p>
      </div>

      {/* Lesson Overview */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200 mb-8">
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div className="bg-white p-4 rounded-lg border border-blue-200">
            <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-sm font-semibold text-slate-900">Duration</div>
            <div className="text-blue-600">75 minutes</div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-blue-200">
            <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-sm font-semibold text-slate-900">Audience</div>
            <div className="text-blue-600">College & Adult</div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-blue-200">
            <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-sm font-semibold text-slate-900">Prerequisites</div>
            <div className="text-blue-600">Basic React & JavaScript</div>
          </div>
        </div>
      </div>

      {/* Learning Objectives */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-8">
        <h2 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-blue-600" />
          Learning Objectives
        </h2>
        <ul className="space-y-2 text-slate-700">
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Understand what state is and why it's important in React
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Learn how to use the useState hook to manage component state
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Build interactive components that respond to user actions
          </li>
        </ul>
      </div>

      {/* Lesson 1: Understanding State */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-200 mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <Play className="w-6 h-6 text-blue-600" />
          Lesson 1: What is State? (20 minutes)
        </h2>
        
        <div className="bg-white p-6 rounded-lg border border-blue-200 mb-6">
          <h3 className="font-semibold text-slate-900 mb-3">Opening Discussion (10 minutes)</h3>
          <p className="text-slate-700 mb-4">
            Begin with a class discussion about how websites change and respond to user actions. 
            Compare static websites to dynamic, interactive ones.
          </p>
          
          <h4 className="font-semibold text-slate-900 mb-2">Discussion Questions:</h4>
          <ul className="space-y-2 text-slate-700 text-sm">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              What makes a website feel "alive" and interactive?
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              How do websites remember what you've done?
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              What happens when you click a button on a website?
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-slate-900 mb-3">The Light Switch Analogy (10 minutes)</h3>
          <p className="text-slate-700 mb-4">
            Use the light switch analogy to explain state in React. The switch can be in two positions: ON or OFF. 
            When you flip the switch, the light changes, and the switch "remembers" its current position.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-slate-900 mb-2">Without State</h4>
              <p className="text-slate-600">Static content that never changes</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-slate-900 mb-2">With State</h4>
              <p className="text-slate-600">Dynamic content that responds to user actions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Lesson 2: useState Hook */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-xl border border-green-200 mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <Zap className="w-6 h-6 text-green-600" />
          Lesson 2: The useState Hook (25 minutes)
        </h2>
        
        <div className="bg-white p-6 rounded-lg border border-green-200 mb-6">
          <h3 className="font-semibold text-slate-900 mb-3">Syntax Deep Dive (15 minutes)</h3>
          
          <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-sm mb-4">
            <div className="text-slate-400 mb-3">useState Hook Syntax:</div>
            <div className="space-y-2">
              <div><span className="text-blue-400">const</span> [count, setCount] = <span className="text-green-400">useState</span>(0);</div>
              <div className="text-slate-400">// count = current value, setCount = function to update it</div>
              <div className="text-slate-400">// 0 = initial value</div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-slate-900 mb-2 text-green-700">State Variable</h4>
              <p className="text-slate-700 text-sm">
                The first element (count) holds the current state value. This is what gets displayed in the UI.
              </p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-slate-900 mb-2 text-green-700">Setter Function</h4>
              <p className="text-slate-700 text-sm">
                The second element (setCount) is a function that updates the state. When called, it triggers a re-render.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-green-200">
          <h3 className="font-semibold text-slate-900 mb-3">Hands-On Exercise: Counter Component (10 minutes)</h3>
          <p className="text-slate-700 mb-4">
            Students create a simple counter component using useState to understand the basic pattern.
          </p>
          
          <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-sm">
            <div className="text-slate-300 mb-3">Exercise Steps:</div>
            <div className="space-y-2 text-slate-400 text-xs">
              <div>1. Create a new React component</div>
              <div>2. Add useState hook with initial value 0</div>
              <div>3. Display the count value in JSX</div>
              <div>4. Add a button that calls setCount to increment</div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Sandbox */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-8">
        <h2 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <Code className="w-5 h-5 text-green-600" />
          Interactive Sandbox: Counter Component
        </h2>
        
        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 mb-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-slate-900 mb-4">{count}</div>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => setCount(count - 1)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Decrease
              </button>
              <button
                onClick={() => setCount(0)}
                className="px-4 py-2 bg-slate-500 text-white rounded-lg hover:bg-slate-600 transition-colors"
              >
                Reset
              </button>
              <button
                onClick={() => setCount(count + 1)}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                Increase
              </button>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-sm">
          <h4 className="text-slate-300 mb-3">Code Breakdown:</h4>
          <div className="space-y-2">
            <div><span className="text-blue-400">const</span> [count, setCount] = <span className="text-green-400">useState</span>(0);</div>
            <div className="text-slate-400">// count = current value, setCount = function to update it</div>
            <div className="text-slate-400">// 0 = initial value</div>
            <div className="mt-3">
              <span className="text-blue-400">onClick</span> handler with <span className="text-green-400">setCount</span> function
            </div>
            <div className="text-slate-400">// When clicked, update count to current value + 1</div>
          </div>
        </div>
      </div>

      {/* Lesson 3: State Updates */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-200 mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-purple-600" />
          Lesson 3: Updating State (20 minutes)
        </h2>
        
        <div className="bg-white p-6 rounded-lg border border-purple-200 mb-6">
          <h3 className="font-semibold text-slate-900 mb-3">State Update Patterns (15 minutes)</h3>
          
          <div className="space-y-4">
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-slate-900 mb-2">Direct Value Updates</h4>
              <div className="bg-slate-900 text-slate-100 p-3 rounded font-mono text-xs">
                <span className="text-green-400">setCount</span>(5); <span className="text-slate-400">// Set to specific value</span><br/>
                <span className="text-green-400">setCount</span>(<span className="text-blue-400">false</span>); <span className="text-slate-400">// Boolean state</span><br/>
                <span className="text-green-400">setCount</span>(<span className="text-orange-400">"Hello"</span>); <span className="text-slate-400">// String state</span>
              </div>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-slate-900 mb-2">Functional Updates</h4>
              <div className="bg-slate-900 text-slate-100 p-3 rounded font-mono text-xs">
                <span className="text-green-400">setCount</span>(prevCount =&gt; prevCount + 1); <span className="text-slate-400">// Based on previous value</span><br/>
                <span className="text-green-400">setCount</span>(prev =&gt; !prev); <span className="text-slate-400">// Toggle boolean</span><br/>
                <span className="text-green-400">setCount</span>(prev =&gt; prev * 2); <span className="text-slate-400">// Mathematical operations</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-purple-200">
          <h3 className="font-semibold text-slate-900 mb-3">Common Pitfalls & Best Practices (5 minutes)</h3>
          <ul className="space-y-2 text-slate-700 text-sm">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              Never mutate state directly (e.g., count++ instead of setCount(count + 1))
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              Always use the setter function to update state
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Use functional updates when new state depends on previous state
            </li>
          </ul>
        </div>
      </div>

      {/* Assignment Sample */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-xl border border-green-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-green-600" />
          Assignment: Simple To-Do List App
        </h2>
        
        <div className="bg-white p-6 rounded-lg border border-green-200 mb-6">
          <h3 className="font-semibold text-slate-900 mb-3">Project Brief</h3>
          <p className="text-slate-700 mb-4">
            Create a functional to-do list application that allows users to add, remove, and mark tasks as complete.
          </p>
          
          <h4 className="font-semibold text-slate-900 mb-2">Required Features:</h4>
          <ul className="space-y-1 text-slate-700">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Add new to-do items
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Remove completed items
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Mark items as complete/incomplete
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Display total count of items
            </li>
          </ul>

          <h4 className="font-semibold text-slate-900 mb-2">Core Concepts to Apply:</h4>
          <ul className="space-y-1 text-slate-700">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              useState to manage the list array
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              useState to manage the input field value
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Array methods (map, filter) to render and manipulate the list
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Event handlers for form submission and button clicks
            </li>
          </ul>
        </div>

        <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-sm">
          <h4 className="text-slate-300 mb-3">Starter Code Structure:</h4>
          <div className="space-y-2">
            <div><span className="text-blue-400">const</span> [todos, setTodos] = <span className="text-green-400">useState</span>([]);</div>
            <div><span className="text-blue-400">const</span> [inputValue, setInputValue] = <span className="text-green-400">useState</span>('');</div>
            <div className="text-slate-400">// todos = array of todo objects</div>
            <div className="text-slate-400">// inputValue = current text in input field</div>
          </div>
        </div>
      </div>

      {/* Assessment & Reflection */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-xl border border-amber-200 mt-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Assessment & Reflection</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border border-amber-200">
            <h3 className="font-semibold text-slate-900 mb-3 text-amber-700">Project Evaluation Criteria</h3>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                State Management (40%)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                User Interface (25%)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Functionality (25%)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Code Quality (10%)
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-amber-200">
            <h3 className="font-semibold text-slate-900 mb-3 text-amber-700">Reflection Questions</h3>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                How did useState change your understanding of React?
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                What challenges did you face with state updates?
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                How could you extend this app with more features?
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
          <h4 className="font-semibold text-slate-900 mb-2">Next Steps & Extensions:</h4>
          <ul className="text-slate-700 text-sm space-y-1">
            <li>• Add localStorage to persist data between sessions</li>
            <li>• Implement categories or tags for tasks</li>
            <li>• Add due dates and priority levels</li>
            <li>• Create a search/filter functionality</li>
            <li>• Explore other React hooks (useEffect, useContext)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
