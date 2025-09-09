import AddOns from "./steps/StepAddOns";
import Form from "./steps/StepPersonalInfo";
import SecondStep from "./steps/StepPlan";
import StepSummary from "./steps/StepSummary";
import { useFormContext } from "../../context/FormContext";
import NextButton from "../common/buttons/NextButton";
import GoBackButton from "../common/buttons/GoBackButton";

const WriteSide = () => {
  const { state } = useFormContext();
  const stepsComponents = [Form, SecondStep, AddOns, StepSummary];
  const CurrentStep = stepsComponents[state.step - 1];

  return (
    <div className="h-[410px] w-md">
      <div className="h-full">
        <CurrentStep />
      </div>
      <div
        className={`mt-10 ${
          CurrentStep !== Form
            ? "flex items-center justify-between"
            : "flex justify-end"
        }`}
      >
        {CurrentStep !== Form && <GoBackButton />}
        <NextButton />
      </div>
    </div>
  );
};

export default WriteSide;
