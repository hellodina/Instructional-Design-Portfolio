import { Home, Code, Gamepad2, Palette, Eye, Bot } from "lucide-react";

interface SidebarProps {
  activePage: string;
  onPageChange: (page: string) => void;
}

const navigationItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "webdev", label: "Web Development", icon: Code },
  { id: "gamedesign", label: "Game Design", icon: Gamepad2 },
  { id: "creativecoding", label: "Creative Coding", icon: Palette },
  { id: "ar", label: "Augmented Reality", icon: Eye },
  { id: "robotics", label: "Robotics", icon: Bot },
];

export default function Sidebar({ activePage, onPageChange }: SidebarProps) {
  return (
    <div className="w-64 bg-slate-50 h-screen fixed left-0 top-0 border-r border-slate-200 p-6">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-slate-900 mb-2">
          Dina Salama
        </h1>
        <p className="text-sm text-slate-600 font-medium">
          Curriculum Portfolio
        </p>
      </div>
      
      <nav className="space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors ${
                isActive
                  ? "bg-blue-50 text-blue-700 border border-blue-200"
                  : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
