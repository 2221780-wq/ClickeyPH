import HomePage from '../HomePage';

export default function HomePageExample() {
  const handleProfileClick = () => {
    console.log('Profile clicked');
  };

  const handleServiceClick = (service: string) => {
    console.log(`${service} service clicked`);
  };

  return <HomePage onProfileClick={handleProfileClick} onServiceClick={handleServiceClick} />;
}