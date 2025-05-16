import React, { createContext, useContext, useState, ReactNode } from 'react';
import { FormData, Step } from '../types';
import { steps } from '../data/steps';

interface OnboardingContextType {
  currentStep: number;
  formData: FormData;
  steps: Step[];
  updateFormData: (data: Partial<FormData>) => void;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
  goToStep: (step: number) => void;
  calculateScore: () => number;
  isPassing: () => boolean;
}

// Initial form data
const initialFormData: FormData = {
  fullName: '',
  email: '',
  phoneNumber: '',
  dateOfBirth: '',
  gender: 'prefer-not-to-say',
  stateOfOrigin: '',
  currentResidence: '',
  educationLevel: 'secondary',
  areaOfStudy: 'other',
  preferredTrack: 'bpo',
  englishReading: 3,
  englishWriting: 3,
  englishSpeaking: 3,
  
  basicITSkills: [],
  typingSpeed: 0,
  zoomConfidence: 3,
  slackConfidence: 3,
  emailConfidence: 3,
  docsConfidence: 3,
  problemSolvingAnswers: [],
  
  needsLoan: false,
  employmentStatus: 'unemployed',
  willingToRelocate: 'no',
  hasLaptop: false,
  availability: 'full-time',
  
  motivationEssay: '',
  futureGoals: '',
  willingToCommit: false
};

// Create the context
const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

// Provider component
export const OnboardingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const updateFormData = (data: Partial<FormData>) => {
    setFormData(prevData => ({ ...prevData, ...data }));
  };

  const goToNextStep = () => {
    if (currentStep < steps.length) {
      // Check if current step is valid
      const step = steps[currentStep - 1];
      
      if (step.isValid(formData)) {
        setCurrentStep(prevStep => prevStep + 1);
        window.scrollTo(0, 0);
      }
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prevStep => prevStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const goToStep = (step: number) => {
    if (step >= 1 && step <= steps.length) {
      setCurrentStep(step);
      window.scrollTo(0, 0);
    }
  };

  // Calculate the assessment score
  const calculateScore = (): number => {
    let totalPoints = 0;
    let earnedPoints = 0;
    
    // Education Level (Higher education = more points)
    const educationPoints = {
      'primary': 5,
      'secondary': 10,
      'ond': 15,
      'hnd': 20,
      'bsc': 25,
      'msc-plus': 30
    };
    earnedPoints += educationPoints[formData.educationLevel];
    totalPoints += 30;
    
    // English Proficiency (15 points total)
    earnedPoints += formData.englishReading + formData.englishWriting + formData.englishSpeaking;
    totalPoints += 15;
    
    // IT Skills (15 points)
    earnedPoints += (formData.basicITSkills.length / 3) * 15;
    totalPoints += 15;
    
    // Typing Speed (10 points)
    earnedPoints += formData.typingSpeed >= 40 ? 10 : 
                    formData.typingSpeed >= 30 ? 7 : 
                    formData.typingSpeed >= 25 ? 5 : 0;
    totalPoints += 10;
    
    // Digital Confidence (20 points)
    const digitalConfidence = formData.zoomConfidence + formData.slackConfidence + 
                             formData.emailConfidence + formData.docsConfidence;
    earnedPoints += (digitalConfidence / 20) * 20;
    totalPoints += 20;
    
    // Problem Solving (15 points)
    earnedPoints += (formData.problemSolvingAnswers.length / 3) * 15;
    totalPoints += 15;
    
    // Track Specific (Cybersecurity if applicable) (10 points)
    if (formData.preferredTrack === 'cybersecurity-ai' && formData.cybersecurityAnswers) {
      earnedPoints += (formData.cybersecurityAnswers.length / 3) * 10;
      totalPoints += 10;
    } else if (formData.preferredTrack === 'bpo') {
      // For BPO, typing speed is weighted more heavily
      const additionalTypingPoints = formData.typingSpeed >= 40 ? 10 : 
                                    formData.typingSpeed >= 30 ? 7 : 
                                    formData.typingSpeed >= 25 ? 5 : 0;
      earnedPoints += additionalTypingPoints;
      totalPoints += 10;
    }
    
    // Commitment Factors (10 points)
    if (formData.willingToRelocate !== 'no') earnedPoints += 5;
    if (formData.hasLaptop) earnedPoints += 5;
    totalPoints += 10;
    
    // Motivation and Readiness (10 points)
    if (formData.motivationEssay.length > 100) earnedPoints += 5;
    if (formData.willingToCommit) earnedPoints += 5;
    totalPoints += 10;
    
    // Calculate percentage
    return Math.round((earnedPoints / totalPoints) * 100);
  };

  // Check if passing (70% or higher)
  const isPassing = (): boolean => {
    return calculateScore() >= 70;
  };

  const value = {
    currentStep,
    formData,
    steps,
    updateFormData,
    goToNextStep,
    goToPreviousStep,
    goToStep,
    calculateScore,
    isPassing
  };

  return (
    <OnboardingContext.Provider value={value}>
      {children}
    </OnboardingContext.Provider>
  );
};

// Hook for using the onboarding context
export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (context === undefined) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
};