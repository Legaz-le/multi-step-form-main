const SummaryBody = () => {
  return (
    <div className="flex gap-4 flex-col">
      <div className="bg-Blue-100 p-4 rounded-lg flex flex-col gap-4">
        <div className="flex-body">
          <div>
            <h3>Arcady(Montly)</h3>
            <p>Change</p>
          </div>
          <span>$9/mo</span>
        </div>
        <div className="border-1" />
        <div className="">
          <div className="flex-body">
            <p>Online service</p>
            <span>+$1/mo</span>
          </div>
          <div className="flex-body">
            <p>Large storage</p>
            <span>+$1/mo</span>
          </div>
        </div>
      </div>
      <div className="bg-Blue-100 p-4 rounded-lg flex-body">
        <p>Total(per month)</p>
        <span>10$/mo</span>
      </div>
    </div>
  );
};

export default SummaryBody;
