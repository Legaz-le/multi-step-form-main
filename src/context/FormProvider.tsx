import { useState } from "react";
import type { FormState } from "../types/types";
import { FormContext } from "./FormContext";

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<FormState>({ step: 1 });

  const updateStep = (delta:number) => setState(prev => ({ ...prev, step: prev.step + delta }));

  return (
    <FormContext.Provider value={{ state, updateStep }}>
      {children}
    </FormContext.Provider>
  );
};