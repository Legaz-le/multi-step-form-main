import type { FormValues } from "../../types/types";
import type { RegisterOptions, Path } from "react-hook-form";

export const getValidationRules = (fieldName: Path<FormValues>, type: string): RegisterOptions<FormValues, typeof fieldName> => {
  let rules: RegisterOptions<FormValues, typeof fieldName> = {
    required: "This field is required",
  };

 if (type === "email") {
    rules.pattern = {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Please enter a valid email address",
    };
  }

  if (type === "tel") {
    rules.pattern = {
      value: /^[0-9+\-\s()]+$/,
      message: "Please enter a valid phone number",
    };
    rules.minLength = { value: 7, message: "Phone number is too short" };
    rules.maxLength = { value: 15, message: "Phone number is too long" };
  }
  

  return rules;
}