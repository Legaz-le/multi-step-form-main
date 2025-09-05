type StepType = {
  number: number;
  label: string;
  desc: string;
  isFirst:boolean;
};

const Step = ({ number, label, desc, isFirst }: StepType) => {
  return (
    <div className={`flex  items-center  space-x-4 ${!isFirst ? "pt-8" : ""}`}>
      <div className="w-8 h-8 rounded-full flex items-center justify-center border-1 border-White">
        <span className="text-White ">{number}</span>
      </div>
      <div >
        <span className="text-Grey-500 text-[13px] font-[400]">{label}</span>
        <p className="text-White text-[13px] font-[500]">{desc}</p>
      </div>
    </div>
  );
};

export default Step;
