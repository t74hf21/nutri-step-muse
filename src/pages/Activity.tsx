
import React from 'react';
import Header from '@/components/Header';
import StepTracker from '@/components/StepTracker';
import ProgressChart from '@/components/ProgressChart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Flame, Heart, TrendingUp } from 'lucide-react';
import ActivityCard from '@/components/ActivityCard';
import { mockStepData } from '@/utils/data';

const Activity = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Activity Tracking</h1>
        <p className="mb-6 text-gray-600">Monitor your daily physical activities and track your progress over time.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <ActivityCard 
            title="Active Minutes" 
            value="45"
            icon={TrendingUp}
            iconColor="bg-purple-500"
            change="8%"
            isPositive={true}
          />
          <ActivityCard 
            title="Calories Burned" 
            value="320"
            icon={Flame}
            iconColor="bg-orange-500"
            change="5%"
            isPositive={true}
          />
          <ActivityCard 
            title="Heart Rate" 
            value="72 bpm"
            icon={Heart}
            iconColor="bg-red-500"
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <StepTracker data={mockStepData} />
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium">Calories Burned</CardTitle>
            </CardHeader>
            <CardContent>
              <ProgressChart 
                data={{
                  current: 320,
                  goal: 500,
                  percentage: 64,
                  weeklyData: [280, 350, 290, 320, 400, 380, 320],
                  weeklyLabels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                }} 
                type="calories" 
              />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Activity;
