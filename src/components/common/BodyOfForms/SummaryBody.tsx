const SummaryBody = () => {
  return (
    <div className="flex gap-4 flex-col ">
      <div className="bg-Blue-100 p-4 rounded-lg flex flex-col gap-5">
        <div className="flex-body">
          <div>
            <h3 className="main-button">Arcady (Montly)</h3>
            <p className="hover:text-Blue-950 cursor-pointer text-Grey-500 font-[500] underline">Change</p>
          </div>
          <span className="main-button">$9/mo</span>
        </div>
        <hr className=" border-Purple-200" />
        <div className="space-y-3 mb-3">
          <div className="flex-body">
            <p className="text-Grey-500">Online service</p>
            <span className="text-Blue-950">+$1/mo</span>
          </div>
          <div className="flex-body">
            <p className="text-Grey-500">Large storage</p>
            <span className="text-Blue-950">+$1/mo</span>
          </div>
        </div>
      </div>
      <div className=" p-4 rounded-lg flex-body">
        <p className="text-Grey-500">Total (per month)</p>
        <span className="text-[20px] text-Purple-600 font-[700]">$10/mo</span>
      </div>
    </div>
  );
};

export default SummaryBody;
