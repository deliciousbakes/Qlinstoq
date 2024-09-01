/** @format */
"use client";
import { createEmpl } from "@/actions/employeeActions";
import { SubmitButton } from "@/components/backend/Buttons";
import { formatErrorMessages } from "@/lib/formatErrorMessages";
import { UserValidations } from "@/utils/UserValidations";
import { useActionState, useEffect, useState } from "react";
import { Input } from "../ui/input";

const EmployeeForm = () => {
  const [errorMessages, setErrorMessages] = useState("");
  const [state, formAction] = useActionState(createEmpl, {
    error: false,
    success: false,
  });

  useEffect(() => {
    if (state.error) {
      if (typeof state.errorDetails === "string") {
        setErrorMessages(state.errorDetails);
      } else {
        setErrorMessages(formatErrorMessages(state.errorDetails));
      }
      setErrorMessages(formatErrorMessages(state.errorDetails));
    } else if (state.success) {
      console.log("success");
    }
  }, [state]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const fields = Object.fromEntries(formData);
    // console.log(fields);

    const validation = UserValidations.safeParse(fields);
    if (!validation.success) {
      // console.log(validation.error.flatten().fieldErrors);
      setErrorMessages(
        formatErrorMessages(validation.error.flatten().fieldErrors)
      );
    } else {
      formAction({ formData });
    }
  };
  

  return (
    <main className="shortForm  h-screen flex justify-center flex-col sm:longForm  items-center ">
        <form
          onSubmit={handleSubmit}
          className="container grid  grid-cols-1  gap-4 "
        >
          <Input
            name="name"
            type="text"
            placeholder="Enter Product Name"
          />

          <Input
            name="emplPhone"
            type="number"
            placeholder="Enter your phone nUmber"
          />
          {/* <ImageInput
            title="Category Image"
            imageUrl={form.emplImageUrl}
            setImageUrl={setEmplImageUrl}
            endpoint="categoryImage"
          /> */}
          <SubmitButton
            title="Create Employee"
            LoadingTitle="Creating employee..."
            className="text-2xl bg-jade hover:bg-emerald-500"
          />
        </form>
    </main>
  );
};

export default EmployeeForm;
