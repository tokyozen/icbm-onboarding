import React from 'react';
import { useOnboarding } from '../context/OnboardingContext';
import FormField from '../components/ui/FormField';
import Rating from '../components/ui/Rating';

const Step3EnglishProficiency: React.FC = () => {
  const { formData, updateFormData } = useOnboarding();
  
  const handleRatingChange = (field: string, value: number) => {
    updateFormData({ [field]: value });
  };
  
  return (
    <div className="space-y-6">
      <div className="bg-yellow-50 p-4 rounded-md mb-4">
        <p className="text-sm text-gray-700">
          Please rate your English proficiency in each area honestly. This helps us determine the appropriate 
          level of support you may need during the program.
        </p>
      </div>
      
      <FormField
        id="englishReading"
        label="English Reading Proficiency"
        hint="How well can you understand written English texts?"
      >
        <Rating
          name="englishReading"
          value={formData.englishReading}
          onChange={(value) => handleRatingChange('englishReading', value)}
        />
      </FormField>
      
      <FormField
        id="englishWriting"
        label="English Writing Proficiency"
        hint="How well can you express yourself in written English?"
      >
        <Rating
          name="englishWriting"
          value={formData.englishWriting}
          onChange={(value) => handleRatingChange('englishWriting', value)}
        />
      </FormField>
      
      <FormField
        id="englishSpeaking"
        label="English Speaking Proficiency"
        hint="How well can you communicate verbally in English?"
      >
        <Rating
          name="englishSpeaking"
          value={formData.englishSpeaking}
          onChange={(value) => handleRatingChange('englishSpeaking', value)}
        />
      </FormField>
      
      <div className="mt-6 border-t pt-4">
        <h4 className="font-medium text-gray-900 mb-2">English Proficiency Levels Guide</h4>
        <div className="space-y-2 text-sm">
          <div className="flex">
            <span className="font-medium w-8 text-center">1</span>
            <span>Basic: Can understand and use very basic phrases</span>
          </div>
          <div className="flex">
            <span className="font-medium w-8 text-center">2</span>
            <span>Elementary: Can communicate in simple terms about familiar topics</span>
          </div>
          <div className="flex">
            <span className="font-medium w-8 text-center">3</span>
            <span>Intermediate: Can interact with reasonable fluency on familiar topics</span>
          </div>
          <div className="flex">
            <span className="font-medium w-8 text-center">4</span>
            <span>Advanced: Can express ideas fluently and effectively for most purposes</span>
          </div>
          <div className="flex">
            <span className="font-medium w-8 text-center">5</span>
            <span>Expert: Near-native level proficiency in all aspects</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3EnglishProficiency;