export type OptionType = {
  img: string;
  alt: string;
  name: string;
  price: string;
};

export type FormType = {
  name: string;
  type: string;
  placeholder: string;
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
  Name: string;
  Email: string;
  Phone: string;
  plan: string;
  addOns: string[];
};