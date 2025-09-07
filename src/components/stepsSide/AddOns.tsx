import TopSection from "../TopSection";
import { sectionHeaders, addOnsData } from "../../data/data";
import AddOnsBody from "../AddOnsBody";
import Button from "../Button";
const AddOns = () => {
  return (
    <div className="space-y-9">
      {sectionHeaders.map((section) => (
        <TopSection
          key={section.stepNumber}
          stepNumber={section.stepNumber}
          title={section.title}
          desc={section.desc}
        />
      ))}
      <div className="space-y-5">
        {addOnsData.map((addInfo) => (
          <AddOnsBody
            key={addInfo.title}
            title={addInfo.title}
            desc={addInfo.desc}
            price={addInfo.price}
          />
        ))}
      </div>
      <div className="flex items-center justify-between mt-30">
        <button className="text-Grey-500 font-[700]">Go Back</button>
        <Button />
      </div>
    </div>
  );
};

export default AddOns;
