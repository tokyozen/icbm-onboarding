import React, { InputHTMLAttributes } from 'react';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  id,
  className = '',
  ...props
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <input
        type="checkbox"
        id={id}
        className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        {...props}
      />
      <label htmlFor={id} className="ml-2 block text-sm text-gray-700">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;