import React from "react";

import { Input } from "./components/Input";
import { RANDOM_USER_URL } from "./constants/api";
import logo from "./logo.svg";

import { useFetch } from "./hooks/useFetch";
import { useLocalstorage } from "./hooks/useLocalstorage";

import "./App.css";

function App() {
  const { isLoading, data } = useFetch({ url: RANDOM_USER_URL });
  const {
    getStorageValue,
    setStorageValue,
    clearStorage,
    value,
    storageError,
  } = useLocalstorage();
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Input />
        </div>
        <div>
          {value}
          <button onClick={() => setStorageValue("math", Math.random())}>
            SET
          </button>
          <button onClick={() => getStorageValue("math")}>GET</button>
          <button onClick={() => clearStorage()}>Clear</button>
        </div>
        <div>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      </header>
    </div>
  );
}

export default App;
