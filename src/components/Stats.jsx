import { motion } from "motion/react";
import ProgressBar from "./ProgressBar";
import { calcLevel, calculateAccuracy, calculateNewWords } from "../utils";

const Stats = ({ name, day, attempts, PLAN }) => {
  const wordsSeen = calculateNewWords(day - 1);
  const accuracy = calculateAccuracy(attempts, day) * 100;

  const currentLevel = calcLevel(day);
  const flooredLevel = Math.floor(currentLevel);
  const remainder = (currentLevel - flooredLevel) * 100;
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-white via-[#f5f6fa] to-[#e6e8f0] dark:from-[#1a1b1f] dark:via-[#0f0f11] dark:to-[#1c1c22] text-zinc-900 dark:text-white rounded-2xl p-6 w-full space-y-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.3)] ring-1 ring-zinc-200 dark:ring-zinc-700 backdrop-blur-sm transition-all duration-300"
    >
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="space-y-1"
      >
        <p className="text-sm font-mono text-zinc-500 dark:text-zinc-400">
          Welcome
        </p>
        <h1 className="text-4xl font-extrabold font-mono tracking-wide bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent dark:text-white">
          {name}
        </h1>
      </motion.div>

      <div className="h-px bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-600 to-transparent" />

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.15, duration: 0.4 }}
        className="grid grid-cols-3 gap-4 text-center"
      >
        {[
          { label: "Streak 🔥", value: day - 1 },
          { label: "Words seen", value: wordsSeen },
          { label: "Accuracy (%)", value: accuracy.toFixed(1) },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="group bg-white/70 dark:bg-zinc-900/70 backdrop-blur-sm rounded-xl px-2 py-3 transition-all duration-300 shadow-sm hover:shadow-md border border-zinc-200 dark:border-zinc-700"
          >
            <p className="text-[11px] sm:text-xs font-mono text-zinc-600 dark:text-zinc-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200 whitespace-nowrap overflow-hidden text-ellipsis">
              {stat.label}
            </p>
            <p className="text-xl font-bold font-mono text-zinc-900 dark:text-white">
              {stat.value}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <ProgressBar text={`lvl ${flooredLevel}`} remainder={remainder} />
      </motion.div>
    </motion.div>
  );
};

export default Stats;
