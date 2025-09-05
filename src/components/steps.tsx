const StepsProcess = () => {
  return (
    <div className="relative">
      <img src="/images/bg-sidebar-desktop.svg" />
      <div className="absolute top-10 left-10">
        <div className="flex items-center  space-x-4">
          <div className="w-8 h-8 rounded-full flex items-center justify-center border-1 border-White">
            <span className="text-White">1</span>
          </div>
          <div>
            <span className="text-Grey-500  text-[13px] font-[400]">
              STEP 1
            </span>
            <p className="text-White text-[13px] font-[500]">YOUR INFO</p>
          </div>
        </div>
        <div className="flex items-center  pt-8 space-x-4">
          <div className="w-8 h-8 rounded-full flex items-center justify-center border-1 border-White">
            <span className="text-White ">2</span>
          </div>
          <div>
            <span className="text-Grey-500 text-[13px] font-[400]">STEP 2</span>
            <p className="text-White text-[13px] font-[500]">SELECT PLAN</p>
          </div>
        </div>
        <div className="flex items-center  pt-8 space-x-4">
          <div className="w-8 h-8 rounded-full flex items-center justify-center border-1 border-White">
            <span className="text-White ">3</span>
          </div>
          <div>
            <span className="text-Grey-500 text-[13px] font-[400]">STEP 3</span>
            <p className="text-White text-[13px] font-[500]">ADD-ONS</p>
          </div>
        </div>
        <div className="flex items-center pt-8 space-x-4 ">
          <div className="w-8 h-8 rounded-full flex items-center justify-center border-1 border-White">
            <span className="text-White ">4</span>
          </div>
          <div>
            <span className="text-Grey-500 text-[13px] font-[400]">STEP 4</span>
            <p className="text-White text-[13px] font-[500]">SUMMARY</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsProcess;
