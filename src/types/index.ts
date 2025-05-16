// Form and assessment types
export type Gender = 'male' | 'female' | 'other' | 'prefer-not-to-say';
export type EducationLevel = 'primary' | 'secondary' | 'ond' | 'hnd' | 'bsc' | 'msc-plus';
export type StudyArea = 'arts' | 'science' | 'engineering' | 'social-science' | 'business' | 'other';
export type Track = 'bpo' | 'cybersecurity-ai';
export type EmploymentStatus = 'employed' | 'unemployed' | 'underemployed';
export type Availability = 'morning' | 'afternoon' | 'evening' | 'full-time';

export interface FormData {
  // Section 1: Personal & Educational Background
  fullName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  gender: Gender;
  stateOfOrigin: string;
  currentResidence: string;
  educationLevel: EducationLevel;
  areaOfStudy: StudyArea;
  preferredTrack: Track;
  englishReading: number;
  englishWriting: number;
  englishSpeaking: number;
  
  // Section 2: Technical & Digital Literacy Assessment
  basicITSkills: string[];
  typingSpeed: number;
  zoomConfidence: number;
  slackConfidence: number;
  emailConfidence: number;
  docsConfidence: number;
  problemSolvingAnswers: string[];
  cybersecurityAnswers?: string[];
  
  // Section 3: Financial & Commitment Profile
  needsLoan: boolean;
  employmentStatus: EmploymentStatus;
  willingToRelocate: 'yes' | 'no' | 'conditional';
  hasLaptop: boolean;
  availability: Availability;
  
  // Section 4: Motivation & Readiness
  motivationEssay: string;
  futureGoals: string;
  willingToCommit: boolean;
}

export interface Step {
  id: number;
  title: string;
  section: number;
  component: React.ComponentType<StepProps>;
  isRequired: boolean;
  isValid: (formData: FormData) => boolean;
}

export interface StepProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export interface Section {
  id: number;
  title: string;
  description: string;
}

export interface Assessment {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  score: number;
}