import React, { useEffect, useState } from "react";
import WelcomePage from "./components/WelcomePage";
import DashboardPage from "./components/DashboardPage";
import Challenge from "./components/Challenge";

const App = () => {
  const [selectedPage, setSelectedPage] = useState(0);
  const [name, setName] = useState("");

  const handlePageChange = (pageIndex) => setSelectedPage(pageIndex);

  const handleCreateAccount = () => {
    localStorage.setItem("username", name);
    handlePageChange(1);
  };

  useEffect(() => {
    if (localStorage.getItem("username")) {
      handlePageChange(1);
      setName(localStorage.getItem("username"));
    }
  }, []);

  const pages = {
    0: (
      <WelcomePage
        name={name}
        setName={setName}
        handleAccountCreate={handleCreateAccount}
      />
    ),
    1: <DashboardPage name={name} />,
    2: <Challenge />,
  };
  return <>{pages[selectedPage]}</>;
};

export default App;
