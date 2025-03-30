
import React, { useState } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import AppSidebar from '@/components/AppSidebar';

type EventCategory = 'exercise' | 'nutrition' | 'health';

interface Event {
  id: number;
  date: Date;
  title: string;
  category: EventCategory;
  completed: boolean;
}

const CalendarPage = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      date: new Date(),
      title: "Morning Run",
      category: "exercise",
      completed: false
    },
    {
      id: 2,
      date: new Date(),
      title: "Meal Prep",
      category: "nutrition",
      completed: true
    },
    {
      id: 3,
      date: new Date(),
      title: "Doctor Appointment",
      category: "health",
      completed: false
    }
  ]);

  const toggleEventCompletion = (id: number) => {
    setEvents(events.map(event => 
      event.id === id ? { ...event, completed: !event.completed } : event
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <div className="container mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold mb-6">Calendar</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle className="text-lg font-medium flex items-center">
                    <CalendarIcon className="mr-2 h-5 w-5 text-health-blue-500" />
                    Calendar
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(date) => date && setDate(date)}
                    className="rounded-md border"
                  />
                </CardContent>
              </Card>
              
              <Card className="lg:col-span-2">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-lg font-medium">
                    Events for {date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </CardTitle>
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Event
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {events.length > 0 ? (
                      events.map(event => (
                        <div 
                          key={event.id}
                          className="flex items-center justify-between p-3 rounded-lg border"
                        >
                          <div className="flex items-center">
                            <div className={`w-3 h-3 rounded-full mr-3 ${
                              event.category === 'exercise' ? 'bg-health-blue-500' :
                              event.category === 'nutrition' ? 'bg-health-green-500' : 
                              'bg-amber-500'
                            }`}></div>
                            <span className={event.completed ? 'line-through text-gray-500' : ''}>
                              {event.title}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => toggleEventCompletion(event.id)}
                            >
                              {event.completed ? 'Undo' : 'Complete'}
                            </Button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-8 text-gray-500">
                        <p>No events for this day</p>
                        <p className="text-sm mt-1">Click 'Add Event' to create a new event</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default CalendarPage;
