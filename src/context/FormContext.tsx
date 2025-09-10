import { createContext, useContext } from "react";
import { useState } from "react";

import type { FormContextType } from "../types/types";
import type { FormState } from "../types/types";

const FormContext = createContext<FormContextType | null>(null);


export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<FormState>({ step: 1 });

  const updateStep = (delta: number) =>
    setState((prev) => ({ ...prev, step: prev.step + delta }));

  return (
    <FormContext.Provider value={{ state, updateStep }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const ctx = useContext(FormContext);
  if (!ctx) throw new Error("useFormContex must be used inside FormProvider");
  return ctx;
};
