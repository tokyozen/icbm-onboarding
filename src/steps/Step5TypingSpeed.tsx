import React, { useState } from 'react';
import { useOnboarding } from '../context/OnboardingContext';
import FormField from '../components/ui/FormField';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const Step5TypingSpeed: React.FC = () => {
  const { formData, updateFormData } = useOnboarding();
  const [typingSpeed, setTypingSpeed] = useState(formData.typingSpeed.toString());
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTypingSpeed(value);
    
    // Clear error if input is valid
    if (error && (!isNaN(Number(value)) && Number(value) >= 0)) {
      setError('');
    }
  };
  
  const handleSubmit = () => {
    const speed = Number(typingSpeed);
    if (isNaN(speed) || speed < 0) {
      setError('Please enter a valid typing speed');
      return;
    }
    
    updateFormData({ typingSpeed: speed });
  };
  
  // Determine speed rating
  const getSpeedRating = (speed: number) => {
    if (speed >= 60) return { text: 'Excellent', color: 'text-green-600' };
    if (speed >= 40) return { text: 'Good', color: 'text-blue-600' };
    if (speed >= 30) return { text: 'Average', color: 'text-yellow-600' };
    if (speed >= 25) return { text: 'Acceptable', color: 'text-orange-600' };
    return { text: 'Needs Improvement', color: 'text-red-600' };
  };
  
  const speedRating = getSpeedRating(Number(typingSpeed));
  const isValidSpeed = !isNaN(Number(typingSpeed)) && Number(typingSpeed) >= 0;
  
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 p-4 rounded-md mb-4">
        <p className="text-sm text-gray-700">
          Please complete a typing test using an online tool like 
          <a 
            href="https://www.typingtest.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:text-blue-800 ml-1"
          >
            TypingTest.com
          </a> 
          {' '}or{' '}
          <a 
            href="https://www.keybr.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:text-blue-800"
          >
            KeyBr.com
          </a>. 
          Then enter your typing speed below.
        </p>
      </div>
      
      <FormField
        id="typingSpeed"
        label="Typing Speed (WPM)"
        required
        error={error}
        hint="Enter your typing speed in words per minute (WPM)"
      >
        <div className="flex">
          <Input
            id="typingSpeed"
            name="typingSpeed"
            type="number"
            min="0"
            value={typingSpeed}
            onChange={handleChange}
            className="rounded-r-none"
          />
          <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500">
            WPM
          </span>
        </div>
      </FormField>
      
      {isValidSpeed && (
        <div className="mt-4">
          <p className="text-sm">
            Your typing speed is <span className={`font-medium ${speedRating.color}`}>{speedRating.text}</span>
          </p>
          
          {Number(typingSpeed) < 25 && formData.preferredTrack === 'bpo' && (
            <div className="mt-2 p-3 bg-yellow-50 border border-yellow-200 rounded-md text-sm text-yellow-800">
              <strong>Note:</strong> A minimum typing speed of 25 WPM is recommended for the BPO track. 
              Consider practicing to improve your typing speed.
            </div>
          )}
        </div>
      )}
      
      <div className="mt-4 flex justify-end">
        <Button onClick={handleSubmit}>
          Save Typing Speed
        </Button>
      </div>
    </div>
  );
};

export default Step5TypingSpeed;