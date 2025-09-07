import { useFormContext } from "../../context/useFormContex";
import Forms from "../FormsInfo";
import { formInfo, sectionHeaders } from "../../data/data";
import TopSection from "../TopSection";
import NextButton from "../NextButton";

const Form = () => {
  const { state } = useFormContext();

  return (
    <section className="space-y-9 w-md">
      <TopSection
        stepNumber={sectionHeaders[state.step - 1].stepNumber}
        title={sectionHeaders[state.step - 1].title}
        desc={sectionHeaders[state.step - 1].desc}
      />
      <form className="space-y-3">
        {formInfo.map((info) => (
          <Forms
            key={info.name}
            name={info.name}
            type={info.type}
            placeholder={info.placeholder}
          />
        ))}
      </form>
      <div className="mt-20">
      <NextButton />
      </div>
    </section>
  );
};

export default Form;
