import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import ServiceButton from './ServiceButton';
import { Shield, Heart, Flame } from 'lucide-react';

interface HomePageProps {
  onProfileClick: () => void;
  onServiceClick: (service: string) => void;
}

export default function HomePage({ onProfileClick, onServiceClick }: HomePageProps) {
  // Mock user data from PDF
  const userData = {
    name: 'BRAHMMY',
    phone: '+63 12345678',
    avatar: null // TODO: remove mock functionality - no actual avatar in PDF
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-card-border">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-medium">Hi, {userData.name}</h1>
            <p className="text-sm text-muted-foreground">{userData.phone}</p>
          </div>
          
          <Avatar 
            className="cursor-pointer hover-elevate" 
            onClick={onProfileClick}
            data-testid="button-profile-avatar"
          >
            <AvatarImage src={userData.avatar || undefined} />
            <AvatarFallback className="bg-primary text-primary-foreground">
              {userData.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-md mx-auto p-4">
        <div className="space-y-6">
          {/* Brand Logo */}
          <div className="text-center py-4">
            <h2 className="text-xl font-bold tracking-wide">
              <span className="text-clickey-blue">CLICK</span>
              <span className="text-clickey-red">EY </span>
              <span className="text-clickey-blue">PH</span>
            </h2>
          </div>

          {/* Services Grid */}
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-3 gap-4">
                <ServiceButton
                  title="PNP"
                  icon={<Shield />}
                  onClick={() => onServiceClick('PNP')}
                />
                <ServiceButton
                  title="Hospitals"
                  icon={<Heart />}
                  onClick={() => onServiceClick('Hospitals')}
                />
                <ServiceButton
                  title="BFP"
                  icon={<Flame />}
                  onClick={() => onServiceClick('BFP')}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-card-border">
        <div className="max-w-md mx-auto px-4 py-2">
          <div className="flex justify-around">
            <button 
              className="py-2 px-3 text-xs font-medium text-primary"
              data-testid="nav-home"
            >
              HOME
            </button>
            <button 
              className="py-2 px-3 text-xs font-medium text-muted-foreground"
              data-testid="nav-news"
            >
              NEWS
            </button>
            <button 
              className="py-2 px-3 text-xs font-medium text-muted-foreground"
              data-testid="nav-digital-id"
            >
              DIGITAL ID
            </button>
            <button 
              className="py-2 px-3 text-xs font-medium text-muted-foreground"
              data-testid="nav-account"
            >
              ACCOUNT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}