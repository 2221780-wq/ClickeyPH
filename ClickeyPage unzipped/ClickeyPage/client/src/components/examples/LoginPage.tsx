import LoginPage from '../LoginPage';

export default function LoginPageExample() {
  const handleLogin = (mpin: string) => {
    console.log('Login successful with MPIN:', mpin);
  };

  return <LoginPage onLogin={handleLogin} />;
}