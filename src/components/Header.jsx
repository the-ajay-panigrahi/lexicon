import { motion } from "motion/react";
import ThemeBtn from "./ThemeBtn";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between">
      <motion.h1
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        whileHover={{ scale: 1.025 }}
        className="text-3xl font-bold text-zinc-900 dark:text-white"
      >
        Lexicon
      </motion.h1>
      <ThemeBtn />
    </header>
  );
};

export default Header;
