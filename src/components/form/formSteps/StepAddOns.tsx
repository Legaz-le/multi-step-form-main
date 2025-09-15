import { useFormContext as useRHFContext } from "react-hook-form";

import { useFormContext } from "../../../context/FormContext";
import { sectionHeaders, addOnsData } from "../../../data/data";
import AddOnsBody from "../../common/BodyOfForms/AddOnsBody";
import TopSection from "../../common/BodyOfForms/TopSection";

import type { FormValues } from "../../../types/types";

const AddOns = () => {
  const { state } = useFormContext();
  const { register, watch, formState: { errors },} = useRHFContext<FormValues>()
  const selectedPlan = watch("addOns",[]);

  return (
    <section className="space-y-9 ">
      <TopSection
        stepNumber={sectionHeaders[state.step - 1].stepNumber}
        title={sectionHeaders[state.step - 1].title}
        desc={sectionHeaders[state.step - 1].desc}
      />
      <div className="space-y-5">
        {addOnsData.map((addInfo) => (
          <AddOnsBody
            key={addInfo.title}
            title={addInfo.title}
            desc={addInfo.desc}
            price={addInfo.price}
            register={register}
            selectedPlan={selectedPlan}
          />
        ))}
        {errors.addOns && (
        <p className="text-Red-500 text-sm">{errors.addOns.message}</p>
      )}
      </div>
    </section>
  );
};

export default AddOns;
