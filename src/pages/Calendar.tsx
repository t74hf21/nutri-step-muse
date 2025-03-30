
import React, { useState } from 'react';
import Header from '@/components/Header';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Check, X } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

// Example events (in a real app, these would come from a database)
const mockEvents = [
  { id: 1, date: new Date(2023, 9, 15), title: 'Cardio workout', category: 'exercise', completed: true },
  { id: 2, date: new Date(2023, 9, 16), title: 'Meal prep', category: 'nutrition', completed: true },
  { id: 3, date: new Date(2023, 9, 18), title: 'Doctor appointment', category: 'health', completed: false },
  { id: 4, date: new Date(2023, 9, 20), title: 'Yoga class', category: 'exercise', completed: false },
  { id: 5, date: new Date(2023, 9, 22), title: 'Weigh-in', category: 'health', completed: false },
];

type Event = {
  id: number;
  date: Date;
  title: string;
  category: 'exercise' | 'nutrition' | 'health';
  completed: boolean;
};

// Helper function to check if a date has events
const hasEventOnDate = (date: Date, events: Event[]) => {
  return events.some(
    (event) => 
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear()
  );
};

// Helper function to get events for a specific date
const getEventsForDate = (date: Date, events: Event[]) => {
  return events.filter(
    (event) => 
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear()
  );
};

const CalendarPage: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [events, setEvents] = useState<Event[]>(mockEvents);
  
  const selectedDateEvents = getEventsForDate(date, events);
  
  const toggleEventCompletion = (eventId: number) => {
    setEvents(events.map(event => 
      event.id === eventId 
        ? { ...event, completed: !event.completed } 
        : event
    ));
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Health Calendar</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2 text-health-green-500" />
                Calendar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={(date) => date && setDate(date)}
                className="rounded-md border"
                modifiers={{
                  hasEvent: (date) => hasEventOnDate(date, events),
                }}
                modifiersClassNames={{
                  hasEvent: "bg-health-green-100 font-bold text-health-green-600",
                }}
              />
            </CardContent>
          </Card>
          
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>
                Events for {format(date, "MMMM d, yyyy")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all">
                <TabsList className="mb-4">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="exercise">Exercise</TabsTrigger>
                  <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
                  <TabsTrigger value="health">Health</TabsTrigger>
                </TabsList>
                
                <TabsContent value="all" className="space-y-4">
                  {selectedDateEvents.length > 0 ? (
                    selectedDateEvents.map(event => (
                      <div key={event.id} className="flex items-center justify-between p-3 border rounded-md">
                        <div className="flex items-center">
                          <Badge
                            className={
                              event.category === 'exercise' ? 'bg-blue-500' : 
                              event.category === 'nutrition' ? 'bg-green-500' : 'bg-purple-500'
                            }
                          >
                            {event.category}
                          </Badge>
                          <span className={`ml-3 ${event.completed ? 'line-through text-gray-400' : ''}`}>
                            {event.title}
                          </span>
                        </div>
                        <button 
                          onClick={() => toggleEventCompletion(event.id)}
                          className={`p-1 rounded-full ${
                            event.completed 
                              ? 'bg-green-100 text-green-600' 
                              : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {event.completed ? <Check className="h-5 w-5" /> : <X className="h-5 w-5" />}
                        </button>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <CalendarIcon className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                      <p>No events scheduled for this day</p>
                      <p className="text-sm mt-1">Add an event to start tracking your health journey</p>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="exercise" className="space-y-4">
                  {selectedDateEvents.filter(e => e.category === 'exercise').length > 0 ? (
                    selectedDateEvents
                      .filter(e => e.category === 'exercise')
                      .map(event => (
                        <div key={event.id} className="flex items-center justify-between p-3 border rounded-md">
                          <div className="flex items-center">
                            <Badge className="bg-blue-500">exercise</Badge>
                            <span className={`ml-3 ${event.completed ? 'line-through text-gray-400' : ''}`}>
                              {event.title}
                            </span>
                          </div>
                          <button 
                            onClick={() => toggleEventCompletion(event.id)}
                            className={`p-1 rounded-full ${
                              event.completed 
                                ? 'bg-green-100 text-green-600' 
                                : 'bg-gray-100 text-gray-600'
                            }`}
                          >
                            {event.completed ? <Check className="h-5 w-5" /> : <X className="h-5 w-5" />}
                          </button>
                        </div>
                      ))
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <p>No exercise events for this day</p>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="nutrition" className="space-y-4">
                  {selectedDateEvents.filter(e => e.category === 'nutrition').length > 0 ? (
                    selectedDateEvents
                      .filter(e => e.category === 'nutrition')
                      .map(event => (
                        <div key={event.id} className="flex items-center justify-between p-3 border rounded-md">
                          <div className="flex items-center">
                            <Badge className="bg-green-500">nutrition</Badge>
                            <span className={`ml-3 ${event.completed ? 'line-through text-gray-400' : ''}`}>
                              {event.title}
                            </span>
                          </div>
                          <button 
                            onClick={() => toggleEventCompletion(event.id)}
                            className={`p-1 rounded-full ${
                              event.completed 
                                ? 'bg-green-100 text-green-600' 
                                : 'bg-gray-100 text-gray-600'
                            }`}
                          >
                            {event.completed ? <Check className="h-5 w-5" /> : <X className="h-5 w-5" />}
                          </button>
                        </div>
                      ))
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <p>No nutrition events for this day</p>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="health" className="space-y-4">
                  {selectedDateEvents.filter(e => e.category === 'health').length > 0 ? (
                    selectedDateEvents
                      .filter(e => e.category === 'health')
                      .map(event => (
                        <div key={event.id} className="flex items-center justify-between p-3 border rounded-md">
                          <div className="flex items-center">
                            <Badge className="bg-purple-500">health</Badge>
                            <span className={`ml-3 ${event.completed ? 'line-through text-gray-400' : ''}`}>
                              {event.title}
                            </span>
                          </div>
                          <button 
                            onClick={() => toggleEventCompletion(event.id)}
                            className={`p-1 rounded-full ${
                              event.completed 
                                ? 'bg-green-100 text-green-600' 
                                : 'bg-gray-100 text-gray-600'
                            }`}
                          >
                            {event.completed ? <Check className="h-5 w-5" /> : <X className="h-5 w-5" />}
                          </button>
                        </div>
                      ))
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <p>No health events for this day</p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default CalendarPage;
