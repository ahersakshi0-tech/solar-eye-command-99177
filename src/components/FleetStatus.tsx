import { Card } from "@/components/ui/card";
import { Battery, Activity, Camera, Signal } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const FleetStatus = () => {
  const drones = [
    {
      id: "M350-TH-001",
      name: "Thermal Alpha",
      status: "flying",
      battery: 78,
      images: 1247,
      flightTime: "2h 34m",
      rtk: "fixed",
    },
    {
      id: "M350-RGB-002",
      name: "RGB Beta",
      status: "returning",
      battery: 45,
      images: 843,
      flightTime: "1h 52m",
      rtk: "fixed",
    },
  ];

  return (
    <Card className="glass-panel p-6">
      <div className="mb-4">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Activity className="w-5 h-5 text-primary" />
          Fleet Status
        </h2>
        <p className="text-sm text-muted-foreground">Active drone telemetry</p>
      </div>

      <div className="space-y-4">
        {drones.map((drone) => (
          <Card key={drone.id} className="p-4 border-border/50">
            <div className="space-y-3">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-bold">{drone.name}</p>
                  <p className="text-xs text-muted-foreground">{drone.id}</p>
                </div>
                <Badge 
                  variant={drone.status === "flying" ? "default" : "secondary"}
                  className="capitalize"
                >
                  {drone.status}
                </Badge>
              </div>

              {/* Battery */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1">
                    <Battery className={`w-3 h-3 ${
                      drone.battery > 50 ? "text-success" : "text-warning"
                    }`} />
                    Battery
                  </span>
                  <span className="font-mono">{drone.battery}%</span>
                </div>
                <Progress 
                  value={drone.battery} 
                  className="h-1.5"
                />
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t">
                <div className="space-y-1">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Camera className="w-3 h-3" />
                    Images
                  </div>
                  <p className="font-mono text-sm">{drone.images.toLocaleString()}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Activity className="w-3 h-3" />
                    Flight Time
                  </div>
                  <p className="font-mono text-sm">{drone.flightTime}</p>
                </div>
                <div className="col-span-2 space-y-1">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Signal className="w-3 h-3" />
                    RTK Status
                  </div>
                  <Badge variant="outline" className="text-xs gap-1">
                    <span className="w-1.5 h-1.5 bg-success rounded-full" />
                    {drone.rtk.toUpperCase()}
                  </Badge>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Card>
  );
};

export default FleetStatus;
