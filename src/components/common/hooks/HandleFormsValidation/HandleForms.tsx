import { FormProvider, useForm } from "react-hook-form";

export const HandleForms = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm({
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      plan: "",
      addsOns: [],
      
    },
  });
  return <FormProvider {...methods}>{children}</FormProvider>;
};

