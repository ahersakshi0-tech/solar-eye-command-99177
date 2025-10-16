import { TrendingUp, TrendingDown, Activity, Zap, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const KPICards = () => {
  const kpis = [
    {
      title: "Flights Today",
      value: "24",
      change: "+12%",
      trend: "up",
      icon: Activity,
      color: "primary",
    },
    {
      title: "Images Processed",
      value: "8,547",
      change: "+18%",
      trend: "up",
      icon: Zap,
      color: "secondary",
    },
    {
      title: "Defects Detected",
      value: "47",
      change: "-5%",
      trend: "down",
      icon: AlertTriangle,
      color: "warning",
    },
    {
      title: "System Uptime",
      value: "99.8%",
      change: "+0.2%",
      trend: "up",
      icon: CheckCircle2,
      color: "success",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {kpis.map((kpi) => {
        const Icon = kpi.icon;
        const TrendIcon = kpi.trend === "up" ? TrendingUp : TrendingDown;
        
        return (
          <Card key={kpi.title} className="glass-panel p-6 hover:scale-105 transition-transform duration-300">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-2">{kpi.title}</p>
                <h3 className="text-3xl font-bold mb-1">{kpi.value}</h3>
                <div className={`flex items-center gap-1 text-sm ${
                  kpi.trend === "up" ? "text-success" : "text-destructive"
                }`}>
                  <TrendIcon className="w-4 h-4" />
                  <span>{kpi.change}</span>
                </div>
              </div>
              <div className={`w-12 h-12 rounded-lg bg-${kpi.color}/10 flex items-center justify-center`}>
                <Icon className={`w-6 h-6 text-${kpi.color}`} />
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default KPICards;
