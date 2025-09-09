import StepsProcess from "./components/stpes/steps";
import WriteSide from "./components/form/Form";

const App = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-Blue-200">
      <div className="flex item-center bg-White p-4 max-w-4xl w-full  rounded-lg shadow-lg space-x-20">
        <StepsProcess />
        <WriteSide />
      </div>
    </div>
  );
};

export default App;
