import type { AddOnsType } from "../types/types";

const AddOnsBody = ({ title, desc, price }: AddOnsType) => {
  return (
    <label className="flex items-center justify-between border rounded-sm px-5 py-3  cursor-pointer hover:border-Purple-600">
      <div className="flex items-center justify-center gap-6">
        <label className="relative inline-flex items-center">
          <input
            type="checkbox"
            className="peer appearance-none  w-4.5 h-4.5 border rounded-sm checked:bg-Purple-600"
          />
          <img
            src="/images/icon-checkmark.svg"
            alt="icon-checkmark"
            className="hidden absolute inset-0 m-auto w-3 h-3 peer-checked:block "
          />
        </label>
        <div>
          <h1 className="text-Blue-950 font-[700]">{title}</h1>
          <p className="text-Grey-500 font-[500]">{desc}</p>
        </div>
      </div>
      <span className="text-Purple-600 font-[500]">{price}</span>
    </label>
  );
};

export default AddOnsBody;
