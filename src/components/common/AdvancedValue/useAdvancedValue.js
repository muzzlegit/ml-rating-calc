import { useState } from "react";

const useAdvancedValue = () => {
  const [values, setValues] = useState({
    "#1": 0,
    "#2": 0,
    "#3": 0,
    "#4": 0,
  });

  const handleValue = (value, key) => {
    const quantity = Number(value);
    if (isNaN(quantity)) return;
    setValues((prev) => ({ ...prev, [key]: quantity }));
  };

  const handleClearValues = () => {
    const clearedValues = {};
    Object.keys(values).forEach((key) => {
      clearedValues[key] = 0;
    });
    setValues(clearedValues);
  };

  return { values, handleValue, handleClearValues };
};

export default useAdvancedValue;
