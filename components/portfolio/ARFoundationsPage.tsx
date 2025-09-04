import { Eye, Target, Code, CheckCircle, Star } from "lucide-react";

export default function ARFoundationsPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Module Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
          <Eye className="w-4 h-4" />
          Augmented Reality Module
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Project: Bring a Character to Life with AR
        </h1>
        <p className="text-slate-600 text-lg">
          Design and develop interactive AR face lenses using Lens Studio, creating characters that respond to facial expressions.
        </p>
      </div>

      {/* Learning Objectives */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-8">
        <h2 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-indigo-600" />
          Learning Objectives
        </h2>
        <ul className="space-y-2 text-slate-700">
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Understand the fundamentals of AR development and face tracking
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Master Lens Studio interface and basic components
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Create interactive characters that respond to facial movements
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Implement behavior scripts and animation triggers
          </li>
        </ul>
      </div>

      {/* Creative Prompt */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-xl border border-indigo-200 mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <Star className="w-6 h-6 text-indigo-600" />
          Creative Prompt
        </h2>
        
        <div className="bg-white p-6 rounded-lg border border-indigo-200">
          <h3 className="font-semibold text-slate-900 mb-3">Design Challenge</h3>
          <p className="text-slate-700 mb-4">
            Design a simple 2D or 3D character and use Lens Studio to turn it into an interactive AR face lens. 
            Your character should have personality and respond to the user&apos;s facial expressions in creative ways.
          </p>
          
          <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
            <h4 className="font-semibold text-slate-900 mb-2">Key Questions to Consider:</h4>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                What does your character do when the user smiles?
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                How does it react when eyebrows are raised?
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                What happens during a wink or eye movement?
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                How can you make the character feel alive and engaging?
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Technical Scaffolding Slides */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
          Development Process
        </h2>
        
        <div className="space-y-6">
          {/* Step 1: Asset Import */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold text-lg">1</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-900 mb-3">2D/3D Asset Import</h3>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-slate-900 mb-2">Process:</h4>
                  <ul className="space-y-1 text-slate-700 text-sm">
                    <li>• Export character assets in PNG (2D) or FBX/OBJ (3D) format</li>
                    <li>• Import into Lens Studio's Assets panel</li>
                    <li>• Set up texture atlases for 2D sprites</li>
                    <li>• Configure material properties for 3D models</li>
                  </ul>
                </div>
                <div className="mt-3 text-sm text-slate-600">
                  <strong>Pro Tip:</strong> Use transparent backgrounds for 2D assets and ensure 3D models are properly scaled.
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Face Binding */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 font-bold text-lg">2</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Attaching to the Face</h3>
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-slate-900 mb-2">Components:</h4>
                  <ul className="space-y-1 text-slate-700 text-sm">
                    <li>• Add Head Binding component to your character</li>
                    <li>• Configure binding points (forehead, nose, chin)</li>
                    <li>• Set offset values for proper positioning</li>
                    <li>• Test face tracking accuracy in preview mode</li>
                  </ul>
                </div>
                <div className="mt-3 text-sm text-slate-600">
                  <strong>Pro Tip:</strong> Use multiple binding points for more stable tracking, especially for larger characters.
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Interactivity */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-purple-600 font-bold text-lg">3</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Creating Interactivity</h3>
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-slate-900 mb-2">Tools & Techniques:</h4>
                  <ul className="space-y-1 text-slate-700 text-sm">
                    <li>• Behavior Script: Custom JavaScript for complex logic</li>
                    <li>• Tween Manager: Smooth animations and transitions</li>
                    <li>• Face Tracking: On Smile, On Eyebrows Raised events</li>
                    <li>• Animation Controller: Managing multiple animation states</li>
                  </ul>
                </div>
                <div className="mt-3 text-sm text-slate-600">
                  <strong>Pro Tip:</strong> Start with simple triggers and gradually add complexity. Test frequently!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Code Examples */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-8">
        <h2 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <Code className="w-5 h-5 text-indigo-600" />
          Behavior Script Examples
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-sm">
            <h4 className="text-slate-300 mb-3">Smile Detection:</h4>
            <div className="space-y-2">
              <div><span className="text-blue-400">script</span>.<span className="text-green-400">api</span>.onFaceTracking = <span className="text-blue-400">function</span>(face) {'{'}</div>
              <div className="ml-4"><span className="text-blue-400">if</span> (face.smile &gt; 0.7) {'{'}</div>
              <div className="ml-8"><span className="text-green-400">playAnimation</span>(<span className="text-orange-400">&quot;happy&quot;</span>);</div>
              <div className="ml-4">{'}'}</div>
              <div>{'}'}</div>
            </div>
          </div>
          
          <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-sm">
            <h4 className="text-slate-300 mb-3">Eyebrow Movement:</h4>
            <div className="space-y-2">
              <div><span className="text-blue-400">script</span>.<span className="text-green-400">api</span>.onFaceTracking = <span className="text-blue-400">function</span>(face) {'{'}</div>
              <div className="ml-4"><span className="text-blue-400">if</span> (face.eyebrows &gt; 0.8) {'{'}</div>
              <div className="ml-8"><span className="text-green-400">playAnimation</span>(<span className="text-orange-400">&quot;surprised&quot;</span>);</div>
              <div className="ml-4">{'}'}</div>
              <div>{'}'}</div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-indigo-50 rounded-lg border border-indigo-200">
          <h4 className="font-semibold text-slate-900 mb-2">Animation Setup:</h4>
          <p className="text-slate-700 text-sm">
            Create animation clips in your 3D software or sprite sheets for 2D. Import them into Lens Studio 
            and set up Animation Controllers to manage transitions between different states (idle, happy, surprised, etc.).
          </p>
        </div>
      </div>

      {/* Grading Rubric */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-xl border border-amber-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
          Project Grading Rubric
        </h2>
        
        <div className="bg-white p-6 rounded-lg border border-amber-200">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-amber-200">
                  <th className="text-left py-3 px-4 font-semibold text-slate-900">Criteria</th>
                  <th className="text-center py-3 px-4 font-semibold text-slate-900">Points</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-900">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-100">
                <tr>
                  <td className="py-3 px-4 font-medium text-slate-900">Concept & Creativity</td>
                  <td className="py-3 px-4 text-center font-bold text-amber-600">10 pts</td>
                  <td className="py-3 px-4 text-slate-700">
                    Original character design, creative responses to facial expressions, engaging personality
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-slate-900">Technical Execution</td>
                  <td className="py-3 px-4 text-center font-bold text-amber-600">10 pts</td>
                  <td className="py-3 px-4 text-slate-700">
                    Proper asset import, stable face tracking, smooth animations, no technical glitches
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-slate-900">Interactivity & UX</td>
                  <td className="py-3 px-4 text-center font-bold text-amber-600">10 pts</td>
                  <td className="py-3 px-4 text-slate-700">
                    Responsive to multiple facial expressions, intuitive behavior, engaging user experience
                  </td>
                </tr>
                <tr className="bg-amber-50">
                  <td className="py-3 px-4 font-bold text-slate-900">Total Score</td>
                  <td className="py-3 px-4 text-center font-bold text-amber-600">30 pts</td>
                  <td className="py-3 px-4 text-slate-700">
                    <span className="font-medium">Excellent:</span> 27-30 | <span className="font-medium">Good:</span> 24-26 | <span className="font-medium">Satisfactory:</span> 21-23
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg border border-amber-200">
            <h4 className="font-semibold text-slate-900 mb-2">Bonus Points (up to +5):</h4>
            <ul className="text-slate-700 text-sm space-y-1">
              <li>• Advanced facial expression detection</li>
              <li>• Sound effects and audio feedback</li>
              <li>• Multiple character states or moods</li>
              <li>• Creative use of AR effects (particles, etc.)</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-amber-200">
            <h4 className="font-semibold text-slate-900 mb-2">Submission Requirements:</h4>
            <ul className="text-slate-700 text-sm space-y-1">
              <li>• Working .lens file</li>
              <li>• Character design documentation</li>
              <li>• Technical implementation notes</li>
              <li>• Demo video (30 seconds max)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Resources & Next Steps */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mt-8">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Resources & Next Steps</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-slate-900 mb-3 text-indigo-700">Learning Resources</h3>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li>• Lens Studio Documentation: <span className="text-indigo-600">lensstudio.snapchat.com</span></li>
              <li>• Snap Camera for testing lenses</li>
              <li>• YouTube: Lens Studio tutorials and examples</li>
              <li>• Community forums and Discord servers</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-900 mb-3 text-indigo-700">Advanced Projects</h3>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li>• Multi-character interactions</li>
              <li>• World effects and environmental AR</li>
              <li>• Hand tracking and gesture recognition</li>
              <li>• Integration with external APIs</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
          <h4 className="font-semibold text-slate-900 mb-2">Industry Applications:</h4>
          <p className="text-slate-700 text-sm">
            AR face lenses are used in social media, marketing campaigns, virtual try-ons, and entertainment. 
            This project provides foundational skills for careers in AR/VR development, digital marketing, 
            and creative technology.
          </p>
        </div>
      </div>
    </div>
  );
}
