//mutable-dialog.tsx
"use client";

import React, { ReactNode } from "react";
import { useState, useEffect } from "react";
import {
  useForm,
  UseFormReturn,
  FieldValues,
  DefaultValues,
} from "react-hook-form";
import { z, ZodType } from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
//import { toast } from "@/hooks/use-toast"; // Import Shadcn toast
import { ActionState } from "./action-state";

interface GenericDialogProps<T extends FieldValues> {
  formSchema?: ZodType<T>;
  FormComponent: React.ComponentType<{ form: UseFormReturn<T> }>;
  action?: (data: T) => Promise<ActionState<any>>;
  triggerButtonLabel?: ReactNode;
  addDialogTitle?: string;
  editDialogTitle?: string;
  dialogDescription?: string;
  submitButtonLabel?: string;
  defaultValues?: DefaultValues<any>; // If present, this will indicate edit mode
}

export default function MutableDialog<T extends FieldValues>({
  formSchema,
  FormComponent,
  action,
  defaultValues,
  triggerButtonLabel = defaultValues ? "Edit" : "Add", // This can now be a string or an element
  addDialogTitle = "Add",
  editDialogTitle = "Edit",
  dialogDescription = defaultValues
    ? "Make changes to your item here. Click save when you're done."
    : "Fill out the form below to add a new item.",
  submitButtonLabel = defaultValues ? "Save" : "Add",
}: GenericDialogProps<T>) {
  const [open, setOpen] = useState(false);

  const form = useForm<T>({
    resolver: formSchema
      ? async (values) => {
          try {
            const result = formSchema.parse(values);
            return { values: result, errors: {} };
          } catch (err: any) {
            return { values: {}, errors: err.formErrors?.fieldErrors };
          }
        }
      : undefined,
    defaultValues: defaultValues,
  });

  // Reset the form when the dialog is closed
  useEffect(() => {
    if (!open) {
      form.reset();
    }
  }, [open, form]);

  async function handleSubmit(data: T) {
    if (!action) {
      throw new Error("No action function provided");
    }

    const actions = await action(data); // Call the provided action directly

    if (actions.success) {
      const toastMessage = actions.message;
      console.log(toastMessage);
    } else {
      const toastMessage = actions.message;
        console.log(toastMessage);
    }
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
          triggerButtonLabel
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px]  w-full">
        <DialogHeader>
          <DialogTitle>
            {defaultValues ? editDialogTitle : addDialogTitle}
          </DialogTitle>
          <DialogDescription>{dialogDescription}</DialogDescription>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <FormComponent form={form} />
          <div className="mt-4">
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
              >
                Close
              </Button>
              <Button type="submit">{submitButtonLabel}</Button>
            </DialogFooter>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
