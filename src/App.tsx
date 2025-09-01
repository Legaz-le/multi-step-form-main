const App = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-Blue-200">
      <div className="flex item-center bg-White p-5 max-w-4xl w-full  rounded-lg shadow-lg space-x-20">
        <div className="">
          <img src="/public/images/bg-sidebar-desktop.svg"></img>
        </div>
        <div className="">
          <div className="pt-8 space-y-1">
            <h1 className="text-2xl text-Blue-950 font-[700]">Personal info</h1>
            <p className="text-[16px] text-Grey-500 font-[400]">
              Please provide your name, email address, and phone number.
            </p>
          </div>
          <form className="flex flex-col justify-between  h-[480px]">
            <div>
              <label className="block pt-5">
                <p className="text-Blue-900 font-[500] text-[14px] pt-5 pb-1">
                  Name
                </p>
                <input
                  type="text"
                  placeholder="e.g. Stephen King"
                  className="border border-Purple-200 rounded-md p-2 w-full "
                />
              </label>
              <label className="block pt-">
                <p className="text-Blue-900 font-[500] text-[14px] pt-5 pb-1">
                  Email Address
                </p>
                <input
                  type="email"
                  placeholder="e.g. stephenking@lorem.com"
                  className="border border-Purple-200 rounded-md p-2 w-full "
                />
              </label>
              <label className="block pt-">
                <p className="text-Blue-900 font-[500] text-[14px] pt-5 pb-1">
                  Phone Number
                </p>
                <input
                  type="tel"
                  placeholder="e.g. +1 234 567 890"
                  className="border border-Purple-200 rounded-md p-2 w-full "
                />
              </label>
            </div>
            <div className="flex justify-end">
              <button className="mt-10 bg-Blue-950 text-White font-[500] py-3 px-7 rounded-md hover:bg-Blue-900 float-right ">
                Next Step
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
