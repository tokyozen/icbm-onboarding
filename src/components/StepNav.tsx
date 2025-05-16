import React from 'react';
import { useOnboarding } from '../context/OnboardingContext';
import Button from './ui/Button';
import Progress from './ui/Progress';
import { sections } from '../data/sections';

interface StepNavProps {
  showProgress?: boolean;
}

const StepNav: React.FC<StepNavProps> = ({ showProgress = true }) => {
  const { currentStep, steps, goToPreviousStep, goToNextStep } = useOnboarding();
  
  const currentSection = steps[currentStep - 1]?.section || 1;
  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === steps.length;
  
  // Get steps in current section
  const stepsInCurrentSection = steps.filter(step => step.section === currentSection);
  const firstStepInSection = steps.findIndex(step => step.section === currentSection) + 1;
  const stepInSection = currentStep - firstStepInSection + 1;
  
  // Calculate progress
  const totalProgress = (currentStep / steps.length) * 100;
  
  return (
    <div className="w-full">
      {showProgress && (
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <div className="text-sm font-medium text-gray-700">
              Section {currentSection}: {sections[currentSection - 1]?.title}
            </div>
            <div className="text-sm font-medium text-gray-700">
              Step {stepInSection}/{stepsInCurrentSection.length}
            </div>
          </div>
          <Progress 
            value={currentStep} 
            max={steps.length} 
            showPercentage 
          />
        </div>
      )}
      
      <div className="flex justify-between mt-8">
        <Button
          variant="outline"
          onClick={goToPreviousStep}
          disabled={isFirstStep}
        >
          Previous
        </Button>
        
        <Button
          onClick={goToNextStep}
          disabled={isLastStep}
        >
          {isLastStep ? 'Finish' : 'Next'}
        </Button>
      </div>
    </div>
  );
};

export default StepNav;