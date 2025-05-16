import React from 'react';
import { useOnboarding } from '../context/OnboardingContext';
import FormField from '../components/ui/FormField';
import RadioGroup from '../components/ui/RadioGroup';

const Step10Availability: React.FC = () => {
  const { formData, updateFormData } = useOnboarding();
  
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };
  
  const availabilityOptions = [
    { value: 'morning', label: 'Morning (8am - 12pm)' },
    { value: 'afternoon', label: 'Afternoon (12pm - 5pm)' },
    { value: 'evening', label: 'Evening (5pm - 9pm)' },
    { value: 'full-time', label: 'Full-time (Can commit to 8-hour training days)' }
  ];
  
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 p-4 rounded-md mb-4">
        <p className="text-sm text-gray-700">
          Please indicate your availability for training sessions. This helps us schedule 
          appropriate training cohorts.
        </p>
      </div>
      
      <FormField
        id="availability"
        label="When Are You Available for Training?"
      >
        <RadioGroup
          name="availability"
          options={availabilityOptions}
          value={formData.availability}
          onChange={handleRadioChange}
        />
      </FormField>
      
      <div className="mt-6 border-t pt-4">
        <h4 className="font-medium text-gray-900 mb-2">Training Format Information</h4>
        <p className="text-sm text-gray-700">
          Training typically follows this format:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-700">
          <li>Intensive 4-8 week program (depending on track)</li>
          <li>Combination of live virtual sessions and self-paced learning</li>
          <li>Project-based assessments and practical exercises</li>
          <li>Mentor-supported learning with industry professionals</li>
          <li>Job readiness preparation and interview practice</li>
        </ul>
        
        {formData.availability !== 'full-time' && (
          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md text-sm text-yellow-800">
            <p>
              <strong>Note:</strong> While part-time options are available, full-time participants 
              typically progress faster and may have priority for job placement opportunities.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Step10Availability;