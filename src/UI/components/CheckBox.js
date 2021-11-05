import { useState } from "react";
export const CheckBox = ({ isComplete, el, handleUpdateTodo }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    el.complete = true;

    setIsChecked(true);
    handleUpdateTodo(el);
  };

  return (
    <input
      style={{ marginRight: "20px" }}
      type="checkbox"
      checked={isComplete ? isComplete : isChecked}
      onChange={handleOnChange}
    />
  );
};
