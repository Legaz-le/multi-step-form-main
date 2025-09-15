import type {
  OptionType,
  FormType,
  StepType,
  AddOnsType,
  SectionType,
  FormValues
} from "../types/types";

export const steps: StepType[] = [
  { number: 1, label: "STEP 1", desc: "YOUR INFO", isFirst: true },
  { number: 2, label: "STEP 2", desc: "SELECT PLAN" },
  { number: 3, label: "STEP 3", desc: "ADD-ONS" },
  { number: 4, label: "STEP 4", desc: "SUMMARY" },
];

export const formInfo: FormType<keyof FormValues>[] = [
  { key:"name", label: "Name", type: "text", placeholder: "e.g. Stephen King" },
  {
    key:"email",
    label: "Email Address",
    type: "email",
    placeholder: "e.g. stephenking@lorem.com",
  },
  {
    key:"phone",
    label: "Phone Number",
    type: "tel",
    placeholder: "e.g. +1 234 567 890",
  },
];

export const option: OptionType[] = [
  {
    img: "/images/icon-arcade.svg",
    alt: "arcade-icon",
    name: "Arcade",
    price: {
      monthly: "$9/mo",
      yearly: "$90/yr",
    },
  },
  {
    img: "/images/icon-advanced.svg",
    alt: "advanced-icon",
    name: "Advanced",
    price: {
      monthly: "$12/mo",
      yearly: "$120/yr",
    },
  },
  {
    img: "/images/icon-pro.svg",
    alt: "pro-icon",
    name: "Pro",
    price: {
      monthly: "$15/mo",
      yearly: "$150/yr",
    },
  },
];

export const addOnsData: AddOnsType[] = [
  {
    title: "Online service",
    desc: "Access to multiplayer games",
    price: "+$1/mo",
  },
  { title: "Large storage", desc: "Extra 1TB of cloud save", price: "+$2/mo" },
  {
    title: "Customizable profile",
    desc: "Custom theme on your profile",
    price: "+$2/mo",
  },
];

export const sectionHeaders: SectionType[] = [
  {
    stepNumber: 1,
    title: "Personal info",
    desc: "Please provide your name, email address, and phone number.",
  },
  {
    stepNumber: 2,
    title: "Select your plan",
    desc: "You have the option of monthly or yearly billing.",
  },
   {
    stepNumber: 3,
    title: "Pick add-ons",
    desc: "Add-ons help enhance your gaming experience.",
  },
  {
    stepNumber: 4,
    title: "Finishing up",
    desc: "Double-check everything looks OK before confirming.",
  },
];
