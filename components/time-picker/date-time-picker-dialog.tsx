// components/time-picker/date-time-picker-dialog.tsx
"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Calendar } from "../ui/calendar";
import { TimePicker } from "./time-picker"; // Assuming you have this component
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";

export default function DateTimePickerDialog() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handleDateChange = (date: Date | undefined) => {
    setSelectedDate(date || null); // Convert undefined to null for your internal state
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Open Date & Time Picker</Button>
        </DialogTrigger>
        <DialogContent className="bg-slate-100 flex flex-col items-center justify-center">
          <DialogHeader>
            <DialogTitle className="text-center">Lunch Plan</DialogTitle>
            <div>edit item and save</div>
          </DialogHeader>

          {/* Scrollable Content */}
          <div className="space-y-4 overflow-y-auto max-h-[70vh] w-full px-4">
            {/* Set Venue */}
            <div className="mt-4">
              <Label htmlFor="participantSearch" className="mr-6">
                Prefer Location
              </Label>
              <Input
                id="participantSearch"
                type="text"
                placeholder="Type Venue Name"
              />
            </div>
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

            {/* Participants */}
            <div className="mt-4">
              <Label htmlFor="participantSearch" className="mr-6">
                Participants
              </Label>
              <Input
                id="participantSearch"
                type="text"
                placeholder="Search for participants"
              />
            </div>

            {/* Participant List */}
            <div className="mt-4">
              <Label htmlFor="participantList" className="mr-6">
                Participant List
              </Label>
              <Input
                id="participantList"
                type="text"
                placeholder="Search for participants"
              />
            </div>
          </div>
          <Button variant="outline">Save</Button>
        </DialogContent>
      </Dialog>
    </>
  );
}