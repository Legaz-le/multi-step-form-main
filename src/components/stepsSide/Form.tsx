import { useFormContext } from "../../context/useFormContex";
import Button from "../Button";
import Forms from "../FormsInfo";
import { formInfo, sectionHeaders } from "../../data/data";
import TopSection from "../TopSection";

const Form = () => {
  const { state, } = useFormContext();

  return (
    <section>
      <TopSection
        stepNumber={sectionHeaders[state.step - 1].stepNumber}
        title={sectionHeaders[state.step - 1].title}
        desc={sectionHeaders[state.step - 1].desc}
      />
      {state.step === 1 && (
        <form className="flex flex-col justify-between h-[465px]">
          <div>
            {formInfo.map((info) => (
              <Forms
                key={info.name}
                name={info.name}
                type={info.type}
                placeholder={info.placeholder}
              />
            ))}
          </div>
          <Button />
        </form>
      )}
    </section>
  );
};

export default Form;
