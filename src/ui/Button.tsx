import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', className }) => {
  const buttonClass = variant === 'outline' ? 
    `border-2 border-gray-300 text-gray-700 hover:bg-gray-100 ${className}` :
    `bg-blue-500 text-white hover:bg-blue-600 ${className}`;

  return (
    <button onClick={onClick} className={`py-2 px-4 rounded-md ${buttonClass}`}>
      {children}
    </button>
  );
};

export default Button;
