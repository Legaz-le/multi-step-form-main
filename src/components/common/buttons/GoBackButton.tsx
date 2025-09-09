import { useFormContext } from "../../../context/FormContext";

const GoBackButton = () => {
  const { updateStep } = useFormContext();

  return (
    <button
      type="button"
      onClick={() => updateStep(-1)}
      className="text-Grey-500 font-[700] cursor-pointer"
    >
      Go Back
    </button>
  );
};

export default GoBackButton;
