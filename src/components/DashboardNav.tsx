import { Activity, BarChart3, Radio, Shield, Settings, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardNavProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

const DashboardNav = ({ activeView, setActiveView }: DashboardNavProps) => {
  const navItems = [
    { id: "overview", label: "Live Operations", icon: Radio },
    { id: "defects", label: "Defects", icon: Shield },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "fleet", label: "Fleet", icon: Activity },
  ];

  return (
    <header className="glass-panel sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-cyan">
              <Activity className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">SolarWatch AI</h1>
              <p className="text-xs text-muted-foreground">Autonomous Inspection Command Center</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={activeView === item.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveView(item.id)}
                  className="gap-2"
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Button>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-destructive rounded-full animate-pulse" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
            <div className="hidden sm:flex items-center gap-2 ml-2 pl-2 border-l">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xs font-bold text-primary-foreground">
                OP
              </div>
              <div className="hidden lg:block">
                <p className="text-sm font-medium">Operator</p>
                <p className="text-xs text-muted-foreground">Online</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardNav;
