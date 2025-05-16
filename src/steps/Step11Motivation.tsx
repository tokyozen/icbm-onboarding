import React, { useState } from 'react';
import { useOnboarding } from '../context/OnboardingContext';
import FormField from '../components/ui/FormField';
import Textarea from '../components/ui/Textarea';

const Step11Motivation: React.FC = () => {
  const { formData, updateFormData } = useOnboarding();
  const [wordCount, setWordCount] = useState(
    formData.motivationEssay.split(/\s+/).filter(Boolean).length
  );
  
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
    
    // Count words
    const words = value.split(/\s+/).filter(Boolean).length;
    setWordCount(words);
  };
  
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 p-4 rounded-md mb-4">
        <p className="text-sm text-gray-700">
          Please share your motivation for joining this program. This helps us understand 
          your goals and assess your commitment to completing the program.
        </p>
      </div>
      
      <FormField
        id="motivationEssay"
        label="Why Do You Want to Join This Program? (100-150 words)"
        hint={`Current word count: ${wordCount}/150`}
      >
        <Textarea
          id="motivationEssay"
          name="motivationEssay"
          value={formData.motivationEssay}
          onChange={handleChange}
          rows={6}
          placeholder="Share your motivation, career goals, and what you hope to achieve through this program..."
        />
        
        {wordCount < 100 && (
          <p className="mt-1 text-sm text-yellow-600">
            Please write at least 100 words to fully express your motivation.
          </p>
        )}
        
        {wordCount > 150 && (
          <p className="mt-1 text-sm text-yellow-600">
            You've exceeded the 150 word limit. Please be more concise.
          </p>
        )}
      </FormField>
      
      <div className="mt-6 border-t pt-4">
        <h4 className="font-medium text-gray-900 mb-2">Tips for a Strong Response</h4>
        <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-700">
          <li>Be specific about why you're interested in this field</li>
          <li>Mention any relevant experience or skills you already have</li>
          <li>Explain how this program aligns with your career goals</li>
          <li>Share what makes you a good fit for the program</li>
          <li>Discuss your commitment to completing the training and working in the field</li>
        </ul>
      </div>
    </div>
  );
};

export default Step11Motivation;