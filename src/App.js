import React from "react";
import "./App.css";
import Counter from "./components/counter/Counter";
import { Provider } from "react-redux";

const App = () => {
  return (
    <div className="app">
      <Provider>
        <Counter />
      </Provider>
    </div>
  );
};

export default App;
