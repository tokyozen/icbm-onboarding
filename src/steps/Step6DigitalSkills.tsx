import React from 'react';
import { useOnboarding } from '../context/OnboardingContext';
import FormField from '../components/ui/FormField';
import Rating from '../components/ui/Rating';

const Step6DigitalSkills: React.FC = () => {
  const { formData, updateFormData } = useOnboarding();
  
  const handleRatingChange = (field: string, value: number) => {
    updateFormData({ [field]: value });
  };
  
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 p-4 rounded-md mb-4">
        <p className="text-sm text-gray-700">
          Please rate your confidence level with using the following digital communication tools.
          This helps us understand your current skill level.
        </p>
      </div>
      
      <FormField
        id="zoomConfidence"
        label="Video Conferencing (Zoom, Google Meet, etc.)"
        hint="How confident are you using video conferencing platforms?"
      >
        <Rating
          name="zoomConfidence"
          value={formData.zoomConfidence}
          onChange={(value) => handleRatingChange('zoomConfidence', value)}
        />
      </FormField>
      
      <FormField
        id="slackConfidence"
        label="Team Communication (Slack, Microsoft Teams, etc.)"
        hint="How confident are you using team messaging platforms?"
      >
        <Rating
          name="slackConfidence"
          value={formData.slackConfidence}
          onChange={(value) => handleRatingChange('slackConfidence', value)}
        />
      </FormField>
      
      <FormField
        id="emailConfidence"
        label="Email Communication"
        hint="How confident are you with professional email communication?"
      >
        <Rating
          name="emailConfidence"
          value={formData.emailConfidence}
          onChange={(value) => handleRatingChange('emailConfidence', value)}
        />
      </FormField>
      
      <FormField
        id="docsConfidence"
        label="Document Collaboration (Google Docs, Microsoft Office, etc.)"
        hint="How confident are you using collaborative document editing tools?"
      >
        <Rating
          name="docsConfidence"
          value={formData.docsConfidence}
          onChange={(value) => handleRatingChange('docsConfidence', value)}
        />
      </FormField>
      
      <div className="mt-6 border-t pt-4">
        <h4 className="font-medium text-gray-900 mb-2">Confidence Levels Guide</h4>
        <div className="space-y-2 text-sm">
          <div className="flex">
            <span className="font-medium w-8 text-center">1</span>
            <span>Beginner: Never used or rarely use it</span>
          </div>
          <div className="flex">
            <span className="font-medium w-8 text-center">2</span>
            <span>Basic: Can use with assistance</span>
          </div>
          <div className="flex">
            <span className="font-medium w-8 text-center">3</span>
            <span>Intermediate: Can use independently for most tasks</span>
          </div>
          <div className="flex">
            <span className="font-medium w-8 text-center">4</span>
            <span>Advanced: Confident with most features</span>
          </div>
          <div className="flex">
            <span className="font-medium w-8 text-center">5</span>
            <span>Expert: Can utilize advanced features and teach others</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step6DigitalSkills;