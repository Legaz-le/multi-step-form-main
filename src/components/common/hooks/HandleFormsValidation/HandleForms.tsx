import { FormProvider, useForm } from "react-hook-form";

import type { FormValues } from "../../../../types/types";

export const HandleForms = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm<FormValues>({
    mode: "onTouched",
    defaultValues: {
      Name: "",
      Email: "",
      Phone: "",
      plan: "",
      addOns: [],
      
    },
  });
  return <FormProvider {...methods}>{children}</FormProvider>;
};

