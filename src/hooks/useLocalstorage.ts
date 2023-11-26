import { useState } from "react";

export const useLocalstorage = () => {
  const [value, setValue] = useState("");
  const [storageError, setStorageError] = useState<any>("");

  const getStorageValue = (item: string) => {
    try {
      const storedValue = localStorage.getItem(item);
      const parsedValue = storedValue ? JSON.parse(storedValue) : "";
      setValue(parsedValue);
    } catch (error) {
      setStorageError(error);
    }
  };

  const setStorageValue = (key: string, value: any) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      setStorageError(error);
    }
  };

  const clearStorage = () => {
    localStorage.clear();
  };

  return {
    getStorageValue,
    setStorageValue,
    clearStorage,
    value,
    storageError,
  };
};
