import { Assessment } from '../types';

// Basic IT Skills Assessment
export const basicITAssessment: Assessment[] = [
  {
    id: 'it1',
    question: 'Which of these is a web browser?',
    options: ['Microsoft Word', 'Google Chrome', 'Adobe Photoshop', 'Notepad'],
    correctAnswer: 'Google Chrome',
    score: 5
  },
  {
    id: 'it2',
    question: 'What does URL stand for?',
    options: [
      'Universal Resource Locator',
      'Uniform Resource Locator',
      'United Resource Link',
      'Universal Reference Link'
    ],
    correctAnswer: 'Uniform Resource Locator',
    score: 5
  },
  {
    id: 'it3',
    question: 'Which of these is used to store files long-term on a computer?',
    options: ['RAM', 'CPU', 'Hard Drive', 'Motherboard'],
    correctAnswer: 'Hard Drive',
    score: 5
  }
];

// Problem Solving Assessment
export const problemSolvingAssessment: Assessment[] = [
  {
    id: 'ps1',
    question: 'What comes next in the sequence: 2, 4, 8, 16, ...',
    options: ['20', '24', '32', '64'],
    correctAnswer: '32',
    score: 8
  },
  {
    id: 'ps2',
    question: 'If a shirt costs $20 and is on sale for 25% off, what is the sale price?',
    options: ['$5', '$10', '$15', '$25'],
    correctAnswer: '$15',
    score: 7
  },
  {
    id: 'ps3',
    question: 'Which of these doesn\'t belong in the group? Apple, Orange, Carrot, Banana',
    options: ['Apple', 'Orange', 'Carrot', 'Banana'],
    correctAnswer: 'Carrot',
    score: 5
  }
];

// Cybersecurity Assessment
export const cybersecurityAssessment: Assessment[] = [
  {
    id: 'cs1',
    question: 'What is phishing?',
    options: [
      'A fishing technique used by hackers',
      'An attempt to acquire sensitive information by pretending to be a trustworthy entity',
      'A type of computer virus',
      'A method to speed up your internet connection'
    ],
    correctAnswer: 'An attempt to acquire sensitive information by pretending to be a trustworthy entity',
    score: 8
  },
  {
    id: 'cs2',
    question: 'What is 2FA?',
    options: [
      'A type of encryption',
      'Two-Factor Authentication',
      'A type of firewall',
      'File Format Authorization'
    ],
    correctAnswer: 'Two-Factor Authentication',
    score: 8
  },
  {
    id: 'cs3',
    question: 'Which of these is a good password practice?',
    options: [
      'Using the same password for all accounts',
      'Writing down passwords on a sticky note',
      'Using a combination of letters, numbers, and special characters',
      'Sharing passwords with trusted colleagues'
    ],
    correctAnswer: 'Using a combination of letters, numbers, and special characters',
    score: 9
  }
];