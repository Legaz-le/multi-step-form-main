const App = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-Blue-200">
      <div className="flex item-center bg-White p-5 max-w-5xl w-5xl  rounded-lg shadow-lg">
        <div className="flex-1">
          <img src="/public/images/bg-sidebar-desktop.svg"></img>
        </div>
        <div className="flex-1">
          <div className="pt-5 space-y-1">
            <h1 className="text-2xl text-Blue-950 font-[700]">Personal info</h1>
            <p className="text-[16px]">Please provide your name, email address, and phone number.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
