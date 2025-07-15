import Stats from "./Stats";
import Countdown from "./Countdown";
import History from "./History";
import Header from "./Header";

const DashboardPage = () => {
  return (
    <section className="max-w-[700px] mx-auto px-4 py-8">
      <Header />
      <Stats />
      <Countdown />
      <History />
    </section>
  );
};

export default DashboardPage;
