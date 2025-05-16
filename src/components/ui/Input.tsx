import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  fullWidth?: boolean;
}

const Input: React.FC<InputProps> = ({
  error = false,
  fullWidth = true,
  className = '',
  ...props
}) => {
  const baseStyles = 'border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-0 px-3 py-2';
  const errorStyles = error 
    ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500'
    : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500';
  const widthStyles = fullWidth ? 'w-full' : '';
  
  const inputStyles = `
    ${baseStyles}
    ${errorStyles}
    ${widthStyles}
    ${className}
  `;
  
  return <input className={inputStyles} {...props} />;
};

export default Input;