import React from 'react';
import { OnboardingProvider } from './context/OnboardingContext';
import Header from './components/Header';
import Footer from './components/Footer';
import StepContainer from './components/StepContainer';

function App() {
  return (
    <OnboardingProvider>
      <div 
        className="min-h-screen flex flex-col relative"
        style={{
          backgroundImage: 'url(https://www.icbm.training/tmp/cache/uploads/template_files/BZOwZ6cVX4W9EF2aMVwYFOXgEGzyCv3T02GUkL8y-1600x680.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark overlay with blur */}
        <div 
          className="absolute inset-0 backdrop-blur-sm bg-black/40"
          style={{ backdropFilter: 'blur(8px)' }}
        />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow py-6">
            <StepContainer />
          </main>
          <Footer />
        </div>
      </div>
    </OnboardingProvider>
  );
}

export default App;