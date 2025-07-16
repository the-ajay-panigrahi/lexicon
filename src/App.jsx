import React, { use, useEffect, useState } from "react";
import WelcomePage from "./components/WelcomePage";
import DashboardPage from "./components/DashboardPage";
import Challenge from "./components/Challenge";
import WORDS from "./utils/VOCAB.json";
import { getWordByIndex, PLAN } from "./utils";

const App = () => {
  const [selectedPage, setSelectedPage] = useState(0);
  const [name, setName] = useState("");
  const [day, setDay] = useState(1);
  const [dateTime, setDateTime] = useState(null);
  const [history, setHistory] = useState([]);
  const [attempts, setAttempts] = useState(0);

  const dayWords = PLAN[day].map(
    (wordIndex) => getWordByIndex(WORDS, wordIndex).word
  );

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
    1: (
      <DashboardPage
        name={name}
        attempts={attempts}
        PLAN={PLAN}
        day={day}
        handleChangePage={handlePageChange}
        dayWords={dayWords}
        dateTime={dateTime}
        history={history}
      />
    ),
    2: <Challenge />,
  };
  return <>{pages[selectedPage]}</>;
};

export default App;
