import { Bot, Target, Cpu, CheckCircle, ArrowRight, Code } from "lucide-react";

export default function RoboticsPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Module Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
          <Bot className="w-4 h-4" />
          Robotics Module
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          The Autonomous Rover: Building an Obstacle-Avoiding Robot
        </h1>
        <p className="text-slate-600 text-lg">
          Learn robotics fundamentals by building and programming a small wheeled robot that can navigate autonomously.
        </p>
      </div>

      {/* Learning Objectives */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-8">
        <h2 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-emerald-600" />
          Learning Objectives
        </h2>
        <ul className="space-y-2 text-slate-700">
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Understand basic robotics hardware and sensor integration
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Learn Arduino programming for motor control and sensor reading
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Implement autonomous navigation algorithms
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Develop problem-solving skills for real-world robotics challenges
          </li>
        </ul>
      </div>

      {/* Project Goal */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-8 rounded-xl border border-emerald-200 mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <Bot className="w-6 h-6 text-emerald-600" />
          Project Goal
        </h2>
        
        <div className="bg-white p-6 rounded-lg border border-emerald-200">
          <h3 className="font-semibold text-slate-900 mb-3">Mission Statement</h3>
          <p className="text-slate-700 mb-4">
            To build and program a small wheeled robot that can navigate a space without bumping into walls, 
            using an ultrasonic sensor to detect obstacles and make intelligent decisions about movement direction.
          </p>
          
          <h4 className="font-semibold text-slate-900 mb-2">Success Criteria:</h4>
          <ul className="space-y-1 text-slate-700">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              Robot moves forward continuously when no obstacles are detected
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              Robot stops and turns when obstacles are detected within 15cm
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              Robot can navigate around obstacles and continue its journey
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              Robot operates autonomously without human intervention
            </li>
          </ul>
        </div>
      </div>

      {/* Component Cheatsheet */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-8">
        <h2 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
          <Cpu className="w-5 h-5 text-emerald-600" />
          Hardware Components Cheatsheet
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
              <h3 className="font-semibold text-slate-900 mb-2 text-emerald-700">Arduino Uno</h3>
              <p className="text-slate-700 text-sm mb-2">
                The brain of the robot - processes sensor data and controls motors
              </p>
              <div className="text-xs text-slate-600">
                <strong>Specs:</strong> 16MHz, 14 digital I/O pins, 6 analog inputs
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-slate-900 mb-2 text-blue-700">Ultrasonic Sensor (HC-SR04)</h3>
              <p className="text-slate-700 text-sm mb-2">
                Measures distance to obstacles using sound waves
              </p>
              <div className="text-xs text-slate-600">
                <strong>Range:</strong> 2cm - 400cm, <strong>Accuracy:</strong> ±3mm
              </div>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-slate-900 mb-2 text-purple-700">Motor Driver (L298N)</h3>
              <p className="text-slate-700 text-sm mb-2">
                Controls the speed and direction of DC motors
              </p>
              <div className="text-xs text-slate-600">
                <strong>Output:</strong> Up to 2A per motor, <strong>Voltage:</strong> 5-35V
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <h3 className="font-semibold text-slate-900 mb-2 text-orange-700">DC Motors (2x)</h3>
              <p className="text-slate-700 text-sm mb-2">
                Provide movement - differential steering for turning
              </p>
              <div className="text-xs text-slate-600">
                <strong>Voltage:</strong> 6-12V, <strong>Speed:</strong> 60-200 RPM
              </div>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h3 className="font-semibold text-slate-900 mb-2 text-red-700">Wheels & Chassis</h3>
              <p className="text-slate-700 text-sm mb-2">
                Robot body and movement system
              </p>
              <div className="text-xs text-slate-600">
                <strong>Wheel Diameter:</strong> 6-8cm, <strong>Material:</strong> Plastic/3D printed
              </div>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <h3 className="font-semibold text-slate-900 mb-2 text-yellow-700">Battery Pack</h3>
              <p className="text-slate-700 text-sm mb-2">
                Power source for motors and electronics
              </p>
              <div className="text-xs text-slate-600">
                <strong>Voltage:</strong> 9V or 12V, <strong>Capacity:</strong> 1000-2000mAh
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
          <h4 className="font-semibold text-slate-900 mb-2">Wiring Connections:</h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700">
            <div>
              <strong>Ultrasonic Sensor:</strong> VCC→5V, GND→GND, TRIG→Pin 9, ECHO→Pin 10
            </div>
            <div>
              <strong>Motor Driver:</strong> ENA→Pin 5, ENB→Pin 6, IN1→Pin 7, IN2→Pin 8, IN3→Pin 11, IN4→Pin 12
            </div>
          </div>
        </div>
      </div>

      {/* Programming Logic Flowchart */}
      <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-8 rounded-xl border border-slate-200 mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
          Programming Logic Flowchart
        </h2>
        
        <div className="bg-white p-6 rounded-lg border border-slate-200">
          <div className="font-mono text-sm space-y-3">
            <div className="flex items-center justify-center">
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg border-2 border-blue-300 font-semibold">
                [START]
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-slate-400" />
            </div>
            
            <div className="flex items-center justify-center">
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg border-2 border-green-300 font-semibold">
                [Read Sensor Distance]
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-slate-400" />
            </div>
            
            <div className="flex items-center justify-center">
              <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg border-2 border-yellow-300 font-semibold">
                [Is Distance &lt; 15cm?]
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <div className="text-red-600 font-semibold">(Yes)</div>
                <ArrowRight className="w-6 h-6 text-red-400 mx-auto" />
                <div className="bg-red-100 text-red-800 px-4 py-2 rounded-lg border-2 border-red-300 font-semibold text-xs">
                  [Turn Left]
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-green-600 font-semibold">(No)</div>
                <ArrowRight className="w-6 h-6 text-green-400 mx-auto" />
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg border-2 border-green-300 font-semibold text-xs">
                  [Move Forward]
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-8 mt-4">
              <ArrowRight className="w-6 h-6 text-red-400 rotate-45" />
              <ArrowRight className="w-6 h-6 text-green-400 -rotate-45" />
            </div>
            
            <div className="flex items-center justify-center">
              <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-lg border-2 border-purple-300 font-semibold">
                [Loop Back]
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center text-slate-600">
          <p className="text-sm">
            This flowchart demonstrates the core decision-making logic that makes the robot autonomous. 
            The robot continuously reads sensor data and makes movement decisions based on the environment.
          </p>
        </div>
      </div>

      {/* Arduino Code Example */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-8">
        <h2 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <Code className="w-5 h-5 text-emerald-600" />
          Arduino Code Implementation
        </h2>
        
        <div className="bg-slate-900 text-slate-100 p-6 rounded-lg font-mono text-sm">
          <div className="text-slate-400 mb-4">{/* Obstacle-Avoiding Robot Code */}</div>
          
          <div className="space-y-3">
            <div><span className="text-blue-400">{/* Pin definitions */}</span></div>
            <div><span className="text-blue-400">const int</span> TRIG_PIN = 9;</div>
            <div><span className="text-blue-400">const int</span> ECHO_PIN = 10;</div>
            <div><span className="text-blue-400">const int</span> ENA = 5; <span className="text-slate-400">{/* Left motor speed */}</span></div>
            <div><span className="text-blue-400">const int</span> ENB = 6; <span className="text-slate-400">{/* Right motor speed */}</span></div>
            <div><span className="text-blue-400">const int</span> IN1 = 7; <span className="text-slate-400">{/* Left motor direction */}</span></div>
            <div><span className="text-blue-400">const int</span> IN2 = 8; <span className="text-slate-400">{/* Left motor direction */}</span></div>
            <div><span className="text-blue-400">const int</span> IN3 = 11; <span className="text-slate-400">{/* Right motor direction */}</span></div>
            <div><span className="text-blue-400">const int</span> IN4 = 12; <span className="text-slate-400">{/* Right motor direction */}</span></div>
            
            <div className="mt-4">
              <span className="text-blue-400">void</span> <span className="text-green-400">setup</span>() {'{'}</div>
            <div className="ml-4"><span className="text-green-400">Serial</span>.<span className="text-yellow-400">begin</span>(9600);</div>
            <div className="ml-4"><span className="text-green-400">pinMode</span>(TRIG_PIN, OUTPUT);</div>
            <div className="ml-4"><span className="text-green-400">pinMode</span>(ECHO_PIN, INPUT);</div>
            <div className="ml-4"><span className="text-green-400">pinMode</span>(ENA, OUTPUT);</div>
            <div className="ml-4"><span className="text-green-400">pinMode</span>(ENB, OUTPUT);</div>
            <div>{'}'}</div>
            
            <div className="mt-4">
              <span className="text-blue-400">void</span> <span className="text-green-400">loop</span>() {'{'}</div>
            <div className="ml-4"><span className="text-blue-400">long</span> distance = <span className="text-green-400">getDistance</span>();</div>
            <div className="ml-4"></div>
            <div className="ml-4"><span className="text-blue-400">if</span> (distance &lt; 15) {'{'}</div>
            <div className="ml-8"><span className="text-green-400">turnLeft</span>();</div>
            <div className="ml-4">{'}'} <span className="text-blue-400">else</span> {'{'}</div>
            <div className="ml-8"><span className="text-green-400">moveForward</span>();</div>
            <div className="ml-4">{'}'}</div>
            <div className="ml-4"></div>
            <div className="ml-4"><span className="text-green-400">delay</span>(100);</div>
            <div>{'}'}</div>
          </div>
          
          <div className="mt-4 p-3 bg-slate-800 rounded border border-slate-600">
            <div className="text-slate-300 mb-2">🔧 Key Functions to Implement:</div>
            <div className="text-slate-400 text-xs space-y-1">
              <div>• getDistance() - Read ultrasonic sensor and calculate distance</div>
              <div>• moveForward() - Set both motors to move forward</div>
              <div>• turnLeft() - Stop left motor, move right motor forward</div>
              <div>• turnRight() - Stop right motor, move left motor forward</div>
            </div>
          </div>
        </div>
      </div>

      {/* Testing & Troubleshooting */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-xl border border-amber-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Testing & Troubleshooting</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border border-amber-200">
            <h3 className="font-semibold text-slate-900 mb-3 text-amber-700">Testing Checklist</h3>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Motors respond to Arduino commands
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Ultrasonic sensor provides accurate readings
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Robot stops when obstacle detected
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Turning mechanism works correctly
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-amber-200">
            <h3 className="font-semibold text-slate-900 mb-3 text-amber-700">Common Issues</h3>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                Motors spinning in wrong direction
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                Sensor giving erratic readings
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                Robot not responding to obstacles
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                Battery draining too quickly
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
          <h4 className="font-semibold text-slate-900 mb-2">Troubleshooting Tips:</h4>
          <ul className="text-slate-700 text-sm space-y-1">
            <li>• Check all wiring connections and ensure proper voltage levels</li>
            <li>• Use Serial.print() to debug sensor readings and motor commands</li>
            <li>• Test components individually before integrating</li>
            <li>• Ensure adequate power supply for motors (they need more current than Arduino)</li>
          </ul>
        </div>
      </div>

      {/* Extensions & Advanced Features */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mt-8">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Extensions & Advanced Features</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-slate-900 mb-3 text-emerald-700">Hardware Upgrades</h3>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li>• Add multiple sensors for better obstacle detection</li>
              <li>• Implement line following capabilities</li>
              <li>• Add LED indicators for status display</li>
              <li>• Include a buzzer for audio feedback</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-900 mb-3 text-emerald-700">Software Enhancements</h3>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li>• Pathfinding algorithms for complex navigation</li>
              <li>• Bluetooth control for remote operation</li>
              <li>• Data logging and analysis</li>
              <li>• Machine learning for adaptive behavior</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
          <h4 className="font-semibold text-slate-900 mb-2">Learning Outcomes:</h4>
          <p className="text-slate-700 text-sm">
            This project teaches fundamental robotics concepts including sensor integration, motor control, 
            autonomous decision-making, and real-world problem-solving. Students gain hands-on experience 
            with hardware-software integration and iterative design processes.
          </p>
        </div>
      </div>
    </div>
  );
}
