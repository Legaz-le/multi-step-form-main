import AddOns from "../stepsSide/AddOns";
import Form from "../stepsSide/Form";
import SecondStep from "../stepsSide/SecondStep";
import { useFormContext } from "../../context/useFormContex";

const WriteSide = () => {
  
  const { state } = useFormContext();
  const stepsComponents = [Form, SecondStep, AddOns];
  const CurrentStep = stepsComponents[state.step - 1];

  return <CurrentStep />;
};

export default WriteSide;
