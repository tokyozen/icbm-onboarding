import React, { SelectHTMLAttributes } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string }[];
  error?: boolean;
  fullWidth?: boolean;
}

const Select: React.FC<SelectProps> = ({
  options,
  error = false,
  fullWidth = true,
  className = '',
  ...props
}) => {
  const baseStyles = 'border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-0 px-3 py-2 bg-white';
  const errorStyles = error 
    ? 'border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500'
    : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500';
  const widthStyles = fullWidth ? 'w-full' : '';
  
  const selectStyles = `
    ${baseStyles}
    ${errorStyles}
    ${widthStyles}
    ${className}
  `;
  
  return (
    <select className={selectStyles} {...props}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;