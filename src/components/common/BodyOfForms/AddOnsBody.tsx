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
  return (
    <label
      className={`body ${
        services ? "border-Purple-600" : "border-gray-300"
      }`}
    >
      <div className="flex-center gap-6">
        <div className="relative inline-flex items-center">
          <input
            type="checkbox"
            value={title}
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
          <h1 className="main-button">{title}</h1>
          <p className="text-Grey-500 font-[500]">{desc}</p>
        </div>
      </div>
      <span className="text-Purple-600 font-[500]">{price}</span>
    </label>
  );
};

export default AddOnsBody;
