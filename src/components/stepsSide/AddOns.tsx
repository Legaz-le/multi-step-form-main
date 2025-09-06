import TopSection from "../TopSection";
import { addOnsData, AddOnsSectionTop } from "../../data/data";
import AddOnsBody from "../AddOnsBody";
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
    </div>
  );
};

export default AddOns;
