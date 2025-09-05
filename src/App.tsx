import Form from "./components/formSides/Form";
import StepsProcess from "./components/formSides/steps";

const App = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-Blue-200">
      <div className="flex item-center bg-White p-5 max-w-4xl w-full  rounded-lg shadow-lg space-x-20">
        <StepsProcess />
        <Form />
      </div>
    </div>
  );
};

export default App;
