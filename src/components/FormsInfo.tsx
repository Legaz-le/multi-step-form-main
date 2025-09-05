type FormType = {
  name: string;
  type: string;
  placeholder: string;
};

const Forms = ({ name, type, placeholder }: FormType) => {
  return (
    <label className="block pt-5">
      <p className="text-Blue-900 font-[500] text-[14px] pt-2 pb-1">{name}</p>
      <input
        type={type}
        placeholder={placeholder}
        className="border border-Purple-200 rounded-md p-2 w-full "
      />
    </label>
  );
};

export default Forms;
