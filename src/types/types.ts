export type OptionType = {
  img: string;
  alt: string;
  name: string;
  price: {
    monthly:string;
    yearly: string;
  }
};

export type StepType = {
  number: number;
  label: string;
  desc: string;
  isFirst?: boolean;
};

export type SectionType = {
  title: string;
  desc: string;
  stepNumber:number;
};

export type AddOnsType =  {
  title: string;
  desc: string;
  price: string;
};

export type FormState = {
  step: number;
};

export type FormContextType = {
  state: FormState;
  updateStep: (delta:number) => void;
};

export type FormValues = {
  name: string;
  email : string;
  phone: string;
  plan: string;
  addOns: string[];
  billing: "monthly" | "yearly";
};

export type FormType<K extends keyof FormValues = keyof FormValues> = {
  key:string;
  label: string;
  type: string;
  placeholder: string;
};