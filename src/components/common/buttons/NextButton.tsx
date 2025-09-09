import { useFormContext } from "../../../context/FormContext";

const NextButton = () => {
  const { updateStep, state } = useFormContext();
  const isLastStep = state.step === 4;

  return (
    <button
      type="button"
      className={`${
        isLastStep ? "bg-Purple-600" : "bg-Blue-950"
      } text-White font-[500] py-3 px-7 rounded-md hover:bg-Blue-900 float-right cursor-pointer`}
      onClick={() => updateStep(isLastStep ? 0 : 1)}
    >
      {isLastStep ? "Confirm " : "Next Step"}
    </button>
  );
};

export default NextButton;
