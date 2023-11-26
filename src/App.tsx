import React from "react";

import { RANDOM_USER_URL } from "./constants/api";
import logo from "./logo.svg";

import { useFetch } from "./hooks/useFetch";

import "./App.css";

function App() {
  const { isLoading, data } = useFetch({ url: RANDOM_USER_URL });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      </header>
    </div>
  );
}

export default App;
