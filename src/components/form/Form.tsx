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
    <div className="md:h-[410px] h-screen  md:w-md bg-Blue-200 md:bg-White flex flex-col justify-end md:block">
      <div className="bg-Blue-100   md:bg-white ">
        <div className="absolute md:static  top-19 md:bottom-0  md:p-0 md:m-0 p-6 m-5  bg-White rounded-lg">
        <CurrentStep />
        </div>
      </div>
      <div
        className={`p-2 md:p-0  mt-10 bg-White flex  ${
          CurrentStep !== Form ? "justify-between items-center" : "justify-end"
        }`}
      >
        {CurrentStep !== Form && <GoBackButton />}
        <NextButton />
      </div>
    </div>
  );
};

export default WriteSide;
