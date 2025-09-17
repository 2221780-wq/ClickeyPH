import ServiceButton from '../ServiceButton';
import { Shield, Heart, Flame } from 'lucide-react';

export default function ServiceButtonExample() {
  const handleClick = (service: string) => {
    console.log(`${service} service clicked`);
  };

  return (
    <div className="p-8 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
        <ServiceButton
          title="PNP"
          icon={<Shield />}
          onClick={() => handleClick('PNP')}
        />
        <ServiceButton
          title="Hospitals"
          icon={<Heart />}
          onClick={() => handleClick('Hospitals')}
        />
        <ServiceButton
          title="BFP"
          icon={<Flame />}
          onClick={() => handleClick('BFP')}
        />
      </div>
    </div>
  );
}