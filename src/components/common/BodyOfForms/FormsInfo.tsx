import { getValidationRules } from "../../utils/ValidationRules";

import type { FormType, FormValues } from "../../../types/types";
import type { FieldErrors, UseFormRegister} from "react-hook-form";


interface FormsProps<K extends keyof FormValues> extends Omit<FormType<K>, "key"> {
  fieldKey: K;
  register: UseFormRegister<FormValues>;
  errors?: FieldErrors<FormValues>;
}

const Forms = <K extends keyof FormValues>({ fieldKey, label, type, placeholder, register, errors }: FormsProps<K>) => {
  return (
    <label className="block cursor-pointer">
      <div className="flex items-center justify-between mt-2 mb-1">
        <p className="text-Blue-950 font-[500] text-[14px] ">{label}</p>
        {errors?.[fieldKey] && (
          <p className="text-[14px] font-[500] text-Red-500">
            {errors[fieldKey]?.message?.toString()}
          </p>
        )}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className="border border-Purple-200 rounded-md p-2 w-full hover:border-Purple-600 cursor-pointer"
        {...register(fieldKey, getValidationRules(fieldKey, type)as any)}
      />
    </label>
  );
};

export default Forms;
