import Button from "../Button";
import Option from "../Option";
import { option } from "../../data/index";
import TopSection from "../TopSection";
import { SecondSectionTop } from "../../data/data";

const SecondStep = () => {
  return (
    <div className="flex flex-col space-y-9 ">
      {SecondSectionTop.map((second)=>(
        <TopSection 
        key={second.title}
        title={second.title}
        desc={second.desc}
      />
      ))}
      <div className="grid grid-cols-3 gap-5">
        {option.map((info) => (
          <Option
            key={info.name}
            img={info.img}
            alt={info.alt}
            name={info.name}
            price={info.price}
          />
        ))}
      </div>
      <div className="p-3 bg-Blue-50 flex items-center justify-center gap-5">
        <p className="text-Blue-950 font-[700]">Montly</p>
        <label
          htmlFor="hs-basic-usage"
          className="relative inline-block w-11 h-5 cursor-pointer"
        >
          <input type="checkbox" id="hs-basic-usage" className="peer sr-only" />
          <span className="absolute inset-0 bg-Blue-950 rounded-full transition-color duration-200 ease-in-out  " />
          <span className="absolute top-1/2 start-1 -translate-y-1/2 size-3.5 bg-white rounded-full  transition-transform duration-200 ease-in-out peer-checked:translate-x-5.5"></span>
        </label>
        <p className="text-Grey-500 font-[400]">Yearly</p>
      </div>
      <div className="mt-16 flex items-center justify-between">
        <button className="text-Grey-500 font-[700]">Go Back</button>
        <Button />
      </div>
    </div>
  );
};

export default SecondStep;
