import { Card } from "@/components/ui/card";
import { MapPin, Radio, Antenna, Navigation } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const OperationsMap = () => {
  const drones = [
    { id: "M350-TH-001", status: "flying", position: { x: 60, y: 40 }, mission: "Thermal Daily Scan" },
    { id: "M350-RGB-002", status: "returning", position: { x: 30, y: 70 }, mission: "RGB Detail Inspect" },
  ];

  return (
    <Card className="glass-panel p-6 h-[500px]">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Radio className="w-5 h-5 text-primary" />
            Live Operations Center
          </h2>
          <p className="text-sm text-muted-foreground">Real-time drone tracking & solar farm status</p>
        </div>
        <Badge variant="outline" className="gap-2">
          <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
          2 Active Missions
        </Badge>
      </div>

      {/* Map Container */}
      <div className="relative h-full bg-muted/20 rounded-lg border border-border overflow-hidden">
        {/* Grid Overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          opacity: 0.3
        }} />

        {/* Solar Panel Blocks */}
        <div className="absolute top-[20%] left-[10%] w-32 h-24 bg-success/20 border border-success/40 rounded" />
        <div className="absolute top-[20%] left-[45%] w-32 h-24 bg-success/20 border border-success/40 rounded" />
        <div className="absolute top-[50%] left-[10%] w-32 h-24 bg-warning/20 border border-warning/40 rounded glow-warning" />
        <div className="absolute top-[50%] left-[45%] w-32 h-24 bg-success/20 border border-success/40 rounded" />

        {/* RTK Base Station */}
        <div className="absolute top-[10%] right-[10%] flex flex-col items-center gap-1">
          <Antenna className="w-6 h-6 text-primary animate-pulse-slow" />
          <span className="text-xs bg-background/80 px-2 py-1 rounded">RTK Base</span>
        </div>

        {/* Drones */}
        {drones.map((drone) => (
          <div
            key={drone.id}
            className="absolute transition-all duration-500"
            style={{ left: `${drone.position.x}%`, top: `${drone.position.y}%` }}
          >
            <div className="relative group">
              <div className={`w-4 h-4 rounded-full ${
                drone.status === "flying" ? "bg-primary glow-cyan animate-pulse" : "bg-warning"
              }`} />
              <Navigation className="absolute -inset-2 w-8 h-8 text-primary opacity-75" />
              
              {/* Drone Info Tooltip */}
              <div className="absolute left-6 top-0 glass-panel p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                <p className="font-bold text-sm">{drone.id}</p>
                <p className="text-xs text-muted-foreground">{drone.mission}</p>
                <Badge variant={drone.status === "flying" ? "default" : "secondary"} className="text-xs mt-1">
                  {drone.status}
                </Badge>
              </div>
            </div>
          </div>
        ))}

        {/* Legend */}
        <div className="absolute bottom-4 left-4 glass-panel p-3 rounded-lg space-y-1">
          <div className="flex items-center gap-2 text-xs">
            <div className="w-3 h-3 bg-success/40 border border-success rounded" />
            <span>Healthy Panels</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="w-3 h-3 bg-warning/40 border border-warning rounded" />
            <span>Warning Detected</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="w-3 h-3 bg-primary rounded-full" />
            <span>Active Drone</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default OperationsMap;
