import React, { use, useEffect, useState } from "react";
import WelcomePage from "./components/WelcomePage";
import DashboardPage from "./components/DashboardPage";
import Challenge from "./components/Challenge";
import WORDS from "./utils/VOCAB.json";
import { countdownIn24Hours, getWordByIndex, PLAN } from "./utils";

const App = () => {
  const [selectedPage, setSelectedPage] = useState(0);
  const [name, setName] = useState("");
  const [day, setDay] = useState(1);
  const [dateTime, setDateTime] = useState(null);
  const [history, setHistory] = useState({});
  const [attempts, setAttempts] = useState(0);

  const dayWords = PLAN[day].map(
    (wordIndex) => getWordByIndex(WORDS, wordIndex).word
  );

  const handlePageChange = (pageIndex) => setSelectedPage(pageIndex);

  const handleCreateAccount = () => {
    localStorage.setItem("username", name);
    handlePageChange(1);
  };

  const handleCompleteDay = () => {
    const newDay = day + 1;
    const newDateTime = Date.now();
    localStorage.setItem(
      "day",
      JSON.stringify({
        day: newDay,
        dateTime: newDateTime,
      })
    );
    setDay(newDay);
    setDateTime(newDateTime);
    handlePageChange(1);
  };

  const handleIncrementAttempts = () => {
    // Take the current attempt number, increment it by 1 and save to local storage.
    const newRecord = attempts + 1;
    localStorage.setItem("attempts", newRecord);
    setAttempts(newRecord);
  };

  useEffect(() => {
    if (localStorage.getItem("username")) {
      handlePageChange(1);
      setName(localStorage.getItem("username"));
    }

    if (localStorage.getItem("attempts")) {
      // then we found attempts
      setAttempts(parseInt(localStorage.getItem("attempts")));
    }

    if (localStorage.getItem("history")) {
      setHistory(JSON.parse(localStorage.getItem("history")));
    }

    if (localStorage.getItem("day")) {
      const { day: d, dateTime: dt } = JSON.parse(localStorage.getItem("day"));
      setDateTime(dt);
      setDay(d);

      if (d > 1 && dt) {
        const diff = countdownIn24Hours(dt);
        if (diff < 0) {
          console.log("Failed challenge");
          let newHistory = { ...history };
          const timestamp = new Date(dt);
          const formattedTimestamp = timestamp
            .toString()
            .split(" ")
            .slice(1, 4)
            .join(" ");
          newHistory[formattedTimestamp] = d;
          setHistory(newHistory);
          setDay(1);
          setDateTime(null);
          setAttempts(0);

          localStorage.setItem("attempts", 0);
          localStorage.setItem("history", JSON.stringify(newHistory));
          localStorage.setItem(
            "day",
            JSON.stringify({ day: 1, datetime: null })
          );
        }
      }
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
        handlePageChange={handlePageChange}
        dayWords={dayWords}
        dateTime={dateTime}
        history={history}
      />
    ),
    2: (
      <Challenge
        day={day}
        dayWords={dayWords}
        handlePageChange={handlePageChange}
        handleIncrementAttempts={handleIncrementAttempts}
        handleCompleteDay={handleCompleteDay}
        PLAN={PLAN}
      />
    ),
  };
  return <>{pages[selectedPage]}</>;
};

export default App;
