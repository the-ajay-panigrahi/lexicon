import Stats from "./Stats";
import Countdown from "./Countdown";
import History from "./History";
import Header from "./Header";

const DashboardPage = () => {
  return (
    <main className="min-h-screen w-full bg-white text-zinc-900 dark:bg-[#09090b] dark:text-white transition-colors duration-300">
      <section className="max-w-[700px] mx-auto px-4 py-10 space-y-10">
        <Header />
        <Stats />
        <Countdown />
        <History />
      </section>
    </main>
  );
};

export default DashboardPage;
