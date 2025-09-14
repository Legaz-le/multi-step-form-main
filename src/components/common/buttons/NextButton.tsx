import { useFormContext as useRHFContext } from "react-hook-form";

import { useFormContext } from "../../../context/FormContext";

import type { FormValues } from "../../../types/types";

const NextButton = () => {
  const { updateStep, state } = useFormContext();
  const { trigger } = useRHFContext();
  const isLastStep = state.step === 4;

  const handleNext = async () => {
    let fieldsToValidate: (keyof FormValues)[] = [];

    if (state.step === 1) fieldsToValidate = ["name", "email", "phone"];
    if (state.step === 2) fieldsToValidate = ["plan"];
    if (state.step === 3) fieldsToValidate = ["addOns"];

    const valid = await trigger(fieldsToValidate);
    if (valid) updateStep(isLastStep ? 0 : 1); 
  };


  return (
    <button
      type="button"
      className={`${
        isLastStep ? "bg-Purple-600" : "bg-Blue-950"
      } next-button`}
      onClick={handleNext}
    >
      {isLastStep ? "Confirm " : "Next Step"}
    </button>
  );
};

export default NextButton;
