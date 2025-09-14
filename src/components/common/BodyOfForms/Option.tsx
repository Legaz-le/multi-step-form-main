import type { FormValues, OptionType } from "../../../types/types";
import type { UseFormRegister } from "react-hook-form";

interface OptionProps extends OptionType {
  register: UseFormRegister<FormValues>;
  selectedPlan: string;
}

export  const Option = ({ img, alt, name, price, register, selectedPlan }: OptionProps) => {
  const isSelected = selectedPlan === name;
  return (
    <label className={`option-body   ${isSelected ? "border-Purple-600 bg-Blue-50" : "border-gray-300"}`}>
      <input
        type="radio"
        value={name} 
        {...register("plan", { required: "Please select a plan" })}
        className="hidden" 
      />
      <img src={img} alt={alt} />
      <div className="w-[100px]">
        <p className="main-button text-[17px]">{name}</p>
        <span className="text-Grey-500 text-[15px] font-[700]">{price}</span>
        <p className="text-Blue-950 font-[520] text-[13px]">2 months free</p>
      </div>
    </label>
  );
};

export default Option;
