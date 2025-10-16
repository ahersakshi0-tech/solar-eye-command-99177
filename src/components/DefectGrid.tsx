import { Card } from "@/components/ui/card";
import { Shield, Filter, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const DefectGrid = () => {
  const defects = [
    { id: "DEF-001", type: "Severe Hotspot", severity: "critical", temp: "+45°C", confidence: 94, panel: "PNL-A-127" },
    { id: "DEF-002", type: "Micro Crack", severity: "high", temp: "+12°C", confidence: 87, panel: "PNL-B-043" },
    { id: "DEF-003", type: "Soiling", severity: "medium", temp: "+5°C", confidence: 92, panel: "PNL-C-289" },
    { id: "DEF-004", type: "Cell Failure", severity: "critical", temp: "+52°C", confidence: 96, panel: "PNL-A-156" },
    { id: "DEF-005", type: "String Issue", severity: "high", temp: "+18°C", confidence: 89, panel: "PNL-D-071" },
    { id: "DEF-006", type: "Mild Hotspot", severity: "low", temp: "+8°C", confidence: 78, panel: "PNL-B-312" },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical": return "destructive" as const;
      case "high": return "destructive" as const;
      case "medium": return "secondary" as const;
      default: return "outline" as const;
    }
  };

  return (
    <Card className="glass-panel p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            AI Defect Detection
          </h2>
          <p className="text-sm text-muted-foreground">47 total defects detected today</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Filter className="w-4 h-4" />
            Filters
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="w-4 h-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {defects.map((defect) => (
          <Card 
            key={defect.id} 
            className="p-4 border-border/50 hover:border-primary/50 transition-colors cursor-pointer group"
          >
            {/* Thermal Image Placeholder */}
            <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-red-500/40 rounded-lg mb-3 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute top-2 right-2">
                <Badge variant={getSeverityColor(defect.severity)} className="capitalize">
                  {defect.severity}
                </Badge>
              </div>
              <div className="absolute bottom-2 left-2 right-2">
                <p className="text-xs font-mono text-foreground/80">{defect.panel}</p>
              </div>
            </div>

            {/* Defect Info */}
            <div className="space-y-2">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-bold text-sm">{defect.type}</p>
                  <p className="text-xs text-muted-foreground">{defect.id}</p>
                </div>
                <Badge variant="outline" className="text-xs">
                  {defect.confidence}% AI
                </Badge>
              </div>

              <div className="flex items-center justify-between pt-2 border-t text-xs">
                <span className="text-muted-foreground">Temp Delta:</span>
                <span className="font-mono text-warning">{defect.temp}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Card>
  );
};

export default DefectGrid;
