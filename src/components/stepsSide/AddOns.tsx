import TopSection from "../TopSection";
import { sectionHeaders, addOnsData } from "../../data/data";
import AddOnsBody from "../AddOnsBody";
import { useFormContext } from "../../context/useFormContex";
import NextButton from "../NextButton";
import GoBackButton from "../GoBackButton";

const AddOns = () => {
  const { state } = useFormContext();

  return (
    <section className="space-y-9 w-md">
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
      <div className="mt-20 flex items-center justify-between">
        <GoBackButton />
        <NextButton />
      </div>
    </section>
  );
};

export default AddOns;
