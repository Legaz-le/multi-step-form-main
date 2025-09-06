import type { TitleType } from "../types/types";

const TopSection = ({title, desc}:TitleType) => {
  return (
    <div className="pt-8 space-y-1">
      <h1 className="text-2xl text-Blue-950 font-[700]">{title}</h1>
      <p className="text-[16px] text-Grey-500 font-[400]">
        {desc}
      </p>
    </div>
  );
};

export default TopSection;
