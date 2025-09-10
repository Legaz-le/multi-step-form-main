import type { SectionType } from "../../../types/types";

const TopSection = ({ title, desc }: SectionType) => {
  return (
    <div className="mt-12 space-y-1">
      <h2 className="text-2xl main-button">{title}</h2>
      <p className="text-[16px] text-Grey-500 font-[400]">{desc}</p>
    </div>
  );
};

export default TopSection;
