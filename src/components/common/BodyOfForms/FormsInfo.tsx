import { getValidationRules } from "../../utils/ValidationRules";

import type { FormType, FormValues } from "../../../types/types";
import type { FieldErrors, UseFormRegister } from "react-hook-form";

interface FormsProps<K extends keyof FormValues> extends Omit<FormType, "key"> {
  fieldKey: K;
  register: UseFormRegister<FormValues>;
  errors?: FieldErrors<FormValues>;
}

const Forms = <K extends keyof FormValues>({
  fieldKey,
  label,
  type,
  placeholder,
  register,
  errors,
}: FormsProps<K>) => {
  const errorMessage = errors?.[fieldKey]?.message?.toString();
  const errorId = `${String(fieldKey)}-error`;
  return (
    <label className="block cursor-pointer">
      <div className="flex items-center justify-between mt-2 mb-1">
        <p className="text-Blue-950 font-[500] text-[14px] ">{label}</p>
        {errorMessage && (
          <p
            id={errorId}
            role="alert"
            aria-atomic="true"
            className="text-[14px] font-[500] text-Red-500"
          >
            {errorMessage}
          </p>
        )}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        aria-invalid={errors?.[fieldKey] ? "true" : "false"}
        aria-describedby={errors?.[fieldKey] ? `${fieldKey}-error` : undefined}
        className={`border  rounded-md p-2 w-full hover:border-Purple-600 focus:outline-none ${
          errors?.[fieldKey] ? "border-Red-500" : "border-Purple-200"
        }`}
        {...register(fieldKey, getValidationRules(fieldKey, type) as K)}
      />
    </label>
  );
};

export default Forms;
