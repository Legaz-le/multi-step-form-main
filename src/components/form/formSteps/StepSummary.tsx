import { useFormContext } from "../../../context/FormContext";
import { sectionHeaders } from "../../../data/data";
import SummaryBody from "../../common/BodyOfForms/SummaryBody";
import TopSection from "../../common/BodyOfForms/TopSection";

const StepSummary = () => {
  const { state } = useFormContext();
  return (
    <div className="space-y-9">
      <TopSection
        stepNumber={sectionHeaders[state.step - 1].stepNumber}
        title={sectionHeaders[state.step - 1].title}
        desc={sectionHeaders[state.step - 1].desc}
      />
      <SummaryBody />
    </div>
  );
};

export default StepSummary;
