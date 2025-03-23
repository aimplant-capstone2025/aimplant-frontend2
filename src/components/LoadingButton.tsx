import React, { ReactNode } from 'react';
import { Loader } from 'lucide-react';

interface LoadingButtonProps {
  isLoading: boolean;
  loadingText?: string;
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
}

const LoadingButton: React.FC<LoadingButtonProps> = ({
  isLoading,
  loadingText = 'Processing...',
  children,
  type = 'submit',
  onClick,
  className = '',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isLoading}
      className={`w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md flex items-center justify-center transition ${className}`}
    >
      {isLoading ? (
        <>
          <Loader className="w-5 h-5 mr-2 animate-spin" />
          {loadingText}
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default LoadingButton;