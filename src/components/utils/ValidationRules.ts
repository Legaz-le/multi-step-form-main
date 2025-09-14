export const getValidationRules = (type: string) => {
  let rules: Record<string, any> = {
    required: "This field is required",
  };

  if (type === "email") {
    rules = {
      required: "This field is required",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Please enter a valid email address",
      },
    };
  }

  if (type === "tel") {
    rules = {
      required: "This field is required",
      pattern: {
        value: /^[0-9+\-\s()]+$/,
        message: "Please enter a valid phone number",
      },
      minLength: { value: 7, message: "Phone number is too short" },
      maxLength: { value: 15, message: "Phone number is too long" },
    };
  }
  

  return rules;
}