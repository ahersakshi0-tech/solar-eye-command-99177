import { AlertCircle, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const AlertCenter = () => {
  const alerts = [
    { id: 1, type: "critical", message: "Critical hotspot detected in Sector A - PNL-A-127", time: "2 min ago" },
    { id: 2, type: "high", message: "Drone M350-RGB-002 battery below 50%", time: "5 min ago" },
  ];

  if (alerts.length === 0) return null;

  return (
    <Card className="glass-panel p-4 border-destructive/50">
      <div className="flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
        <div className="flex-1 space-y-2">
          {alerts.map((alert) => (
            <div key={alert.id} className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="destructive" className="capitalize">
                    {alert.type}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{alert.time}</span>
                </div>
                <p className="text-sm">{alert.message}</p>
              </div>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <X className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default AlertCenter;
