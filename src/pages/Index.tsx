import { useState } from "react";
import DashboardNav from "@/components/DashboardNav";
import KPICards from "@/components/KPICards";
import OperationsMap from "@/components/OperationsMap";
import FleetStatus from "@/components/FleetStatus";
import DefectGrid from "@/components/DefectGrid";
import AnalyticsCharts from "@/components/AnalyticsCharts";
import AlertCenter from "@/components/AlertCenter";

const Index = () => {
  const [activeView, setActiveView] = useState("overview");

  return (
    <div className="min-h-screen bg-background dark">
      <div className="gradient-mesh fixed inset-0 -z-10" />
      
      <DashboardNav activeView={activeView} setActiveView={setActiveView} />
      
      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Critical Alerts Banner */}
        <AlertCenter />
        
        {/* KPI Overview */}
        <KPICards />
        
        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Operations Map - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <OperationsMap />
          </div>
          
          {/* Fleet Status - Takes 1 column */}
          <div>
            <FleetStatus />
          </div>
        </div>
        
        {/* Defect Detection Section */}
        <DefectGrid />
        
        {/* Analytics Dashboard */}
        <AnalyticsCharts />
      </main>
    </div>
  );
};

export default Index;
