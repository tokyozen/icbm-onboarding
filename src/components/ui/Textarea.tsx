import React, { TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  fullWidth?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({
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
  
  const textareaStyles = `
    ${baseStyles}
    ${errorStyles}
    ${widthStyles}
    ${className}
  `;
  
  return <textarea className={textareaStyles} {...props} />;
};

export default Textarea;