import { Gamepad2, Target, Layers, Zap, Palette, CheckCircle } from "lucide-react";

export default function GameDesignPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Module Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
          <Gamepad2 className="w-4 h-4" />
          Game Design Module
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Game Design Fundamentals: Building a 2D Platformer
        </h1>
        <p className="text-slate-600 text-lg">
          Learn the core principles of game design through hands-on development of a playable 2D platformer game.
        </p>
      </div>

      {/* Learning Objectives */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-8">
        <h2 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-purple-600" />
          Learning Objectives
        </h2>
        <ul className="space-y-2 text-slate-700">
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Understand the fundamental game loop and update cycle
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Implement basic physics including gravity and velocity
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Create collision detection systems for game mechanics
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Design and organize game assets for production
          </li>
        </ul>
      </div>

      {/* Project Brief */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-200 mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <Gamepad2 className="w-6 h-6 text-purple-600" />
          Final Project: 2D Platformer Game
        </h2>
        
        <div className="bg-white p-6 rounded-lg border border-purple-200">
          <h3 className="font-semibold text-slate-900 mb-3">Project Description</h3>
          <p className="text-slate-700 mb-4">
            Students will create a simple, playable 2D platformer game where a character can run and jump on 
            platforms to reach a goal. The game will demonstrate fundamental game design principles and provide 
            a foundation for more complex game development.
          </p>
          
          <h4 className="font-semibold text-slate-900 mb-2">Core Gameplay Elements:</h4>
          <ul className="space-y-1 text-slate-700">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              Player character with movement and jumping abilities
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              Multiple platforms at different heights
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              Collectible items to increase score
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              Goal object to complete the level
            </li>
          </ul>
        </div>
      </div>

      {/* Lesson Concept Slides */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
          Core Game Design Concepts
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Slide 1: Game Loop */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">The Game Loop</h3>
            </div>
            
            <div className="space-y-3 text-sm">
              <div className="bg-white p-3 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-slate-900 mb-1">update() Function</h4>
                <p className="text-slate-600">Handles game logic, physics, and input processing</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-slate-900 mb-1">draw() Function</h4>
                <p className="text-slate-600">Renders all game objects to the screen</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-slate-900 mb-1">60 FPS Cycle</h4>
                <p className="text-slate-600">Runs continuously to create smooth gameplay</p>
              </div>
            </div>
          </div>

          {/* Slide 2: Player Physics */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Layers className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Player Physics</h3>
            </div>
            
            <div className="space-y-3 text-sm">
              <div className="bg-white p-3 rounded-lg border border-green-200">
                <h4 className="font-semibold text-slate-900 mb-1">Gravity</h4>
                <p className="text-slate-600">Constant downward force (e.g., 0.5 pixels per frame)</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-green-200">
                <h4 className="font-semibold text-slate-900 mb-1">Velocity</h4>
                <p className="text-slate-600">Speed and direction of movement (x and y components)</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-green-200">
                <h4 className="font-semibold text-slate-900 mb-1">Acceleration</h4>
                <p className="text-slate-600">Change in velocity over time for smooth movement</p>
              </div>
            </div>
          </div>

          {/* Slide 3: Collision Detection */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Gamepad2 className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Collision Detection</h3>
            </div>
            
            <div className="space-y-3 text-sm">
              <div className="bg-white p-3 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-slate-900 mb-1">Bounding Box</h4>
                <p className="text-slate-600">Rectangle around objects for collision checking</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-slate-900 mb-1">Overlap Test</h4>
                <p className="text-slate-600">Check if two rectangles intersect</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-slate-900 mb-1">Response</h4>
                <p className="text-slate-600">What happens when collision occurs</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Asset Checklist */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
          <Palette className="w-5 h-5 text-purple-600" />
          Required Game Assets
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-slate-900 mb-3 text-purple-700">Character Assets</h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Player Sprite Sheet (idle, run, jump animations)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Character Hitbox (collision detection)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Sound Effects (jump, collect, win)
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-900 mb-3 text-purple-700">Environment Assets</h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Platform Tiles (different sizes and types)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Background Image (parallax scrolling)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Collectible Items (coins, power-ups)
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
          <h4 className="font-semibold text-slate-900 mb-2">Production Notes:</h4>
          <p className="text-slate-700 text-sm">
            All assets should be created in consistent dimensions (e.g., 32x32 pixels for tiles, 64x64 for characters) 
            and exported in PNG format with transparency. Consider creating a simple asset pipeline using tools like 
            Aseprite, Piskel, or even Google Drawings for rapid prototyping.
          </p>
        </div>
      </div>

      {/* Technical Implementation */}
      <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-8 rounded-xl border border-slate-200 mt-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Technical Implementation</h2>
        
        <div className="bg-white p-6 rounded-lg border border-slate-200 mb-6">
          <h3 className="font-semibold text-slate-900 mb-3">Recommended Tools & Frameworks</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">For Beginners:</h4>
              <ul className="space-y-1 text-slate-700 text-sm">
                <li>• Scratch (block-based programming)</li>
                <li>• Construct 3 (visual game maker)</li>
                <li>• GameMaker Studio 2</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">For Advanced Students:</h4>
              <ul className="space-y-1 text-slate-700 text-sm">
                <li>• Unity 2D with C#</li>
                <li>• Godot with GDScript</li>
                <li>• HTML5 Canvas with JavaScript</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-sm">
          <h4 className="text-slate-300 mb-3">Basic Game Loop Structure (Pseudocode):</h4>
          <div className="space-y-2">
            <div><span className="text-blue-400">function</span> <span className="text-green-400">gameLoop</span>() {'{'}</div>
            <div className="ml-4">update();</div>
            <div className="ml-4">draw();</div>
            <div className="ml-4">requestAnimationFrame(gameLoop);</div>
            <div>{'}'}</div>
            <div className="mt-3">
              <span className="text-blue-400">function</span> <span className="text-green-400">update</span>() {'{'}</div>
            <div className="ml-4">handleInput();</div>
            <div className="ml-4">updatePlayer();</div>
            <div className="ml-4">checkCollisions();</div>
            <div>{'}'}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
