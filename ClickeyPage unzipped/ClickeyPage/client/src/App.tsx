import { useState } from 'react';
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import LoginPage from '@/components/LoginPage';
import HomePage from '@/components/HomePage';
import ProfilePage from '@/components/ProfilePage';

type AppState = 'login' | 'home' | 'profile';

function App() {
  const [currentPage, setCurrentPage] = useState<AppState>('login');
  const [userMPIN, setUserMPIN] = useState<string>('');

  const handleLogin = (mpin: string) => {
    console.log('User logged in with MPIN:', mpin);
    setUserMPIN(mpin);
    setCurrentPage('home');
  };

  const handleProfileClick = () => {
    console.log('Profile clicked, navigating to profile page');
    setCurrentPage('profile');
  };

  const handleBackFromProfile = () => {
    console.log('Back from profile, returning to home');
    setCurrentPage('home');
  };

  const handleServiceClick = (service: string) => {
    console.log(`${service} service clicked`);
    // TODO: Implement service navigation
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginPage onLogin={handleLogin} />;
      
      case 'home':
        return (
          <HomePage 
            onProfileClick={handleProfileClick}
            onServiceClick={handleServiceClick}
          />
        );
      
      case 'profile':
        return <ProfilePage onBack={handleBackFromProfile} />;
      
      default:
        return <LoginPage onLogin={handleLogin} />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="app">
          {renderCurrentPage()}
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;