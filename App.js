// App.js
import React from "react";
import Layout from "./components/layout/Layout";
import ContextProvider from "./components/contexts/ContextProvider";

const App = () => {
  return (
    <ContextProvider>
      <Layout />
    </ContextProvider>
  );
};

export default App;
