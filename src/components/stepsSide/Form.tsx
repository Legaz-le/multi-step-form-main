import Button from "../Button";
import Forms from "../FormsInfo";
import { formInfo } from "../../data/data";
import TopSection from "../TopSection";
import { FormSectionTop } from "../../data/data";

const Form = () => {
  return (
    <div>
      {FormSectionTop.map((form) => (
        <TopSection
          key={form.title}
          title={form.title}
          desc={form.desc}
        />
      ))}
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
    </div>
  );
};

export default Form;
