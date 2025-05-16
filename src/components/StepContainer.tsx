import React from 'react';
import { useOnboarding } from '../context/OnboardingContext';
import Card, { CardContent, CardFooter } from './ui/Card';
import StepNav from './StepNav';
import { sections } from '../data/sections';

const StepContainer: React.FC = () => {
  const { currentStep, steps } = useOnboarding();
  
  // Get current step info
  const step = steps[currentStep - 1];
  const StepComponent = step?.component;
  
  // Get current section
  const section = sections[step.section - 1];
  
  return (
    <div className="max-w-2xl mx-auto px-4 py-6 md:py-10">
      <Card className="bg-white/90 backdrop-blur-md">
        <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <h2 className="text-xl font-semibold">{section.title}</h2>
          <p className="mt-1 text-blue-100">{section.description}</p>
        </div>
        <CardContent>
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-900">
              {step.title}
            </h3>
          </div>
          
          {StepComponent && <StepComponent />}
        </CardContent>
        <CardFooter>
          <StepNav />
        </CardFooter>
      </Card>
    </div>
  );
};

export default StepContainer;