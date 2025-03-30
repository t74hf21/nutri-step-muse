
import React from 'react';
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Settings, Bell, BarChart4, Shield } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Your Profile</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                    <User className="h-12 w-12 text-gray-500" />
                  </div>
                  <h2 className="text-xl font-bold">John Doe</h2>
                  <p className="text-gray-500">john.doe@example.com</p>
                  
                  <div className="mt-6 w-full">
                    <Button className="w-full">Edit Profile</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="text-lg">Account Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                  <Settings className="h-5 w-5 text-gray-500" />
                  <span>General Settings</span>
                </div>
                <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                  <Bell className="h-5 w-5 text-gray-500" />
                  <span>Notifications</span>
                </div>
                <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                  <Shield className="h-5 w-5 text-gray-500" />
                  <span>Privacy & Security</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Personal Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-gray-500">Full Name</label>
                      <p className="font-medium">John Doe</p>
                    </div>
                    <div>
                      <label className="text-sm text-gray-500">Email</label>
                      <p className="font-medium">john.doe@example.com</p>
                    </div>
                    <div>
                      <label className="text-sm text-gray-500">Age</label>
                      <p className="font-medium">32</p>
                    </div>
                    <div>
                      <label className="text-sm text-gray-500">Gender</label>
                      <p className="font-medium">Male</p>
                    </div>
                    <div>
                      <label className="text-sm text-gray-500">Height</label>
                      <p className="font-medium">5'11" (180 cm)</p>
                    </div>
                    <div>
                      <label className="text-sm text-gray-500">Weight</label>
                      <p className="font-medium">165 lbs (75 kg)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="text-lg">Health Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-500">Daily Calorie Goal</label>
                    <p className="font-medium">2,400 calories</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-500">Daily Step Goal</label>
                    <p className="font-medium">10,000 steps</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-500">Weekly Active Minutes Goal</label>
                    <p className="font-medium">150 minutes</p>
                  </div>
                  <div className="pt-2">
                    <Button variant="outline">Update Goals</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="text-lg">Connected Apps</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <BarChart4 className="h-5 w-5 text-blue-500" />
                      </div>
                      <div>
                        <p className="font-medium">FitTracker</p>
                        <p className="text-xs text-gray-500">Connected on Jul 15, 2023</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Disconnect</Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <Heart className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <p className="font-medium">HealthSync</p>
                        <p className="text-xs text-gray-500">Connected on Aug 3, 2023</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Disconnect</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
