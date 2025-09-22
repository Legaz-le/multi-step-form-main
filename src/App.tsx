import { HandleForms } from "./components/common/hooks/HandleFormsValidation/HandleForms";
import WriteSide from "./components/form/Form";
import StepsProcess from "./components/stpes/steps";

const App = () => {
  return (
    <div className="flex justify-center md:items-center min-h-screen bg-Blue-200 ">
      <div className="flex  flex-col md:flex-row bg-White md:p-4 md:max-w-4xl  w-full  md:rounded-lg shadow-lg md:space-x-20 h-full">
        <StepsProcess />
        <HandleForms>
          <WriteSide />
        </HandleForms>
      </div>
    </div>
  );
};

export default App;
