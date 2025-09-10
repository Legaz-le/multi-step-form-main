import { useFormContext } from "../../../context/FormContext";

const NextButton = () => {
  const { updateStep, state } = useFormContext();
  const isLastStep = state.step === 4;

  return (
    <button
      type="button"
      className={`${
        isLastStep ? "bg-Purple-600" : "bg-Blue-950"
      } next-button`}
      onClick={() => updateStep(isLastStep ? 0 : 1)}
    >
      {isLastStep ? "Confirm " : "Next Step"}
    </button>
  );
};

export default NextButton;
