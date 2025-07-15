import { motion } from "motion/react";
import Stats from "./Stats";
import Countdown from "./Countdown";
import History from "./History";
import Header from "./Header";

const DashboardPage = () => {
  return (
    <main className="min-h-screen w-full bg-white text-zinc-900 dark:bg-[#09090b] dark:text-white transition-colors duration-300">
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
          <Stats />
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
