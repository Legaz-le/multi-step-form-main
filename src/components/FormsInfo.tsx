import type { FormType } from "../types/types";

const Forms = ({ name, type, placeholder }: FormType) => {
  return (
    <label className="block pt-5 cursor-pointer">
      <div className="flex item-scenter justify-between pt-2 pb-1">
        <p className="text-Blue-950 font-[500] text-[14px] ">{name}</p>
        <p className="text-[14px] font-[500] text-Red-500 hidden">This field is required</p>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className="border border-Purple-200 rounded-md p-2 w-full hover:border-Purple-600"
      />
    </label>
  );
};

export default Forms;
