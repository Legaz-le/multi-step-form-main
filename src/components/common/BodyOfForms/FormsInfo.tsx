import { getValidationRules } from "../../utils/ValidationRules";

import type { FormType } from "../../../types/types";
import type { FieldErrors, UseFormRegister } from "react-hook-form";


interface FormsProps extends FormType {
  register: UseFormRegister<any>;
  errors?: FieldErrors;
}

const Forms = ({ name, type, placeholder, register, errors }: FormsProps) => {
  return (
    <label className="block cursor-pointer">
      <div className="flex items-center justify-between mt-2 mb-1">
        <p className="text-Blue-950 font-[500] text-[14px] ">{name}</p>
        {errors && errors[name] && (
          <p className="text-[14px] font-[500] text-Red-500">
            This field is required
          </p>
        )}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className="border border-Purple-200 rounded-md p-2 w-full hover:border-Purple-600 cursor-pointer"
        {...register(name, getValidationRules(type))}
      />
    </label>
  );
};

export default Forms;
