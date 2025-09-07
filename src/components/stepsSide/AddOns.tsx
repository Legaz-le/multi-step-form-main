import TopSection from "../TopSection";
import { sectionHeaders, addOnsData } from "../../data/data";
import AddOnsBody from "../AddOnsBody";
import Button from "../Button";
import { useFormContext } from "../../context/useFormContex";

const AddOns = () => {
  const { state, updateStep } = useFormContext();

  return (
    <section className="space-y-9">
      <TopSection
        stepNumber={sectionHeaders[state.step - 3].stepNumber}
        title={sectionHeaders[state.step - 3].title}
        desc={sectionHeaders[state.step - 3].desc}
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
      <div className="flex items-center justify-between mt-30">
        <button
          type="button"
          onClick={() => updateStep(-1)}
          className="text-Grey-500 font-[700] cursor-pointer"
        >
          Go Back
        </button>
        <Button />
      </div>
    </section>
  );
};

export default AddOns;
