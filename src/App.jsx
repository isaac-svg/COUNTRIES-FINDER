import React from "react";
import MainPage from "./components/MainPage";
import ThemeProvider from "./context/ThemeProvider";
const App = () => {
  return (
    <ThemeProvider>
      <MainPage />
    </ThemeProvider>
  );
};

export default App;
