//components/time-picker/date-time--picker-dialog.tsx
"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Calendar } from "../ui/calendar";
import { TimePicker } from "./time-picker"; // Assuming you have this component
import { Label } from "@radix-ui/react-label";


export default function DateTimePickerDialog() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handleDateChange = (date: Date | undefined) => {
    setSelectedDate(date || null); // Convert undefined to null for your internal state
  };

  return (
    <>
      <Dialog >
        <DialogTrigger asChild>
          <Button variant="outline">Open Date & Time Picker</Button>
        </DialogTrigger>
        <DialogContent className="bg-slate-100 flex flex-col items-center justify-center">
          <DialogHeader>
            <DialogTitle className=" text-center">Select Date and Time</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {/* Date Picker */}
            <div>
              <h4 className="text-sm font-medium">Pick a Date:</h4>
              <Calendar
                mode="single"
                selected={selectedDate || undefined}
                onSelect={handleDateChange}
                disabled={(date) => date < new Date()} // Disable past dates
                className="rounded-md border shadow"
              />
            </div>


            {/* Time Picker */}
            <div>
              <h4 className="text-sm font-medium">Pick a Time:</h4>
              <TimePicker
                date={selectedDate || undefined}
                setDate={(date) => setSelectedDate(date || null)}
              />
            </div>

          </div>

          <div className="mt-4">
            <Label htmlFor="participantSearch" className="mr-6">Participants</Label>
          </div>
          <div>
            <input
              id="name"
              type="text"
            />
          </div>

          <div className="mt-4">
            <Label htmlFor="participantSearch" className="mr-6">Participant List</Label>
          </div>
          <div>
            <input
              id="name"
              type="text"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
