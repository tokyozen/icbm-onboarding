import React from 'react';
import { useOnboarding } from '../context/OnboardingContext';
import FormField from '../components/ui/FormField';
import Textarea from '../components/ui/Textarea';
import Checkbox from '../components/ui/Checkbox';

const Step12FutureGoals: React.FC = () => {
  const { formData, updateFormData } = useOnboarding();
  
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    updateFormData({ [name]: checked });
  };
  
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 p-4 rounded-md mb-4">
        <p className="text-sm text-gray-700">
          Please share your future career goals and confirm your commitment to working in the field 
          after completing the program.
        </p>
      </div>
      
      <FormField
        id="futureGoals"
        label="Where Do You See Yourself in 2 Years?"
        hint="Describe your career aspirations and how this program fits into your plans"
      >
        <Textarea
          id="futureGoals"
          name="futureGoals"
          value={formData.futureGoals}
          onChange={handleChange}
          rows={4}
          placeholder="In two years, I hope to be..."
        />
      </FormField>
      
      <FormField
        id="willingToCommit"
        label="Commitment to Work"
      >
        <Checkbox
          id="willingToCommit"
          name="willingToCommit"
          label={`I am willing to work in a ${formData.preferredTrack === 'bpo' ? 'BPO' : 'Technology'} job for at least 1 year after completing the program`}
          checked={formData.willingToCommit}
          onChange={handleCheckboxChange}
        />
        
        {!formData.willingToCommit && (
          <div className="mt-2 p-3 bg-yellow-50 border border-yellow-200 rounded-md text-sm text-yellow-800">
            <p>
              <strong>Note:</strong> This program is designed to prepare you for employment in the field.
              A commitment to work in the industry after completion is generally expected, especially 
              if you receive financial assistance.
            </p>
          </div>
        )}
      </FormField>
      
      <div className="mt-6 border-t pt-4">
        <h4 className="font-medium text-gray-900 mb-2">Career Opportunities</h4>
        
        {formData.preferredTrack === 'bpo' ? (
          <div>
            <p className="text-sm text-gray-700 mb-2">
              Graduates of the BPO track typically find opportunities in:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-700">
              <li>Customer Service & Technical Support</li>
              <li>Data Entry & Processing</li>
              <li>Virtual Administration</li>
              <li>Transaction Processing</li>
              <li>Quality Assurance & Monitoring</li>
            </ul>
          </div>
        ) : (
          <div>
            <p className="text-sm text-gray-700 mb-2">
              Graduates of the Cybersecurity/AI track typically find opportunities in:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-700">
              <li>Security Operations & Monitoring</li>
              <li>Security Analysis</li>
              <li>AI Research & Development</li>
              <li>Data Science & Machine Learning</li>
              <li>Technical Support Engineering</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Step12FutureGoals;