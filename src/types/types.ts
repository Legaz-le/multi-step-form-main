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
};

export type AddOnsType = SectionType & {
  price: string;
};