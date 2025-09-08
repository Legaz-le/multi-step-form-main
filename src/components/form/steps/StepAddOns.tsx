import TopSection from "../../common/TopSection";
import { sectionHeaders, addOnsData } from "../../../data/data";
import AddOnsBody from "../../common/AddOnsBody";
import { useFormContext } from "../../../context/FormContext";

const AddOns = () => {
  const { state } = useFormContext();

  return (
    <section className="space-y-9 ">
      <TopSection
        stepNumber={sectionHeaders[state.step - 1].stepNumber}
        title={sectionHeaders[state.step - 1].title}
        desc={sectionHeaders[state.step - 1].desc}
      />
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
    </section>
  );
};

export default AddOns;
