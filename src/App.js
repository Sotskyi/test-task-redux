import React from "react";

import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { NavBar } from "./UI/components/NavBar";
const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
