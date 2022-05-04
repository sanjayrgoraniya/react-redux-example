import React, { useState } from "react";
import Button from "./components/Button";
import CountText from "./components/CountText";
import ChangeByValue from "./components/ChangeByValue";
import useCount from "./hooks/useCount";

const Form = (props) => {
  return (
    <ChangeByValue
      changeByValue={props.changeByValue}
      setChangeByValue={props.setChangeByValue}
    />
  );
};

function App() {
  const [changeByValue, setChangeByValue] = useState(2);
  const { count, decrement, increment, reset } = useCount({
    changeByValue: changeByValue,
  });

  return (
    <div className="container mx-auto h-screen bg-gray-300 p-2 md:p-28">
      <Form 
        changeByValue={changeByValue}
        setChangeByValue={setChangeByValue}
      />
      <div className="p-2 flex flex-col sm:flex-row flex-wrap justify-evenly">
        <Button className="bg-red-400 hover:bg-red-500" onClick={decrement}>
          Decrement
        </Button>
        <CountText count={count} />
        <Button className="bg-green-400 hover:bg-green-500" onClick={increment}>
          Increment
        </Button>
      </div>
      <div className="p-2 flex items-center justify-center">
        <Button className="bg-green-400 hover:bg-green-500" onClick={reset}>
          Reset Count
        </Button>
      </div>
    </div>
  );
}

export default App;
