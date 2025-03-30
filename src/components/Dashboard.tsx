
import React, { useState } from 'react';
import { Flame, Footprints, Heart, TrendingUp } from 'lucide-react';
import Header from './Header';
import StepTracker from './StepTracker';
import NutritionTracker from './NutritionTracker';
import ActivityCard from './ActivityCard';
import { mockFoodItems, mockNutritionSummary, mockStepData, FoodItem } from '@/utils/data';
import { v4 as uuidv4 } from 'uuid';

const Dashboard: React.FC = () => {
  const [foodItems, setFoodItems] = useState<FoodItem[]>(mockFoodItems);
  const [nutritionSummary, setNutritionSummary] = useState(mockNutritionSummary);
  const [stepData] = useState(mockStepData);
  
  const handleAddFood = (food: Omit<FoodItem, 'id' | 'timestamp'>) => {
    const newFood: FoodItem = {
      ...food,
      id: uuidv4(),
      timestamp: new Date()
    };
    
    setFoodItems(prev => [newFood, ...prev]);
    
    // Update nutrition summary
    setNutritionSummary(prev => ({
      ...prev,
      caloriesConsumed: prev.caloriesConsumed + food.calories,
      protein: prev.protein + food.protein,
      carbs: prev.carbs + food.carbs,
      fat: prev.fat + food.fat
    }));
  };
  
  const handleDeleteFood = (id: string) => {
    const foodItem = foodItems.find(item => item.id === id);
    
    if (!foodItem) return;
    
    setFoodItems(prev => prev.filter(item => item.id !== id));
    
    // Update nutrition summary
    setNutritionSummary(prev => ({
      ...prev,
      caloriesConsumed: prev.caloriesConsumed - foodItem.calories,
      protein: prev.protein - foodItem.protein,
      carbs: prev.carbs - foodItem.carbs,
      fat: prev.fat - foodItem.fat
    }));
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Today's Summary</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <ActivityCard 
            title="Steps" 
            value={stepData.current.toLocaleString()}
            icon={Footprints}
            iconColor="bg-health-blue-500"
            change="12%"
            isPositive={true}
          />
          <ActivityCard 
            title="Calories" 
            value={nutritionSummary.caloriesConsumed.toLocaleString()}
            icon={Flame}
            iconColor="bg-health-green-500"
            change="5%"
            isPositive={false}
          />
          <ActivityCard 
            title="Active Minutes" 
            value="45"
            icon={TrendingUp}
            iconColor="bg-purple-500"
            change="8%"
            isPositive={true}
          />
          <ActivityCard 
            title="Heart Rate" 
            value="72 bpm"
            icon={Heart}
            iconColor="bg-red-500"
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <StepTracker data={stepData} />
          <NutritionTracker 
            foodItems={foodItems}
            nutritionSummary={nutritionSummary}
            onAddFood={handleAddFood}
            onDeleteFood={handleDeleteFood}
          />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
