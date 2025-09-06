import TopSection from "../TopSection";
import { addOnsData, AddOnsSectionTop } from "../../data/data";
import AddOnsBody from "../AddOnsBody";
import Button from "../Button";
const AddOns = () => {
  return (
    <div className="space-y-9">
      {AddOnsSectionTop.map((add) => (
        <TopSection key={add.title} title={add.title} desc={add.desc} />
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
