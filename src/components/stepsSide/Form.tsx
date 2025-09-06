import Button from "../Button";
import Forms from "../FormsInfo";

const formInfo = [
  { name: "Name", type: "text", placeholder: "e.g. Stephen King" },
  {
    name: "Email Address",
    type: "email",
    placeholder: "e.g. stephenking@lorem.com",
  },
  {
    name: "Phone Number",
    type: "tel",
    placeholder: "e.g. +1 234 567 890",
  },
];

const Form = () => {
  return (
    <div>
      <div className="pt-8 space-y-1">
        <h1 className="text-2xl text-Blue-950 font-[700]">Personal info</h1>
        <p className="text-[16px] text-Grey-500 font-[400]">
          Please provide your name, email address, and phone number.
        </p>
      </div>
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
