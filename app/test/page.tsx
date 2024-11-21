import DateTimePickerDialog from "@/components/time-picker/date-time-picker-dialog";
import MutableLunchPlanDialog from "./lunchplan-dialog";
import React from "react";
// import DateTimePickerForm from "@/components/time-picker/date-time-picker-form";
// import { DatePicker } from "@/components/ui/date-picker";
// import Image from "next/image";

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px]  justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <h1>Lunch Dialog Test</h1>
            {/* <DatePicker /> */}
            {/* <DateTimePickerForm /> */}
            <DateTimePickerDialog /> 
            <MutableLunchPlanDialog />
        </div>
    );
}