import { useState } from "react";

// Custom react hook for counter
const useCount = (props) => {

  const { initialState = 0, changeByValue = 1 } = props;

  const [count, setCount] = useState(initialState);

  const decrement = () => {
    setCount((prevCount) => prevCount - changeByValue);
  };

  const increment = () => {
    setCount((prevCount) => prevCount + changeByValue);
  }

  const reset = () => {
    setCount(0);
  }

  return {count, increment, decrement, reset};
}

export default useCount;
