
import React from 'react';
import { Bell, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';

const Header: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <header className="bg-white border-b sticky top-0 z-10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="mr-2">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[240px] sm:w-[300px]">
                <nav className="flex flex-col gap-4 mt-8">
                  <a href="/" className="px-4 py-2 hover:bg-gray-100 rounded-md transition-colors font-medium">Dashboard</a>
                  <a href="/nutrition" className="px-4 py-2 hover:bg-gray-100 rounded-md transition-colors">Nutrition</a>
                  <a href="/activity" className="px-4 py-2 hover:bg-gray-100 rounded-md transition-colors">Activity</a>
                  <a href="/profile" className="px-4 py-2 hover:bg-gray-100 rounded-md transition-colors">Profile</a>
                </nav>
              </SheetContent>
            </Sheet>
          )}
          <h1 className="text-xl font-bold text-health-green-600">NutriStep</h1>
        </div>
        
        {!isMobile && (
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className="font-medium text-gray-900 hover:text-health-green-600 transition-colors">Dashboard</a>
            <a href="/nutrition" className="text-gray-600 hover:text-health-green-600 transition-colors">Nutrition</a>
            <a href="/activity" className="text-gray-600 hover:text-health-green-600 transition-colors">Activity</a>
            <a href="/profile" className="text-gray-600 hover:text-health-green-600 transition-colors">Profile</a>
          </nav>
        )}
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5 text-gray-600" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full bg-gray-100">
            <User className="h-5 w-5 text-gray-600" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
