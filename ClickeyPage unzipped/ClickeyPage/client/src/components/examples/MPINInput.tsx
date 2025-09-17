import MPINInput from '../MPINInput';

export default function MPINInputExample() {
  const handleComplete = (mpin: string) => {
    console.log('MPIN entered:', mpin);
  };

  const handleForgotMPIN = () => {
    console.log('Forgot MPIN clicked');
  };

  return (
    <div className="p-8 bg-background">
      <div className="max-w-md mx-auto">
        <h3 className="text-lg font-semibold text-center mb-6">Enter your 4-digit MPIN</h3>
        <MPINInput onComplete={handleComplete} onForgotMPIN={handleForgotMPIN} />
      </div>
    </div>
  );
}