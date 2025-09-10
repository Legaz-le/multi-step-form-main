import type { OptionType } from "../../../types/types";

export  const Option = ({ img, alt, name, price }: OptionType) => {
  return (
    <div className="option-body">
      <img src={img} alt={alt} />
      <div className="w-[100px]">
        <p className="main-button text-[17px]">{name}</p>
        <span className="text-Grey-500 text-[15px] font-[700]">{price}</span>
        <p className="text-Blue-950 font-[520] text-[13px]">2 months free</p>
      </div>
    </div>
  );
};

export default Option;
