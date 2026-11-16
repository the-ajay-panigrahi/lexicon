import Stats from "./Stats";
import Countdown from "./Countdown";
import History from "./History";
import Header from "./Header";
const DashboardPage = (props) => {
  return (
    <main className="dashboard-page">
      <section className="dashboard-shell">
        <div>
          <Header />
        </div>

        <div>
          <Stats {...props} />
        </div>

        <div>
          <Countdown {...props} />
        </div>

        <div>
          <History {...props} />
        </div>
      </section>
    </main>
  );
};
export default DashboardPage;
