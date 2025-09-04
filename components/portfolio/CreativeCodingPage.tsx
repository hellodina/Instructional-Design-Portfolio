import { Palette, Target, Code, Sparkles, CheckCircle, Play, Users, Clock, BookOpen } from "lucide-react";

export default function CreativeCodingPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Module Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 bg-pink-50 text-pink-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
          <Palette className="w-4 h-4" />
          Creative Coding Module
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Creative Coding Lab: Generative Art with p5.js
        </h1>
        <p className="text-slate-600 text-lg">
          Explore the intersection of art and code by creating dynamic, interactive art pieces that respond to user input.
        </p>
      </div>

      {/* Lesson Overview */}
      <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-xl border border-pink-200 mb-8">
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div className="bg-white p-4 rounded-lg border border-pink-200">
            <Clock className="w-8 h-8 text-pink-600 mx-auto mb-2" />
            <div className="text-sm font-semibold text-slate-900">Duration</div>
            <div className="text-pink-600">90 minutes</div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-pink-200">
            <Users className="w-8 h-8 text-pink-600 mx-auto mb-2" />
            <div className="text-sm font-semibold text-slate-900">Audience</div>
            <div className="text-pink-600">High School & College</div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-pink-200">
            <BookOpen className="w-8 h-8 text-pink-600 mx-auto mb-2" />
            <div className="text-sm font-semibold text-slate-900">Prerequisites</div>
            <div className="text-pink-600">Basic HTML/JavaScript</div>
          </div>
        </div>
      </div>

      {/* Learning Objectives */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-8">
        <h2 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-pink-600" />
          Learning Objectives
        </h2>
        <ul className="space-y-2 text-slate-700">
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Understand the fundamentals of creative coding and generative art
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Master core p5.js functions for creating interactive graphics
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Build responsive art pieces that react to user input
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Develop creative thinking and algorithmic art skills
          </li>
        </ul>
      </div>

      {/* Lesson 1: Introduction to Creative Coding */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl border border-blue-200 mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <Play className="w-6 h-6 text-blue-600" />
          Lesson 1: What is Creative Coding?
        </h2>
        
        <div className="bg-white p-6 rounded-lg border border-blue-200 mb-6">
          <h3 className="font-semibold text-slate-900 mb-3">Opening Discussion (15 minutes)</h3>
          <p className="text-slate-700 mb-4">
            Begin with a class discussion about the relationship between art and technology. Show examples of 
            generative art, interactive installations, and creative coding projects.
          </p>
          
          <h4 className="font-semibold text-slate-900 mb-2">Discussion Questions:</h4>
          <ul className="space-y-2 text-slate-700 text-sm">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              How can code be used as a creative medium?
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              What makes interactive art different from static art?
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              How does user input change the creative experience?
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-slate-900 mb-3">Key Concepts Introduction (10 minutes)</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2 text-blue-700">Generative Art</h4>
              <p className="text-slate-700 text-sm">
                Art created using algorithms and rules, often with random or procedural elements
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-2 text-blue-700">Interactive Art</h4>
              <p className="text-slate-700 text-sm">
                Art that responds to viewer input, creating a dynamic experience
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lesson 2: p5.js Fundamentals */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-xl border border-green-200 mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <Code className="w-6 h-6 text-green-600" />
          Lesson 2: p5.js Fundamentals
        </h2>
        
        <div className="bg-white p-6 rounded-lg border border-green-200 mb-6">
          <h3 className="font-semibold text-slate-900 mb-3">Core Functions Deep Dive (20 minutes)</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-slate-900 mb-2">setup() Function</h4>
                <p className="text-slate-700 text-sm mb-2">
                  Runs once at the beginning. Use this to set canvas size, initial colors, and load assets.
                </p>
                <div className="bg-slate-900 text-slate-100 p-2 rounded text-xs font-mono">
                  <span className="text-blue-400">function</span> <span className="text-green-400">setup</span>() {'{'}<br/>
                  <span className="ml-4 text-green-400">createCanvas</span>(800, 600);<br/>
                  <span className="ml-4 text-green-400">background</span>(220);<br/>
                  {'}'}
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-slate-900 mb-2">draw() Function</h4>
                <p className="text-slate-700 text-sm mb-2">
                  Runs continuously (60 FPS by default). This is where you put code that needs to update every frame.
                </p>
                <div className="bg-slate-900 text-slate-100 p-2 rounded text-xs font-mono">
                  <span className="text-blue-400">function</span> <span className="text-green-400">draw</span>() {'{'}<br/>
                  <span className="ml-4 text-green-400">ellipse</span>(mouseX, mouseY, 50, 50);<br/>
                  {'}'}
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-slate-900 mb-2">mouseX & mouseY</h4>
                <p className="text-slate-700 text-sm mb-2">
                  Built-in variables that track the current mouse position on the canvas.
                </p>
                <div className="bg-slate-900 text-slate-100 p-2 rounded text-xs font-mono">
                  <span className="text-slate-400">{/* mouseX = horizontal position */}</span><br/>
                  <span className="text-slate-400">{/* mouseY = vertical position */}</span><br/>
                  <span className="text-green-400">ellipse</span>(mouseX, mouseY, 50, 50);
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-slate-900 mb-2">map() Function</h4>
                <p className="text-slate-700 text-sm mb-2">
                  Converts a value from one range to another. Perfect for mapping mouse position to colors or sizes.
                </p>
                <div className="bg-slate-900 text-slate-100 p-2 rounded text-xs font-mono">
                  <span className="text-blue-400">let</span> r = <span className="text-green-400">map</span>(mouseX, 0, width, 0, 255);<br/>
                  <span className="text-slate-400">{/* Maps mouseX from 0-width to 0-255 */}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-green-200">
          <h3 className="font-semibold text-slate-900 mb-3">Hands-On Exercise: Basic Canvas (15 minutes)</h3>
          <p className="text-slate-700 mb-4">
            Students create a simple canvas and experiment with basic shapes and colors.
          </p>
          
          <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-sm">
            <div className="text-slate-400 mb-3">Exercise: Create a simple drawing</div>
            <div className="space-y-2">
              <div>1. Create a canvas (800x600)</div>
              <div>2. Draw a circle that follows your mouse</div>
              <div>3. Change the circle color based on mouse position</div>
              <div>4. Add a background that creates a trail effect</div>
            </div>
          </div>
        </div>
      </div>

      {/* Lesson 3: Interactive Elements */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-200 mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-purple-600" />
          Lesson 3: Creating Interactive Elements
        </h2>
        
        <div className="bg-white p-6 rounded-lg border border-purple-200 mb-6">
          <h3 className="font-semibold text-slate-900 mb-3">Event Handling (20 minutes)</h3>
          
          <div className="space-y-4">
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-slate-900 mb-2">Mouse Events</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold text-slate-900 mb-1 text-purple-700">mousePressed()</h5>
                  <p className="text-slate-700 text-sm">Triggered when mouse button is pressed</p>
                </div>
                <div>
                  <h5 className="font-semibold text-slate-900 mb-1 text-purple-700">mouseReleased()</h5>
                  <p className="text-slate-700 text-sm">Triggered when mouse button is released</p>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-slate-900 mb-2">Keyboard Events</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold text-slate-900 mb-1 text-purple-700">keyPressed()</h5>
                  <p className="text-slate-700 text-sm">Triggered when any key is pressed</p>
                </div>
                <div>
                  <h5 className="font-semibold text-slate-900 mb-1 text-purple-700">keyCode</h5>
                  <p className="text-slate-700 text-sm">Variable containing the key that was pressed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-purple-200">
          <h3 className="font-semibold text-slate-900 mb-3">Interactive Art Project (25 minutes)</h3>
          <p className="text-slate-700 mb-4">
            Students build an interactive art piece that responds to multiple user inputs.
          </p>
          
          <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-sm">
            <div className="text-slate-300 mb-3">Project Requirements:</div>
            <div className="space-y-2 text-slate-400 text-xs">
              <div>• Art piece must respond to mouse movement</div>
              <div>• Include at least 3 different interactive elements</div>
              <div>• Use color mapping based on user input</div>
              <div>• Implement at least one keyboard control</div>
              <div>• Create smooth animations and transitions</div>
            </div>
          </div>
        </div>
      </div>

      {/* Lab Brief */}
      <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-8 rounded-xl border border-pink-200 mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-pink-600" />
          Lab Goal: Interactive Generative Art
        </h2>
        
        <div className="bg-white p-6 rounded-lg border border-pink-200">
          <h3 className="font-semibold text-slate-900 mb-3">Project Description</h3>
          <p className="text-slate-700 mb-4">
            Students will create a dynamic, interactive art piece that responds to the user&apos;s mouse movements. 
            The artwork should change colors, shapes, or patterns based on cursor position, creating a unique 
            visual experience for each user interaction.
          </p>
          
          <h4 className="font-semibold text-slate-900 mb-2">Creative Requirements:</h4>
          <ul className="space-y-1 text-slate-700">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
              Visual elements that respond to mouseX and mouseY coordinates
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
              Dynamic color changes using the map() function
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
              Smooth animations and transitions
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
              Aesthetic appeal and creative expression
            </li>
          </ul>
        </div>
      </div>

      {/* Starter Code Snippet */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-8">
        <h2 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <Code className="w-5 h-5 text-pink-600" />
          Starter Code: Interactive Canvas Setup
        </h2>
        
        <div className="bg-slate-900 text-slate-100 p-6 rounded-lg font-mono text-sm">
          <div className="text-slate-400 mb-4">// p5.js Starter Code for Interactive Art</div>
          
          <div className="space-y-3">
            <div><span className="text-blue-400">function</span> <span className="text-green-400">setup</span>() {'{'}</div>
            <div className="ml-4"><span className="text-green-400">createCanvas</span>(800, 600);</div>
            <div className="ml-4"><span className="text-green-400">background</span>(220);</div>
            <div>{'}'}</div>
            
            <div className="mt-3">
              <span className="text-blue-400">function</span> <span className="text-green-400">draw</span>() {'{'}</div>
            <div className="ml-4"><span className="text-slate-400">{/* Clear background with transparency for trails */}</span></div>
            <div className="ml-4"><span className="text-green-400">background</span>(220, 10);</div>
            <div className="ml-4"></div>
            <div className="ml-4"><span className="text-slate-400">{/* Map mouse position to color values */}</span></div>
            <div className="ml-4"><span className="text-blue-400">let</span> r = <span className="text-green-400">map</span>(mouseX, 0, width, 0, 255);</div>
            <div className="ml-4"><span className="text-blue-400">let</span> g = <span className="text-green-400">map</span>(mouseY, 0, height, 0, 255);</div>
            <div className="ml-4"><span className="text-blue-400">let</span> b = <span className="text-green-400">map</span>(mouseX + mouseY, 0, width + height, 0, 255);</div>
            <div className="ml-4"></div>
            <div className="ml-4"><span className="text-slate-400">{/* Set fill color based on mouse position */}</span></div>
            <div className="ml-4"><span className="text-green-400">fill</span>(r, g, b);</div>
            <div className="ml-4"><span className="text-green-400">noStroke</span>();</div>
            <div className="ml-4"></div>
            <div className="ml-4"><span className="text-slate-400">{/* Draw interactive elements */}</span></div>
            <div className="ml-4"><span className="text-green-400">ellipse</span>(mouseX, mouseY, 50, 50);</div>
            <div>{'}'}</div>
          </div>
          
          <div className="mt-4 p-3 bg-slate-800 rounded border border-slate-600">
            <div className="text-slate-300 mb-2">💡 Try These Modifications:</div>
            <div className="text-slate-400 text-xs space-y-1">
              <div>• Change ellipse() to rect() or triangle() for different shapes</div>
              <div>• Add random() for unpredictable elements</div>
              <div>• Use mousePressed to create click effects</div>
              <div>• Experiment with different color modes (HSB, etc.)</div>
            </div>
          </div>
        </div>
      </div>

      {/* Assessment & Reflection */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-xl border border-amber-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Assessment & Reflection</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border border-amber-200">
            <h3 className="font-semibold text-slate-900 mb-3 text-amber-700">Project Evaluation Criteria</h3>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Technical Implementation (30%)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Creative Expression (25%)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Interactivity & Responsiveness (25%)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Code Quality & Documentation (20%)
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-amber-200">
            <h3 className="font-semibold text-slate-900 mb-3 text-amber-700">Reflection Questions</h3>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                How did you balance technical constraints with creative vision?
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                What surprised you about the interactive experience?
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                How could you extend this project further?
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
          <h4 className="font-semibold text-slate-900 mb-2">Next Steps & Extensions:</h4>
          <ul className="text-slate-700 text-sm space-y-1">
            <li>• Explore p5.js sound library for audio-reactive art</li>
            <li>• Experiment with 3D graphics using p5.js 3D mode</li>
            <li>• Create collaborative art pieces using shared variables</li>
            <li>• Integrate with external APIs for data-driven art</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
