import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft } from 'lucide-react';

interface ProfilePageProps {
  onBack: () => void;
}

interface ProfileData {
  completeName: string;
  completeAddress: string;
  age: string;
  dateOfBirth: string;
  gender: string;
  weight: string;
  height: string;
}

export default function ProfilePage({ onBack }: ProfilePageProps) {
  // TODO: remove mock functionality - load from user data
  const [formData, setFormData] = useState<ProfileData>({
    completeName: 'BRAHMMY SANTOS',
    completeAddress: '123 Sample Street, Manila, Philippines',
    age: '28',
    dateOfBirth: '1995-06-15',
    gender: 'Male',
    weight: '70',
    height: '175'
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleInputChange = (field: keyof ProfileData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    console.log('Saving profile data:', formData);
    
    // Simulate save operation
    setTimeout(() => {
      setIsSaving(false);
      console.log('Profile saved successfully');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-card-border">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            data-testid="button-back"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          
          <div>
            <h1 className="text-lg font-medium">Profile Information</h1>
            <p className="text-sm text-muted-foreground">Personal Details</p>
          </div>
        </div>
      </div>

      {/* Brand Logo */}
      <div className="max-w-md mx-auto px-4 py-4">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold tracking-wide">
            <span className="text-clickey-blue">CLICK</span>
            <span className="text-clickey-red">EY </span>
            <span className="text-clickey-blue">PH</span>
          </h2>
        </div>

        {/* Profile Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Personal Information</CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="completeName" className="text-sm font-medium">
                COMPLETE NAME:
              </Label>
              <Input
                id="completeName"
                value={formData.completeName}
                onChange={(e) => handleInputChange('completeName', e.target.value)}
                data-testid="input-complete-name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="completeAddress" className="text-sm font-medium">
                COMPLETE ADDRESS:
              </Label>
              <Input
                id="completeAddress"
                value={formData.completeAddress}
                onChange={(e) => handleInputChange('completeAddress', e.target.value)}
                data-testid="input-complete-address"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="age" className="text-sm font-medium">
                  AGE:
                </Label>
                <Input
                  id="age"
                  type="number"
                  value={formData.age}
                  onChange={(e) => handleInputChange('age', e.target.value)}
                  data-testid="input-age"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dateOfBirth" className="text-sm font-medium">
                  DATE OF BIRTH:
                </Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  data-testid="input-date-of-birth"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">
                GENDER:
              </Label>
              <Select 
                value={formData.gender} 
                onValueChange={(value) => handleInputChange('gender', value)}
              >
                <SelectTrigger data-testid="select-gender">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="weight" className="text-sm font-medium">
                  WEIGHT:
                </Label>
                <div className="relative">
                  <Input
                    id="weight"
                    type="number"
                    value={formData.weight}
                    onChange={(e) => handleInputChange('weight', e.target.value)}
                    data-testid="input-weight"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                    kg
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="height" className="text-sm font-medium">
                  HEIGHT:
                </Label>
                <div className="relative">
                  <Input
                    id="height"
                    type="number"
                    value={formData.height}
                    onChange={(e) => handleInputChange('height', e.target.value)}
                    data-testid="input-height"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                    cm
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button 
                onClick={handleSave} 
                disabled={isSaving}
                className="w-full"
                data-testid="button-save-profile"
              >
                {isSaving ? 'Saving...' : 'Save Changes'}
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-4 mb-8">
          <p className="text-xs text-muted-foreground">PAGE 1 OF 2</p>
        </div>
      </div>
    </div>
  );
}