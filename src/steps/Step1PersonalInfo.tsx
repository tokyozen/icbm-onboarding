import React, { useState } from 'react';
import { useOnboarding } from '../context/OnboardingContext';
import FormField from '../components/ui/FormField';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import { nigerianStates } from '../data/states';

const Step1PersonalInfo: React.FC = () => {
  const { formData, updateFormData } = useOnboarding();
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  const validatePhone = (phone: string) => {
    const phoneRegex = /^[0-9+\s()-]{10,15}$/;
    return phoneRegex.test(phone);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Validate and set errors
    if (name === 'email' && value && !validateEmail(value)) {
      setErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }));
    } else if (name === 'phoneNumber' && value && !validatePhone(value)) {
      setErrors(prev => ({ ...prev, phoneNumber: 'Please enter a valid phone number' }));
    } else {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    
    updateFormData({ [name]: value });
  };
  
  const stateOptions = nigerianStates.map(state => ({
    value: state,
    label: state
  }));
  
  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
    { value: 'prefer-not-to-say', label: 'Prefer not to say' }
  ];
  
  return (
    <div className="space-y-4">
      <FormField
        id="fullName"
        label="Full Name"
        required
        error={errors.fullName}
      >
        <Input
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
        />
      </FormField>
      
      <FormField
        id="email"
        label="Email Address"
        required
        error={errors.email}
      >
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="youremail@example.com"
          required
        />
      </FormField>
      
      <FormField
        id="phoneNumber"
        label="Phone Number"
        required
        error={errors.phoneNumber}
      >
        <Input
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="e.g., +234 800 123 4567"
          required
        />
      </FormField>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          id="dateOfBirth"
          label="Date of Birth"
          required
        >
          <Input
            id="dateOfBirth"
            name="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </FormField>
        
        <FormField
          id="gender"
          label="Gender"
        >
          <Select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            options={genderOptions}
          />
        </FormField>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          id="stateOfOrigin"
          label="State of Origin"
          required
        >
          <Select
            id="stateOfOrigin"
            name="stateOfOrigin"
            value={formData.stateOfOrigin}
            onChange={handleChange}
            options={stateOptions}
            required
          />
        </FormField>
        
        <FormField
          id="currentResidence"
          label="Current Residence"
          required
        >
          <Select
            id="currentResidence"
            name="currentResidence"
            value={formData.currentResidence}
            onChange={handleChange}
            options={stateOptions}
            required
          />
        </FormField>
      </div>
    </div>
  );
};

export default Step1PersonalInfo;