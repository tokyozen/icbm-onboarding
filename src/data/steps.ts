import { Step } from '../types';
import Step1PersonalInfo from '../steps/Step1PersonalInfo';
import Step2Education from '../steps/Step2Education';
import Step3EnglishProficiency from '../steps/Step3EnglishProficiency';
import Step4BasicITSkills from '../steps/Step4BasicITSkills';
import Step5TypingSpeed from '../steps/Step5TypingSpeed';
import Step6DigitalSkills from '../steps/Step6DigitalSkills';
import Step7ProblemSolving from '../steps/Step7ProblemSolving';
import Step8Cybersecurity from '../steps/Step8Cybersecurity';
import Step9Financial from '../steps/Step9Financial';
import Step10Availability from '../steps/Step10Availability';
import Step11Motivation from '../steps/Step11Motivation';
import Step12FutureGoals from '../steps/Step12FutureGoals';
import Step13Summary from '../steps/Step13Summary';

export const steps: Step[] = [
  // Section 1: Personal & Educational Background
  {
    id: 1,
    title: 'Personal Information',
    section: 1,
    component: Step1PersonalInfo,
    isRequired: true,
    isValid: (formData) => 
      formData.fullName.trim() !== '' && 
      formData.email.trim() !== '' && 
      formData.phoneNumber.trim() !== ''
  },
  {
    id: 2,
    title: 'Educational Background',
    section: 1,
    component: Step2Education,
    isRequired: true,
    isValid: (formData) => true
  },
  {
    id: 3,
    title: 'English Proficiency',
    section: 1,
    component: Step3EnglishProficiency,
    isRequired: true,
    isValid: (formData) => true
  },
  
  // Section 2: Technical & Digital Literacy Assessment
  {
    id: 4,
    title: 'Basic IT Skills Assessment',
    section: 2,
    component: Step4BasicITSkills,
    isRequired: true,
    isValid: (formData) => true
  },
  {
    id: 5,
    title: 'Typing Speed Check',
    section: 2,
    component: Step5TypingSpeed,
    isRequired: true,
    isValid: (formData) => formData.typingSpeed >= 0
  },
  {
    id: 6,
    title: 'Digital Communication Skills',
    section: 2,
    component: Step6DigitalSkills,
    isRequired: true,
    isValid: (formData) => true
  },
  {
    id: 7,
    title: 'Problem-Solving Assessment',
    section: 2,
    component: Step7ProblemSolving,
    isRequired: true,
    isValid: (formData) => true
  },
  {
    id: 8,
    title: 'Cybersecurity Knowledge',
    section: 2,
    component: Step8Cybersecurity,
    isRequired: false,
    isValid: (formData) => 
      formData.preferredTrack !== 'cybersecurity-ai' || 
      formData.cybersecurityAnswers !== undefined
  },
  
  // Section 3: Financial & Commitment Profile
  {
    id: 9,
    title: 'Financial Information',
    section: 3,
    component: Step9Financial,
    isRequired: true,
    isValid: (formData) => true
  },
  {
    id: 10,
    title: 'Availability',
    section: 3,
    component: Step10Availability,
    isRequired: true,
    isValid: (formData) => true
  },
  
  // Section 4: Motivation & Readiness
  {
    id: 11,
    title: 'Motivation',
    section: 4,
    component: Step11Motivation,
    isRequired: true,
    isValid: (formData) => formData.motivationEssay.trim() !== ''
  },
  {
    id: 12,
    title: 'Future Goals & Commitment',
    section: 4,
    component: Step12FutureGoals,
    isRequired: true,
    isValid: (formData) => formData.futureGoals.trim() !== ''
  },
  
  // Section 5: Evaluation & Scoring
  {
    id: 13,
    title: 'Assessment Summary & Results',
    section: 5,
    component: Step13Summary,
    isRequired: true,
    isValid: (formData) => true
  }
];