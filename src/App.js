import React from "react";
import "./App.css";
import { GlobalStorage } from "./GlobalContext";
import Header from "./Header";
import Main from "./Main";

const App = () => {
  return (
    <>
      <GlobalStorage>
        <Header />
        <Main />
      </GlobalStorage>
    </>
  );
};

export default App;
