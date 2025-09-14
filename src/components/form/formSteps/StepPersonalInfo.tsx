import { useFormContext as useRHFContext } from "react-hook-form";

import { useFormContext } from "../../../context/FormContext";
import { formInfo, sectionHeaders } from "../../../data/data";
import Forms from "../../common/BodyOfForms/FormsInfo";
import TopSection from "../../common/BodyOfForms/TopSection";

import type { FormValues } from "../../../types/types";

const Form = () => {
  const { state } = useFormContext();
  const { register, formState: { errors } } = useRHFContext<FormValues>();

  return (
    <section className="space-y-9 ">
      <TopSection
        stepNumber={sectionHeaders[state.step - 1].stepNumber}
        title={sectionHeaders[state.step - 1].title}
        desc={sectionHeaders[state.step - 1].desc}
      />
      <form className="space-y-3">
        {formInfo.map((info) => (
          <Forms
            key={info.name}
            name={info.name}
            type={info.type}
            placeholder={info.placeholder}
            register={register}
            errors={errors}
          />
        ))}
      </form>
    </section>
  );
};

export default Form;
