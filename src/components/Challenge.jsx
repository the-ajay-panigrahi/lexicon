import Header from "./Header";
import ProgressBar from "./ProgressBar";
import { useState } from "react";
import { isEncountered, shuffle } from "../utils";
import DEFINITIONS from "../utils/VOCAB.json";
const ChallengePage = ({
  day,
  dayWords,
  handlePageChange,
  handleIncrementAttempts,
  handleCompleteDay,
}) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [showDefinition, setShowDefinition] = useState(false);
  const [listToLearn, setListToLearn] = useState([
    ...dayWords,
    ...shuffle(dayWords),
    ...shuffle(dayWords),
    ...shuffle(dayWords),
  ]);
  const word = listToLearn[wordIndex];
  const isNewWord =
    showDefinition ||
    (!isEncountered(day, word) && wordIndex < dayWords.length);
  const definition = DEFINITIONS[word];
  const forgotWord = () => {
    setShowDefinition(true);
    setListToLearn([...listToLearn, word]);
  };
  return (
    <main className="challenge-page">
      <section className="challenge-shell">
        <div>
          <Header />
        </div>

        <div className="challenge-panel panel">
          <h1 className="challenge-word">{word}</h1>

          {isNewWord && <p className="definition">{definition}</p>}
          <div className="character-grid">
            {[...definition].map((char, i) => {
              let styleToApply = "bg-zinc-300 dark:bg-zinc-700";
              if (i < inputValue.length) {
                styleToApply =
                  inputValue[i]?.toLowerCase() === char?.toLowerCase()
                    ? "bg-green-500"
                    : "bg-red-500";
              }
              return (
                <div
                  key={i}
                  className={`h-full rounded-sm transition-colors ${styleToApply}`}
                />
              );
            })}
          </div>

          <input
            type="text"
            placeholder="Enter the definition..."
            className="definition-input"
            value={inputValue}
            onChange={(e) => {
              // if a user has entered the correct number of characters, we need to do a few things
              // 1. if the entry is correct, we need to increment attempts and move them on to the next word
              // 2. if the entry is incorrect we need to increment attempts, and also if they
              if (
                e.target.value.length == definition.length &&
                e.target.value.length > inputValue.length
              ) {
                // compare words
                handleIncrementAttempts();
                if (e.target.value.toLowerCase() == definition.toLowerCase()) {
                  // then the user has the correct input
                  if (wordIndex >= listToLearn.length - 1) {
                    handleCompleteDay();
                    return;
                  }
                  setWordIndex(wordIndex + 1);
                  setShowDefinition(false);
                  setInputValue("");
                  return;
                  // check if finished all the words, then end the day, otherwise go to next word
                }
              }
              setInputValue(e.target.value);
            }}
          />

          <div className="challenge-actions">
            <button
              onClick={() => {
                handlePageChange(1);
              }}
              className="secondary-button quit-button"
            >
              Quit
            </button>

            <button
              onClick={forgotWord}
              className="secondary-button forgot-button"
            >
              I forgot
            </button>
          </div>

          <div>
            <ProgressBar
              text={`${wordIndex}/${listToLearn.length}`}
              remainder={(wordIndex * 100) / listToLearn.length}
            />
          </div>
        </div>
      </section>
    </main>
  );
};
export default ChallengePage;
