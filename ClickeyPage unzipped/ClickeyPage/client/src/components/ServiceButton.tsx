import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ServiceButtonProps {
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
  className?: string;
}

export default function ServiceButton({ title, icon, onClick, className }: ServiceButtonProps) {
  return (
    <Card className={cn("hover-elevate cursor-pointer", className)}>
      <Button
        variant="ghost"
        onClick={onClick}
        className="w-full h-24 flex flex-col items-center justify-center gap-2 p-4"
        data-testid={`button-service-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <div className="text-2xl text-primary">
          {icon}
        </div>
        <span className="text-sm font-medium">{title}</span>
      </Button>
    </Card>
  );
}