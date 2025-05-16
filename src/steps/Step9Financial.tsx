import React from 'react';
import { useOnboarding } from '../context/OnboardingContext';
import FormField from '../components/ui/FormField';
import RadioGroup from '../components/ui/RadioGroup';
import Checkbox from '../components/ui/Checkbox';

const Step9Financial: React.FC = () => {
  const { formData, updateFormData } = useOnboarding();
  
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    updateFormData({ [name]: checked });
  };
  
  const employmentOptions = [
    { value: 'employed', label: 'Employed' },
    { value: 'unemployed', label: 'Unemployed' },
    { value: 'underemployed', label: 'Underemployed (working below skill level or part-time)' }
  ];
  
  const relocationOptions = [
    { value: 'yes', label: 'Yes, I can relocate' },
    { value: 'no', label: 'No, I cannot relocate' },
    { value: 'conditional', label: 'Conditional (depends on location, salary, etc.)' }
  ];
  
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 p-4 rounded-md mb-4">
        <p className="text-sm text-gray-700">
          This section helps us understand your financial situation and ability to commit to the program.
          Your answers will help determine your eligibility for financial assistance.
        </p>
      </div>
      
      <FormField
        id="needsLoan"
        label="Do You Need a Loan to Attend Training?"
      >
        <Checkbox
          id="needsLoan"
          name="needsLoan"
          label="Yes, I would need financial assistance"
          checked={formData.needsLoan}
          onChange={handleCheckboxChange}
        />
        
        {formData.needsLoan && (
          <div className="mt-2 p-3 bg-yellow-50 border border-yellow-200 rounded-md text-sm text-yellow-800">
            <p>
              An Income Share Agreement (ISA) may be available. This allows you to attend training 
              with no upfront cost, but you'll repay a percentage of your income after getting a job 
              for a fixed period of time.
            </p>
          </div>
        )}
      </FormField>
      
      <FormField
        id="employmentStatus"
        label="Current Employment Status"
      >
        <RadioGroup
          name="employmentStatus"
          options={employmentOptions}
          value={formData.employmentStatus}
          onChange={handleRadioChange}
        />
      </FormField>
      
      <FormField
        id="willingToRelocate"
        label="Are You Willing to Relocate or Work Remotely?"
      >
        <RadioGroup
          name="willingToRelocate"
          options={relocationOptions}
          value={formData.willingToRelocate}
          onChange={handleRadioChange}
        />
      </FormField>
      
      <FormField
        id="hasLaptop"
        label="Do You Have a Laptop or Access to One?"
      >
        <Checkbox
          id="hasLaptop"
          name="hasLaptop"
          label="Yes, I have a laptop or can access one"
          checked={formData.hasLaptop}
          onChange={handleCheckboxChange}
        />
        
        {!formData.hasLaptop && (
          <div className="mt-2 p-3 bg-yellow-50 border border-yellow-200 rounded-md text-sm text-yellow-800">
            <p>
              A laptop is essential for this program. Limited device support may be available for 
              qualifying candidates. This will be discussed during the interview process.
            </p>
          </div>
        )}
      </FormField>
    </div>
  );
};

export default Step9Financial;