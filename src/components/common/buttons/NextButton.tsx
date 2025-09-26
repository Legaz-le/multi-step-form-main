import { useState, useEffect } from "react";
import { useFormContext as useRHFContext } from "react-hook-form";

import { useFormContext } from "../../../context/FormContext";

import type { FormValues } from "../../../types/types";

const STEP_FIELDS: Record<number, (keyof FormValues)[]> = {
  1: ["name", "email", "phone"],
  2: ["plan"],
  3: ["addOns"],
};

const NextButton = () => {
  const { updateStep, state } = useFormContext();
  const { trigger, watch } = useRHFContext();
  const isLastStep = state.step === 5;
  const lastPage = state.step === 4;

  const currentFields = STEP_FIELDS[state.step] || [];
  const watchedFields = watch(currentFields);
  const [isDisabled, setDisabled] = useState(true);

  useEffect(() => {
    let filled = false;

    if (state.step === 4) {
      filled = true;
    } else if (state.step === 3) {
      filled = Array.isArray(watchedFields) && watchedFields.flat().length > 0;
    } else if (Array.isArray(watchedFields)) {
      filled = watchedFields.every((v) => !!v && v.toString().trim() !== "");
    } else {
      filled = !!watchedFields;
    }

    setDisabled(!filled);
  }, [watchedFields, state.step]);

  const handleNext = async () => {
    const valid = await trigger(currentFields);
    if (valid) updateStep(isLastStep ? 0 : 1);
  };

  return (
    <button
      type="button"
      className={`next-button ${isLastStep ? "bg-Purple-600" : "bg-Blue-950"} ${
        isDisabled
          ? "opacity-50 cursor-not-allowed"
          : "hover:bg-Purple-600 cursor-pointer"
      }`}
      onClick={handleNext}
      disabled={isDisabled}
    >
      {lastPage ? "Confirm " : "Next Step"}
    </button>
  );
};

export default NextButton;
