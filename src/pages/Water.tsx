
import React, { useState, useEffect } from 'react';
import { Droplet, Plus, Minus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import AppSidebar from '@/components/AppSidebar';
import { Skeleton } from '@/components/ui/skeleton';

const Water = () => {
  const [loading, setLoading] = useState(true);
  const [waterIntake, setWaterIntake] = useState(4);
  const [waterGoal] = useState(8);
  
  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const addWater = () => {
    if (waterIntake < waterGoal * 2) {
      setWaterIntake(prev => prev + 1);
    }
  };
  
  const removeWater = () => {
    if (waterIntake > 0) {
      setWaterIntake(prev => prev - 1);
    }
  };
  
  const waterPercentage = (waterIntake / waterGoal) * 100;

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <div className="container mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold mb-6">Water Intake</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {loading ? (
                <>
                  <Skeleton className="h-64 lg:col-span-1" />
                  <Skeleton className="h-64 lg:col-span-2" />
                </>
              ) : (
                <>
                  <Card className="lg:col-span-1">
                    <CardHeader>
                      <CardTitle className="text-lg font-medium flex items-center">
                        <Droplet className="mr-2 h-5 w-5 text-health-blue-500" />
                        Today's Intake
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col items-center">
                        <div className="relative mb-4">
                          <div className="w-32 h-32 border-4 border-health-blue-500 rounded-full flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-3xl font-bold text-health-blue-500">{waterIntake}</div>
                              <div className="text-sm text-muted-foreground">of {waterGoal} cups</div>
                            </div>
                          </div>
                          <div 
                            className="absolute bottom-0 left-0 right-0 bg-health-blue-200 rounded-full overflow-hidden transition-all"
                            style={{ 
                              height: `${Math.min(100, waterPercentage)}%`,
                              opacity: 0.3
                            }}
                          ></div>
                        </div>
                        
                        <div className="flex items-center gap-4 mt-4">
                          <Button 
                            variant="outline" 
                            size="icon"
                            onClick={removeWater}
                            disabled={waterIntake === 0}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <Button
                            onClick={addWater}
                            className="bg-health-blue-500 hover:bg-health-blue-600"
                          >
                            <Plus className="h-4 w-4 mr-2" />
                            Add Water
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="lg:col-span-2">
                    <CardHeader>
                      <CardTitle className="text-lg font-medium">
                        Water History
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-muted-foreground">Today</span>
                            <span className="text-sm font-medium">{waterIntake} / {waterGoal} cups</span>
                          </div>
                          <Progress value={waterPercentage} className="h-2" />
                        </div>
                        
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-muted-foreground">Yesterday</span>
                            <span className="text-sm font-medium">6 / {waterGoal} cups</span>
                          </div>
                          <Progress value={75} className="h-2" />
                        </div>
                        
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-muted-foreground">2 days ago</span>
                            <span className="text-sm font-medium">7 / {waterGoal} cups</span>
                          </div>
                          <Progress value={87.5} className="h-2" />
                        </div>
                        
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-muted-foreground">3 days ago</span>
                            <span className="text-sm font-medium">5 / {waterGoal} cups</span>
                          </div>
                          <Progress value={62.5} className="h-2" />
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <h3 className="text-sm font-medium mb-2">Water Intake Tips</h3>
                        <ul className="text-sm space-y-2 text-muted-foreground">
                          <li>• Drink a glass of water when you wake up</li>
                          <li>• Keep a water bottle with you throughout the day</li>
                          <li>• Set reminders to drink water every hour</li>
                          <li>• Drink a glass of water before each meal</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </>
              )}
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default Water;
