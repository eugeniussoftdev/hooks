import React, { useEffect, useState } from "react";

import { useDebounce } from "../hooks/useDebounce";

export const Input = () => {
  const [inputValue, setInputValue] = useState("");
  const { debouncedValue } = useDebounce(inputValue, 1000, (debounced: any) => {
    console.log("Debounced Value:", debounced);
  });

  useEffect(() => {
    console.log("*** Debounce Value in Effect", debouncedValue);
  }, [debouncedValue]);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>Debounced Value: {debouncedValue}</p>
    </div>
  );
};
