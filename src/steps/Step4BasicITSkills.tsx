import React, { useState } from 'react';
import { useOnboarding } from '../context/OnboardingContext';
import FormField from '../components/ui/FormField';
import Button from '../components/ui/Button';
import { basicITAssessment } from '../data/assessments';

const Step4BasicITSkills: React.FC = () => {
  const { formData, updateFormData } = useOnboarding();
  const [answers, setAnswers] = useState<Record<string, string>>(
    formData.basicITSkills.reduce((acc, id) => {
      const question = basicITAssessment.find(q => q.id === id);
      if (question) {
        acc[id] = question.correctAnswer;
      }
      return acc;
    }, {} as Record<string, string>)
  );
  
  const handleOptionSelect = (questionId: string, selectedOption: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: selectedOption
    }));
  };
  
  const handleSubmit = () => {
    // Calculate correct answers
    const correctAnswers = Object.entries(answers)
      .filter(([id, answer]) => {
        const question = basicITAssessment.find(q => q.id === id);
        return question && question.correctAnswer === answer;
      })
      .map(([id]) => id);
    
    updateFormData({ basicITSkills: correctAnswers });
  };
  
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 p-4 rounded-md mb-4">
        <p className="text-sm text-gray-700">
          This section tests your basic IT knowledge. Answer each question by selecting the option you believe is correct.
        </p>
      </div>
      
      {basicITAssessment.map((question, index) => (
        <div key={question.id} className="p-4 border rounded-md bg-white">
          <p className="font-medium">Question {index + 1}: {question.question}</p>
          <div className="mt-3 space-y-2">
            {question.options.map((option) => (
              <div key={option} className="flex items-center">
                <input
                  type="radio"
                  id={`${question.id}-${option}`}
                  name={question.id}
                  value={option}
                  checked={answers[question.id] === option}
                  onChange={() => handleOptionSelect(question.id, option)}
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <label
                  htmlFor={`${question.id}-${option}`}
                  className="ml-2 block text-sm text-gray-700"
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
      
      <div className="mt-4 flex justify-end">
        <Button onClick={handleSubmit}>
          Save Answers
        </Button>
      </div>
    </div>
  );
};

export default Step4BasicITSkills;