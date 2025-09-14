import { getValidationRules } from "../../utils/ValidationRules";

import type { FormType, FormValues } from "../../../types/types";
import type { FieldErrors, UseFormRegister} from "react-hook-form";


interface FormsProps extends FormType {
  register: UseFormRegister<FormValues>;
  errors?: FieldErrors<FormValues>;
}

const Forms = ({ name, type, placeholder, register, errors }: FormsProps) => {
  const fieldName = name as keyof FormValues
  return (
    <label className="block cursor-pointer">
      <div className="flex items-center justify-between mt-2 mb-1">
        <p className="text-Blue-950 font-[500] text-[14px] ">{name}</p>
        {errors && errors[fieldName] && (
          <p className="text-[14px] font-[500] text-Red-500">
            This field is required
          </p>
        )}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className="border border-Purple-200 rounded-md p-2 w-full hover:border-Purple-600 cursor-pointer"
        {...register(name as keyof FormValues, getValidationRules(name as keyof FormValues, type))}
      />
    </label>
  );
};

export default Forms;
