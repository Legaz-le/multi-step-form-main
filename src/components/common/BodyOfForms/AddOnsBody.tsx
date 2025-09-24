import {useFormContext as useRHFContext} from "react-hook-form";

import type { AddOnsType, FormValues } from "../../../types/types";
import type { UseFormRegister } from "react-hook-form";

interface addOnsProps extends AddOnsType {
  register: UseFormRegister<FormValues>;
  selectedPlan: string[];
}

const AddOnsBody = ({
  title,
  desc,
  price,
  register,
  selectedPlan,
}: addOnsProps) => {
  const services = selectedPlan?.includes(title);
  const { watch } = useRHFContext<FormValues>();
  const billing = watch("billing", "monthly");
  return (
    <label
      className={`body ${
        services ? "border-Purple-600" : "border-gray-300"
      }`}
    >
      <div className="flex-center md:gap-6 gap-2">
        <div className="relative inline-flex items-center">
          <input
            type="checkbox"
            value={title}
            aria-label={title}
            className="peer appearance-none  w-4.5 h-4.5 border rounded-sm checked:bg-Purple-600"
            {...register("addOns",
            {
              validate: (value) =>
                (value.length > 0) ||
                "Please select at least one add-on",
            })}
          />
          <img
            src="/images/icon-checkmark.svg"
            alt="icon-checkmark"
            className="hidden absolute inset-0 m-auto w-3 h-3 peer-checked:block "
          />
        </div>
        <div>
          <h1 className="main-button text-md">{title}</h1>
          <p className="text-Grey-500 font-[500] text-[13px]">{desc}</p>
        </div>
      </div>
      <span className="text-Purple-600 font-[500] text-sm">{billing === "monthly" ? price.monthly : price.yearly}</span>
    </label>
  );
};

export default AddOnsBody;
