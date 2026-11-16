import ProgressBar from "./ProgressBar";
import { calcLevel, calculateAccuracy, calculateNewWords } from "../utils";
const Stats = ({ name, day, attempts }) => {
  const wordsSeen = calculateNewWords(day - 1);
  const accuracy = calculateAccuracy(attempts, day) * 100;
  const currentLevel = calcLevel(day);
  const flooredLevel = Math.floor(currentLevel);
  const remainder = (currentLevel - flooredLevel) * 100;
  return (
    <div className="stats-panel panel">
      <div className="stats-greeting">
        <p className="micro-label">Welcome</p>
        <h1 className="username">{name}</h1>
      </div>

      <div className="panel-rule" />

      <div className="stats-grid">
        {[
          {
            label: "Streak 🔥",
            value: day - 1,
          },
          {
            label: "Words seen",
            value: wordsSeen,
          },
          {
            label: "Accuracy (%)",
            value: accuracy.toFixed(1),
          },
        ].map((stat, idx) => (
          <div key={idx} className="metric">
            <p className="metric-label">{stat.label}</p>
            <p className="metric-value">{stat.value}</p>
          </div>
        ))}
      </div>

      <div>
        <ProgressBar text={`lvl ${flooredLevel}`} remainder={remainder} />
      </div>
    </div>
  );
};
export default Stats;
