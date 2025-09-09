import Step from "./Step";
import { steps } from "../../data/data";

const StepsProcess = () => {
  return (
    <div className="relative">
      <img src="/images/bg-sidebar-desktop.svg" alt="sidebar background" />
      <div className="absolute top-10 left-10 ">
        {steps.map((step, index) => (
          <Step
            key={step.number}
            number={step.number}
            label={step.label}
            desc={step.desc}
            isFirst={index === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default StepsProcess;
