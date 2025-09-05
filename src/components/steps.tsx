import Step from "./Step";
const steps = [
  { number: 1, label: "STEP 1", desc: "YOUR INFO" },
  { number: 2, label: "STEP 2", desc: "SELECT PLAN" },
  { number: 3, label: "STEP 3", desc: "ADD-ONS" },
  { number: 4, label: "STEP 4", desc: "SUMMARY" },
];

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
