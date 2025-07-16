import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { convertMilliseconds, countdownIn24Hours } from "../utils";

const Countdown = ({ handlePageChange, dayWords, dateTime, day }) => {
  const targetMillis = dateTime || Date.UTC(1944, 2, 17, 12, 0, 0);
  const [remainingMS, setRemainingMS] = useState(
    countdownIn24Hours(targetMillis)
  );

  const timer = convertMilliseconds(remainingMS);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingMS(countdownIn24Hours(targetMillis));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetMillis]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-white via-[#f3f4f6] to-[#e5e7eb] dark:from-[#18181b] dark:via-[#0f0f11] dark:to-[#1c1c22] text-zinc-900 dark:text-white rounded-2xl p-6 w-full space-y-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.3)] ring-1 ring-zinc-200 dark:ring-zinc-700 backdrop-blur-sm transition-all duration-300"
    >
      <motion.h1
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="text-xl sm:text-2xl font-bold font-mono text-zinc-800 dark:text-white"
      >
        Day {day}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.15, duration: 0.4 }}
        className="grid grid-cols-2 gap-4 text-left font-mono text-sm"
      >
        <div>
          <p className="text-zinc-500 dark:text-zinc-400 mb-1">
            Time remaining
          </p>
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
            {dateTime
              ? `${Math.abs(timer.hours)}H ${timer.minutes}M ${timer.seconds}S`
              : "23H 59M 59S"}
          </h3>
        </div>
        <div>
          <p className="text-zinc-500 dark:text-zinc-400 mb-1">
            Words for today
          </p>
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
            {dayWords.length}
          </h3>
        </div>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 240, damping: 18 }}
        onClick={() => handlePageChange(2)}
        className="w-full py-2 font-bold font-mono rounded-xl text-white bg-gradient-to-r from-purple-500 to-indigo-500 shadow-md hover:shadow-lg transition-all duration-300 hover:opacity-90 cursor-pointer"
      >
        Start
      </motion.button>
    </motion.div>
  );
};

export default Countdown;
