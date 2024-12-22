import React from "react";
import dynamic from 'next/dynamic';

const ChartWrapper = dynamic(() => import('./ChartWrapper'), { ssr: false });

const MedicationEffectiveness: React.FC = () => {
  return (
    <div className="h-[400px] w-full bg-white rounded-lg p-4 shadow-md">
      <ChartWrapper>
        <MedicationChart />
      </ChartWrapper>
    </div>
  );
};

const MedicationChart = dynamic(() => import('./MedicationChart'), { ssr: false });

export default MedicationEffectiveness;