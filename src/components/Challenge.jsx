import { motion } from "motion/react";
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
  PLAN,
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
    <main className="min-h-screen w-full bg-white text-zinc-900 dark:bg-[#09090b] dark:text-white transition-colors duration-300 overflow-hidden relative flex items-center justify-center">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg
          className="absolute top-[-200px] left-[-150px] w-[900px] h-[900px] text-purple-300 opacity-30 blur-[80px] dark:hidden"
          fill="currentColor"
          viewBox="0 0 200 200"
        >
          <path
            d="M47.6,-75.7C61.3,-65.6,71.6,-51.2,73.2,-36.3C74.8,-21.4,67.7,-6,63.4,9.9C59.2,25.7,57.9,41.9,48.5,53.3C39,64.7,21.4,71.3,2.5,68.2C-16.3,65.1,-32.6,52.2,-47.1,39.4C-61.5,26.6,-74.1,13.8,-72.4,1.5C-70.6,-10.8,-54.5,-21.6,-41.1,-33.8C-27.8,-46.1,-17.3,-59.9,-2.4,-60.3C12.5,-60.7,25.1,-47.5,47.6,-75.7Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg
          className="absolute bottom-[-200px] right-[-150px] w-[800px] h-[800px] text-blue-300 opacity-30 blur-[90px] dark:hidden"
          fill="currentColor"
          viewBox="0 0 200 200"
        >
          <path
            d="M39.5,-59.6C52.4,-50.6,65.5,-42.4,69.6,-30.4C73.6,-18.4,68.5,-2.7,63.3,13.3C58.1,29.2,52.8,45.3,41.3,55.9C29.8,66.4,11.9,71.4,-2.5,74.8C-16.9,78.2,-33.8,80,-46.2,72.7C-58.7,65.4,-66.8,48.9,-65.6,34.2C-64.3,19.5,-53.7,6.6,-51.3,-10.7C-48.9,-28,-54.6,-49.7,-45.4,-60.3C-36.2,-70.8,-18.1,-70.2,-1.4,-68.2C15.2,-66.1,30.4,-62.7,39.5,-59.6Z"
            transform="translate(100 100)"
          />
        </svg>

        <svg
          className="absolute top-[-150px] right-[-150px] w-[850px] h-[850px] text-indigo-500 opacity-[0.15] blur-[80px] hidden dark:block"
          fill="currentColor"
          viewBox="0 0 200 200"
        >
          <path
            d="M44.8,-73.9C58.9,-65.2,70.3,-53.6,71.3,-40.6C72.3,-27.5,63,-13,58.2,-0.5C53.5,12,53.2,23.9,48.2,36.2C43.2,48.6,33.4,61.4,20.3,67.9C7.1,74.4,-9.3,74.5,-23.6,68.8C-37.9,63.2,-50.2,51.9,-56.2,38.4C-62.3,24.8,-62.1,9,-60.1,-7.5C-58.2,-24,-54.6,-41.1,-44.5,-50.9C-34.3,-60.6,-17.1,-63,-0.3,-62.5C16.6,-62.1,33.1,-58.5,44.8,-73.9Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg
          className="absolute bottom-[-160px] left-[-140px] w-[750px] h-[750px] text-fuchsia-600 opacity-10 blur-[100px] hidden dark:block"
          fill="currentColor"
          viewBox="0 0 200 200"
        >
          <path
            d="M37.1,-64.1C48.4,-55.1,57.6,-44.5,61.2,-32.4C64.7,-20.3,62.5,-6.6,58.2,6.9C53.9,20.3,47.5,33.6,37.1,42.9C26.8,52.1,12.4,57.2,-1.5,59.1C-15.5,61,-31.1,59.6,-41.7,51.4C-52.2,43.2,-57.8,28.1,-62.7,12.2C-67.6,-3.7,-71.8,-20.4,-65.1,-32.5C-58.5,-44.6,-41.1,-52.1,-25.3,-58.3C-9.6,-64.5,4.5,-69.4,18.6,-69.4C32.7,-69.5,45.7,-64.6,37.1,-64.1Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        className="max-w-[700px] w-full px-4 py-10 space-y-10 z-10 relative"
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Header />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-white/5 backdrop-blur-xl shadow-xl p-6 space-y-6"
        >
          <motion.h1
            className="text-3xl font-extrabold text-center bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {word}
          </motion.h1>

          {isNewWord && (
            <motion.p
              className="text-zinc-600 dark:text-zinc-400 text-center font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {definition}
            </motion.p>
          )}
          <motion.div
            className="grid grid-cols-[repeat(auto-fit,minmax(6px,1fr))] gap-[3px] w-full h-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
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
          </motion.div>

          <motion.input
            type="text"
            placeholder="Enter the definition..."
            className="w-full px-4 py-3 mt-4 rounded-md bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-600 border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
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

          <motion.div
            className="flex justify-between gap-4 mt-4"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(254,202,202,0.8)",
                color: "#7f1d1d",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                handlePageChange(1);
              }}
              className="flex-1 py-2 rounded-md border border-red-400 text-red-600 dark:text-red-400 font-semibold bg-red-100/30 dark:bg-red-800/10 transition-colors duration-200 cursor-pointer"
            >
              Quit
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(253,224,71,0.8)",
                color: "#78350f",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={forgotWord}
              className="flex-1 py-2 rounded-md border border-yellow-400 text-yellow-600 dark:text-yellow-300 font-semibold bg-yellow-100/30 dark:bg-yellow-800/10 transition-colors duration-200 cursor-pointer"
            >
              I forgot
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <ProgressBar
              text={`${wordIndex}/${listToLearn.length}`}
              remainder={(wordIndex * 100) / listToLearn.length}
            />
          </motion.div>
        </motion.div>
      </motion.section>
    </main>
  );
};

export default ChallengePage;
