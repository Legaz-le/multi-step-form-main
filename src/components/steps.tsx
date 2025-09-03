const StepsProcess = () => {
  return (
    <div className="relative">
      <img src="/public/images/bg-sidebar-desktop.svg" />
      <div className="absolute top-10 left-10 spacye-y-8">
        <div className="flex items-center justify-center">
          <div className="w-8 h-8 rounded-full flex items-center jutify-center border-1 border-White ">
            <span className="text-White ml-2.5">1</span>
          </div>
          <span className="text-Grey-500 ml-4 text-[13px] font-[400]">STEP 1</span>
        </div>
        <div className="flex items-center justify-center pt-8">
          <div className="w-8 h-8 rounded-full flex items-center jutify-center border-1 border-White">
            <span className="text-White ml-2.5">2</span>
          </div>
          <span className="text-Grey-500 ml-4 text-[13px] font-[400]">STEP 2</span>
        </div>
        <div className="flex items-center justify-center pt-8">
          <div className="w-8 h-8 rounded-full flex items-center jutify-center border-1 border-White">
            <span className="text-White ml-2.5">3</span>
          </div>
          <span className="text-Grey-500 ml-4 text-[13px] font-[400]">STEP 3</span>
        </div>
        <div className="flex items-center justify-center pt-8">
          <div className="w-8 h-8 rounded-full flex items-center jutify-center border-1 border-White">
            <span className="text-White ml-2.5">4</span>
          </div>
          <span className="text-Grey-500 ml-4 text-[13px] font-[400]">STEP 4</span>
        </div>
      </div>
    </div>
  );
};

export default StepsProcess;
