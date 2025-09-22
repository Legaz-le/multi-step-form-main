import { useFormContext as useRHFContext } from "react-hook-form";

import { useFormContext } from "../../../context/FormContext";
import { option, sectionHeaders } from "../../../data/data";
import Option from "../../common/BodyOfForms/Option";
import TopSection from "../../common/BodyOfForms/TopSection";

import type { FormValues } from "../../../types/types";

const SecondStep = () => {
  const { state } = useFormContext();
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useRHFContext<FormValues>();

  const selectedPlan = watch("plan");
  const billing = watch("billing", "monthly");

  return (
    <section className="md:space-y-9 space-y-3">
      <TopSection
        stepNumber={sectionHeaders[state.step - 1].stepNumber}
        title={sectionHeaders[state.step - 1].title}
        desc={sectionHeaders[state.step - 1].desc}
      />
      <div className="md:grid grid-cols-3 flex flex-col gap-2">
        {option.map((info) => (
          <Option
            key={info.name}
            img={info.img}
            alt={info.alt}
            name={info.name}
            price={info.price}
            register={register}
            selectedPlan={selectedPlan}
            billing={billing}
          />
        ))}
        {errors.plan && (
          <p className="text-Red-500 text-sm">{errors.plan.message}</p>
        )}
      </div>
      <div className="p-3 bg-Blue-50 flex-center gap-5">
        <p className={` ${billing === "monthly" ? "text-Blue-950" : "text-Grey-500"}`}>Montly</p>
        <label
          htmlFor="hs-basic-usage"
          className="relative inline-block w-11 h-5 cursor-pointer"
        >
          <input
            type="checkbox"
            checked={billing === "yearly"}
            onChange={() => setValue("billing", billing === "monthly" ? "yearly" : "monthly")}
            id="hs-basic-usage"
            className="peer sr-only"
          />
          <span className="absolute inset-0 bg-Blue-950 rounded-full transition-color duration-200 ease-in-out" />
          <span className="toggle"></span>
        </label>
        <p className={`font-[700] ${billing === "yearly" ? "text-Blue-950" : "text-Grey-500"}`}>Yearly</p>
      </div>
    </section>
  );
};

export default SecondStep;
