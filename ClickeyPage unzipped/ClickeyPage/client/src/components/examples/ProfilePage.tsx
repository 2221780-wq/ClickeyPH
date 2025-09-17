import ProfilePage from '../ProfilePage';

export default function ProfilePageExample() {
  const handleBack = () => {
    console.log('Back button clicked');
  };

  return <ProfilePage onBack={handleBack} />;
}