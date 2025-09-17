import { useState, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface MPINInputProps {
  onComplete: (mpin: string) => void;
  onForgotMPIN: () => void;
  className?: string;
}

export default function MPINInput({ onComplete, onForgotMPIN, className }: MPINInputProps) {
  const [digits, setDigits] = useState(['', '', '', '']);
  const inputRefs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

  const handleChange = (index: number, value: string) => {
    // Only allow single digit
    const digit = value.replace(/\D/g, '').slice(-1);
    
    const newDigits = [...digits];
    newDigits[index] = digit;
    setDigits(newDigits);

    // Auto-focus next input
    if (digit && index < 3) {
      inputRefs[index + 1].current?.focus();
    }

    // Check if all digits are filled
    const mpin = newDigits.join('');
    if (mpin.length === 4) {
      onComplete(mpin);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    // Handle backspace
    if (e.key === 'Backspace' && !digits[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handleClear = () => {
    setDigits(['', '', '', '']);
    inputRefs[0].current?.focus();
  };

  useEffect(() => {
    // Focus first input on mount
    inputRefs[0].current?.focus();
  }, []);

  return (
    <div className={cn("space-y-6", className)}>
      <div className="flex justify-center gap-3">
        {digits.map((digit, index) => (
          <Input
            key={index}
            ref={inputRefs[index]}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="w-14 h-14 text-center text-xl font-bold border-2 border-gray-300 rounded-lg focus:border-clickey-blue focus:ring-2 focus:ring-clickey-blue/20"
            data-testid={`input-mpin-digit-${index}`}
          />
        ))}
      </div>
      
      <div className="flex justify-center">
        <button
          onClick={onForgotMPIN}
          className="text-sm text-clickey-blue hover:text-clickey-blue/80 font-medium transition-colors"
          data-testid="button-forgot-mpin"
        >
          Forgot MPIN?
        </button>
      </div>
    </div>
  );
}