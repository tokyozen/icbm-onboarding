import React from 'react';

interface RatingProps {
  name: string;
  value: number;
  onChange: (value: number) => void;
  max?: number;
  labels?: string[];
}

const Rating: React.FC<RatingProps> = ({
  name,
  value,
  onChange,
  max = 5,
  labels = ['Poor', 'Fair', 'Average', 'Good', 'Excellent']
}) => {
  const handleChange = (newValue: number) => {
    onChange(newValue);
  };
  
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex space-x-2">
        {Array.from({ length: max }).map((_, index) => {
          const ratingValue = index + 1;
          return (
            <button
              key={ratingValue}
              type="button"
              className={`h-8 w-8 rounded-full flex items-center justify-center transition-colors ${
                ratingValue <= value 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => handleChange(ratingValue)}
              aria-label={`Rate ${ratingValue} out of ${max}`}
            >
              {ratingValue}
            </button>
          );
        })}
      </div>
      {labels && (
        <div className="flex justify-between text-xs text-gray-500 px-1">
          {labels.map((label, index) => (
            <span 
              key={index}
              className={`${index === max - 1 ? 'text-right' : ''} ${index === 0 ? 'text-left' : ''}`}
              style={{ width: `${100 / labels.length}%` }}
            >
              {label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Rating;