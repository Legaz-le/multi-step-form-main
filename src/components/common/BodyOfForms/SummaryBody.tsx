import { useFormContext as useRHFContext } from "react-hook-form";

import { option, addOnsData } from "../../../data/data";

import type { FormValues } from "../../../types/types";

const SummaryBody = () => {
  const { getValues, setValue, watch } = useRHFContext<FormValues>();
  const values = getValues();
  const plan = option.find((p) => p.name === values.plan);
  const billing = watch("billing", "monthly");
  const planPrice = Number(
    billing === "monthly"
      ? plan?.price.monthly.replace(/[^0-9]/g, "") || 0
      : plan?.price.yearly.replace(/[^0-9]/g, "") || 0
  );
  const selectedAddOns = addOnsData.filter((a) =>
    values.addOns.includes(a.title)
  );
  const addOnsTotal = selectedAddOns.reduce((sum, addOn) => {
    return (
      sum +
      Number(
        billing === "monthly"
          ? addOn.price.monthly.replace(/[^0-9]/g, "")
          : addOn.price.yearly.replace(/[^0-9]/g, "")
      )
    );
  }, 0);
  const totalPrice = planPrice + addOnsTotal;

  return (
    <div className="flex gap-4 flex-col ">
      <div className="bg-Blue-100 p-4 rounded-lg flex flex-col gap-5">
        <div className="flex-body">
          <div>
            <h3 className="main-button">
              {values.plan} ({billing})
            </h3>
            <button
            onClick={() =>
                setValue(
                  "billing",
                  billing === "monthly" ? "yearly" : "monthly"
                )
              }
              className="hover:text-Blue-950 cursor-pointer text-Grey-500 font-[500] underline"
            >
              Change
            </button>
          </div>
          <span className="main-button">
            ${planPrice}
            {billing === "monthly" ? "/mo" : "/yr"}
          </span>
        </div>
        <hr className=" border-Purple-200" />
        <div className="space-y-3 mb-3">
          {selectedAddOns.map((addOns) => (
            <div className="flex-body">
              <p className="text-Grey-500">{addOns.title}</p>
              <span className="text-Blue-950">
                {billing === "monthly"
                  ? addOns.price.monthly
                  : addOns.price.yearly}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className=" p-4 rounded-lg flex-body">
        <p className="text-Grey-500">Total ({billing})</p>
        <span className="text-[20px] text-Purple-600 font-[700]">
          {billing === "monthly" ? ` $${totalPrice}/mo` : `$${totalPrice}/yr`}
        </span>
      </div>
    </div>
  );
};

export default SummaryBody;
