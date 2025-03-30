
import React, { useState, useEffect } from 'react';
import { Activity as ActivityIcon, Footprints, Flame, Heart, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import AppSidebar from '@/components/AppSidebar';
import { Skeleton } from '@/components/ui/skeleton';
import LoadingScreen from '@/components/LoadingScreen';

const Activity = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <div className="container mx-auto px-4 py-6">
            {loading ? (
              <div className="space-y-6">
                <Skeleton className="h-8 w-40 mb-6" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {Array(3).fill(0).map((_, i) => (
                    <Card key={i}>
                      <CardHeader>
                        <Skeleton className="h-6 w-28" />
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <Skeleton className="h-4 w-full" />
                          <Skeleton className="h-12 w-full" />
                          <Skeleton className="h-4 w-full" />
                          <Skeleton className="h-12 w-full" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ) : (
              <>
                <h1 className="text-2xl font-bold mb-6">Activity Tracking</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg font-medium flex items-center">
                        <Footprints className="mr-2 h-5 w-5 text-health-blue-500" />
                        Step Count
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-muted-foreground">Today</span>
                            <span className="text-sm font-medium">8,543 / 10,000</span>
                          </div>
                          <Progress value={85} className="h-2" />
                        </div>
                        
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-muted-foreground">This Week</span>
                            <span className="text-sm font-medium">45,206 / 70,000</span>
                          </div>
                          <Progress value={65} className="h-2" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg font-medium flex items-center">
                        <Flame className="mr-2 h-5 w-5 text-health-green-500" />
                        Calories Burned
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-muted-foreground">Today</span>
                            <span className="text-sm font-medium">467 / 600</span>
                          </div>
                          <Progress value={78} className="h-2" />
                        </div>
                        
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-muted-foreground">This Week</span>
                            <span className="text-sm font-medium">2,845 / 4,200</span>
                          </div>
                          <Progress value={68} className="h-2" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg font-medium flex items-center">
                        <Heart className="mr-2 h-5 w-5 text-red-500" />
                        Active Minutes
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-muted-foreground">Today</span>
                            <span className="text-sm font-medium">45 / 60</span>
                          </div>
                          <Progress value={75} className="h-2" />
                        </div>
                        
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-muted-foreground">This Week</span>
                            <span className="text-sm font-medium">238 / 420</span>
                          </div>
                          <Progress value={57} className="h-2" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </>
            )}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default Activity;
