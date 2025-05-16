import React from 'react';
import Button from './ui/Button';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm py-4 px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src="https://www.icbm.training/usermedia/edc.png" 
            alt="ICBM Logo" 
            className="h-12 w-auto object-contain"
          />
        </div>
        <div className="hidden md:block">
          <Button
            variant="primary"
            onClick={() => window.open('https://icbm.training', '_blank')}
          >
            Visit ICBM
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;