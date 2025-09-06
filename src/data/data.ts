import type {
  OptionType,
  FormType,
  StepType,
  AddOnsType,
} from "../types/types";

export const steps: StepType[] = [
  { number: 1, label: "STEP 1", desc: "YOUR INFO", isFirst: true },
  { number: 2, label: "STEP 2", desc: "SELECT PLAN", isFirst: false },
  { number: 3, label: "STEP 3", desc: "ADD-ONS", isFirst: false },
  { number: 4, label: "STEP 4", desc: "SUMMARY", isFirst: false },
];

export const formInfo: FormType[] = [
  { name: "Name", type: "text", placeholder: "e.g. Stephen King" },
  {
    name: "Email Address",
    type: "email",
    placeholder: "e.g. stephenking@lorem.com",
  },
  {
    name: "Phone Number",
    type: "tel",
    placeholder: "e.g. +1 234 567 890",
  },
];

export const option: OptionType[] = [
  {
    img: "/public/images/icon-arcade.svg",
    alt: "arcade-icon",
    name: "Arcade",
    price: "$90/yr",
  },
  {
    img: "/public/images/icon-advanced.svg",
    alt: "advanced-icon",
    name: "Advanced",
    price: "$120/yr",
  },
  {
    img: "/public/images/icon-pro.svg",
    alt: "pro-icon",
    name: "Pro",
    price: "$150/yr",
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

export const FormSectionTop = [
  {
    title: "Personal info",
    desc: "Please provide your name, email address, and phone number.",
  },
];
export const SecondSectionTop = [
  {
    title: "Select your plan",
    desc: "You have the option of monthly or yearly billing.",
  },
];
export const AddOnsSectionTop = [
  {
    title: "Pick add-ons",
    desc: "Add-ons help enhance your gaming experience.",
  },
];
