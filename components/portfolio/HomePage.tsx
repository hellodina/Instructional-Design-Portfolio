import { Sparkles, BookOpen, Users, Lightbulb, Heart, Target, Zap, Palette, Eye, Bot } from "lucide-react";

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Module Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4" />
          Curriculum Designer & Creative Technologist
        </div>
        
        <h1 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
          Designing a new generation of{" "}
          <span className="text-blue-600">creative technologists</span>
        </h1>
        
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          I&apos;m passionate about creating engaging, hands-on learning experiences that bridge the gap between 
          technology and creativity. My curriculum designs focus on practical application, interactive learning, 
          and real-world problem-solving.
        </p>
      </div>

      {/* Teaching Philosophy */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-200 mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <Heart className="w-6 h-6 text-purple-600" />
          My Teaching Philosophy
        </h2>
        
        <div className="bg-white p-6 rounded-lg border border-purple-200">
          <p className="text-slate-700 text-lg leading-relaxed">
            I believe that learning is most meaningful when it&apos;s creative, hands-on, and personally relevant. 
            My goal as an instructional designer and educator is to empower learners of all ages to explore, 
            experiment, and create while developing technical and critical thinking skills. I design experiences 
            that are engaging, interactive, and encourage curiosity, collaboration, and problem-solving.
          </p>
        </div>
      </div>

      {/* Teaching Approach */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-200 mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <Target className="w-6 h-6 text-blue-600" />
          My Teaching Approach
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-slate-900 mb-2 text-blue-700">Multi-Age Focus</h3>
              <p className="text-slate-700 text-sm">
                I design content tailored for High School, College, and Adult learners, recognizing their different needs, 
                prior knowledge, and motivations.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-slate-900 mb-2 text-blue-700">Project-Based Learning</h3>
              <p className="text-slate-700 text-sm">
                I emphasize real-world projects, exercises, and challenges that let learners apply concepts immediately.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-slate-900 mb-2 text-blue-700">Interactive & Visual</h3>
              <p className="text-slate-700 text-sm">
                Lessons include code examples, simulations, multimedia, and visual guides to reinforce understanding.
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-slate-900 mb-2 text-blue-700">Modular & Scalable</h3>
              <p className="text-slate-700 text-sm">
                Instruction is designed in reusable modules, so learners can progress at their own pace or instructors 
                can adapt content to different contexts.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-slate-900 mb-2 text-blue-700">Student-Centered</h3>
              <p className="text-slate-700 text-sm">
                I encourage experimentation, reflection, and creativity, giving learners opportunities to make choices 
                and build confidence through guided practice.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-slate-900 mb-2 text-blue-700">Technology Integration</h3>
              <p className="text-slate-700 text-sm">
                I leverage modern tools — from digital media production to AR and robotics — to create learning 
                experiences that feel relevant and exciting.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Overview */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
          Portfolio Overview
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Structured Learning</h3>
            <p className="text-slate-600 text-sm">
              Carefully crafted learning paths that build skills progressively
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Student-Centered</h3>
            <p className="text-slate-600 text-sm">
              Interactive projects and hands-on activities that engage learners
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Lightbulb className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Creative Innovation</h3>
            <p className="text-slate-600 text-sm">
              Encouraging creative thinking and innovative problem-solving approaches
            </p>
          </div>
        </div>
      </div>

      {/* Curriculum Areas */}
      <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-8 rounded-xl border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
          Explore My Curriculum Designs
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg border border-slate-200 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <BookOpen className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Web Development</h3>
            <p className="text-slate-600 text-sm">React Hooks & Interactive Web Apps</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-slate-200 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Zap className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Game Design</h3>
            <p className="text-slate-600 text-sm">2D Platformer Development</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-slate-200 text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Palette className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Creative Coding</h3>
            <p className="text-slate-600 text-sm">Generative Art with p5.js</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-slate-200 text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Eye className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Augmented Reality</h3>
            <p className="text-slate-600 text-sm">Interactive AR Face Lenses</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-slate-200 text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Bot className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Robotics</h3>
            <p className="text-slate-600 text-sm">Autonomous Obstacle-Avoiding Robots</p>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-slate-700 text-sm">
            Each section includes complete lesson plans, learning objectives, interactive examples, 
            project briefs, and assessment criteria to demonstrate my comprehensive approach to curriculum design.
          </p>
        </div>
      </div>
    </div>
  );
}
