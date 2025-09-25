import { parsePhoneNumberFromString } from "libphonenumber-js";

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
  rules.validate = (value: string | string[] ) => {
    if (typeof value !== "string") {
    return "Please enter a valid phone number"; 
  }
  
  const phoneNumber = parsePhoneNumberFromString(value);

  if (!phoneNumber || !phoneNumber.isValid()) {
    return "Please enter a valid phone number"; 
  }

    return true;
  };
}
  

  return rules;
}