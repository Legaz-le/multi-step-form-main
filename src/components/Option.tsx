type OptionType = {
  img: string;
  alt: string;
  name: string;
  price: string;
};

const Option = ({ img, alt, name, price }: OptionType) => {
  return (
    <div className="border-Purple-200 border-1  items-start flex flex-col space-y-12 rounded-lg p-4 pr-5 cursor-pointer">
      <img src={img} alt={alt} />
      <div className="w-[100px]">
        <p className="text-Blue-950 font-[700] text-[17px]">{name}</p>
        <span className="text-Grey-500 text-[15px] font-[700]">{price}</span>
        <p className="text-Blue-950 font-[520] text-[13px]">2 months free</p>
      </div>
    </div>
  );
};

export default Option;
