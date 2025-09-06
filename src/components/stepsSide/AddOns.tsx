import TopSection from "../TopSection";
import { AddOnsSectionTop } from "../../data/data";
const AddOns = () => {
  return (
    <div>
      {AddOnsSectionTop.map((add) => (
        <TopSection key={add.title} title={add.title} desc={add.desc} />
      ))}
    </div>
  );
};

export default AddOns;
