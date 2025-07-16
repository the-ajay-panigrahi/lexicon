import { motion } from "motion/react";
import Stats from "./Stats";
import Countdown from "./Countdown";
import History from "./History";
import Header from "./Header";

const DashboardPage = (props) => {
  return (
    <main className="min-h-screen w-full bg-white text-zinc-900 dark:bg-[#09090b] dark:text-white transition-colors duration-300 overflow-hidden relative">
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
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="max-w-[700px] mx-auto px-4 py-10 space-y-10"
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Header />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Stats {...props} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Countdown />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <History />
        </motion.div>
      </motion.section>
    </main>
  );
};

export default DashboardPage;
