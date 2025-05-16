import React, { useState } from 'react';
import { useOnboarding } from '../context/OnboardingContext';
import Button from '../components/ui/Button';
import { problemSolvingAssessment } from '../data/assessments';

const Step7ProblemSolving: React.FC = () => {
  const { formData, updateFormData } = useOnboarding();
  const [answers, setAnswers] = useState<Record<string, string>>(
    formData.problemSolvingAnswers.reduce((acc, id) => {
      const question = problemSolvingAssessment.find(q => q.id === id);
      if (question) {
        acc[id] = question.correctAnswer;
      }
      return acc;
    }, {} as Record<string, string>)
  );
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes in seconds
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  
  // Start timer when component mounts
  React.useEffect(() => {
    if (!isTimerRunning) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsTimerRunning(false);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [isTimerRunning]);
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
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
        const question = problemSolvingAssessment.find(q => q.id === id);
        return question && question.correctAnswer === answer;
      })
      .map(([id]) => id);
    
    updateFormData({ problemSolvingAnswers: correctAnswers });
    setIsTimerRunning(false);
  };
  
  const startTest = () => {
    setIsTimerRunning(true);
  };
  
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 p-4 rounded-md mb-4">
        <p className="text-sm text-gray-700">
          This section tests your problem-solving abilities. You have 3 minutes to complete these questions. 
          Think carefully before answering.
        </p>
      </div>
      
      {!isTimerRunning && timeLeft === 180 ? (
        <div className="flex justify-center">
          <Button onClick={startTest}>
            Start Problem Solving Test
          </Button>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium text-gray-900">Problem Solving Assessment</h3>
            <div className={`text-sm font-medium ${timeLeft < 30 ? 'text-red-600' : 'text-gray-700'}`}>
              Time Remaining: {formatTime(timeLeft)}
            </div>
          </div>
          
          {problemSolvingAssessment.map((question, index) => (
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
                      disabled={!isTimerRunning && timeLeft !== 180}
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
          
          {(isTimerRunning || timeLeft !== 180) && (
            <div className="mt-4 flex justify-end">
              <Button 
                onClick={handleSubmit}
                disabled={!isTimerRunning && timeLeft !== 180}
              >
                {timeLeft > 0 && isTimerRunning ? 'Submit Early' : 'Continue'}
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Step7ProblemSolving;