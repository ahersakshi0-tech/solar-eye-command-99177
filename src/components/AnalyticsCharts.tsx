import { Card } from "@/components/ui/card";
import { BarChart3, TrendingUp, PieChart } from "lucide-react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart as RechartsPie,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const AnalyticsCharts = () => {
  const defectTrendData = [
    { date: "Oct 10", defects: 12 },
    { date: "Oct 11", defects: 19 },
    { date: "Oct 12", defects: 15 },
    { date: "Oct 13", defects: 25 },
    { date: "Oct 14", defects: 22 },
    { date: "Oct 15", defects: 31 },
    { date: "Oct 16", defects: 28 },
  ];

  const defectTypeData = [
    { type: "Hotspot", count: 18 },
    { type: "Crack", count: 12 },
    { type: "Soiling", count: 8 },
    { type: "Cell Failure", count: 6 },
    { type: "String Issue", count: 3 },
  ];

  const severityData = [
    { name: "Critical", value: 8, color: "hsl(var(--destructive))" },
    { name: "High", value: 15, color: "hsl(var(--warning))" },
    { name: "Medium", value: 17, color: "hsl(var(--secondary))" },
    { name: "Low", value: 7, color: "hsl(var(--success))" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Defect Trend */}
      <Card className="glass-panel p-6 lg:col-span-2">
        <div className="mb-4">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Defect Detection Trend
          </h2>
          <p className="text-sm text-muted-foreground">Last 7 days</p>
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={defectTrendData}>
            <defs>
              <linearGradient id="colorDefects" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="date" 
              stroke="hsl(var(--muted-foreground))"
              style={{ fontSize: '12px' }}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              style={{ fontSize: '12px' }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
              }}
            />
            <Area
              type="monotone"
              dataKey="defects"
              stroke="hsl(var(--primary))"
              fillOpacity={1}
              fill="url(#colorDefects)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Card>

      {/* Severity Distribution */}
      <Card className="glass-panel p-6">
        <div className="mb-4">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <PieChart className="w-5 h-5 text-primary" />
            Severity Distribution
          </h2>
          <p className="text-sm text-muted-foreground">Current defects</p>
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <RechartsPie>
            <Pie
              data={severityData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {severityData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
              }}
            />
          </RechartsPie>
        </ResponsiveContainer>
      </Card>

      {/* Defect Types */}
      <Card className="glass-panel p-6 lg:col-span-3">
        <div className="mb-4">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-primary" />
            Defect Types Breakdown
          </h2>
          <p className="text-sm text-muted-foreground">Count by defect category</p>
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={defectTypeData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="type" 
              stroke="hsl(var(--muted-foreground))"
              style={{ fontSize: '12px' }}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              style={{ fontSize: '12px' }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
              }}
            />
            <Bar 
              dataKey="count" 
              fill="hsl(var(--primary))"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
};

export default AnalyticsCharts;
