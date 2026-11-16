import { useEffect, useState } from "react";
import { convertMilliseconds, countdownIn24Hours } from "../utils";
const Countdown = ({ handlePageChange, dayWords, dateTime, day }) => {
  const targetMillis = dateTime || Date.UTC(1944, 2, 17, 12, 0, 0);
  const [remainingMS, setRemainingMS] = useState(
    countdownIn24Hours(targetMillis),
  );
  const timer = convertMilliseconds(remainingMS);
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingMS(countdownIn24Hours(targetMillis));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetMillis]);
  return (
    <div className="countdown-panel panel">
      <h1 className="section-title">Day {day}</h1>

      <div className="countdown-grid">
        <div>
          <p className="micro-label">Time remaining</p>
          <h3 className="countdown-value">
            {dateTime
              ? `${Math.abs(timer.hours)}H ${timer.minutes}M ${timer.seconds}S`
              : "23H 59M 59S"}
          </h3>
        </div>
        <div>
          <p className="micro-label">Words for today</p>
          <h3 className="countdown-value">{dayWords.length}</h3>
        </div>
      </div>

      <button onClick={() => handlePageChange(2)} className="primary-button">
        Start
      </button>
    </div>
  );
};
export default Countdown;
