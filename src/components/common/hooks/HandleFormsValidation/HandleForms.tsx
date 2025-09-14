import { FormProvider, useForm } from "react-hook-form";

import type { FormValues } from "../../../../types/types";

export const HandleForms = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm<FormValues>({
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      plan: "",
      addOns: [],
      
    },
  });
  return <FormProvider {...methods}>{children}</FormProvider>;
};

