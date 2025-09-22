import { steps } from "../../data/data";

import Step from "./Step";

const StepsProcess = () => {
  return (
    <div className="relative ">
      <picture>
        <source media="(min-width:426px)" srcSet="/images/bg-sidebar-desktop.svg" />
      <img src="/images/bg-sidebar-mobile.svg" alt="sidebar background" />
      </picture>
      <div className="absolute top-10 left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0 flex flex-row md:flex-col space-x-4 md:space-y-0">
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
