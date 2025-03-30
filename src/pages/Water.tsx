
import React, { useState, useEffect } from 'react';
import { Droplet, Plus, Minus } from 'lucide-react';
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const Water = () => {
  const [waterIntake, setWaterIntake] = useState(() => {
    const savedIntake = localStorage.getItem('waterIntake');
    return savedIntake ? parseInt(savedIntake) : 0;
  });
  const [goal, setGoal] = useState(2000); // 2000ml or 2L
  const glassSize = 250; // 250ml per glass

  useEffect(() => {
    localStorage.setItem('waterIntake', waterIntake.toString());
  }, [waterIntake]);

  const handleAddWater = () => {
    setWaterIntake(prev => prev + glassSize);
  };

  const handleRemoveWater = () => {
    setWaterIntake(prev => Math.max(0, prev - glassSize));
  };

  const resetWater = () => {
    setWaterIntake(0);
  };

  const progressPercentage = Math.min(100, (waterIntake / goal) * 100);
  const remainingWater = Math.max(0, goal - waterIntake);
  const glassesCount = Math.floor(waterIntake / glassSize);
  const totalGlasses = Math.ceil(goal / glassSize);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Water Intake Tracker</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Droplet className="h-5 w-5 mr-2 text-blue-500" />
                Daily Water Intake
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center space-y-6">
                <div className="w-48 h-48 rounded-full border-8 border-blue-100 flex items-center justify-center relative">
                  <div 
                    className="absolute bottom-0 bg-blue-400 rounded-full w-full transition-all duration-500"
                    style={{ height: `${progressPercentage}%`, opacity: 0.7 }}
                  ></div>
                  <div className="z-10 text-center">
                    <div className="text-3xl font-bold">{waterIntake}ml</div>
                    <div className="text-gray-500">{remainingWater}ml left</div>
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Progress: {progressPercentage.toFixed(0)}%</span>
                    <span className="text-sm">{waterIntake}ml / {goal}ml</span>
                  </div>
                  <Progress value={progressPercentage} className="h-2" />
                </div>

                <div className="flex items-center justify-center space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleRemoveWater}
                    disabled={waterIntake <= 0}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Button onClick={handleAddWater} className="bg-blue-500 hover:bg-blue-600">
                    <Droplet className="h-4 w-4 mr-2" />
                    Add Glass ({glassSize}ml)
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleAddWater}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>

                <Button variant="ghost" onClick={resetWater}>Reset</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Water Intake Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-md font-medium mb-2">Today's Glasses</h3>
                  <div className="flex flex-wrap gap-2">
                    {Array.from({ length: totalGlasses }).map((_, index) => (
                      <div 
                        key={index}
                        className={`w-10 h-14 rounded-b-lg rounded-t-sm border-2 flex items-center justify-center ${
                          index < glassesCount 
                            ? 'bg-blue-100 border-blue-300 text-blue-500' 
                            : 'bg-gray-50 border-gray-200 text-gray-300'
                        }`}
                      >
                        <Droplet className="h-6 w-6" />
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-md font-medium mb-2">Benefits of Staying Hydrated</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Improves physical performance</li>
                    <li>Boosts energy levels and brain function</li>
                    <li>Helps prevent headaches</li>
                    <li>Aids digestion and prevents constipation</li>
                    <li>Helps maintain healthy skin</li>
                    <li>Regulates body temperature</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-md font-medium mb-2">Daily Goal Settings</h3>
                  <div className="flex items-center space-x-2">
                    <Button 
                      variant={goal === 1500 ? "default" : "outline"} 
                      onClick={() => setGoal(1500)}
                      className="flex-1"
                    >
                      1.5L
                    </Button>
                    <Button 
                      variant={goal === 2000 ? "default" : "outline"} 
                      onClick={() => setGoal(2000)}
                      className="flex-1"
                    >
                      2L
                    </Button>
                    <Button 
                      variant={goal === 2500 ? "default" : "outline"} 
                      onClick={() => setGoal(2500)}
                      className="flex-1"
                    >
                      2.5L
                    </Button>
                    <Button 
                      variant={goal === 3000 ? "default" : "outline"} 
                      onClick={() => setGoal(3000)}
                      className="flex-1"
                    >
                      3L
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Water;
