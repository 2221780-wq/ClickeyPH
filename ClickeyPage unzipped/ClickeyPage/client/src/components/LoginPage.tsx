import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import MPINInput from './MPINInput';
import backgroundImage from '@assets/generated_images/Blue_city_skyline_background_8df8e5ee.png';
import logoImage from '@assets/clickeyph_1758078613594.png';
import titleLogoImage from '@assets/download_1758079481947.png';

interface LoginPageProps {
  onLogin: (mpin: string) => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [mpin, setMpin] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Mock user data from PDF
  const userData = {
    name: 'BRAHMMY',
    email: 'brah******my@gmail.com'
  };

  const handleMPINComplete = (enteredMpin: string) => {
    setMpin(enteredMpin);
    setIsLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      onLogin(enteredMpin);
    }, 1000);
  };

  const handleCreateAccount = () => {
    console.log('Create account clicked');
    // TODO: Implement create account functionality
  };

  const handleForgotMPIN = () => {
    console.log('Forgot MPIN clicked');
    // TODO: Implement forgot MPIN functionality
  };

  const handleSwitchAccount = () => {
    console.log('Switch Account clicked');
    // TODO: Implement account switching
  };

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Blue overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 via-blue-600/30 to-blue-800/40"></div>
      
      <div className="relative z-10 min-h-screen flex flex-col justify-center p-4">
        <div className="w-full max-w-sm mx-auto space-y-6">
          
          {/* CLICKEY PH Logo */}
          <div className="text-center mb-8">
            <img 
              src={titleLogoImage} 
              alt="CLICKEY PH" 
              className="h-16 mx-auto filter drop-shadow-lg"
              style={{
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3)) drop-shadow(0 1px 2px rgba(255,255,255,0.2))',
                textShadow: '0 1px 3px rgba(0,0,0,0.5)'
              }}
            />
          </div>

          {/* Welcome Card */}
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="text-center pb-4">
              <h2 className="text-xl font-semibold text-gray-800">Welcome back, {userData.name}</h2>
              <p className="text-sm text-gray-600 mt-1">Enter your 4-digit MPIN</p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <MPINInput 
                onComplete={handleMPINComplete} 
                onForgotMPIN={handleForgotMPIN}
              />

              {isLoading && (
                <p className="text-center text-sm text-gray-600">Authenticating...</p>
              )}
            </CardContent>
          </Card>

          {/* Account Info */}
          <div className="text-center space-y-3">
            <p className="text-sm text-white/90 font-medium">{userData.email}</p>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSwitchAccount}
              className="text-white/80 hover:text-white text-sm font-medium"
              data-testid="button-switch-account"
            >
              Not you? Switch Account
            </Button>
          </div>

          {/* Create Account */}
          <div className="text-center">
            <Button
              variant="outline"
              onClick={handleCreateAccount}
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 backdrop-blur-sm"
              data-testid="button-create-account"
            >
              Create an Account
            </Button>
          </div>

          {/* Circular Logo at bottom right */}
          <div className="fixed bottom-6 right-6">
            <img 
              src={logoImage} 
              alt="ClickeyPH Logo" 
              className="w-16 h-16 rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}