import { useState } from "react";
import Button from "./Button";
import Input from "./Input";


const ChangeByValue = (props) => {
  const [changeByValue, setChangeByValue] = useState(props.changeByValue);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if(!changeByValue) {
      return console.error("please enter minimum 1 or greater then 1");
    }
    console.log("handleSubmit: ", changeByValue);
    props.setChangeByValue(changeByValue);
  };

  const handleChange = (event) => {
    /* converting value of changeByValue as number 
    to prevent issue during the calculations */
    setChangeByValue(Number(event.target.value));
  };

  return (
    <form
      className="p-2 flex flex-wrap items-center justify-center"
      onSubmit={handleSubmit}
    >
      <Input
        className="mr-2 w-1/3 grow rounded-lg border-2 border-blue-400 bg-transparent p-2 text-3xl outline-none focus:border-blue-500"
        type="number"
        min={1}
        max={100}
        name="ChangeByValue"
        value={changeByValue}
        onChange={handleChange}
      />
      <Button className="bg-blue-400 hover:bg-blue-500" type="submit">
        Save
      </Button>
    </form>
  );
};

export default ChangeByValue;
