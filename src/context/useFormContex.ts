import { useContext } from "react";
import { FormContext } from "./FormContext";

export const useFormContext = () => {
  const ctx = useContext(FormContext);
  if (!ctx) throw new Error("useFormContex must be used inside FormProvider");
  return ctx;
};
