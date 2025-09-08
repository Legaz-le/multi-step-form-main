import AddOns from "../stepsSide/AddOns";
import Form from "../stepsSide/Form";
import SecondStep from "../stepsSide/SecondStep";
import { useFormContext } from "../../context/FormContext";
import NextButton from "../NextButton";
import GoBackButton from "../GoBackButton";

const WriteSide = () => {
  const { state } = useFormContext();
  const stepsComponents = [Form, SecondStep, AddOns];
  const CurrentStep = stepsComponents[state.step - 1];

  return (
    <div className="h-[410px] w-md">
      <div className="h-full">
        <CurrentStep />
      </div>
      <div className={`mt-10 ${CurrentStep !== Form ? "flex items-center justify-between" :"flex justify-end"}`}>
        {CurrentStep !== Form && (
            <GoBackButton />
        )}
        <NextButton />
      </div>
    </div>
  );
};

export default WriteSide;
