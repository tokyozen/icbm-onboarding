import React from 'react';

interface ProgressProps {
  value: number;
  max: number;
  label?: string;
  showPercentage?: boolean;
}

const Progress: React.FC<ProgressProps> = ({
  value,
  max,
  label,
  showPercentage = false
}) => {
  const percentage = Math.round((value / max) * 100);
  
  return (
    <div className="w-full">
      {(label || showPercentage) && (
        <div className="flex justify-between mb-1">
          {label && <span className="text-sm font-medium text-gray-700">{label}</span>}
          {showPercentage && <span className="text-sm font-medium text-gray-700">{percentage}%</span>}
        </div>
      )}
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-in-out" 
          style={{ width: `${percentage}%` }}
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        ></div>
      </div>
    </div>
  );
};

export default Progress;