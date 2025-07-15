import React from "react";
import WelcomePage from "./components/WelcomePage";
import DashboardPage from "./components/DashboardPage";
import Challenge from "./components/Challenge";

const App = () => {
  const selectedPage = 1; // This can be dynamic based on your app's state or routing
  const pages = {
    0: <WelcomePage />,
    1: <DashboardPage />,
    2: <Challenge />,
  };
  return <>{pages[selectedPage]}</>;
};

export default App;
