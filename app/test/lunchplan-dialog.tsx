//lunchplan-dialog.tsx
"use client";

import MutableDialog from "./mutable-dialog";
import { LunchPlanForm } from "./lunchplan-form";
import { LunchFormValues, lunchPlanSchema } from "./lunchplan-schema";

  export default function MutableLunchPlanDialog(
  ){
    const defaultValues: LunchFormValues = {
      // Add appropriate default values here
        id: "1",
        time: new Date(),
    };
  
    return (
      <div>
        <MutableDialog
          formSchema={lunchPlanSchema}
          FormComponent={(props) => (
            <div className="max-h-[80vh] overflow-y-auto px-4 py-2">

              {/* Lunch Plan Form */}
              <LunchPlanForm {...props} />
            </div>
          )}
          triggerButtonLabel="Edit"
          defaultValues={defaultValues}
        />
      </div>
    );
  }  