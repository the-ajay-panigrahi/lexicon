import { motion } from "motion/react";
import Header from "./Header";

const WelcomePage = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6 bg-[#fdfdfd] dark:bg-[#0a0a0c] transition-colors duration-300 overflow-hidden">
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

      <div
        className="relative z-10 w-full max-w-[700px] flex flex-col items-center gap-4 sm:gap-3 md:gap-2 lg:gap-0 px-6 py-10 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 dark:shadow-[0_0_30px_rgba(255,255,255,0.03)] transition-all duration-300"
        style={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        }}
      >
        <Header />

        <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-10 w-full min-h-[300px]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center md:text-left"
          >
            <motion.h2
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent leading-snug mb-3"
            >
              365 days.
              <br /> 365 words.
            </motion.h2>
            <p className="text-zinc-700 dark:text-zinc-400 font-mono text-base leading-relaxed">
              Build your <span className="font-bold">lexicon</span> today.
              <br />
              Start the challenge - one word at a time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
            className="flex-1 max-w-[300px] w-full"
          >
            <div className="overflow-hidden rounded-xl shadow-md border border-zinc-200 dark:border-zinc-700">
              <img
                src="https://images.unsplash.com/photo-1612798705568-61c14cdc5e40?q=80&w=1170&auto=format&fit=crop"
                alt="Lexicon Preview"
                className="object-cover w-full h-full max-h-[250px]"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full space-y-4"
        >
          <motion.input
            whileFocus={{ scale: 1.01 }}
            type="text"
            placeholder="Enter your name..."
            className="w-full px-4 py-3 rounded-md bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-600 border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <motion.button
            whileHover={{ scale: 1.045 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="w-full py-3 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold hover:brightness-110 shadow-md cursor-pointer transition-all duration-100 flex items-center justify-center"
          >
            Start your journey{" "}
            <i className="fa-solid fa-arrow-right-long mt-[0.8px] ml-2"></i>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default WelcomePage;
