import type { AddOnsType } from "../types/types";


const AddOnsBody = ({title, desc,price}: AddOnsType) => {
  return (
    <div className="flex items-center justify-between border rounded-sm px-5 py-3 w-[440px] ">
      <div className="flex items-center justify-center gap-6">
        <input type="checkbox" />
        <div>
          <h1 className="text-Blue-950 font-[700]">{title}</h1>
          <p className="text-Grey-500 font-[500]">{desc}</p>
        </div>
      </div>
      <span className="text-Purple-600 font-[500]">{price}</span>
    </div>
  );
};

export default AddOnsBody;
