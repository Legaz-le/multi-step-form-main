import { useFormContext } from "../../context/FormContext";
import GoBackButton from "../common/buttons/GoBackButton";
import NextButton from "../common/buttons/NextButton";

import AddOns from "./formSteps/StepAddOns";
import Form from "./formSteps/StepPersonalInfo";
import SecondStep from "./formSteps/StepPlan";
import StepSummary from "./formSteps/StepSummary";


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
            ? "flex-body"
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
