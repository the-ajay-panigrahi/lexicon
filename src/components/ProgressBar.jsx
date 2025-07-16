import { motion } from "motion/react";

const ProgressBar = ({ text, remainder }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full space-y-2"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-center font-mono text-sm text-zinc-500 dark:text-zinc-400"
      >
        <span className="font-bold text-zinc-800 dark:text-white">{text}</span>
      </motion.div>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ delay: 0.15, duration: 0.4 }}
        className="relative w-full h-3 bg-zinc-200 dark:bg-zinc-700 rounded-md overflow-hidden shadow-inner dark:shadow-md"
      >
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-300 shadow-md"
          style={{ width: `${remainder}%` }}
        ></motion.div>

        <div className="absolute inset-0 grid grid-cols-10 gap-[2px] px-1">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 + item * 0.03 }}
              className="h-full bg-black/10 dark:bg-white/10 rounded-sm backdrop-blur-sm"
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProgressBar;
