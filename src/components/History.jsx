import { motion } from "motion/react";

const History = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-white via-[#f3f4f6] to-[#e5e7eb] dark:from-[#18181b] dark:via-[#0f0f11] dark:to-[#1c1c22] text-zinc-900 dark:text-white rounded-2xl p-6 w-full space-y-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.3)] ring-1 ring-zinc-200 dark:ring-zinc-700 backdrop-blur-sm transition-all duration-300"
    >
      <motion.h4
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="text-xl font-bold font-mono text-zinc-800 dark:text-white"
      >
        History
      </motion.h4>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-sm font-mono text-zinc-500 dark:text-zinc-400"
      >
        You have no attempts! Press{" "}
        <span className="font-bold text-zinc-800 dark:text-white">Start</span>{" "}
        to begin ⭐
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="bg-white/70 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-4 grid grid-cols-2 gap-4 font-mono"
      >
        <div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">
            Started
          </p>
          <h6 className="text-lg font-bold text-zinc-900 dark:text-white">
            Mar 25 2025
          </h6>
        </div>
        <div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">
            Streak
          </p>
          <h6 className="text-lg font-bold text-zinc-900 dark:text-white">
            53
          </h6>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default History;
