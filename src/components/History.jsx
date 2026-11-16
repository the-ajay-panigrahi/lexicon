const History = ({ history }) => {
  const historyKeys = Object.keys(history);
  return (
    <div className="history-panel panel">
      <h4 className="section-title">History</h4>

      {historyKeys.length === 0 ? (
        <p className="empty-history">
          You have no attempts! Press <span className="emphasis">Start</span> to
          begin ⭐
        </p>
      ) : (
        historyKeys.map((item, itemIndex) => {
          const dateKey = new Date(item)
            .toString()
            .split(" ")
            .slice(1, 4)
            .join(" ");
          return (
            <div key={itemIndex} className="history-row">
              <div>
                <p className="micro-label">Started</p>
                <h6 className="history-value">{dateKey}</h6>
              </div>
              <div>
                <p className="micro-label">Streak</p>
                <h6 className="history-value">{history[item]}</h6>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
export default History;
