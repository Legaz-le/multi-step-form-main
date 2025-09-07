import { useFormContext } from "../context/useFormContex";

const Button = () => {
  const { updateStep } = useFormContext();

  return (
    <div>
      <button
        type="button"
        className="bg-Blue-950 text-White font-[500] py-3 px-7 rounded-md hover:bg-Blue-900 float-right cursor-pointer"
        onClick={() =>updateStep(1)}
      >
        Next Step
      </button>
    </div>
  );
};

export default Button;
