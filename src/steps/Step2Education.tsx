import React from 'react';
import { useOnboarding } from '../context/OnboardingContext';
import FormField from '../components/ui/FormField';
import Select from '../components/ui/Select';

const Step2Education: React.FC = () => {
  const { formData, updateFormData } = useOnboarding();
  
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };
  
  const educationOptions = [
    { value: 'primary', label: 'Primary School' },
    { value: 'secondary', label: 'Secondary School' },
    { value: 'ond', label: 'OND (Ordinary National Diploma)' },
    { value: 'hnd', label: 'HND (Higher National Diploma)' },
    { value: 'bsc', label: 'BSc (Bachelor\'s Degree)' },
    { value: 'msc-plus', label: 'MSc or Higher (Master\'s Degree or PhD)' }
  ];
  
  const studyAreaOptions = [
    { value: 'arts', label: 'Arts & Humanities' },
    { value: 'science', label: 'Science' },
    { value: 'engineering', label: 'Engineering & Technology' },
    { value: 'social-science', label: 'Social Sciences' },
    { value: 'business', label: 'Business & Economics' },
    { value: 'other', label: 'Other' }
  ];
  
  const trackOptions = [
    { value: 'bpo', label: 'Business Process Outsourcing (BPO)' },
    { value: 'cybersecurity-ai', label: 'Cybersecurity/AI' }
  ];
  
  return (
    <div className="space-y-4">
      <FormField
        id="educationLevel"
        label="Highest Level of Education"
        required
      >
        <Select
          id="educationLevel"
          name="educationLevel"
          value={formData.educationLevel}
          onChange={handleChange}
          options={educationOptions}
        />
      </FormField>
      
      <FormField
        id="areaOfStudy"
        label="Area of Study"
        required
      >
        <Select
          id="areaOfStudy"
          name="areaOfStudy"
          value={formData.areaOfStudy}
          onChange={handleChange}
          options={studyAreaOptions}
        />
      </FormField>
      
      <FormField
        id="preferredTrack"
        label="Preferred Training Track"
        required
        hint="Choose the training track you're most interested in pursuing"
      >
        <Select
          id="preferredTrack"
          name="preferredTrack"
          value={formData.preferredTrack}
          onChange={handleChange}
          options={trackOptions}
        />
      </FormField>
      
      <div className="bg-blue-50 p-4 rounded-md mt-6">
        <h4 className="text-blue-800 font-medium mb-2">Track Information</h4>
        {formData.preferredTrack === 'bpo' ? (
          <p className="text-sm text-gray-700">
            The <strong>Business Process Outsourcing (BPO)</strong> track focuses on customer service, 
            data entry, transaction processing, and other business support skills. This track is ideal 
            if you enjoy working with people and have good communication skills.
          </p>
        ) : (
          <p className="text-sm text-gray-700">
            The <strong>Cybersecurity/AI</strong> track focuses on network security, ethical hacking, 
            artificial intelligence, and machine learning fundamentals. This track is ideal if you have 
            a technical background or strong interest in technology and security.
          </p>
        )}
      </div>
    </div>
  );
};

export default Step2Education;