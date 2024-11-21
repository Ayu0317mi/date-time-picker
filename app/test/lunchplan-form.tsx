// lunchplan-form.tsx
"use client";

import { useState, useCallback } from "react";
import { useFieldArray, UseFormReturn, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { X } from "lucide-react";

import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

//import { searchUsersInLunchGang, VenueOption } from "@/app/actions/venue";
import { LunchFormValues } from "./lunchplan-schema";
//import { User } from "@prisma/client";
//import { DateTimePicker } from "./date-time";

// Import the RestaurantSearch component

interface FormComponentProps {
  form: UseFormReturn<LunchFormValues>;
}

export function LunchPlanForm({ form }: FormComponentProps) {
  const [showUserSearch, setShowUserSearch] = useState(false);

  return (
    <Form {...form}>
      {/* Date and Time Picker */}
      <FormField
        control={form.control}
        name="time"
        render={({ field, fieldState }) => {
          return (
            <FormItem>
              <FormLabel className="mr-2">Date and Time</FormLabel>
              <FormControl>
    {/*             <DateTimePicker field={field} /> */}
              </FormControl>
              <FormMessage />
            </FormItem>
          );
        }}
      />
    </Form>
  );
}