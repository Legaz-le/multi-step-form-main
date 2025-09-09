import TopSection from "../../common/TopSection";
import { sectionHeaders } from "../../../data/data";
import { useFormContext } from "../../../context/FormContext";

const StepSummary = () => {
    const {state} = useFormContext();
  return (
    <div className="space-y-9">
      <TopSection
        stepNumber={sectionHeaders[state.step - 1].stepNumber}
        title={sectionHeaders[state.step - 1].title}
        desc={sectionHeaders[state.step - 1].desc}
      />
      <div>
      </div>
    </div>
  );
};

export default StepSummary;
